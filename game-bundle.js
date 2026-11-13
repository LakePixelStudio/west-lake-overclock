(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ic="187",Vf=0,th=1,Wf=2,gr=1,Xf=2,hr=3,Fi=0,vn=1,Ut=2,fn=0,vr=1,Fs=2,nh=3,ih=4,yu=5,Jn=100,qf=101,Yf=102,Kf=103,Zf=104,ur=200,Jf=201,Qf=202,jf=203,bu=204,Eu=205,Zo=206,$f=207,Jo=208,ed=209,td=210,nd=211,id=212,sd=213,rd=214,Qo=0,jo=1,$o=2,Sr=3,el=4,tl=5,nl=6,il=7,wu=0,ad=1,od=2,Si=0,sc=1,rc=2,ac=3,Ja=4,oc=5,lc=6,cc=7,Tu=300,Bs=301,yr=302,ho=303,uo=304,ii=1e3,gi=1001,sl=1002,Ot=1003,ld=1004,Vr=1005,on=1006,fo=1007,vi=1008,Mn=1009,Au=1010,Ru=1011,br=1012,hc=1013,si=1014,Bn=1015,Vt=1016,uc=1017,fc=1018,as=1020,Cu=35902,Pu=35899,Lu=1021,Du=1022,Cn=1023,Bi=1026,xi=1027,dc=1028,pc=1029,os=1030,mc=1031,gc=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,fl=37488,dl=37489,Fa=37490,pl=37491,ml=37808,gl=37809,vl=37810,xl=37811,_l=37812,Ml=37813,Sl=37814,yl=37815,bl=37816,El=37817,wl=37818,Tl=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Ll=36495,Dl=36283,Nl=36284,Ba=36285,Il=36286,cd=3200,Nu=3201,za=0,hd=1,Li="",Ht="srgb",Ha="srgb-linear",Ga="linear",_t="srgb",po=7680,ud=519,fd=512,dd=513,pd=514,Iu=515,md=516,gd=517,Uu=518,Ou=519,vd=35044,sh="300 es",zn=2e3,Er=2001;function xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){const i=ka("canvas");return i.style.display="block",i}const rh={};function ah(...i){const e="THREE."+i.shift();console.log(e,...i)}function Fu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Fu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=Fu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){const e=i.join(" ");e in rh||(rh[e]=!0,Je(...i))}function Md(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Sd={[Qo]:Qo,[$o]:nl,[el]:el,[Sr]:tl,[jo]:jo,[nl]:$o,[il]:il,[tl]:Sr};class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,Ul=180/Math.PI;function Xs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function yd(i,e){return(i%e+e)%e}function go(i,e,t){return(1-t)*i+t*e}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ed(i,e){if(e.constructor===Float32Array)return i;const t=vc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function wd(i,e){if(e.constructor===Float32Array)return i;const t=vc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Hc=class Hc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hc.prototype.isVector2=!0;let fe=Hc;class fs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],S=r[a+3];if(u!==S||l!==f||c!==p||h!==g){let m=l*f+c*p+h*g+u*S;m<0&&(f=-f,p=-p,g=-g,S=-S,m=-m);let d=1-o;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);d=Math.sin(d*x)/M,o=Math.sin(o*x)/M,l=l*d+f*o,c=c*d+p*o,h=h*d+g*o,u=u*d+S*o}else{l=l*d+f*o,c=c*d+p*o,h=h*d+g*o,u=u*d+S*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gc=class Gc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gc.prototype.isVector3=!0;let B=Gc;const vo=new B,oh=new fs,kc=class kc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],S=s[0],m=s[3],d=s[6],x=s[1],M=s[4],_=s[7],w=s[2],T=s[5],v=s[8];return r[0]=a*S+o*x+l*w,r[3]=a*m+o*M+l*T,r[6]=a*d+o*_+l*v,r[1]=c*S+h*x+u*w,r[4]=c*m+h*M+u*T,r[7]=c*d+h*_+u*v,r[2]=f*S+p*x+g*w,r[5]=f*m+p*M+g*T,r[8]=f*d+p*_+g*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=u*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=f*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kc.prototype.isMatrix3=!0;let Qe=kc;const xo=new Qe,lh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){const i={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ha]:{primaries:e,whitePoint:n,transfer:Ga,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}const ht=Td();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ps;class Ad{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=ka("canvas")),ps.width=e.width,ps.height=e.height;const s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rd=0;class xc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let Cd=0;const Mo=new B;class Jt extends us{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=gi,s=gi,r=on,a=vi,o=Cn,l=Mn,c=Jt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Xs(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Tu;Jt.DEFAULT_ANISOTROPY=1;const Vc=class Vc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,_=(p+1)/2,w=(d+1)/2,T=(h+f)/4,v=(u+S)/4,y=(g+m)/4;return M>_&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=v/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=v/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-S)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;let Ct=Vc;class Pd extends us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new xc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends Pd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bu extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ld extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Za=class Za{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,S,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Za().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,g=o*h,S=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,S=c*u;t[0]=f+S*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,S=c*u;t[0]=f-S*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,g=o*h,S=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+S,t[1]=l*u,t[5]=S*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=S-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-S*u}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+S,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=S*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dd,e,Nd)}lookAt(e,t,n){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ti.crossVectors(n,Sn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ti.crossVectors(n,Sn)),Ti.normalize(),Wr.crossVectors(Sn,Ti),s[0]=Ti.x,s[4]=Wr.x,s[8]=Sn.x,s[1]=Ti.y,s[5]=Wr.y,s[9]=Sn.y,s[2]=Ti.z,s[6]=Wr.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],S=n[6],m=n[10],d=n[14],x=n[3],M=n[7],_=n[11],w=n[15],T=s[0],v=s[4],y=s[8],A=s[12],L=s[1],O=s[5],G=s[9],N=s[13],C=s[2],F=s[6],z=s[10],P=s[14],Y=s[3],H=s[7],Q=s[11],ne=s[15];return r[0]=a*T+o*L+l*C+c*Y,r[4]=a*v+o*O+l*F+c*H,r[8]=a*y+o*G+l*z+c*Q,r[12]=a*A+o*N+l*P+c*ne,r[1]=h*T+u*L+f*C+p*Y,r[5]=h*v+u*O+f*F+p*H,r[9]=h*y+u*G+f*z+p*Q,r[13]=h*A+u*N+f*P+p*ne,r[2]=g*T+S*L+m*C+d*Y,r[6]=g*v+S*O+m*F+d*H,r[10]=g*y+S*G+m*z+d*Q,r[14]=g*A+S*N+m*P+d*ne,r[3]=x*T+M*L+_*C+w*Y,r[7]=x*v+M*O+_*F+w*H,r[11]=x*y+M*G+_*z+w*Q,r[15]=x*A+M*N+_*P+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],S=e[7],m=e[11],d=e[15],x=l*p-c*f,M=o*p-c*u,_=o*f-l*u,w=a*p-c*h,T=a*f-l*h,v=a*u-o*h;return t*(S*x-m*M+d*_)-n*(g*x-m*w+d*T)+s*(g*M-S*w+d*v)-r*(g*_-S*T+m*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],S=e[13],m=e[14],d=e[15],x=t*o-n*a,M=t*l-s*a,_=t*c-r*a,w=n*l-s*o,T=n*c-r*o,v=s*c-r*l,y=h*S-u*g,A=h*m-f*g,L=h*d-p*g,O=u*m-f*S,G=u*d-p*S,N=f*d-p*m,C=x*N-M*G+_*O+w*L-T*A+v*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=(o*N-l*G+c*O)*F,e[1]=(s*G-n*N-r*O)*F,e[2]=(S*v-m*T+d*w)*F,e[3]=(f*T-u*v-p*w)*F,e[4]=(l*L-a*N-c*A)*F,e[5]=(t*N-s*L+r*A)*F,e[6]=(m*_-g*v-d*M)*F,e[7]=(h*v-f*_+p*M)*F,e[8]=(a*G-o*L+c*y)*F,e[9]=(n*L-t*G-r*y)*F,e[10]=(g*T-S*_+d*x)*F,e[11]=(u*_-h*T-p*x)*F,e[12]=(o*A-a*O-l*y)*F,e[13]=(t*O-n*A+s*y)*F,e[14]=(S*M-g*w-m*x)*F,e[15]=(h*w-u*M+f*x)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,S=a*h,m=a*u,d=o*u,x=l*c,M=l*h,_=l*u,w=n.x,T=n.y,v=n.z;return s[0]=(1-(S+d))*w,s[1]=(p+_)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+d))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+M)*v,s[9]=(m-x)*v,s[10]=(1-(f+S))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ms.set(s[0],s[1],s[2]).length();const o=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);const c=1/a,h=1/o,u=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=zn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===zn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Er)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=zn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===zn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===Er)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Za.prototype.isMatrix4=!0;let ut=Za;const ms=new B,Dn=new ut,Dd=new B(0,0,0),Nd=new B(1,1,1),Ti=new B,Wr=new B,Sn=new B,hh=new ut,uh=new fs;class zi{constructor(e=0,t=0,n=0,s=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uh.setFromEuler(this),this.setFromQuaternion(uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Id=0;const fh=new B,gs=new fs,oi=new ut,Xr=new B,js=new B,Ud=new B,Od=new fs,dh=new B(1,0,0),ph=new B(0,1,0),mh=new B(0,0,1),gh={type:"added"},Fd={type:"removed"},vs={type:"childadded",child:null},So={type:"childremoved",child:null};class It extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new B,t=new zi,n=new fs,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Qe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(js,Xr,this.up):oi.lookAt(Xr,js,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(oi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),vs.child=e,this.dispatchEvent(vs),vs.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,Ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new B(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kt extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},qr={h:0,s:0,l:0};function bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=yd(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bo(a,r,e+1/3),this.g=bo(a,r,e),this.b=bo(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ht.workingToColorSpace(nn.copy(this),e),Math.round(ot(nn.r*255,0,255))*65536+Math.round(ot(nn.g*255,0,255))*256+Math.round(ot(nn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(nn.copy(this),t);const n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ht){ht.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,s=nn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(qr);const n=go(Ai.h,qr.h,t),s=go(Ai.s,qr.s,t),r=go(Ai.l,qr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ye;Ye.NAMES=zu;class Mc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hu extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nn=new B,li=new B,Eo=new B,ci=new B,xs=new B,_s=new B,vh=new B,wo=new B,To=new B,Ao=new B,Ro=new Ct,Co=new Ct,Po=new Ct;class On{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),li.subVectors(n,t),Eo.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(li),l=Nn.dot(Eo),c=li.dot(li),h=li.dot(Eo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),li.subVectors(e,t),Nn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;xs.subVectors(s,n),_s.subVectors(r,n),wo.subVectors(e,n);const l=xs.dot(wo),c=_s.dot(wo);if(l<=0&&c<=0)return t.copy(n);To.subVectors(e,s);const h=xs.dot(To),u=_s.dot(To);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(xs,a);Ao.subVectors(e,r);const p=xs.dot(Ao),g=_s.dot(Ao);if(g>=0&&p<=g)return t.copy(r);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(_s,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return vh.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(vh,o);const d=1/(m+S+f);return a=S*d,o=f*d,t.copy(n).addScaledVector(xs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Kr.subVectors(this.max,$s),Ms.subVectors(e.a,$s),Ss.subVectors(e.b,$s),ys.subVectors(e.c,$s),Ri.subVectors(Ss,Ms),Ci.subVectors(ys,Ss),Xi.subVectors(Ms,ys);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Xi.z,Xi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Xi.z,0,-Xi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Xi.y,Xi.x,0];return!Lo(t,Ms,Ss,ys,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Ms,Ss,ys,Kr))?!1:(Zr.crossVectors(Ri,Ci),t=[Zr.x,Zr.y,Zr.z],Lo(t,Ms,Ss,ys,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new B,new B,new B,new B,new B,new B,new B,new B],In=new B,Yr=new Pn,Ms=new B,Ss=new B,ys=new B,Ri=new B,Ci=new B,Xi=new B,$s=new B,Kr=new B,Zr=new B,qi=new B;function Lo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);const o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bt=new B,Jr=new fe;let zd=0;class Hn extends us{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vd,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=e!==void 0?vc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ed(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):wd(e,this.array)}}class Gu extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ku extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hd=new Pn,er=new B,Do=new B;class qs{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Do)),this.expandByPoint(er.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gd=0;const An=new ut,No=new It,bs=new B,yn=new Pn,tr=new Pn,Zt=new B;class wt extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?ku:Gu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(yn.min,tr.min),yn.expandByPoint(Zt),Zt.addVectors(yn.max,tr.max),yn.expandByPoint(Zt)):(yn.expandByPoint(tr.min),yn.expandByPoint(tr.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Zt.add(bs)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)o[A]=new B,l[A]=new B;const h=new B,u=new B,f=new B,p=new fe,g=new fe,S=new fe,m=new B,d=new B;function x(A,L,O){c[A]=c[L]=c[O]=1,h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),f.fromBufferAttribute(n,O),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,L),S.fromBufferAttribute(r,O),u.sub(h),f.sub(h),g.sub(p),S.sub(p);const G=1/(g.x*S.y-S.x*g.y);isFinite(G)&&(m.copy(u).multiplyScalar(S.y).addScaledVector(f,-g.y).multiplyScalar(G),d.copy(f).multiplyScalar(g.x).addScaledVector(u,-S.x).multiplyScalar(G),o[A].add(m),o[L].add(m),o[O].add(m),l[A].add(d),l[L].add(d),l[O].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let A=0,L=M.length;A<L;++A){const O=M[A],G=O.start,N=O.count;for(let C=G,F=G+N;C<F;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const _=new B,w=new B,T=new B,v=new B;function y(A){T.fromBufferAttribute(s,A),v.copy(T);const L=o[A];_.copy(L),_.sub(T.multiplyScalar(T.dot(L))).normalize(),w.crossVectors(v,L);const G=w.dot(l[A])<0?-1:1;a.setXYZW(A,_.x,_.y,_.z,G)}for(let A=0,L=n.count;A<L;++A)c[A]&&y(A);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Hn(f,h,u)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new B,kd=new B,Vd=new Qe;class pi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Io.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vd.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wd=0;class ds extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=vr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Eu,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ui=new B,Uo=new B,Qr=new B,jr=new B;class Sc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uo.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=jr.dot(this.direction),l=-jr.dot(Qr),c=jr.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const S=1/h;u*=S,f*=S,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uo).addScaledVector(Qr,f),p}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,d=n.x-a.x,x=n.y-a.y,M=n.z-a.z,_=Math.abs(l),w=Math.abs(c),T=Math.abs(h);let v,y,A,L,O,G,N,C,F,z,P,Y;if(_>=w&&_>=T?(A=l,G=u,F=g,Y=d,l>=0?(v=c,y=h,L=f,O=p,N=S,C=m,z=x,P=M):(v=h,y=c,L=p,O=f,N=m,C=S,z=M,P=x)):w>=T?(A=c,G=f,F=S,Y=x,c>=0?(v=h,y=l,L=p,O=u,N=m,C=g,z=M,P=d):(v=l,y=h,L=u,O=p,N=g,C=m,z=d,P=M)):(A=h,G=p,F=m,Y=M,h>=0?(v=l,y=c,L=u,O=f,N=g,C=S,z=d,P=x):(v=c,y=l,L=f,O=u,N=S,C=g,z=x,P=d)),A===0)return null;const H=v/A,Q=y/A,ne=1/A,pe=L-H*G,Ne=O-Q*G,ie=N-H*F,xe=C-Q*F,Le=z-H*Y,Te=P-Q*Y,X=Le*xe-Te*ie,I=pe*Te-Ne*Le,K=ie*Ne-xe*pe;if(s){if(X<0||I<0||K<0)return null}else if((X<0||I<0||K<0)&&(X>0||I>0||K>0))return null;const R=X+I+K;if(R===0)return null;const W=ne*(X*G+I*F+K*Y);return(R>0?W<0:W>0)?null:this.at(W/R,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Or extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xh=new ut,Yi=new Sc,$r=new qs,_h=new B,ea=new B,ta=new B,na=new B,Oo=new B,ia=new B,Mh=new B,sa=new B;class gt extends It{constructor(e=new wt,t=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,e),a?ia.addScaledVector(Oo,h):ia.addScaledVector(Oo.sub(t),h))}t.add(ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!($r.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere($r,_h)===null||Yi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(xh.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(xh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){const m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,w=M;_<w;_+=3){const T=o.getX(_),v=o.getX(_+1),y=o.getX(_+2);s=ra(this,d,e,n,c,h,u,T,v,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=ra(this,a,e,n,c,h,u,x,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){const m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,w=M;_<w;_+=3){const T=_,v=_+1,y=_+2;s=ra(this,d,e,n,c,h,u,T,v,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const x=m,M=m+1,_=m+2;s=ra(this,a,e,n,c,h,u,x,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Xd(i,e,t,n,s,r,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Fi,o),l===null)return null;sa.copy(o),sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:i}}function ra(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ea),i.getVertexPosition(l,ta),i.getVertexPosition(c,na);const h=Xd(i,e,t,n,ea,ta,na,Mh);if(h){const u=new B;On.getBarycoord(Mh,ea,ta,na,u),s&&(h.uv=On.getInterpolatedAttribute(s,o,l,c,u,new fe)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,l,c,u,new fe)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};On.getNormal(ea,ta,na,f.normal),h.face=f,h.barycoord=u}return h}class Fr extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,h=Ot,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends Hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new ut,Sh=new ut,aa=[],yh=new Pn,qd=new ut,nr=new gt,ir=new qs;class _n extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),yh.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(yh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),ir.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Sh.multiplyMatrices(n,Es),nr.matrixWorld=Sh,nr.raycast(e,aa);for(let a=0,o=aa.length;a<o;a++){const l=aa[a];l.instanceId=r,l.object=this,t.push(l)}aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(s*this.count),s,this.count,dc,Bn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ki=new qs,Yd=new fe(.5,.5),oa=new B;class wr{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],S=r[9],m=r[10],d=r[11],x=r[12],M=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,d-g,w-x).normalize(),s[1].setComponents(c+a,p+h,d+g,w+x).normalize(),s[2].setComponents(c+o,p+u,d+S,w+M).normalize(),s[3].setComponents(c-o,p-u,d-S,w-M).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,p-f,d-m,w-_).normalize();else if(s[4].setComponents(c-l,p-f,d-m,w-_).normalize(),t===zn)s[5].setComponents(c+l,p+f,d+m,w+_).normalize();else if(t===Er)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);const t=Yd.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bh=new ut;class yc{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];bh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new wr),n[s].setFromProjectionMatrix(bh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new wr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new yc().copy(this)}}class Vu extends ds{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eh=new ut,Fl=new Sc,la=new qs,ca=new B;class Kd extends It{constructor(e=new wt,t=new Vu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Eh.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(Eh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,S=p;g<S;g++){const m=c.getX(g);ca.fromBufferAttribute(u,m),wh(ca,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,S=p;g<S;g++)ca.fromBufferAttribute(u,g),wh(ca,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wh(i,e,t,n,s,r,a){const o=Fl.distanceSqToPoint(i);if(o<t){const l=new B;Fl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wu extends Jt{constructor(e=[],t=Bs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bi extends Jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends Jt{constructor(e,t,n=si,s,r,a,o=Ot,l=Ot,c,h=Bi,u=1){if(h!==Bi&&h!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Xu extends ls{constructor(e,t=si,n=Bs,s,r,a=Ot,o=Ot,l,c=Bi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qu extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tt extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function g(S,m,d,x,M,_,w,T,v,y,A){const L=_/v,O=w/y,G=_/2,N=w/2,C=T/2,F=v+1,z=y+1;let P=0,Y=0;const H=new B;for(let Q=0;Q<z;Q++){const ne=Q*O-N;for(let pe=0;pe<F;pe++){const Ne=pe*L-G;H[S]=Ne*x,H[m]=ne*M,H[d]=C,c.push(H.x,H.y,H.z),H[S]=0,H[m]=0,H[d]=T>0?1:-1,h.push(H.x,H.y,H.z),u.push(pe/v),u.push(1-Q/y),P+=1}}for(let Q=0;Q<y;Q++)for(let ne=0;ne<v;ne++){const pe=f+ne+F*Q,Ne=f+ne+F*(Q+1),ie=f+(ne+1)+F*(Q+1),xe=f+(ne+1)+F*Q;l.push(pe,Ne,xe),l.push(Ne,ie,xe),Y+=6}o.addGroup(p,Y,A),p+=Y,f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bc extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new B,h=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ft extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const S=[],m=n/2;let d=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(p,2));function x(){const _=new B,w=new B;let T=0;const v=(t-e)/n;for(let y=0;y<=r;y++){const A=[],L=y/r,O=L*(t-e)+e;for(let G=0;G<=s;G++){const N=G/s,C=N*l+o,F=Math.sin(C),z=Math.cos(C);w.x=O*F,w.y=-L*n+m,w.z=O*z,u.push(w.x,w.y,w.z),_.set(F,v,z).normalize(),f.push(_.x,_.y,_.z),p.push(N,1-L),A.push(g++)}S.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){const L=S[A][y],O=S[A+1][y],G=S[A+1][y+1],N=S[A][y+1];(e>0||A!==0)&&(h.push(L,O,N),T+=3),(t>0||A!==r-1)&&(h.push(O,G,N),T+=3)}c.addGroup(d,T,0),d+=T}function M(_){const w=g,T=new fe,v=new B;let y=0;const A=_===!0?e:t,L=_===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*L,0),f.push(0,L,0),p.push(.5,.5),g++;const O=g;for(let G=0;G<=s;G++){const C=G/s*l+o,F=Math.cos(C),z=Math.sin(C);v.x=A*z,v.y=m*L,v.z=A*F,u.push(v.x,v.y,v.z),f.push(0,L,0),T.x=F*.5+.5,T.y=z*.5*L+.5,p.push(T.x,T.y),g++}for(let G=0;G<s;G++){const N=w+G,C=O+G;_===!0?h.push(C,C+1,N):h.push(C+1,C,N),y+=3}c.addGroup(d,y,_===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ec extends ft{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ec(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new fe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,s=[],r=[],a=[],o=new B,l=new ut;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ot(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ot(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class wc extends ri{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zd extends wc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Tc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Th=new B,Ah=new B,Fo=new Tc,Bo=new Tc,zo=new Tc;class Qa extends ri{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ah.subVectors(s[0],s[1]).add(s[0]),c=Ah);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Th.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Th),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),S=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Fo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,S,m),Bo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,S,m),zo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Bo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),zo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Fo.calc(l),Bo.calc(l),zo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rh(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Jd(i,e){const t=1-i;return t*t*e}function Qd(i,e){return 2*(1-i)*i*e}function jd(i,e){return i*i*e}function xr(i,e,t,n){return Jd(i,e)+Qd(i,t)+jd(i,n)}function $d(i,e){const t=1-i;return t*t*t*e}function ep(i,e){const t=1-i;return 3*t*t*i*e}function tp(i,e){return 3*(1-i)*i*i*e}function np(i,e){return i*i*i*e}function _r(i,e,t,n,s){return $d(i,e)+ep(i,t)+tp(i,n)+np(i,s)}class Yu extends ri{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ip extends ri{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y),_r(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ku extends ri{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends ri{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zu extends ri{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ac extends ri{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y),xr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Rh(o,l.x,c.x,h.x,u.x),Rh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:Zd,CatmullRomCurve3:Qa,CubicBezierCurve:Yu,CubicBezierCurve3:ip,EllipseCurve:wc,LineCurve:Ku,LineCurve3:sp,QuadraticBezierCurve:Zu,QuadraticBezierCurve3:Ac,SplineCurve:Ju});class rp extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Va[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Bl extends rp{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ku(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Zu(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Yu(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ju(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new wc(e,t,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ja extends Bl{constructor(e){super(e),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Bl().fromJSON(s))}return this}}function ap(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Qu(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=up(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<s;f+=t){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Tr(r,a,t,o,l,c,0),a}function Qu(i,e,t,n,s){let r;if(s===yp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ch(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ch(a/n|0,i[a],i[a+1],r);return r&&zs(r,r.next)&&(Rr(r),r=r.next),r}function cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zs(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Tr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&gp(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?lp(i,n,s,r):op(i)){e.push(l.i,i.i,c.i),Rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=cp(cs(i),e),Tr(i,e,t,n,s,r,2)):a===2&&hp(i,e,t,n,s,r):Tr(cs(i),e,t,n,s,r,1);break}}}function op(i){const e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&fr(s,o,r,l,a,c,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lp(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Lt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),S=Math.max(o,l,c),m=Math.max(h,u,f),d=zl(p,g,e,t,n),x=zl(S,m,e,t,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=d&&_&&_.z<=x;){if(M.x>=p&&M.x<=S&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&fr(o,h,l,u,c,f,M.x,M.y)&&Lt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&fr(o,h,l,u,c,f,_.x,_.y)&&Lt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=S&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&fr(o,h,l,u,c,f,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&fr(o,h,l,u,c,f,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function cp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!zs(n,s)&&$u(n,t,t.next,s)&&Ar(n,s)&&Ar(s,n)&&(e.push(n.i,t.i,s.i),Rr(t),Rr(t.next),t=i=s),t=t.next}while(t!==i);return cs(t)}function hp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_p(a,o)){let l=ef(a,o);a=cs(a,a.next),l=cs(l,l.next),Tr(a,e,t,n,s,r,0),Tr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function up(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Qu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(xp(c))}s.sort(fp);for(let r=0;r<s.length;r++)t=dp(s[r],t);return t}function fp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function dp(i,e){const t=pp(i,e);if(!t)return e;const n=ef(t,i);return cs(n,n.next),cs(t,t.next)}function pp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(zs(i,t))return t;do{if(zs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ju(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Ar(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&mp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function mp(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function gp(i,e,t,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vp(s)}function vp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function zl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ju(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function fr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ju(i,e,t,n,s,r,a,o)}function _p(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Mp(i,e)&&(Ar(i,e)&&Ar(e,i)&&Sp(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||zs(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zs(i,e){return i.x===e.x&&i.y===e.y}function $u(i,e,t,n){const s=ua(Lt(i,e,t)),r=ua(Lt(i,e,n)),a=ua(Lt(t,n,i)),o=ua(Lt(t,n,e));return!!(s!==r&&a!==o||s===0&&ha(i,t,e)||r===0&&ha(i,n,e)||a===0&&ha(t,i,n)||o===0&&ha(t,e,n))}function ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function Mp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$u(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ar(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function Sp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ef(i,e){const t=Hl(i.i,i.x,i.y),n=Hl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ch(i,e,t,n){const s=Hl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class bp{static triangulate(e,t,n=2){return ap(e,t,n)}}class Qn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ph(e),Lh(n,e);let a=e.length;t.forEach(Ph);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Lh(n,t[l]);const o=bp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ph(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Rc extends wt{constructor(e=new ja([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Ep;let M,_=!1,w,T,v,y;if(d){M=d.getSpacedPoints(h),_=!0,f=!1;const U=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(h,U),T=new B,v=new B,y=new B}f||(m=0,p=0,g=0,S=0);const A=o.extractPoints(c);let L=A.shape;const O=A.holes;if(!Qn.isClockWise(L)){L=L.reverse();for(let U=0,Z=O.length;U<Z;U++){const ee=O[U];Qn.isClockWise(ee)&&(O[U]=ee.reverse())}}function N(U){const ee=10000000000000001e-36;let ae=U[0];for(let re=1;re<=U.length;re++){const Me=re%U.length,ge=U[Me],Ae=ge.x-ae.x,Be=ge.y-ae.y,Fe=Ae*Ae+Be*Be,k=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(ae.x),Math.abs(ae.y)),nt=ee*k*k;if(Fe<=nt){U.splice(Me,1),re--;continue}ae=ge}}N(L),O.forEach(N);const C=O.length,F=L;for(let U=0;U<C;U++){const Z=O[U];L=L.concat(Z)}function z(U,Z,ee){return Z||mt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(Z,ee)}const P=L.length;function Y(U,Z,ee){let ae,re,Me;const ge=U.x-Z.x,Ae=U.y-Z.y,Be=ee.x-U.x,Fe=ee.y-U.y,k=ge*ge+Ae*Ae,nt=ge*Fe-Ae*Be;if(Math.abs(nt)>Number.EPSILON){const qe=Math.sqrt(k),it=Math.sqrt(Be*Be+Fe*Fe),de=Z.x-Ae/qe,$e=Z.y+ge/qe,ke=ee.x-Fe/it,Ve=ee.y+Be/it,D=((ke-de)*Fe-(Ve-$e)*Be)/(ge*Fe-Ae*Be);ae=de+ge*D-U.x,re=$e+Ae*D-U.y;const b=ae*ae+re*re;if(b<=2)return new fe(ae,re);Me=Math.sqrt(b/2)}else{let qe=!1;ge>Number.EPSILON?Be>Number.EPSILON&&(qe=!0):ge<-Number.EPSILON?Be<-Number.EPSILON&&(qe=!0):Math.sign(Ae)===Math.sign(Fe)&&(qe=!0),qe?(ae=-Ae,re=ge,Me=Math.sqrt(k)):(ae=ge,re=Ae,Me=Math.sqrt(k/2))}return new fe(ae/Me,re/Me)}const H=[];for(let U=0,Z=F.length,ee=Z-1,ae=U+1;U<Z;U++,ee++,ae++)ee===Z&&(ee=0),ae===Z&&(ae=0),H[U]=Y(F[U],F[ee],F[ae]);const Q=[];let ne,pe=H.concat();for(let U=0,Z=C;U<Z;U++){const ee=O[U];ne=[];for(let ae=0,re=ee.length,Me=re-1,ge=ae+1;ae<re;ae++,Me++,ge++)Me===re&&(Me=0),ge===re&&(ge=0),ne[ae]=Y(ee[ae],ee[Me],ee[ge]);Q.push(ne),pe=pe.concat(ne)}let Ne;if(m===0)Ne=Qn.triangulateShape(F,O);else{const U=[],Z=[];for(let ee=0;ee<m;ee++){const ae=ee/m,re=p*Math.cos(ae*Math.PI/2),Me=g*Math.sin(ae*Math.PI/2)+S;for(let ge=0,Ae=F.length;ge<Ae;ge++){const Be=z(F[ge],H[ge],Me);I(Be.x,Be.y,-re),ae===0&&U.push(Be)}for(let ge=0,Ae=C;ge<Ae;ge++){const Be=O[ge];ne=Q[ge];const Fe=[];for(let k=0,nt=Be.length;k<nt;k++){const qe=z(Be[k],ne[k],Me);I(qe.x,qe.y,-re),ae===0&&Fe.push(qe)}ae===0&&Z.push(Fe)}}Ne=Qn.triangulateShape(U,Z)}const ie=Ne.length,xe=g+S;for(let U=0;U<P;U++){const Z=f?z(L[U],pe[U],xe):L[U];_?(v.copy(w.normals[0]).multiplyScalar(Z.x),T.copy(w.binormals[0]).multiplyScalar(Z.y),y.copy(M[0]).add(v).add(T),I(y.x,y.y,y.z)):I(Z.x,Z.y,0)}for(let U=1;U<=h;U++)for(let Z=0;Z<P;Z++){const ee=f?z(L[Z],pe[Z],xe):L[Z];_?(v.copy(w.normals[U]).multiplyScalar(ee.x),T.copy(w.binormals[U]).multiplyScalar(ee.y),y.copy(M[U]).add(v).add(T),I(y.x,y.y,y.z)):I(ee.x,ee.y,u/h*U)}for(let U=m-1;U>=0;U--){const Z=U/m,ee=p*Math.cos(Z*Math.PI/2),ae=g*Math.sin(Z*Math.PI/2)+S;for(let re=0,Me=F.length;re<Me;re++){const ge=z(F[re],H[re],ae);I(ge.x,ge.y,u+ee)}for(let re=0,Me=O.length;re<Me;re++){const ge=O[re];ne=Q[re];for(let Ae=0,Be=ge.length;Ae<Be;Ae++){const Fe=z(ge[Ae],ne[Ae],ae);_?I(Fe.x,Fe.y+M[h-1].y,M[h-1].x+ee):I(Fe.x,Fe.y,u+ee)}}}Le(),Te();function Le(){const U=s.length/3;if(f){let Z=0,ee=P*Z;for(let ae=0;ae<ie;ae++){const re=Ne[ae];K(re[2]+ee,re[1]+ee,re[0]+ee)}Z=h+m*2,ee=P*Z;for(let ae=0;ae<ie;ae++){const re=Ne[ae];K(re[0]+ee,re[1]+ee,re[2]+ee)}}else{for(let Z=0;Z<ie;Z++){const ee=Ne[Z];K(ee[2],ee[1],ee[0])}for(let Z=0;Z<ie;Z++){const ee=Ne[Z];K(ee[0]+P*h,ee[1]+P*h,ee[2]+P*h)}}n.addGroup(U,s.length/3-U,0)}function Te(){const U=s.length/3;let Z=0;X(F,Z),Z+=F.length;for(let ee=0,ae=O.length;ee<ae;ee++){const re=O[ee];X(re,Z),Z+=re.length}n.addGroup(U,s.length/3-U,1)}function X(U,Z){let ee=U.length;for(;--ee>=0;){const ae=ee;let re=ee-1;re<0&&(re=U.length-1);for(let Me=0,ge=h+m*2;Me<ge;Me++){const Ae=P*Me,Be=P*(Me+1),Fe=Z+ae+Ae,k=Z+re+Ae,nt=Z+re+Be,qe=Z+ae+Be;R(Fe,k,nt,qe)}}}function I(U,Z,ee){l.push(U),l.push(Z),l.push(ee)}function K(U,Z,ee){W(U),W(Z),W(ee);const ae=s.length/3,re=x.generateTopUV(n,s,ae-3,ae-2,ae-1);J(re[0]),J(re[1]),J(re[2])}function R(U,Z,ee,ae){W(U),W(Z),W(ae),W(Z),W(ee),W(ae);const re=s.length/3,Me=x.generateSideWallUV(n,s,re-6,re-3,re-2,re-1);J(Me[0]),J(Me[1]),J(Me[3]),J(Me[1]),J(Me[2]),J(Me[3])}function W(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function J(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Va[s.type]().fromJSON(s)),new Rc(n,e.options)}}const Ep={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new fe(r,a),new fe(o,l),new fe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],S=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-u),new fe(f,1-g),new fe(S,1-d)]:[new fe(o,1-l),new fe(h,1-u),new fe(p,1-g),new fe(m,1-d)]}};function wp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $a extends wt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new B,f=new fe,p=new B,g=new B,S=new B;let m=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,S.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:S.normalize(),l.push(S.x,S.y,S.z);break;default:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=S.x,p.y+=S.y,p.z+=S.z,p.normalize(),l.push(p.x,p.y,p.z),S.copy(g)}for(let x=0;x<=t;x++){const M=n+x*h*s,_=Math.sin(M),w=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),f.x=x/t,f.y=T/(e.length-1),o.push(f.x,f.y);const v=l[3*T+0]*_,y=l[3*T+1],A=l[3*T+0]*w;c.push(v,y,A)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){const _=M+x*e.length,w=_,T=_+e.length,v=_+e.length+1,y=_+1;r.push(w,T,y),r.push(v,y,T)}this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.points,e.segments,e.phiStart,e.phiLength)}}class Gt extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],S=[],m=[];for(let d=0;d<h;d++){const x=d*f-a;for(let M=0;M<c;M++){const _=M*u-r;g.push(_,-x,0),S.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const M=x+c*d,_=x+c*(d+1),w=x+1+c*(d+1),T=x+1+c*d;p.push(M,_,T),p.push(_,w,T)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cc extends wt{constructor(e=new ja([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(a,2));function c(h){const u=s.length/3,f=h.extractPoints(t);let p=f.shape;const g=f.holes;Qn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const x=g[m];Qn.isClockWise(x)===!0&&(g[m]=x.reverse())}const S=Qn.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const x=g[m];p=p.concat(x)}for(let m=0,d=p.length;m<d;m++){const x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,d=S.length;m<d;m++){const x=S[m],M=x[0]+u,_=x[1]+u,w=x[2]+u;n.push(M,_,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Tp(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Cc(n,e.curveSegments)}}function Tp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class pn extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,f=new B,p=[],g=[],S=[],m=[];for(let d=0;d<=n;d++){const x=[],M=d/n,_=a+M*o,w=e*Math.cos(_),T=Math.sqrt(e*e-w*w);let v=0;d===0&&a===0?v=.5/t:d===n&&l===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){const A=y/t,L=s+A*r;u.x=-T*Math.cos(L),u.y=w,u.z=T*Math.sin(L),g.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),m.push(A+v,1-M),x.push(c++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const M=h[d][x+1],_=h[d][x],w=h[d+1][x],T=h[d+1][x+1];(d!==0||a>0)&&p.push(M,_,T),(d!==n-1||l<Math.PI)&&p.push(_,w,T)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pc extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],f=new B,p=new B,g=new B;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let d=0;d<=s;d++){const x=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),g.subVectors(p,f).normalize(),h.push(g.x,g.y,g.z),u.push(d/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const d=(s+1)*S+m-1,x=(s+1)*(S-1)+m-1,M=(s+1)*(S-1)+m,_=(s+1)*S+m;l.push(d,x,_),l.push(x,M,_)}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ys extends wt{constructor(e=new Ac(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new B,l=new B,c=new fe;let h=new B;const u=[],f=[],p=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(p,2));function S(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),x(),d()}function m(M){h=e.getPointAt(M/t,h);const _=a.normals[M],w=a.binormals[M];for(let T=0;T<=s;T++){const v=T/s*Math.PI*2,y=Math.sin(v),A=-Math.cos(v);l.x=A*_.x+y*w.x,l.y=A*_.y+y*w.y,l.z=A*_.z+y*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let M=1;M<=t;M++)for(let _=1;_<=s;_++){const w=(s+1)*(M-1)+(_-1),T=(s+1)*M+(_-1),v=(s+1)*M+_,y=(s+1)*(M-1)+_;g.push(w,T,y),g.push(T,v,y)}}function x(){for(let M=0;M<=t;M++)for(let _=0;_<=s;_++)c.x=M/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ys(new Va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Dh(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=Hs(i[t]);for(const s in n)e[s]=n[s]}return e}function Dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ap(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const an={clone:Hs,merge:hn};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nf extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class at extends ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nh extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pp extends ds{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Lc extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dc extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Dp extends Dc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ho=new ut,Ih=new B,Uh=new B;class sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ho,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Er||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fa=new B,da=new fs,kn=new B;class rf extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fa,da,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,da,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fa,da,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,da,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new B,Oh=new fe,Fh=new fe;class wn extends rf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Fh),t.subVectors(Fh,Oh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Np extends sf{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class Cr extends Dc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Nc extends rf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ip extends sf{constructor(){super(new Nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Up extends Dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Ip}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ws=-90,Ts=1;class Gl extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(ws,Ts,e,t);s.layers=this.layers,this.add(s);const r=new wn(ws,Ts,e,t);r.layers=this.layers,this.add(r);const a=new wn(ws,Ts,e,t);a.layers=this.layers,this.add(a);const o=new wn(ws,Ts,e,t);o.layers=this.layers,this.add(o);const l=new wn(ws,Ts,e,t);l.layers=this.layers,this.add(l);const c=new wn(ws,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Op extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Fp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Bp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Bp(){this._document.hidden===!1&&this.reset()}const Bh=new ut;class zp{constructor(e,t,n=0,s=1/0){this.ray=new Sc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,n=[]){return kl(e,this,n,t),n.sort(zh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)kl(e[s],this,n,t);return n.sort(zh),n}}function zh(i,e){return i.distance-e.distance}function kl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)kl(r[a],e,t,!0)}}function Hh(i,e,t,n){const s=Hp(n);switch(t){case Lu:return i*e;case dc:return i*e/s.components*s.byteLength;case pc:return i*e/s.components*s.byteLength;case os:return i*e*2/s.components*s.byteLength;case mc:return i*e*2/s.components*s.byteLength;case Du:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case gc:return i*e*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:case ll:return Math.max(i,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(e,8)/2;case cl:case hl:case fl:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ul:case Fa:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dl:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ba:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hp(i){switch(i){case Mn:case Au:return{byteLength:1,components:1};case br:case Ru:case Vt:return{byteLength:2,components:1};case uc:case fc:return{byteLength:2,components:4};case si:case hc:case Bn:return{byteLength:4,components:1};case Cu:case Pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);function af(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gp(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],S=u[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,u[f]=S)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const S=u[p];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:kp,alphahash_pars_fragment:Vp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:Kp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:Qp,begin_vertex:jp,beginnormal_vertex:$p,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:a0,color_fragment:o0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,defaultnormal_vertex:f0,displacementmap_pars_vertex:d0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:_0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:N0,envmap_vertex:b0,fog_vertex:E0,fog_pars_vertex:w0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:L0,lights_pars_begin:D0,lights_toon_fragment:I0,lights_toon_pars_fragment:U0,lights_phong_fragment:O0,lights_phong_pars_fragment:F0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:G0,lights_fragment_end:k0,lightprobes_pars_fragment:V0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:K0,map_pars_fragment:Z0,map_particle_fragment:J0,map_particle_pars_fragment:Q0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:$0,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:vm,project_vertex:xm,dithering_fragment:_m,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Im,transmission_fragment:Um,transmission_pars_fragment:Om,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Gm,background_frag:km,backgroundCube_vert:Vm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:Km,distance_vert:Zm,distance_frag:Jm,equirect_vert:Qm,equirect_frag:jm,linedashed_vert:$m,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:vg,shadow_frag:xg,sprite_vert:_g,sprite_frag:Mg},Ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Yn={basic:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:hn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:hn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:hn([Ie.points,Ie.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:hn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:hn([Ie.common,Ie.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:hn([Ie.sprite,Ie.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:hn([Ie.common,Ie.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:hn([Ie.lights,Ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Yn.physical={uniforms:hn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const pa={r:0,b:0,g:0},Sg=new ut,of=new Qe;of.set(-1,0,0,0,1,0,0,0,1);function yg(i,e,t,n,s,r){const a=new Ye(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function p(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const _=x.backgroundBlurriness>0;M=e.get(M,_)}return M}function g(x){let M=!1;const _=p(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(x,M){const _=p(M);_&&_.isCubeTexture?(c===void 0&&(c=new gt(new tt(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Hs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=ht.getTransfer(_.colorSpace)!==_t,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new gt(new Gt(2,2),new Dt({name:"BackgroundMaterial",uniforms:Hs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(pa,tf(i)),t.buffers.color.setClear(pa.r,pa.g,pa.b,M,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:S,dispose:d}}function bg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(O,G,N,C,F){let z=!1;const P=u(O,C,N,G);r!==P&&(r=P,c(r.object)),z=p(O,C,N,F),z&&g(O,C,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,_(O,G,N,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function u(O,G,N,C){const F=C.wireframe===!0;let z=n[G.id];z===void 0&&(z={},n[G.id]=z);const P=O.isInstancedMesh===!0?O.id:0;let Y=z[P];Y===void 0&&(Y={},z[P]=Y);let H=Y[N.id];H===void 0&&(H={},Y[N.id]=H);let Q=H[F];return Q===void 0&&(Q=f(l()),H[F]=Q),Q}function f(O){const G=[],N=[],C=[];for(let F=0;F<t;F++)G[F]=0,N[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:C,object:O,attributes:{},index:null}}function p(O,G,N,C){const F=r.attributes,z=G.attributes;let P=0;const Y=N.getAttributes();for(const H in Y)if(Y[H].location>=0){const ne=F[H];let pe=z[H];if(pe===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),ne===void 0||ne.attribute!==pe||pe&&ne.data!==pe.data)return!0;P++}return r.attributesNum!==P||r.index!==C}function g(O,G,N,C){const F={},z=G.attributes;let P=0;const Y=N.getAttributes();for(const H in Y)if(Y[H].location>=0){let ne=z[H];ne===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));const pe={};pe.attribute=ne,ne&&ne.data&&(pe.data=ne.data),F[H]=pe,P++}r.attributes=F,r.attributesNum=P,r.index=C}function S(){const O=r.newAttributes;for(let G=0,N=O.length;G<N;G++)O[G]=0}function m(O){d(O,0)}function d(O,G){const N=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;N[O]=1,C[O]===0&&(i.enableVertexAttribArray(O),C[O]=1),F[O]!==G&&(i.vertexAttribDivisor(O,G),F[O]=G)}function x(){const O=r.newAttributes,G=r.enabledAttributes;for(let N=0,C=G.length;N<C;N++)G[N]!==O[N]&&(i.disableVertexAttribArray(N),G[N]=0)}function M(O,G,N,C,F,z,P){P===!0?i.vertexAttribIPointer(O,G,N,F,z):i.vertexAttribPointer(O,G,N,C,F,z)}function _(O,G,N,C){S();const F=C.attributes,z=N.getAttributes(),P=G.defaultAttributeValues;for(const Y in z){const H=z[Y];if(H.location>=0){let Q=F[Y];if(Q===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){const ne=Q.normalized,pe=Q.itemSize,Ne=e.get(Q);if(Ne===void 0)continue;const ie=Ne.buffer,xe=Ne.type,Le=Ne.bytesPerElement,Te=xe===i.INT||xe===i.UNSIGNED_INT||Q.gpuType===hc;if(Q.isInterleavedBufferAttribute){const X=Q.data,I=X.isInterleavedBuffer===!0?X.stride:X.itemSize,K=Q.offset;if(X.isInstancedInterleavedBuffer||X.isInstancedBufferAttribute){for(let R=0;R<H.locationSize;R++)d(H.location+R,X.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let R=0;R<H.locationSize;R++)m(H.location+R);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let R=0;R<H.locationSize;R++)M(H.location+R,pe/H.locationSize,xe,ne,I*Le,(K+pe/H.locationSize*R)*Le,Te)}else{if(Q.isInstancedBufferAttribute){for(let X=0;X<H.locationSize;X++)d(H.location+X,Q.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let X=0;X<H.locationSize;X++)m(H.location+X);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let X=0;X<H.locationSize;X++)M(H.location+X,pe/H.locationSize,xe,ne,pe*Le,pe/H.locationSize*X*Le,Te)}}else if(P!==void 0){const ne=P[Y];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(H.location,ne);break;case 3:i.vertexAttrib3fv(H.location,ne);break;case 4:i.vertexAttrib4fv(H.location,ne);break;default:i.vertexAttrib1fv(H.location,ne)}}}}x()}function w(){A();for(const O in n){const G=n[O];for(const N in G){const C=G[N];for(const F in C){const z=C[F];for(const P in z)h(z[P].object),delete z[P];delete C[F]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;const G=n[O.id];for(const N in G){const C=G[N];for(const F in C){const z=C[F];for(const P in z)h(z[P].object),delete z[P];delete C[F]}}delete n[O.id]}function v(O){for(const G in n){const N=n[G];for(const C in N){const F=N[C];if(F[O.id]===void 0)continue;const z=F[O.id];for(const P in z)h(z[P].object),delete z[P];delete F[O.id]}}}function y(O){for(const G in n){const N=n[G],C=O.isInstancedMesh===!0?O.id:0,F=N[C];if(F!==void 0){for(const z in F){const P=F[z];for(const Y in P)h(P[Y].object),delete P[Y];delete F[z]}delete N[C],Object.keys(N).length===0&&delete n[G]}}}function A(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:S,enableAttribute:m,disableUnusedAttributes:x}}function Eg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Cn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const y=v===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Mn&&v!==Bn&&!y&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,maxSamples:w,samples:T}}function Tg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new pi,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,M=x*4;let _=d.clippingState||null;l.value=_,_=h(g,f,M,p);for(let w=0;w!==M;++w)_[w]=t[w];d.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const S=u!==null?u.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const d=p+S*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==S;++M,_+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class Ic extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tt(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:fn});r.uniforms.tEquirect.value=t;const a=new gt(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=on),new Gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Gh=256,Ag=3,Rg=20,lf=256,cf=16,Cg=3,Pg=new B,Lg=new Ye;class Pr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gl(1,10,null),this._boxMesh=new gt(new tt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Pg}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(Lg));const m=new Gl(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=g,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Gh,bd(e))}_fromTexture(e,t){e.mapping===Bs||e.mapping===yr?this._setSize(e.image.length===0?Gh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=kh(e,!1,!1),n=Math.log2(e)-Ag;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=kh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bs||e.mapping===yr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Dg(),this._integrationMaterial=Ng());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cf);for(let a=0;a<=n;a++){const o=Pr.lodToRoughness(a,n);if(a>n-Cg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(lf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ig());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function kh(i,e,t){return new Ic(i,{minFilter:vi,generateMipmaps:e,type:Vt,colorSpace:Ha,depthBuffer:t})}function Br(i,e,t){return new Dt({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:vn,blending:fn,depthTest:!1,depthWrite:!1})}function Dg(){return Br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ng(){return Br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ig(){return Br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Rg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vh(){return Br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wh(){return Br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ug(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===ho||p===uo)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const S=new Ic(g.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const p=f.mapping,g=p===ho||p===uo,S=p===Bs||p===yr;if(g||S){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Pr(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const x=f.image;return g&&x&&x.height>0||S&&x&&l(x)?(n===null&&(n=new Pr(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,p){return p===ho?f.mapping=Bs:p===uo&&(f.mapping=yr),f}function l(f){let p=0;const g=6;for(let S=0;S<g;S++)f[S]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Og(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function Fg(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const S=r.get(g);S&&(e.remove(S),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(g){const S=g.attributes;for(const m in S)e.update(S[m],i.ARRAY_BUFFER)}function u(g){const S=g.index,m=g.attributes.position;let d=0;if(m===void 0)return;const x=S!==null?S.array.length:m.array.length/3-1,M=m.count>=65535?ku:Gu,_=new M(Math.ceil(x/3)*6,1),w=_.array;if(S!==null){const v=S.array;d=S.version;for(let y=0,A=0;y<x;y+=3){const L=v[y+0],O=v[y+1],G=v[y+2];w[A++]=L,w[A++]=O,w[A++]=O,w[A++]=G,w[A++]=G,w[A++]=L}}else{d=m.version;for(let v=0,y=0;v<x;v+=3){const A=v+0,L=v+1,O=v+2;w[y++]=A,w[y++]=L,w[y++]=L,w[y++]=O,w[y++]=O,w[y++]=A}}_.version=d;const T=r.get(g);T&&e.remove(T),r.set(g,_)}function f(g){const S=r.get(g);if(S){const m=g.index;m!==null&&S.version<m.version&&u(g)}else u(g);return r.get(g)}function p(){for(const g in s){const S=s[g].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:p}}function Bg(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let S=0;for(let m=0;m<p;m++)S+=f[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hg(i,e,t){const n=new WeakMap,s=new Ct;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let L=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var p=L;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),S===!0&&(_=2),m===!0&&(_=3);let w=o.attributes.position.count*_,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const v=new Float32Array(w*T*4*u),y=new Bu(v,w,T,u);y.type=Bn,y.needsUpdate=!0;const A=_*4;for(let O=0;O<u;O++){const G=d[O],N=x[O],C=M[O],F=w*T*4*O;for(let z=0;z<G.count;z++){const P=z*A;g===!0&&(s.fromBufferAttribute(G,z),v[F+P+0]=s.x,v[F+P+1]=s.y,v[F+P+2]=s.z,v[F+P+3]=0),S===!0&&(s.fromBufferAttribute(N,z),v[F+P+4]=s.x,v[F+P+5]=s.y,v[F+P+6]=s.z,v[F+P+7]=0),m===!0&&(s.fromBufferAttribute(C,z),v[F+P+8]=s.x,v[F+P+9]=s.y,v[F+P+10]=s.z,v[F+P+11]=C.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new fe(w,T)},n.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gg(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const kg={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function Vg(i,e,t,n,s,r){const a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new wt;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const u=new nf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new gt(h,u),p=new Nc(-1,1,1,-1,0,1);let g=null,S=null,m=!1,d,x=null,M=[],_=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let v=0;v<M.length;v++){const y=M[v];y.setSize&&y.setSize(w,T)}},this.setEffects=function(w){M=w,_=M.length>0&&M[0].isRenderPass===!0;const T=a.width,v=a.height;M.length>0&&o===null&&(o=new Wt(T,v,{type:Vt,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(T,v,{type:Vt,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&M.some(A=>A.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new ls(T,v),r===!0&&(c.format=xi,c.type=as)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let A=0;A<M.length;A++){const L=M[A];L.setSize&&L.setSize(T,v),y&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Si&&M.length===0)return!1;if(x=T,T!==null){const v=T.width,y=T.height;(a.width!==v||a.height!==y)&&this.setSize(v,y)}return _===!1&&w.setRenderTarget(a),d=w.toneMapping,w.toneMapping=Si,!0},this.hasRenderPass=function(){return _},this.end=function(w,T){w.toneMapping=d,m=!0;let v=a,y=o;for(let A=0;A<M.length;A++){const L=M[A];L.enabled!==!1&&(L.render(w,y,v,T),L.needsSwap!==!1&&(v=y,y=y===o?l:o))}if(g!==w.outputColorSpace||S!==w.toneMapping){g=w.outputColorSpace,S=w.toneMapping,u.defines={},ht.getTransfer(g)===_t&&(u.defines.SRGB_TRANSFER="");const A=kg[S];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(x),w.render(f,p),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const hf=new Jt,uf=new ls(1,1),ff=new Xu(1),df=new Bu,pf=new Ld,mf=new Wu,Xh=[],qh=[],Yh=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function Ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function eo(i,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),qt(t,n)}}function Zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),qt(t,n)}}function Jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),qt(t,n)}}function Qg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function t1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function n1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function s1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function to(i){return i.version===0&&(i.compareFunction=Ou,i.needsUpdate=!0),i}function r1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=to(uf):r=hf,t.setTexture2D(e||r,s)}function a1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pf,s)}function o1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=to(ff):r=mf,t.setTextureCube(e||r,s)}function l1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||df,s)}function c1(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Kg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return jg;case 35668:case 35672:return $g;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}function h1(i,e){i.uniform1fv(this.addr,e)}function u1(i,e){const t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function f1(i,e){const t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function d1(i,e){const t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function p1(i,e){const t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function m1(i,e){const t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function g1(i,e){const t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v1(i,e){i.uniform1iv(this.addr,e)}function x1(i,e){i.uniform2iv(this.addr,e)}function _1(i,e){i.uniform3iv(this.addr,e)}function M1(i,e){i.uniform4iv(this.addr,e)}function S1(i,e){i.uniform1uiv(this.addr,e)}function y1(i,e){i.uniform2uiv(this.addr,e)}function b1(i,e){i.uniform3uiv(this.addr,e)}function E1(i,e){i.uniform4uiv(this.addr,e)}function w1(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=to(uf):a=hf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function T1(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pf,r[a])}function A1(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=to(ff):a=mf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function R1(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||df,r[a])}function C1(i){switch(i){case 5126:return h1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return _1;case 35669:case 35673:return M1;case 5125:return S1;case 36294:return y1;case 36295:return b1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class P1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}}class L1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C1(t.type)}}class D1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function N1(i,e,t){const n=i.name,s=n.length;for(Go.lastIndex=0;;){const r=Go.exec(n),a=Go.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jh(t,c===void 0?new P1(o,i,e):new L1(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new D1(o),Jh(t,u)),t=u}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);N1(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Qh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const I1=37297;let U1=0;function O1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const jh=new Qe;function F1(i){ht._getMatrix(jh,ht.workingColorSpace,i);const e=`mat3( ${jh.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Ga:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $h(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+O1(i.getShaderSource(e),o)}else return r}function B1(i,e){const t=F1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const z1={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[Ja]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[oc]:"Custom"};function H1(i,e){const t=z1[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ma=new B;function G1(){ht.getLuminanceCoefficients(ma);const i=ma.x.toFixed(4),e=ma.y.toFixed(4),t=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function V1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function dr(i){return i!==""}function eu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(X1,q1)}function q1(i,e){const t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vl(t)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(Y1,K1)}function K1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Z1={[gr]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function J1(i){return Z1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q1={[yr]:"ENVMAP_MODE_REFRACTION"};function j1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $1={[wu]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function ev(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$1[i.combine]||"ENVMAP_BLENDING_NONE"}function tv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=J1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=j1(t),u=ev(t),f=k1(t),p=V1(r),g=s.createProgram();let S,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),m.length>0&&(m+=`
`)):(S=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),m=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?rt.tonemapping_pars_fragment:"",t.toneMapping!==Si?H1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,B1("linearToOutputTexel",t.outputColorSpace),G1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Vl(a),a=eu(a,t),a=tu(a,t),o=Vl(o),o=eu(o,t),o=tu(o,t),a=nu(a),o=nu(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=d+S+a,M=d+m+o,_=Qh(s,s.VERTEX_SHADER,x),w=Qh(s,s.FRAGMENT_SHADER,M);s.attachShader(g,_),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(g)||"",G=s.getShaderInfoLog(_)||"",N=s.getShaderInfoLog(w)||"",C=O.trim(),F=G.trim(),z=N.trim();let P=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,_,w);else{const H=$h(s,_,"vertex"),Q=$h(s,w,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+C+`
`+H+`
`+Q)}else C!==""?Je("WebGLProgram: Program Info Log:",C):(F===""||z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:P,programLog:C,vertexShader:{log:F,prefix:S},fragmentShader:{log:z,prefix:m}})}s.deleteShader(_),s.deleteShader(w),v=new Pa(s,g),y=W1(s,g)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(g,I1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=w,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sv(e),t.set(e,n)),n}}class sv{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}}function rv(i){return i===os||i===Fa||i===Ba}function av(i,e,t,n,s,r){const a=new _c,o=new iv,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,A,L,O,G){const N=L.fog,C=O.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,P=e.get(v.envMap||F,z),Y=f[v.type];let H=n.precision;v.precision!==null&&(H=n.getMaxPrecision(v.precision),H!==v.precision&&Je("WebGLProgram.getParameters:",v.precision,"not supported, using",H,"instead."));const Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=Q!==void 0?Q.length:0;let pe=0;C.morphAttributes.position!==void 0&&(pe=1),C.morphAttributes.normal!==void 0&&(pe=2),C.morphAttributes.color!==void 0&&(pe=3);let Ne,ie,xe,Le;if(Y){const Ue=Yn[Y];Ne=Ue.vertexShader,ie=Ue.fragmentShader}else{Ne=v.vertexShader,ie=v.fragmentShader;const Ue=o.getVertexShaderStage(v),Mt=o.getFragmentShaderStage(v);o.update(v,Ue,Mt),xe=Ue.id,Le=Mt.id}const Te=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),I=O.isInstancedMesh===!0,K=O.isBatchedMesh===!0,R=!!v.map,W=!!v.matcap,J=!!P,U=J&&P.isPMREMTexture===!0,Z=!!v.aoMap,ee=!!v.lightMap,ae=!!v.bumpMap&&v.wireframe===!1,re=!!v.normalMap,Me=!!v.displacementMap,ge=!!v.emissiveMap,Ae=!!v.metalnessMap,Be=!!v.roughnessMap,Fe=v.anisotropy>0,k=v.clearcoat>0,nt=v.diffuseRoughness>0,qe=v.dispersion>0,it=v.retroreflectivity>0,de=v.iridescence>0,$e=v.sheen>0,ke=v.transmission>0,Ve=Fe&&!!v.anisotropyMap,D=k&&!!v.clearcoatMap,b=k&&!!v.clearcoatNormalMap,j=k&&!!v.clearcoatRoughnessMap,me=nt&&!!v.diffuseRoughnessMap,ue=de&&!!v.iridescenceMap,Se=de&&!!v.iridescenceThicknessMap,we=$e&&!!v.sheenColorMap,oe=$e&&!!v.sheenRoughnessMap,ce=!!v.specularMap,be=!!v.specularColorMap,V=!!v.specularIntensityMap,he=ke&&!!v.transmissionMap,le=ke&&!!v.thicknessMap,Ce=!!v.gradientMap,Ee=!!v.alphaMap,Re=v.alphaTest>0,Xe=!!v.alphaHash,st=!!v.extensions;let _e=Si;v.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Ke=U?P.isCompressedCubeTexture?P.image[0].mipmaps:P.mipmaps:null,et={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:ie,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:Le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:H,batching:K,batchingColor:K&&O._colorsTexture!==null,instancing:I,instancingColor:I&&O.instanceColor!==null,instancingMorph:I&&O.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:R,matcap:W,envMap:J,envMapMode:J&&P.mapping,envMapPMREM:U,envMapMaxLod:U?Ke.length-1:null,envMapSize:U?Ke[0].width:null,aoMap:Z,lightMap:ee,bumpMap:ae,normalMap:re,displacementMap:Me,emissiveMap:ge,normalMapObjectSpace:re&&v.normalMapType===hd,normalMapTangentSpace:re&&v.normalMapType===za,packedNormalMap:re&&v.normalMapType===za&&rv(v.normalMap.format),metalnessMap:Ae,roughnessMap:Be,anisotropy:Fe,anisotropyMap:Ve,clearcoat:k,clearcoatMap:D,clearcoatNormalMap:b,clearcoatRoughnessMap:j,diffuseRoughness:nt,diffuseRoughnessMap:me,dispersion:qe,retroreflection:it,iridescence:de,iridescenceMap:ue,iridescenceThicknessMap:Se,sheen:$e,sheenColorMap:we,sheenRoughnessMap:oe,specularMap:ce,specularColorMap:be,specularIntensityMap:V,transmission:ke,transmissionMap:he,thicknessMap:le,gradientMap:Ce,opaque:v.transparent===!1&&v.blending===vr&&v.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Re,alphaHash:Xe,combine:v.combine,mapUv:R&&p(v.map.channel),aoMapUv:Z&&p(v.aoMap.channel),lightMapUv:ee&&p(v.lightMap.channel),bumpMapUv:ae&&p(v.bumpMap.channel),normalMapUv:re&&p(v.normalMap.channel),displacementMapUv:Me&&p(v.displacementMap.channel),emissiveMapUv:ge&&p(v.emissiveMap.channel),metalnessMapUv:Ae&&p(v.metalnessMap.channel),roughnessMapUv:Be&&p(v.roughnessMap.channel),anisotropyMapUv:Ve&&p(v.anisotropyMap.channel),clearcoatMapUv:D&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:oe&&p(v.sheenRoughnessMap.channel),specularMapUv:ce&&p(v.specularMap.channel),specularColorMapUv:be&&p(v.specularColorMap.channel),specularIntensityMapUv:V&&p(v.specularIntensityMap.channel),transmissionMapUv:he&&p(v.transmissionMap.channel),thicknessMapUv:le&&p(v.thicknessMap.channel),alphaMapUv:Ee&&p(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(re||Fe),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!C.attributes.uv&&(R||Ee),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:pe,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:G.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:R&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:ge&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||K)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function S(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)y.push(A),y.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(m(y,v),d(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function d(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function x(v){const y=f[v.type];let A;if(y){const L=Yn[y];A=an.clone(L.uniforms)}else A=v.uniforms;return A}function M(v,y){let A=h.get(y);return A!==void 0?++A.usedTimes:(A=new tv(i,y,v,s),c.push(A),h.set(y,A)),A}function _(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:S,getUniforms:x,acquireProgram:M,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:T}}function ov(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ru(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,S,m,d){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:d},i[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=g,x.materialVariant=a(f),x.groupOrder=S,x.renderOrder=f.renderOrder,x.z=m,x.group=d),e++,x}function l(f,p,g,S,m,d,x){x.reversedDepth===!0&&(m=-m);const M=o(f,p,g,S,m,d);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(f,p,g,S,m,d){const x=o(f,p,g,S,m,d);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(f,p){t.length>1&&t.sort(f||lv),n.length>1&&n.sort(p||su),s.length>1&&s.sort(p||su)}function u(){for(let f=e,p=i.length;f<p;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function cv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ru,i.set(n,[a])):s>=r.length?(a=new ru,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fv=0;function dv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i){const e=new hv,t=uv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new ut,a=new ut;function o(c){let h=0,u=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,g=0,S=0,m=0,d=0,x=0,M=0,_=0,w=0,T=0,v=0,y=0,A=0,L=0;c.sort(dv);for(let G=0,N=c.length;G<N;G++){const C=c[G],F=C.color,z=C.intensity,P=C.distance;let Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===os?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=F.r*z,u+=F.g*z,f+=F.b*z;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],z);L++}else if(C.isSunLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=Y;const pe=Q.getViewportCount();for(let Ne=0;Ne<pe;Ne++)n.sunShadowMatrix[S+Ne]=Q.getMatrix(Ne),n.sunShadowCascade[S+Ne]=Q._cascadeData[Ne];S+=pe,g++}n.sun[p]=H,p++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=C.shadow.matrix,w++}n.directional[m]=H,m++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(F).multiplyScalar(z),H.distance=P,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[x]=H;const Q=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,Q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=Q.matrix,C.castShadow){const ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=Y,v++}x++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(F).multiplyScalar(z),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=H,M++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const Q=C.shadow,ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,n.pointShadow[d]=ne,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=C.shadow.matrix,T++}n.point[d]=H,d++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(z),H.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[_]=H,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const O=n.hash;(O.sunLength!==p||O.directionalLength!==m||O.pointLength!==d||O.spotLength!==x||O.rectAreaLength!==M||O.hemiLength!==_||O.numSunShadows!==g||O.numDirectionalShadows!==w||O.numPointShadows!==T||O.numSpotShadows!==v||O.numSpotMaps!==y||O.numLightProbes!==L)&&(n.sun.length=p,n.directional.length=m,n.spot.length=x,n.rectArea.length=M,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,O.sunLength=p,O.directionalLength=m,O.pointLength=d,O.spotLength=x,O.rectAreaLength=M,O.hemiLength=_,O.numSunShadows=g,O.numDirectionalShadows=w,O.numPointShadows=T,O.numSpotShadows=v,O.numSpotMaps=y,O.numLightProbes=L,n.version=fv++)}function l(c,h){let u=0,f=0,p=0,g=0,S=0,m=0;const d=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const _=c[x];if(_.isSunLight){const w=n.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(d),u++}else if(_.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(_.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),g++}else if(_.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(_.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function au(i){const e=new pv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function mv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new au(i),e.set(s,[o])):r>=a.length?(o=new au(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],_v=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ou=new ut,sr=new B,ko=new B;function Mv(i,e,t){let n=new wr;const s=new fe,r=new fe,a=new Ct,o=new Lc,l=new Lp,c={},h=t.maxTextureSize,u={[Fi]:vn,[vn]:Fi,[Ut]:Ut},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:gv,fragmentShader:vv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new gt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let d=this.type;this.render=function(T,v,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Xf&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);const A=i.getRenderTarget(),L=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),G=i.state;G.setBlending(fn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=d!==this.type;N&&v.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=T.length;C<F;C++){const z=T[C],P=z.shadow;if(P===void 0){Je("WebGLShadowMap:",z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const Y=P.getFrameExtents();s.multiply(Y),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,P.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=H,P.map===null||N===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===hr){if(z.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Wt(s.x,s.y,{format:os,type:Vt,minFilter:on,magFilter:on,generateMipmaps:!1}),P.map.texture.name=z.name+".shadowMap",P.map.depthTexture=new ls(s.x,s.y,Bn),P.map.depthTexture.name=z.name+".shadowMapDepth",P.map.depthTexture.format=Bi,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Ot,P.map.depthTexture.magFilter=Ot}else z.isPointLight?(P.map=new Ic(s.x),P.map.depthTexture=new Xu(s.x,si)):(P.map=new Wt(s.x,s.y),P.map.depthTexture=new ls(s.x,s.y,si)),P.map.depthTexture.name=z.name+".shadowMap",P.map.depthTexture.format=Bi,this.type===gr?(P.map.depthTexture.compareFunction=H?Uu:Iu,P.map.depthTexture.minFilter=on,P.map.depthTexture.magFilter=on):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Ot,P.map.depthTexture.magFilter=Ot);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==s.x||P.map.height!==s.y)&&P.map.setSize(s.x,s.y);const Q=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();z.isPointLight!==!0&&P.updateMatrices(z,y);const ne=(P.camera.layers.mask&4294967294)!==0?P.camera.layers:y.layers;for(let pe=0;pe<Q;pe++){const Ne=P.getCamera(pe);if(z.isPointLight){const ie=P.camera,xe=P.matrix,Le=z.distance||ie.far;Le!==ie.far&&(ie.far=Le,ie.updateProjectionMatrix()),sr.setFromMatrixPosition(z.matrixWorld),ie.position.copy(sr),ko.copy(ie.position),ko.add(xv[pe]),ie.up.copy(_v[pe]),ie.lookAt(ko),ie.updateMatrixWorld(),xe.makeTranslation(-sr.x,-sr.y,-sr.z),ou.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),P._frustum.setFromProjectionMatrix(ou,ie.coordinateSystem,ie.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(P.map),i.clear());const ie=P.getViewport(pe);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),G.viewport(a)}n=P.getFrustum(pe),_(v,y,Ne,z,ne,this.type)}P.isPointLightShadow!==!0&&this.type===hr&&x(P,y),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,L,O)};function x(T,v){const y=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Wt(s.x,s.y,{format:os,type:Vt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(v,null,y,f,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(v,null,y,p,S,null)}function M(T,v,y,A){let L=null;const O=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)L=O;else if(L=y.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const G=L.uuid,N=v.uuid;let C=c[G];C===void 0&&(C={},c[G]=C);let F=C[N];F===void 0&&(F=L.clone(),C[N]=F,v.addEventListener("dispose",w)),L=F}if(L.visible=v.visible,L.wireframe=v.wireframe,A===hr?L.side=v.shadowSide!==null?v.shadowSide:v.side:L.side=v.shadowSide!==null?v.shadowSide:u[v.side],L.alphaMap=v.alphaMap,L.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,L.map=v.map,L.clipShadows=v.clipShadows,L.clippingPlanes=v.clippingPlanes,L.clipIntersection=v.clipIntersection,L.displacementMap=v.displacementMap,L.displacementScale=v.displacementScale,L.displacementBias=v.displacementBias,L.wireframeLinewidth=v.wireframeLinewidth,L.linewidth=v.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const G=i.properties.get(L);G.light=y}return L}function _(T,v,y,A,L,O){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===hr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const C=e.update(T),F=T.material;if(Array.isArray(F)){const z=C.groups;for(let P=0,Y=z.length;P<Y;P++){const H=z[P],Q=F[H.materialIndex];if(Q&&Q.visible){const ne=M(T,Q,A,O);T.onBeforeShadow(i,T,v,y,C,ne,H),i.renderBufferDirect(y,null,C,ne,T,H),T.onAfterShadow(i,T,v,y,C,ne,H)}}}else if(F.visible){const z=M(T,F,A,O);T.onBeforeShadow(i,T,v,y,C,z,null),i.renderBufferDirect(y,null,C,z,T,null),T.onAfterShadow(i,T,v,y,C,z,null)}}const N=T.children;for(let C=0,F=N.length;C<F;C++)_(N[C],v,y,A,L,O)}function w(T){T.target.removeEventListener("dispose",w);for(const y in c){const A=c[y],L=T.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function Sv(i,e){function t(){let V=!1;const he=new Ct;let le=null;const Ce=new Ct(0,0,0,0);return{setMask:function(Ee){le!==Ee&&!V&&(i.colorMask(Ee,Ee,Ee,Ee),le=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Re,Xe,st,_e){_e===!0&&(Ee*=st,Re*=st,Xe*=st),he.set(Ee,Re,Xe,st),Ce.equals(he)===!1&&(i.clearColor(Ee,Re,Xe,st),Ce.copy(he))},reset:function(){V=!1,le=null,Ce.set(-1,0,0,0)}}}function n(){let V=!1,he=!1,le=null,Ce=null,Ee=null;return{setReversed:function(Re){if(he!==Re){const Xe=e.get("EXT_clip_control");Re?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),he=Re;const st=Ee;Ee=null,this.setClear(st)}},getReversed:function(){return he},setTest:function(Re){Re?X(i.DEPTH_TEST):I(i.DEPTH_TEST)},setMask:function(Re){le!==Re&&!V&&(i.depthMask(Re),le=Re)},setFunc:function(Re){if(he&&(Re=Sd[Re]),Ce!==Re){switch(Re){case Qo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=Re}},setLocked:function(Re){V=Re},setClear:function(Re){Ee!==Re&&(Ee=Re,he&&(Re=1-Re),i.clearDepth(Re))},reset:function(){V=!1,le=null,Ce=null,Ee=null,he=!1}}}function s(){let V=!1,he=null,le=null,Ce=null,Ee=null,Re=null,Xe=null,st=null,_e=null;return{setTest:function(Ke){V||(Ke?X(i.STENCIL_TEST):I(i.STENCIL_TEST))},setMask:function(Ke){he!==Ke&&!V&&(i.stencilMask(Ke),he=Ke)},setFunc:function(Ke,et,Ue){(le!==Ke||Ce!==et||Ee!==Ue)&&(i.stencilFunc(Ke,et,Ue),le=Ke,Ce=et,Ee=Ue)},setOp:function(Ke,et,Ue){(Re!==Ke||Xe!==et||st!==Ue)&&(i.stencilOp(Ke,et,Ue),Re=Ke,Xe=et,st=Ue)},setLocked:function(Ke){V=Ke},setClear:function(Ke){_e!==Ke&&(i.clearStencil(Ke),_e=Ke)},reset:function(){V=!1,he=null,le=null,Ce=null,Ee=null,Re=null,Xe=null,st=null,_e=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},f={},p=new WeakMap,g=[],S=null,m=!1,d=null,x=null,M=null,_=null,w=null,T=null,v=null,y=new Ye(0,0,0),A=0,L=!1,O=null,G=null,N=null,C=null,F=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),P=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),P=Y>=2);let Q=null,ne={};const pe=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),ie=new Ct().fromArray(pe),xe=new Ct().fromArray(Ne);function Le(V,he,le,Ce){const Ee=new Uint8Array(4),Re=i.createTexture();i.bindTexture(V,Re),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<le;Xe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(he+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Re}const Te={};Te[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(Sr),ae(!1),re(th),X(i.CULL_FACE),Z(fn);function X(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function I(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function K(V,he){return f[V]!==he?(i.bindFramebuffer(V,he),f[V]=he,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function R(V,he){let le=g,Ce=!1;if(V){le=p.get(he),le===void 0&&(le=[],p.set(he,le));const Ee=V.textures;if(le.length!==Ee.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Xe=Ee.length;Re<Xe;Re++)le[Re]=i.COLOR_ATTACHMENT0+Re;le.length=Ee.length,Ce=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(le)}function W(V){return S!==V?(i.useProgram(V),S=V,!0):!1}const J={[Jn]:i.FUNC_ADD,[qf]:i.FUNC_SUBTRACT,[Yf]:i.FUNC_REVERSE_SUBTRACT};J[Kf]=i.MIN,J[Zf]=i.MAX;const U={[ur]:i.ZERO,[Jf]:i.ONE,[Qf]:i.SRC_COLOR,[bu]:i.SRC_ALPHA,[td]:i.SRC_ALPHA_SATURATE,[Jo]:i.DST_COLOR,[Zo]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[Eu]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[$f]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[sd]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(V,he,le,Ce,Ee,Re,Xe,st,_e,Ke){if(V===fn){m===!0&&(I(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),V!==yu){if(V!==d||Ke!==L){if((x!==Jn||w!==Jn)&&(i.blendEquation(i.FUNC_ADD),x=Jn,w=Jn),Ke)switch(V){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fs:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",V);break}else switch(V){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",V);break}M=null,_=null,T=null,v=null,y.set(0,0,0),A=0,d=V,L=Ke}return}Ee=Ee||he,Re=Re||le,Xe=Xe||Ce,(he!==x||Ee!==w)&&(i.blendEquationSeparate(J[he],J[Ee]),x=he,w=Ee),(le!==M||Ce!==_||Re!==T||Xe!==v)&&(i.blendFuncSeparate(U[le],U[Ce],U[Re],U[Xe]),M=le,_=Ce,T=Re,v=Xe),(st.equals(y)===!1||_e!==A)&&(i.blendColor(st.r,st.g,st.b,_e),y.copy(st),A=_e),d=V,L=!1}function ee(V,he){V.side===Ut?I(i.CULL_FACE):X(i.CULL_FACE);let le=V.side===vn;he&&(le=!le),ae(le),V.blending===vr&&V.transparent===!1?Z(fn):Z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Ce=V.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):I(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(V){O!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),O=V)}function re(V){V!==Vf?(X(i.CULL_FACE),V!==G&&(V===th?i.cullFace(i.BACK):V===Wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):I(i.CULL_FACE),G=V}function Me(V){V!==N&&(P&&i.lineWidth(V),N=V)}function ge(V,he,le){V?(X(i.POLYGON_OFFSET_FILL),(C!==he||F!==le)&&(C=he,F=le,a.getReversed()&&(he=-he,le=-le),i.polygonOffset(he,le))):I(i.POLYGON_OFFSET_FILL)}function Ae(V){V?X(i.SCISSOR_TEST):I(i.SCISSOR_TEST)}function Be(V){V===void 0&&(V=i.TEXTURE0+z-1),Q!==V&&(i.activeTexture(V),Q=V)}function Fe(V,he,le){le===void 0&&(Q===null?le=i.TEXTURE0+z-1:le=Q);let Ce=ne[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},ne[le]=Ce),(Ce.type!==V||Ce.texture!==he)&&(Q!==le&&(i.activeTexture(le),Q=le),i.bindTexture(V,he||Te[V]),Ce.type=V,Ce.texture=he)}function k(){const V=ne[Q];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(V){mt("WebGLState:",V)}}function qe(){try{i.compressedTexImage3D(...arguments)}catch(V){mt("WebGLState:",V)}}function it(){try{i.texSubImage2D(...arguments)}catch(V){mt("WebGLState:",V)}}function de(){try{i.texSubImage3D(...arguments)}catch(V){mt("WebGLState:",V)}}function $e(){try{i.compressedTexSubImage2D(...arguments)}catch(V){mt("WebGLState:",V)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(V){mt("WebGLState:",V)}}function Ve(){try{i.texStorage2D(...arguments)}catch(V){mt("WebGLState:",V)}}function D(){try{i.texStorage3D(...arguments)}catch(V){mt("WebGLState:",V)}}function b(){try{i.texImage2D(...arguments)}catch(V){mt("WebGLState:",V)}}function j(){try{i.texImage3D(...arguments)}catch(V){mt("WebGLState:",V)}}function me(V){return u[V]!==void 0?u[V]:i.getParameter(V)}function ue(V,he){u[V]!==he&&(i.pixelStorei(V,he),u[V]=he)}function Se(V){ie.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function we(V){xe.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),xe.copy(V))}function oe(V,he){let le=c.get(he);le===void 0&&(le=new WeakMap,c.set(he,le));let Ce=le.get(V);Ce===void 0&&(Ce=i.getUniformBlockIndex(he,V.name),i.uniformBlockBinding(he,Ce,Ce),le.set(V,Ce))}function ce(V,he,le){const Ee=c.get(he).get(V);l[Ee]!==le&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ee,le),l[Ee]=le)}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,ne={},f={},l={},p=new WeakMap,g=[],S=null,m=!1,d=null,x=null,M=null,_=null,w=null,T=null,v=null,y=new Ye(0,0,0),A=0,L=!1,O=null,G=null,N=null,C=null,F=null,ie.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:I,bindFramebuffer:K,drawBuffers:R,useProgram:W,setBlending:Z,setMaterial:ee,setFlipSided:ae,setCullFace:re,setLineWidth:Me,setPolygonOffset:ge,setScissorTest:Ae,activeTexture:Be,bindTexture:Fe,unbindTexture:k,compressedTexImage2D:nt,compressedTexImage3D:qe,texImage2D:b,texImage3D:j,pixelStorei:ue,getParameter:me,updateUBOMapping:oe,uniformBlockBinding:ce,texStorage2D:Ve,texStorage3D:D,texSubImage2D:it,texSubImage3D:de,compressedTexSubImage2D:$e,compressedTexSubImage3D:ke,scissor:Se,viewport:we,reset:be}}function yv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,u=new Set;let f;const p=new WeakMap,g=new Set,S=new FinalizationRegistry(D=>g.delete(D));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(D,b){return m?new OffscreenCanvas(D,b):ka("canvas")}function x(D,b,j){let me=1;const ue=Ve(D);if((ue.width>j||ue.height>j)&&(me=j/Math.max(ue.width,ue.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Se=Math.floor(me*ue.width),we=Math.floor(me*ue.height);f===void 0&&(f=d(Se,we));const oe=b?d(Se,we):f;return oe.width=Se,oe.height=we,oe.getContext("2d").drawImage(D,0,0,Se,we),Je("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Se+"x"+we+")."),oe}else return"data"in D&&Je("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){i.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(D,b,j,me,ue,Se=!1){if(D!==null){if(i[D]!==void 0)return i[D];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let we;me&&(we=e.get("EXT_texture_norm16"),we||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=b;if(b===i.RED&&(j===i.FLOAT&&(oe=i.R32F),j===i.HALF_FLOAT&&(oe=i.R16F),j===i.UNSIGNED_BYTE&&(oe=i.R8),j===i.UNSIGNED_SHORT&&we&&(oe=we.R16_EXT),j===i.SHORT&&we&&(oe=we.R16_SNORM_EXT)),b===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(oe=i.R8UI),j===i.UNSIGNED_SHORT&&(oe=i.R16UI),j===i.UNSIGNED_INT&&(oe=i.R32UI),j===i.BYTE&&(oe=i.R8I),j===i.SHORT&&(oe=i.R16I),j===i.INT&&(oe=i.R32I)),b===i.RG&&(j===i.FLOAT&&(oe=i.RG32F),j===i.HALF_FLOAT&&(oe=i.RG16F),j===i.UNSIGNED_BYTE&&(oe=i.RG8),j===i.UNSIGNED_SHORT&&we&&(oe=we.RG16_EXT),j===i.SHORT&&we&&(oe=we.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(oe=i.RG8UI),j===i.UNSIGNED_SHORT&&(oe=i.RG16UI),j===i.UNSIGNED_INT&&(oe=i.RG32UI),j===i.BYTE&&(oe=i.RG8I),j===i.SHORT&&(oe=i.RG16I),j===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),j===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),j===i.UNSIGNED_INT&&(oe=i.RGB32UI),j===i.BYTE&&(oe=i.RGB8I),j===i.SHORT&&(oe=i.RGB16I),j===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),j===i.UNSIGNED_INT&&(oe=i.RGBA32UI),j===i.BYTE&&(oe=i.RGBA8I),j===i.SHORT&&(oe=i.RGBA16I),j===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&(j===i.UNSIGNED_SHORT&&we&&(oe=we.RGB16_EXT),j===i.SHORT&&we&&(oe=we.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),b===i.RGBA){const ce=Se?Ga:ht.getTransfer(ue);j===i.FLOAT&&(oe=i.RGBA32F),j===i.HALF_FLOAT&&(oe=i.RGBA16F),j===i.UNSIGNED_BYTE&&(oe=ce===_t?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&we&&(oe=we.RGBA16_EXT),j===i.SHORT&&we&&(oe=we.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(D,b){let j;return D?b===null||b===si||b===as?j=i.DEPTH24_STENCIL8:b===Bn?j=i.DEPTH32F_STENCIL8:b===br&&(j=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===si||b===as?j=i.DEPTH_COMPONENT24:b===Bn?j=i.DEPTH_COMPONENT32F:b===br&&(j=i.DEPTH_COMPONENT16),j}function y(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ot&&D.minFilter!==on?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function A(D){const b=new WeakRef(D);n.get(D).__ref=b,g.add(b),S.register(D,b,b)}function L(D){const b=n.get(D).__ref;b!==void 0&&(g.delete(b),S.unregister(b))}function O(D){N(D.target)}function G(D){C(D.target)}function N(D){D.removeEventListener("dispose",O),L(D),z(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&u.delete(D)}function C(D){D.removeEventListener("dispose",G),L(D),Y(D)}function F(){for(const D of g){const b=D.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):N(b))}g.clear(),u.clear()}function z(D){const b=n.get(D);if(b.__webglInit===void 0)return;const j=D.source,me=p.get(j);if(me){const ue=me[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&P(D),Object.keys(me).length===0&&p.delete(j)}n.remove(D)}function P(D){const b=n.get(D);i.deleteTexture(b.__webglTexture);const j=D.source,me=p.get(j);delete me[b.__cacheKey],a.memory.textures--}function Y(D){const b=n.get(D);b.__depthDisposeCallback&&b.__depthDisposeCallback();const j=D.depthTexture;if(j&&j.renderTarget===D&&N(j),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(b.__webglFramebuffer[ue]))for(let Se=0;Se<b.__webglFramebuffer[ue].length;Se++)i.deleteFramebuffer(b.__webglFramebuffer[ue][Se]);else i.deleteFramebuffer(b.__webglFramebuffer[ue]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ue])}else{if(Array.isArray(b.__webglFramebuffer))for(let ue=0;ue<b.__webglFramebuffer.length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[ue]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ue=0;ue<b.__webglColorRenderbuffer.length;ue++)b.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ue]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const me=D.textures;for(let ue=0,Se=me.length;ue<Se;ue++){const we=n.get(me[ue]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(me[ue])}n.remove(D)}let H=0;function Q(){H=0}function ne(){return H}function pe(D){H=D}function Ne(){const D=H;return D>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function ie(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.mipmapsAutoUpdate),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function xe(D,b){const j=n.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const me=D.image;if(me===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(j,D,b);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+b)}function Le(D,b){const j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){ee(j,D,b);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+b)}function Te(D,b){const j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){ee(j,D,b);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+b)}function X(D,b){const j=n.get(D);if(D.version>0&&j.__version!==D.version){ae(j,D,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+b)}const I={[ii]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[sl]:i.MIRRORED_REPEAT},K={[Ot]:i.NEAREST,[ld]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},R={[fd]:i.NEVER,[Ou]:i.ALWAYS,[dd]:i.LESS,[Iu]:i.LEQUAL,[pd]:i.EQUAL,[Uu]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function W(D,b){if(b.type===Bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===on||b.magFilter===fo||b.magFilter===Vr||b.magFilter===vi||b.minFilter===on||b.minFilter===fo||b.minFilter===Vr||b.minFilter===vi)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,I[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,I[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,I[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,K[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,K[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,R[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ot||b.minFilter!==Vr&&b.minFilter!==vi||b.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function J(D,b){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",O),A(b));const me=b.source;let ue=p.get(me);ue===void 0&&(ue={},p.set(me,ue));const Se=ie(b);if(Se!==D.__cacheKey){ue[Se]===void 0&&(ue[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ue[Se].usedTimes++;const we=ue[D.__cacheKey];we!==void 0&&(ue[D.__cacheKey].usedTimes--,we.usedTimes===0&&P(b)),D.__cacheKey=Se,D.__webglTexture=ue[Se].texture}return j}function U(D,b,j){return Math.floor(Math.floor(D/j)/b)}function Z(D,b,j,me){const Se=D.updateRanges;if(Se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,j,me,b.data);else{Se.sort((V,he)=>V.start-he.start);let we=0;for(let V=1;V<Se.length;V++){const he=Se[we],le=Se[V],Ce=he.start+he.count,Ee=U(le.start,b.width,4),Re=U(he.start,b.width,4);le.start<=Ce+1&&Ee===Re&&U(le.start+le.count-1,b.width,4)===Ee?he.count=Math.max(he.count,le.start+le.count-he.start):(++we,Se[we]=le)}Se.length=we+1;const oe=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let V=0,he=Se.length;V<he;V++){const le=Se[V],Ce=Math.floor(le.start/4),Ee=Math.ceil(le.count/4),Re=Ce%b.width,Xe=Math.floor(Ce/b.width),st=Ee,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(i.TEXTURE_2D,0,Re,Xe,st,_e,j,me,b.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function ee(D,b,j){let me=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=i.TEXTURE_3D);const ue=J(D,b),Se=b.source;t.bindTexture(me,D.__webglTexture,i.TEXTURE0+j);const we=n.get(Se);if(Se.version!==we.__version||ue===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const _e=ht.getPrimaries(ht.workingColorSpace),Ke=b.colorSpace===Li?null:ht.getPrimaries(b.colorSpace),et=b.colorSpace===Li||_e===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ce=x(b.image,!1,s.maxTextureSize);ce=ke(b,ce);const be=r.convert(b.format,b.colorSpace),V=r.convert(b.type);let he=T(b.internalFormat,be,V,b.normalized,b.colorSpace,b.isVideoTexture);W(me,b);let le;const Ce=b.mipmaps,Ee=b.isVideoTexture!==!0,Re=we.__version===void 0||ue===!0,Xe=Se.dataReady,st=y(b,ce);if(b.isDepthTexture)he=v(b.format===xi,b.type),Re&&(Ee?t.texStorage2D(i.TEXTURE_2D,1,he,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,he,ce.width,ce.height,0,be,V,null));else if(b.isDataTexture)if(Ce.length>0){Ee&&Re&&t.texStorage2D(i.TEXTURE_2D,st,he,Ce[0].width,Ce[0].height);for(let _e=0,Ke=Ce.length;_e<Ke;_e++)le=Ce[_e],Ee?Xe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,le.width,le.height,be,V,le.data):t.texImage2D(i.TEXTURE_2D,_e,he,le.width,le.height,0,be,V,le.data);b.generateMipmaps=!1}else Ee?(Re&&t.texStorage2D(i.TEXTURE_2D,st,he,ce.width,ce.height),Xe&&Z(b,ce,be,V)):t.texImage2D(i.TEXTURE_2D,0,he,ce.width,ce.height,0,be,V,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ee&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,he,Ce[0].width,Ce[0].height,ce.depth);for(let _e=0,Ke=Ce.length;_e<Ke;_e++)if(le=Ce[_e],b.format!==Cn)if(be!==null)if(Ee){if(Xe)if(b.layerUpdates.size>0){const et=Hh(le.width,le.height,b.format,b.type);for(const Ue of b.layerUpdates){const Mt=le.data.subarray(Ue*et/le.data.BYTES_PER_ELEMENT,(Ue+1)*et/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Ue,le.width,le.height,1,be,Mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,le.width,le.height,ce.depth,be,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,he,le.width,le.height,ce.depth,0,le.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?Xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,le.width,le.height,ce.depth,be,V,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,he,le.width,le.height,ce.depth,0,be,V,le.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ee&&Re&&t.texStorage2D(i.TEXTURE_2D,st,he,Ce[0].width,Ce[0].height);for(let _e=0,Ke=Ce.length;_e<Ke;_e++)le=Ce[_e],b.format!==Cn?be!==null?Ee?Xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,le.width,le.height,be,le.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,he,le.width,le.height,0,le.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?Xe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,le.width,le.height,be,V,le.data):t.texImage2D(i.TEXTURE_2D,_e,he,le.width,le.height,0,be,V,le.data)}else if(b.isDataArrayTexture)if(Ee){if(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,he,ce.width,ce.height,ce.depth),Xe)if(b.layerUpdates.size>0){const _e=Hh(ce.width,ce.height,b.format,b.type);for(const Ke of b.layerUpdates){const et=ce.data.subarray(Ke*_e/ce.data.BYTES_PER_ELEMENT,(Ke+1)*_e/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,ce.width,ce.height,1,be,V,et)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,be,V,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ce.width,ce.height,ce.depth,0,be,V,ce.data);else if(b.isData3DTexture)Ee?(Re&&t.texStorage3D(i.TEXTURE_3D,st,he,ce.width,ce.height,ce.depth),Xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,be,V,ce.data)):t.texImage3D(i.TEXTURE_3D,0,he,ce.width,ce.height,ce.depth,0,be,V,ce.data);else if(b.isFramebufferTexture){if(Re)if(Ee)t.texStorage2D(i.TEXTURE_2D,st,he,ce.width,ce.height);else{let _e=ce.width,Ke=ce.height;for(let et=0;et<st;et++)t.texImage2D(i.TEXTURE_2D,et,he,_e,Ke,0,be,V,null),_e>>=1,Ke>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ce.parentNode!==_e){_e.appendChild(ce),u.add(b),_e.onpaint=Ke=>{const et=Ke.changedElements;for(const Ue of u)et.includes(Ue.image)&&(Ue.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{const et=i.RGBA,Ue=i.RGBA,Mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,Ue,Mt,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ee&&Re){const _e=Ve(Ce[0]);t.texStorage2D(i.TEXTURE_2D,st,he,_e.width,_e.height)}for(let _e=0,Ke=Ce.length;_e<Ke;_e++)le=Ce[_e],Ee?Xe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,be,V,le):t.texImage2D(i.TEXTURE_2D,_e,he,be,V,le);b.generateMipmaps=!1}else if(Ee){if(Re){const _e=Ve(ce);t.texStorage2D(i.TEXTURE_2D,st,he,_e.width,_e.height)}Xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,V,ce)}else t.texImage2D(i.TEXTURE_2D,0,he,be,V,ce);M(b)&&b.mipmapsAutoUpdate===!0&&_(me),we.__version=Se.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ae(D,b,j){if(b.image.length!==6)return;const me=J(D,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+j);const Se=n.get(ue);if(ue.version!==Se.__version||me===!0){t.activeTexture(i.TEXTURE0+j);const we=ht.getPrimaries(ht.workingColorSpace),oe=b.colorSpace===Li?null:ht.getPrimaries(b.colorSpace),ce=b.colorSpace===Li||we===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,V=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Ue=0;Ue<6;Ue++)!be&&!V?he[Ue]=x(b.image[Ue],!0,s.maxCubemapSize):he[Ue]=V?b.image[Ue].image:b.image[Ue],he[Ue]=ke(b,he[Ue]);const le=he[0],Ce=r.convert(b.format,b.colorSpace),Ee=r.convert(b.type);let Re=T(b.internalFormat,Ce,Ee,b.normalized,b.colorSpace);const Xe=b.isVideoTexture!==!0,st=Se.__version===void 0||me===!0,_e=ue.dataReady;let Ke=y(b,le);W(i.TEXTURE_CUBE_MAP,b);let et;if(b.isDepthTexture){if(Re=v(b.format===xi,b.type),st)if(Xe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Re,le.width,le.height);else for(let Ue=0;Ue<6;Ue++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,le.width,le.height,0,Ce,Ee,null)}else if(be){Xe&&st&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Re,le.width,le.height);for(let Ue=0;Ue<6;Ue++){et=he[Ue].mipmaps;for(let Mt=0;Mt<et.length;Mt++){const Yt=et[Mt];b.format!==Cn?Ce!==null?Xe?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt,0,0,Yt.width,Yt.height,Ce,Yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt,Re,Yt.width,Yt.height,0,Yt.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt,0,0,Yt.width,Yt.height,Ce,Ee,Yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt,Re,Yt.width,Yt.height,0,Ce,Ee,Yt.data)}}}else{if(et=b.mipmaps,Xe&&st){et.length>0&&Ke++;const Ue=Ve(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Re,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(V){Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,he[Ue].width,he[Ue].height,Ce,Ee,he[Ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,he[Ue].width,he[Ue].height,0,Ce,Ee,he[Ue].data);for(let Mt=0;Mt<et.length;Mt++){const Ei=et[Mt].image[Ue].image;Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt+1,0,0,Ei.width,Ei.height,Ce,Ee,Ei.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt+1,Re,Ei.width,Ei.height,0,Ce,Ee,Ei.data)}}else{Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,Ce,Ee,he[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,Ce,Ee,he[Ue]);for(let Mt=0;Mt<et.length;Mt++){const Yt=et[Mt];Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt+1,0,0,Ce,Ee,Yt.image[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Mt+1,Re,Ce,Ee,Yt.image[Ue])}}}M(b)&&b.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),Se.__version=ue.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function re(D,b,j,me,ue,Se){const we=r.convert(j.format,j.colorSpace),oe=r.convert(j.type),ce=T(j.internalFormat,we,oe,j.normalized,j.colorSpace),be=n.get(b),V=n.get(j);if(V.__renderTarget=b,!be.__hasExternalTextures){const he=Math.max(1,b.width>>Se),le=Math.max(1,b.height>>Se);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,Se,ce,he,le,b.depth,0,we,oe,null):t.texImage2D(ue,Se,ce,he,le,0,we,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),de(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ue,V.__webglTexture,0,it(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,ue,V.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(D,b,j){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){const me=b.depthTexture,ue=me&&me.isDepthTexture?me.type:null,Se=v(b.stencilBuffer,ue),we=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(b),Se,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(b),Se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Se,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,D)}else{const me=b.textures;for(let ue=0;ue<me.length;ue++){const Se=me[ue],we=r.convert(Se.format,Se.colorSpace),oe=r.convert(Se.type),ce=T(Se.internalFormat,we,oe,Se.normalized,Se.colorSpace);de(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(b),ce,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(b),ce,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ce,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(D,b,j){const me=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=n.get(b.depthTexture);ue.__renderTarget=b;const Se=me?b.depthTexture.image[0]:b.depthTexture.image;(!ue.__webglTexture||Se.width!==b.width||Se.height!==b.height)&&(Se.width=b.width,Se.height=b.height,b.depthTexture.needsUpdate=!0),me?X(b.depthTexture,0):xe(b.depthTexture,0);const we=ue.__webglTexture,oe=it(b),ce=me?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,be=b.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Bi)de(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ce,we,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,be,ce,we,0);else if(b.depthTexture.format===xi)de(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ce,we,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,be,ce,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(D){const b=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",ue)};me.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=me}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let me=0;me<6;me++)ge(b.__webglFramebuffer[me],D,me);else D.texture.mipmaps.length>0?ge(b.__webglFramebuffer[0],D,0):ge(b.__webglFramebuffer,D,0);else if(j){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=i.createRenderbuffer(),Me(b.__webglDepthbuffer[me],D,!1);else{const ue=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,Se)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Me(b.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,Se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(D,b,j){const me=n.get(D);b!==void 0&&re(me.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Ae(D)}function Fe(D){const b=D.texture,j=n.get(D),me=n.get(b);D.addEventListener("dispose",G),A(D);const ue=D.textures,Se=D.isWebGLCubeRenderTarget===!0,we=ue.length>1;if(we||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=b.version,a.memory.textures++),Se){j.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0){j.__webglFramebuffer[oe]=[];for(let ce=0;ce<b.mipmaps.length;ce++)j.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else j.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(b.mipmaps.length>0){j.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)j.__webglFramebuffer[oe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(we)for(let oe=0,ce=ue.length;oe<ce;oe++){const be=n.get(ue[oe]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&de(D)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let oe=0;oe<ue.length;oe++){const ce=ue[oe];j.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[oe]);const be=r.convert(ce.format,ce.colorSpace),V=r.convert(ce.type),he=T(ce.internalFormat,be,V,ce.normalized,ce.colorSpace,D.isXRRenderTarget===!0),le=it(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,he,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,j.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),W(i.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)re(j.__webglFramebuffer[oe][ce],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else re(j.__webglFramebuffer[oe],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);M(b)?_(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(we){for(let oe=0,ce=ue.length;oe<ce;oe++){const be=ue[oe],V=n.get(be);let he=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,V.__webglTexture),W(he,be),re(j.__webglFramebuffer,D,be,i.COLOR_ATTACHMENT0+oe,he,0),M(be)&&_(he)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(oe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,me.__webglTexture),W(oe,b),b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)re(j.__webglFramebuffer[ce],D,b,i.COLOR_ATTACHMENT0,oe,ce);else re(j.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,oe,0);M(b)?_(oe):b.mipmaps.length>0&&i.texParameteri(oe,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&Ae(D)}function k(D){const b=D.textures;for(let j=0,me=b.length;j<me;j++){const ue=b[j];if(M(ue)&&ue.mipmapsAutoUpdate===!0){const Se=w(D),we=n.get(ue).__webglTexture;t.bindTexture(Se,we),_(Se),t.unbindTexture()}}}const nt=[];function qe(D){if(D.samples>0){if(de(D)===!1){const b=D.textures,j=D.width,me=D.height;let ue=i.COLOR_BUFFER_BIT;const Se=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(D),oe=b.length>1;if(oe)for(let be=0;be<b.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<b.length;be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const V=n.get(b[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,V,0)}i.blitFramebuffer(0,0,j,me,0,0,j,me,ue,i.NEAREST),l===!0&&(nt.length=0,nt.push(i.COLOR_ATTACHMENT0+be),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&nt.push(Se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let be=0;be<b.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const V=n.get(b[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,V,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function it(D){return Math.min(s.maxSamples,D.samples)}function de(D){const b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $e(D){const b=a.render.frame;h.get(D)!==b&&(h.set(D,b),D.update())}function ke(D,b){const j=D.colorSpace,me=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Ha&&j!==Li&&(ht.getTransfer(j)===_t?(me!==Cn||ue!==Mn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",j)),b}function Ve(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=Q,this.getTextureUnits=ne,this.setTextureUnits=pe,this.setTexture2D=xe,this.setTexture2DArray=Le,this.setTexture3D=Te,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=re,this.useMultisampledRTT=de,this.dispose=F}function bv(i,e){function t(n,s=Li){let r;const a=ht.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return i.BYTE;if(n===Ru)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Vt)return i.HALF_FLOAT;if(n===Lu)return i.ALPHA;if(n===Du)return i.RGB;if(n===Cn)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===os)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===Ta||n===Aa||n===Ra||n===Ca)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul||n===fl||n===dl||n===Fa||n===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fl)return r.COMPRESSED_R11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===gl||n===vl||n===xl||n===_l||n===Ml||n===Sl||n===yl||n===bl||n===El||n===wl||n===Tl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Pl||n===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cl)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Nl||n===Ba||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:Ev,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Av extends us{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",m=new Tv,d={},x=t.getContextAttributes();let M=null,_=null;const w=[],T=[],v=new fe;let y=null,A=null;const L=new wn;L.viewport=new Ct;const O=new wn;O.viewport=new Ct;const G=[L,O],N=new Op;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=w[ie];return xe===void 0&&(xe=new yo,w[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=w[ie];return xe===void 0&&(xe=new yo,w[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=w[ie];return xe===void 0&&(xe=new yo,w[ie]=xe),xe.getHandSpace()};function z(ie){const xe=T.indexOf(ie.inputSource);if(xe===-1)return;const Le=w[xe];Le!==void 0&&(Le.update(ie.inputSource,ie.frame,c||a),Le.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",Y);for(let ie=0;ie<w.length;ie++){const xe=T[ie];xe!==null&&(T[ie]=null,w[ie].disconnect(xe))}C=null,F=null,m.reset();for(const ie in d)delete d[ie];if(e.setRenderTarget(M),p=null,f=null,u=null,s=null,_=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(v.width,v.height,!1),A!==null){const ie=A.camera;ie.fov=A.fov,ie.zoom=A.zoom,ie.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",P),s.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(v),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Te=null,X=null;x.depth&&(X=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=x.stencil?xi:Bi,Te=x.stencil?as:si);const I={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(I),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Wt(f.textureWidth,f.textureHeight,{format:Cn,type:Mn,depthTexture:new ls(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Wt(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(ie){for(let xe=0;xe<ie.removed.length;xe++){const Le=ie.removed[xe],Te=T.indexOf(Le);Te>=0&&(T[Te]=null,w[Te].disconnect(Le))}for(let xe=0;xe<ie.added.length;xe++){const Le=ie.added[xe];let Te=T.indexOf(Le);if(Te===-1){for(let I=0;I<w.length;I++)if(I>=T.length){T.push(Le),Te=I;break}else if(T[I]===null){T[I]=Le,Te=I;break}if(Te===-1)break}const X=w[Te];X&&X.connect(Le)}}function H(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let xe=ie.near,Le=ie.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),N.near=O.near=L.near=xe,N.far=O.far=L.far=Le,(C!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,F=N.far),N.layers.mask=ie.layers.mask|6,L.layers.mask=N.layers.mask&-5,O.layers.mask=N.layers.mask&-3;const Te=ie.parent,X=N.cameras;H(N,Te);for(let I=0;I<X.length;I++)H(X[I],Te);N.projectionMatrix.copy(L.projectionMatrix),N.projectionMatrixInverse.copy(L.projectionMatrixInverse),A===null&&ie.isPerspectiveCamera&&(A={camera:ie,fov:ie.fov,zoom:ie.zoom}),Q(ie,N,Te)};function Q(ie,xe,Le){Le===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Le.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ul*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(ie){return d[ie]};let ne=null;function pe(ie,xe){if(h=xe.getViewerPose(c||a),g=xe,h!==null){const Le=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Te=!1;Le.length!==N.cameras.length&&(N.cameras.length=0,Te=!0);for(let R=0;R<Le.length;R++){const W=Le[R];let J=null;if(p!==null)J=p.getViewport(W);else{const Z=u.getViewSubImage(f,W);J=Z.viewport,R===0&&(e.setRenderTargetTextures(_,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(_))}let U=G[R];U===void 0&&(U=new wn,U.layers.enable(R),U.viewport=new Ct,G[R]=U),U.matrix.fromArray(W.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(W.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(J.x,J.y,J.width,J.height),R===0&&(N.matrix.copy(U.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Te===!0&&N.cameras.push(U)}const X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();const R=u.getDepthInformation(Le[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(X&&X.includes("camera-access")&&S){e.state.unbindTexture(),u=n.getBinding();for(let R=0;R<Le.length;R++){const W=Le[R].camera;if(W){let J=d[W];J||(J=new qu,d[W]=J);const U=u.getCameraImage(W);J.sourceTexture=U}}}}for(let Le=0;Le<w.length;Le++){const Te=T[Le],X=w[Le];Te!==null&&X!==void 0&&X.update(Te,xe,c||a)}ne&&ne(ie,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),g=null}const Ne=new af;Ne.setAnimationLoop(pe),this.setAnimationLoop=function(ie){ne=ie},this.dispose=function(){}}}const Rv=new ut,gf=new Qe;gf.set(-1,0,0,0,1,0,0,0,1);function Cv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,tf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,M,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pv(i,e,t,n){let s={},r={};function a(x,M){const _=M.program;n.uniformBlockBinding(x,_,s[x.id])}function o(x,M){let _=s[x.id];_===void 0&&(g(x),_=l(x),s[x.id]=_,x.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(x,w);const T=e.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){const M=i.createBuffer(),_=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,_,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(x){const M=s[x.id],_=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,v=_.length;T<v;T++){const y=_[T];if(Array.isArray(y))for(let A=0,L=y.length;A<L;A++)h(y[A],T,A,w);else h(y,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,M,_,w){if(f(x,M,_,w)===!0){const T=x.__offset,v=x.value;if(Array.isArray(v)){let y=0;for(let A=0;A<v.length;A++){const L=v[A],O=S(L,!0);u(L,x.__data,y),y+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,x.__data)}}function u(x,M,_){typeof x=="number"||typeof x=="boolean"?M[_]=x:x.isMatrix3?(M[_]=x.elements[0],M[_+1]=x.elements[1],M[_+2]=x.elements[2],M[_+3]=0,M[_+4]=x.elements[3],M[_+5]=x.elements[4],M[_+6]=x.elements[5],M[_+7]=0,M[_+8]=x.elements[6],M[_+9]=x.elements[7],M[_+10]=x.elements[8],M[_+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-_),_):x.toArray(M,_)}function f(x,M,_,w){const T=x.value,v=M+"_"+_;if(Array.isArray(T)){w[v]===void 0&&(w[v]=[]);const y=w[v];let A=!1;for(let L=0;L<T.length;L++)p(T[L],y,L)===!0&&(A=!0);return A}return p(T,w,v)}function p(x,M,_){if(M[_]===void 0)return typeof x=="number"||typeof x=="boolean"?M[_]=x:ArrayBuffer.isView(x)?M[_]=x.slice():M[_]=x.clone(),!0;{const w=M[_];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return M[_]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function g(x){const M=x.uniforms;let _=0;const w=16;for(let v=0,y=M.length;v<y;v++){const A=Array.isArray(M[v])?M[v]:[M[v]];for(let L=0,O=A.length;L<O;L++){const G=A[L],N=Array.isArray(G.value)?G.value:[G.value],C=Array.isArray(M[v])||Array.isArray(G.value);let F=_;for(let P=0,Y=N.length;P<Y;P++){const H=N[P],Q=S(H,C),ne=_%w,pe=ne%Q.boundary,Ne=ne+pe;_+=pe,Ne!==0&&w-Ne<Q.storage&&(_+=w-Ne),P===0&&(F=_),_+=Q.storage}const z=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new z((_-F)/Float32Array.BYTES_PER_ELEMENT),G.__offset=F}}const T=_%w;return T>0&&(_+=w-T),x.__size=_,x.__cache={},this}function S(x,M){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=16,_.storage=48):x.isMatrix4?(_.boundary=16,_.storage=64):x.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(x){const M=x.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:d}}const Lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function Dv(){return Vn===null&&(Vn=new Fr(Lv,16,16,os,Vt),Vn.name="DFG_LUT",Vn.minFilter=on,Vn.magFilter=on,Vn.wrapS=gi,Vn.wrapT=gi,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class Nv{constructor(e={}){const{canvas:t=_d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=p,m=new Set([gc,mc,pc]),d=new Set([Mn,si,br,as,uc,fc]),x=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const v=[],y=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1,G=null,N=null,C=null,F=null;this._outputColorSpace=Ht;let z=0,P=0,Y=null,H=-1,Q=null;const ne=new Ct,pe=new Ct;let Ne=null;const ie=new Ye(0);let xe=0,Le=t.width,Te=t.height,X=1,I=null,K=null;const R=new Ct(0,0,Le,Te),W=new Ct(0,0,Le,Te);let J=!1;const U=new wr,Z=new yc;let ee=!1,ae=!1;const re=new ut,Me=new B,ge=new Ct,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Fe(){return Y===null?X:1}let k=n;function nt(E,q){return t.getContext(E,q)}let qe,it,de,$e,ke,Ve,D,b,j,me,ue,Se,we,oe,ce,be,V,he,le,Ce,Ee,Re,Xe;try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),k===null){const q="webgl2";if(k=nt(q,E),k===null)throw nt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(E){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),mt("WebGLRenderer: "+E.message),E}function st(){qe=new Og(k),qe.init(),Ee=new bv(k,qe),it=new wg(k,qe,e,Ee),de=new Sv(k,qe),it.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),N=k.createFramebuffer(),C=k.createFramebuffer(),F=k.createFramebuffer(),$e=new zg(k),ke=new ov,Ve=new yv(k,qe,de,ke,it,Ee,$e),D=new Ug(L),b=new Gp(k),Re=new bg(k,b),j=new Fg(k,b,$e,Re),me=new Gg(k,j,b,Re,$e),he=new Hg(k,it,Ve),ce=new Tg(ke),ue=new av(L,D,qe,it,Re,ce),Se=new Cv(L,ke),we=new cv,oe=new mv(qe),V=new yg(L,D,de,me,g,l),be=new Mv(L,me,it),Xe=new Pv(k,$e,it,de),le=new Eg(k,qe,$e),Ce=new Bg(k,qe,$e),$e.programs=ue.programs,L.capabilities=it,L.extensions=qe,L.properties=ke,L.renderLists=we,L.shadowMap=be,L.state=de,L.info=$e}S!==Mn&&(A=new Vg(S,t.width,t.height,o,s,r));const _e=new Av(L,k);this.xr=_e,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(Le,Te,!1))},this.getSize=function(E){return E.set(Le,Te)},this.setSize=function(E,q,se=!0){if(_e.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=E,Te=q,t.width=Math.floor(E*X),t.height=Math.floor(q*X),se===!0&&(t.style.width=E+"px",t.style.height=q+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(Le*X,Te*X).floor()},this.setDrawingBufferSize=function(E,q,se){Le=E,Te=q,X=se,t.width=Math.floor(E*se),t.height=Math.floor(q*se),this.setViewport(0,0,E,q)},this.setEffects=function(E){if(S===Mn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let q=0;q<E.length;q++)if(E[q].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,q,se,$){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,q,se,$),de.viewport(ne.copy(R).multiplyScalar(Fe()).round())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,q,se,$){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,q,se,$),de.scissor(pe.copy(W).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){de.setScissorTest(J=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(E=!0,q=!0,se=!0){let $=0;if(E){let te=!1;if(Y!==null){const De=Y.texture.format;te=m.has(De)}if(te){const De=Y.texture.type,ze=d.has(De),Pe=V.getClearColor(),Oe=V.getClearAlpha(),We=Pe.r,je=Pe.g,lt=Pe.b;ze?(x[0]=We,x[1]=je,x[2]=lt,x[3]=Oe,k.clearBufferuiv(k.COLOR,0,x)):(M[0]=We,M[1]=je,M[2]=lt,M[3]=Oe,k.clearBufferiv(k.COLOR,0,M))}else $|=k.COLOR_BUFFER_BIT}q&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),V.dispose(),we.dispose(),oe.dispose(),Ve.dispose(),ke.dispose(),D.dispose(),me.dispose(),j.dispose(),Re.dispose(),Xe.dispose(),ue.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Xc),_e.removeEventListener("sessionend",qc),ki.stop()};function Ke(E){E.preventDefault(),ah("WebGLRenderer: Context Lost."),O=!0}function et(){ah("WebGLRenderer: Context Restored."),O=!1;const E=$e.autoReset,q=be.enabled,se=be.autoUpdate,$=be.needsUpdate,te=be.type;st(),$e.autoReset=E,be.enabled=q,be.autoUpdate=se,be.needsUpdate=$,be.type=te}function Ue(E){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mt(E){const q=E.target;q.removeEventListener("dispose",Mt),Yt(q)}function Yt(E){Ei(E),ke.remove(E)}function Ei(E){const q=ke.get(E).programs;q!==void 0&&(q.forEach(function(se){ue.releaseProgram(se)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,se,$,te,De){q===null&&(q=Ae);const ze=te.isMesh&&te.matrixWorld.determinantAffine()<0,Pe=Hf(E,q,se,$,te);de.setMaterial($,ze);let Oe=se.index,We=1;if($.wireframe===!0){if(Oe=j.getWireframeAttribute(se),Oe===void 0)return;We=2}const je=se.drawRange,lt=se.attributes.position;let He=je.start*We,ct=(je.start+je.count)*We;De!==null&&(He=Math.max(He,De.start*We),ct=Math.min(ct,(De.start+De.count)*We)),Oe!==null?(He=Math.max(He,0),ct=Math.min(ct,Oe.count)):lt!=null&&(He=Math.max(He,0),ct=Math.min(ct,lt.count));const Ft=ct-He;if(Ft<0||Ft===1/0)return;Re.setup(te,$,Pe,se,Oe);let Tt,yt=le;if(Oe!==null&&(Tt=b.get(Oe),yt=Ce,yt.setIndex(Tt)),te.isMesh)$.wireframe===!0?(de.setLineWidth($.wireframeLinewidth*Fe()),yt.setMode(k.LINES)):yt.setMode(k.TRIANGLES);else if(te.isLine){let $t=$.linewidth;$t===void 0&&($t=1),de.setLineWidth($t*Fe()),te.isLineSegments?yt.setMode(k.LINES):te.isLineLoop?yt.setMode(k.LINE_LOOP):yt.setMode(k.LINE_STRIP)}else te.isPoints?yt.setMode(k.POINTS):te.isSprite&&yt.setMode(k.TRIANGLES);if(te.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))yt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const $t=te._multiDrawStarts,Ge=te._multiDrawCounts,cn=te._multiDrawCount,vt=Oe?b.get(Oe).bytesPerElement:1,Vi=ke.get($).currentProgram.getUniforms();for(let en=0;en<cn;en++)Vi.setValue(k,"_gl_DrawID",en),yt.render($t[en]/vt,Ge[en])}else if(te.isInstancedMesh)yt.renderInstances(He,Ft,te.count);else if(se.isInstancedBufferGeometry){const $t=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ge=Math.min(se.instanceCount,$t);yt.renderInstances(He,Ft,Ge)}else yt.render(He,Ft)};function Wc(E,q,se,$){G!==null&&E.isNodeMaterial&&G.setObject($,E),ee===!0&&ce.setState(E,se,!1),E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,Qs(E,q,$),E.side=Fi,E.needsUpdate=!0,Qs(E,q,$),E.side=Ut):Qs(E,q,$)}this.compile=function(E,q,se=null){se===null&&(se=E),G!==null&&G.renderStart(E,q,se),T=oe.get(se),T.init(q),y.push(T),se.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),E!==se&&E.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,ee=ce.init(this.clippingPlanes,ae),ee===!0&&ce.setGlobalState(this.clippingPlanes,q),G!==null&&be.render(T.state.shadowsArray,se,q);const $=new Set;return E.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const De=te.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){const Pe=De[ze];Wc(Pe,se,q,te),$.add(Pe)}else Wc(De,se,q,te),$.add(De)}),T=y.pop(),G!==null&&G.renderEnd(),$},this.compileAsync=function(E,q,se=null){const $=this.compile(E,q,se);return new Promise(te=>{function De(){if($.forEach(function(ze){const Oe=ke.get(ze).currentProgram;(Oe===void 0||Oe.isReady())&&$.delete(ze)}),$.size===0){te(E);return}setTimeout(De,10)}qe.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let lo=null;function Bf(E){lo&&lo(E)}function Xc(){ki.stop()}function qc(){ki.start()}const ki=new af;ki.setAnimationLoop(Bf),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){lo=E,_e.setAnimationLoop(E),E===null?ki.stop():ki.start()},_e.addEventListener("sessionstart",Xc),_e.addEventListener("sessionend",qc),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;G!==null&&G.renderStart(E,q);const se=_e.enabled===!0&&_e.isPresenting===!0,$=A!==null&&(Y===null||se)&&A.begin(L,Y);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(q),q=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,q,Y),T=oe.get(E,y.length),T.init(q),T.state.textureUnits=Ve.getTextureUnits(),y.push(T),re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?Z.setFromArrayCamera(q):U.setFromProjectionMatrix(re,zn,q.reversedDepth),ae=this.localClippingEnabled,ee=ce.init(this.clippingPlanes,ae),w=we.get(E,v.length),w.init(),v.push(w),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){const ze=L.xr.getDepthSensingMesh();ze!==null&&co(ze,q,-1/0,L.sortObjects)}co(E,q,0,L.sortObjects),w.finish(),G!==null&&G.updateLights(T.state.lightsArray),L.sortObjects===!0&&w.sort(I,K),Be=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Be&&V.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),ee===!0&&ce.beginShadows();const te=T.state.shadowsArray;if(be.render(te,E,q),ee===!0&&ce.endShadows(),($&&A.hasRenderPass())===!1){const ze=w.opaque,Pe=w.transmissive;if(T.setupLights(),q.isArrayCamera){const Oe=q.cameras;if(Pe.length>0)for(let We=0,je=Oe.length;We<je;We++){const lt=Oe[We];Kc(ze,Pe,E,lt)}Be&&V.render(E);for(let We=0,je=Oe.length;We<je;We++){const lt=Oe[We];Yc(w,E,lt,lt.viewport)}}else Pe.length>0&&Kc(ze,Pe,E,q),Be&&V.render(E),Yc(w,E,q)}Y!==null&&P===0&&(Ve.updateMultisampleRenderTarget(Y),Ve.updateRenderTargetMipmap(Y)),$&&A.end(L),E.isScene===!0&&E.onAfterRender(L,E,q),Re.resetDefaultState(),H=-1,Q=null,y.pop(),y.length>0?(T=y[y.length-1],Ve.setTextureUnits(T.state.textureUnits),ee===!0&&ce.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,G!==null&&G.renderEnd()};function co(E,q,se,$){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)se=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){const ze=q.isArrayCamera?Z:U;if(!E.frustumCulled||E.intersectsFrustum(ze)){$&&ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Pe=me.update(E),Oe=E.material;Oe.visible&&w.push(E,Pe,Oe,se,ge.z,null,q)}}else if(E.isMesh||E.isLine||E.isPoints){const ze=q.isArrayCamera?Z:U;if(!E.frustumCulled||E.intersectsFrustum(ze)){const Pe=me.update(E),Oe=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ge.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ge.copy(Pe.boundingSphere.center)),ge.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(Oe)){const We=Pe.groups;for(let je=0,lt=We.length;je<lt;je++){const He=We[je],ct=Oe[He.materialIndex];ct&&ct.visible&&w.push(E,Pe,ct,se,ge.z,He,q)}}else Oe.visible&&w.push(E,Pe,Oe,se,ge.z,null,q)}}}const De=E.children;for(let ze=0,Pe=De.length;ze<Pe;ze++)co(De[ze],q,se,$)}function Yc(E,q,se,$){const{opaque:te,transmissive:De,transparent:ze}=E;T.setupLightsView(se),ee===!0&&ce.setGlobalState(L.clippingPlanes,se),$&&de.viewport(ne.copy($)),te.length>0&&Gr(te,q,se),De.length>0&&Gr(De,q,se),ze.length>0&&Gr(ze,q,se),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Kc(E,q,se,$){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){const He=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new Wt(1,1,{generateMipmaps:!0,type:He?Vt:Mn,minFilter:vi,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const De=T.state.transmissionRenderTarget[$.id],ze=$.viewport||ne;De.setSize(ze.z*L.transmissionResolutionScale,ze.w*L.transmissionResolutionScale);const Pe=L.getRenderTarget(),Oe=L.getActiveCubeFace(),We=L.getActiveMipmapLevel();L.setRenderTarget(De),L.getClearColor(ie),xe=L.getClearAlpha(),xe<1&&L.setClearColor(16777215,.5),L.clear(),Be&&V.render(se);const je=L.toneMapping;L.toneMapping=Si;const lt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),ee===!0&&ce.setGlobalState(L.clippingPlanes,$),Gr(E,se,$),Ve.updateMultisampleRenderTarget(De),Ve.updateRenderTargetMipmap(De),qe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ct=0,Ft=q.length;ct<Ft;ct++){const Tt=q[ct],{object:yt,geometry:$t,material:Ge,group:cn}=Tt;if(Ge.side===Ut&&yt.layers.test($.layers)){const vt=Ge.side;Ge.side=vn,Ge.needsUpdate=!0,Zc(yt,se,$,$t,Ge,cn),Ge.side=vt,Ge.needsUpdate=!0,He=!0}}He===!0&&(Ve.updateMultisampleRenderTarget(De),Ve.updateRenderTargetMipmap(De))}L.setRenderTarget(Pe,Oe,We),L.setClearColor(ie,xe),lt!==void 0&&($.viewport=lt),L.toneMapping=je}function Gr(E,q,se){const $=q.isScene===!0?q.overrideMaterial:null;for(let te=0,De=E.length;te<De;te++){const ze=E[te],{object:Pe,geometry:Oe,group:We}=ze;let je=ze.material;je.allowOverride===!0&&$!==null&&(je=$),Pe.layers.test(se.layers)&&Zc(Pe,q,se,Oe,je,We)}}function Zc(E,q,se,$,te,De){G!==null&&te.isNodeMaterial&&G.setObject(E,te),E.onBeforeRender(L,q,se,$,te,De),E.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),te.onBeforeRender(L,q,se,$,E,De),te.transparent===!0&&te.side===Ut&&te.forceSinglePass===!1?(te.side=vn,te.needsUpdate=!0,L.renderBufferDirect(se,q,$,te,E,De),te.side=Fi,te.needsUpdate=!0,L.renderBufferDirect(se,q,$,te,E,De),te.side=Ut):L.renderBufferDirect(se,q,$,te,E,De),E.onAfterRender(L,q,se,$,te,De)}function Jc(E){let q=0;for(const se of E)se.texture!==null&&q++;return q}function Qs(E,q,se){q.isScene!==!0&&(q=Ae);const $=ke.get(E),te=T.state.lights,De=T.state.shadowsArray,ze=te.state.version,Pe=ue.getParameters(E,te.state,De,q,se,T.state.lightProbeGridArray),Oe=ue.getProgramCacheKey(Pe);let We=$.programs;$.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?q.environment:null,$.fog=q.fog;const je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;$.envMap=D.get(E.envMap||$.environment,je),$.envMapRotation=$.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Mt),We=new Map,$.programs=We,$.programVariants=new Map);let lt=We.get(Oe);if(lt!==void 0){if($.currentProgram===lt&&$.lightsStateVersion===ze)return jc(E,Pe),lt}else Pe.uniforms=ue.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,se,Pe),E.onBeforeCompile(Pe,L),lt=ue.acquireProgram(Pe,Oe),We.set(Oe,lt),$.uniforms=Pe.uniforms;const He=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ce.uniform),jc(E,Pe),$.needsLights=kf(E),$.lightsStateVersion=ze,$.needsLights&&(He.ambientLightColor.value=te.state.ambient,He.lightProbe.value=te.state.probe,He.sunLights.value=te.state.sun,He.sunLightShadows.value=te.state.sunShadow,He.directionalLights.value=te.state.directional,He.directionalLightShadows.value=te.state.directionalShadow,He.spotLights.value=te.state.spot,He.spotLightShadows.value=te.state.spotShadow,He.rectAreaLights.value=te.state.rectArea,He.ltc_1.value=te.state.rectAreaLTC1,He.ltc_2.value=te.state.rectAreaLTC2,He.pointLights.value=te.state.point,He.pointLightShadows.value=te.state.pointShadow,He.hemisphereLights.value=te.state.hemi,He.sunShadowMatrix.value=te.state.sunShadowMatrix,He.sunShadowCascade.value=te.state.sunShadowCascade,He.directionalShadowMatrix.value=te.state.directionalShadowMatrix,He.spotLightMatrix.value=te.state.spotLightMatrix,He.spotLightMap.value=te.state.spotLightMap,He.pointShadowMatrix.value=te.state.pointShadowMatrix),$.numLightProbeGrids=Jc(T.state.lightProbeGridArray),$.currentProgram=lt,$.uniformsList=null,lt}function zf(E,q,se,$,te){const De=ke.get(E),ze=De.currentProgram.id+","+$+","+te;let Pe=De.programVariants.get(ze);return Pe===void 0?(Pe=Qs(E,q,se),De.programVariants.set(ze,Pe)):(De.currentProgram=Pe,De.uniformsList=null,De.outputColorSpace=$,De.toneMapping=te),Pe}function Qc(E){if(E.uniformsList===null){const q=E.currentProgram.getUniforms();E.uniformsList=Pa.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function jc(E,q){const se=ke.get(E);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Hf(E,q,se,$,te){q.isScene!==!0&&(q=Ae),Ve.resetTextureUnits();const De=q.fog,ze=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?q.environment:null,Pe=Y===null?L.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ht.workingColorSpace,Oe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,We=D.get($.envMap||ze,Oe),je=$.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,Ft=!!se.morphAttributes.color;let Tt=Si;$.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Tt=L.toneMapping);const yt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$t=yt!==void 0?yt.length:0,Ge=ke.get($),cn=T.state.lights;if(ee===!0&&(ae===!0||E!==Q)){const Pt=E===Q&&$.id===H;ce.setState($,E,Pt)}let vt=!1,Vi=!1;$.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==cn.state.version||te.isBatchedMesh&&Ge.batching===!1||!te.isBatchedMesh&&Ge.batching===!0||te.isBatchedMesh&&Ge.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ge.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ge.instancing===!1||!te.isInstancedMesh&&Ge.instancing===!0||te.isSkinnedMesh&&Ge.skinning===!1||!te.isSkinnedMesh&&Ge.skinning===!0||te.isInstancedMesh&&Ge.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ge.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ge.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ge.instancingMorph===!1&&te.morphTexture!==null||Ge.envMap!==We||$.fog===!0&&Ge.fog!==De||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ce.numPlanes||Ge.numIntersection!==ce.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==lt||Ge.morphTargets!==He||Ge.morphNormals!==ct||Ge.morphColors!==Ft||Ge.morphTargetsCount!==$t||Ge.numLightProbeGrids!==Jc(T.state.lightProbeGridArray)?vt=!0:(Ge.outputColorSpace!==Pe||Ge.toneMapping!==Tt)&&(Vi=!0):(vt=!0,Ge.__version=$.version);let en=Ge.currentProgram;(vt===!0||Vi===!0)&&(en=Vi===!0?zf($,q,te,Pe,Tt):Qs($,q,te),G&&$.isNodeMaterial&&G.onUpdateProgram($,en,Ge));let kr=!1,wi=!1,Wi=!1;const dt=en.getUniforms(),Qt=Ge.uniforms;if(de.useProgram(en.program)&&(kr=!0,wi=!0,Wi=!0),$.id!==H&&(H=$.id,wi=!0),kr||Q!==E){de.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(k,"projectionMatrix",E.projectionMatrix),dt.setValue(k,"viewMatrix",E.matrixWorldInverse);const Kt=dt.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,Me.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&dt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,wi=!0,Wi=!0)}if(Ge.needsLights&&(cn.state.sunShadowMap.length>0&&dt.setValue(k,"sunShadowMap",cn.state.sunShadowMap,Ve),cn.state.directionalShadowMap.length>0&&dt.setValue(k,"directionalShadowMap",cn.state.directionalShadowMap,Ve),cn.state.spotShadowMap.length>0&&dt.setValue(k,"spotShadowMap",cn.state.spotShadowMap,Ve),cn.state.pointShadowMap.length>0&&dt.setValue(k,"pointShadowMap",cn.state.pointShadowMap,Ve)),te.isSkinnedMesh){dt.setOptional(k,te,"bindMatrix"),dt.setOptional(k,te,"bindMatrixInverse");const Pt=te.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),dt.setValue(k,"boneTexture",Pt.boneTexture,Ve))}te.isBatchedMesh&&(dt.setOptional(k,te,"batchingTexture"),dt.setValue(k,"batchingTexture",te._matricesTexture,Ve),dt.setOptional(k,te,"batchingIdTexture"),dt.setValue(k,"batchingIdTexture",te._indirectTexture,Ve),dt.setOptional(k,te,"batchingColorTexture"),te._colorsTexture!==null&&dt.setValue(k,"batchingColorTexture",te._colorsTexture,Ve));const Ln=se.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&he.update(te,se,en),(wi||Ge.receiveShadow!==te.receiveShadow)&&(Ge.receiveShadow=te.receiveShadow,dt.setValue(k,"receiveShadow",te.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&q.environment!==null&&(Qt.envMapIntensity.value=q.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Dv()),wi){if(dt.setValue(k,"toneMappingExposure",L.toneMappingExposure),Ge.needsLights&&Gf(Qt,Wi),De&&$.fog===!0&&Se.refreshFogUniforms(Qt,De),Se.refreshMaterialUniforms(Qt,$,X,Te,T.state.transmissionRenderTarget[E.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){const Pt=_;let Kt=0;for(const ai of T.state.lightProbeGridArray)ai.texture!==null&&(Pt.textures[Kt]=ai.texture,Pt.min[Kt]=ai.boundingBox.min,Pt.max[Kt]=ai.boundingBox.max,Pt.resolution[Kt]=ai.resolution,Kt++);for(const ai in Pt)Pt[ai].length=Kt;Qt.probesSH.value=Pt.textures,Qt.probesMin.value=Pt.min,Qt.probesMax.value=Pt.max,Qt.probesResolution.value=Pt.resolution}Pa.upload(k,Qc(Ge),Qt,Ve)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pa.upload(k,Qc(Ge),Qt,Ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(k,"center",te.center),dt.setValue(k,"modelViewMatrix",te.modelViewMatrix),dt.setValue(k,"normalMatrix",te.normalMatrix),dt.setValue(k,"modelMatrix",te.matrixWorld),$.uniformsGroups!==void 0){const Pt=$.uniformsGroups;for(let Kt=0,ai=Pt.length;Kt<ai;Kt++){const eh=Pt[Kt];Xe.update(eh,en),Xe.bind(eh,en)}}return en}function Gf(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.sunLights.needsUpdate=q,E.sunLightShadows.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function kf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(E,q,se){const $=ke.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ke.get(E.texture).__webglTexture=q,ke.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:se,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,q){const se=ke.get(E);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(E,q=0,se=0){Y=E,z=q,P=se;let $=null,te=!1,De=!1;if(E){const Pe=ke.get(E);if(Pe.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(k.FRAMEBUFFER,Pe.__webglFramebuffer),ne.copy(E.viewport),pe.copy(E.scissor),Ne=E.scissorTest,de.viewport(ne),de.scissor(pe),de.setScissorTest(Ne),H=-1;return}else if(Pe.__webglFramebuffer===void 0)Ve.setupRenderTarget(E);else if(Pe.__hasExternalTextures)Ve.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const je=E.depthTexture;if(Pe.__boundDepthTexture!==je){if(je!==null&&ke.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(E)}}const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(De=!0);const We=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[q])?$=We[q][se]:$=We[q],te=!0):E.samples>0&&Ve.useMultisampledRTT(E)===!1?$=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?$=We[se]:$=We,ne.copy(E.viewport),pe.copy(E.scissor),Ne=E.scissorTest}else ne.copy(R).multiplyScalar(X).floor(),pe.copy(W).multiplyScalar(X).floor(),Ne=J;if(se!==0&&($=N),de.bindFramebuffer(k.FRAMEBUFFER,$)&&de.drawBuffers(E,$),de.viewport(ne),de.scissor(pe),de.setScissorTest(Ne),te){const Pe=ke.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,se)}else if(De){const Pe=q;for(let Oe=0;Oe<E.textures.length;Oe++){const We=ke.get(E.textures[Oe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Oe,We.__webglTexture,se,Pe)}}else if(E!==null&&se!==0){const Pe=ke.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pe.__webglTexture,se)}H=-1};function $c(E){const q=ke.get(E);return(q.__readFormat!==E.format||q.__readType!==E.type)&&(q.__readFormat=E.format,q.__readType=E.type,q.__formatReadable=it.textureFormatReadable(E.format),q.__typeReadable=it.textureTypeReadable(E.type)),q}this.readRenderTargetPixels=function(E,q,se,$,te,De,ze,Pe=0){if(!(E&&E.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Oe=Oe[ze],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){de.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const We=E.textures[Pe],je=We.format,lt=We.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe);const He=$c(We);if(He.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-$&&se>=0&&se<=E.height-te&&k.readPixels(q,se,$,te,Ee.convert(je),Ee.convert(lt),De)}finally{const We=Y!==null?ke.get(Y).__webglFramebuffer:null;de.bindFramebuffer(k.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,q,se,$,te,De,ze,Pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Oe=Oe[ze],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(q>=0&&q<=E.width-$&&se>=0&&se<=E.height-te){de.bindFramebuffer(k.FRAMEBUFFER,Oe);const We=E.textures[Pe],je=We.format,lt=We.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe);const He=$c(We);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,De.byteLength,k.STREAM_READ),k.readPixels(q,se,$,te,Ee.convert(je),Ee.convert(lt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ft=Y!==null?ke.get(Y).__webglFramebuffer:null;de.bindFramebuffer(k.FRAMEBUFFER,Ft);const Tt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Md(k,Tt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,De),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ct),k.deleteSync(Tt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,q=null,se=0){const $=Math.pow(2,-se),te=Math.floor(E.image.width*$),De=Math.floor(E.image.height*$),ze=q!==null?q.x:0,Pe=q!==null?q.y:0;Ve.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,ze,Pe,te,De),de.unbindTexture()},this.copyTextureToTexture=function(E,q,se=null,$=null,te=0,De=0){let ze,Pe,Oe,We,je,lt,He,ct,Ft;const Tt=E.isCompressedTexture?E.mipmaps[De]:E.image;if(se!==null)ze=se.max.x-se.min.x,Pe=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,je=se.min.y,lt=se.isBox3?se.min.z:0;else{const dt=Math.pow(2,-te);ze=Math.floor(Tt.width*dt),Pe=Math.floor(Tt.height*dt),E.isDataArrayTexture?Oe=Tt.depth:E.isData3DTexture?Oe=Math.floor(Tt.depth*dt):Oe=1,We=0,je=0,lt=0}$!==null?(He=$.x,ct=$.y,Ft=$.z):(He=0,ct=0,Ft=0);const yt=Ee.convert(q.format),$t=Ee.convert(q.type);let Ge;q.isData3DTexture?(Ve.setTexture3D(q,0),Ge=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Ve.setTexture2DArray(q,0),Ge=k.TEXTURE_2D_ARRAY):(Ve.setTexture2D(q,0),Ge=k.TEXTURE_2D),de.activeTexture(k.TEXTURE0),de.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),de.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),de.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const cn=de.getParameter(k.UNPACK_ROW_LENGTH),vt=de.getParameter(k.UNPACK_IMAGE_HEIGHT),Vi=de.getParameter(k.UNPACK_SKIP_PIXELS),en=de.getParameter(k.UNPACK_SKIP_ROWS),kr=de.getParameter(k.UNPACK_SKIP_IMAGES);de.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),de.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),de.pixelStorei(k.UNPACK_SKIP_PIXELS,We),de.pixelStorei(k.UNPACK_SKIP_ROWS,je),de.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);const wi=E.isDataArrayTexture||E.isData3DTexture,Wi=q.isDataArrayTexture||q.isData3DTexture;if(E.isDepthTexture){const dt=ke.get(E),Qt=ke.get(q),Ln=ke.get(dt.__renderTarget),Pt=ke.get(Qt.__renderTarget);de.bindFramebuffer(k.READ_FRAMEBUFFER,Ln.__webglFramebuffer),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Kt=0;Kt<Oe;Kt++)wi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,te,lt+Kt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(q).__webglTexture,De,Ft+Kt)),k.blitFramebuffer(We,je,We+ze,je+Pe,He,ct,He+ze,ct+Pe,k.DEPTH_BUFFER_BIT,k.NEAREST);de.bindFramebuffer(k.READ_FRAMEBUFFER,null),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(te!==0||E.isRenderTargetTexture||ke.has(E)){const dt=ke.get(E),Qt=ke.get(q);de.bindFramebuffer(k.READ_FRAMEBUFFER,C),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let Ln=0;Ln<Oe;Ln++)wi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dt.__webglTexture,te,lt+Ln):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dt.__webglTexture,te),Wi?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.__webglTexture,De,Ft+Ln):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qt.__webglTexture,De),te!==0?k.blitFramebuffer(We,je,We+ze,je+Pe,He,ct,He+ze,ct+Pe,k.COLOR_BUFFER_BIT,k.NEAREST):Wi?k.copyTexSubImage3D(Ge,De,He,ct,Ft+Ln,We,je,ze,Pe):k.copyTexSubImage2D(Ge,De,He,ct,We,je,ze,Pe);de.bindFramebuffer(k.READ_FRAMEBUFFER,null),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Wi?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Ge,De,He,ct,Ft,ze,Pe,Oe,yt,$t,Tt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Ge,De,He,ct,Ft,ze,Pe,Oe,yt,Tt.data):k.texSubImage3D(Ge,De,He,ct,Ft,ze,Pe,Oe,yt,$t,Tt):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,De,He,ct,ze,Pe,yt,$t,Tt.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,De,He,ct,Tt.width,Tt.height,yt,Tt.data):k.texSubImage2D(k.TEXTURE_2D,De,He,ct,ze,Pe,yt,$t,Tt);de.pixelStorei(k.UNPACK_ROW_LENGTH,cn),de.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),de.pixelStorei(k.UNPACK_SKIP_PIXELS,Vi),de.pixelStorei(k.UNPACK_SKIP_ROWS,en),de.pixelStorei(k.UNPACK_SKIP_IMAGES,kr),De===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&k.generateMipmap(Ge),de.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&Ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),de.unbindTexture()},this.resetState=function(){z=0,P=0,Y=null,de.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const ts={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Iv=new Nc(-1,1,1,-1,0,1);class Uv extends wt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const Ov=new Uv;class zr{constructor(e){this._mesh=new gt(Ov,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Iv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vf extends Gi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=an.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class lu extends Gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Fv extends Gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Bv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vf(ts),this.copyPass.material.blending=fn,this.timer=new Fp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lu!==void 0&&(a instanceof lu?n=!0:a instanceof Fv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zv extends Gi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const ga={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ut},cameraProjectionMatrixInverse:{value:new ut},cameraWorldMatrix:{value:new ut},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},va={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Vo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Hv(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Gv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=t[a],l=2*Math.PI*o/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new Fr(s,e,e);return r.wrapS=ii,r.wrapT=ii,r.needsUpdate=!0,r}function Gv(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}const xa={defines:{SAMPLES:16,SAMPLE_VECTORS:xf(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraProjectionMatrixInverse:{value:new ut},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function xf(i,e,t){const n=kv(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function kv(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new B(Math.cos(r),Math.sin(r),a))}return n}class Vv{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,g=e-f,S=t-p;let m,d;g>S?(m=1,d=0):(m=0,d=1);const x=g-m+h,M=S-d+h,_=g-1+2*h,w=S-1+2*h,T=l&255,v=c&255,y=this.perm[T+this.perm[v]]%12,A=this.perm[T+m+this.perm[v+d]]%12,L=this.perm[T+1+this.perm[v+1]]%12;let O=.5-g*g-S*S;O<0?n=0:(O*=O,n=O*O*this._dot(this.grad3[y],g,S));let G=.5-x*x-M*M;G<0?s=0:(G*=G,s=G*G*this._dot(this.grad3[A],x,M));let N=.5-_*_-w*w;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[L],_,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),p=1/6,g=(h+u+f)*p,S=h-g,m=u-g,d=f-g,x=e-S,M=t-m,_=n-d;let w,T,v,y,A,L;x>=M?M>=_?(w=1,T=0,v=0,y=1,A=1,L=0):x>=_?(w=1,T=0,v=0,y=1,A=0,L=1):(w=0,T=0,v=1,y=1,A=0,L=1):M<_?(w=0,T=0,v=1,y=0,A=1,L=1):x<_?(w=0,T=1,v=0,y=0,A=1,L=1):(w=0,T=1,v=0,y=1,A=1,L=0);const O=x-w+p,G=M-T+p,N=_-v+p,C=x-y+2*p,F=M-A+2*p,z=_-L+2*p,P=x-1+3*p,Y=M-1+3*p,H=_-1+3*p,Q=h&255,ne=u&255,pe=f&255,Ne=this.perm[Q+this.perm[ne+this.perm[pe]]]%12,ie=this.perm[Q+w+this.perm[ne+T+this.perm[pe+v]]]%12,xe=this.perm[Q+y+this.perm[ne+A+this.perm[pe+L]]]%12,Le=this.perm[Q+1+this.perm[ne+1+this.perm[pe+1]]]%12;let Te=.6-x*x-M*M-_*_;Te<0?s=0:(Te*=Te,s=Te*Te*this._dot3(this.grad3[Ne],x,M,_));let X=.6-O*O-G*G-N*N;X<0?r=0:(X*=X,r=X*X*this._dot3(this.grad3[ie],O,G,N));let I=.6-C*C-F*F-z*z;I<0?a=0:(I*=I,a=I*I*this._dot3(this.grad3[xe],C,F,z));let K=.6-P*P-Y*Y-H*H;return K<0?o=0:(K*=K,o=K*K*this._dot3(this.grad3[Le],P,Y,H)),32*(s+r+a+o)}noise4d(e,t,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,p,g;const S=(e+t+n+s)*l,m=Math.floor(e+S),d=Math.floor(t+S),x=Math.floor(n+S),M=Math.floor(s+S),_=(m+d+x+M)*c,w=m-_,T=d-_,v=x-_,y=M-_,A=e-w,L=t-T,O=n-v,G=s-y,N=A>L?32:0,C=A>O?16:0,F=L>O?8:0,z=A>G?4:0,P=L>G?2:0,Y=O>G?1:0,H=N+C+F+z+P+Y,Q=a[H][0]>=3?1:0,ne=a[H][1]>=3?1:0,pe=a[H][2]>=3?1:0,Ne=a[H][3]>=3?1:0,ie=a[H][0]>=2?1:0,xe=a[H][1]>=2?1:0,Le=a[H][2]>=2?1:0,Te=a[H][3]>=2?1:0,X=a[H][0]>=1?1:0,I=a[H][1]>=1?1:0,K=a[H][2]>=1?1:0,R=a[H][3]>=1?1:0,W=A-Q+c,J=L-ne+c,U=O-pe+c,Z=G-Ne+c,ee=A-ie+2*c,ae=L-xe+2*c,re=O-Le+2*c,Me=G-Te+2*c,ge=A-X+3*c,Ae=L-I+3*c,Be=O-K+3*c,Fe=G-R+3*c,k=A-1+4*c,nt=L-1+4*c,qe=O-1+4*c,it=G-1+4*c,de=m&255,$e=d&255,ke=x&255,Ve=M&255,D=o[de+o[$e+o[ke+o[Ve]]]]%32,b=o[de+Q+o[$e+ne+o[ke+pe+o[Ve+Ne]]]]%32,j=o[de+ie+o[$e+xe+o[ke+Le+o[Ve+Te]]]]%32,me=o[de+X+o[$e+I+o[ke+K+o[Ve+R]]]]%32,ue=o[de+1+o[$e+1+o[ke+1+o[Ve+1]]]]%32;let Se=.6-A*A-L*L-O*O-G*G;Se<0?h=0:(Se*=Se,h=Se*Se*this._dot4(r[D],A,L,O,G));let we=.6-W*W-J*J-U*U-Z*Z;we<0?u=0:(we*=we,u=we*we*this._dot4(r[b],W,J,U,Z));let oe=.6-ee*ee-ae*ae-re*re-Me*Me;oe<0?f=0:(oe*=oe,f=oe*oe*this._dot4(r[j],ee,ae,re,Me));let ce=.6-ge*ge-Ae*Ae-Be*Be-Fe*Fe;ce<0?p=0:(ce*=ce,p=ce*ce*this._dot4(r[me],ge,Ae,Be,Fe));let be=.6-k*k-nt*nt-qe*qe-it*it;return be<0?g=0:(be*=be,g=be*be*this._dot4(r[ue],k,nt,qe,it)),27*(h+u+f+p+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}}class qn extends Gi{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Hv(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:Vt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},ga.defines),uniforms:an.clone(ga.uniforms),vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pp,this.normalMaterial.blending=fn,this.pdMaterial=new Dt({defines:Object.assign({},xa.defines),uniforms:an.clone(xa.uniforms),vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},va.defines),uniforms:an.clone(va.uniforms),vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,blending:fn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:an.clone(ts.uniforms),vertexShader:ts.vertexShader,fragmentShader:ts.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Jo,blendDst:ur,blendEquation:Jn,blendSrcAlpha:Zo,blendDstAlpha:ur,blendEquationAlpha:Jn}),this.blendMaterial=new Dt({uniforms:an.clone(Vo.uniforms),vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:yu,blendSrc:Jo,blendDst:ur,blendEquation:Jn,blendSrcAlpha:Zo,blendDstAlpha:ur,blendEquationAlpha:Jn}),this._fsQuad=new zr(null),this._originalClearColor=new Ye,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const s=new ls;s.format=xi,s.type=as,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:Ot,magFilter:Ot,type:Vt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=xf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case qn.OUTPUT.Off:break;case qn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new Vv,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Fr(s,e,e,Cn,Mn);return r.wrapS=ii,r.wrapT=ii,r.needsUpdate=!0,r}}qn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Wv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gs extends Gi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,a,{type:Vt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Wt(r,a,{type:Vt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Wt(r,a,{type:Vt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Wv;this.highPassUniforms=an.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=an.clone(ts.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:ts.vertexShader,fragmentShader:ts.fragmentShader,premultipliedAlpha:!0,blending:Fs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new Or,this._fsQuad=new zr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Dt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Gs.BlurDirectionX=new fe(1,0);Gs.BlurDirectionY=new fe(0,1);const _a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xv extends Gi{constructor(){super(),this.isOutputPass=!0,this.uniforms=an.clone(_a.uniforms),this.material=new nf({name:_a.name,uniforms:this.uniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader}),this._fsQuad=new zr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ma={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Sa={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Wo={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class qv extends Gi{constructor(){super(),this._edgesRT=new Wt(1,1,{depthBuffer:!1,type:Vt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Wt(1,1,{depthBuffer:!1,type:Vt}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Jt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=on,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Jt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=Ot,this._searchTexture.minFilter=Ot,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=an.clone(Ma.uniforms),this._materialEdges=new Dt({defines:Object.assign({},Ma.defines),uniforms:this._uniformsEdges,vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader}),this._uniformsWeights=an.clone(Sa.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Dt({defines:Object.assign({},Sa.defines),uniforms:this._uniformsWeights,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader}),this._uniformsBlend=an.clone(Wo.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Dt({uniforms:this._uniformsBlend,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader}),this._fsQuad=new zr(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const rr=new B;function Rn(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;rr.copy(e),rr[n]=0,rr.normalize();const c=.5*a/(a+o),h=1-rr.angleTo(i)/l;return Math.sign(rr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class Hi extends tt{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new B,c=new B,h=new B(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,S=new B,m=.5/a;for(let d=0,x=0;d<u.length;d+=3,x+=2)switch(l.fromArray(u,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[d+0]=h.x*Math.sign(l.x)+c.x*r,u[d+1]=h.y*Math.sign(l.y)+c.y*r,u[d+2]=h.z*Math.sign(l.z)+c.z*r,f[d+0]=c.x,f[d+1]=c.y,f[d+2]=c.z,Math.floor(d/g)){case 0:S.set(1,0,0),p[x+0]=Rn(S,c,"z","y",r,n),p[x+1]=1-Rn(S,c,"y","z",r,t);break;case 1:S.set(-1,0,0),p[x+0]=1-Rn(S,c,"z","y",r,n),p[x+1]=1-Rn(S,c,"y","z",r,t);break;case 2:S.set(0,1,0),p[x+0]=1-Rn(S,c,"x","z",r,e),p[x+1]=Rn(S,c,"z","x",r,n);break;case 3:S.set(0,-1,0),p[x+0]=1-Rn(S,c,"x","z",r,e),p[x+1]=1-Rn(S,c,"z","x",r,n);break;case 4:S.set(0,0,1),p[x+0]=1-Rn(S,c,"x","y",r,e),p[x+1]=1-Rn(S,c,"y","x",r,t);break;case 5:S.set(0,0,-1),p[x+0]=Rn(S,c,"x","y",r,e),p[x+1]=1-Rn(S,c,"y","x",r,t);break}}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.segments,e.radius)}}const _i=(i,e,t)=>{let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function Yv(i,e,t,n,s){const r=Math.floor(i),a=Math.floor(e),o=i-r,l=e-a,c=(r%t+t)%t,h=(c+1)%t,u=(a%n+n)%n,f=(u+1)%n,p=o*o*(3-2*o),g=l*l*(3-2*l),S=_i(c,u,s),m=_i(h,u,s),d=_i(c,f,s),x=_i(h,f,s);return S+(m-S)*p+(d-S)*g+(S-m-d+x)*p*g}function xt(i,e,t,n,s,r){let a=0,o=.5,l=0;for(let c=0;c<s;c++)a+=o*Yv(i*t,e*n,t,n,r+c*17),l+=o,o*=.5,t*=2,n*=2;return a/l}const zt=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},un=(i,e,t)=>i+(e-i)*t,ar=i=>Math.min(255,Math.max(0,i*255));let no=16;function Wl(i,e,t){const n=new Fr(i,e,e,Cn);return n.wrapS=n.wrapT=ii,n.magFilter=on,n.minFilter=vi,n.generateMipmaps=!0,n.anisotropy=no,t&&(n.colorSpace=Ht),n.needsUpdate=!0,n}function _f(i,e,t){const n=new Uint8Array(e*e*4),s=t*e/512,r=e-1;for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=(i[a*e+(o-1&r)]-i[a*e+(o+1&r)])*s,c=(i[(a-1&r)*e+o]-i[(a+1&r)*e+o])*s,h=1/Math.hypot(l,c,1),u=(a*e+o)*4;n[u]=(l*h*.5+.5)*255,n[u+1]=(c*h*.5+.5)*255,n[u+2]=(h*.5+.5)*255,n[u+3]=255}return Wl(n,e,!1)}function bn(i,e,t,n={}){const s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Float32Array(s),l={};for(let h=0;h<i;h++)for(let u=0;u<i;u++){l.h=.5,l.r=l.g=l.b=.5,l.rough=.8,l.metal=0,t(u/i,h/i,l);const f=h*i+u,p=f*4;o[f]=l.h,r[p]=ar(l.r),r[p+1]=ar(l.g),r[p+2]=ar(l.b),r[p+3]=255,a[p]=255,a[p+1]=ar(l.rough),a[p+2]=ar(l.metal),a[p+3]=255}const c=Wl(a,i,!1);return new at({map:Wl(r,i,!0),normalMap:_f(o,i,e),roughnessMap:c,metalnessMap:c,roughness:1,metalness:1,...n})}function cu(i,e,t,n,s){const r=Math.floor(e*n),a=i*t+r%2*.5,o=Math.floor(a),l=a-o,c=e*n-r;return{d:Math.min(Math.min(l,1-l)/t,Math.min(c,1-c)/n),id:_i((o%t+t)%t,r,s)}}function ya(i,e,t,n=.57,s=0){return bn(i,2.5,(r,a,o)=>{const l=xt(r,a,6,6,5,t),c=xt(r,a,48,48,3,t+3),h=xt(r,a,32,2,3,t+9),u=zt(n,n+.04,l*.7+c*.2+h*.1),f=.85+.3*c-.2*zt(.5,.7,h);o.r=un(e[0]*f,.24+.2*c,u),o.g=un(e[1]*f,.12+.08*c,u),o.b=un(e[2]*f,.06,u),o.rough=un(.36+.25*c,.92,u),o.metal=s*(1-u),o.h=.5+c*.08-u*.12})}function Kv(i){no=i.capabilities.getMaxAnisotropy();const e={};e.paving=bn(1024,2.4,(n,s,r)=>{const a=cu(n,s,4,8,3),o=zt(.005,.0015,a.d),l=xt(n,s,96,96,3,4),c=xt(n,s,3,3,5,5),h=zt(.62,.7,xt(n,s,160,160,2,6));let u=(.43+.13*(a.id-.5)+.1*(l-.5)-.1*h)*(.8+.4*c)*(1-.6*o);r.r=u*1.03,r.g=u,r.b=u*.95,r.rough=un(.72,.38,zt(.5,.62,c))+o*.2,r.h=zt(0,.012,a.d)*.7+l*.3+a.id*.1}),e.stone=bn(1024,7,(n,s,r)=>{const a=cu(n,s,3,6,13),o=zt(.009,.002,a.d),l=xt(n,s,64,64,4,14),c=xt(n,s,4,4,5,15),h=zt(.5,.62,c)*zt(.03,0,a.d)+zt(.6,.7,c)*.6;let u=(.4+.16*(a.id-.5)+.16*(l-.5))*(.75+.5*c)*(1-.65*o);r.r=un(u*1.05,.13,h*.7),r.g=un(u,.19,h*.7),r.b=un(u*.9,.08,h*.7),r.rough=.9,r.h=zt(0,.02,a.d)*.6+l*.5+a.id*.2}),e.grass=bn(1024,6,(n,s,r)=>{const a=xt(n,s,4,4,5,21),o=xt(n,s,200,200,2,22),l=xt(n,s,40,40,3,23),c=.55+.6*o*l+.3*a;r.r=.13*c+.05*a,r.g=.27*c,r.b=.06*c,r.rough=.85,r.h=o*.7+l*.3}),e.asphalt=bn(1024,3,(n,s,r)=>{const a=xt(n,s,256,256,2,31),o=xt(n,s,5,5,5,32),l=zt(.006,.002,Math.abs(xt(n,s,4,4,5,33)-.5)),c=(.1+.07*a+.05*o)*(1-.5*l);r.r=c,r.g=c,r.b=c*1.04,r.rough=.9-.1*zt(.52,.6,o),r.h=a-l}),e.concrete=bn(512,3,(n,s,r)=>{const a=xt(n,s,3,3,6,41),o=xt(n,s,96,96,3,42),l=zt(.5,.7,xt(n,s,40,2,4,43)),c=(.5+.4*(a-.5)+.1*(o-.5))*(1-.3*l);r.r=c,r.g=c*.99,r.b=c*.96,r.rough=.86,r.h=a*.4+o*.4}),e.wood=bn(512,4,(n,s,r)=>{const a=Math.floor(s*6),o=s*6-a,l=xt(n,s,3,90,4,51+a),c=zt(.06,.02,Math.min(o,1-o)),h=.75+.3*_i(a,0,52);r.r=(.33+.2*l)*h*(1-.7*c),r.g=(.2+.13*l)*h*(1-.7*c),r.b=(.1+.07*l)*h*(1-.7*c),r.rough=.55+.25*l,r.h=l*.5-c}),e.bark=bn(512,9,(n,s,r)=>{const a=xt(n,s,14,3,5,61),o=xt(n,s,60,20,3,62),l=.1+.22*a*a+.06*o;r.r=l*1.1,r.g=l*.95,r.b=l*.75,r.rough=.95,r.h=a+o*.2}),e.tile=bn(512,9,(n,s,r)=>{const a=Math.sqrt(Math.max(0,1-Math.pow(n*8%1*2-1,2))),o=s*12%1,l=xt(n,s,48,48,3,71),c=xt(n,s,4,4,4,72),h=(.13+.07*a+.06*l)*(.75+.5*c)*(1-.5*zt(.12,0,o));r.r=h*.92,r.g=h,r.b=h*1.04,r.rough=.3+.4*c,r.h=a*.8+o*.35+l*.05}),e.steel=bn(512,2,(n,s,r)=>{const a=xt(n,s,8,8,5,81),o=zt(.6,.64,xt(n,s,2,160,3,82)),l=.07+.06*a+.05*o;r.r=l,r.g=l,r.b=l*1.05,r.rough=.34+.3*a,r.metal=1,r.h=a*.4+o*.3}),e.galv=bn(512,2,(n,s,r)=>{const a=xt(n,s,40,40,2,91),o=xt(n,s,4,4,5,92),l=.5+.22*(a-.5)+.2*(o-.5);r.r=l,r.g=l*1.01,r.b=l*1.04,r.rough=.45+.3*o,r.metal=.9,r.h=a}),e.fins=bn(256,10,(n,s,r)=>{const a=Math.sin(n*Math.PI*2*24),o=.55+.25*a;r.r=o,r.g=o,r.b=o*1.03,r.rough=.32,r.metal=1,r.h=a*.5+.5}),e.pcb=bn(512,3,(n,s,r)=>{const o=Math.floor(n*24),l=Math.floor(s*24),c=n*24-o,h=s*24-l,u=_i(o,l,101),f=_i(o>>2,l>>2,102),p=f<.45?Math.abs(h-.5):f<.8?Math.abs(c-.5):Math.abs(c-h)*.7,g=zt(.16,.1,p%.34)*(u<.85?1:0),S=zt(.2,.14,Math.hypot(c-.5,h-.5))*(u>.9?1:0),m=_i(o>>1,l>>1,103)>.93?zt(.45,.4,Math.max(Math.abs(c-.5),Math.abs(h-.5))):0,d=xt(n,s,96,96,2,104);r.r=un(un(.02,.05,g),.75,Math.max(S,m)),r.g=un(un(.035,.09,g),.6,Math.max(S,m)),r.b=un(un(.03,.06,g),.25,Math.max(S,m)),r.rough=un(.55,.3,Math.max(S,m))+d*.1,r.metal=Math.max(S,m),r.h=g*.3+m*.6+S*.5}),e.red=ya(512,[.42,.05,.035],111,.62),e.white=ya(512,[.82,.83,.84],121,.66),e.green=ya(512,[.1,.22,.16],131,.6),e.yellow=ya(512,[.8,.55,.04],141,.6);const t=(n,s,r=0,a={})=>new at({color:n,roughness:s,metalness:r,...a});return e.shroud=t(723724,.5,.2,{normalMap:e.concrete.normalMap,normalScale:new fe(.25,.25)}),e.porcelain=t(4858902,.18),e.glass=t(660512,.06,.9),e.gold=t(14263361,.3,1),e.copper=t(12085306,.3,1),e.rubber=t(526344,.9),e.lotus=t(2379807,.45,0,{side:Ut}),e.emit=(n,s)=>new at({color:0,emissive:n,emissiveIntensity:s}),e}function Zv(){const e=new Float32Array(262144);for(let t=0;t<512;t++)for(let n=0;n<512;n++)e[t*512+n]=xt(n/512,t/512,6,6,5,201)+.4*xt(n/512,t/512,24,24,3,202);return _f(e,512,10)}function Jv(){const i=document.createElement("canvas");i.width=64,i.height=512;const e=i.getContext("2d");e.strokeStyle="#3c4a1c",e.lineWidth=2,e.beginPath(),e.moveTo(32,0),e.lineTo(32,512),e.stroke();for(let n=3;n<509;n+=4)for(const s of[-1,1]){const r=8+Math.random()*7,a=(.5+Math.random()*.5)*s,o=38+Math.random()*44;e.fillStyle=`rgb(${o*.62|0},${o|0},${o*.22|0})`,e.save(),e.translate(32,n+Math.random()*5),e.rotate(a),e.beginPath(),e.ellipse(0,r/2,1.7,r/2,0,0,7),e.fill(),e.restore()}const t=new bi(i);return t.colorSpace=Ht,t.anisotropy=no,t}function ji(i,{w:e=512,h:t=256,bg:n="#0a2a4a",fg:s="#ffffff",font:r='bold 64px "Microsoft YaHei","Segoe UI",sans-serif'}={}){const a=document.createElement("canvas");a.width=e,a.height=t;const o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,e,t),o.fillStyle=s,o.textAlign="center",o.textBaseline="middle",i.forEach((c,h)=>{o.font=c.font||r,o.fillStyle=c.color||s,o.fillText(c.text,e/2,t*(h+.5)/i.length)});const l=new bi(a);return l.colorSpace=Ht,l.anisotropy=no,l}function Lr(i,e,t=0,n=0,s=0){const r=i.attributes.position,a=i.attributes.normal,o=i.attributes.uv;for(let l=0;l<r.count;l++){const c=Math.abs(a.getX(l)),h=Math.abs(a.getY(l)),u=Math.abs(a.getZ(l)),f=r.getX(l)+t,p=r.getY(l)+n,g=r.getZ(l)+s;c>=h&&c>=u?o.setXY(l,g/e,p/e):h>=u?o.setXY(l,f/e,g/e):o.setXY(l,f/e,p/e)}return i}class io extends gt{constructor(){const e=io.SkyShader,t=new Dt({name:e.name,uniforms:an.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:vn,depthWrite:!1});super(new tt(1,1,1),t),this.isSky=!0}}io.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new B},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Qv extends gt{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new B(.70707,.70707,0),u=new Ye(t.sunColor!==void 0?t.sunColor:16777215),f=new Ye(t.waterColor!==void 0?t.waterColor:8355711),p=t.eye!==void 0?t.eye:new B(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,S=t.side!==void 0?t.side:Fi,m=t.fog!==void 0?t.fog:!1,d=new pi,x=new B,M=new B,_=new B,w=new ut,T=new B(0,0,-1),v=new Ct,y=new B,A=new B,L=new Ct,O=new ut,G=new wn,N=new Wt(s,r,{type:Vt}),C={name:"MirrorShader",uniforms:an.merge([Ie.fog,Ie.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ut},sunColor:{value:new Ye(8355711)},sunDirection:{value:new B(.70707,.70707,0)},eye:{value:new B},waterColor:{value:new Ye(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},F=new Dt({name:C.name,uniforms:an.clone(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,lights:!0,side:S,fog:m});F.uniforms.mirrorSampler.value=N.texture,F.uniforms.textureMatrix.value=O,F.uniforms.alpha.value=o,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=u,F.uniforms.waterColor.value=f,F.uniforms.sunDirection.value=h,F.uniforms.distortionScale.value=g,F.uniforms.eye.value=p,n.material=F,n.onBeforeRender=function(z,P,Y){if(M.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(Y.matrixWorld),w.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(w),y.subVectors(M,_),y.dot(x)>0)return;y.reflect(x).negate(),y.add(M),w.extractRotation(Y.matrixWorld),T.set(0,0,-1),T.applyMatrix4(w),T.add(_),A.subVectors(M,T),A.reflect(x).negate(),A.add(M),G.position.copy(y),G.up.set(0,1,0),G.up.applyMatrix4(w),G.up.reflect(x),G.lookAt(A),G.far=Y.far,G.updateMatrixWorld(),G.projectionMatrix.copy(Y.projectionMatrix),O.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),O.multiply(G.projectionMatrix),O.multiply(G.matrixWorldInverse),d.setFromNormalAndCoplanarPoint(x,M),d.applyMatrix4(G.matrixWorldInverse),v.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const H=G.projectionMatrix;L.x=(Math.sign(v.x)+H.elements[8])/H.elements[0],L.y=(Math.sign(v.y)+H.elements[9])/H.elements[5],L.z=-1,L.w=(1+H.elements[10])/H.elements[14],v.multiplyScalar(2/v.dot(L)),H.elements[2]=v.x,H.elements[6]=v.y,H.elements[10]=v.z+1-a,H.elements[14]=v.w,p.setFromMatrixPosition(Y.matrixWorld);const Q=z.getRenderTarget(),ne=z.xr.enabled,pe=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(N),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(P,G),n.visible=!0,z.xr.enabled=ne,z.shadowMap.autoUpdate=pe,z.setRenderTarget(Q);const Ne=Y.viewport;Ne!==void 0&&z.state.viewport(Ne)}}}const ye=.8,En=[[554,-351],[434,-334],[266,-206],[224,-83],[121,-32],[-40,66],[-168,149],[-286,212],[-349,191],[-429,112],[-488,-9],[-648,-130],[-826,-231],[-866,-108],[-838,10],[-865,-47],[-1246,-383],[-1464,-560],[-1705,-576],[-1851,-595],[-2079,-445],[-2213,-418],[-2509,-594],[-2598,-566],[-2630,-630],[-2503,-648],[-2369,-804],[-2313,-867],[-2141,-963],[-2099,-1028],[-2193,-1063],[-2274,-1161],[-2347,-1335],[-2469,-1430],[-2633,-1324],[-2705,-1387],[-2748,-1542],[-2835,-1580],[-2944,-1785],[-2915,-1940],[-2900,-2080],[-2450,-2370],[-2110,-2780],[-1900,-2900],[-1580,-2640],[-1430,-2630],[-1017,-2740],[-606,-2790],[-300,-2790],[-260,-2700],[-300,-2422],[-240,-2130],[-175,-2045],[50,-1840],[80,-1740],[165,-1560],[410,-1305],[535,-1125],[540,-1040],[590,-950],[595,-860],[550,-770],[620,-600],[689,-386]],Dr=[[22,-1208],[-48,-1542],[-64,-1727],[-111,-1866],[-205,-1844],[-267,-1953],[-280,-2084],[-424,-2077],[-456,-2005],[-463,-1812],[-410,-1539],[-187,-1349],[-72,-1275]],Di=[{x:-1680,z:-1340,r:150,name:"小瀛洲"},{x:-909,z:-1515,r:45,name:"湖心亭"},{x:-845,z:-1772,r:32,name:"阮公墩"}],Zs=(i,e,t=[])=>{const n=[0];for(let s=1;s<i.length;s++)n.push(n[s-1]+Math.hypot(i[s][0]-i[s-1][0],i[s][1]-i[s-1][1]));return{pts:i,half:e,bridges:t,cum:n,len:n[n.length-1]}},mi=Zs([[585,-790],[450,-871],[117,-1122],[8,-1204]],6,[{s:62,half:22,rise:3},{s:570,half:18,rise:2.4}]),Us=Zs([[-250,-2415],[-414,-2347],[-625,-2292],[-1100,-2152],[-1645,-2015],[-2142,-1868],[-2586,-1642],[-2870,-1520]],8,[330,770,1210,1650,2090,2500].map(i=>({s:i,half:18,rise:2.6}))),Uc=Zs([[-300,-2070],[-215,-2150]],5,[{s:58,half:20,rise:2.2}]),Oc=Zs([[-36,76],[-56,26]],2.5),Fc=Zs([[-2462,-736],[-2412,-712]],2.5),Mf=[mi,Us,Uc,Oc,Fc],Sf=[[-60,16],[-700,-520],[-1900,-800],[-2404,-708]],ks={湖滨路:[[[565,-276],[466,-241],[428,-168],[143,14],[-280,242],[-377,241],[-483,113],[-493,71],[-610,18],[-706,1],[-911,27]],12,"paving"],南山路:[[[-402,237],[-490,116],[-614,28],[-945,29],[-1018,-18],[-1283,-136],[-1450,-242],[-1846,-200],[-1987,-261],[-2106,-365],[-2254,-404],[-2370,-480],[-2429,-494],[-2659,-469],[-2719,-783],[-2687,-973],[-2760,-1407],[-3077,-2029]],14,"asphalt"],杨公堤:[[[-3077,-2029],[-2465,-2415],[-2133,-2829],[-2005,-2929],[-1904,-2956],[-1808,-2924],[-1557,-2679],[-1434,-2679],[-1017,-2789],[-606,-2836],[-269,-2842],[-151,-2884]],12,"asphalt"],北山街:[[[-151,-2884],[-225,-2749],[-224,-2663],[-273,-2422],[-207,-2142],[-146,-2063],[76,-1858],[105,-1747],[188,-1575],[435,-1322],[465,-1255],[561,-1134],[566,-1047],[596,-985],[620,-874],[620,-840],[577,-757],[661,-567],[807,-238]],11,"asphalt"],环城西路:[[[2078,-573],[887,-268],[807,-238],[467,-180]],18,"asphalt"],庆春路:[[[467,-180],[471,443],[430,1128],[431,1540]],24,"asphalt"],延安路:[[[1803,284],[-548,369],[-1483,421]],24,"asphalt"],解放路:[[[-402,237],[-385,248],[-406,380],[-366,1125],[-365,1415]],20,"asphalt"],平海路:[[[-17,110],[26,1106]],14,"asphalt"],学士路:[[[153,59],[160,348],[182,830]],10,"asphalt"],长生路:[[[307,-76],[345,720]],10,"asphalt"],仁和路:[[[-148,181],[-142,357],[-125,720]],10,"asphalt"],邮电路:[[[-268,372],[-243,955]],10,"asphalt"],吴山路:[[[-719,472],[170,456]],10,"asphalt"],东坡路:[[[-274,252],[285,227],[465,125]],12,"paving"],圣塘路:[[[467,-180],[428,-168]],12,"asphalt"]},ba=ks,Wa=[...ba.湖滨路[0].slice(2,6),...ba.南山路[0],...ba.杨公堤[0].slice(1),...ba.北山街[0].slice(1),[640,-209],[480,-183]],Xl=[["in77 A",-138,-31,176,234,24,"in77 · A"],["in77 B",-262,-160,262,345,24,"in77 · B"],["in77 D",-74,-27,253,335,26,"in77 · D"],["东坡大世界",-137,-80,255,340,22,"东坡大世界"],["in77 E",-375,-280,270,360,26,"in77 · E"],["in77 C1",-133,-17,385,451,30,"in77 · C1"],["in77 C2",-262,-147,385,455,30,"in77 · C2"],["in77 C3",-386,-277,391,447,30,"in77 · C3"],["湖滨in88",7,145,158,218,22,"湖滨 in88"],["Apple 西湖",8,36,283,314,15,"Apple 西湖"],["工联CC",11,137,375,448,34,"工联CC"],["工联CC二期",80,159,462,538,40,""],["解百",-537,-420,397,461,36,"解百"],["解百新世纪",-528,-417,474,561,60,"解百新世纪"],["涌金广场",-858,-734,229,364,70,"涌金广场"],["杭州嘉里中心",601,765,103,293,80,"嘉里中心 KERRY"]],Xn=[{name:"凤起路",en:"Fengqi Road",x:1006,z:318},{name:"龙翔桥",en:"Longxiangqiao",x:79,z:355},{name:"定安路",en:"Ding'an Road",x:-900,z:732}],Fn={leifeng:[-2784,-654],baochu:[770,-1186],chenghuang:[-1819,606],pavilion:[-10,-1245],fountain:[-34,3],qjnt:[-1300,5300],lakeCentre:[-1150,-1450]};function Kn(i,e,t){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const a=i[s],o=i[r];a[1]>t!=o[1]>t&&e<(o[0]-a[0])*(t-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n}function so(i,e,t,n){let s={d:1e9,s:0,i:0};for(let r=0;r<i.length-1;r++){const a=i[r][0],o=i[r][1],l=i[r+1][0]-a,c=i[r+1][1]-o,h=l*l+c*c,u=Math.max(0,Math.min(1,((t-a)*l+(n-o)*c)/h)),f=Math.hypot(t-a-l*u,n-o-c*u);f<s.d&&(s={d:f,s:(e?e[r]:0)+Math.sqrt(h)*u,i:r})}return s}function ns(i,e){e=Math.max(0,Math.min(i.len,e));let t=0;for(;t<i.pts.length-2&&i.cum[t+1]<e;)t++;const n=i.pts[t],s=i.pts[t+1],r=i.cum[t+1]-i.cum[t],a=(e-i.cum[t])/r;return[n[0]+(s[0]-n[0])*a,n[1]+(s[1]-n[1])*a,(s[0]-n[0])/r,(s[1]-n[1])/r]}const Bc=Zs,ql=(i,e)=>{let t=0;for(const n of i.bridges)Math.abs(e-n.s)<n.half&&(t=Math.max(t,n.rise*.5*(1+Math.cos(Math.PI*(e-n.s)/n.half))));return t},yf=(i,e,t,n)=>{const s=so(i.pts,i.cum,e,t);return s.d<=i.half+n?s:null},jv=[mi,Us,Uc];function ln(i,e){if(i<700&&e<-700)for(const t of jv){const n=yf(t,i,e,1);if(n)return ye+ql(t,n.s)}return ye}function $n(i,e){if(!Kn(En,i,e))return!0;for(const t of Mf)if(yf(t,i,e,-.5))return!0;if(Kn(Dr,i,e))return!0;for(const t of Di)if(Math.hypot(i-t.x,e-t.z)<t.r-1)return!0;return!1}const bf=[[565,-290],[466,-255],[428,-182],[143,0],[-280,228],[-377,227],[-483,99],[-610,30],[-911,40],[-911,9e3],[2500,9e3],[2500,-560],[887,-282],[807,-252]],Rs={leifeng:[-2800,-640,85,40],baochu:[800,-1250,180,70],chenghuang:[-1819,606,240,60]};function Ji(i,e,t){let n=!1;for(let s=0,r=i.length-2;s<i.length;r=s,s+=2)i[s+1]>t!=i[r+1]>t&&e<(i[r]-i[s])*(t-i[s+1])/(i[r+1]-i[s+1])+i[s]&&(n=!n);return n}const Ef=(i,e,t,n)=>Ji(i,e,t)||Ji(i,e+n,t)||Ji(i,e-n,t)||Ji(i,e,t+n)||Ji(i,e,t-n),Xo=new B(-.5,.62,-.6).normalize(),$v=21e-5,ex=new Ye(.62,.69,.76);function tx(i,e){i.fog=new Mc(ex,$v);const t=new io;t.scale.setScalar(8e3);const n=t.material.uniforms;n.turbidity.value=3.2,n.rayleigh.value=1.1,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.86,n.sunPosition.value.copy(Xo),n.cloudCoverage.value=.3,n.cloudDensity.value=.45,n.cloudElevation.value=.5;const s=new Hu;s.add(t);const r=new Pr(e);i.environment=r.fromScene(s,0,.1,2e4).texture,r.dispose(),i.environmentIntensity=.65,i.add(t);const a=new Up(16772303,4.4);a.castShadow=!0,a.shadow.mapSize.set(4096,4096);const o=a.shadow.camera;o.left=o.bottom=-90,o.right=o.top=90,o.near=1,o.far=520,a.shadow.bias=-4e-4,a.shadow.normalBias=.06,i.add(a,a.target),i.add(new Dp(13622512,5722175,.55));const l=new Qv(new Gt(24e3,24e3),{textureWidth:1024,textureHeight:1024,waterNormals:Zv(),sunDirection:Xo,sunColor:16774368,waterColor:1919556,distortionScale:2.2,fog:!0});l.rotation.x=-Math.PI/2,l.material.uniforms.size.value=5,i.add(l);const[c,h]=Fn.lakeCentre;function u(f,p,g,S,m,d,x,M){const w=[],T=[];for(let y=0;y<=420;y++){const A=y/420,L=p+(g-p)*A,O=Math.min(1,Math.min(A,1-A)*9),G=(S+m*(xt(A,.3,M,1,5,x)-.3)*1.6)*O,N=Math.cos(L),C=Math.sin(L);for(const[F,z]of[[-2.4,0],[-1.3,.55],[-.5,.9],[0,1],[1.2,0]])w.push(c+N*(f+F*G),G*z-.5,h+C*(f+F*G));if(y<420)for(let F=0;F<4;F++){const z=y*5+F;T.push(z,z+5,z+1,z+1,z+5,z+6)}}const v=new wt;v.setAttribute("position",new Ze(w,3)),v.setIndex(T),v.computeVertexNormals(),i.add(new gt(v,new at({color:d,roughness:1,side:Ut})))}return u(2400,2.62,6.42,60,80,2374430,311,30),u(3050,2.5,6.5,130,140,2769444,321,22),u(3900,2.4,6.6,210,220,3164459,331,14),{sun:a,water:l,sky:t,update(f,p,g){l.material.uniforms.time.value+=p*.7,n.time.value=f;const S=Math.round(g.x/4)*4,m=Math.round(g.z/4)*4;a.target.position.set(S,0,m),a.position.set(S,0,m).addScaledVector(Xo,260)}}}function nx(i,e){const t=new kt;i.add(t);const n=[],s=[],r=[],a=[];let o=11;const l=(R=0,W=1)=>R+(o=o*16807%2147483647)/2147483647*(W-R),c=48,h=new Map,u={boxes:[],circles:[],polys:[]},f=(R,W)=>{const J=R*100003+W;let U=h.get(J);return U||h.set(J,U={boxes:[],circles:[],polys:[]}),U},p=(R,W,J,U,Z,ee)=>{for(let ae=Math.floor((J-3)/c);ae<=Math.floor((U+3)/c);ae++)for(let re=Math.floor((Z-3)/c);re<=Math.floor((ee+3)/c);re++)f(ae,re)[R].push(W)},g=R=>p("boxes",R,R.min.x,R.max.x,R.min.z,R.max.z),S=R=>p("circles",R,R.x-R.r,R.x+R.r,R.z-R.r,R.z+R.r),m=(R,W)=>h.get(Math.floor(R/c)*100003+Math.floor(W/c))||u,d=R=>{let W=1e9,J=-1e9,U=1e9,Z=-1e9;for(let ee=0;ee<R.pts.length;ee+=2)W=Math.min(W,R.pts[ee]),J=Math.max(J,R.pts[ee]),U=Math.min(U,R.pts[ee+1]),Z=Math.max(Z,R.pts[ee+1]);p("polys",R,W,J,U,Z)},x=(R,W)=>m(R,W).polys.some(J=>Ji(J.pts,R,W));function M(R,W){const J=R||W?new kt:i,U=R||W?new kt:t;(R||W)&&(J.position.set(R,0,W),U.position.set(R,0,W),i.add(J),t.add(U),J.updateMatrixWorld(),U.updateMatrixWorld());function Z(re,Me,ge,Ae,Be,{collide:Fe=!1,ry:k=0,rx:nt=0,shadow:qe=!0,parent:it=U}={}){const de=new gt(re,Me);return de.position.set(ge,Ae,Be),de.rotation.set(nt,k,0),de.castShadow=qe,de.receiveShadow=!0,it.add(de),Fe&&(de.updateWorldMatrix(!0,!1),g(new Pn().setFromObject(de))),de}return{scene:J,M:e,solids:U,lamps:n,tick:s,noAO:r,dyn:a,rnd:l,add:Z,box:(re,Me,ge,Ae,Be,Fe,k,{s:nt=2,r:qe=0,...it}={})=>Z(Lr(qe?new Hi(re,Me,ge,3,qe):new tt(re,Me,ge),nt,Be,Fe,k),Ae,Be,Fe,k,it),cyl:(re,Me,ge,Ae,Be,Fe,k,nt={},qe=20)=>Z(new ft(re,Me,ge,qe),Ae,Be,Fe,k,nt),near:m,dx:R,dz:W,inBuilding:x,polys:{push:d},colliders:{push:(...re)=>re.forEach(Me=>g(Me.translate(new B(R,0,W))))},circles:{push:(...re)=>re.forEach(Me=>S({x:Me.x+R,z:Me.z+W,r:Me.r})),some:()=>!1},shifted:(re,Me)=>M(re,Me)}}const _=M(0,0),{add:w,box:T}=_,v=ye,y=(R,W=ja)=>{const J=new W;return R.forEach(([U,Z],ee)=>ee?J.lineTo(U,-Z):J.moveTo(U,-Z)),J},A=(R,W,J,U)=>{const Z=new Cc(R).rotateX(-Math.PI/2),ee=Z.attributes.uv;for(let re=0;re<ee.count;re++)ee.setXY(re,ee.getX(re)/U,ee.getY(re)/U);const ae=new gt(Z,W);return ae.position.y=J,ae.receiveShadow=!0,t.add(ae),ae},L=y([[-6500,-7e3],[5e3,-7e3],[5e3,9500],[-6500,9500]]);L.holes.push(y(En,Bl)),A(L,e.grass,v,4),A(y(Dr),e.grass,v,4);const O=(R,W=2)=>{const J=R.clone();return J.polygonOffset=!0,J.polygonOffsetFactor=J.polygonOffsetUnits=-W,J};A(y([[565,-290],[466,-255],[428,-182],[143,0],[-280,228],[-377,227],[-483,99],[-610,30],[-911,40],[-911,9e3],[2500,9e3],[2500,-560],[887,-282],[807,-252]]),O(e.concrete),v+.03,3);const G=e.stone.clone();G.side=Ut;const N=R=>{const W=[],J=[],U=[];let Z=0;for(let ae=0;ae<=R.length;ae++){const re=R[ae%R.length],Me=R[(ae+R.length-1)%R.length];if(ae&&(Z+=Math.hypot(re[0]-Me[0],re[1]-Me[1])),W.push(re[0],v,re[1],re[0],-1.6,re[1]),J.push(Z/2,0,Z/2,-1.2),ae){const ge=ae*2-2;U.push(ge,ge+1,ge+2,ge+2,ge+1,ge+3)}}const ee=new wt;ee.setAttribute("position",new Ze(W,3)),ee.setAttribute("uv",new Ze(J,2)),ee.setIndex(U),ee.computeVertexNormals(),t.add(new gt(ee,G))};N(En),N(Dr);for(const R of Di)w(Lr(new ft(R.r,R.r+1,2.6,56),2),[e.stone,e.grass,e.stone],R.x,v-1.3,R.z).castShadow=!1;function C(R,W,J,U,{tile:Z=4,offset:ee=0}={}){const ae=[],re=[],Me=[];let ge=0;for(let Fe=0;Fe<R.length;Fe++){const k=R[Math.max(0,Fe-1)],nt=R[Math.min(R.length-1,Fe+1)],qe=Math.hypot(nt[0]-k[0],nt[1]-k[1])||1,it=-(nt[1]-k[1])/qe,de=(nt[0]-k[0])/qe;Fe&&(ge+=Math.hypot(R[Fe][0]-R[Fe-1][0],R[Fe][1]-R[Fe-1][1]));for(const $e of[1,-1])ae.push(R[Fe][0]+it*(ee+$e*W/2),U,R[Fe][1]+de*(ee+$e*W/2)),re.push($e*W/2/Z,ge/Z);if(Fe){const $e=Fe*2-2;Me.push($e,$e+1,$e+2,$e+2,$e+1,$e+3)}}const Ae=new wt;Ae.setAttribute("position",new Ze(ae,3)),Ae.setAttribute("uv",new Ze(re,2)),Ae.setIndex(Me),Ae.computeVertexNormals();const Be=new gt(Ae,J);return J.side=Ut,Be.receiveShadow=!0,t.add(Be),Be}const F=(R,W=30)=>{const J=[];for(let U=0;U<R.length-1;U++){const Z=R[U],ee=R[U+1],ae=Math.max(1,Math.round(Math.hypot(ee[0]-Z[0],ee[1]-Z[1])/W));for(let re=0;re<ae;re++)J.push([Z[0]+(ee[0]-Z[0])*re/ae,Z[1]+(ee[1]-Z[1])*re/ae])}return J.push(R[R.length-1]),J},z=O(e.asphalt,4),P=O(e.paving,4),Y=O(new at({color:15131346,roughness:.6}),7),H=O(e.concrete,3);for(const[R,W,J]of Object.values(ks)){const U=F(R);if(J==="asphalt"){if(C(U,W+5,H,v+.05,{tile:3}),C(U,W,z,v+.07),C(U,.2,Y,v+.09),W>=14)for(const Z of[-1,1])C(U,.15,Y,v+.09,{offset:Z*(W/2-.5)})}else C(U,W,P,v+.07,{tile:2})}const Q=F(En.slice(1,16),15),ne=Q[5][0]-Q[3][0],pe=Q[5][1]-Q[3][1],Ne=Math.hypot(ne,pe),ie=$n(Q[4][0]-pe/Ne*6,Q[4][1]+ne/Ne*6)&&!$n(Q[4][0]+pe/Ne*6,Q[4][1]-ne/Ne*6)?1:-1;C(Q,9,P,v+.06,{tile:2,offset:ie*5.5}),C(F([[-2462,-736],[-2560,-700],[-2700,-680],[-2770,-660]]),6,P,v+.1,{tile:2});const xe=[],Le=[];for(const R of[mi,Us,Uc]){const W=Math.ceil(R.len/8),J=R.len/W;for(let U=0;U<W;U++){const Z=(U+.5)*J,[ee,ae,re,Me]=ns(R,Z),ge=ql(R,Z-J/2),Ae=ql(R,Z+J/2),Be=R.bridges.some(k=>Math.abs(Z-k.s)<k.half-4),Fe={x:ee,z:ae,y:v+(ge+Ae)/2,yaw:Math.atan2(re,Me),pitch:-Math.atan2(Ae-ge,J),len:J+.3,w:R.half*2,thick:Be?.9:3.4};if(xe.push(Fe),R.bridges.some(k=>Math.abs(Z-k.s)<k.half+2))for(const k of[-1,1])Le.push({...Fe,x:ee-Me*k*(R.half-.3),z:ae+re*k*(R.half-.3)})}}const Te=new It;Te.rotation.order="YXZ";const X=e.paving.clone();for(const R of["map","normalMap","roughnessMap"])X[R]=X[R].clone(),X[R].repeat.set(6,4);X.metalnessMap=X.roughnessMap;const I=new _n(new tt(1,1,1).translate(0,-.5,0),X,xe.length);xe.forEach((R,W)=>{Te.position.set(R.x,R.y,R.z),Te.rotation.set(R.pitch,R.yaw,0),Te.scale.set(R.w,R.thick,R.len),Te.updateMatrix(),I.setMatrixAt(W,Te.matrix)});const K=new _n(new tt(1,1,1).translate(0,.5,0),e.stone,Le.length*2);Le.forEach((R,W)=>{Te.position.set(R.x,R.y,R.z),Te.rotation.set(R.pitch,R.yaw,0),Te.scale.set(.3,1.1,.3),Te.updateMatrix(),K.setMatrixAt(W*2,Te.matrix),Te.position.y=R.y+.85,Te.scale.set(.16,.2,R.len),Te.updateMatrix(),K.setMatrixAt(W*2+1,Te.matrix)});for(const R of[I,K])R.castShadow=R.receiveShadow=!0,R.frustumCulled=!1,t.add(R);for(const R of[Oc,Fc]){const[W,J,U,Z]=ns(R,R.len/2);T(R.half*2,.25,R.len+4,e.wood,W,v-.1,J,{s:1}).rotation.y=Math.atan2(U,Z);for(const ee of[.1,.5,.9])for(const ae of[-1,1]){const[re,Me]=ns(R,R.len*ee);_.cyl(.12,.12,2.6,e.wood,re-Z*ae*R.half,v-1.1,Me+U*ae*R.half,{},8)}}return _.ribbon=C,_.dense=F,_.over=O,_}function ro(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new wt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0,p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.morphAttributes[g]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=hu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let S=0;S<a[h].length;++S)p.push(a[h][S][f]);const g=hu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function hu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Hn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){const S=h.getComponent(f,g);o.setComponent(f+u,g,S)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function ix(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");for(let s=0;s<300;s++){const r=Math.random()*6.3,a=Math.sqrt(Math.random())*104,o=80+Math.random()*120,l=4+Math.random()*2.6,c=9+Math.random()*6;t.save(),t.translate(256/2+Math.cos(r)*a,256/2+Math.sin(r)*a),t.rotate(Math.random()*6.3),t.fillStyle=`rgb(${o*.93|0},${o|0},${o*.72|0})`,t.beginPath(),t.moveTo(-c,0),t.quadraticCurveTo(0,-l,c,0),t.quadraticCurveTo(0,l,-c,0),t.fill(),t.strokeStyle=`rgba(${o*.6|0},${o*.7|0},${o*.45|0},.9)`,t.lineWidth=.7,t.beginPath(),t.moveTo(-c,0),t.lineTo(c,0),t.stroke(),t.restore()}const n=new bi(e);return n.colorSpace=Ht,n.anisotropy=8,n}function sx(i,e,t){const n=new B(0,6.4,0),s=3.4,r=2.6,a=[],o=[],l=[],c=[],h=[],u=[];for(let M=0;M<170;M++){const _=e(0,6.283),w=e(-.45,1),T=Math.sqrt(1-w*w),v=new B(Math.cos(_)*T,w,Math.sin(_)*T),y=.45+.55*Math.sqrt(e()),A=new B(v.x*s*y,v.y*r*y,v.z*s*y).add(n),L=e(.85,1.25),O=v.clone().add(new B(e(-.6,.6),e(-.6,.6),e(-.6,.6))).normalize(),G=new B(e(-1,1),e(-1,1),e(-1,1)).cross(O).normalize(),N=O.clone().cross(G),C=v.clone().multiplyScalar(.8).add(new B(0,.4,0)).normalize(),F=(.42+.58*y)*(.72+.28*(v.y*.5+.5)),z=a.length/3;for(const[P,Y]of[[-1,-1],[1,-1],[1,1],[-1,1]])a.push(A.x+(G.x*P+N.x*Y)*L,A.y+(G.y*P+N.y*Y)*L,A.z+(G.z*P+N.z*Y)*L),o.push(P*.5+.5,Y*.5+.5),l.push(C.x,C.y,C.z),c.push(F,F,F);h.push(z,z+1,z+2,z,z+2,z+3,z,z+2,z+1,z,z+3,z+2),M%28===0&&u.push(A.clone().lerp(n,.35))}const f=new wt;f.setAttribute("position",new Ze(a,3)),f.setAttribute("uv",new Ze(o,2)),f.setAttribute("normal",new Ze(l,3)),f.setAttribute("color",new Ze(c,3)),f.setIndex(h);const p=[new ft(.17,.3,3.7,9).translate(0,1.85,0)];for(const M of u)p.push(new Ys(new Qa([new B(0,3.3,0),new B(M.x*.35,4.6,M.z*.35),M]),6,.075,6));const g=Lr(ro(p),1.2),S=ix(),m=M=>{M.uniforms.uTime=t,M.vertexShader=`uniform float uTime;
`+M.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      vec4 wp=instanceMatrix*vec4(position,1.); float sw=max(0.,position.y-3.2)*.045;
      transformed.x+=sin(uTime*1.1+wp.x*.21+wp.z*.13+position.y)*sw; transformed.z+=cos(uTime*.8+wp.z*.19+position.x)*sw*.8;
      #endif`)},d=new at({map:S,alphaTest:.25,vertexColors:!0,roughness:.9});d.onBeforeCompile=m;const x=new Lc({depthPacking:Nu,map:S,alphaTest:.25});return x.onBeforeCompile=m,{leaf:f,trunk:g,leafMat:d,depthMat:x}}function or(i,e,t,n){const s=i*14,r=20,a=[],o=[],l=[],c=Math.cos(Math.PI/i),h=2*Math.PI/i;for(let f=0;f<=r;f++)for(let p=0;p<=s;p++){const g=f/r,S=p/s*Math.PI*2,m=c/Math.cos(S%h-Math.PI/i),d=(m-c)/(1-c),x=e*g*m;a.push(Math.cos(S)*x,t*Math.pow(1-g,1.9)+n*Math.pow(g,3)*d*d,Math.sin(S)*x),o.push(p/s*Math.round(e*2.6),g*e/2.4)}for(let f=0;f<r;f++)for(let p=0;p<s;p++){const g=f*(s+1)+p,S=g+s+1;l.push(g,S,g+1,g+1,S,S+1)}const u=new wt;return u.setAttribute("position",new Ze(a,3)),u.setAttribute("uv",new Ze(o,2)),u.setIndex(l),u.computeVertexNormals(),u}function rx(i){const{scene:e,M:t,add:n,box:s,cyl:r,rnd:a,lamps:o,tick:l}=i,c=new It,h=t.tile.clone();h.side=Ut;const u={shadow:!1,parent:e},f=new at({color:2243100,roughness:1});for(const[X,I,K,R]of Object.values(Rs))n(new pn(1,48,20,0,6.3,0,1.58),f,X,0,I,u).scale.set(K,R,K),i.circles.push({x:X,z:I,r:K*.9});{const[X,I,,K]=Rs.leifeng,R=new at({color:7226150,roughness:.5,metalness:.4});n(new ft(16,18,5,8),t.stone,X,K+.5,I,u);for(let W=0;W<5;W++){const J=10-W*1.3,U=K+3+W*8.4;n(new ft(J,J,6.6,8),R,X,U+3.3,I,u),n(or(8,J+3.8,2.2,.9),h,X,U+6.4,I,u)}n(new ft(.1,1,14,8),t.gold,X,K+52,I,u)}{const[X,I,,K]=Rs.baochu,R=new at({color:9074275,roughness:.9});for(let W=0;W<7;W++){const J=3.6-W*.36,U=K-2+W*5.2;n(new ft(J*.94,J,5.2,8),R,X,U+2.6,I,u),n(new ft(J*1.2,J*1.2,.5,8),R,X,U+5.2,I,u)}n(new ft(.1,.9,12,8),t.steel,X,K+40,I,u)}{const[X,I,,K]=Rs.chenghuang;for(let R=0;R<4;R++){const W=20-R*3.6,J=K-2+R*7;n(new tt(W,5,W),t.red,X,J+2.5,I,u),n(or(4,W*.71+6,3,1.6),h,X,J+5,I,{...u,ry:Math.PI/4})}}{const[X,I]=Fn.pavilion,K=ye+.5;s(15,.25,15,t.stone,X,ye+.125,I,{collide:!0}),s(13,.25,13,t.stone,X,ye+.375,I,{collide:!0});const R=new Set;for(let W=0;W<4;W++)for(const J of[-1,1])for(const[U,Z]of[[-5+W*3.333,J*5],[J*5,-5+W*3.333]]){const ee=U.toFixed(1)+Z.toFixed(1);R.has(ee)||(R.add(ee),r(.22,.24,4.2,t.red,X+U,K+2.1,I+Z),r(.34,.38,.3,t.stone,X+U,K+.15,I+Z),i.circles.push({x:X+U,z:I+Z,r:.32}))}for(const W of[-1,1])s(10.8,.42,.3,t.red,X,K+4.1,I+W*5,{s:1}),s(.3,.42,10.8,t.red,X+W*5,K+4.1,I,{s:1}),s(10.6,.3,.2,t.green,X,K+3.6,I+W*5,{s:1}),s(.2,.3,10.6,t.green,X+W*5,K+3.6,I,{s:1});n(or(4,10.4,3,1.5),h,X,K+4.3,I,{ry:Math.PI/4}),s(5.2,1.7,5.2,t.red,X,K+6.6,I,{s:1}),n(or(4,6.2,2.8,1.1),h,X,K+7.4,I,{ry:Math.PI/4}),n(new pn(.34,20,14),t.gold,X,K+10.4,I),n(new tt(7,4,7),t.red,Di[1].x,ye+2,Di[1].z),n(or(4,8,2.6,1.2),h,Di[1].x,ye+4,Di[1].z,{ry:Math.PI/4})}const p=[new ft(.2,.36,4.6,10).translate(0,2.3,0)],g=[],S=[],m=[],d=[],x=(X,I,K,R,W,J)=>{const U=g.length/3,Z=Math.cos(W)*.085,ee=Math.sin(W)*.085;for(let ae=0;ae<=5;ae++){const re=ae/5,Me=I-R*re,ge=re*re*.5;for(const Ae of[-1,1])g.push(X+Ae*Z+J.x*ge,Me,K+Ae*ee+J.z*ge),S.push(Ae*.5+.5,re),m.push(J.x*.5,.85,J.z*.5);ae<5&&d.push(U+ae*2,U+ae*2+2,U+ae*2+1,U+ae*2+1,U+ae*2+2,U+ae*2+3)}};for(let X=0;X<8;X++){const I=X/8*6.283+a(-.3,.3),K=a(4.2,6.2),R=new B(Math.cos(I),0,Math.sin(I)),W=new Qa([new B(0,4.3,0),R.clone().multiplyScalar(K*.3).setY(6.6+a(0,1)),R.clone().multiplyScalar(K*.7).setY(7.4+a(0,.8)),R.clone().multiplyScalar(K).setY(6.2)]);p.push(new Ys(W,12,.085,6));for(let J=0;J<44;J++){const U=W.getPoint(a(.25,1));U.x+=a(-.7,.7),U.z+=a(-.7,.7);const Z=Math.min(U.y-.9,a(3,6.2)),ee=a(0,3.14);x(U.x,U.y,U.z,Z,ee,R),x(U.x,U.y,U.z,Z,ee+1.57,R)}}const M=new wt;M.setAttribute("position",new Ze(g,3)),M.setAttribute("uv",new Ze(S,2)),M.setAttribute("normal",new Ze(m,3)),M.setIndex(d);const _={value:0},w=Jv(),T=X=>{X.uniforms.uTime=_,X.vertexShader=`uniform float uTime;
`+X.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      vec4 wp=instanceMatrix*vec4(position,1.); float sw=uv.y*uv.y;
      transformed.x+=sin(uTime*1.2+wp.x*.31+wp.z*.17)*.3*sw; transformed.z+=cos(uTime*.9+wp.z*.27+wp.x*.11)*.22*sw;
      #endif`)},v=new at({map:w,alphaTest:.2,side:Ut,roughness:.85,emissive:2898448,emissiveMap:w,emissiveIntensity:.1,color:11059312});v.onBeforeCompile=T;const y=new Lc({depthPacking:Nu,map:w,alphaTest:.2});y.onBeforeCompile=T;const A=[],L=[],O=Object.values(ks),G=(X,I)=>O.some(([K,R])=>so(K,null,X,I).d<R/2+1.6),N=()=>new Ye().setHSL(a(.25,.3),a(.42,.58),a(.2,.3)),C=()=>new Ye().setHSL(a(.19,.23),a(.45,.6),a(.3,.4)),F=()=>new Ye().setHSL(a(.93,.97),.62,a(.62,.74)),z=(X,I,K,R)=>{for(let W=I/2;W<X.len;W+=I){const[J,U,Z,ee]=ns(X,W);for(const ae of[-1,1])R(J-ee*ae*K,U+Z*ae*K,W,ae)}},P=(X,I)=>!X.bridges.some(K=>Math.abs(I-K.s)<K.half+4);z(mi,13,mi.half-1.3,(X,I,K,R)=>{P(mi,K)&&(Math.round(K/13)%2?A.push([X,I]):L.push([X,I,.5,F()]))}),z(Us,19,Us.half-1.5,(X,I,K,R)=>{P(Us,K)&&(Math.round(K/19+(R>0))%2?A.push([X,I]):L.push([X,I,a(.5,.9),Math.round(K/19)%4?N():F()]))});{const X=i.dense(En.slice(1,16),21);for(let I=1;I<X.length-1;I++){const K=X[I+1][0]-X[I-1][0],R=X[I+1][1]-X[I-1][1],W=Math.hypot(K,R);for(const J of[1,-1]){const U=X[I][0]-R/W*2.6*J,Z=X[I][1]+K/W*2.6*J;if($n(U,Z)&&!Kn(En,U,Z)&&!G(U,Z)){A.push([U,Z]),I%2&&o.push([U-R/W*5*J,Z+K/W*5*J]);break}}}}for(const[X,I]of[["南山路",15],["杨公堤",15],["北山街",15],["环城西路",18],["延安路",22],["庆春路",26],["解放路",26],["平海路",24],["湖滨路",20]]){const[K,R]=ks[X],W=Bc(K,0),J="南山路北山街杨公堤".includes(X);z(W,I,R/2+3.5,(U,Z)=>{!Kn(En,U,Z)&&!G(U,Z)&&L.push([U,Z,J?a(1.25,1.6):a(.9,1.25),J?C():N()])})}for(let X=0;X<2600;X++){const I=En[Math.floor(a(0,En.length))],K=I[0]+a(-260,260),R=I[1]+a(-260,260);!Kn(En,K,R)&&!Kn(bf,K,R)&&!G(K,R)&&L.push([K,R,a(.9,1.7),N()])}for(let X=0;X<260;X++){const I=a(-470,30),K=a(-2090,-1200);Kn(Dr,I,K)&&Math.hypot(I-Fn.pavilion[0],K-Fn.pavilion[1])>30&&L.push([I,K,a(1,1.8),N()])}for(const X of Di)for(let I=0;I<X.r*.5;I++){const K=a(0,6.3),R=Math.sqrt(a())*(X.r-6);R>9&&L.push([X.x+Math.cos(K)*R,X.z+Math.sin(K)*R,a(.9,1.5),N()])}for(const[X,I,K,R]of Object.values(Rs))for(let W=0;W<K*1.4;W++){const J=a(0,6.3),U=Math.sqrt(a())*K*.95;L.push([X+Math.cos(J)*U,I+Math.sin(J)*U,a(1.2,2),N(),R*Math.sqrt(Math.max(0,1-(U/K)**2))-1.5])}for(const X of[A,L,o])for(let I=X.length-1;I>=0;I--)i.inBuilding(X[I][0],X[I][1])&&X.splice(I,1);const Y=new _n(Lr(ro(p),1.2),t.bark,A.length),H=new _n(M,v,A.length);H.customDepthMaterial=y,Y.castShadow=H.castShadow=H.receiveShadow=Y.receiveShadow=!0,Y.frustumCulled=H.frustumCulled=!1,A.forEach(([X,I],K)=>{c.position.set(X,ln(X,I),I),c.rotation.set(0,a(0,6.3),0),c.scale.setScalar(a(.85,1.25)),c.updateMatrix(),Y.setMatrixAt(K,c.matrix),H.setMatrixAt(K,c.matrix),i.circles.push({x:X,z:I,r:.42})}),e.add(Y,H),i.noAO.push(H);const Q=sx(t,a,_),ne=new _n(Q.leaf,Q.leafMat,L.length),pe=new _n(Q.trunk,t.bark,L.length);ne.customDepthMaterial=Q.depthMat,L.forEach(([X,I,K,R,W],J)=>{c.position.set(X,W??ln(X,I),I),c.rotation.set(0,a(0,6.3),0),c.scale.set(K,K*a(.9,1.2),K),c.updateMatrix(),ne.setMatrixAt(J,c.matrix),pe.setMatrixAt(J,c.matrix),ne.setColorAt(J,R),W===void 0&&i.circles.push({x:X,z:I,r:.3*K})});for(const X of[ne,pe])X.castShadow=X.receiveShadow=!0,X.frustumCulled=!1,e.add(X);i.noAO.push(ne),z(mi,28,mi.half-.5,(X,I,K,R)=>{R>0&&P(mi,K)&&o.push([X,I])});const Ne=(X,I,K,R=!0)=>{const W=new _n(X,I,o.length);W.castShadow=R,W.receiveShadow=!0,W.frustumCulled=!1,o.forEach(([J,U],Z)=>{c.position.set(J,ln(J,U)+K,U),c.rotation.set(0,0,0),c.scale.setScalar(1),c.updateMatrix(),W.setMatrixAt(Z,c.matrix)}),e.add(W)};Ne(new ft(.05,.09,3.5,10),t.steel,1.75),Ne(new ft(.14,.2,.5,10),t.steel,.25),Ne(new tt(.34,.5,.34),t.emit(16761466,1.2),3.75,!1),Ne(new Ec(.36,.26,4).rotateY(Math.PI/4),t.steel,4.13),o.forEach(([X,I])=>i.circles.push({x:X,z:I,r:.2}));const ie=[],xe=(X,I,K,R,W)=>{for(let J=0;J<K;J++){const U=a(0,6.3),Z=Math.sqrt(a()),ee=X+Math.cos(U)*Z*R,ae=I+Math.sin(U)*Z*W;Kn(En,ee,ae)&&!$n(ee,ae)&&ie.push([ee,ae])}};xe(40,-8,260,60,22),xe(-190,120,240,60,22),xe(470,-930,500,45,70),xe(-330,-2440,500,60,50),xe(-90,-1180,200,30,30);const Le=new _n(new bc(.42,14,.25,5.9).rotateX(-Math.PI/2),t.lotus,ie.length),Te=new _n(new pn(.09,8,8).scale(1,1.7,1),new at({color:14252175,roughness:.5}),Math.floor(ie.length/9));ie.forEach(([X,I],K)=>{c.position.set(X,.04+a(0,.05),I),c.rotation.set(a(-.12,.12),a(0,6.3),a(-.12,.12)),c.scale.setScalar(a(.6,1.7)),c.updateMatrix(),Le.setMatrixAt(K,c.matrix),K%9===0&&K/9<Te.count&&(c.position.y=.32,c.rotation.set(0,0,0),c.scale.setScalar(.75),c.updateMatrix(),Te.setMatrixAt(K/9,c.matrix))}),Le.receiveShadow=!0,Le.frustumCulled=Te.frustumCulled=!1,e.add(Le,Te),l.push(X=>{_.value=X}),i.makeBoat=(X=1)=>{const I=new kt,K=t.wood.clone();K.side=Ut,n(new pn(1,28,12,0,6.3,Math.PI/2,Math.PI/2),K,0,.42,0,{parent:I}).scale.set(.95,.6,3.4),n(Lr(new tt(1.5,.05,5),1),t.wood,0,.26,0,{parent:I});for(const R of[-.7,.7])for(const W of[-1.3,1.3])n(new ft(.035,.035,1.5,8),t.red,R,1,W,{parent:I});n(new ft(.95,.95,3.1,20,1,!0,-Math.PI/2,Math.PI),h,0,1.25,0,{parent:I,rx:Math.PI/2});for(const R of[-1.5,1.5])n(new pn(.1,10,8),t.emit(16732208,3),.75,1.55,R,{parent:I,shadow:!1});return I.scale.setScalar(X),I};for(const[X,I,K]of[[60,-40,.5],[-420,-180,-.9],[-900,-700,1.9],[300,-700,.2],[-1500,-1e3,2.6],[-2200,-1300,1.2],[-600,-1700,.4]]){const R=i.makeBoat();R.position.set(X,.1,I),R.rotation.y=K,i.solids.add(R),l.push(W=>{R.position.y=.1+Math.sin(W*.9+X)*.04,R.rotation.z=Math.sin(W*.7+I)*.025})}}const wf=`varying float fU,fV,fH,fSeed,fRoof; varying vec3 fRd;
`,ax=`
      vec3 bs=vec3(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz),length(instanceMatrix[2].xyz)), bp=position*bs;
      vec4 bw=modelMatrix*instanceMatrix*vec4(position,1.);
      mat3 br=mat3(instanceMatrix[0].xyz/bs.x,instanceMatrix[1].xyz/bs.y,instanceMatrix[2].xyz/bs.z);
      vec3 be=-((cameraPosition-bw.xyz)*br);
      fH=bs.y; fSeed=seed; fRoof=step(.5,abs(normal.y)); bool xf=abs(normal.x)>.5;
      fU=fRoof>.5?bp.x:((xf?bp.z:bp.x)+seed*37.); fV=fRoof>.5?bp.z:bp.y;
      fRd=xf?vec3(be.z,be.y,-be.x*sign(normal.x)):vec3(be.x,be.y,-be.z*sign(normal.z));`,ox=`
      vec4 bw=modelMatrix*vec4(position,1.); vec3 be=bw.xyz-cameraPosition;
      fH=fa.z; fSeed=fa.y; fRoof=fa.w;
      fU=fRoof>.5?position.x:fa.x+fa.y*37.; fV=fRoof>.5?position.z:position.y-${ye.toFixed(2)};
      fRd=vec3(dot(be,vec3(normal.z,0.,-normal.x)),be.y,-dot(be,normal));`,lx=wf+`
      vec3 bCol,bEmit; float bRough,bMetal;
      float bh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void facade(){
        float sd=fract(fSeed), style=floor(fSeed+.001);          // style: 0 auto, 4 stone-clad mall (in77), 5 hotel, 6 glass mall
        float H=fH; bEmit=vec3(0.); bMetal=0.; bRough=.85;
        float kind=H>62.?0.:(H<34.?3.:(fract(sd*7.7)<.55?2.:1.));
        if(style>3.5) kind=style<4.5?3.:(style<5.5?1.:0.);
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
        if(kind>1.5&&kind<2.5){ float bal=step(.5,bh(vec2(cell.x,sd)));
          if(bal>.5){ if(q.y<.07){ bCol=vec3(.82,.8,.76)*grime; win=0.; } else if(q.y<.3&&q.x>.1&&q.x<.9){ bCol=vec3(.2,.26,.3); bRough=.1; bMetal=.5; win=0.; } }
          else if(q.y>.1&&q.y<.24&&q.x>.6&&q.x<.8&&bh(cell+3.)>.4){ bCol=vec3(.8,.8,.78)*(.8+.2*step(.5,fract(q.y*40.))); win=0.; } }
        if(ground>.5&&q.y>.74&&q.y<.95&&q.x>.06&&q.x<.94){ float hs=bh(vec2(cell.x,sd*3.)); bCol=mix(.5+.5*cos(6.283*(hs+vec3(0.,.33,.67))),vec3(.9),.35)*.7; bEmit=bCol*.25; win=0.; }
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
          room*=mix(.16,.75,min(step(style>4.5&&style<5.5?.55:.8,rr)+ground,1.));                     // hotels keep more rooms lit
          if(kind>.5&&ground<.5&&bh(rc*1.7+sd)<.28) room=vec3(.6,.58,.52)*.3*(.8+.2*step(.5,fract(q.y*14.)));   // blinds drawn
          float fres=pow(1.-max(d.z,0.),4.);
          bCol=kind<.5?mix(vec3(.2,.27,.33),vec3(.3,.34,.36),fract(sd*9.1)):vec3(.03,.04,.05);
          bRough=.06; bMetal=kind<.5?.9:.25; bEmit=room*(kind<.5?.18:.45)*(1.-fres);
        }
      }
`;function uu(i){const e=new at({roughness:.85});return e.onBeforeCompile=t=>{t.vertexShader=(i?`attribute vec4 fa;
`:`attribute float seed;
`)+wf+t.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>"+(i?ox:ax)),t.fragmentShader=lx+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 facade(); diffuseColor.rgb=bCol;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor=bRough;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
 metalnessFactor=bMetal;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance+=bEmit;`)},e}const cx=[["杭州君悦酒店",0,0,"",[104.4,67.1,112.3,81.2,105,84.8,110.2,99.8,108.9,110.6,105.2,119.6,89.6,110.6,70.9,121.1,71.6,139.1,61.3,138.2,53,134.6,45,129.2,40.4,123.3,33.7,127.5,25.5,114.1,5,127.3,17.3,144.7,30.5,155.4,43.6,163.7,57.6,169.5,78.1,169.5,94.6,165.3,106.9,160.4,119.3,149.6,129.1,136.4,136.5,119.1,139,97.6,131.6,72,123.4,55.5]],["",0,0,"apartments",[563.5,698.1,576.3,703,589.9,666.6,577.1,661.7]],["",0,0,"apartments",[563.6,770.7,572.9,774.1,583.7,744.1,574.5,740.7]],["",0,0,"",[534.7,763.9,550.4,770.3,565.5,732.8,571.5,735.2,579.9,714.4,558.2,705.5]],["",0,0,"apartments",[545.3,823.9,558.1,824.5,560.1,786.2,547.2,785.5]],["",0,0,"",[518.8,808.6,530.4,809.5,532.4,782,520.8,781.2]],["",0,0,"",[479.1,805.5,507.5,807.2,510,757.9,527.4,763.3,541.6,723.9,483.6,712.5]],["",0,0,"",[489.4,578.9,506.4,580.4,509,551.8,492,550.3]],["",0,0,"apartments",[549.9,655.8,562.2,660.1,584.9,594.5,572.6,590.2]],["",0,0,"apartments",[542.2,588.8,545.8,590.2,542.1,599.4,545.1,600.6,534.3,627.6,537.3,628.8,529.9,647.2,538.8,650.8,545.9,632.9,543.3,631.9,554.5,603.8,552.2,602.9,555.6,594.2,553.2,593.3,557.3,583.2,546.2,578.8]],["",0,0,"",[510.2,641.1,521.8,642.3,529.1,569.5,517.5,568.3]],["",0,0,"apartments",[543.4,682.2,553.6,685.7,560.4,665.1,550.2,661.7]],["",0,0,"",[521,679.9,530.8,682.2,536.8,655.7,527,653.5]],["",0,0,"",[486.2,634.3,506.3,637.7,509.4,619.5,489.2,616]],["",0,0,"",[521.5,697.8,545.8,704.5,548.8,693.5,524.5,686.8]],["",0,0,"",[502.6,708.1,513.5,711,520,686.3,509.1,683.4]],["",0,0,"",[482.7,691.8,498.9,692.7,501.5,643.3,485.3,642.4]],["",0,0,"apartments",[546,571.8,563,578.4,572.3,553.8,555.4,547.2]],["龙翔服饰城",0,0,"",[177.1,440.5,182.3,445.6,191.7,448.3,305.6,442.2,310.8,440.6,314.9,436.8,319,430.4,317.3,384.4,313.1,377.2,304.4,374.5,184.5,378,178,381.6,176.1,388.1]],["工联CC",0,0,"",[13.1,441.1,17.6,445.2,22.3,448.2,99.4,448,137,384.9,136.9,375.2,28.3,377.9,20.7,380.5,14.7,385.6,10.8,392.2,10.7,436.9]],["",0,0,"",[-41.8,83.2,-38.4,89,-28.3,83,-31.7,77.2]],["",0,0,"",[-479.9,38.7,-467.5,55.6,-463.7,52.8,-452.3,68.2,-443.2,61.5,-454.6,46,-450.4,42.9,-462.9,26]],["",0,0,"",[-498.9,-20.6,-505.8,-28.7,-503.9,-30.3,-515.1,-43.4,-517.5,-41.4,-521.4,-46,-519.1,-48,-528.7,-59.3,-532,-56.5,-541.6,-67.8,-553.8,-57.4,-542.8,-44.5,-539.2,-47.6,-537.2,-45.2,-541.6,-41.3,-531.5,-29.4,-523.5,-36.3,-520.9,-33.3,-525.2,-29.7,-515.2,-18,-521.1,-12.9,-527.6,-7.3,-542.3,-24.6,-567.2,-3.3,-553.2,13.1,-547.3,8.1,-535.4,22.2,-516.2,5.7,-518.7,2.7,-513.1,-2,-510.6,1,-505.3,-3.5,-511,-10.2]],["湖滨银泰in77 A区",0,0,"",[-137.7,190.7,-136.4,234.4,-38.9,231.5,-39.2,222.1,-30.9,221.8,-33.1,148.1,-48.5,148.6,-49,134.8]],["",0,0,"",[-217.9,237.5,-215.4,241.9,-196.3,241.5,-154.8,240.6,-156.6,197.7]],["",0,0,"",[-435.3,69,-438.1,72.1,-423.4,100.5,-420.6,97.3]],["湖滨银泰in77 C1区",0,0,"commercial",[-17.4,445.6,-19.4,413.8,-29.4,414.7,-36.3,411.8,-44.3,405.1,-40.6,400.2,-41.1,393,-46,388,-53.3,386.7,-57.1,388,-60.3,385.3,-132.6,387.7,-129.7,451.5]],["湖滨银泰in77 C2区",0,0,"",[-152.6,385.5,-261.6,389.6,-260.3,423.6,-259.6,441.5,-259.2,454.8,-147.4,452.8]],["湖滨银泰in77 C3区",0,0,"commercial",[-281.3,391.4,-285.6,391.6,-386.1,395.6,-384.2,441.1,-376.2,445.6,-368,446.8,-359.6,442,-356.8,435.2,-339.1,437.3,-328.4,436,-302.3,429.2,-295.4,426.6,-294.2,418.7,-293.7,415.2,-276.7,413.1,-276.9,393.2]],["浙商银行",0,0,"",[532.7,124,511.4,125.2,513.1,155.7,509.5,167.6,503.9,176.2,507.2,236,538.7,234.2]],["",0,0,"",[602.8,63.3,575.3,64.1,576,88.6,537.4,89.7,538,111.3,604.2,109.4]],["",0,0,"",[605.1,367.6,576.7,369.1,577.3,394.9,545.2,394,546.3,421.3,604.5,420.7]],["",0,0,"",[522.7,451.5,499.4,450.6,496.2,508.1,521,513.7]],["",0,0,"",[539.8,367.9,500.3,367.6,498.8,437.6,537.5,439.6]],["天阳·明珠商业中心",0,0,"",[452.1,376.8,449.9,372.6,446.4,368.6,440.8,366.5,351.1,367.3,346.1,368,340.4,370,337.5,375.6,338.2,400,453,396.6,453.1,381.1]],["东坡大世界",0,0,"",[-74,255.1,-130.5,257.4,-137.1,264.5,-135.3,331.9,-122.7,340.1,-92.5,338.5,-92.9,329.7,-70.8,328.5,-71.7,309.7]],["仁和饭店",0,0,"",[-259.9,267.2,-259.6,317.7,-199.8,317.4,-200.1,266.9]],["中国电信",0,0,"",[-544.9,275.7,-583.6,277.5,-581.7,344.8,-577.7,353.9,-571.3,358.2,-563.3,358.9,-540.5,359.2]],["Apple Store",2,0,"commercial",[6.3,281.6,7.5,315.6,15.3,315.3,36.8,314.7,35.8,280.7,14.2,281.3]],["龙翔桥",0,0,"train_station",[2.9,344.1,3,349,3.7,371.2,36.1,370.3,18.4,397.4,-33.6,399,-33.4,401.5,-33.4,404.3,20.1,403.3,20.2,414.3,16.5,414.4,16.5,412.3,14.8,412.3,13.2,412.3,13.2,414.4,6.5,414.4,6.5,417.1,6.5,420,13.1,420,13.2,422.4,14.9,422.4,17,422.3,17,420,25.9,420,25.8,397.2,43.7,370,117.8,368,118.1,379.5,133,392.7,135.1,390.4,136.7,388.5,124.1,377.3,123.9,367.7,153.9,367,153.8,361.3,153.3,339.6,124,340.3,123.4,314.9,131.7,314.8,131.8,320.5,134,320.4,136.4,320.3,136.3,314.4,143.7,314.2,143.6,312.1,143.6,309.9,116.8,310.6,117.1,323.9,108.6,324.1,108.7,326.5,108.7,329.3,117.5,329.1,117.8,341.6,41.8,343.4,41.4,327.3,49.1,327.2,49,323.8,48.9,320.5,42.2,320.7,41.9,313.3,38,313.4,35.2,313.5,35.4,321.1,26,321.3,25.8,313.7,21.7,313.8,18,313.9,18.2,321.7,4,322.1,4.1,325.8,4.2,329.8,27.4,329.1,35.3,328.9,35.7,343.2]],["杭州市新华书店",0,0,"",[-410.4,695.4,-428.8,696.3,-426.9,738.5,-463.8,740.3,-462.7,763.6,-417.8,761.5,-411.4,759.5,-407.7,752.6]],["湖滨in88",0,0,"commercial",[119.4,159,120.4,190.4,31.5,193.3,30.5,163,7.3,163.8,9.1,217.9,144.7,213.5,142.9,158.2]],["杭州华侨饭店",0,0,"",[276.7,-48.8,277.8,-11.5,268.1,-11.1,261,-23.6,247.2,-22.8,240.2,-10.4,210.8,-9.2,211.6,9.8,279,7.1,280.3,40.1,294.2,39.5,291.9,-48.7]],["西湖国贸",0,0,"commercial",[430.6,-20.7,430.3,-25,434.1,-26.8,431.5,-33.3,426.6,-38.7,424.1,-41.2,428.4,-43.4,425.9,-49.6,431.8,-52.5,425.7,-63.9,416.9,-73.8,407,-81.1,395,-86.3,369.4,-86.5,346.9,-76.7,349.5,-70.2,334.7,-62.9,336.6,-59.5,331.3,-52.4,337.9,-37.8,333.3,-24.6,332.8,-14,336.1,-.2,332.5,1.5,333.1,9.8,336.5,17.4,341.2,22.3,347,25.1,429.9,-16.4]],["解放路百货商店",0,0,"commercial",[-423.8,396.9,-536.8,401.3,-534.3,461.2,-481.8,458.7,-419.9,455.8]],["解百新世纪",0,0,"commercial",[-481.3,479.6,-527.8,481.3,-523.7,554.8,-511.9,561.3,-416.6,557.9,-418.9,474.1]],["城中香格里拉酒店配楼",0,0,"commercial",[624.9,118.4,556.4,120.7,560.2,220.4,579.3,217.6,598.1,213.5,618.8,208.1,619.2,203,627.9,202.6,627.5,188.4,626.6,161.5]],["",0,0,"commercial",[564.3,237.7,509,240.1,510.4,273,565.7,270.5]],["杭州城市建设陈列馆",0,0,"",[536.2,280.6,520.7,282.5,523.2,309.1,539.8,308.1]],["杭州图书馆生活主题分馆",0,0,"",[104,696.1,60,696.9,60.7,736.2,104.7,735.4]],["浙江梅地亚宾馆",0,0,"",[452.7,400.4,354,403.8,345.9,405.8,341.2,412,339.8,420.2,341.4,425.5,344.5,429.3,347.7,432.1,351.3,434.1,453,430]],["湖滨银泰in77 D区",0,0,"commercial",[-71.7,309.7,-70.8,328.5,-70.6,334.8,-26.9,333,-30.2,253.3,-74,255.1]],["友好饭店",0,0,"",[-13.8,567.8,-24.1,561.9,-88.5,566.9,-88,571.8,-48,581.4,-60.4,624.4,-27.1,635.4,-10.6,627.4]],["",0,0,"hospital",[-152.2,464.6,-204.7,467.2,-204.4,480.6,-197.9,480.3,-196.1,520,-187.9,519.7,-185.8,583.1,-162.5,589.4,-153.9,586.4,-150.1,581.1,-148.3,567.4,-152.5,478.5,-145.7,477.9,-146,470.8,-151.6,470.8]],["",0,0,"hospital",[-214.4,475.2,-252.5,476.1,-249.3,570.4,-238.4,568.6,-224.5,578.4,-212.7,578.7,-209.7,564.5,-215,564.2,-217.1,513.2,-212.1,512.9]],["",0,0,"commercial",[-277.9,467.6,-381.9,472.3,-381.1,540.4,-372.8,540,-359.2,539.1,-354.3,539.2,-354.3,524.8,-337.5,523.6,-337.9,502.5,-276.7,499.1]],["",0,0,"commercial",[-260.3,423.6,-278.8,424.2,-279.2,418.5,-294.2,418.7,-295.4,426.6,-302.3,429.2,-328.4,436,-339.1,437.3,-356.8,435.2,-359.6,442,-368,446.8,-376.2,445.6,-384.2,441.1,-384,458,-286.4,453.6,-286.4,443.6,-259.6,441.5]],["交通银行浙江省分行",0,0,"",[436.3,673.7,408.1,673.1,406.7,726.8,411.5,733.6,420,737.3,428.8,735.3,435,727.5]],["杭州市第一人民医院教学楼",0,0,"hospital",[68.2,459.9,17.4,461.1,18.9,525.1,21.9,525,22,532.9,27.2,535.1,40.2,534.7,44.4,530.9,43.3,483.3,26.8,483.7,26.6,476,68.6,475]],["4号楼",0,0,"hospital",[51,558.6,20.3,559,18.5,561.6,20.8,645.3,38.2,644.9,38.1,638.8,37.3,613,36.4,580.1,51.6,579.7]],["1号楼",0,0,"hospital",[38.1,638.8,46.6,638,48.4,634.3,51.5,633.5,55.6,635.6,61.6,635.8,66.5,634.3,70.8,631.3,74.3,632.5,79.1,638,89.9,647.2,100.2,649.9,113.2,648.9,123.5,643.8,122.2,584.8,102.9,585.4,102.9,579.1,100.8,570.9,90.8,564.6,79.5,565.4,72.5,570.9,70.6,582,44.9,582,46,612.4,37.3,613]],["2号楼",0,0,"hospital",[153.5,583.7,136.8,584,137.7,631.6,142.7,631.5,143,650.9,132.3,656.4,132.5,666.4,160.7,668.1,159.4,628.2,161.7,628.2,161.4,621.4,161.3,617.4,161.4,614.9,154.1,615]],["",0,0,"hospital",[205.4,631.6,204.7,611.6,219.6,611,220.1,629.4,237.7,629,237.3,611.1,254.7,610.2,255.5,629,273.9,628.3,272.4,585.9,192.1,589.8,186.8,597.6,186,602.2,187.9,632.2]],["",0,0,"",[389.9,638.8,351.7,640,353.7,705.4,357.7,705.3,357.5,701.2,365.4,701,365.4,699,364.1,654.3,377.7,653.9,378.3,672.8,390.9,672.4]],["",0,0,"",[394,672.7,380.5,673.1,381.3,698.5,365.4,699,365.4,701,357.5,701.2,357.7,705.3,357.9,712.8,383.3,712,383.7,723.5,395.6,723.1]],["",0,0,"",[446.4,578.8,427.2,577.8,426.7,588.8,433.2,589.1,430.2,651.9,422.8,651.6,422,667,442.2,667.9]],["",0,0,"",[419.4,578.2,402.7,578.5,404.2,660.2,420.9,659.9]],["浙江省国贸大楼",0,0,"commercial",[449.6,464.5,427.3,464.6,427.5,558.5,437.3,558.5,437.3,565.7,447.6,565.7,447.3,489.8,445,489.8,445,480.9,449.6,474.2]],["",0,0,"hospital",[369.4,766.3,322.3,750.5,314.6,758.5,313.9,798.5,320.7,804.9,372.1,798.3,371.6,793.9,377,789.8,378.5,782.8,376.2,776.5,370.2,772.4]],["",0,0,"hospital",[296,800.2,302.6,800.5,304.8,760.5,303.6,755.7,301.4,749.8,296,745,272.4,744.3,272.4,756.6,263.4,755.9,263.2,762,262.1,787.2,261.7,796.4,271.9,807.5,295.8,807.8]],["",0,0,"hospital",[249.5,761.2,250.2,746.4,243.4,737.7,227.3,736.7,218.9,745.3,218.3,755.7,215.1,758.3,207.5,758.5,206.8,779.7,213.6,779.9,213.6,782.1,211.1,785.5,210.5,789.3,196,788.8,196,811.7,200.2,816.8,233.6,811.4,248.2,791.1,248.6,786.9]],["",0,0,"hospital",[263.2,762,257.3,761.7,249.5,761.2,248.6,786.9,256.5,787.1,262.1,787.2]],["新华书店庆春路购书中心",0,0,"",[450.3,239.6,428,240.8,430.5,286.1,427.2,290.1,411.1,291.4,405.7,295.5,403.6,299.8,404.8,321.3,454.5,318.4,453.3,298,455.9,297.8,453.4,253.9,451.1,254]],["",0,0,"commercial",[434.8,235.6,452.9,234.5,451.1,199.6,449.3,199.5,447.8,174.2,446.1,170.9,443.4,169.2,438.8,168,431.2,168.5]],["",0,0,"school",[428.7,169.6,397.5,179.5,398.7,214.9,380,215.5,380.5,231.1,385.3,230.9,386.2,258,397.3,257.7,396.3,228.4,408.6,228,407.9,207.5,415.8,207.2,416.7,235,409.6,235.3,410.3,256.7,425.1,256.2,424.3,233.2,430.8,233]],["九星里（北）",0,0,"house",[391.8,180.4,374.9,191.1,375.9,211.6,393.3,210.7]],["九星里（中）",0,0,"house",[372.1,194.7,355.6,204.6,359.6,264,375.8,263]],["九星里（南）",0,0,"house",[353.1,207.7,345.2,212.3,345.9,222.8,331.6,223.8,333.4,249.5,350,248.4,350.5,256.3,330.4,257.7,330.7,262,356.6,260.2]],["",0,0,"house",[363.3,265.2,329.7,266,329.9,277,348,276.6,348,273.2,363.5,272.8]],["",0,0,"house",[374.2,274.3,358.6,274.9,358.8,279.9,340.4,280.5,340.7,290.5,359,289.9,358.9,286.9,374.6,286.4]],["浙江省广播电影电视监测中心",0,0,"",[399.6,285.3,376.1,285.5,376.1,295.9,340.6,296.2,340.7,309.7,334.6,309.8,334.7,327.8,392.9,327.3,392.8,307.3,399.8,307.3]],["红泥花园",0,0,"commercial",[208.4,250.4,166.6,251.9,168.2,295.9,201.8,294.7,209.7,287.2]],["浙江胜利剧院",0,0,"",[246.2,250.3,216.1,250,218.2,302.4,203.1,316.6,203.2,320.6,190,321.2,190.6,334.4,249.5,331.9]],["",0,0,"commercial",[209.8,293.2,193.8,308.3,189.2,303.3,178.5,313.4,187.1,322.7,192.5,317.6,194.8,320.1,216.2,300]],["文物大楼",0,0,"",[308.8,243.8,284,244.7,284.2,249.8,254.3,251,255.3,278.7,292,277.3,291.9,273.8,310,273.1]],["",0,0,"commercial",[316.6,313,304.9,313.3,305,318.1,252.3,319.6,252.7,332.5,310.9,330.9,314.4,329.4,317,326.5]],["",0,0,"commercial",[310.4,275.8,294,276,294.5,316,302.7,315.9,302.7,312.7,310.8,312.7]],["",0,0,"commercial",[280.6,281.6,265.3,281.9,265.5,295,253.4,295.2,253.8,318.2,291.7,317.5,291.2,287.5,280.8,287.7]],["工联CC二期",0,0,"",[156.4,419.8,126.6,420.1,99.4,467.5,80.3,524.4,80.4,531.1,84.2,536,90,537.6,144.2,534.9,152.3,532.2,156.1,528,158.6,520.5]],["华侨饭店商务中心",0,0,"hotel",[215.1,13.4,203.7,13.6,204.4,54.6,264,53.6,263.3,15.9,253.2,16.1,253.6,42,215.6,42.7]],["",0,0,"hotel",[277.7,9.5,264.6,9.9,265.7,53.9,297.9,53,297.6,41.6,278.5,42.1]],["华侨饭店",0,0,"hotel",[198.1,13.7,185.5,18.8,174,26.1,168.9,31.9,164.8,39.4,163.2,45.6,163.4,57.9,199.3,56.3]],["大韩民国临时政府杭州旧址纪念馆",0,0,"",[303.9,59.3,285.9,60,288.6,122.6,306.6,121.8]],["湖边村建筑群",2,0,"",[282.2,60.4,266,60.9,268.3,122.8,284.5,121.8]],["",0,0,"",[261.9,60.9,217.3,62.1,217.7,77.3,262.3,76.1]],["富隆酒窖",0,0,"",[261.5,82.4,251.6,82.8,251.5,78.7,226.8,79.6,227.3,93.5,219.6,93.8,219.9,103,262.2,101.4]],["",0,0,"",[263.1,104,220.2,105.2,220.7,123.1,263.6,121.9]],["",0,0,"",[215.3,61.9,200.9,62.5,203.5,125,217.7,124.3]],["",0,0,"commercial",[-154.9,265.6,-193.5,266.4,-192.5,317.5,-186.8,317.4,-186.6,327.4,-157.7,327.4,-157.7,324,-158.4,310.9,-154.1,310.8]],["",0,0,"commercial",[-151,324,-157.7,324,-157.7,327.4,-186.6,327.4,-204.8,327.4,-204.8,321.8,-218.1,321.9,-218.1,328.1,-261.3,328.3,-261.2,352.1,-255,356.8,-161.5,353.2,-154.8,350.8,-151,345.9]],["",0,0,"residential",[206.3,137.2,192.7,137.4,193.4,180.1,207,179.9]],["",0,0,"residential",[189,138.3,175.7,138.6,176.6,177.8,190,177.5]],["",0,0,"",[199.7,62.7,191.1,63,193.6,125.9,202.1,125.5]],["",0,0,"",[188.8,64.6,173.5,65.1,175,100.1,189.9,99.4]],["",0,0,"",[190,101.5,176,101.9,176.9,128.3,190.9,127.8]],["",0,0,"",[171.3,66.7,156.8,67.3,159.4,128.9,174.8,128.3,174.5,119.8,170.1,120,168.2,75.4,171.7,75.2]],["",0,0,"",[174.1,139,162.6,139.5,159.9,144.8,161.6,185.3,168.6,185,175.9,184.7]],["",0,0,"",[252.8,164.1,251.7,136.6,237.5,137.7,238.4,159.8,234.5,160.2,233.7,138.2,216.5,138.7,217,161.9,219.2,162.1,219.8,181.5,230.7,181,233.7,178.5,247.3,178.7,246.5,164.4]],["",0,0,"",[279.9,134,256.3,135.1,257.4,158.9,281,157.8]],["",0,0,"",[309.6,132.1,283.8,132.7,284,142.7,298.6,142.3,298.9,155.4,310.2,155.1]],["",0,0,"school",[325.6,515.7,308.7,516.2,310.2,561.8,327,561.3]],["",0,0,"school",[293.2,514.2,256.4,515.1,257.6,564.4,266,564.2,265,525,283.1,524.6,284.1,563.8,294.4,563.5]],["友好饭店",0,0,"",[-33.9,601.1,-28.6,601.1,-23.6,599.4,-19.4,596.2,-16.4,591.8,-15,586.7,-15.3,581.4,-17.2,576.5,-20.6,572.4,-25.3,569.6,-30.7,568.5,-36.2,569.2,-41.1,571.8,-44.9,575.8,-47.1,580.8,-47.6,586.3,-46.2,591.7,-43.1,596.3,-38.9,599.5]],["",0,0,"",[-56.2,454.9,-119.1,457,-118.6,471.9,-55.7,469.8]],["",0,0,"",[-55.2,472.1,-118.1,474.7,-118.1,503.6,-53.9,506.5]],["",0,0,"",[-53.8,509.5,-72.6,510.4,-71,546.9,-52.2,546]],["",0,0,"",[-75.1,507.9,-92.5,508.6,-90.7,549.7,-73.3,548.9]],["",0,0,"",[-100,506.8,-117.7,507.4,-116.4,547.3,-98.6,546.7]],["",0,0,"",[-121.8,457.3,-134.7,457.8,-131.3,552.5,-118.5,552]],["",0,0,"residential",[418.5,454,391.5,455.2,394.3,519.8,421.3,518.6]],["",0,0,"residential",[379.4,456.8,363.1,457.4,364.5,496.6,380.8,496]],["",0,0,"residential",[420.5,523.9,409.1,524.5,409.8,539.1,421.2,538.5]],["",0,0,"residential",[404.7,524.9,394.4,525.4,395.2,541,405.5,540.5]],["",0,0,"residential",[418.8,545.5,396.1,546.5,396.7,561.2,419.5,560.2]],["",0,0,"residential",[386.7,512.5,365.4,514,368.5,558.1,389.7,556.6]],["",0,0,"residential",[353.5,457.3,341.2,457.9,343,499.3,355.4,498.7]],["",0,0,"residential",[357.4,502.3,342.4,503.4,346.4,560.1,361.5,559]],["",0,0,"residential",[281.6,453.6,271.1,454.3,272.2,472.1,282.8,471.4]],["",0,0,"residential",[267.3,454.9,248.9,455.2,249.2,470.4,267.6,470.1]],["",0,0,"residential",[279.2,475.2,263.9,475.7,264.4,490.5,279.7,490]],["",0,0,"residential",[260.4,473.1,249.3,473.6,250.1,492.8,261.9,492.3,261.7,487.5,255.8,487.8,255.5,479.6,260.7,479.4]],["",0,0,"residential",[286.3,496.3,270.7,496.4,270.7,510.5,286.4,510.4]],["",0,0,"residential",[265.2,498,250.7,498.5,251.1,510.9,265.6,510.4]],["",0,0,"residential",[187,460.1,173.1,460.9,175.4,553.5,190.1,552.5]],["",0,0,"residential",[208.1,459,191.6,459.6,195.5,555.8,201.8,555.6,202.2,563,194.5,563.4,194.7,570.5,212.6,569.8]],["",0,0,"residential",[190.7,557.1,176.2,557.9,177.1,572.6,191.6,571.7]],["",0,0,"residential",[228.6,530,214.2,530.6,215.7,568.2,230.1,567.7]],["",0,0,"residential",[245.6,530.3,233.4,530.7,234.9,567.9,247.1,567.4]],["",0,0,"residential",[242.8,501.2,216.3,501.9,216.3,510.7,213.2,510.7,213.2,525.2,242.5,525.7]],["",0,0,"residential",[243.7,479.6,235.2,479.9,235.4,486.3,225.3,486.7,225.1,483,212.1,483.5,212.5,494.8,244.2,493.6]],["",0,0,"residential",[243.4,456.4,210.2,457,210.6,479.5,218.5,479.4,218.2,463.4,222.9,463.3,223.1,476.9,243.7,476.6]],["",0,0,"residential",[328.1,586.5,324.6,586.7,324.3,580,313.1,580.6,313.4,586.3,309.2,586.5,309.7,595.9,320.6,595.3,320.8,600,328.8,599.6]],["杭州市建设委员会",0,0,"",[327.5,608.6,314.4,609,314.7,619.3,289.8,620,290.2,633.7,295.2,633.5,314.4,633,315,653.3,328.7,653]],["",0,0,"residential",[306.3,579,282,580,283.4,616.4,308.6,615.5,307.9,599.8,300.2,600.1,299.7,585.9,306.6,585.6]],["",0,0,"residential",[327.6,660.9,310,661.6,310.9,683.1,301.4,683.5,302,698.6,329,697.6]],["",0,0,"residential",[297.3,641.1,283.7,641.7,285.9,698.7,299.6,698.2]],["",0,0,"residential",[270.7,635.3,242.1,634.8,241.8,654.5,256.3,654.7,255.8,680.8,250.9,680.7,250.6,697,283,697.5,283.2,682.6,269.9,682.4]],["",0,0,"hospital",[202,635.6,186.2,636.4,186.8,648.3,202.6,647.5]],["8号楼",0,0,"hospital",[211.2,652.5,200.3,652.9,201.3,678.2,212.2,677.7]],["",0,0,"residential",[234,636.8,219.3,637.4,220.2,658.1,229.3,657.8,230.7,692,244.3,691.4,242.9,657.8,234.9,658.1]],["全季酒店",0,0,"",[42.7,776,27,776.3,28.8,836.1,44.7,835.4]],["",0,0,"residential",[52.2,684.7,23.7,685.8,25.7,738.4,54.2,737.4]],["马可波罗假日酒店",0,0,"hotel",[67.9,744.7,39.6,745.9,32.6,750,26.7,756.7,27.3,772.1,68.9,770.4]],["",0,0,"residential",[64.5,777,47.4,777.5,47.7,784.7,57.8,784.4,58.1,795.3,53.4,795.4,54.7,834.6,66.4,834.2]],["",0,0,"school",[-140.6,684.7,-157.1,685.5,-153.6,761.7,-137.1,760.9]],["",0,0,"school",[-166.8,714.1,-182.1,715,-179.1,763.7,-163.9,762.7]],["",0,0,"school",[-185.7,758,-208.9,758.9,-208.6,766.2,-185.5,765.3]],["",0,0,"school",[-238.4,721.1,-246.5,721.5,-244.3,767.5,-231.4,766.8,-232.5,745.8,-237.2,746]],["",0,0,"residential",[-157.1,636.6,-160.2,647.4,-154.5,649.8,-150.4,652.6,-149.4,676.9,-137.3,676.6,-138.6,650.5,-139.1,645.4,-143,641.5]],["杭州市总工会",0,0,"",[-14.2,745.7,-37.3,747.1,-38.8,720.7,-54.8,721.6,-49.8,807.3,-49.6,810.5,-42.4,810,-10.5,808.2]],["杭州市房产管理局",0,0,"",[-33.8,675.9,-47.4,676.5,-46,705.6,-25.4,704.7,-23.8,739,-9,738.3,-11.4,689,-26.6,689.7,-26.4,693.5,-32.9,693.8]],["",0,0,"commercial",[-92.9,568.6,-105.7,567.1,-107.4,581.8,-94.5,583.3]],["",0,0,"commercial",[-96,588.3,-105.9,585.8,-109.3,598.7,-116.2,596.9,-119.7,610.5,-96.6,616.5,-93.7,605.2,-100,603.6]],["",0,0,"commercial",[-111.5,568.6,-125.6,569.3,-124.5,594.3,-110.3,593.7]],["",0,0,"commercial",[-101.9,780.5,-118,781.3,-114.4,846.9,-98.3,846]],["",0,0,"commercial",[-82.4,702.3,-118.9,703.8,-116.2,769.5,-107.3,769.1,-108.2,746.6,-80.6,745.4]],["",0,0,"commercial",[-108.5,667.6,-120.3,668.3,-118.5,699.6,-106.7,698.9]],["",0,0,"commercial",[-55.9,664.9,-69.7,665.6,-69.1,677.2,-81.5,677.8,-78.2,742.4,-57.1,741.3,-59.1,702.1,-54,701.8]],["湖滨派出所",0,0,"",[-211.4,784.6,-230.6,785.3,-227.7,868.1,-208.5,867.4]],["",0,0,"commercial",[-422.1,657.8,-526.5,658.1,-526.3,711.9,-506,711.8,-506,699.9,-485.5,699.8,-485.5,686.4,-422,686.2]],["杭州市口腔医院",0,0,"hospital",[-15.2,514.4,-50.7,516.3,-49,548.3,-26.1,547.1,-27,530,-14.4,529.4]],["共青团杭州市委",0,0,"",[-16.9,485.8,-31.6,486.6,-31,496.2,-50.5,497.4,-49.6,512.8,-15.4,510.9]],["",0,0,"apartments",[-19.6,459.3,-47.5,460.3,-47,476,-34.9,475.5,-35.1,469.7,-27.1,469.4,-26.7,482.1,-18.9,481.8]],["湖滨银泰in77 E区",0,0,"",[-280.9,285.3,-290.4,285.6,-290.8,270.3,-374.8,272.7,-372.7,345.1,-358.5,344.7,-358.1,360,-289.6,358,-290.6,322.8,-279.8,322.5]],["",0,0,"",[-372.8,540,-390.9,541.1,-389.3,566.2,-357.6,564.2,-359.2,539.1]],["",0,0,"",[-314.7,540.5,-327.3,541,-326.9,552.3,-355,553.5,-354.5,564.5,-313.7,562.7]],["",0,0,"",[-276,521,-286.3,521.3,-285.3,554.6,-309.5,555.3,-309.2,564.9,-274.7,563.9]],["",0,0,"",[-289.1,516.8,-334.5,518.4,-334.1,527.3,-350.7,527.9,-350,546.8,-331,546.1,-331.4,534.6,-305.1,533.6,-304.5,550.6,-287.9,549.9]],["中国电信上城分局",0,0,"",[-269.4,684.2,-291.5,685.3,-289,740.2,-293.8,740.5,-301.5,740.8,-301.2,748.2,-306.8,748.5,-306.1,765.8,-265.7,763.9]],["民国邮电大楼",0,0,"",[-273.8,787.9,-305.3,787.9,-305.3,806.3,-273.8,806.3]],["仁和大厦",0,0,"commercial",[-173.2,790.4,-201.3,791,-200.5,828.8,-180.4,828.4,-180.8,809.2,-172.8,809]],["岳王艺术城",0,0,"",[-137.7,783.8,-207.3,785.4,-205,868,-166.6,867.7,-137.2,862.1]],["",0,0,"",[-233.3,613.2,-256.3,613.5,-256,636.2,-233,635.8]],["",0,0,"",[-238.7,641.3,-253.2,641.6,-252.7,665.5,-238.2,665.2]],["",0,0,"residential",[-166.5,637.1,-186.8,637.3,-186.9,631.2,-202.4,631.4,-202,663.7,-189.1,663.5,-189.3,648.9,-179.5,648.8,-179.4,660.3,-166.3,660.1]],["",0,0,"residential",[-160.3,663.6,-182.7,664.3,-181.3,709,-168.9,708.6,-169.8,677.7,-159.9,677.4]],["",0,0,"residential",[-206,624.3,-225.3,624.6,-224.6,665.2,-212.6,665,-213.1,636.8,-205.8,636.7]],["",0,0,"residential",[-196.2,691.9,-209,691.8,-209.2,709.8,-196.3,709.9]],["",0,0,"residential",[-215.9,691.5,-228.4,691.9,-227.9,710.3,-215.3,710]],["",0,0,"residential",[-233.8,691.7,-247.1,691.9,-246.8,710.8,-233.5,710.6]],["",0,0,"residential",[-198.5,669.7,-214.6,669.6,-214.7,686.3,-198.5,686.3]],["",0,0,"residential",[-222.6,670.7,-248.1,671.6,-247.6,687.3,-222,686.4]],["浙江长城资产大楼",0,0,"commercial",[-270.3,609.5,-311.1,611,-308.7,677.4,-267.9,675.9]],["平远里",0,0,"residential",[-320.9,596.3,-346.4,597.7,-341.7,679.1,-316.3,677.7]],["",0,0,"",[-297.2,681.3,-325.8,682.8,-324.3,711.1,-295.7,709.5]],["",0,0,"commercial",[-345,768.3,-307.9,767.1,-308.3,755.6,-345.4,756.8]],["",0,0,"commercial",[-365.2,680.8,-385.3,681.5,-382.1,770.2,-362.1,769.5]],["",0,0,"commercial",[-353.6,597.1,-368.1,597.5,-376.1,601.1,-381.5,608.9,-383.3,616.6,-382.9,631.4,-379.2,631.3,-378.1,674.8,-351.8,674.1,-352.4,651.4,-357.9,651.5,-358.5,631,-352.7,630.8]],["",0,0,"commercial",[-330.7,682.2,-362.1,683.6,-358.3,768.3,-348.1,767.8,-348.9,751.1,-333.6,750.4,-335.4,710.4,-329.5,710.2]],["杭州科技大厦",0,0,"residential",[-311.8,791.3,-364,792.2,-363,851,-372.9,851.2,-372.3,889.3,-335.3,888.6,-336,850,-349.9,850.2,-350.5,813.8,-328.8,813.4,-328.5,829.9,-311.1,829.6]],["",0,0,"residential",[-251.6,787,-268.8,787.6,-268.2,805.2,-258.6,804.9,-257.5,840.7,-249.9,840.4]],["中国工商银行",0,0,"",[-414.8,792.5,-427.2,779.3,-450.2,780,-449.7,798,-456.5,798.2,-455.9,819.2,-414.1,818]],["速8酒店杭州青年路店",0,0,"hotel",[-457.3,778.5,-496,781.6,-494.7,798,-484.4,797.2,-482.9,815.6,-463.7,814.1,-464.7,801.6,-458.3,801.1,-459,792.2,-456.2,792]],["杭州市新华书店有限公司",0,0,"",[-431.8,698.5,-475,698,-475,763,-463.9,762.3,-464.4,738.5,-431,737.2]],["基督教青年会旧址",0,0,"",[-485,709.1,-498.5,709.2,-498.4,722.7,-528.1,722.9,-528,743.8,-487.9,743.6,-487.9,760.5,-479.3,760.5,-479.4,738.6,-484.9,738.7]],["",0,0,"residential",[-531.7,203.6,-515.6,203,-514.1,240.6,-491.8,239.8,-493.7,187.1,-553.4,189.4,-550.7,261.7,-529.5,260.9]],["",0,0,"",[-450.4,337,-453,283.9,-469.4,270.7,-515.6,273.3,-513.3,340.6]],["杭州市农业局",0,0,"",[-537.8,100.8,-579.5,102.8,-578.2,131.4,-564.7,130.8,-565.5,113.2,-552.8,112.6,-551.9,131,-536.4,130.3]],["杭州君悦酒店",2,0,"",[77.6,120.5,83.7,117.6,88.5,112.9,89.6,110.6,91.4,106.7,92.1,100,90.5,93.4,86.8,87.8,81.9,84,76,81.9,69.8,81.7,63.9,83.5,58.8,87.1,55,92.1,53,98,52.9,104.2,54.8,110.2,58.7,115.6,64.3,119.4,70.9,121.1]],["三三医院旧址",0,0,"",[-509.5,131,-550.5,133.5,-549.4,151.9,-553.3,152.1,-552.4,167.2,-489.4,163.3,-497.4,149.7,-508.3,150.4]],["交通银行",0,0,"",[-415.5,603.6,-433.9,603.8,-462.3,604.1,-462,631.2,-448.6,631.1,-448.8,609.4,-440.7,609.4,-440.7,615.7,-429.5,615.6,-429.1,644.2,-421.2,644.1,-421.3,640.4,-418.7,640.4,-418.8,635.7,-408.9,635.6,-409.1,619.1,-415.3,619.2]],["",0,0,"",[-432.7,631.7,-459.1,632.9,-458.3,652,-431.8,650.8]],["汉庭酒店（杭州西湖解百店）",0,0,"hotel",[-464.6,602.9,-495,603.3,-494.4,651.4,-464,651]],["",0,0,"",[-498.9,602.8,-533,603.1,-532.5,646.1,-498.5,645.7]],["",0,0,"residential",[-511.8,790.7,-557,795.2,-552,846.9,-538,845.5,-541.9,806.1,-525.4,804.5,-521.6,843.5,-506.9,842.1]],["",0,0,"commercial",[15.3,315.3,15.6,325.3,15.8,333.8,16,338.1,37.5,337.5,36.8,314.7]],["",0,0,"retail",[35.8,280.7,35.1,255.5,13.6,256.1,14.2,281.3]],["",0,0,"retail",[39.4,255.3,39.8,278,59.4,277.3,58.8,254.5]],["",0,0,"commercial",[151.1,333.7,150.5,315.3,62.2,318.4,61.7,303.8,41.4,304.4,42.1,323.9,42.6,337.3]],["",0,0,"retail",[68.4,254.2,69.7,312.8,87.7,312.4,86.6,263.8,91.5,263.7,92.6,311.9,109.5,311.5,108.4,263.2,113.7,263,114.8,309.9,126.3,309.7,125.2,261.6,130.2,261.5,131.3,309.2,153.7,308.7,152,251.6]],["",0,0,"",[-382.3,124.6,-381.6,126,-372,121.1,-370.6,122.2,-365.9,122.1,-364.2,120.5,-364.9,116.8,-368.5,114.5,-371.8,115.5,-373.7,117.5,-373,119.2,-383,123.1]],["",0,0,"",[279.7,-103.1,270.8,-107.8,265,-97,275,-92.2]],["",0,0,"",[-481.6,6.2,-487.4,-.8,-497.7,8,-491.8,14.9]],["",0,0,"",[-237.3,217,-240.1,213,-244.7,216.3,-241.9,220.3]],["望湖宾馆",0,0,"hotel",[555.3,-147.6,536,-144,536.7,-140,521.2,-137.9,505.9,-119.7,507.9,-104.2,497.8,-102.3,500.8,-87.3,502.6,-77.9,540.6,-85.3,547.5,-49.8,570.7,-54.1,568.7,-64.2,594.1,-68.9,590.2,-90.8,610.1,-94.4,610.9,-89.9,631.5,-93.6,625.6,-126.6,586.3,-119.5,579.7,-124.2,587.2,-135.7,573,-145.1,565.5,-133.5,556.7,-139.7]],["",0,0,"",[540.5,-57.4,535.5,-80.3,502.4,-73,507.4,-50.2]],["",0,0,"",[563.4,-37.8,553.3,-35.5,553.5,-32.9,541.2,-32,549.1,-27.7,556.1,-27.9,554.4,-16.3,563.4,-14.8,564.5,-24.1]],["",0,0,"",[549.1,-27.7,541.2,-32,532.5,-34.8,528.4,-24.7,550.4,-17,553.3,-26]],["",0,0,"",[555.5,20.5,507.9,-7.9,504.2,-8.3,502,-6.6,501,-3.8,501.4,-.6,503.7,2.4,500.5,7.4,503.9,9.2,520.6,17.9,520.6,20,514.3,19.6,514.8,36.6,521,36.6,520.8,39.1,506.9,46.8,503.7,48.6,506.8,54.2,503.8,56.3,502.9,59.1,503.3,61.9,505.3,63.6,508.1,63.8,512,62.3,514.6,61.7,555.6,37]],["",0,0,"",[520.6,17.9,503.9,9.2,499.7,17.7,498.8,23,498.1,30.1,499,35.7,502.2,41.7,506.9,46.8,520.8,39.1,521,36.6,514.8,36.6,514.3,19.6,520.6,20]],["",0,0,"",[169.3,720.5,113.8,698.1,114.7,736.1,138.1,743.5,141.7,823.6,173.8,821.3,171.3,764.6]],["文保建筑",0,0,"",[121.1,764.5,112.6,764.7,112.7,773.7,121.4,773.3]],["",0,0,"hospital",[187.9,632.2,186,602.2,185.8,600.3,185.1,598.7,183.9,597.3,182.3,596.4,180.5,596.1,178.7,596.4,177.1,597.3,175.8,598.7,175.2,600.4,175,602.2,175.4,617.1,175.5,621.1,176.1,632.6]]],Ea={x0:-545,x1:568,z0:-118,z1:800},fu=(i,e,t=0)=>i>Ea.x0-t&&i<Ea.x1+t&&e>Ea.z0-t&&e<Ea.z1+t,hx=[["君悦",66],["解百新世纪",60],["新世纪",60],["工联CC二期",44],["工联CC",38],["龙翔服饰城",30],["明珠",46],["in77",26],["in88",22],["东坡大世界",24],["望湖宾馆",40],["友好饭店",78],["国贸",70],["银行",44],["大厦",56],["大酒店",52],["酒店",38],["宾馆",32],["饭店",30],["电信",42],["医院",38],["公寓",44],["国际",60],["中心",46],["广场",40],["书店",24],["剧院",20]];function ux([i,e,t,n,s],r){if(t)return t;if(e)return e*3.9;for(const[o,l]of hx)if(i.includes(o))return l;let a=0;for(let o=0;o<s.length;o+=2){const l=(o+2)%s.length;a+=s[o]*s[l+1]-s[l]*s[o+1]}return a=Math.abs(a)/2,n==="apartments"||n==="residential"?20+Math.floor(r(0,5))*3.3:n==="hospital"||n==="hotel"||n==="commercial"?a>1500?30:22:(a<120?8:a<400?13:a<1200?18:a<3e3?23:27)+r(0,3)}function fx(i,e){const{scene:t,M:n,add:s,box:r,cyl:a,tick:o}=i,l=[];let c=7;const h=(I=0,K=1)=>I+(c=c*16807%2147483647)/2147483647*(K-I),u=[],f=[],p=[],g=[],S=[];for(const I of cx){const[K,,,R,W]=I;if(R==="train_station"||K.includes("Apple"))continue;const J=/in77|in88|东坡|银泰/.test(K)?4:/君悦|宾馆|酒店|饭店/.test(K)?5:/工联|服饰城|解百|新世纪|明珠|百货/.test(K)?6:0,U=ux(I,h),Z=J+h()*.98,ee=W.length/2;let ae=0,re=null;for(let Ae=0;Ae<ee;Ae++){const Be=W[Ae*2],Fe=W[Ae*2+1],k=W[(Ae+1)%ee*2],nt=W[(Ae+1)%ee*2+1],qe=k-Be,it=nt-Fe,de=Math.hypot(qe,it);if(de<.05)continue;const $e=-it/de,ke=qe/de,Ve=u.length/3;u.push(Be,ye,Fe,k,ye,nt,k,ye+U,nt,Be,ye+U,Fe);for(let D=0;D<4;D++)f.push($e,0,ke);p.push(ae,Z,U,0,ae+de,Z,U,0,ae+de,Z,U,0,ae,Z,U,0),g.push(Ve,Ve+1,Ve+2,Ve,Ve+2,Ve+3),ae+=de,(!re||de>re.L)&&(re={L:de,x:(Be+k)/2,z:(Fe+nt)/2,nx:$e,nz:ke})}const Me=[];for(let Ae=0;Ae<ee;Ae++)Me.push(new fe(W[Ae*2],W[Ae*2+1]));const ge=u.length/3;for(const Ae of Me)u.push(Ae.x,ye+U,Ae.y),f.push(0,1,0),p.push(0,Z,U,1);for(const[Ae,Be,Fe]of Qn.triangulateShape(Me,[]))g.push(ge+Ae,ge+Be,ge+Fe);i.polys.push({pts:W,h:U}),K&&re.L>9&&!/in77|工联|东坡|in88/.test(K)&&S.push({name:K,H:U,...re})}const m=new wt;m.setAttribute("position",new Ze(u,3)),m.setAttribute("normal",new Ze(f,3)),m.setAttribute("fa",new Ze(p,4)),m.setIndex(g);const d=uu(!0);d.side=Ut;const x=new gt(m,d);x.castShadow=x.receiveShadow=!0,i.solids.add(x);for(const I of S){const K=ji([{text:I.name,font:'bold 76px "Microsoft YaHei","Segoe UI",sans-serif',color:"#f4e6c0"}],{w:1024,h:128,bg:"#1a1410"}),R=Math.min(I.L*.6,Math.max(6,I.name.length*1.3)),W=s(new Gt(R,R/8),new at({map:K,emissiveMap:K,emissive:16777215,emissiveIntensity:.4,roughness:.5}),I.x+I.nx*.25,ye+Math.min(I.H-1.5,6.2),I.z+I.nz*.25,{shadow:!1});W.rotation.y=Math.atan2(I.nx,I.nz)}for(const[I,K,R,W,J,U,Z]of Xl){const ee=(K+R)/2,ae=(W+J)/2,re=fu(ee,ae);if(I.startsWith("Apple")||re||(l.push([ee,ae,R-K,U,J-W,0,1]),i.colliders.push(new Pn(new B(K,0,W),new B(R,U,J)))),!Z||I==="in77 B")continue;const Me=Z.startsWith("in77"),ge=ji([{text:Z,font:`bold ${Me?150:110}px "Segoe UI","Microsoft YaHei",sans-serif`},...Me?[{text:"湖滨银泰",font:'bold 70px "Microsoft YaHei",sans-serif',color:"#ffd9a0"}]:[]],{w:1024,h:384,bg:Me?"#b3122a":"#14181d"}),Ae=new at({map:ge,emissiveMap:ge,emissive:16777215,emissiveIntensity:.55,roughness:.5}),Be=Math.min(22,(R-K)*.5),Fe=ye+Math.min(U-4,15);s(new Gt(Be,Be*.375),Ae,ee,Fe,W-.6,{ry:Math.PI,shadow:!1}),s(new Gt(Be,Be*.375),Ae,ee,Fe,J+.6,{shadow:!1})}const M=Object.values(ks).map(([I,K])=>({pts:I,w:K})),_=Object.values(Rs);for(let I=-2600;I<2500;I+=62)for(let K=40;K<4300;K+=62){const R=I+h(8,54),W=K+h(8,54),J=h(26,44),U=h(24,40),Z=Math.max(J,U)/2+3;if(fu(R,W,Z)||(R>-911?!Kn(bf,R,W):W<130)||Kn(En,R,W)||_.some(([Me,ge,Ae])=>Math.hypot(R-Me,W-ge)<Ae+30)||Xl.some(([,Me,ge,Ae,Be])=>R>Me-Z-8&&R<ge+Z+8&&W>Ae-Z-8&&W<Be+Z+8)||M.some(Me=>so(Me.pts,null,R,W).d<Me.w/2+Z+2))continue;const ee=R>1200&&W<1100,re=W<620&&!ee?h(14,30):ee?50+Math.pow(h(),1.6)*130:h()<.07?h(95,165):26+Math.pow(h(),1.8)*60;l.push([R,W,J,re,U,0,0]),i.colliders.push(new Pn(new B(R-J/2,0,W-U/2),new B(R+J/2,re,W+U/2)))}const[w,T]=Fn.qjnt;for(let I=0;I<80;I++)l.push([w+h(-650,650),T+h(-500,600),h(34,52),110+Math.pow(h(),1.7)*200,h(34,52),h(0,.7),0]);for(const I of[...l])I[3]>95&&l.push([I[0],I[1],I[2]*.72,I[3]*.16,I[4]*.72,I[5],0,I[3]]);const v=new tt(1,1,1).translate(0,.5,0),y=new _n(v,uu(!1),l.length),A=new It,L=new Float32Array(l.length);l.forEach(([I,K,R,W,J,U,,Z=0],ee)=>{A.position.set(I,ye+Z,K),A.scale.set(R,W,J),A.rotation.y=U,A.updateMatrix(),y.setMatrixAt(ee,A.matrix),L[ee]=h()}),v.setAttribute("seed",new Ol(L,1)),y.frustumCulled=!1,y.castShadow=y.receiveShadow=!0,i.solids.add(y);const O=l.filter(I=>I[3]<34&&!I[6]&&I.length<8),G=l.filter(I=>I[3]>=34&&I.length<8),N=new ja;N.moveTo(-.5,0),N.lineTo(.5,0),N.lineTo(0,1),N.closePath();const C=n.tile.clone();for(const I of["map","normalMap","roughnessMap"])C[I]=C[I].clone(),C[I].repeat.set(4,3);C.metalnessMap=C.roughnessMap;const F=new _n(new Rc(N,{depth:1,bevelEnabled:!1}).translate(0,0,-.5),C,O.length);O.forEach(([I,K,R,W,J],U)=>{A.position.set(I,ye+W,K),A.rotation.y=R>J?Math.PI/2:0,A.scale.set(Math.min(R,J)+1.6,Math.min(R,J)*.3,Math.max(R,J)+1.6),A.updateMatrix(),F.setMatrixAt(U,A.matrix)});const z=new _n(new tt(1,1,1).translate(0,.5,0),n.concrete,G.length*2);G.forEach(([I,K,R,W,J,U],Z)=>{A.rotation.y=U,A.position.set(I+R*.14,ye+W,K-J*.1),A.scale.set(R*.34,3,J*.3),A.updateMatrix(),z.setMatrixAt(Z*2,A.matrix),A.position.set(I-R*.24,ye+W,K+J*.22),A.scale.set(R*.14,1.8,J*.16),A.updateMatrix(),z.setMatrixAt(Z*2+1,A.matrix)});for(const I of[F,z])I.castShadow=I.receiveShadow=!0,I.frustumCulled=!1,t.add(I);const P=(I,K,R,W,J)=>{const U=new gt(I,K);return U.position.set(R,W,J),t.add(U),U};P(new pn(46,48,32),new at({color:14263866,metalness:1,roughness:.22}),w+200,44,T-420),P(new pn(60,40,20,0,Math.PI*2,0,Math.PI/2),new at({color:13620956,metalness:.7,roughness:.25}),w+60,0,T-460).scale.set(1,.42,.55);const Y=(I,K,R)=>{const W=new ft(26,32,250,4,40),J=W.attributes.position;for(let U=0;U<J.count;U++){const Z=(J.getY(U)/250+.5)*.9*R,ee=J.getX(U),ae=J.getZ(U);J.setXYZ(U,ee*Math.cos(Z)-ae*Math.sin(Z),J.getY(U),ee*Math.sin(Z)+ae*Math.cos(Z))}W.computeVertexNormals(),P(W,new at({color:10466504,metalness:.9,roughness:.18}),I,125,K)};Y(w+520,T+260,1),Y(w+470,T+320,-1);const H=[],Q=(I,K,R)=>{for(let W=K;W<=R;W+=1.1)H.push([I,W,4,.5])},ne=(I,K,R)=>{for(let W=K;W<=R;W+=1.1)H.push([W,I,.5,4])};for(const[I,K,R]of[[2,348,14],[165,342,10],[-143,353,10],[-262,358,10],[-398,363,20],[468,331,24]])Q(I-R/2-4,K-11,K+11),Q(I+R/2+4,K-11,K+11),ne(K-16,I-R/2+1,I+R/2-1),ne(K+16,I-R/2+1,I+R/2-1);const pe=new _n(new tt(1,.02,1),i.over(new at({color:15263450,roughness:.6}),8),H.length);H.forEach(([I,K,R,W],J)=>{A.position.set(I,ye+.1,K),A.rotation.set(0,0,0),A.scale.set(R,1,W),A.updateMatrix(),pe.setMatrixAt(J,A.matrix)}),pe.receiveShadow=!0,pe.frustumCulled=!1,t.add(pe);const Ne=36,ie=new _n(new ft(.1,.16,1,8).translate(0,.5,0),new at({color:15923455,emissive:10470624,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.2,depthWrite:!1}),Ne);ie.frustumCulled=!1,t.add(ie),i.noAO.push(ie),o.push(I=>{for(let K=0;K<Ne;K++){const R=(K-Ne/2)*2.6;A.position.set(-12-.855*R-12,0,22+.52*R-20),A.rotation.set(0,0,0),A.scale.set(1,2+9*Math.pow(Math.abs(Math.sin(I*.9+K*.32)*Math.cos(I*.37+K*.11)),1.5),1),A.updateMatrix(),ie.setMatrixAt(K,A.matrix)}ie.instanceMatrix.needsUpdate=!0});const xe=new at({color:14164778,roughness:.5}),Le=new at({color:328965,roughness:1}),Te=[],X=(I,K,R,W,J)=>{const U=Xn[I];r(3.6,.1,6.4,Le,R,ye+.06,W,{shadow:!1});for(let ae=0;ae<6;ae++)r(3.2,.18,.5,n.concrete,R,ye-.1-ae*.2,W+J*(2.4-ae*.9),{s:1});for(const ae of[-1.9,1.9]){r(.12,1.1,6.4,n.glass,R+ae,ye+.55,W,{collide:!0});for(const re of[-3,3])a(.07,.07,3,n.galv,R+ae,ye+1.5,W+re,{},8)}r(3.9,1.1,.12,n.glass,R,ye+.55,W-J*3.2,{collide:!0}),r(4.4,.14,7.2,n.glass,R,ye+3.05,W,{s:1}),r(4.4,.3,.2,xe,R,ye+2.8,W+J*3.5,{s:1});const Z=ji([{text:`地铁 ${U.name}`,font:'bold 96px "Microsoft YaHei",sans-serif'},{text:`${U.en} · Line 1${K?" · Exit "+K:""}`,font:'600 54px "Segoe UI",sans-serif',color:"#ffd6d6"}],{w:1024,h:256,bg:"#d8232a"}),ee=new at({map:Z,emissiveMap:Z,emissive:16777215,emissiveIntensity:.5});s(new Gt(4,1),ee,R,ye+3.7,W+J*3.55,{ry:J>0?0:Math.PI,shadow:!1}),s(new Gt(4,1),ee,R,ye+3.7,W+J*3.45,{ry:J>0?Math.PI:0,shadow:!1}),Te.push({si:I,x:R,z:W+J*4.4})};return X(1,"A",148,374,1),X(1,"B",148,335,1),X(1,"C",2,334,-1),X(1,"D",2,374,1),X(0,"",1006,297,-1),X(2,"",-900,750,1),{metro:Te}}const At=(i,e,t)=>new B(i,e,t);function As(i,e,t){const n=e.clone().sub(i),s=new ft(t,t,n.length(),5);return s.applyQuaternion(new fs().setFromUnitVectors(At(0,1,0),n.clone().normalize())),s.translate((i.x+e.x)/2,(i.y+e.y)/2,(i.z+e.z)/2),s}const lr=(i,e,t,n=.025)=>new Ys(new Ac(i,i.clone().add(e).multiplyScalar(.5).setY(Math.min(i.y,e.y)-t),e),16,n,5);function wa(i,e){const t=[],n=Math.round(i/.07);for(let s=0;s<=n;s++)t.push(new fe(e*(s%2?1.9:1)*(1-.3*s/n),s*i/n));return new $a(t,16)}function dx(i){const{scene:e,M:t,add:n,box:s,cyl:r,colliders:a}=i,o=(P,Y,H=!0)=>n(P,Y,0,0,0,{shadow:H}),l=-92,c=71;s(46,.12,15,t.concrete,l,ye+.06,c,{s:3});for(let P=0;P<3;P++){const Y=l-13+P*13,H=c+1;s(4.2,.3,3.4,t.concrete,Y,ye+.27,H,{s:2}),s(3,2.6,1.9,t.green,Y,ye+1.72,H,{s:1.5,r:.08,collide:!0});for(const ne of[-1,1]){const pe=s(2.6,1.9,.5,t.fins,Y,ye+1.6,H+ne*1.25,{s:1.3});pe.material=t.fins,s(2.7,.08,.56,t.galv,Y,ye+2.6,H+ne*1.25,{s:1})}const Q=r(.38,.38,2.6,t.green,Y,ye+3.75,H-.2,{},20);Q.rotation.z=Math.PI/2;for(const ne of[-1,1])s(.08,.5,.08,t.galv,Y+ne,ye+3.25,H-.2,{s:1});for(let ne=-1;ne<=1;ne++)n(wa(1.7,.09),t.porcelain,Y+ne*.85,ye+3,H+.5),r(.05,.05,.25,t.galv,Y+ne*.85,ye+4.8,H+.5),n(wa(.6,.06),t.porcelain,Y+ne*.5,ye+3,H-.75),o(lr(At(Y+ne*.85,ye+4.9,H+.5),At(Y+ne*2.2,ye+8.1,c+5.5),.5),t.copper),n(wa(1.1,.07),t.porcelain,Y+ne*2.2,ye+8.1,c+5.5,{rx:Math.PI});n(new Gt(.7,.7),new at({map:ji([{text:"⚡",font:"150px sans-serif",color:"#111"},{text:"高压危险",font:'bold 44px "Microsoft YaHei",sans-serif',color:"#111"}],{w:256,h:256,bg:"#f2c300"}),roughness:.5}),Y,ye+2,H-.97,{ry:Math.PI,shadow:!1})}const h=ye+9.4;for(const P of[l-21,l,l+21])for(const Y of[-.7,.7])s(.3,9.4,.3,t.galv,P,ye+4.7,c+5.5+Y,{s:1});for(const P of[l-21,l,l+21])i.circles.push({x:P,z:c+5.5,r:.8});s(43,.5,1.7,t.galv,l,h,c+5.5,{s:1});for(let P=-1;P<=1;P++)o(lr(At(l-20,ye+8.1,c+5.5+P*.5),At(l+20,ye+8.1,c+5.5+P*.5),.25,.04),t.copper);const u=document.createElement("canvas");u.width=u.height=64;const f=u.getContext("2d");f.strokeStyle="#b9bcc0",f.lineWidth=3;for(let P=-64;P<128;P+=16)f.beginPath(),f.moveTo(P,0),f.lineTo(P+64,64),f.moveTo(P+64,0),f.lineTo(P,64),f.stroke();const p=new bi(u);p.wrapS=p.wrapT=ii,p.colorSpace=Ht;const g=(P,Y,H,Q)=>{const ne=p.clone();ne.repeat.set(P*5,12),ne.needsUpdate=!0,i.noAO.push(n(new Gt(P,2.4),new at({map:ne,alphaTest:.5,side:Ut,metalness:.7,roughness:.5}),Y,ye+1.2,H,{ry:Q}));for(let pe=0;pe<=P;pe+=3.5){const Ne=Y+(Q?0:pe-P/2),ie=H+(Q?pe-P/2:0);r(.04,.04,2.5,t.galv,Ne,ye+1.25,ie,{},6)}};g(46,l,78.6,0),g(15,l-23,71.2,Math.PI/2),g(15,l+23,71.2,Math.PI/2),a.push(new Pn(At(l-23.2,ye,63.6),At(l-22.8,ye+2.4,78.8)),new Pn(At(l+22.8,ye,63.6),At(l+23.2,ye+2.4,78.8)));for(let P=l-21;P<=l+21;P+=3)r(.09,.09,.9,t.yellow,P,ye+.45,63.4,{},12);const S=[],m=30,d=P=>3.2-2.5*(P/m);for(let P=0;P<m;P+=3.75){const Y=d(P),H=d(P+3.75),Q=P+3.75;for(const[ne,pe]of[[1,1],[1,-1],[-1,-1],[-1,1]]){S.push(As(At(ne*Y,P,pe*Y),At(ne*H,Q,pe*H),.09));const Ne=pe===ne?ne:-ne,ie=pe===ne?-pe:pe;S.push(As(At(ne*Y,P,pe*Y),At(Ne*H,Q,ie*H),.045),As(At(ne*H,Q,pe*H),At(Ne*H,Q,ie*H),.045))}}const x=[[19,7],[23.5,5.5],[28,4]];for(const[P,Y]of x)for(const H of[-1,1])S.push(As(At(0,P,.5),At(H*Y,P,0),.06),As(At(0,P,-.5),At(H*Y,P,0),.06),As(At(0,P+2,0),At(H*Y,P,0),.045)),S.push(wa(1.6,.08).rotateX(Math.PI).translate(H*Y,P,0));const M=ro(S.map(P=>{const Y=P.toNonIndexed();return Y.deleteAttribute("uv"),Y})),_=[[-62,74],[-210,190],[-420,330]];_.forEach(([P,Y],H)=>{n(M,t.galv,P,ye,Y,{ry:.65,parent:H?e:void 0}).updateMatrixWorld(),H||i.circles.push({x:P,z:Y,r:3.4})});const w=(P,Y,H,Q)=>At(P[0]+Math.cos(-.65)*Q*H,ye+Y-1.6,P[1]+Math.sin(-.65)*Q*H*-1);for(let P=0;P<_.length-1;P++)for(const[Y,H]of x)for(const Q of[-1,1])n(lr(w(_[P],Y,H,Q),w(_[P+1],Y,H,Q),9,.035),t.steel,0,0,0,{parent:e,shadow:!1});for(const[P,Y]of x.slice(0,1))for(const H of[-1,1])o(lr(w(_[0],P,Y,H),At(l+20+H,ye+9.7,c+5.5),2.5,.035),t.steel,!1);for(let P=0;P<4;P++){const Y=-44+P*5.2,H=71;s(2.44,2.9,6.06,t.white,Y,ye+1.6,H,{s:2,r:.04,collide:!0}),s(2.6,.15,6.2,t.concrete,Y,ye+.075,H,{s:1});for(const Q of[-.6,.6])s(1.05,2.4,.04,t.white,Y+Q,ye+1.55,67.95,{s:1.3});s(1.6,.9,.3,t.fins,Y,ye+2.2,74.15,{s:.8}),s(2,.05,.03,t.emit(3211120,5),Y,ye+2.95,67.94,{shadow:!1}),n(new Gt(1.6,.5),new at({map:ji([{text:`储能 BESS-0${P+1}`,font:'bold 60px "Microsoft YaHei",sans-serif',color:"#1a5fb4"}],{w:512,h:160,bg:"#e9eaec"}),roughness:.5}),Y,ye+2.5,67.92,{ry:Math.PI,shadow:!1})}const T=95,v=69,y=document.createElement("canvas");y.width=y.height=256;const A=y.getContext("2d");A.fillStyle="#0a1330",A.fillRect(0,0,256,256),A.strokeStyle="#8a93a8",A.lineWidth=1;for(let P=0;P<=256;P+=32)A.strokeRect(P,0,.5,256),A.strokeRect(0,P,256,.5);A.strokeStyle="#c9ced8",A.lineWidth=5,A.strokeRect(0,0,256,256);const L=new bi(y);L.wrapS=L.wrapT=ii,L.repeat.set(17,5),L.colorSpace=Ht,L.anisotropy=16;const O=new kt;O.position.set(T,ye+4.3,v),O.rotation.x=-.12,i.solids.add(O),n(new tt(34,.12,10),[t.galv,t.galv,new at({map:L,roughness:.12,metalness:.6}),t.white,t.galv,t.galv],0,0,0,{parent:O});for(let P=-15;P<=15;P+=6)n(new tt(1.6,.04,.12),t.emit(14674687,6),P,-.09,1,{parent:O,shadow:!1});for(const P of[-15,0,15])for(const Y of[-3.5,3.5])r(.12,.12,4.2+Y*.12,t.galv,T+P,ye+2.1+Y*.06,v+Y,{},12),i.circles.push({x:T+P,z:v+Y,r:.25});const G=new Cr(14674175,120,24,2);G.position.set(T,ye+3.6,v),e.add(G);const N=new at({emissiveMap:ji([{text:"⚡ 充电中",font:'bold 54px "Microsoft YaHei",sans-serif',color:"#5dff9a"},{text:"240 kW",font:'bold 70px "Segoe UI",sans-serif'}],{w:256,h:256,bg:"#02130c"}),emissive:16777215,emissiveIntensity:1.6,color:0});for(let P=0;P<6;P++){const Y=T-14+P*5.6,H=v+4.2;s(.55,1.9,.38,t.white,Y,ye+.95,H,{s:1,r:.06,collide:!0}),n(new Gt(.36,.36),N,Y,ye+1.45,H-.2,{ry:Math.PI,shadow:!1}),s(.5,.03,.02,t.emit(3211120,6),Y,ye+1.86,H-.2,{shadow:!1}),o(lr(At(Y+.28,ye+1.2,H),At(Y+1.2,ye+.8,H-2.2),.7,.02),t.rubber),s(.1,.012,5.2,t.white,Y-2.8,ye+.008,v+1.3,{shadow:!1})}const C=22,F=60.6;for(const P of[-2.6,2.6])r(.06,.06,2.6,t.galv,C+P,ye+1.3,F+.6,{},10);s(5.8,.06,1.8,t.glass,C,ye+2.62,F,{s:1}),s(3.2,.06,.4,t.wood,C-1,ye+.48,F+.4,{s:1});const z=ji([{text:"杭州 · 西湖",font:'bold 88px "Microsoft YaHei",sans-serif'},{text:"HANGZHOU  WEST LAKE",font:'300 34px "Segoe UI",sans-serif',color:"#9fd8ff"}],{w:512,h:512,bg:"#06203c"});s(1.5,2.1,.12,t.steel,C+1.9,ye+1.25,F+.6,{s:1,collide:!0});for(const P of[-1,1])n(new Gt(1.36,1.96),new at({emissiveMap:z,emissive:16777215,emissiveIntensity:1.5,color:0}),C+1.9,ye+1.25,F+.6+P*.065,{ry:P>0?0:Math.PI,shadow:!1});return{carSpots:[[T-13.8,v+1,0],[T-2.6,v+1,0],[T+8.6,v+1,0],[8,55.4,Math.PI/2],[-58,48.8,-Math.PI/2]],zones:[{x:l,z:68,r:24,name:"SUBSTATION 220kV"},{x:T,z:67,r:20,name:"SOLAR CHARGING HUB"}]}}function px(i){const e=new kt,t=new at({color:0,emissive:16711680,emissiveIntensity:5}),n=(s,r,a,o,l)=>{const c=new gt(s,r);return c.position.set(a,o,l),c.castShadow=!0,e.add(c),c};n(new tt(1.33,.31,.014),i.pcb,0,0,0);for(const s of[-1,1]){n(new Hi(1.31,.25,.03,2,.01),i.shroud,0,.045,s*.022);for(let r=0;r<5;r++)n(new tt(.16,.012,.004),i.galv,-.4+r*.2,.1-r*.02,s*.039);n(new tt(.6,.05,.016),i.gold,-.345,-.135,s*.001),n(new tt(.66,.05,.016),i.gold,.325,-.135,s*.001)}return n(new Hi(1.31,.06,.07,2,.02),t,0,.19,0).castShadow=!1,{group:e,rgb:t}}const mx=[{name:"GT-LP 2GB",sub:"low-profile · semi",L:.17,W:.075,T:.036,fans:1,hex:16760944,dmg:30,rate:.17,heat:6,vram:0,auto:!1,spread:.004,kick:.8},{name:"RX TRI 12GB",sub:"triple fan · full auto",L:.32,W:.13,T:.055,fans:3,hex:3201279,dmg:17,rate:.075,heat:3,vram:.05,auto:!0,spread:.011,kick:.45},{name:"TITAN RT 24GB",sub:"ray tracer · piercing beam",L:.36,W:.15,T:.082,fans:3,hex:11816191,dmg:160,rate:.95,heat:36,vram:1.5,auto:!1,spread:0,kick:2.4,ray:!0}];function gx(i){const e=[new ft(i*.3,i*.3,.006,20)];for(let t=0;t<9;t++)e.push(new tt(i*.72,.0015,i*.36).rotateX(.5).rotateY(-.25).translate(i*.62,0,0).rotateY(t*Math.PI*2/9));return ro(e.map(t=>t.toNonIndexed()))}function vx(i,e){const t=new kt,n=[],{L:s,W:r,T:a}=e,o=new at({color:0,emissive:e.hex,emissiveIntensity:3}),l=new at({color:0,emissive:e.hex,emissiveIntensity:0}),c=(M,_,w,T,v)=>{const y=new gt(M,_);return y.position.set(w,T,v),y.receiveShadow=!0,t.add(y),y},h=(M,_,w,T)=>new Hi(M,_,w,3,T);c(h(r,.004,s,.0015),i.steel,0,0,0),c(new tt(r-.008,.003,s-.012),i.pcb,0,.005,0),c(new tt(.01,.0025,.085),i.gold,-r/2-.004,.005,s*.12);const u=a-.026,f=c(new tt(r-.014,u,s-.02),i.fins,0,.007+u/2,0);f.material=i.fins;for(let M=0;M<(e.ray?6:e.fans>1?4:2);M++){const _=(M-(e.ray?2.5:e.fans>1?1.5:.5))*.016,w=c(new ft(.004,.004,s*.5,10),i.copper,_,.012+u*.5,-s*.28);w.rotation.x=Math.PI/2;const T=c(new pn(.0045,10,8),l,_,.012+u*.5,-s*.53);T.userData.tip=!0}const p=a-.012;c(h(r,.016,s,.006),i.shroud,0,p,0);for(const M of[-1,1])c(h(.006,a-.012,s*.96,.002),i.shroud,M*(r/2-.003),(a-.012)/2+.004,0);c(new tt(.003,.006,s*.82),o,r/2+5e-4,p-.002,0),c(new tt(r*.5,.0015,.004),o,0,p+.0085,-s/2+.012);const g=Math.min(r*.42,s/e.fans*.44),S=gx(g);for(let M=0;M<e.fans;M++){const _=(M-(e.fans-1)/2)*(s/e.fans)*.98;c(new ft(g*1.06,g*1.06,.002,40),i.rubber,0,p+.0085,_),c(new Pc(g*1.07,.0022,8,48),M===1||e.fans===1?o:i.steel,0,p+.0095,_).rotation.x=Math.PI/2;const w=c(S,i.rubber,0,p+.0125,_);n.push(w),c(new ft(g*.2,g*.2,5e-4,20),i.galv,0,p+.0162,_)}c(new tt(r+.012,a+.004,.0015),new at({color:2895409,metalness:1,roughness:.45}),0,a/2-.004,s/2+.001);for(let M=0;M<3;M++)c(new tt(.017,.006,.002),i.rubber,-r*.28+M*r*.28,.014,s/2+.002);c(h(.03,.012,.014,.002),i.rubber,r*.25,p+.012,s*.18);const m=new Ys(new Qa([new B(r*.25,p+.016,s*.18),new B(r*.4,p+.05,s*.3),new B(r*.2,.02,s*.62),new B(0,-.12,s*.7)]),20,.0045,6);c(m,i.rubber,0,0,0);const d=c(h(.03,.1,.036,.008),i.shroud,0,-.05,s/2-.045);d.rotation.x=-.25,c(h(.012,.012,.05,.003),i.steel,0,-.012,s/2-.085);const x=new It;return x.position.set(0,.012+u*.5,-s*.56),t.add(x),{g:t,fans:n,rgb:o,core:l,muzzle:x,def:e,temp:38,throttled:!1,cool:0}}function xx(i,e){const t=new kt;i.add(t);const n=mx.map(f=>{const p=vx(e,f);return p.g.visible=!1,t.add(p.g),p}),s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d");r.translate(64,64);for(let f=0;f<10;f++){r.rotate(.4+Math.random());const p=28+Math.random()*34,g=r.createLinearGradient(0,0,p,0);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=g,r.beginPath(),r.moveTo(0,-6),r.lineTo(p,0),r.lineTo(0,6),r.fill()}const a=r.createRadialGradient(0,0,0,0,0,30);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(-64,-64,128,128);const o=new gt(new Gt(.26,.26),new Or({map:new bi(s),transparent:!0,blending:Fs,depthWrite:!1,fog:!1}));o.visible=!1,i.add(o);const l=new Cr(16777215,0,14,2);l.position.set(0,0,-.9),i.add(l);const c=new B(.15,-.175,-.38),h=new B(.02,-.105,-.3),u={cards:n,cur:1,next:1,swap:0,recoil:0,flashT:0,adsT:0,sway:new fe,flash:o,light:l,root:t,get card(){return n[u.cur]},select(f){f!==u.next&&n[f]&&(u.next=f,u.swap=.36)},kick(){const f=u.card;u.recoil=Math.min(u.recoil+f.def.kick,3),u.flashT=f.def.ray?.12:.04,o.material.color.set(f.def.hex).multiplyScalar(f.def.ray?9:5),l.color.set(f.def.hex),o.rotation.z=Math.random()*6.3,o.scale.setScalar((.7+Math.random()*.5)*(f.def.ray?2:1))},update(f,p){const g=(M,_,w)=>M+(_-M)*(1-Math.exp(-w*f));u.swap>0&&(u.swap-=f,u.swap<.18&&u.cur!==u.next&&(u.cur=u.next));const S=u.swap>0?Math.sin(Math.min(1,u.swap/.36)*Math.PI):0;n.forEach((M,_)=>{M.g.visible=_===u.cur;const w=Math.min(1,Math.max(0,(M.temp-38)/57));for(const T of M.fans)T.rotation.y-=(8+w*70)*f;M.rgb.emissive.set(M.def.hex).lerp(new Ye(16722440),w*w),M.rgb.emissiveIntensity=M.throttled?2+4*Math.abs(Math.sin(p.t*9)):3+w*3,M.core.emissiveIntensity=g(M.core.emissiveIntensity,.4+w*2,6)});const m=u.card;u.adsT=g(u.adsT,p.ads?1:0,16),u.recoil=g(u.recoil,0,10),u.sway.x=g(u.sway.x,-p.mdx*6e-4,10),u.sway.y=g(u.sway.y,p.mdy*6e-4,10);const d=1-u.adsT,x=m.g;x.position.lerpVectors(c,h,u.adsT),x.position.x+=(u.sway.x+p.bobX*.5)*d,x.position.y+=(u.sway.y-p.bobY*.4)*d-S*.3-Math.max(0,-p.vy)*.004+(.33-m.def.L)*.1,x.position.z+=u.recoil*.022+m.def.L*.5-.16,x.rotation.set(u.recoil*.03*(.4+d)+u.sway.y*1.5-S*.8,.07*d+u.sway.x*2*d,.72+.5*u.adsT-u.sway.x*1.2*d),u.flashT-=f,o.visible=u.flashT>0,l.intensity=u.flashT>0?m.def.ray?160:50:0,o.visible&&(m.muzzle.getWorldPosition(o.position),i.worldToLocal(o.position),u.flashT>.02&&(m.core.emissiveIntensity=30))}};return u}const Qi=(i,e)=>{for(let t=1;t<e.length;t++)if(i<=e[t][0]){const n=e[t-1],s=e[t],r=(i-n[0])/(s[0]-n[0]),a=r*r*(3-2*r);return n[1]+(s[1]-n[1])*a}return e[e.length-1][1]},du=(i,e)=>Math.sign(i)*Math.pow(Math.abs(i),e),Ps=4.75,pu=[[0,.5],[.05,.8],[.18,.94],[.5,.965],[.84,.94],[.95,.84],[1,.58]],Yl=[[0,.56],[.04,.7],[.28,.9],[.4,.99],[.86,1.03],[.95,.99],[1,.8]],Tf=[[0,.44],[.07,.25],[.92,.25],[1,.42]];function mu(i,e,t,n){const s=[],r=[];for(let o=0;o<=i;o++)for(let l=0;l<=e;l++){const c=o/i,[h,u]=t(c,l/e);s.push(h,u,(c-.5)*Ps)}for(let o=0;o<i;o++)for(let l=0;l<e;l++){const c=o*(e+1)+l,h=c+e+1;r.push(c,c+1,h,h,c+1,h+1)}if(n)for(const o of[0,i]){const l=s.length/3,c=o/i;s.push(0,(Qi(c,Yl)+Qi(c,Tf))/2,(c-.5)*Ps);for(let h=0;h<e;h++){const u=o*(e+1)+h;o?r.push(l,u+1,u):r.push(l,u,u+1)}}const a=new wt;return a.setAttribute("position",new Ze(s,3)),a.setIndex(r),a.computeVertexNormals(),a}function _x(i,e,t){const n=new kt;n.rotation.order="YXZ";const s=new Nh({color:e,roughness:.32,metalness:.55,clearcoat:1,clearcoatRoughness:.04,side:Ut}),r=new Nh({color:329740,roughness:.03,metalness:.9,clearcoat:1,side:Ut}),a=(m,d,x=0,M=0,_=0,w=n)=>{const T=new gt(m,d);return T.position.set(x,M,_),T.castShadow=T.receiveShadow=!0,w.add(T),T};a(mu(44,36,(m,d)=>{const x=d*Math.PI*2,M=Qi(m,pu),_=Qi(m,Yl),w=Qi(m,Tf),T=Math.cos(x),v=Math.sin(x);return[du(T,.36)*M*(1-.07*Math.max(0,v)),(_+w)/2+du(v,.42)*(_-w)/2]},!0),s),a(mu(30,20,(m,d)=>{const x=.3+m*.64,M=d*Math.PI,_=Qi(x,pu)*.87*(.86+.14*Math.sin(Math.PI*m)),w=.5*Math.pow(Math.sin(Math.PI*Math.pow(m,.78)),.5);return[Math.cos(M)*_*(1-.2*Math.sin(M))*(.55+.45*Math.pow(Math.abs(Math.cos(M)),.25)),Qi(x,Yl)-.035+Math.pow(Math.sin(M),.55)*w]},!1),r);for(const m of[-1,1]){a(new tt(.035,.07,2.7),i.rubber,m*.955,.3,.02),a(new pn(.1,14,10),s,m*1.03,1.02,-.72).scale.set(.5,.6,1.1);const x=a(new tt(.36,.045,.1),i.emit(15398143,3.5),m*.6,.71,-Ps/2+.17);x.rotation.y=-m*.5,x.castShadow=!1,a(new tt(.3,.012,.012),i.galv,m*.975,.86,.35).castShadow=!1,a(new tt(.3,.012,.012),i.galv,m*.975,.86,-.55).castShadow=!1}a(new tt(1.1,.12,.06),i.rubber,0,.4,-Ps/2+.07);const o=i.emit(16717064,2.5);a(new tt(1.46,.04,.06),o,0,.9,Ps/2-.1).castShadow=!1;const l=document.createElement("canvas");l.width=440,l.height=140;const c=l.getContext("2d"),h=c.createLinearGradient(0,0,440,0);h.addColorStop(0,"#e9f6ee"),h.addColorStop(1,"#38b56b"),c.fillStyle=h,c.fillRect(0,0,440,140),c.strokeStyle="#111",c.lineWidth=6,c.strokeRect(5,5,430,130),c.fillStyle="#111",c.font='bold 86px "Segoe UI","Microsoft YaHei",sans-serif',c.textAlign="center",c.textBaseline="middle",c.fillText(t,220,74);const u=new bi(l);u.colorSpace=Ht,a(new Gt(.44,.14),new at({map:u,roughness:.4}),0,.6,Ps/2-.035).castShadow=!1;const f=new $a([[.2,-.12],[.3,-.125],[.345,-.1],[.36,-.04],[.36,.04],[.345,.1],[.3,.125],[.2,.12]].map(([m,d])=>new fe(m,d)),36).rotateZ(Math.PI/2),p=new at({color:10132898,metalness:1,roughness:.25}),g=[],S=[];for(const m of[-1,1])for(const d of[-1.47,1.42]){const x=new kt;x.position.set(m*.845,.36,d),n.add(x);const M=new kt;x.add(M),a(f,i.rubber,0,0,0,M),a(new ft(.29,.29,.2,32,1,!0).rotateZ(Math.PI/2),p,0,0,0,M).material.side=Ut,a(new ft(.2,.2,.02,24).rotateZ(Math.PI/2),i.steel,m*.02,0,0,M),a(new ft(.06,.07,.05,16).rotateZ(Math.PI/2),p,m*.1,0,0,M);for(let _=0;_<10;_++)a(new tt(.025,.25,.035).translate(0,.16,0).rotateX(_*Math.PI/5),p,m*.095,0,0,M);g.push(M),d<0&&S.push(x)}return{g:n,spin:g,pivots:S,tail:o}}function Mx(i,e,t,n){const s=[14211805,1382687,9049622,2837096,15526628,4016703],r=Bc([...Wa,Wa[0]],0),a=e.map(([c,h,u],f)=>{const p=_x(t,s[f%s.length],`浙A·D${(73154+f*12347)%9e4+1e4}`);i.scene.add(p.g);const g={...p,pos:new B(c,ln(c,h),h),heading:u,vx:0,vz:0,v:0,slip:0,steer:0,auto:!1,circles:[{x:c,z:h,r:.95},{x:c,z:h,r:.95}]};return i.dyn.push(...g.circles),g}),o=(c,h,u,f)=>{if(!$n(h,u))return!1;const p=i.near(h,u);for(const g of p.boxes)if(h>g.min.x-.9&&h<g.max.x+.9&&u>g.min.z-.9&&u<g.max.z+.9&&g.max.y>f+.3&&g.min.y<f+1.4)return!1;for(const g of p.circles)if(Math.hypot(h-g.x,u-g.z)<g.r+.9)return!1;for(const g of p.polys)if(Ef(g.pts,h,u,.9))return!1;for(const g of i.dyn)if(!c.circles.includes(g)&&Math.hypot(h-g.x,u-g.z)<g.r+.9)return!1;return!0},l=c=>{const h=so(r.pts,r.cum,c.pos.x,c.pos.z),[u,f]=ns(r,(h.s+13+Math.abs(c.v)*.7)%r.len);let p=Math.atan2(-(u-c.pos.x),-(f-c.pos.z))-c.heading;p=Math.atan2(Math.sin(p),Math.cos(p));const g=19/(1+Math.abs(p)*2.5);return{steer:Math.max(-1,Math.min(1,p*2.2)),thr:c.v<g?.7:c.v>g+3?-.5:0}};return{list:a,ring:r,nearest:(c,h)=>a.find(u=>Math.hypot(u.pos.x-c.x,u.pos.z-c.z)<h),update(c,h,u){for(const f of a){let p=f===h?u:{thr:0,steer:0,brake:Math.abs(f.v)<6,parked:!0};if(f===h&&f.auto){const z=l(f);p={thr:p.thr||z.thr,steer:p.steer||z.steer,brake:p.brake}}const g=(z,P,Y)=>z+(P-z)*(1-Math.exp(-Y*c)),S=f.heading,m=-Math.sin(S),d=-Math.cos(S),x=Math.cos(S),M=-Math.sin(S);let _=f.vx*m+f.vz*d,w=f.vx*x+f.vz*M;p.thr>0?_+=(_<0?16:9.5)*p.thr*c:p.thr<0?_-=(_>.5?17:5)*-p.thr*c:_=g(_,0,.45),p.brake&&(_=g(_,0,p.parked?3:1.1)),w=g(w,0,p.brake&&!p.parked?1.3:Math.abs(w)>5?3.2:9),_=Math.max(-8,Math.min(34,_)),f.steer=g(f.steer,p.steer*.55/(1+Math.abs(_)*(p.brake?.04:.085)),8);const T=S+_*Math.tan(f.steer)/2.9*(p.brake&&!p.parked?1.6:1)*c;f.vx=m*_+x*w,f.vz=d*_+M*w;const v=f.pos.x+f.vx*c,y=f.pos.z+f.vz*c,A=f.pos.y,L=-Math.sin(T),O=-Math.cos(T);Math.abs(_)+Math.abs(w)>.01&&(o(f,v+L*1.5,y+O*1.5,A)&&o(f,v-L*1.5,y-O*1.5,A)&&o(f,v,y,A)?(f.pos.x=v,f.pos.z=y,f.heading=T):(f.vx*=-.25,f.vz*=-.25)),f.v=_,f.slip=Math.abs(w);const G=-Math.sin(f.heading),N=-Math.cos(f.heading),C=ln(f.pos.x+G*1.47,f.pos.z+N*1.47),F=ln(f.pos.x-G*1.42,f.pos.z-N*1.42);f.pos.y=(C+F)/2+.08,f.g.position.copy(f.pos),f.g.rotation.set(Math.atan2(C-F,2.89),f.heading,Math.max(-.07,Math.min(.07,-f.steer*Math.min(1,Math.abs(_)/12)*.1+w*.006)));for(const z of f.spin)z.rotation.x-=(p.brake&&!p.parked?_*.2:_)/.36*c;for(const z of f.pivots)z.rotation.y=f.steer;if(f.tail.emissiveIntensity=p.brake||p.thr<0&&_>.5?9:2.5,f.slip>3.2&&Math.abs(_)>4&&n)for(const z of[-1,1])n(f.pos.x-G*1.4+N*z*.8,f.pos.y+.1,f.pos.z-N*1.4-G*z*.8);f.circles[0].x=f.pos.x+G*1.2,f.circles[0].z=f.pos.z+N*1.2,f.circles[1].x=f.pos.x-G*1.2,f.circles[1].z=f.pos.z-N*1.2}}}}function Sx(i,e,t,n){const{scene:s,M:r}=i,a=new kt;a.position.set(0,-80,0),s.add(a);const o=(N,C=.6,F=0)=>new at({color:N,roughness:C,metalness:F}),l=(N,C,F,z,P,Y,H)=>{const Q=new gt(new tt(N,C,F),z);return Q.position.set(P,Y,H),a.add(Q),Q},c=o(15001320,.5),h=o(14164778,.5),u=o(2052e3,.55),f=o(131844,.05,.8),p=o(12172480,.25,1);l(2.9,.1,20,o(3816770,.7),0,0,0),l(2.9,.1,20,c,0,2.35,0),l(1.6,.03,18,r.emit(15922943,3),0,2.29,0);for(const N of[-10,10])l(2.9,2.4,.1,c,0,1.2,N);const g=[];for(const N of[-1,1]){l(.1,2.4,20,c,N*1.45,1.2,0),l(.02,.07,20,h,N*1.39,2.05,0);for(let F=0;F<4;F++){const z=-7.5+F*5;l(.02,.95,2.6,f,N*1.39,1.5,z),l(.46,.08,2.6,u,N*1.15,.45,z),l(.08,.5,2.6,u,N*1.36,.75,z),l(.03,1.95,1.1,o(13225168,.3,.6),N*1.39,1,z+2.5);const P=new gt(new ft(.018,.018,2.25,10),p);P.position.set(N*.6,1.17,z+1.7),a.add(P)}const C=new gt(new ft(.016,.016,19,8).rotateX(Math.PI/2),p);C.position.set(N*.6,1.95,0),a.add(C);for(let F=0;F<7;F++){const z=l(.015,.05,1.4,r.emit(16767392,6),N*1.375,1.25+F%3*.22,0);z.userData.o=F*2.9,g.push(z)}}const S=document.createElement("canvas");S.width=1024,S.height=160;const m=S.getContext("2d"),d=new bi(S);d.colorSpace=Ht;const x=N=>{m.fillStyle="#050505",m.fillRect(0,0,1024,160),m.fillStyle="#ff7a2a",m.font='bold 76px "Microsoft YaHei","Segoe UI",sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillText(N,512,84),d.needsUpdate=!0};for(const N of[-9.93,9.93]){const C=new gt(new Gt(2,.31),new at({emissiveMap:d,emissive:16777215,emissiveIntensity:2,color:0}));C.position.set(0,2.05,N),C.rotation.y=N>0?Math.PI:0,a.add(C)}for(const N of[-5,5]){const C=new Cr(15922943,9,14,2);C.position.set(0,2.1,N),a.add(C)}const M=Bc(Sf,0),_=i.makeBoat(1.7);i.solids.add(_);const w={s:0,v:0,dir:1},T=[Oc,Fc],v=N=>{const[C,F,z,P]=ns(M,w.s);_.position.set(C,.12+Math.sin(N*.9)*.05,F),_.rotation.set(0,Math.atan2(z,P),Math.sin(N*.7)*.02)};v(0);const y=N=>ns(T[N],T[N].len-1.5);let A=null,L=0;const O=N=>t.find(C=>Math.hypot(N.x-C.x,N.z-C.z)<3.2),G=N=>[0,1].find(C=>{const[F,z]=y(C);return Math.hypot(N.x-F,N.z-z)<5});return{get riding(){return!!A},get safe(){return A?.kind==="metro"},prompt(N){const C=O(N);if(C)return`E — 地铁1号线 Metro Line 1 · ${Xn[C.si].name}`;const F=G(N);return F!==void 0?F===0?"E — ferry to Leifeng Pagoda 雷峰塔":"E — ferry back to Hubin 湖滨":""},key(N){if(A?.kind==="metro"){if(A.phase!=="stop")return n("Doors open at the next station"),!0;const z=t.find(P=>P.si===A.idx);return N.pos.set(z.x,ln(z.x,z.z),z.z),N.vel.set(0,0,0),n(`${Xn[A.idx].name} · ${Xn[A.idx].en}`),A=null,!0}if(A)return n("Stay aboard — the ferry is under way"),!0;const C=O(N.pos);if(C)return A={kind:"metro",idx:C.si,dir:C.si===Xn.length-1?-1:1,phase:"run",t:0},x(`下一站 Next: ${Xn[C.si+A.dir].name}`),n("Metro Line 1 — mouse to look around"),!0;const F=G(N.pos);return F!==void 0?(w.s=F?M.len:0,w.dir=F?-1:1,w.v=0,A={kind:"boat",to:1-F},n(F?"Ferry to Hubin 湖滨":"Ferry to Leifeng Pagoda 雷峰塔 — about two minutes"),!0):!1},update(N,C){if(L+=N,!A)return v(L),!1;if(A.kind==="metro"){A.t+=N;let F=0;if(A.phase==="run"){if(F=Math.sin(Math.PI*Math.min(1,A.t/10)),A.t>=10){A.idx+=A.dir,A.phase="stop",A.t=0;const z=Xn[A.idx];x(`${z.name}  ${z.en}`),n(`到站 ${z.name} · ${z.en} — press E to get off`),(A.idx===0||A.idx===Xn.length-1)&&(A.dir*=-1)}}else A.t>6&&(A.phase="run",A.t=0,x(`下一站 Next: ${Xn[A.idx+A.dir].name}`));for(const z of g)z.userData.o=(z.userData.o+F*70*N)%20,z.position.z=z.userData.o-10,z.visible=F>.02;e.position.set(.35+Math.sin(L*13)*.004*F,-80+1.32+Math.sin(L*17)*.006*F,1.2),e.rotation.set(C.pitch,C.yaw,0)}else{const F=w.dir>0?M.len-w.s:w.s,z=Math.min(27,Math.max(3,F*.22));if(w.v+=Math.sign(z-w.v)*Math.min(Math.abs(z-w.v),5*N),w.s+=w.dir*w.v*N,v(L),C.pos.set(_.position.x,ye,_.position.z),C.vel.set(0,0,0),e.position.set(_.position.x,_.position.y+2.5,_.position.z),e.rotation.set(C.pitch,C.yaw,_.rotation.z),F<1.5){const[P,Y]=y(A.to);C.pos.set(P,ye,Y),w.s=w.dir>0?M.len:0,n(A.to?"雷峰塔码头 Leifeng Pagoda pier — the path leads up to the pagoda":"湖滨码头 Hubin pier"),A=null}}return e.fov+=(70-e.fov)*Math.min(1,N*6),e.updateProjectionMatrix(),e.updateMatrixWorld(),!0},boat:w,ferry:_,route:M}}const yx=`
#map{position:fixed;right:18px;top:18px;width:190px;height:190px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 2px 12px rgba(0,0,0,.5);pointer-events:auto;cursor:pointer;background:#27402a}
#map.big{right:50%;top:50%;transform:translate(50%,-50%);width:min(86vmin,760px);height:min(86vmin,760px);border-radius:10px}
#touch{position:fixed;inset:0;display:none;touch-action:none;-webkit-user-select:none;user-select:none}
#touch.on{display:block}
#stick{position:absolute;left:5vw;bottom:9vh;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.4)}
#stick i{position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px;border-radius:50%;background:rgba(255,255,255,.55)}
.tb{position:absolute;min-width:76px;height:76px;padding:0 10px;border-radius:38px;border:2px solid rgba(255,255,255,.55);background:rgba(10,14,20,.45);color:#fff;font:600 14px "Segoe UI","Microsoft YaHei",sans-serif;letter-spacing:.06em}
.tb.act{background:rgba(255,176,0,.75);color:#111}.tb.hide{display:none}
#bGas{right:5vw;bottom:9vh;width:104px;height:104px;border-radius:52px;font-size:17px}#bBrake{right:calc(5vw + 118px);bottom:7vh}#bDrift{right:5vw;bottom:calc(9vh + 118px)}
#bAuto{right:calc(5vw + 100px);bottom:calc(9vh + 104px)}#bFire{right:5vw;bottom:9vh;width:104px;height:104px;border-radius:52px;font-size:17px}#bJump{right:calc(5vw + 118px);bottom:7vh}
#bUse{right:5vw;bottom:calc(9vh + 208px)}#bSwap{right:calc(5vw + 100px);bottom:calc(9vh + 104px)}#bAim{right:5vw;bottom:calc(9vh + 118px)}
@media (pointer:coarse){#osd{font-size:10px!important}#right,#left{bottom:auto!important;top:230px}#left{top:150px}.big{font-size:22px!important}#map{width:132px;height:132px}}`;function bx({keys:i,onLook:e,onUse:t,onSwap:n}){document.head.appendChild(Object.assign(document.createElement("style"),{textContent:yx}));const s=document.getElementById("hud"),r=Object.assign(document.createElement("canvas"),{id:"map",width:760,height:760});s.appendChild(r);const a=Object.assign(document.createElement("div"),{id:"touch"});document.body.appendChild(a),a.innerHTML='<div id="stick"><i></i></div>'+[["bGas","加速 GAS"],["bBrake","BRAKE"],["bDrift","漂移 DRIFT"],["bAuto","AUTO"],["bFire","FIRE"],["bJump","JUMP"],["bAim","AIM"],["bSwap","GPU"],["bUse","E"]].map(([x,M])=>`<button class="tb" id="${x}">${M}</button>`).join("");const o=x=>document.getElementById(x),l={touch:matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,moveX:0,moveY:0,fire:!1,aim:!1,big:!1,autoTap:!1};l.touch&&a.classList.add("on");const c=o("stick"),h=c.firstChild;let u=null;const f=x=>{const M=c.getBoundingClientRect(),_=(x.clientX-M.left-75)/60,w=(x.clientY-M.top-75)/60,T=Math.max(1,Math.hypot(_,w));l.moveX=_/T,l.moveY=-w/T,h.style.transform=`translate(${l.moveX*44}px,${-l.moveY*44}px)`};c.addEventListener("touchstart",x=>{x.preventDefault(),u=x.changedTouches[0].identifier,f(x.changedTouches[0])},{passive:!1}),c.addEventListener("touchmove",x=>{x.preventDefault();for(const M of x.changedTouches)M.identifier===u&&f(M)},{passive:!1});const p=x=>{for(const M of x.changedTouches)M.identifier===u&&(u=null,l.moveX=l.moveY=0,h.style.transform="")};c.addEventListener("touchend",p),c.addEventListener("touchcancel",p);const g=new Map;a.addEventListener("touchstart",x=>{for(const M of x.changedTouches)M.target===a&&g.set(M.identifier,[M.clientX,M.clientY])},{passive:!0}),a.addEventListener("touchmove",x=>{x.preventDefault();for(const M of x.changedTouches){const _=g.get(M.identifier);_&&(e((M.clientX-_[0])*2.2,(M.clientY-_[1])*2.2),g.set(M.identifier,[M.clientX,M.clientY]))}},{passive:!1});const S=x=>{for(const M of x.changedTouches)g.delete(M.identifier)};a.addEventListener("touchend",S),a.addEventListener("touchcancel",S);const m=(x,M,_)=>{const w=o(x),T=y=>{y.preventDefault(),y.stopPropagation(),w.classList.add("act"),M()},v=y=>{y.preventDefault(),w.classList.remove("act"),_&&_()};w.addEventListener("touchstart",T,{passive:!1}),w.addEventListener("touchend",v),w.addEventListener("touchcancel",v),w.addEventListener("mousedown",T),w.addEventListener("mouseup",v)};m("bGas",()=>i.KeyW=!0,()=>i.KeyW=!1),m("bBrake",()=>i.KeyS=!0,()=>i.KeyS=!1),m("bDrift",()=>i.Space=!0,()=>i.Space=!1),m("bJump",()=>i.Space=!0,()=>i.Space=!1),m("bFire",()=>l.fire=!0,()=>l.fire=!1),m("bAim",()=>l.aim=!l.aim),m("bAuto",()=>l.autoTap=!0),m("bUse",t),m("bSwap",n),r.addEventListener("click",()=>{l.big=!l.big,r.classList.toggle("big",l.big)}),addEventListener("keydown",x=>{x.code==="KeyM"&&r.click()}),l.mode=(x,M,_,w)=>{const T=(v,y)=>o(v).classList.toggle("hide",!y);for(const v of["bGas","bBrake","bDrift","bAuto"])T(v,x);for(const v of["bFire","bJump","bAim","bSwap"])T(v,!x&&!M);o("bAuto").classList.toggle("act",!!_),o("bAuto").textContent=_?"自动 AUTO ✓":"自动 AUTO",o("bAim").classList.toggle("act",l.aim),o("bUse").textContent=x?"下车 EXIT":w?"上 / USE":"E",T("bUse",x||!!w||M),c.style.display=M?"none":""};const d=r.getContext("2d");return l.drawMap=x=>{const _=l.big?4700:950,w=l.big?Fn.lakeCentre[0]:x.x,T=l.big?Fn.lakeCentre[1]+600:x.z,v=760/_,y=N=>760/2+(N-T)*v,A=N=>760/2-(N-w)*v,L=(N,C)=>{d.beginPath(),N.forEach(([F,z],P)=>P?d.lineTo(y(z),A(F)):d.moveTo(y(z),A(F))),C&&d.closePath()};d.fillStyle="#2f4a2c",d.fillRect(0,0,760,760),d.fillStyle="#3d4348",d.fillRect(y(Math.max(T-_,230)),0,760,760),L(En,!0),d.fillStyle="#3f86a8",d.fill(),d.fillStyle="#2f4a2c",L(Dr,!0),d.fill();for(const N of Di)d.beginPath(),d.arc(y(N.z),A(N.x),N.r*v,0,7),d.fill();d.lineCap=d.lineJoin="round";for(const N of Mf)L(N.pts),d.strokeStyle="#cfc7ae",d.lineWidth=Math.max(2,N.half*2*v),d.stroke();for(const[N,C]of Object.values(ks))L(N),d.strokeStyle="#e8e4d8",d.lineWidth=Math.max(1.5,C*v),d.stroke();L([...Wa,Wa[0]]),d.strokeStyle="rgba(255,176,0,.9)",d.lineWidth=l.big?3:2,d.setLineDash([10,8]),d.stroke(),d.setLineDash([]),L(Sf),d.strokeStyle="rgba(255,255,255,.6)",d.lineWidth=1.5,d.setLineDash([4,6]),d.stroke(),d.setLineDash([]),d.fillStyle="#8b3a3a";for(const[,N,C,F,z]of Xl)d.fillRect(y(F),A(C),(z-F)*v,(C-N)*v);const O=l.big?17:22;d.font=`600 ${O}px "Microsoft YaHei","Segoe UI",sans-serif`,d.textAlign="center",d.textBaseline="middle";const G=(N,C,F,z="#fff")=>{d.fillStyle="rgba(0,0,0,.55)",d.fillText(N,y(F)+1,A(C)+1),d.fillStyle=z,d.fillText(N,y(F),A(C))};for(const N of Xn)d.fillStyle="#d8232a",d.beginPath(),d.arc(y(N.z),A(N.x),l.big?7:11,0,7),d.fill(),G("M "+N.name,N.x+(l.big?70:26),N.z,"#ffb3b3");for(const[N,C]of[["雷峰塔",Fn.leifeng],["保俶塔",Fn.baochu],["断桥",[569,-801]],["平湖秋月",Fn.pavilion],["苏堤",[-1400,-2080]],["白堤",[280,-1e3]],["in77",[-90,250]],["码头",[-56,26]],["码头",[-2412,-712]],["孤山",[-230,-1700]],["三潭印月",[-1680,-1340]]])G(N,C[0],C[1],"#ffe9b0");l.big&&(G("钱江新城 →",-1300,T+_/2-260,"#ffe9b0"),d.font="12px sans-serif",d.fillStyle="rgba(255,255,255,.7)",d.textAlign="left",d.fillText("map data © OpenStreetMap contributors",10,748),d.fillText("N ↑",12,18));for(const N of x.cars)d.fillStyle="#6fd3ff",d.fillRect(y(N.pos.z)-5,A(N.pos.x)-5,10,10);x.ferry&&(d.fillStyle="#fff",d.beginPath(),d.arc(y(x.ferry.z),A(x.ferry.x),6,0,7),d.fill()),d.save(),d.translate(y(x.z),A(x.x)),d.rotate(-x.yaw),d.fillStyle="#ffb000",d.strokeStyle="#111",d.lineWidth=2,d.beginPath(),d.moveTo(0,-16),d.lineTo(10,11),d.lineTo(0,5),d.lineTo(-10,11),d.closePath(),d.fill(),d.stroke(),d.restore()},l}let St,Cs,La,Da,pr,Ls;function Ex(){if(St){St.resume();return}St=new AudioContext;const i=St.createDynamicsCompressor();i.connect(St.destination),Cs=St.createGain(),Cs.gain.value=.55,Cs.connect(i),La=St.createConvolver();const e=St.sampleRate*1.6,t=St.createBuffer(2,e,St.sampleRate);for(let c=0;c<2;c++){const h=t.getChannelData(c);for(let u=0;u<e;u++)h[u]=(Math.random()*2-1)*Math.pow(1-u/e,5)}La.buffer=t;const n=St.createGain();n.gain.value=.18,La.connect(n),n.connect(i),Da=St.createBuffer(1,St.sampleRate*2,St.sampleRate);const s=Da.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=St.createBufferSource();r.buffer=Da,r.loop=!0;const a=St.createBiquadFilter();a.type="lowpass",a.frequency.value=500;const o=St.createGain();o.gain.value=.05,r.connect(a),a.connect(o),o.connect(Cs),r.start(),pr=St.createOscillator(),pr.type="sawtooth";const l=St.createBiquadFilter();l.type="bandpass",l.frequency.value=900,l.Q.value=2,Ls=St.createGain(),Ls.gain.value=0,pr.connect(l),l.connect(Ls),Ls.connect(Cs),pr.start()}function Af(i,e,t){const n=St.createGain(),s=St.currentTime;n.gain.setValueAtTime(e,s),n.gain.exponentialRampToValueAtTime(8e-4,s+t),i.connect(n),n.connect(Cs),n.connect(La)}function Wn(i,e,t,n="lowpass"){if(!St)return;const s=St.createBufferSource();s.buffer=Da,s.loop=!0;const r=St.createBiquadFilter();r.type=n,r.frequency.value=e,s.connect(r),Af(r,t,i),s.start(0,Math.random()),s.stop(St.currentTime+i)}function xn(i,e,t,n,s="sine"){if(!St)return;const r=St.createOscillator(),a=St.currentTime;r.type=s,r.frequency.setValueAtTime(i,a),r.frequency.exponentialRampToValueAtTime(e,a+t),Af(r,n,t),r.start(),r.stop(a+t)}const wx=(i,e)=>{Ls&&(Ls.gain.value=i,pr.frequency.value=e)},Tn={shot:[()=>{Wn(.1,3e3,.6),xn(520,120,.09,.7,"square")},()=>{Wn(.07,4200,.45),xn(900,260,.06,.5,"sawtooth"),xn(140,60,.08,.5)},()=>{xn(2400,90,.5,.8,"sawtooth"),Wn(.7,900,.9),xn(70,30,.6,1)}],hit(){xn(2100,1100,.05,.2,"square")},impact(){Wn(.05,2500,.12,"bandpass")},splash(){Wn(.25,1400,.18,"bandpass")},droneShot(){xn(1e3,200,.2,.12,"sawtooth")},boom(){Wn(1,500,.9),xn(95,30,.5,.8)},hurt(){xn(220,70,.22,.4,"sawtooth"),Wn(.1,900,.4)},click(){Wn(.03,4500,.25,"highpass")},step(){Wn(.06,320,.1)},pickup(){xn(660,660,.08,.3,"triangle"),setTimeout(()=>xn(990,990,.14,.3,"triangle"),80)},throttle(){xn(300,80,.5,.5,"square")},skid(){Wn(.12,2600,.07,"bandpass")},chime(){xn(880,880,.25,.25,"triangle"),setTimeout(()=>xn(660,660,.4,.25,"triangle"),260)}},sn=i=>document.getElementById(i),mn=(i,e)=>i+Math.random()*(e-i),Oi=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),gn=new Nv({antialias:!1,powerPreference:"high-performance"});gn.setPixelRatio(Math.min(devicePixelRatio,2));gn.setSize(innerWidth,innerHeight);gn.shadowMap.enabled=!0;gn.shadowMap.type=gr;gn.toneMapping=Ja;gn.toneMappingExposure=.46;document.body.prepend(gn.domElement);const Gn=new Hu,Et=new wn(72,innerWidth/innerHeight,.08,16e3);Et.rotation.order="YXZ";Gn.add(Et);const Ii=new kt;Gn.add(Ii);let jt,Kl,Rt,Rf,bt,is,ei,Nt,pt=null,fi,Os,Cf=!1;const Vs=[-18,96],Zn=[-1900,-3133],ve={pos:new B(Vs[0],ye,Vs[1]),vel:new B,yaw:-.3,pitch:.03,hp:100,onGround:!0,lastHurt:-99,bob:0,vram:16},Un=.38,Pf=1.68,cr=24;function $i(i,e,t){if(!$n(i,t))return!0;const n=Rt.near(i,t);for(const s of n.boxes)if(i>s.min.x-Un&&i<s.max.x+Un&&t>s.min.z-Un&&t<s.max.z+Un&&s.max.y>e+.35&&s.min.y<e+1.75)return!0;for(const s of n.circles)if(Math.hypot(i-s.x,t-s.z)<s.r+Un)return!0;for(const s of n.polys)if(e<s.h&&Ef(s.pts,i,t,Un))return!0;for(const s of Rt.dyn)if(Math.hypot(i-s.x,t-s.z)<s.r+Un)return!0;return!1}function Tx(i,e,t){let n=ln(i,t);for(const s of Rt.near(i,t).boxes)i>s.min.x-Un*.5&&i<s.max.x+Un*.5&&t>s.min.z-Un*.5&&t<s.max.z+Un*.5&&s.max.y<=e+.35&&(n=Math.max(n,s.max.y));return n}const dn={};let ss=!1,zc=!1,Nr=!1,Na=!1,ti=!1,Ir=0,Zl=0;const Jl=()=>ss||zc,Lf=(i,e)=>{const t=.0021*(ti?.55:1);ve.yaw-=i*t,ve.pitch=Math.max(-1.5,Math.min(1.5,ve.pitch-e*t)),Ir+=i,Zl+=e};addEventListener("keydown",i=>{dn[i.code]=!0,!(!Jl()||i.repeat)&&(/^Digit[123]$/.test(i.code)&&bt.select(+i.code[5]-1),i.code==="KeyE"&&jl(),i.code==="KeyF"&&pt&&Nf())});addEventListener("keyup",i=>{dn[i.code]=!1});addEventListener("wheel",i=>{ss&&bt.select((bt.next+(i.deltaY>0?1:2))%3)});addEventListener("mousemove",i=>{ss&&Lf(i.movementX,i.movementY)});addEventListener("mousedown",i=>{ss&&(i.button===0&&(Nr=Na=!0),i.button===2&&(ti=!0))});addEventListener("mouseup",i=>{i.button===0&&(Nr=!1),i.button===2&&(ti=!1)});addEventListener("contextmenu",i=>i.preventDefault());const Hr=sn("overlay"),Df=()=>{Cf&&(Ex(),ve.hp<=0&&Ix(),Nt.touch?(zc=!0,Hr.style.display="none",document.documentElement.requestFullscreen?.().catch(()=>{})):gn.domElement.requestPointerLock())};Hr.addEventListener("click",Df);Hr.addEventListener("keydown",i=>{(i.code==="Enter"||i.code==="Space")&&Df()});document.addEventListener("pointerlockchange",()=>{ss=document.pointerLockElement===gn.domElement,!Nt.touch&&(Hr.style.display=ss?"none":"flex",ss||(Nr=ti=!1,ve.hp>0&&(sn("msg").textContent="Paused — click to resume")))});let Ql=0;const jn=i=>{sn("note").textContent=i,sn("note").style.opacity=1,Ql=3};function jl(){if(ei.riding)return ei.key(ve);if(pt){const e=pt,t=e.heading;if(Math.abs(e.v)>3)return jn("Slow down before getting out");for(const n of[1,-1,2.2,-2.2]){const s=e.pos.x-Math.cos(t)*1.9*n,r=e.pos.z+Math.sin(t)*1.9*n;if(!$i(s,e.pos.y,r)){ve.pos.set(s,ln(s,r),r),ve.vel.set(0,0,0),ve.yaw=t,ve.pitch=0,e.auto=!1,pt=null;return}}return jn("No room to get out here")}const i=is.nearest(ve.pos,3.6);if(i){pt=i,i.auto=Nt.touch,jn(Nt.touch?"Auto-drive on — steer or brake any time to take over":"Driving — WASD, Space drift, F auto-drive, E get out");return}ei.key(ve)}const Nf=()=>{pt.auto=!pt.auto,jn(pt.auto?"Auto-drive ON — follows the lake ring road; your inputs still override":"Auto-drive off")},Js=1600,Ui=new Float32Array(Js*3).fill(-99),rs=new Float32Array(Js*3),es=new Float32Array(Js*3),Ia=new Float32Array(Js);let qo=0,Mr,$l=[],gu=0,Xa=[],vu=0,Ds,Ws,If=[];function Ax(){const i=new wt;i.setAttribute("position",new Hn(Ui,3)),i.setAttribute("color",new Hn(rs,3)),Mr=new Kd(i,new Vu({size:.06,vertexColors:!0,blending:Fs,depthWrite:!1,transparent:!0})),Mr.frustumCulled=!1,Ii.add(Mr);const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,2,32,32,30);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.3,"rgba(10,8,8,.9)"),n.addColorStop(.55,"rgba(30,26,24,.45)"),n.addColorStop(1,"rgba(40,38,36,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const s=new at({map:new bi(e),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8});for(let o=0;o<90;o++){const l=new gt(new Gt(.16,.16),s);l.visible=!1,Ii.add(l),$l.push(l)}const r=new ft(1,1,1,8).rotateX(Math.PI/2),a=()=>new Or({transparent:!0,blending:Fs,depthWrite:!1,fog:!1});for(let o=0;o<10;o++){const l=new gt(r,a());l.visible=!1,l.userData.life=0,Ii.add(l),Xa.push(l)}Ds=new gt(r,a()),Ds.visible=!1,Ds.userData.life=0,Ii.add(Ds),Ws=new Cr(16742960,0,30,2),Gn.add(Ws);for(let o=0;o<4;o++){const l=new Cr(16758896,10,20,2);Gn.add(l),If.push(l)}}function ni(i,e,t,n,s,r,a){for(let o=0;o<t;o++){const l=(qo=(qo+1)%Js)*3;Ui[l]=i.x,Ui[l+1]=i.y,Ui[l+2]=i.z,es[l]=(e.x*.8+mn(-1,1))*n*Math.random(),es[l+1]=(e.y*.8+mn(-.6,1.2))*n*Math.random(),es[l+2]=(e.z*.8+mn(-1,1))*n*Math.random(),rs[l]=s,rs[l+1]=r,rs[l+2]=a,Ia[qo]=mn(.25,.9)}}function xu(i,e,t,n,s,r,a){i.position.copy(e).lerp(t,.5),i.lookAt(t),i.scale.set(n,n,e.distanceTo(t)),i.material.color.set(s).multiplyScalar(r),i.visible=!0,i.userData.life=i.userData.max=a,i.userData.r=n}const Rx=new B(0,1,0),Cx=new B;let ec=0;const Px=(i,e,t)=>{ni(Cx.set(i,e,t),Rx,2,1.6,.42,.42,.42),ec<=0&&(Tn.skid(),ec=.09)},hs=[],tc=new kt,qa=[];function Lx(){Gn.add(tc);const i=new at({color:2236962,transparent:!0,opacity:.22,roughness:.5,depthWrite:!1});for(let n=0;n<12;n++){const s=new kt,r={g:s,alive:!1,hp:0,vel:new B,phase:mn(0,6),cool:2,props:[],side:n%2?1:-1},a=(o,l,c=0,h=0,u=0)=>{const f=new gt(o,l);return f.position.set(c,h,u),f.castShadow=!0,f.userData.drone=r,s.add(f),f};a(new Hi(.3,.11,.42,4,.05),jt.white),a(new Hi(.2,.05,.26,3,.02),jt.shroud,0,.07,-.02);for(const o of[-1,1])for(const l of[-1,1])a(new tt(.34,.03,.045),jt.white,o*.24,.02,l*.22).rotation.y=-o*l*.75,a(new ft(.03,.035,.07,14),jt.shroud,o*.38,.05,l*.34),r.props.push(a(new tt(.38,.004,.028),jt.shroud,o*.38,.095,l*.34)),a(new ft(.19,.19,.003,24),i,o*.38,.097,l*.34).castShadow=!1,a(new ft(.008,.008,.16,6),jt.shroud,o*.14,-.12,l*.14),a(new pn(.012,8,6),jt.emit(l>0?16719888:2162496,8),o*.38,0,l*.34).castShadow=!1;a(new pn(.07,20,14),jt.shroud,0,-.08,.17),a(new ft(.035,.035,.03,16),jt.glass,0,-.08,.235).rotation.x=Math.PI/2,r.eye=jt.emit(16720904,3),a(new pn(.018,10,8),r.eye,0,-.03,.215).castShadow=!1,s.scale.setScalar(1.5),s.visible=!1,tc.add(s),hs.push(r)}const e=new pn(.07,12,8),t=new Or({color:new Ye(9,2.2,.5),fog:!1});for(let n=0;n<40;n++){const s=new gt(e,t);s.visible=!1,Ii.add(s),qa.push({m:s,vel:new B,life:0})}}let Mi=0,Ua=6,ao=0;function Uf(){Mi++,jn(`Wave ${Mi} — drones inbound`);const i=Math.min(2+Mi,hs.length);for(let e=0;e<i;e++){const t=hs[e],n=mn(0,6.3),s=mn(80,130);t.g.position.set(ve.pos.x+Math.cos(n)*s,mn(22,34),ve.pos.z+Math.sin(n)*s),t.vel.set(0,0,0),t.hp=55+Mi*6,t.alive=!0,t.cool=mn(2.5,4.5),t.g.visible=!0}}const oo=[];function Dx(){for(const[i,e]of[[-100,138],[40,46],[300,-984],[-10,-1228],[-1100,-2152],[-2142,-1868],[-2600,-695],[-8,244],[79,339.5],[600,-745],[Zn[0]-70,Zn[1]+61],[Zn[0]+95,Zn[1]+61],[-1283,-120],[-1904,-2940]]){const t=px(jt);t.group.position.set(i,ln(i,e)+1.15,e),t.group.scale.setScalar(.62),Gn.add(t.group),oo.push({...t,x:i,z:e,respawn:0})}}const Ni=new zp,di=new B,Oa=new B,rn=new B,Ur=new B;let Zi=!1;function Nx(i,e,t,n){if(!i.alive)return;i.hp-=e,i.vel.addScaledVector(di,2),ni(t,n,14,5,1.6,.9,.3),Tn.hit();const s=sn("hit");s.style.transition="none",s.style.opacity=1,requestAnimationFrame(()=>{s.style.transition="opacity .25s",s.style.opacity=0}),i.hp<=0&&(i.alive=!1,i.g.visible=!1,ao++,ni(i.g.position,Ur.set(0,.4,0),130,9,2.2,1,.3),ni(i.g.position,Ur,50,3,.25,.25,.25),Ws.position.copy(i.g.position),Ws.intensity=500,Tn.boom())}function Of(i){const e=i.def,t=new Ye(e.hex),n=e.dmg*(Zi?1.6:1);ve.vram-=e.vram,i.temp+=e.heat,i.cool=e.rate,bt.kick(),Tn.shot[bt.cur](),ve.pitch+=e.kick*.008+Math.random()*.003,ve.yaw+=mn(-.004,.004)*e.kick;const s=Math.hypot(ve.vel.x,ve.vel.z)>1,r=e.spread*(ti?.3:s?2:1);di.set(mn(-r,r),mn(-r,r),-1).normalize().transformDirection(Et.matrixWorld),Ni.set(Et.getWorldPosition(Oa),di),Ni.far=600;const a=Ni.intersectObject(Rt.solids,!0)[0],o=di.y<0?-Oa.y/di.y:1/0,l=Math.min(a?a.distance:600,o),c=Oa.clone().addScaledVector(di,l);Ni.far=l;const h=new Set;let u=null;for(const g of Ni.intersectObject(tc,!0)){const S=g.object.userData.drone;if(!(!S||h.has(S)||!S.alive)&&(h.add(S),Nx(S,n,g.point,rn.copy(di).negate()),!e.ray)){u=g.point;break}}if(i.muzzle.getWorldPosition(rn),e.ray?xu(Ds,rn,c,.035,t,9,.28):xu(Xa[vu=(vu+1)%Xa.length],rn,u||c,.006,t,7,.05),u)return;if(o<(a?a.distance:600)){ni(c,rn.set(0,1,0),e.ray?60:16,4,.5,.6,.7),Tn.splash();return}if(!a)return;const f=a.face?rn.copy(a.face.normal).transformDirection(a.object.matrixWorld):rn.copy(di).negate();ni(c,f,e.ray?50:10,e.ray?7:3.5,t.r*2,t.g*2,t.b*2),ni(c,f,6,1.2,.15,.15,.15),Tn.impact();const p=$l[gu=(gu+1)%$l.length];p.position.copy(c).addScaledVector(f,.02),p.lookAt(Ur.copy(c).add(f)),p.rotateZ(mn(0,6.3)),p.scale.setScalar(mn(.7,1.2)*(e.ray?3:1)),p.visible=!0}function Ff(i){ve.hp<=0||ei.safe||(ve.hp-=i*(pt?.5:1),ve.lastHurt=mr,Os.uniforms.hurt.value=1,Tn.hurt(),ve.hp<=0&&(ve.hp=0,sn("msg").textContent=`Shut down — ${ao} drones destroyed, wave ${Mi}. ${Nt.touch?"Tap":"Click"} to reboot`,zc=!1,Hr.style.display="flex",document.exitPointerLock?.()))}function Ix(){ve.pos.set(Vs[0],ye,Vs[1]),ve.vel.set(0,0,0),ve.yaw=-.3,ve.pitch=.03,ve.hp=100,ve.vram=16,pt=null,Mi=0,Ua=6,ao=0;for(const i of bt.cards)i.temp=38,i.throttled=!1;for(const i of hs)i.alive=!1,i.g.visible=!1;for(const i of qa)i.life=0,i.m.visible=!1}let mr=0,Yo=0,nc=60,Ya=0,Ka=0;function Ux(i){const e=ve.pos,t=(dn.KeyW?1:0)-(dn.KeyS?1:0)+Nt.moveY,n=(dn.KeyD?1:0)-(dn.KeyA?1:0)+Nt.moveX,s=Math.max(1,Math.hypot(t,n)),r=(dn.ShiftLeft||Nt.moveY>.92)&&t>0&&!ti,a=(ti?2.4:r?7.4:4.5)/s,o=Math.sin(ve.yaw),l=Math.cos(ve.yaw),c=ve.onGround?12:2.5;ve.vel.x=Oi(ve.vel.x,(-o*t+l*n)*a,c,i),ve.vel.z=Oi(ve.vel.z,(-l*t-o*n)*a,c,i),ve.vel.y-=21*i,dn.Space&&ve.onGround&&(ve.vel.y=6.7,ve.onGround=!1);const h=e.x+ve.vel.x*i;$i(h,e.y,e.z)?ve.vel.x=0:e.x=h;const u=e.z+ve.vel.z*i;$i(e.x,e.y,u)?ve.vel.z=0:e.z=u,e.y+=ve.vel.y*i;const f=Tx(e.x,e.y,e.z);e.y<=f||ve.onGround&&ve.vel.y<=0&&e.y-f<.4?(ve.vel.y<-8&&(bt.recoil+=.8),e.y=f,ve.vel.y=0,ve.onGround=!0):ve.onGround=!1;const p=Math.hypot(ve.vel.x,ve.vel.z),g=Math.min(1,p/4);ve.onGround&&p>.5&&(ve.bob+=p*i*1.9,Yo-=p*i,Yo<0&&(Yo=2.3,Tn.step())),Ka=Math.sin(ve.bob*2)*.022*g,Ya=Math.cos(ve.bob)*.014*g,Et.position.set(e.x,e.y+Pf+Ka,e.z),Et.rotation.set(ve.pitch,ve.yaw,Ya*.4),Et.fov=Oi(Et.fov,ti?46:r?78:72,14,i),Et.updateProjectionMatrix(),Et.updateMatrixWorld()}let Ko=0;function Ox(i){const e=pt,t=6.8+Math.abs(e.v)*.07;ve.pos.copy(e.pos),ve.vel.set(e.vx,0,e.vz),ve.onGround=!0,Ya=Ka=0,Ko=Oi(Ko+-Ir*.004,0,Math.abs(Ir)>.5?0:.6,i);const n=e.heading+Ko;Ur.set(e.pos.x+Math.sin(n)*t,e.pos.y+2.5+Math.max(-1.2,Math.min(3,ve.pitch*-3)),e.pos.z+Math.cos(n)*t),Et.position.lerp(Ur,1-Math.exp(-7*i)),Et.lookAt(e.pos.x,e.pos.y+1.2,e.pos.z),Et.fov=Oi(Et.fov,62+Math.abs(e.v)*.55,4,i),Et.updateProjectionMatrix(),Et.updateMatrixWorld()}function _u(i,e){const t=ve.pos;ec-=i,Nt.autoTap&&(Nt.autoTap=!1,pt&&Nf()),Nt.touch&&(Nr=Nt.fire,Nt.fire&&!bt.card.def.auto&&bt.card.cool<=0&&(Na=!0),ti=Nt.aim);const n=(dn.KeyW?1:0)-(dn.KeyS?1:0),s=(dn.KeyA?1:0)-(dn.KeyD?1:0)-(Math.abs(Nt.moveX)>.15?Nt.moveX:0);is.update(i,pt,pt?{thr:n,steer:Math.max(-1,Math.min(1,s)),brake:!!dn.Space}:null);const r=ei.update(i,ve);r||(pt?Ox(i):Ux(i)),bt.root.visible=!pt&&!r;const a=Rf.find(d=>Math.hypot(t.x-d.x,t.z-d.z)<d.r);!!a!==Zi&&(Zi=!!a,Zi&&jn(`Overclock — ${a.name}`)),Zi&&(ve.vram=Math.min(cr,ve.vram+.9*i));for(const d of bt.cards)d.cool-=i,d.temp=Math.max(38,d.temp-(d===bt.card?13:22)*(Zi?1.7:1)*i),d.temp>=95&&!d.throttled?(d.throttled=!0,Tn.throttle(),jn("Thermal throttle")):d.throttled&&d.temp<66&&(d.throttled=!1);const o=bt.card,l=o.def.auto?Nr:Na;Na=!1,l&&!pt&&!r&&bt.swap<=0&&o.cool<=0&&!o.throttled&&(ve.vram>=o.def.vram?Of(o):(Tn.click(),jn("Out of VRAM — find RAM"),o.cool=.4)),bt.update(i,{ads:ti,bobX:Ya,bobY:Ka,mdx:Ir,mdy:Zl,t:e,vy:ve.vel.y}),Ir=Zl=0;const c=(o.temp-38)/57,h=pt?Math.abs(pt.v):0;wx(pt?.012+h*.0015:r?.02:.004+c*.05,pt?110+h*42:r?140:160+c*520),e-ve.lastHurt>5&&ve.hp<100&&(ve.hp=Math.min(100,ve.hp+10*i));for(const d of oo){if(d.respawn>0){d.respawn-=i,d.group.visible=d.respawn<=0;continue}Math.hypot(t.x-d.x,t.z-d.z)<(pt?2.6:1.5)&&ve.vram<cr-.5&&(ve.vram=Math.min(cr,ve.vram+8),d.respawn=25,d.group.visible=!1,Tn.pickup(),jn("+8 GB VRAM"))}let u=0;const f=Oa.set(t.x,t.y+1.4,t.z);for(const d of hs){if(!d.alive)continue;u++;const x=d.g,M=di.copy(f).sub(x.position),_=M.length(),w=Math.atan2(x.position.z-t.z,x.position.x-t.x)+d.side*.45,T=11+4*Math.sin(e*.3+d.phase);rn.set(t.x+Math.cos(w)*T,t.y+4.2+Math.sin(e*.8+d.phase)*1.2,t.z+Math.sin(w)*T),d.vel.addScaledVector(rn.sub(x.position).clampLength(0,30),1.5*i);for(const v of hs)if(v!==d&&v.alive){rn.copy(x.position).sub(v.g.position);const y=rn.length();y<2.6&&d.vel.addScaledVector(rn,(2.6-y)*3*i/(y+.01))}d.vel.multiplyScalar(Math.exp(-1.3*i)),x.position.addScaledVector(d.vel,i),x.position.y=Math.max(ln(x.position.x,x.position.z)+1.6,x.position.y),x.lookAt(f),x.rotateX(-.25),x.rotateZ(-d.vel.dot(rn.set(1,0,0).applyQuaternion(x.quaternion))*.06);for(const v of d.props)v.rotation.y+=70*i;if(d.cool-=i,d.eye.emissiveIntensity=3+Math.max(0,1-d.cool)*40,d.cool<=0&&_<45&&!ei.safe){d.cool=mn(1.8,3.2)*Math.max(.55,1-Mi*.04),Ni.set(x.position,M.normalize()),Ni.far=_;const v=qa.find(y=>y.life<=0);v&&!Ni.intersectObject(Rt.solids,!0).length&&(v.m.position.copy(x.position).addScaledVector(M,.5),v.vel.copy(M).multiplyScalar(20).addScaledVector(ve.vel,.3),v.life=4,v.m.visible=!0,Tn.droneShot())}}u||(Ua-=i,Ua<=0&&(Uf(),Ua=8));for(const d of qa){if(d.life<=0)continue;d.life-=i;const x=d.m;x.position.addScaledVector(d.vel,i);let M=d.life<=0;if(x.position.distanceTo(f)<.6)Ff(7),M=!0;else if(x.position.y<0||$n(x.position.x,x.position.z)&&x.position.y<ln(x.position.x,x.position.z))M=!0,ni(x.position,rn.set(0,1,0),10,3,2,.6,.2);else if(Rt.near(x.position.x,x.position.z).polys.some(_=>x.position.y<_.h+ye&&Ji(_.pts,x.position.x,x.position.z)))M=!0,ni(x.position,rn.copy(d.vel).normalize().negate(),10,3,2,.6,.2);else for(const _ of Rt.near(x.position.x,x.position.z).boxes)if(_.containsPoint(x.position)){M=!0,ni(x.position,rn.copy(d.vel).normalize().negate(),10,3,2,.6,.2);break}M&&(d.life=0,x.visible=!1)}const p=o.temp>80?"hot":"",g=d=>"█".repeat(Math.round(Math.max(0,Math.min(1,d))*12)).padEnd(12,"░"),S=pt||r?"":is.nearest(t,3.6)?"E — drive this car":ei.prompt(t),m=pt?`${Math.abs(pt.v*3.6).toFixed(0)} km/h${pt.slip>3.2?' <span class="hot">DRIFT</span>':""}${pt.auto?' <span class="oc">AUTO</span>':""}`:"—";sn("osd").innerHTML=`<b>GPU </b> ${o.def.name}
<b>TEMP</b> <span class="${p}">${o.temp.toFixed(0).padStart(3)}°C ${g(c)}</span>${o.throttled?' <span class="hot">THROTTLED</span>':""}
<b>VRAM</b> ${ve.vram.toFixed(1).padStart(4)} / ${cr} GB ${g(ve.vram/cr)}
<b>PWR </b> ${Zi?'<span class="oc">OVERCLOCK +60%</span>':"STOCK"}
<b>FPS </b> ${nc.toFixed(0)}
<b>CAR </b> ${m}`,sn("hp").textContent=Math.ceil(ve.hp),sn("hpb").style.width=ve.hp+"%",sn("wname").textContent=o.def.name,sn("wsub").textContent=o.def.sub,sn("slots").innerHTML=bt.cards.map((d,x)=>`<div class="${x===bt.next?"on":""}">${x+1} · ${d.def.name}${d.throttled?" — hot":""}</div>`).join(""),sn("top").textContent=S||(u?`Wave ${Mi} · ${u} drone${u>1?"s":""} · ${ao} destroyed`:`Wave ${Mi+1} inbound`),sn("cross").style.opacity=pt||r?0:1-bt.adsT,Ql>0&&(Ql-=i)<=0&&(sn("note").style.opacity=0),Nt.mode(!!pt,r,pt?.auto,S)}let Mu=0,Su=0;function Fx(i,e){for(let t=0;t<Js;t++){if(Ia[t]<=0)continue;Ia[t]-=i;const n=t*3;es[n+1]-=9.8*i,Ui[n]+=es[n]*i,Ui[n+1]+=es[n+1]*i,Ui[n+2]+=es[n+2]*i;const s=Math.exp(-4*i);rs[n]*=s,rs[n+1]*=s*s,rs[n+2]*=s*s,Ia[t]<=0&&(Ui[n+1]=-99)}Mr.geometry.attributes.position.needsUpdate=Mr.geometry.attributes.color.needsUpdate=!0;for(const t of[...Xa,Ds])if(t.visible){t.userData.life-=i;const n=t.userData.life/t.userData.max;n<=0?t.visible=!1:t.scale.x=t.scale.y=t.userData.r*n}Ws.intensity=Oi(Ws.intensity,0,9,i);for(const t of oo)t.group.rotation.y=e*1.2+t.x,t.group.position.y=ln(t.x,t.z)+1.15+Math.sin(e*2+t.z)*.08,t.rgb.emissive.setHSL((e*.25+t.x*.01)%1,1,.5);for(const t of Rt.tick)t(e);if((Mu-=i)<=0&&Rt.lamps.length){Mu=.3;const t=ve.pos,n=Rt.lamps.map(s=>[Math.hypot(s[0]-t.x,s[1]-t.z),s]).sort((s,r)=>s[0]-r[0]);If.forEach((s,r)=>{const[a,o]=n[r][1];s.position.set(a,ln(a,o)+3.6,o)})}(Su-=i)<=0&&(Su=.12,Nt.drawMap({x:ve.pos.x,z:ve.pos.z,yaw:pt?pt.heading:ve.yaw,cars:is.list,ferry:ei.ferry.position})),Kl.update(e,i,Et.position.y<-10?ve.pos:Et.position),Os.uniforms.time.value=e,Os.uniforms.hurt.value=Oi(Os.uniforms.hurt.value,ve.hp<35?.35:0,3,i)}function Bx(){const i=innerWidth,e=innerHeight;fi=new Bv(gn),fi.addPass(new zv(Gn,Et));const t=new qn(Gn,Et,i,e),n=t.render.bind(t);t.render=(...s)=>{const r=bt.flash.visible;Ii.visible=bt.flash.visible=!1;for(const a of Rt.noAO)a.visible=!1;n(...s);for(const a of Rt.noAO)a.visible=!0;Ii.visible=!0,bt.flash.visible=r},fi.addPass(t),fi.addPass(new Gs(new fe(i,e),.05,.4,4)),fi.addPass(new Xv),fi.addPass(new qv),Os=new vf({uniforms:{tDiffuse:{value:null},time:{value:0},hurt:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float time,hurt;varying vec2 vUv;
      void main(){vec2 c=vUv-.5;float d=dot(c,c);vec2 o=c*d*.008;
        vec3 col=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);
        col*=1.-d*.7; float n=fract(sin(dot(gl_FragCoord.xy+fract(time)*91.7,vec2(12.9898,78.233)))*43758.5453); col+=(n-.5)*.02;
        col=mix(col,vec3(.55,0.,0.),clamp(hurt*d*3.,0.,.8)); gl_FragColor=vec4(col,1.);}`}),fi.addPass(Os)}addEventListener("resize",()=>{Et.aspect=innerWidth/innerHeight,Et.updateProjectionMatrix(),gn.setSize(innerWidth,innerHeight),fi?.setSize(innerWidth,innerHeight)});function zx(){jt=Kv(gn),Kl=tx(Gn,gn),Rt=nx(Gn,jt);const i=fx(Rt);rx(Rt);const e=dx(Rt.shifted(Zn[0],Zn[1]));Rf=e.zones.map(s=>({...s,x:s.x+Zn[0],z:s.z+Zn[1]})),Rt.ribbon(Rt.dense([[-1904,-2956],[-1900,-3010],[-1900,-3072]]),9,Rt.over(jt.asphalt,4),ye+.07),Rt.ribbon(Rt.dense([[-2030,-3078],[-1780,-3078]]),12,Rt.over(jt.asphalt,4),ye+.07);const t=[...e.carSpots.slice(0,3).map(([s,r,a])=>[s+Zn[0],r+Zn[1],a]),[-70,128,2.1],[-60,152,2.1],[-6,262,-1.57],[140,352,3.14],[-640,62,1.2],[640,-690,.4],[-2725,-700,1.4],[-1560,-2712,0],[-2150,-1866,-1.3]];is=Mx(Rt,t,jt,Px),is.update(.016,null,null),Nt=bx({keys:dn,onLook:Lf,onUse:()=>Jl()&&jl(),onSwap:()=>bt.select((bt.next+1)%3)}),ei=Sx(Rt,Et,i.metro,s=>{jn(s),Tn.chime()}),bt=xx(Et,jt),Ax(),Lx(),Dx(),Bx(),console.assert($i(-600,ye,-900)&&!$i(Vs[0],ye,Vs[1])&&$i(-200,ye,420)&&$n(532,-822)&&$n(-1100,-2152)&&$n(-2784,-700),"collision self-check failed"),console.assert(ln(532,-822)>ye+2&&ln(0,300)===ye,"ground self-check failed"),Et.position.set(ve.pos.x,ve.pos.y+Pf,ve.pos.z),Et.rotation.set(ve.pitch,ve.yaw,0),bt.update(.016,{ads:!1,bobX:0,bobY:0,mdx:0,mdy:0,t:0,vy:0}),Nt.mode(!1,!1,!1,""),Cf=!0,sn("msg").textContent=Nt.touch?"Tap to start":"Click to deploy",window.G={scene:Gn,camera:Et,player:ve,renderer:gn,world:Rt,env:Kl,W:bt,drones:hs,rams:oo,cars:is,keys:dn,ui:Nt,transit:ei,use:jl,blocked:$i,POI:Fn,get driving(){return pt},spawnWave:Uf,hurt:Ff,fire:()=>Of(bt.card),step:s=>{mr+=s,_u(s,mr)}};let n=performance.now();gn.setAnimationLoop(s=>{const r=Math.min((s-n)/1e3,.05);n=s,nc=Oi(nc,1/Math.max(r,.001),2,r),Jl()&&ve.hp>0&&(mr+=r,_u(r,mr)),Fx(r,s/1e3),fi.render(r)})}setTimeout(zx,60);
