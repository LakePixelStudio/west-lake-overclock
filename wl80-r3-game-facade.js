// Building facade material: a lit PBR surface generated per pixel. Four building types by height and seed (glass tower, office,
// residential with balconies and AC units, street-level shops); windows show a ray-cast room behind the glass.
// Two front ends feed the same fragment code: instanced boxes (the wider city) and true-outline meshes (the Hubin district).
import * as THREE from "./wl80-r3-three-three.module.js";
import { LAND_Y } from "./wl80-r3-game-geo.js";

const VARY = 'varying float fU,fV,fH,fSeed,fRoof; varying vec3 fRd;\n';
const VERT_BOX = `
      vec3 bs=vec3(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz),length(instanceMatrix[2].xyz)), bp=position*bs;
      vec4 bw=modelMatrix*instanceMatrix*vec4(position,1.);
      mat3 br=mat3(instanceMatrix[0].xyz/bs.x,instanceMatrix[1].xyz/bs.y,instanceMatrix[2].xyz/bs.z);
      vec3 be=-((cameraPosition-bw.xyz)*br);
      fH=bs.y; fSeed=seed; fRoof=step(.5,abs(normal.y)); bool xf=abs(normal.x)>.5;
      fU=fRoof>.5?bp.x:((xf?bp.z:bp.x)+seed*37.); fV=fRoof>.5?bp.z:bp.y;
      fRd=xf?vec3(be.z,be.y,-be.x*sign(normal.x)):vec3(be.x,be.y,-be.z*sign(normal.z));`;
const VERT_REAL = `
      vec4 bw=modelMatrix*vec4(position,1.); vec3 be=bw.xyz-cameraPosition;
      fH=fa.z; fSeed=fa.y; fRoof=fa.w;
      fU=fRoof>.5?position.x:fa.x+fa.y*37.; fV=fRoof>.5?position.z:position.y-${LAND_Y.toFixed(2)};
      fRd=vec3(dot(be,vec3(normal.z,0.,-normal.x)),be.y,-dot(be,normal));`;
const FRAG = VARY + `
      vec3 bCol,bEmit; float bRough,bMetal;
      float bh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      vec3 hue3(float h){return .5+.5*cos(6.283*(h+vec3(0.,.33,.67)));}
      void facade(){
        float sd=fract(fSeed), style=floor(fSeed+.001);          // style: 0 auto by height; 1 office, 2 housing, 3 shops, 4 stone-clad mall (in77), 5 hotel, 6 glass
        float H=fH; bEmit=vec3(0.); bMetal=0.; bRough=.85;
        float kind=H>62.?0.:(H<34.?3.:(fract(sd*7.7)<.55?2.:1.));
        if(style>.5) kind=style<1.5?1.:(style<2.5?2.:(style<4.5?3.:(style<5.5?1.:0.)));   // mapped buildings carry their type explicitly
        if(fRoof>.5){ bCol=vec3(.3,.31,.32)*(.8+.3*bh(floor(vec2(fU,fV)*.35)+sd)); return; }
        float u=fU, v=fV;
        float fh=kind>2.5?4.5:(kind<.5?4.:3.3), bw=kind<.5?1.5:(kind<1.5?3.:(kind<2.5?3.6:5.));
        if(style>3.5&&style<4.5){ fh=5.; bw=6.5; }
        vec2 g=vec2(u/bw,v/fh), cell=floor(g), q=fract(g);
        float ground=step(v,fh*(style>3.5&&style<4.5?2.:1.))*step(2.5,kind), win;
        if(kind<.5) win=step(.2,q.y)*step(.035,q.x)*step(q.x,.965);
        else if(kind<1.5) win=step(.3,q.y)*step(q.y,.86)*step(.05,q.x)*step(q.x,.95)*step(.012,abs(q.x-.5));
        else if(kind<2.5) win=step(.3,q.y)*step(q.y,.84)*step(.2,q.x)*step(q.x,.8)*step(.01,abs(q.x-.5));
        else win=mix(step(.34,q.y)*step(q.y,.86)*step(.14,q.x)*step(q.x,.86)*step(.008,abs(q.x-.5)),step(.05,q.x)*step(q.x,.95)*step(.04,q.y)*step(q.y,.7),ground);
        win*=step(v,H-1.1);
        float pal=fract(sd*5.3), streak=bh(vec2(floor(u*2.5),sd)), grime=.86+.14*streak-.1*smoothstep(.3,0.,q.y)*step(1.5,kind);
        vec3 wall=kind<.5?vec3(.1,.11,.12):(kind<1.5?mix(vec3(.55,.56,.57),vec3(.68,.66,.62),pal):(kind<2.5?mix(mix(vec3(.74,.7,.62),vec3(.8,.8,.78),step(.4,pal)),vec3(.66,.5,.42),step(.8,pal)):mix(mix(vec3(.62,.58,.52),vec3(.5,.5,.5),step(.35,pal)),vec3(.5,.36,.3),step(.75,pal))));
        wall*=grime*(1.-.25*step(q.y,.025)*step(.5,kind));
        if(style>3.5&&style<4.5) wall=vec3(.74,.68,.58)*grime*(1.-.2*step(fract(v/.9),.035)-.14*step(fract(u/1.6),.02));   // warm stone cladding with joints
        if(style>4.5&&style<5.5) wall=vec3(.78,.72,.62)*grime;                                                             // hotel: beige stone bands
        wall*=1.-.35*step(H-.35,v);                                                              // coping line on the parapet
        bCol=wall; bRough=kind<.5?.45:.9; bMetal=kind<.5?.7:0.;
        #ifndef REALB
        if(kind>1.5&&kind<2.5){ float bal=step(.5,bh(vec2(cell.x,sd)));
          if(bal>.5){ if(q.y<.07){ bCol=vec3(.82,.8,.76)*grime; win=0.; } else if(q.y<.3&&q.x>.1&&q.x<.9){ bCol=vec3(.2,.26,.3); bRough=.1; bMetal=.5; win=0.; } }
          else if(q.y>.1&&q.y<.24&&q.x>.6&&q.x<.8&&bh(cell+3.)>.4){ bCol=vec3(.8,.8,.78)*(.8+.2*step(.5,fract(q.y*40.))); win=0.; } }
        #endif
        if(ground>.5&&q.y>.74&&q.y<.95&&q.x>.06&&q.x<.94){ float hs=bh(vec2(cell.x,sd*3.)); bCol=mix(.5+.5*cos(6.283*(hs+vec3(0.,.33,.67))),vec3(.9),.35)*.7; bEmit=bCol*.25; win=0.;
          if(style>3.5&&style<4.5){ float lt=step(.2,q.x)*step(q.x,.8)*step(.8,q.y)*step(q.y,.9); bCol=vec3(.07,.06,.05); bEmit=vec3(1.,.82,.55)*.5*lt; } }   // in77: dark fascia with a warm lit name strip
        if(v<.5){ bCol=vec3(.2,.2,.21); win=0.; }
        if(win>.5){
          float rw=kind<.5?bw*4.:bw; vec2 rg=vec2(u/rw,v/fh), rc=floor(rg), rq=fract(rg);
          vec3 p=vec3(rq.x*rw,rq.y*fh,0.), d=normalize(fRd); float D=kind>2.5?8.:5.;
          float tx=d.x>0.?(rw-p.x)/max(d.x,1e-4):p.x/max(-d.x,1e-4), ty=d.y>0.?(fh-p.y)/max(d.y,1e-4):p.y/max(-d.y,1e-4), tz=D/max(d.z,1e-4);
          float t=min(tz,min(tx,ty)); vec3 hp=p+d*t; float rr=bh(rc+sd*13.);
          vec3 room;
          if(t==tz){ room=mix(vec3(.5,.46,.4),vec3(.38,.43,.5),rr); room*=.75+.25*step(.25,fract(hp.x/rw*3.+rr))*step(hp.y/fh,.62); }
          else if(t==ty){ room=d.y>0.?vec3(.85,.85,.82)*(.8+.6*step(.75,fract(hp.z*.7))*step(.3,fract(hp.x*.5))):vec3(.28,.22,.17); }
          else room=vec3(.6,.58,.53)*(.75+.25*rr);
          room*=1.-.5*hp.z/D;
          // furnishings on planes inside the room, far to near, so they parallax against the walls as you walk past
          if(ground>.5){
            float tb=3.4/max(d.z,1e-4); if(tb<t){ vec3 s3=p+d*tb; vec2 sg=vec2(s3.x/.34,s3.y/.46), id=floor(sg), f3=fract(sg); float inUnit=step(.08,fract(s3.x/rw))*step(fract(s3.x/rw),.92)*step(s3.y,2.5);
              room=mix(room,mix(vec3(.5,.47,.43),hue3(bh(id*1.3+sd)),.3)*(.6+.5*bh(id+2.)),inUnit*step(.3,bh(id+rc*7.+sd))*step(.12,f3.x)*step(f3.x,.88)*step(.14,f3.y)*step(f3.y,.8));        // stock on the shelves
              room=mix(room,vec3(.8,.78,.74),inUnit*step(f3.y,.1)); }                                                                                     // shelf boards
            float tl=2./max(d.z,1e-4); if(tl<t){ vec3 s3=p+d*tl; room+=vec3(1.,.9,.7)*smoothstep(.1,.03,length(vec2(fract(s3.x/1.3)-.5,(s3.y-(fh-.9))/1.3)))*1.6; }   // pendant lights
            float ta=1.1/max(d.z,1e-4); if(ta<t){ vec3 s3=p+d*ta; float lx=(fract(s3.x/2.4)-.5)*2.4;                                                  // display tables with goods
              room=mix(room,vec3(.82,.8,.76),min(step(abs(lx),.7)*step(.78,s3.y)*step(s3.y,.85)+step(abs(abs(lx)-.6),.04)*step(s3.y,.8),1.));
              room=mix(room,mix(vec3(.4),hue3(bh(vec2(floor(s3.x/2.4),rc.x+sd))),.35),smoothstep(.15,.11,length(vec2(lx*.8,(s3.y-.99)*1.2)))); }
          } else if(kind<1.5){
            float ta=1.8/max(d.z,1e-4); if(ta<t){ vec3 s3=p+d*ta; float lx=(fract(s3.x/2.2)-.5)*2.2, hh=bh(vec2(floor(s3.x/2.2),rc.y+sd*5.));
              room=mix(room,vec3(.5,.4,.3),step(abs(lx),.75)*step(.68,s3.y)*step(s3.y,.75)+step(abs(abs(lx)-.7),.03)*step(s3.y,.7));                     // desks
              room=mix(room,vec3(.08,.08,.1),step(abs(lx+.35),.2)*step(.45,s3.y)*step(s3.y,1.05)*step(hh,.8));                                           // chairs
              room=mix(room,vec3(.5,.7,1.)*1.6,step(abs(lx-.1),.27)*step(.85,s3.y)*step(s3.y,1.2)*step(.3,hh)); }                                        // monitors
          } else {
            float tsf=2.6/max(d.z,1e-4); if(tsf<t){ vec3 s3=p+d*tsf; room=mix(room,hue3(bh(rc*2.3+sd))*.3+.25,step(abs(s3.x-rw*.42),.95)*step(s3.y,.8)*step(.15,s3.y));   // sofa
              room+=vec3(1.,.8,.5)*smoothstep(.22,.05,length(vec2(s3.x-rw*.78,s3.y-1.45)))*step(.6,rr); }                                                 // floor lamp
            float tc=.2/max(d.z,1e-4); if(tc<t){ vec3 s3=p+d*tc; float cx=s3.x/rw, cur=step(cx,.14+.12*bh(rc+sd))+step(.86-.12*bh(rc*2.+sd),cx);
              room=mix(room,(hue3(bh(rc*3.1+sd))*.3+.5)*(.8+.2*sin(s3.x*38.)),min(cur,1.)); }                                                           // curtains drawn back
          }
          room*=mix(.16,.75,min(step(style>4.5&&style<5.5?.55:.8,rr)+ground,1.));                     // hotels keep more rooms lit
          if(kind>.5&&ground<.5&&bh(rc*1.7+sd)<.28) room=vec3(.6,.58,.52)*.3*(.8+.2*step(.5,fract(q.y*14.)));   // blinds drawn
          float fres=pow(1.-max(d.z,0.),4.);
          bCol=kind<.5?mix(vec3(.2,.27,.33),vec3(.3,.34,.36),fract(sd*9.1)):vec3(.03,.04,.05);
          bRough=.06; bMetal=kind<.5?.9:.25; bEmit=room*(kind<.5?.18:(ground>.5?.8:.45))*(1.-fres);   // shop interiors are brightly lit
        }
      }
`;

export function facadeMaterial(real) {
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.85 });
  if (real) mat.defines = { REALB: '' };
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = (real ? 'attribute vec4 fa;\n' : 'attribute float seed;\n') + VARY + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>' + (real ? VERT_REAL : VERT_BOX));
    sh.fragmentShader = FRAG + sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\n facade(); diffuseColor.rgb=bCol;')
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n roughnessFactor=bRough;')
      .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\n metalnessFactor=bMetal;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance+=bEmit;');
  };
  return mat;
}
