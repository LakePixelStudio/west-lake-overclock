(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const oc="187",Kf=0,sh=1,Zf=2,wr=1,Jf=2,vr=3,Hi=0,xn=1,Lt=2,gn=0,Er=1,ls=2,rh=3,ah=4,Tu=5,Jn=100,Qf=101,jf=102,$f=103,ed=104,Mr=200,td=201,nd=202,id=203,Au=204,Ru=205,$o=206,sd=207,el=208,rd=209,ad=210,od=211,ld=212,cd=213,hd=214,tl=0,nl=1,il=2,Pr=3,sl=4,rl=5,al=6,ol=7,Cu=0,ud=1,fd=2,xi=0,lc=1,cc=2,hc=3,to=4,uc=5,fc=6,dc=7,Pu=300,Gs=301,Lr=302,fo=303,po=304,$n=1e3,fi=1001,ll=1002,zt=1003,dd=1004,Qr=1005,hn=1006,mo=1007,di=1008,vn=1009,Lu=1010,Du=1011,Dr=1012,pc=1013,ei=1014,zn=1015,Wt=1016,mc=1017,gc=1018,cs=1020,Nu=35902,Iu=35899,Uu=1021,Ou=1022,Rn=1023,Gi=1026,pi=1027,xc=1028,vc=1029,hs=1030,Mc=1031,_c=1033,Ia=33776,Ua=33777,Oa=33778,Fa=33779,cl=35840,hl=35841,ul=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37488,xl=37489,Wa=37490,vl=37491,Ml=37808,_l=37809,Sl=37810,yl=37811,bl=37812,wl=37813,El=37814,Tl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Ll=37820,Dl=37821,Nl=36492,Il=36494,Ul=36495,Ol=36283,Fl=36284,Xa=36285,zl=36286,pd=3200,Fu=3201,qa=0,md=1,Li="",Gt="srgb",Ya="srgb-linear",Ka="linear",_t="srgb",go=7680,gd=519,xd=512,vd=513,Md=514,zu=515,_d=516,Sd=517,Bu=518,ku=519,yd=35044,oh="300 es",Bn=2e3,Nr=2001;function bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){const i=Za("canvas");return i.style.display="block",i}const lh={};function ch(...i){const e="THREE."+i.shift();console.log(e,...i)}function Hu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=Hu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=Hu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function zs(...i){const e=i.join(" ");e in lh||(lh[e]=!0,je(...i))}function Ed(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Td={[tl]:tl,[il]:al,[sl]:sl,[Pr]:rl,[nl]:nl,[al]:il,[ol]:ol,[rl]:Pr};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,Bl=180/Math.PI;function js(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Ad(i,e){return(i%e+e)%e}function vo(i,e,t){return(1-t)*i+t*e}function Rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cd(i,e){if(e.constructor===Float32Array)return i;const t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Pd(i,e){if(e.constructor===Float32Array)return i;const t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Vc=class Vc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;let Ee=Vc;class ms{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],_=r[a+3];if(f!==_||l!==d||c!==p||h!==m){let g=l*d+c*p+h*m+f*_;g<0&&(d=-d,p=-p,m=-m,_=-_,g=-g);let u=1-o;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);u=Math.sin(u*v)/S,o=Math.sin(o*v)/S,l=l*u+d*o,c=c*u+p*o,h=h*u+m*o,f=f*u+_*o}else{l=l*u+d*o,c=c*u+p*o,h=h*u+m*o,f=f*u+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*p-c*d,e[t+1]=l*m+h*d+c*f-o*p,e[t+2]=c*m+h*p+o*d-l*f,e[t+3]=h*m-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f-d*p*m;break;case"YXZ":this._x=d*h*f+c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f+d*p*m;break;case"ZXY":this._x=d*h*f-c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f-d*p*m;break;case"ZYX":this._x=d*h*f-c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f+d*p*m;break;case"YZX":this._x=d*h*f+c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f-d*p*m;break;case"XZY":this._x=d*h*f-c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f+d*p*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wc=class Wc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wc.prototype.isVector3=!0;let G=Wc;const Mo=new G,hh=new ms,Xc=class Xc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],m=n[8],_=s[0],g=s[3],u=s[6],v=s[1],S=s[4],M=s[7],T=s[2],A=s[5],x=s[8];return r[0]=a*_+o*v+l*T,r[3]=a*g+o*S+l*A,r[6]=a*u+o*M+l*x,r[1]=c*_+h*v+f*T,r[4]=c*g+h*S+f*A,r[7]=c*u+h*M+f*x,r[2]=d*_+p*v+m*T,r[5]=d*g+p*S+m*A,r[8]=d*u+p*M+m*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=t*f+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_o.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xc.prototype.isMatrix3=!0;let $e=Xc;const _o=new $e,uh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const i={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ya]:{primaries:e,whitePoint:n,transfer:Ka,toXYZ:uh,fromXYZ:fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:uh,fromXYZ:fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const ht=Ld();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xs;class Dd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Za("canvas")),xs.width=e.width,xs.height=e.height;const s=xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nd=0;class yc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(So(s[a].image)):r.push(So(s[a]))}else r=So(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Id=0;const yo=new G;class jt extends ps{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=fi,s=fi,r=hn,a=di,o=Rn,l=vn,c=jt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=js(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Pu;jt.DEFAULT_ANISOTROPY=1;const qc=class qc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],m=l[9],_=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(p+1)/2,T=(u+1)/2,A=(h+d)/4,x=(f+_)/4,b=(m+g)/4;return S>M&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=x/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qc.prototype.isVector4=!0;let Ct=qc;class Ud extends ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends Ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gu extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Od extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const eo=class eo{constructor(e,t,n,s,r,a,o,l,c,h,f,d,p,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,p,m,_,g)}set(e,t,n,s,r,a,o,l,c,h,f,d,p,m,_,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=m,u[11]=_,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,m=c*h,_=c*f;t[0]=d+_*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,m=c*h,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*f,t[8]=m*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+m,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=a*h,t[9]=p*f-m,t[2]=m*f-p,t[6]=o*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,zd)}lookAt(e,t,n){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),wi.crossVectors(n,_n),wi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),wi.crossVectors(n,_n)),wi.normalize(),jr.crossVectors(_n,wi),s[0]=wi.x,s[4]=jr.x,s[8]=_n.x,s[1]=wi.y,s[5]=jr.y,s[9]=_n.y,s[2]=wi.z,s[6]=jr.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],m=n[2],_=n[6],g=n[10],u=n[14],v=n[3],S=n[7],M=n[11],T=n[15],A=s[0],x=s[4],b=s[8],L=s[12],P=s[1],N=s[5],V=s[9],F=s[13],C=s[2],O=s[6],k=s[10],w=s[14],z=s[3],U=s[7],J=s[11],D=s[15];return r[0]=a*A+o*P+l*C+c*z,r[4]=a*x+o*N+l*O+c*U,r[8]=a*b+o*V+l*k+c*J,r[12]=a*L+o*F+l*w+c*D,r[1]=h*A+f*P+d*C+p*z,r[5]=h*x+f*N+d*O+p*U,r[9]=h*b+f*V+d*k+p*J,r[13]=h*L+f*F+d*w+p*D,r[2]=m*A+_*P+g*C+u*z,r[6]=m*x+_*N+g*O+u*U,r[10]=m*b+_*V+g*k+u*J,r[14]=m*L+_*F+g*w+u*D,r[3]=v*A+S*P+M*C+T*z,r[7]=v*x+S*N+M*O+T*U,r[11]=v*b+S*V+M*k+T*J,r[15]=v*L+S*F+M*w+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],m=e[3],_=e[7],g=e[11],u=e[15],v=l*p-c*d,S=o*p-c*f,M=o*d-l*f,T=a*p-c*h,A=a*d-l*h,x=a*f-o*h;return t*(_*v-g*S+u*M)-n*(m*v-g*T+u*A)+s*(m*S-_*T+u*x)-r*(m*M-_*A+g*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],m=e[12],_=e[13],g=e[14],u=e[15],v=t*o-n*a,S=t*l-s*a,M=t*c-r*a,T=n*l-s*o,A=n*c-r*o,x=s*c-r*l,b=h*_-f*m,L=h*g-d*m,P=h*u-p*m,N=f*g-d*_,V=f*u-p*_,F=d*u-p*g,C=v*F-S*V+M*N+T*P-A*L+x*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return e[0]=(o*F-l*V+c*N)*O,e[1]=(s*V-n*F-r*N)*O,e[2]=(_*x-g*A+u*T)*O,e[3]=(d*A-f*x-p*T)*O,e[4]=(l*P-a*F-c*L)*O,e[5]=(t*F-s*P+r*L)*O,e[6]=(g*M-m*x-u*S)*O,e[7]=(h*x-d*M+p*S)*O,e[8]=(a*V-o*P+c*b)*O,e[9]=(n*P-t*V-r*b)*O,e[10]=(m*A-_*M+u*v)*O,e[11]=(f*M-h*A-p*v)*O,e[12]=(o*L-a*N-l*b)*O,e[13]=(t*N-n*L+s*b)*O,e[14]=(_*S-m*T-g*v)*O,e[15]=(h*T-f*S+d*v)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,m=r*f,_=a*h,g=a*f,u=o*f,v=l*c,S=l*h,M=l*f,T=n.x,A=n.y,x=n.z;return s[0]=(1-(_+u))*T,s[1]=(p+M)*T,s[2]=(m-S)*T,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(d+u))*A,s[6]=(g+v)*A,s[7]=0,s[8]=(m+S)*x,s[9]=(g-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vs.set(s[0],s[1],s[2]).length();const o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);const c=1/a,h=1/o,f=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Bn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Bn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Nr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Bn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Nr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};eo.prototype.isMatrix4=!0;let ut=eo;const vs=new G,Ln=new ut,Fd=new G(0,0,0),zd=new G(1,1,1),wi=new G,jr=new G,_n=new G,dh=new ut,ph=new ms;class Vi{constructor(e=0,t=0,n=0,s=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bd=0;const mh=new G,Ms=new ms,ii=new ut,$r=new G,rr=new G,kd=new G,Hd=new ms,gh=new G(1,0,0),xh=new G(0,1,0),vh=new G(0,0,1),Mh={type:"added"},Gd={type:"removed"},_s={type:"childadded",child:null},bo={type:"childremoved",child:null};class Dt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new G,t=new Vi,n=new ms,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new $e}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(xh,e)}rotateZ(e){return this.rotateOnAxis(vh,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(xh,e)}translateZ(e){return this.translateOnAxis(vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(rr,$r,this.up):ii.lookAt($r,rr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ii),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),_s.child=e,this.dispatchEvent(_s),_s.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new G(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vd={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),u=this._getHandJoint(c,_);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Ad(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Eo(a,r,e+1/3),this.g=Eo(a,r,e),this.b=Eo(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ht.workingToColorSpace(an.copy(this),e),Math.round(at(an.r*255,0,255))*65536+Math.round(at(an.g*255,0,255))*256+Math.round(at(an.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(an.copy(this),t);const n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Gt){ht.workingToColorSpace(an.copy(this),e);const t=an.r,n=an.g,s=an.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(ea);const n=vo(Ei.h,ea.h,t),s=vo(Ei.s,ea.s,t),r=vo(Ei.l,ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Ke;Ke.NAMES=Vu;class wc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new wc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wu extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Dn=new G,si=new G,To=new G,ri=new G,Ss=new G,ys=new G,_h=new G,Ao=new G,Ro=new G,Co=new G,Po=new Ct,Lo=new Ct,Do=new Ct;class On{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),si.subVectors(n,t),To.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(si),l=Dn.dot(To),c=si.dot(si),h=si.dot(To),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Po.setScalar(0),Lo.setScalar(0),Do.setScalar(0),Po.fromBufferAttribute(e,t),Lo.fromBufferAttribute(e,n),Do.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Po,r.x),a.addScaledVector(Lo,r.y),a.addScaledVector(Do,r.z),a}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),si.subVectors(e,t),Dn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ss.subVectors(s,n),ys.subVectors(r,n),Ao.subVectors(e,n);const l=Ss.dot(Ao),c=ys.dot(Ao);if(l<=0&&c<=0)return t.copy(n);Ro.subVectors(e,s);const h=Ss.dot(Ro),f=ys.dot(Ro);if(h>=0&&f<=h)return t.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ss,a);Co.subVectors(e,r);const p=Ss.dot(Co),m=ys.dot(Co);if(m>=0&&p<=m)return t.copy(r);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ys,o);const g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return _h.subVectors(r,s),o=(f-h)/(f-h+(p-m)),t.copy(s).addScaledVector(_h,o);const u=1/(g+_+d);return a=_*u,o=d*u,t.copy(n).addScaledVector(Ss,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),na.subVectors(this.max,ar),bs.subVectors(e.a,ar),ws.subVectors(e.b,ar),Es.subVectors(e.c,ar),Ti.subVectors(ws,bs),Ai.subVectors(Es,ws),Zi.subVectors(bs,Es);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!No(t,bs,ws,Es,na)||(t=[1,0,0,0,1,0,0,0,1],!No(t,bs,ws,Es,na))?!1:(ia.crossVectors(Ti,Ai),t=[ia.x,ia.y,ia.z],No(t,bs,ws,Es,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new G,new G,new G,new G,new G,new G,new G,new G],Nn=new G,ta=new Cn,bs=new G,ws=new G,Es=new G,Ti=new G,Ai=new G,Zi=new G,ar=new G,na=new G,ia=new G,Ji=new G;function No(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);const o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kt=new G,sa=new Ee;let Wd=0;class Hn extends ps{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yd,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=e!==void 0?Sc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cd(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pd(e,this.array)}}class Xu extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qu extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Xd=new Cn,or=new G,Io=new G;class $s{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Io)),this.expandByPoint(or.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qd=0;const Tn=new ut,Uo=new Dt,Ts=new G,Sn=new Cn,lr=new Cn,Jt=new G;class wt extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?qu:Xu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Sn.min,lr.min),Sn.expandByPoint(Jt),Jt.addVectors(Sn.max,lr.max),Sn.expandByPoint(Jt)):(Sn.expandByPoint(lr.min),Sn.expandByPoint(lr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Jt.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),Jt.add(Ts)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new G,l[L]=new G;const h=new G,f=new G,d=new G,p=new Ee,m=new Ee,_=new Ee,g=new G,u=new G;function v(L,P,N){c[L]=c[P]=c[N]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,N),p.fromBufferAttribute(r,L),m.fromBufferAttribute(r,P),_.fromBufferAttribute(r,N),f.sub(h),d.sub(h),m.sub(p),_.sub(p);const V=1/(m.x*_.y-_.x*m.y);isFinite(V)&&(g.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(V),u.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(V),o[L].add(g),o[P].add(g),o[N].add(g),l[L].add(u),l[P].add(u),l[N].add(u))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,P=S.length;L<P;++L){const N=S[L],V=N.start,F=N.count;for(let C=V,O=V+F;C<O;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const M=new G,T=new G,A=new G,x=new G;function b(L){A.fromBufferAttribute(s,L),x.copy(A);const P=o[L];M.copy(P),M.sub(A.multiplyScalar(A.dot(P))).normalize(),T.crossVectors(x,P);const V=T.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,V)}for(let L=0,P=n.count;L<P;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)d[m++]=c[p++]}return new Hn(d,h,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new G,Yd=new G,Kd=new $e;class hi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Oo.subVectors(n,t).cross(Yd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kd.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Zd=0;class gs extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Er,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const oi=new G,Fo=new G,ra=new G,aa=new G;class Ec{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fo.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),aa.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=aa.dot(this.direction),l=-aa.dot(ra),c=aa.lengthSq(),h=Math.abs(1-a*a);let f,d,p,m;if(h>0)if(f=a*l-o,d=a*o-l,m=r*h,f>=0)if(d>=-m)if(d<=m){const _=1/h;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fo).addScaledVector(ra,d),p}intersectSphere(e,t){if(e.radius<0)return null;oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,m=t.x-a.x,_=t.y-a.y,g=t.z-a.z,u=n.x-a.x,v=n.y-a.y,S=n.z-a.z,M=Math.abs(l),T=Math.abs(c),A=Math.abs(h);let x,b,L,P,N,V,F,C,O,k,w,z;if(M>=T&&M>=A?(L=l,V=f,O=m,z=u,l>=0?(x=c,b=h,P=d,N=p,F=_,C=g,k=v,w=S):(x=h,b=c,P=p,N=d,F=g,C=_,k=S,w=v)):T>=A?(L=c,V=d,O=_,z=v,c>=0?(x=h,b=l,P=p,N=f,F=g,C=m,k=S,w=u):(x=l,b=h,P=f,N=p,F=m,C=g,k=u,w=S)):(L=h,V=p,O=g,z=S,h>=0?(x=l,b=c,P=f,N=d,F=m,C=_,k=u,w=v):(x=c,b=l,P=d,N=f,F=_,C=m,k=v,w=u)),L===0)return null;const U=x/L,J=b/L,D=1/L,le=P-U*V,_e=N-J*V,Q=F-U*O,me=C-J*O,ye=k-U*z,Te=w-J*z,H=ye*me-Te*Q,K=le*Te-_e*ye,se=Q*_e-me*le;if(s){if(H<0||K<0||se<0)return null}else if((H<0||K<0||se<0)&&(H>0||K>0||se>0))return null;const B=H+K+se;if(B===0)return null;const j=D*(H*V+K*O+se*z);return(B>0?j<0:j>0)?null:this.at(j/B,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vs extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sh=new ut,Qi=new Ec,oa=new $s,yh=new G,la=new G,ca=new G,ha=new G,zo=new G,ua=new G,bh=new G,fa=new G;class ft extends Dt{constructor(e=new wt,t=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(zo.fromBufferAttribute(f,e),a?ua.addScaledVector(zo,h):ua.addScaledVector(zo.sub(t),h))}t.add(ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(oa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(oa,yh)===null||Qi.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(Sh.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],u=a[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,T=S;M<T;M+=3){const A=o.getX(M),x=o.getX(M+1),b=o.getX(M+2);s=da(this,u,e,n,c,h,f,A,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){const v=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);s=da(this,a,e,n,c,h,f,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],u=a[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,T=S;M<T;M+=3){const A=M,x=M+1,b=M+2;s=da(this,u,e,n,c,h,f,A,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){const v=g,S=g+1,M=g+2;s=da(this,a,e,n,c,h,f,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Jd(i,e,t,n,s,r,a,o){let l;if(e.side===xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Hi,o),l===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:i}}function da(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);const h=Jd(i,e,t,n,la,ca,ha,bh);if(h){const f=new G;On.getBarycoord(bh,la,ca,ha,f),s&&(h.uv=On.getInterpolatedAttribute(s,o,l,c,f,new Ee)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,l,c,f,new Ee)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};On.getNormal(la,ca,ha,d.normal),h.face=d,h.barycoord=f}return h}class Vr extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=zt,h=zt,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new ut,wh=new ut,pa=[],Eh=new Cn,Qd=new ut,cr=new ft,hr=new $s;class on extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Eh.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),hr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),wh.multiplyMatrices(n,As),cr.matrixWorld=wh,cr.raycast(e,pa);for(let a=0,o=pa.length;a<o;a++){const l=pa[a];l.instanceId=r,l.object=this,t.push(l)}pa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new kl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,xc,zn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ji=new $s,jd=new Ee(.5,.5),ma=new G;class Ir{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],m=r[8],_=r[9],g=r[10],u=r[11],v=r[12],S=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,u-m,T-v).normalize(),s[1].setComponents(c+a,p+h,u+m,T+v).normalize(),s[2].setComponents(c+o,p+f,u+_,T+S).normalize(),s[3].setComponents(c-o,p-f,u-_,T-S).normalize(),n)s[4].setComponents(l,d,g,M).normalize(),s[5].setComponents(c-l,p-d,u-g,T-M).normalize();else if(s[4].setComponents(c-l,p-d,u-g,T-M).normalize(),t===Bn)s[5].setComponents(c+l,p+d,u+g,T+M).normalize();else if(t===Nr)s[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=jd.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Th=new ut;class Tc{constructor(){this.coordinateSystem=Bn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Th.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ir),n[s].setFromProjectionMatrix(Th,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ir),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Tc().copy(this)}}class Yu extends gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ah=new ut,Hl=new Ec,ga=new $s,xa=new G;class $d extends Dt{constructor(e=new wt,t=new Yu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Ah.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,_=p;m<_;m++){const g=c.getX(m);xa.fromBufferAttribute(f,g),Rh(xa,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=d,_=p;m<_;m++)xa.fromBufferAttribute(f,m),Rh(xa,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rh(i,e,t,n,s,r,a){const o=Hl.distanceSqToPoint(i);if(o<t){const l=new G;Hl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ku extends jt{constructor(e=[],t=Gs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Si extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends jt{constructor(e,t,n=ei,s,r,a,o=zt,l=zt,c,h=Gi,f=1){if(h!==Gi&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Zu extends us{constructor(e,t=ei,n=Gs,s,r,a=zt,o=zt,l,c=Gi){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ju extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class st extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function m(_,g,u,v,S,M,T,A,x,b,L){const P=M/x,N=T/b,V=M/2,F=T/2,C=A/2,O=x+1,k=b+1;let w=0,z=0;const U=new G;for(let J=0;J<k;J++){const D=J*N-F;for(let le=0;le<O;le++){const _e=le*P-V;U[_]=_e*v,U[g]=D*S,U[u]=C,c.push(U.x,U.y,U.z),U[_]=0,U[g]=0,U[u]=A>0?1:-1,h.push(U.x,U.y,U.z),f.push(le/x),f.push(1-J/b),w+=1}}for(let J=0;J<b;J++)for(let D=0;D<x;D++){const le=d+D+O*J,_e=d+D+O*(J+1),Q=d+(D+1)+O*(J+1),me=d+(D+1)+O*J;l.push(le,_e,me),l.push(_e,Q,me),z+=6}o.addGroup(p,z,L),p+=z,d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class es extends wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,p=2*f+d,m=n*2+r,_=s+1,g=new G,u=new G;for(let v=0;v<=m;v++){let S=0,M=0,T=0,A=0;if(v<=n){const L=v/n,P=L*Math.PI/2;M=-h-e*Math.cos(P),T=e*Math.sin(P),A=-e*Math.cos(P),S=L*f}else if(v<=n+r){const L=(v-n)/r;M=-h+L*t,T=e,A=0,S=f+L*d}else{const L=(v-n-r)/n,P=L*Math.PI/2;M=h+e*Math.sin(P),T=e*Math.cos(P),A=e*Math.sin(P),S=f+d+L*f}const x=Math.max(0,Math.min(1,S/p));let b=0;v===0?b=.5/s:v===m&&(b=-.5/s);for(let L=0;L<=s;L++){const P=L/s,N=P*Math.PI*2,V=Math.sin(N),F=Math.cos(N);u.x=-T*F,u.y=M,u.z=T*V,o.push(u.x,u.y,u.z),g.set(-T*F,A,T*V),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+b,x)}if(v>0){const L=(v-1)*_;for(let P=0;P<s;P++){const N=L+P,V=L+P+1,F=v*_+P,C=v*_+P+1;a.push(N,V,F),a.push(V,C,F)}}}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ac extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new G,h=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gt extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],p=[];let m=0;const _=[],g=n/2;let u=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ze(f,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function v(){const M=new G,T=new G;let A=0;const x=(t-e)/n;for(let b=0;b<=r;b++){const L=[],P=b/r,N=P*(t-e)+e;for(let V=0;V<=s;V++){const F=V/s,C=F*l+o,O=Math.sin(C),k=Math.cos(C);T.x=N*O,T.y=-P*n+g,T.z=N*k,f.push(T.x,T.y,T.z),M.set(O,x,k).normalize(),d.push(M.x,M.y,M.z),p.push(F,1-P),L.push(m++)}_.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){const P=_[L][b],N=_[L+1][b],V=_[L+1][b+1],F=_[L][b+1];(e>0||L!==0)&&(h.push(P,N,F),A+=3),(t>0||L!==r-1)&&(h.push(N,V,F),A+=3)}c.addGroup(u,A,0),u+=A}function S(M){const T=m,A=new Ee,x=new G;let b=0;const L=M===!0?e:t,P=M===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,g*P,0),d.push(0,P,0),p.push(.5,.5),m++;const N=m;for(let V=0;V<=s;V++){const C=V/s*l+o,O=Math.cos(C),k=Math.sin(C);x.x=L*k,x.y=g*P,x.z=L*O,f.push(x.x,x.y,x.z),d.push(0,P,0),A.x=O*.5+.5,A.y=k*.5*P+.5,p.push(A.x,A.y),m++}for(let V=0;V<s;V++){const F=T+V,C=N+V;M===!0?h.push(C,C+1,F):h.push(C+1,C,F),b+=3}c.addGroup(u,b,M===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class no extends gt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new no(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new G,s=[],r=[],a=[],o=new G,l=new ut;for(let p=0;p<=e;p++){const m=p/e;s[p]=this.getTangentAt(m,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(at(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(at(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Rc extends ti{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ep extends Rc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ch=new G,Ph=new G,Bo=new Cc,ko=new Cc,Ho=new Cc;class io extends ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ph.subVectors(s[0],s[1]).add(s[0]),c=Ph);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ch.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Bo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,m,_,g),ko.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,m,_,g),Ho.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),ko.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ho.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Bo.calc(l),ko.calc(l),Ho.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lh(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function tp(i,e){const t=1-i;return t*t*e}function np(i,e){return 2*(1-i)*i*e}function ip(i,e){return i*i*e}function Tr(i,e,t,n){return tp(i,e)+np(i,t)+ip(i,n)}function sp(i,e){const t=1-i;return t*t*t*e}function rp(i,e){const t=1-i;return 3*t*t*i*e}function ap(i,e){return 3*(1-i)*i*i*e}function op(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return sp(i,e)+rp(i,t)+ap(i,n)+op(i,s)}class Qu extends ti{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lp extends ti{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y),Ar(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ju extends ti{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cp extends ti{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends ti{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pc extends ti{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y),Tr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ef extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Lh(o,l.x,c.x,h.x,f.x),Lh(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}}var Ja=Object.freeze({__proto__:null,ArcCurve:ep,CatmullRomCurve3:io,CubicBezierCurve:Qu,CubicBezierCurve3:lp,EllipseCurve:Rc,LineCurve:ju,LineCurve3:cp,QuadraticBezierCurve:$u,QuadraticBezierCurve3:Pc,SplineCurve:ef});class hp extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ja[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ja[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Gl extends hp{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ju(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new $u(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Qu(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ef(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Rc(e,t,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class so extends Gl{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Gl().fromJSON(s))}return this}}function up(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=tf(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=gp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let d=t;d<s;d+=t){const p=i[d],m=i[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ur(r,a,t,o,l,c,0),a}function tf(i,e,t,n,s){let r;if(s===Ap(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Dh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Dh(a/n|0,i[a],i[a+1],r);return r&&Ws(r,r.next)&&(Fr(r),r=r.next),r}function fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ws(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ur(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Sp(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?dp(i,n,s,r):fp(i)){e.push(l.i,i.i,c.i),Fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=pp(fs(i),e),Ur(i,e,t,n,s,r,2)):a===2&&mp(i,e,t,n,s,r):Ur(fs(i),e,t,n,s,r,1);break}}}function fp(i){const e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=f&&m.y<=p&&_r(s,o,r,l,a,c,m.x,m.y)&&Ut(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dp(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Ut(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,f,d),_=Math.max(o,l,c),g=Math.max(h,f,d),u=Vl(p,m,e,t,n),v=Vl(_,g,e,t,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=u&&M&&M.z<=v;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&_r(o,h,l,f,c,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=p&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&_r(o,h,l,f,c,d,M.x,M.y)&&Ut(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=u;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&_r(o,h,l,f,c,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&_r(o,h,l,f,c,d,M.x,M.y)&&Ut(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function pp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ws(n,s)&&sf(n,t,t.next,s)&&Or(n,s)&&Or(s,n)&&(e.push(n.i,t.i,s.i),Fr(t),Fr(t.next),t=i=s),t=t.next}while(t!==i);return fs(t)}function mp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wp(a,o)){let l=rf(a,o);a=fs(a,a.next),l=fs(l,l.next),Ur(a,e,t,n,s,r,0),Ur(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gp(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=tf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bp(c))}s.sort(xp);for(let r=0;r<s.length;r++)t=vp(s[r],t);return t}function xp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function vp(i,e){const t=Mp(i,e);if(!t)return e;const n=rf(t,i);return fs(n,n.next),fs(t,t.next)}function Mp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Ws(i,t))return t;do{if(Ws(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&nf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);Or(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&_p(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function _p(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function Sp(i,e,t,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yp(s)}function yp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function nf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function _r(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&nf(i,e,t,n,s,r,a,o)}function wp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ep(i,e)&&(Or(i,e)&&Or(e,i)&&Tp(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Ws(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ws(i,e){return i.x===e.x&&i.y===e.y}function sf(i,e,t,n){const s=Ma(Ut(i,e,t)),r=Ma(Ut(i,e,n)),a=Ma(Ut(t,n,i)),o=Ma(Ut(t,n,e));return!!(s!==r&&a!==o||s===0&&va(i,t,e)||r===0&&va(i,n,e)||a===0&&va(t,i,n)||o===0&&va(t,e,n))}function va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ma(i){return i>0?1:i<0?-1:0}function Ep(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function Tp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rf(i,e){const t=Wl(i.i,i.x,i.y),n=Wl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dh(i,e,t,n){const s=Wl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ap(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Rp{static triangulate(e,t,n=2){return up(e,t,n)}}class Qn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Nh(e),Ih(n,e);let a=e.length;t.forEach(Nh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ih(n,t[l]);const o=Rp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Nh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ih(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Lc extends wt{constructor(e=new so([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Cp;let S,M=!1,T,A,x,b;if(u){S=u.getSpacedPoints(h),M=!0,d=!1;const q=u.isCatmullRomCurve3?u.closed:!1;T=u.computeFrenetFrames(h,q),A=new G,x=new G,b=new G}d||(g=0,p=0,m=0,_=0);const L=o.extractPoints(c);let P=L.shape;const N=L.holes;if(!Qn.isClockWise(P)){P=P.reverse();for(let q=0,ee=N.length;q<ee;q++){const ue=N[q];Qn.isClockWise(ue)&&(N[q]=ue.reverse())}}function F(q){const ue=10000000000000001e-36;let Me=q[0];for(let pe=1;pe<=q.length;pe++){const Ue=pe%q.length,De=q[Ue],He=De.x-Me.x,Ye=De.y-Me.y,ke=He*He+Ye*Ye,X=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(Me.x),Math.abs(Me.y)),ot=ue*X*X;if(ke<=ot){q.splice(Ue,1),pe--;continue}Me=De}}F(P),N.forEach(F);const C=N.length,O=P;for(let q=0;q<C;q++){const ee=N[q];P=P.concat(ee)}function k(q,ee,ue){return ee||mt("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(ee,ue)}const w=P.length;function z(q,ee,ue){let Me,pe,Ue;const De=q.x-ee.x,He=q.y-ee.y,Ye=ue.x-q.x,ke=ue.y-q.y,X=De*De+He*He,ot=De*ke-He*Ye;if(Math.abs(ot)>Number.EPSILON){const Je=Math.sqrt(X),et=Math.sqrt(Ye*Ye+ke*ke),I=ee.x-He/Je,be=ee.y+De/Je,he=ue.x-ke/et,xe=ue.y+Ye/et,E=((he-I)*ke-(xe-be)*Ye)/(De*ke-He*Ye);Me=I+De*E-q.x,pe=be+He*E-q.y;const y=Me*Me+pe*pe;if(y<=2)return new Ee(Me,pe);Ue=Math.sqrt(y/2)}else{let Je=!1;De>Number.EPSILON?Ye>Number.EPSILON&&(Je=!0):De<-Number.EPSILON?Ye<-Number.EPSILON&&(Je=!0):Math.sign(He)===Math.sign(ke)&&(Je=!0),Je?(Me=-He,pe=De,Ue=Math.sqrt(X)):(Me=De,pe=He,Ue=Math.sqrt(X/2))}return new Ee(Me/Ue,pe/Ue)}const U=[];for(let q=0,ee=O.length,ue=ee-1,Me=q+1;q<ee;q++,ue++,Me++)ue===ee&&(ue=0),Me===ee&&(Me=0),U[q]=z(O[q],O[ue],O[Me]);const J=[];let D,le=U.concat();for(let q=0,ee=C;q<ee;q++){const ue=N[q];D=[];for(let Me=0,pe=ue.length,Ue=pe-1,De=Me+1;Me<pe;Me++,Ue++,De++)Ue===pe&&(Ue=0),De===pe&&(De=0),D[Me]=z(ue[Me],ue[Ue],ue[De]);J.push(D),le=le.concat(D)}let _e;if(g===0)_e=Qn.triangulateShape(O,N);else{const q=[],ee=[];for(let ue=0;ue<g;ue++){const Me=ue/g,pe=p*Math.cos(Me*Math.PI/2),Ue=m*Math.sin(Me*Math.PI/2)+_;for(let De=0,He=O.length;De<He;De++){const Ye=k(O[De],U[De],Ue);K(Ye.x,Ye.y,-pe),Me===0&&q.push(Ye)}for(let De=0,He=C;De<He;De++){const Ye=N[De];D=J[De];const ke=[];for(let X=0,ot=Ye.length;X<ot;X++){const Je=k(Ye[X],D[X],Ue);K(Je.x,Je.y,-pe),Me===0&&ke.push(Je)}Me===0&&ee.push(ke)}}_e=Qn.triangulateShape(q,ee)}const Q=_e.length,me=m+_;for(let q=0;q<w;q++){const ee=d?k(P[q],le[q],me):P[q];M?(x.copy(T.normals[0]).multiplyScalar(ee.x),A.copy(T.binormals[0]).multiplyScalar(ee.y),b.copy(S[0]).add(x).add(A),K(b.x,b.y,b.z)):K(ee.x,ee.y,0)}for(let q=1;q<=h;q++)for(let ee=0;ee<w;ee++){const ue=d?k(P[ee],le[ee],me):P[ee];M?(x.copy(T.normals[q]).multiplyScalar(ue.x),A.copy(T.binormals[q]).multiplyScalar(ue.y),b.copy(S[q]).add(x).add(A),K(b.x,b.y,b.z)):K(ue.x,ue.y,f/h*q)}for(let q=g-1;q>=0;q--){const ee=q/g,ue=p*Math.cos(ee*Math.PI/2),Me=m*Math.sin(ee*Math.PI/2)+_;for(let pe=0,Ue=O.length;pe<Ue;pe++){const De=k(O[pe],U[pe],Me);K(De.x,De.y,f+ue)}for(let pe=0,Ue=N.length;pe<Ue;pe++){const De=N[pe];D=J[pe];for(let He=0,Ye=De.length;He<Ye;He++){const ke=k(De[He],D[He],Me);M?K(ke.x,ke.y+S[h-1].y,S[h-1].x+ue):K(ke.x,ke.y,f+ue)}}}ye(),Te();function ye(){const q=s.length/3;if(d){let ee=0,ue=w*ee;for(let Me=0;Me<Q;Me++){const pe=_e[Me];se(pe[2]+ue,pe[1]+ue,pe[0]+ue)}ee=h+g*2,ue=w*ee;for(let Me=0;Me<Q;Me++){const pe=_e[Me];se(pe[0]+ue,pe[1]+ue,pe[2]+ue)}}else{for(let ee=0;ee<Q;ee++){const ue=_e[ee];se(ue[2],ue[1],ue[0])}for(let ee=0;ee<Q;ee++){const ue=_e[ee];se(ue[0]+w*h,ue[1]+w*h,ue[2]+w*h)}}n.addGroup(q,s.length/3-q,0)}function Te(){const q=s.length/3;let ee=0;H(O,ee),ee+=O.length;for(let ue=0,Me=N.length;ue<Me;ue++){const pe=N[ue];H(pe,ee),ee+=pe.length}n.addGroup(q,s.length/3-q,1)}function H(q,ee){let ue=q.length;for(;--ue>=0;){const Me=ue;let pe=ue-1;pe<0&&(pe=q.length-1);for(let Ue=0,De=h+g*2;Ue<De;Ue++){const He=w*Ue,Ye=w*(Ue+1),ke=ee+Me+He,X=ee+pe+He,ot=ee+pe+Ye,Je=ee+Me+Ye;B(ke,X,ot,Je)}}}function K(q,ee,ue){l.push(q),l.push(ee),l.push(ue)}function se(q,ee,ue){j(q),j(ee),j(ue);const Me=s.length/3,pe=v.generateTopUV(n,s,Me-3,Me-2,Me-1);re(pe[0]),re(pe[1]),re(pe[2])}function B(q,ee,ue,Me){j(q),j(ee),j(Me),j(ee),j(ue),j(Me);const pe=s.length/3,Ue=v.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);re(Ue[0]),re(Ue[1]),re(Ue[3]),re(Ue[1]),re(Ue[2]),re(Ue[3])}function j(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function re(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Pp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ja[s.type]().fromJSON(s)),new Lc(n,e.options)}}const Cp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ee(r,a),new Ee(o,l),new Ee(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],u=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ee(a,1-l),new Ee(c,1-f),new Ee(d,1-m),new Ee(_,1-u)]:[new Ee(o,1-l),new Ee(h,1-f),new Ee(p,1-m),new Ee(g,1-u)]}};function Pp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wr extends wt{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,f=new G,d=new Ee,p=new G,m=new G,_=new G;let g=0,u=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,p.x=u*1,p.y=-g,p.z=u*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,p.x=u*1,p.y=-g,p.z=u*0,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(m)}for(let v=0;v<=t;v++){const S=n+v*h*s,M=Math.sin(S),T=Math.cos(S);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*M,f.y=e[A].y,f.z=e[A].x*T,a.push(f.x,f.y,f.z),d.x=v/t,d.y=A/(e.length-1),o.push(d.x,d.y);const x=l[3*A+0]*M,b=l[3*A+1],L=l[3*A+0]*T;c.push(x,b,L)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){const M=S+v*e.length,T=M,A=M+e.length,x=M+e.length+1,b=M+1;r.push(T,A,b),r.push(x,b,A)}this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ft extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,p=[],m=[],_=[],g=[];for(let u=0;u<h;u++){const v=u*d-a;for(let S=0;S<c;S++){const M=S*f-r;m.push(M,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const S=v+c*u,M=v+c*(u+1),T=v+1+c*(u+1),A=v+1+c*u;p.push(S,M,A),p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dc extends wt{constructor(e=new so([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(a,2));function c(h){const f=s.length/3,d=h.extractPoints(t);let p=d.shape;const m=d.holes;Qn.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,u=m.length;g<u;g++){const v=m[g];Qn.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=Qn.triangulateShape(p,m);for(let g=0,u=m.length;g<u;g++){const v=m[g];p=p.concat(v)}for(let g=0,u=p.length;g<u;g++){const v=p[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,u=_.length;g<u;g++){const v=_[g],S=v[0]+f,M=v[1]+f,T=v[2]+f;n.push(S,M,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Lp(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Dc(n,e.curveSegments)}}function Lp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ln extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new G,d=new G,p=[],m=[],_=[],g=[];for(let u=0;u<=n;u++){const v=[],S=u/n,M=a+S*o,T=e*Math.cos(M),A=Math.sqrt(e*e-T*T);let x=0;u===0&&a===0?x=.5/t:u===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const L=b/t,P=s+L*r;f.x=-A*Math.cos(P),f.y=T,f.z=A*Math.sin(P),m.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(L+x,1-S),v.push(c++)}h.push(v)}for(let u=0;u<n;u++)for(let v=0;v<t;v++){const S=h[u][v+1],M=h[u][v],T=h[u+1][v],A=h[u+1][v+1];(u!==0||a>0)&&p.push(S,M,A),(u!==n-1||l<Math.PI)&&p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nc extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],d=new G,p=new G,m=new G;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let u=0;u<=s;u++){const v=u/s*r;p.x=(e+t*Math.cos(g))*Math.cos(v),p.y=(e+t*Math.cos(g))*Math.sin(v),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(p,d).normalize(),h.push(m.x,m.y,m.z),f.push(u/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const u=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,S=(s+1)*(_-1)+g,M=(s+1)*_+g;l.push(u,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class er extends wt{constructor(e=new Pc(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new G,l=new G,c=new Ee;let h=new G;const f=[],d=[],p=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Ze(f,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function _(){for(let S=0;S<t;S++)g(S);g(r===!1?t:0),v(),u()}function g(S){h=e.getPointAt(S/t,h);const M=a.normals[S],T=a.binormals[S];for(let A=0;A<=s;A++){const x=A/s*Math.PI*2,b=Math.sin(x),L=-Math.cos(x);l.x=L*M.x+b*T.x,l.y=L*M.y+b*T.y,l.z=L*M.z+b*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function u(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){const T=(s+1)*(S-1)+(M-1),A=(s+1)*S+(M-1),x=(s+1)*S+M,b=(s+1)*(S-1)+M;m.push(T,A,b),m.push(A,x,b)}}function v(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new er(new Ja[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Uh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Uh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=Xs(i[t]);for(const s in n)e[s]=n[s]}return e}function Uh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function af(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const cn={clone:Xs,merge:pn};var Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class of extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qe extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Up extends gs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ic extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Op extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uc extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Fp extends Uc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Go=new ut,Fh=new G,zh=new G;class lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Go,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Nr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _a=new G,Sa=new ms,Vn=new G;class cf extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_a,Sa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,Sa,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_a,Sa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,Sa,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new G,Bh=new Ee,kh=new Ee;class wn extends cf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,kh),t.subVectors(kh,Bh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zp extends lf{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class zr extends Uc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Oc extends cf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bp extends lf{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kp extends Uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Bp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Rs=-90,Cs=1;class Xl extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const r=new wn(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const a=new wn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new wn(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new wn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new wn(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Hp extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Gp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Vp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vp(){this._document.hidden===!1&&this.reset()}const Hh=new ut;class Wp{constructor(e,t,n=0,s=1/0){this.ray=new Ec(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,n=[]){return ql(e,this,n,t),n.sort(Gh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,n,t);return n.sort(Gh),n}}function Gh(i,e){return i.distance-e.distance}function ql(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ql(r[a],e,t,!0)}}function Vh(i,e,t,n){const s=Xp(n);switch(t){case Uu:return i*e;case xc:return i*e/s.components*s.byteLength;case vc:return i*e/s.components*s.byteLength;case hs:return i*e*2/s.components*s.byteLength;case Mc:return i*e*2/s.components*s.byteLength;case Ou:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case _c:return i*e*4/s.components*s.byteLength;case Ia:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:case fl:return Math.max(i,16)*Math.max(e,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(e,8)/2;case dl:case pl:case gl:case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ml:case Wa:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Il:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ol:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xa:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xp(i){switch(i){case vn:case Lu:return{byteLength:1,components:1};case Dr:case Du:case Wt:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case ei:case pc:case zn:return{byteLength:4,components:1};case Nu:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function hf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qp(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){const m=f[d],_=f[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){const _=f[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,x0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,z0=`#ifdef USE_ENVMAP
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
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
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
#endif`,W0=`uniform sampler2D dfgLUT;
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
}`,X0=`
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
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
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform float backgroundBlurriness;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Yp,alphahash_pars_fragment:Kp,alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:jp,aomap_fragment:$p,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,defaultnormal_vertex:x0,displacementmap_pars_vertex:v0,displacementmap_vertex:M0,emissivemap_fragment:_0,emissivemap_pars_fragment:S0,colorspace_fragment:y0,colorspace_pars_fragment:b0,envmap_fragment:w0,envmap_common_pars_fragment:E0,envmap_pars_fragment:T0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:z0,envmap_vertex:R0,fog_vertex:C0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:D0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:I0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:O0,lights_pars_begin:F0,lights_toon_fragment:B0,lights_toon_pars_fragment:k0,lights_phong_fragment:H0,lights_phong_pars_fragment:G0,lights_physical_fragment:V0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,lightprobes_pars_fragment:K0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:j0,map_fragment:$0,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:fm,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:Mm,opaque_fragment:_m,packing:Sm,premultiplied_alpha_fragment:ym,project_vertex:bm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Nm,skinning_vertex:Im,skinnormal_vertex:Um,specularmap_fragment:Om,specularmap_pars_fragment:Fm,tonemapping_fragment:zm,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:Km,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Qm,depth_vert:jm,depth_frag:$m,distance_vert:eg,distance_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:fg,meshnormal_frag:dg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:xg,meshtoon_vert:vg,meshtoon_frag:Mg,points_vert:_g,points_frag:Sg,shadow_vert:yg,shadow_frag:bg,sprite_vert:wg,sprite_frag:Eg},Oe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Yn={basic:{uniforms:pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:pn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:pn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:pn([Oe.points,Oe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:pn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:pn([Oe.common,Oe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:pn([Oe.sprite,Oe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:pn([Oe.common,Oe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:pn([Oe.lights,Oe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Yn.physical={uniforms:pn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ya={r:0,b:0,g:0},Tg=new ut,uf=new $e;uf.set(-1,0,0,0,1,0,0,0,1);function Ag(i,e,t,n,s,r){const a=new Ke(0);let o=s===!0?0:1,l,c,h=null,f=0,d=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(v){let S=!1;const M=p(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){const M=p(S);M&&M.isCubeTexture?(c===void 0&&(c=new ft(new st(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Xs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uf),c.material.toneMapped=ht.getTransfer(M.colorSpace)!==_t,(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ft(new Ft(2,2),new Ot({name:"BackgroundMaterial",uniforms:Xs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ht.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(ya,af(i)),t.buffers.color.setClear(ya.r,ya.g,ya.b,S,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:_,dispose:u}}function Rg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(N,V,F,C,O){let k=!1;const w=f(N,C,F,V);r!==w&&(r=w,c(r.object)),k=p(N,C,F,O),k&&m(N,C,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(N,V,F,C),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,V,F,C){const O=C.wireframe===!0;let k=n[V.id];k===void 0&&(k={},n[V.id]=k);const w=N.isInstancedMesh===!0?N.id:0;let z=k[w];z===void 0&&(z={},k[w]=z);let U=z[F.id];U===void 0&&(U={},z[F.id]=U);let J=U[O];return J===void 0&&(J=d(l()),U[O]=J),J}function d(N){const V=[],F=[],C=[];for(let O=0;O<t;O++)V[O]=0,F[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:C,object:N,attributes:{},index:null}}function p(N,V,F,C){const O=r.attributes,k=V.attributes;let w=0;const z=F.getAttributes();for(const U in z)if(z[U].location>=0){const D=O[U];let le=k[U];if(le===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),D===void 0||D.attribute!==le||le&&D.data!==le.data)return!0;w++}return r.attributesNum!==w||r.index!==C}function m(N,V,F,C){const O={},k=V.attributes;let w=0;const z=F.getAttributes();for(const U in z)if(z[U].location>=0){let D=k[U];D===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(D=N.instanceColor));const le={};le.attribute=D,D&&D.data&&(le.data=D.data),O[U]=le,w++}r.attributes=O,r.attributesNum=w,r.index=C}function _(){const N=r.newAttributes;for(let V=0,F=N.length;V<F;V++)N[V]=0}function g(N){u(N,0)}function u(N,V){const F=r.newAttributes,C=r.enabledAttributes,O=r.attributeDivisors;F[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),O[N]!==V&&(i.vertexAttribDivisor(N,V),O[N]=V)}function v(){const N=r.newAttributes,V=r.enabledAttributes;for(let F=0,C=V.length;F<C;F++)V[F]!==N[F]&&(i.disableVertexAttribArray(F),V[F]=0)}function S(N,V,F,C,O,k,w){w===!0?i.vertexAttribIPointer(N,V,F,O,k):i.vertexAttribPointer(N,V,F,C,O,k)}function M(N,V,F,C){_();const O=C.attributes,k=F.getAttributes(),w=V.defaultAttributeValues;for(const z in k){const U=k[z];if(U.location>=0){let J=O[z];if(J===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const D=J.normalized,le=J.itemSize,_e=e.get(J);if(_e===void 0)continue;const Q=_e.buffer,me=_e.type,ye=_e.bytesPerElement,Te=me===i.INT||me===i.UNSIGNED_INT||J.gpuType===pc;if(J.isInterleavedBufferAttribute){const H=J.data,K=H.isInterleavedBuffer===!0?H.stride:H.itemSize,se=J.offset;if(H.isInstancedInterleavedBuffer||H.isInstancedBufferAttribute){for(let B=0;B<U.locationSize;B++)u(U.location+B,H.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let B=0;B<U.locationSize;B++)g(U.location+B);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let B=0;B<U.locationSize;B++)S(U.location+B,le/U.locationSize,me,D,K*ye,(se+le/U.locationSize*B)*ye,Te)}else{if(J.isInstancedBufferAttribute){for(let H=0;H<U.locationSize;H++)u(U.location+H,J.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let H=0;H<U.locationSize;H++)g(U.location+H);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let H=0;H<U.locationSize;H++)S(U.location+H,le/U.locationSize,me,D,le*ye,le/U.locationSize*H*ye,Te)}}else if(w!==void 0){const D=w[z];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(U.location,D);break;case 3:i.vertexAttrib3fv(U.location,D);break;case 4:i.vertexAttrib4fv(U.location,D);break;default:i.vertexAttrib1fv(U.location,D)}}}}v()}function T(){L();for(const N in n){const V=n[N];for(const F in V){const C=V[F];for(const O in C){const k=C[O];for(const w in k)h(k[w].object),delete k[w];delete C[O]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;const V=n[N.id];for(const F in V){const C=V[F];for(const O in C){const k=C[O];for(const w in k)h(k[w].object),delete k[w];delete C[O]}}delete n[N.id]}function x(N){for(const V in n){const F=n[V];for(const C in F){const O=F[C];if(O[N.id]===void 0)continue;const k=O[N.id];for(const w in k)h(k[w].object),delete k[w];delete O[N.id]}}}function b(N){for(const V in n){const F=n[V],C=N.isInstancedMesh===!0?N.id:0,O=F[C];if(O!==void 0){for(const k in O){const w=O[k];for(const z in w)h(w[z].object),delete w[z];delete O[k]}delete F[C],Object.keys(F).length===0&&delete n[V]}}}function L(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Cg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Rn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==vn&&x!==zn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:A}}function Lg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new hi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,u=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const v=r?0:n,S=v*4;let M=u.clippingState||null;l.value=M,M=h(m,d,S,p);for(let T=0;T!==S;++T)M[T]=t[T];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const u=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,M=p;S!==_;++S,M+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}class Fc extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ku(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new st(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:gn});r.uniforms.tEquirect.value=t;const a=new ft(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=hn),new Xl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Wh=256,Dg=3,Ng=20,ff=256,df=16,Ig=3,Ug=new G,Og=new Ke;class Br{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xl(1,10,null),this._boxMesh=new ft(new st(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ug}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Og));const g=new Xl(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Wh,Rd(e))}_fromTexture(e,t){e.mapping===Gs||e.mapping===Lr?this._setSize(e.image.length===0?Wh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Xh(e,!1,!1),n=Math.log2(e)-Dg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Gs||e.mapping===Lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Fg(),this._integrationMaterial=zg());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/df);for(let a=0;a<=n;a++){const o=Br.lodToRoughness(a,n);if(a>n-Ig)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(ff*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Bg());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Xh(i,e,t){return new Fc(i,{minFilter:di,generateMipmaps:e,type:Wt,colorSpace:Ya,depthBuffer:t})}function Xr(i,e,t){return new Ot({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:xn,blending:gn,depthTest:!1,depthWrite:!1})}function Fg(){return Xr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ff}u

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
	`)}function zg(){return Xr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

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
	`)}function Bg(){return Xr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ng}
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
	`)}function qh(){return Xr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yh(){return Xr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===fo||p===po)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new Fc(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,m=p===fo||p===po,_=p===Gs||p===Lr;if(m||_){let g=t.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new Br(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const v=d.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Br(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,p){return p===fo?d.mapping=Gs:p===po&&(d.mapping=Lr),d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Hg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function Gg(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){const _=m.attributes;for(const g in _)e.update(_[g],i.ARRAY_BUFFER)}function f(m){const _=m.index,g=m.attributes.position;let u=0;if(g===void 0)return;const v=_!==null?_.array.length:g.array.length/3-1,S=g.count>=65535?qu:Xu,M=new S(Math.ceil(v/3)*6,1),T=M.array;if(_!==null){const x=_.array;u=_.version;for(let b=0,L=0;b<v;b+=3){const P=x[b+0],N=x[b+1],V=x[b+2];T[L++]=P,T[L++]=N,T[L++]=N,T[L++]=V,T[L++]=V,T[L++]=P}}else{u=g.version;for(let x=0,b=0;x<v;x+=3){const L=x+0,P=x+1,N=x+2;T[b++]=L,T[b++]=P,T[b++]=P,T[b++]=N,T[b++]=N,T[b++]=L}}M.version=u;const A=r.get(m);A&&e.remove(A),r.set(m,M)}function d(m){const _=r.get(m);if(_){const g=m.index;g!==null&&_.version<g.version&&f(m)}else f(m);return r.get(m)}function p(){for(const m in s){const _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function Vg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let _=0;for(let g=0;g<p;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xg(i,e,t){const n=new WeakMap,s=new Ct;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let P=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let T=o.attributes.position.count*M,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const x=new Float32Array(T*A*4*f),b=new Gu(x,T,A,f);b.type=zn,b.needsUpdate=!0;const L=M*4;for(let N=0;N<f;N++){const V=u[N],F=v[N],C=S[N],O=T*A*4*N;for(let k=0;k<V.count;k++){const w=k*L;m===!0&&(s.fromBufferAttribute(V,k),x[O+w+0]=s.x,x[O+w+1]=s.y,x[O+w+2]=s.z,x[O+w+3]=0),_===!0&&(s.fromBufferAttribute(F,k),x[O+w+4]=s.x,x[O+w+5]=s.y,x[O+w+6]=s.z,x[O+w+7]=0),g===!0&&(s.fromBufferAttribute(C,k),x[O+w+8]=s.x,x[O+w+9]=s.y,x[O+w+10]=s.z,x[O+w+11]=C.itemSize===4?s.w:1)}}d={count:f,texture:b,size:new Ee(T,A)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qg(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Yg={[lc]:"LINEAR_TONE_MAPPING",[cc]:"REINHARD_TONE_MAPPING",[hc]:"CINEON_TONE_MAPPING",[to]:"ACES_FILMIC_TONE_MAPPING",[fc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};function Kg(i,e,t,n,s,r){const a=new Xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new wt;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const f=new of({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ft(h,f),p=new Oc(-1,1,1,-1,0,1);let m=null,_=null,g=!1,u,v=null,S=[],M=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let x=0;x<S.length;x++){const b=S[x];b.setSize&&b.setSize(T,A)}},this.setEffects=function(T){S=T,M=S.length>0&&S[0].isRenderPass===!0;const A=a.width,x=a.height;S.length>0&&o===null&&(o=new Xt(A,x,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new Xt(A,x,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&S.some(L=>L.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new us(A,x),r===!0&&(c.format=pi,c.type=cs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let L=0;L<S.length;L++){const P=S[L];P.setSize&&P.setSize(A,x),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,A){if(g||T.toneMapping===xi&&S.length===0)return!1;if(v=A,A!==null){const x=A.width,b=A.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return M===!1&&T.setRenderTarget(a),u=T.toneMapping,T.toneMapping=xi,!0},this.hasRenderPass=function(){return M},this.end=function(T,A){T.toneMapping=u,g=!0;let x=a,b=o;for(let L=0;L<S.length;L++){const P=S[L];P.enabled!==!1&&(P.render(T,b,x,A),P.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,f.defines={},ht.getTransfer(m)===_t&&(f.defines.SRGB_TRANSFER="");const L=Yg[_];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(d,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const pf=new jt,mf=new us(1,1),gf=new Zu(1),xf=new Gu,vf=new Od,Mf=new Ku,Kh=[],Zh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),jh=new Float32Array(4);function tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ro(i,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function $g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),Yt(t,n)}}function e1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),Yt(t,n)}}function t1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Jh.set(n),i.uniformMatrix4fv(this.addr,!1,Jh),Yt(t,n)}}function n1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function s1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function a1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function o1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function l1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function ao(i){return i.version===0&&(i.compareFunction=ku,i.needsUpdate=!0),i}function h1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ao(mf):r=pf,t.setTexture2D(e||r,s)}function u1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vf,s)}function f1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ao(gf):r=Mf,t.setTextureCube(e||r,s)}function d1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xf,s)}function p1(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return Qg;case 35666:return jg;case 35674:return $g;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return s1;case 35669:case 35673:return r1;case 5125:return a1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(i,e){i.uniform1fv(this.addr,e)}function g1(i,e){const t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function x1(i,e){const t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function v1(i,e){const t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function M1(i,e){const t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _1(i,e){const t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function S1(i,e){const t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function y1(i,e){i.uniform1iv(this.addr,e)}function b1(i,e){i.uniform2iv(this.addr,e)}function w1(i,e){i.uniform3iv(this.addr,e)}function E1(i,e){i.uniform4iv(this.addr,e)}function T1(i,e){i.uniform1uiv(this.addr,e)}function A1(i,e){i.uniform2uiv(this.addr,e)}function R1(i,e){i.uniform3uiv(this.addr,e)}function C1(i,e){i.uniform4uiv(this.addr,e)}function P1(i,e,t){const n=this.cache,s=e.length,r=ro(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ao(mf):a=pf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function L1(i,e,t){const n=this.cache,s=e.length,r=ro(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vf,r[a])}function D1(i,e,t){const n=this.cache,s=e.length,r=ro(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ao(gf):a=Mf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function N1(i,e,t){const n=this.cache,s=e.length,r=ro(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xf,r[a])}function I1(i){switch(i){case 5126:return m1;case 35664:return g1;case 35665:return x1;case 35666:return v1;case 35674:return M1;case 35675:return _1;case 35676:return S1;case 5124:case 35670:return y1;case 35667:case 35671:return b1;case 35668:case 35672:return w1;case 35669:case 35673:return E1;case 5125:return T1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return N1}}class U1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p1(t.type)}}class O1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I1(t.type)}}class F1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function $h(i,e){i.seq.push(e),i.map[e.id]=e}function z1(i,e,t){const n=i.name,s=n.length;for(Vo.lastIndex=0;;){const r=Vo.exec(n),a=Vo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$h(t,c===void 0?new U1(o,i,e):new O1(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new F1(o),$h(t,f)),t=f}}}class za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);z1(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function eu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const B1=37297;let k1=0;function H1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const tu=new $e;function G1(i){ht._getMatrix(tu,ht.workingColorSpace,i);const e=`mat3( ${tu.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Ka:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+H1(i.getShaderSource(e),o)}else return r}function V1(i,e){const t=G1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const W1={[lc]:"Linear",[cc]:"Reinhard",[hc]:"Cineon",[to]:"ACESFilmic",[fc]:"AgX",[dc]:"Neutral",[uc]:"Custom"};function X1(i,e){const t=W1[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ba=new G;function q1(){ht.getLuminanceCoefficients(ba);const i=ba.x.toFixed(4),e=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function K1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Sr(i){return i!==""}function iu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function su(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(J1,Q1)}function Q1(i,e){const t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yl(t)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(i){return i.replace(j1,$1)}function $1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function au(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const ex={[wr]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function tx(i){return ex[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nx={[Lr]:"ENVMAP_MODE_REFRACTION"};function ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sx={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sx[i.combine]||"ENVMAP_BLENDING_NONE"}function ax(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ix(t),f=rx(t),d=Y1(t),p=K1(r),m=s.createProgram();let _,g,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sr).join(`
`),g.length>0&&(g+=`
`)):(_=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),g=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?rt.tonemapping_pars_fragment:"",t.toneMapping!==xi?X1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,V1("linearToOutputTexel",t.outputColorSpace),q1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=Yl(a),a=iu(a,t),a=su(a,t),o=Yl(o),o=iu(o,t),o=su(o,t),a=ru(a),o=ru(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=u+_+a,S=u+g+o,M=eu(s,s.VERTEX_SHADER,v),T=eu(s,s.FRAGMENT_SHADER,S);s.attachShader(m,M),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(m)||"",V=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(T)||"",C=N.trim(),O=V.trim(),k=F.trim();let w=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(w=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,T);else{const U=nu(s,M,"vertex"),J=nu(s,T,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+U+`
`+J)}else C!==""?je("WebGLProgram: Program Info Log:",C):(O===""||k==="")&&(z=!1);z&&(P.diagnostics={runnable:w,programLog:C,vertexShader:{log:O,prefix:_},fragmentShader:{log:k,prefix:g}})}s.deleteShader(M),s.deleteShader(T),x=new za(s,m),b=Z1(s,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,B1)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}let ox=0;class lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cx(e),t.set(e,n)),n}}class cx{constructor(e){this.id=ox++,this.code=e,this.usedTimes=0}}function hx(i){return i===hs||i===Wa||i===Xa}function ux(i,e,t,n,s,r){const a=new bc,o=new lx,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,L,P,N,V){const F=P.fog,C=N.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,w=e.get(x.envMap||O,k),z=d[x.type];let U=n.precision;x.precision!==null&&(U=n.getMaxPrecision(x.precision),U!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",U,"instead."));const J=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,D=J!==void 0?J.length:0;let le=0;C.morphAttributes.position!==void 0&&(le=1),C.morphAttributes.normal!==void 0&&(le=2),C.morphAttributes.color!==void 0&&(le=3);let _e,Q,me,ye;if(z){const Fe=Yn[z];_e=Fe.vertexShader,Q=Fe.fragmentShader}else{_e=x.vertexShader,Q=x.fragmentShader;const Fe=o.getVertexShaderStage(x),St=o.getFragmentShaderStage(x);o.update(x,Fe,St),me=Fe.id,ye=St.id}const Te=i.getRenderTarget(),H=i.state.buffers.depth.getReversed(),K=N.isInstancedMesh===!0,se=N.isBatchedMesh===!0,B=!!x.map,j=!!x.matcap,re=!!w,q=re&&w.isPMREMTexture===!0,ee=!!x.aoMap,ue=!!x.lightMap,Me=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,Ue=!!x.displacementMap,De=!!x.emissiveMap,He=!!x.metalnessMap,Ye=!!x.roughnessMap,ke=x.anisotropy>0,X=x.clearcoat>0,ot=x.diffuseRoughness>0,Je=x.dispersion>0,et=x.retroreflectivity>0,I=x.iridescence>0,be=x.sheen>0,he=x.transmission>0,xe=ke&&!!x.anisotropyMap,E=X&&!!x.clearcoatMap,y=X&&!!x.clearcoatNormalMap,Y=X&&!!x.clearcoatRoughnessMap,de=ot&&!!x.diffuseRoughnessMap,ae=I&&!!x.iridescenceMap,we=I&&!!x.iridescenceThicknessMap,oe=be&&!!x.sheenColorMap,ie=be&&!!x.sheenRoughnessMap,te=!!x.specularMap,ve=!!x.specularColorMap,W=!!x.specularIntensityMap,ge=he&&!!x.transmissionMap,fe=he&&!!x.thicknessMap,Pe=!!x.gradientMap,Ce=!!x.alphaMap,Le=x.alphaTest>0,Be=!!x.alphaHash,tt=!!x.extensions;let Re=xi;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Re=i.toneMapping);const Xe=q?w.isCompressedCubeTexture?w.image[0].mipmaps:w.mipmaps:null,nt={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:Q,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:U,batching:se,batchingColor:se&&N._colorsTexture!==null,instancing:K,instancingColor:K&&N.instanceColor!==null,instancingMorph:K&&N.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:B,matcap:j,envMap:re,envMapMode:re&&w.mapping,envMapPMREM:q,envMapMaxLod:q?Xe.length-1:null,envMapSize:q?Xe[0].width:null,aoMap:ee,lightMap:ue,bumpMap:Me,normalMap:pe,displacementMap:Ue,emissiveMap:De,normalMapObjectSpace:pe&&x.normalMapType===md,normalMapTangentSpace:pe&&x.normalMapType===qa,packedNormalMap:pe&&x.normalMapType===qa&&hx(x.normalMap.format),metalnessMap:He,roughnessMap:Ye,anisotropy:ke,anisotropyMap:xe,clearcoat:X,clearcoatMap:E,clearcoatNormalMap:y,clearcoatRoughnessMap:Y,diffuseRoughness:ot,diffuseRoughnessMap:de,dispersion:Je,retroreflection:et,iridescence:I,iridescenceMap:ae,iridescenceThicknessMap:we,sheen:be,sheenColorMap:oe,sheenRoughnessMap:ie,specularMap:te,specularColorMap:ve,specularIntensityMap:W,transmission:he,transmissionMap:ge,thicknessMap:fe,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Er&&x.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Le,alphaHash:Be,combine:x.combine,mapUv:B&&p(x.map.channel),aoMapUv:ee&&p(x.aoMap.channel),lightMapUv:ue&&p(x.lightMap.channel),bumpMapUv:Me&&p(x.bumpMap.channel),normalMapUv:pe&&p(x.normalMap.channel),displacementMapUv:Ue&&p(x.displacementMap.channel),emissiveMapUv:De&&p(x.emissiveMap.channel),metalnessMapUv:He&&p(x.metalnessMap.channel),roughnessMapUv:Ye&&p(x.roughnessMap.channel),anisotropyMapUv:xe&&p(x.anisotropyMap.channel),clearcoatMapUv:E&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(x.sheenRoughnessMap.channel),specularMapUv:te&&p(x.specularMap.channel),specularColorMapUv:ve&&p(x.specularColorMap.channel),specularIntensityMapUv:W&&p(x.specularIntensityMap.channel),transmissionMapUv:ge&&p(x.transmissionMap.channel),thicknessMapUv:fe&&p(x.thicknessMap.channel),alphaMapUv:Ce&&p(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(pe||ke),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(B||Ce),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:H,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:B&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Lt,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(b,x),u(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function u(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const b=d[x.type];let L;if(b){const P=Yn[b];L=cn.clone(P.uniforms)}else L=x.uniforms;return L}function S(x,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new ax(i,b,x,s),c.push(L),h.set(b,L)),L}function M(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function fx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,_,g,u){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:u},i[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=m,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=g,v.group=u),e++,v}function l(d,p,m,_,g,u,v){v.reversedDepth===!0&&(g=-g);const S=o(d,p,m,_,g,u);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):t.push(S)}function c(d,p,m,_,g,u){const v=o(d,p,m,_,g,u);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,p){t.length>1&&t.sort(d||dx),n.length>1&&n.sort(p||ou),s.length>1&&s.sort(p||ou)}function f(){for(let d=e,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function px(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new lu,i.set(n,[a])):s>=r.length?(a=new lu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ke};break;case"SpotLight":t={position:new G,direction:new G,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xx=0;function vx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mx(i){const e=new mx,t=gx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new ut,a=new ut;function o(c){let h=0,f=0,d=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,m=0,_=0,g=0,u=0,v=0,S=0,M=0,T=0,A=0,x=0,b=0,L=0,P=0;c.sort(vx);for(let V=0,F=c.length;V<F;V++){const C=c[V],O=C.color,k=C.intensity,w=C.distance;let z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===hs?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*k,f+=O.g*k,d+=O.b*k;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],k);P++}else if(C.isSunLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,D=t.get(C);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=D,n.sunShadowMap[m]=z;const le=J.getViewportCount();for(let _e=0;_e<le;_e++)n.sunShadowMatrix[_+_e]=J.getMatrix(_e),n.sunShadowCascade[_+_e]=J._cascadeData[_e];_+=le,m++}n.sun[p]=U,p++}else if(C.isDirectionalLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,D=t.get(C);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,n.directionalShadow[g]=D,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=C.shadow.matrix,T++}n.directional[g]=U,g++}else if(C.isSpotLight){const U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(O).multiplyScalar(k),U.distance=w,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[v]=U;const J=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,J.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[v]=J.matrix,C.castShadow){const D=t.get(C);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=z,x++}v++}else if(C.isRectAreaLight){const U=e.get(C);U.color.copy(O).multiplyScalar(k),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[S]=U,S++}else if(C.isPointLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const J=C.shadow,D=t.get(C);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,D.shadowCameraNear=J.camera.near,D.shadowCameraFar=J.camera.far,n.pointShadow[u]=D,n.pointShadowMap[u]=z,n.pointShadowMatrix[u]=C.shadow.matrix,A++}n.point[u]=U,u++}else if(C.isHemisphereLight){const U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(k),U.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[M]=U,M++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const N=n.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==u||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==M||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==A||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=g,n.spot.length=v,n.rectArea.length=S,n.point.length=u,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-L,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,N.sunLength=p,N.directionalLength=g,N.pointLength=u,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=M,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=A,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=P,n.version=xx++)}function l(c,h){let f=0,d=0,p=0,m=0,_=0,g=0;const u=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const M=c[v];if(M.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(u),f++}else if(M.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),d++}else if(M.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),m++}else if(M.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),a.identity(),r.copy(M.matrixWorld),r.premultiply(u),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(u),g++}}}return{setup:o,setupView:l,state:n}}function cu(i){const e=new Mx(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _x(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new cu(i),e.set(s,[o])):r>=a.length?(o=new cu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
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
}`,bx=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],wx=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],hu=new ut,ur=new G,Wo=new G;function Ex(i,e,t){let n=new Ir;const s=new Ee,r=new Ee,a=new Ct,o=new Ic,l=new Op,c={},h=t.maxTextureSize,f={[Hi]:xn,[xn]:Hi,[Lt]:Lt},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Sx,fragmentShader:yx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new wt;m.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let u=this.type;this.render=function(A,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Jf&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);const L=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(gn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=u!==this.type;F&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=A.length;C<O;C++){const k=A[C],w=k.shadow;if(w===void 0){je("WebGLShadowMap:",k,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;s.copy(w.mapSize);const z=w.getFrameExtents();s.multiply(z),r.copy(w.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,w.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,w.mapSize.y=r.y));const U=i.state.buffers.depth.getReversed();if(w.camera._reversedDepth=U,w.map===null||F===!0){if(w.map!==null&&(w.map.depthTexture!==null&&(w.map.depthTexture.dispose(),w.map.depthTexture=null),w.map.dispose()),this.type===vr){if(k.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}w.map=new Xt(s.x,s.y,{format:hs,type:Wt,minFilter:hn,magFilter:hn,generateMipmaps:!1}),w.map.texture.name=k.name+".shadowMap",w.map.depthTexture=new us(s.x,s.y,zn),w.map.depthTexture.name=k.name+".shadowMapDepth",w.map.depthTexture.format=Gi,w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=zt,w.map.depthTexture.magFilter=zt}else k.isPointLight?(w.map=new Fc(s.x),w.map.depthTexture=new Zu(s.x,ei)):(w.map=new Xt(s.x,s.y),w.map.depthTexture=new us(s.x,s.y,ei)),w.map.depthTexture.name=k.name+".shadowMap",w.map.depthTexture.format=Gi,this.type===wr?(w.map.depthTexture.compareFunction=U?Bu:zu,w.map.depthTexture.minFilter=hn,w.map.depthTexture.magFilter=hn):(w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=zt,w.map.depthTexture.magFilter=zt);w.camera.updateProjectionMatrix()}w.map.isWebGLCubeRenderTarget!==!0&&(w.map.width!==s.x||w.map.height!==s.y)&&w.map.setSize(s.x,s.y);const J=w.map.isWebGLCubeRenderTarget?6:w.getViewportCount();k.isPointLight!==!0&&w.updateMatrices(k,b);const D=(w.camera.layers.mask&4294967294)!==0?w.camera.layers:b.layers;for(let le=0;le<J;le++){const _e=w.getCamera(le);if(k.isPointLight){const Q=w.camera,me=w.matrix,ye=k.distance||Q.far;ye!==Q.far&&(Q.far=ye,Q.updateProjectionMatrix()),ur.setFromMatrixPosition(k.matrixWorld),Q.position.copy(ur),Wo.copy(Q.position),Wo.add(bx[le]),Q.up.copy(wx[le]),Q.lookAt(Wo),Q.updateMatrixWorld(),me.makeTranslation(-ur.x,-ur.y,-ur.z),hu.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),w._frustum.setFromProjectionMatrix(hu,Q.coordinateSystem,Q.reversedDepth)}if(w.map.isWebGLCubeRenderTarget)i.setRenderTarget(w.map,le),i.clear();else{le===0&&(i.setRenderTarget(w.map),i.clear());const Q=w.getViewport(le);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),V.viewport(a)}n=w.getFrustum(le),M(x,b,_e,k,D,this.type)}w.isPointLightShadow!==!0&&this.type===vr&&v(w,b),w.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(L,P,N)};function v(A,x){const b=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Xt(s.x,s.y,{format:hs,type:Wt}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(x,null,b,p,_,null)}function S(A,x,b,L){let P=null;const N=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const V=P.uuid,F=x.uuid;let C=c[V];C===void 0&&(C={},c[V]=C);let O=C[F];O===void 0&&(O=P.clone(),C[F]=O,x.addEventListener("dispose",T)),P=O}if(P.visible=x.visible,P.wireframe=x.wireframe,L===vr?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:f[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const V=i.properties.get(P);V.light=b}return P}function M(A,x,b,L,P,N){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===vr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const C=e.update(A),O=A.material;if(Array.isArray(O)){const k=C.groups;for(let w=0,z=k.length;w<z;w++){const U=k[w],J=O[U.materialIndex];if(J&&J.visible){const D=S(A,J,L,N);A.onBeforeShadow(i,A,x,b,C,D,U),i.renderBufferDirect(b,null,C,D,A,U),A.onAfterShadow(i,A,x,b,C,D,U)}}}else if(O.visible){const k=S(A,O,L,N);A.onBeforeShadow(i,A,x,b,C,k,null),i.renderBufferDirect(b,null,C,k,A,null),A.onAfterShadow(i,A,x,b,C,k,null)}}const F=A.children;for(let C=0,O=F.length;C<O;C++)M(F[C],x,b,L,P,N)}function T(A){A.target.removeEventListener("dispose",T);for(const b in c){const L=c[b],P=A.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function Tx(i,e){function t(){let W=!1;const ge=new Ct;let fe=null;const Pe=new Ct(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!W&&(i.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){W=Ce},setClear:function(Ce,Le,Be,tt,Re){Re===!0&&(Ce*=tt,Le*=tt,Be*=tt),ge.set(Ce,Le,Be,tt),Pe.equals(ge)===!1&&(i.clearColor(Ce,Le,Be,tt),Pe.copy(ge))},reset:function(){W=!1,fe=null,Pe.set(-1,0,0,0)}}}function n(){let W=!1,ge=!1,fe=null,Pe=null,Ce=null;return{setReversed:function(Le){if(ge!==Le){const Be=e.get("EXT_clip_control");Le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ge=Le;const tt=Ce;Ce=null,this.setClear(tt)}},getReversed:function(){return ge},setTest:function(Le){Le?H(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(Le){fe!==Le&&!W&&(i.depthMask(Le),fe=Le)},setFunc:function(Le){if(ge&&(Le=Td[Le]),Pe!==Le){switch(Le){case tl:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=Le}},setLocked:function(Le){W=Le},setClear:function(Le){Ce!==Le&&(Ce=Le,ge&&(Le=1-Le),i.clearDepth(Le))},reset:function(){W=!1,fe=null,Pe=null,Ce=null,ge=!1}}}function s(){let W=!1,ge=null,fe=null,Pe=null,Ce=null,Le=null,Be=null,tt=null,Re=null;return{setTest:function(Xe){W||(Xe?H(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(Xe){ge!==Xe&&!W&&(i.stencilMask(Xe),ge=Xe)},setFunc:function(Xe,nt,Fe){(fe!==Xe||Pe!==nt||Ce!==Fe)&&(i.stencilFunc(Xe,nt,Fe),fe=Xe,Pe=nt,Ce=Fe)},setOp:function(Xe,nt,Fe){(Le!==Xe||Be!==nt||tt!==Fe)&&(i.stencilOp(Xe,nt,Fe),Le=Xe,Be=nt,tt=Fe)},setLocked:function(Xe){W=Xe},setClear:function(Xe){Re!==Xe&&(i.clearStencil(Xe),Re=Xe)},reset:function(){W=!1,ge=null,fe=null,Pe=null,Ce=null,Le=null,Be=null,tt=null,Re=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let h={},f={},d={},p=new WeakMap,m=[],_=null,g=!1,u=null,v=null,S=null,M=null,T=null,A=null,x=null,b=new Ke(0,0,0),L=0,P=!1,N=null,V=null,F=null,C=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,z=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),w=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),w=z>=2);let J=null,D={};const le=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Q=new Ct().fromArray(le),me=new Ct().fromArray(_e);function ye(W,ge,fe,Pe){const Ce=new Uint8Array(4),Le=i.createTexture();i.bindTexture(W,Le),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<fe;Be++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(ge+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Le}const Te={};Te[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(i.DEPTH_TEST),a.setFunc(Pr),Me(!1),pe(sh),H(i.CULL_FACE),ee(gn);function H(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function K(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function se(W,ge){return d[W]!==ge?(i.bindFramebuffer(W,ge),d[W]=ge,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function B(W,ge){let fe=m,Pe=!1;if(W){fe=p.get(ge),fe===void 0&&(fe=[],p.set(ge,fe));const Ce=W.textures;if(fe.length!==Ce.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,Be=Ce.length;Le<Be;Le++)fe[Le]=i.COLOR_ATTACHMENT0+Le;fe.length=Ce.length,Pe=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(fe)}function j(W){return _!==W?(i.useProgram(W),_=W,!0):!1}const re={[Jn]:i.FUNC_ADD,[Qf]:i.FUNC_SUBTRACT,[jf]:i.FUNC_REVERSE_SUBTRACT};re[$f]=i.MIN,re[ed]=i.MAX;const q={[Mr]:i.ZERO,[td]:i.ONE,[nd]:i.SRC_COLOR,[Au]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[el]:i.DST_COLOR,[$o]:i.DST_ALPHA,[id]:i.ONE_MINUS_SRC_COLOR,[Ru]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(W,ge,fe,Pe,Ce,Le,Be,tt,Re,Xe){if(W===gn){g===!0&&(K(i.BLEND),g=!1);return}if(g===!1&&(H(i.BLEND),g=!0),W!==Tu){if(W!==u||Xe!==P){if((v!==Jn||T!==Jn)&&(i.blendEquation(i.FUNC_ADD),v=Jn,T=Jn),Xe)switch(W){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFunc(i.ONE,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",W);break}else switch(W){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rh:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",W);break}S=null,M=null,A=null,x=null,b.set(0,0,0),L=0,u=W,P=Xe}return}Ce=Ce||ge,Le=Le||fe,Be=Be||Pe,(ge!==v||Ce!==T)&&(i.blendEquationSeparate(re[ge],re[Ce]),v=ge,T=Ce),(fe!==S||Pe!==M||Le!==A||Be!==x)&&(i.blendFuncSeparate(q[fe],q[Pe],q[Le],q[Be]),S=fe,M=Pe,A=Le,x=Be),(tt.equals(b)===!1||Re!==L)&&(i.blendColor(tt.r,tt.g,tt.b,Re),b.copy(tt),L=Re),u=W,P=!1}function ue(W,ge){W.side===Lt?K(i.CULL_FACE):H(i.CULL_FACE);let fe=W.side===xn;ge&&(fe=!fe),Me(fe),W.blending===Er&&W.transparent===!1?ee(gn):ee(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const Pe=W.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),De(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(W){N!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),N=W)}function pe(W){W!==Kf?(H(i.CULL_FACE),W!==V&&(W===sh?i.cullFace(i.BACK):W===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),V=W}function Ue(W){W!==F&&(w&&i.lineWidth(W),F=W)}function De(W,ge,fe){W?(H(i.POLYGON_OFFSET_FILL),(C!==ge||O!==fe)&&(C=ge,O=fe,a.getReversed()&&(ge=-ge,fe=-fe),i.polygonOffset(ge,fe))):K(i.POLYGON_OFFSET_FILL)}function He(W){W?H(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function Ye(W){W===void 0&&(W=i.TEXTURE0+k-1),J!==W&&(i.activeTexture(W),J=W)}function ke(W,ge,fe){fe===void 0&&(J===null?fe=i.TEXTURE0+k-1:fe=J);let Pe=D[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},D[fe]=Pe),(Pe.type!==W||Pe.texture!==ge)&&(J!==fe&&(i.activeTexture(fe),J=fe),i.bindTexture(W,ge||Te[W]),Pe.type=W,Pe.texture=ge)}function X(){const W=D[J];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function Je(){try{i.compressedTexImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function et(){try{i.texSubImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function I(){try{i.texSubImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function be(){try{i.compressedTexSubImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function xe(){try{i.texStorage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function E(){try{i.texStorage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function y(){try{i.texImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function Y(){try{i.texImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function de(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function ae(W,ge){f[W]!==ge&&(i.pixelStorei(W,ge),f[W]=ge)}function we(W){Q.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Q.copy(W))}function oe(W){me.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),me.copy(W))}function ie(W,ge){let fe=c.get(ge);fe===void 0&&(fe=new WeakMap,c.set(ge,fe));let Pe=fe.get(W);Pe===void 0&&(Pe=i.getUniformBlockIndex(ge,W.name),i.uniformBlockBinding(ge,Pe,Pe),fe.set(W,Pe))}function te(W,ge,fe){const Ce=c.get(ge).get(W);l[Ce]!==fe&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ce,fe),l[Ce]=fe)}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,D={},d={},l={},p=new WeakMap,m=[],_=null,g=!1,u=null,v=null,S=null,M=null,T=null,A=null,x=null,b=new Ke(0,0,0),L=0,P=!1,N=null,V=null,F=null,C=null,O=null,Q.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:K,bindFramebuffer:se,drawBuffers:B,useProgram:j,setBlending:ee,setMaterial:ue,setFlipSided:Me,setCullFace:pe,setLineWidth:Ue,setPolygonOffset:De,setScissorTest:He,activeTexture:Ye,bindTexture:ke,unbindTexture:X,compressedTexImage2D:ot,compressedTexImage3D:Je,texImage2D:y,texImage3D:Y,pixelStorei:ae,getParameter:de,updateUBOMapping:ie,uniformBlockBinding:te,texStorage2D:xe,texStorage3D:E,texSubImage2D:et,texSubImage3D:I,compressedTexSubImage2D:be,compressedTexSubImage3D:he,scissor:we,viewport:oe,reset:ve}}function Ax(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap,f=new Set;let d;const p=new WeakMap,m=new Set,_=new FinalizationRegistry(E=>m.delete(E));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(E,y){return g?new OffscreenCanvas(E,y):Za("canvas")}function v(E,y,Y){let de=1;const ae=xe(E);if((ae.width>Y||ae.height>Y)&&(de=Y/Math.max(ae.width,ae.height)),de<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const we=Math.floor(de*ae.width),oe=Math.floor(de*ae.height);d===void 0&&(d=u(we,oe));const ie=y?u(we,oe):d;return ie.width=we,ie.height=oe,ie.getContext("2d").drawImage(E,0,0,we,oe),je("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+we+"x"+oe+")."),ie}else return"data"in E&&je("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),E;return E}function S(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,y,Y,de,ae,we=!1){if(E!==null){if(i[E]!==void 0)return i[E];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe;de&&(oe=e.get("EXT_texture_norm16"),oe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=y;if(y===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8),Y===i.UNSIGNED_SHORT&&oe&&(ie=oe.R16_EXT),Y===i.SHORT&&oe&&(ie=oe.R16_SNORM_EXT)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8),Y===i.UNSIGNED_SHORT&&oe&&(ie=oe.RG16_EXT),Y===i.SHORT&&oe&&(ie=oe.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),y===i.RGB&&(Y===i.UNSIGNED_SHORT&&oe&&(ie=oe.RGB16_EXT),Y===i.SHORT&&oe&&(ie=oe.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),y===i.RGBA){const te=we?Ka:ht.getTransfer(ae);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=te===_t?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&oe&&(ie=oe.RGBA16_EXT),Y===i.SHORT&&oe&&(ie=oe.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(E,y){let Y;return E?y===null||y===ei||y===cs?Y=i.DEPTH24_STENCIL8:y===zn?Y=i.DEPTH32F_STENCIL8:y===Dr&&(Y=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===cs?Y=i.DEPTH_COMPONENT24:y===zn?Y=i.DEPTH_COMPONENT32F:y===Dr&&(Y=i.DEPTH_COMPONENT16),Y}function b(E,y){return S(E)===!0||E.isFramebufferTexture&&E.minFilter!==zt&&E.minFilter!==hn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function L(E){const y=new WeakRef(E);n.get(E).__ref=y,m.add(y),_.register(E,y,y)}function P(E){const y=n.get(E).__ref;y!==void 0&&(m.delete(y),_.unregister(y))}function N(E){F(E.target)}function V(E){C(E.target)}function F(E){E.removeEventListener("dispose",N),P(E),k(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function C(E){E.removeEventListener("dispose",V),P(E),z(E)}function O(){for(const E of m){const y=E.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):F(y))}m.clear(),f.clear()}function k(E){const y=n.get(E);if(y.__webglInit===void 0)return;const Y=E.source,de=p.get(Y);if(de){const ae=de[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(E),Object.keys(de).length===0&&p.delete(Y)}n.remove(E)}function w(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const Y=E.source,de=p.get(Y);delete de[y.__cacheKey],a.memory.textures--}function z(E){const y=n.get(E);y.__depthDisposeCallback&&y.__depthDisposeCallback();const Y=E.depthTexture;if(Y&&Y.renderTarget===E&&F(Y),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let we=0;we<y.__webglFramebuffer[ae].length;we++)i.deleteFramebuffer(y.__webglFramebuffer[ae][we]);else i.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[ae]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const de=E.textures;for(let ae=0,we=de.length;ae<we;ae++){const oe=n.get(de[ae]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(de[ae])}n.remove(E)}let U=0;function J(){U=0}function D(){return U}function le(E){U=E}function _e(){const E=U;return E>=s.maxTextures&&je("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function Q(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.mipmapsAutoUpdate),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function me(E,y){const Y=n.get(E);if(E.isVideoTexture&&be(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&Y.__version!==E.version){const de=E.image;if(de===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,E,y);return}}else E.isExternalTexture&&(Y.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function ye(E,y){const Y=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Y.__version!==E.version){ue(Y,E,y);return}else E.isExternalTexture&&(Y.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function Te(E,y){const Y=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Y.__version!==E.version){ue(Y,E,y);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function H(E,y){const Y=n.get(E);if(E.version>0&&Y.__version!==E.version){Me(Y,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}const K={[$n]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ll]:i.MIRRORED_REPEAT},se={[zt]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},B={[xd]:i.NEVER,[ku]:i.ALWAYS,[vd]:i.LESS,[zu]:i.LEQUAL,[Md]:i.EQUAL,[Bu]:i.GEQUAL,[_d]:i.GREATER,[Sd]:i.NOTEQUAL};function j(E,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===hn||y.magFilter===mo||y.magFilter===Qr||y.magFilter===di||y.minFilter===hn||y.minFilter===mo||y.minFilter===Qr||y.minFilter===di)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,K[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,se[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,B[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==Qr&&y.minFilter!==di||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function re(E,y){let Y=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",N),L(y));const de=y.source;let ae=p.get(de);ae===void 0&&(ae={},p.set(de,ae));const we=Q(y);if(we!==E.__cacheKey){ae[we]===void 0&&(ae[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[we].usedTimes++;const oe=ae[E.__cacheKey];oe!==void 0&&(ae[E.__cacheKey].usedTimes--,oe.usedTimes===0&&w(y)),E.__cacheKey=we,E.__webglTexture=ae[we].texture}return Y}function q(E,y,Y){return Math.floor(Math.floor(E/Y)/y)}function ee(E,y,Y,de){const we=E.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,Y,de,y.data);else{we.sort((W,ge)=>W.start-ge.start);let oe=0;for(let W=1;W<we.length;W++){const ge=we[oe],fe=we[W],Pe=ge.start+ge.count,Ce=q(fe.start,y.width,4),Le=q(ge.start,y.width,4);fe.start<=Pe+1&&Ce===Le&&q(fe.start+fe.count-1,y.width,4)===Ce?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++oe,we[oe]=fe)}we.length=oe+1;const ie=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let W=0,ge=we.length;W<ge;W++){const fe=we[W],Pe=Math.floor(fe.start/4),Ce=Math.ceil(fe.count/4),Le=Pe%y.width,Be=Math.floor(Pe/y.width),tt=Ce,Re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(i.TEXTURE_2D,0,Le,Be,tt,Re,Y,de,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ue(E,y,Y){let de=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(de=i.TEXTURE_3D);const ae=re(E,y),we=y.source;t.bindTexture(de,E.__webglTexture,i.TEXTURE0+Y);const oe=n.get(we);if(we.version!==oe.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Re=ht.getPrimaries(ht.workingColorSpace),Xe=y.colorSpace===Li?null:ht.getPrimaries(y.colorSpace),nt=y.colorSpace===Li||Re===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let te=v(y.image,!1,s.maxTextureSize);te=he(y,te);const ve=r.convert(y.format,y.colorSpace),W=r.convert(y.type);let ge=A(y.internalFormat,ve,W,y.normalized,y.colorSpace,y.isVideoTexture);j(de,y);let fe;const Pe=y.mipmaps,Ce=y.isVideoTexture!==!0,Le=oe.__version===void 0||ae===!0,Be=we.dataReady,tt=b(y,te);if(y.isDepthTexture)ge=x(y.format===pi,y.type),Le&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,ge,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,ve,W,null));else if(y.isDataTexture)if(Pe.length>0){Ce&&Le&&t.texStorage2D(i.TEXTURE_2D,tt,ge,Pe[0].width,Pe[0].height);for(let Re=0,Xe=Pe.length;Re<Xe;Re++)fe=Pe[Re],Ce?Be&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,fe.width,fe.height,ve,W,fe.data):t.texImage2D(i.TEXTURE_2D,Re,ge,fe.width,fe.height,0,ve,W,fe.data);y.generateMipmaps=!1}else Ce?(Le&&t.texStorage2D(i.TEXTURE_2D,tt,ge,te.width,te.height),Be&&ee(y,te,ve,W)):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,ve,W,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ce&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ge,Pe[0].width,Pe[0].height,te.depth);for(let Re=0,Xe=Pe.length;Re<Xe;Re++)if(fe=Pe[Re],y.format!==Rn)if(ve!==null)if(Ce){if(Be)if(y.layerUpdates.size>0){const nt=Vh(fe.width,fe.height,y.format,y.type);for(const Fe of y.layerUpdates){const St=fe.data.subarray(Fe*nt/fe.data.BYTES_PER_ELEMENT,(Fe+1)*nt/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,Fe,fe.width,fe.height,1,ve,St)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,fe.width,fe.height,te.depth,ve,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,ge,fe.width,fe.height,te.depth,0,fe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,fe.width,fe.height,te.depth,ve,W,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,ge,fe.width,fe.height,te.depth,0,ve,W,fe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ce&&Le&&t.texStorage2D(i.TEXTURE_2D,tt,ge,Pe[0].width,Pe[0].height);for(let Re=0,Xe=Pe.length;Re<Xe;Re++)fe=Pe[Re],y.format!==Rn?ve!==null?Ce?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,fe.width,fe.height,ve,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,ge,fe.width,fe.height,0,fe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?Be&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,fe.width,fe.height,ve,W,fe.data):t.texImage2D(i.TEXTURE_2D,Re,ge,fe.width,fe.height,0,ve,W,fe.data)}else if(y.isDataArrayTexture)if(Ce){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ge,te.width,te.height,te.depth),Be)if(y.layerUpdates.size>0){const Re=Vh(te.width,te.height,y.format,y.type);for(const Xe of y.layerUpdates){const nt=te.data.subarray(Xe*Re/te.data.BYTES_PER_ELEMENT,(Xe+1)*Re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,te.width,te.height,1,ve,W,nt)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ve,W,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,ve,W,te.data);else if(y.isData3DTexture)Ce?(Le&&t.texStorage3D(i.TEXTURE_3D,tt,ge,te.width,te.height,te.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ve,W,te.data)):t.texImage3D(i.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,ve,W,te.data);else if(y.isFramebufferTexture){if(Le)if(Ce)t.texStorage2D(i.TEXTURE_2D,tt,ge,te.width,te.height);else{let Re=te.width,Xe=te.height;for(let nt=0;nt<tt;nt++)t.texImage2D(i.TEXTURE_2D,nt,ge,Re,Xe,0,ve,W,null),Re>>=1,Xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const Re=i.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),te.parentNode!==Re){Re.appendChild(te),f.add(y),Re.onpaint=Xe=>{const nt=Xe.changedElements;for(const Fe of f)nt.includes(Fe.image)&&(Fe.needsUpdate=!0)},Re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const nt=i.RGBA,Fe=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,Fe,St,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ce&&Le){const Re=xe(Pe[0]);t.texStorage2D(i.TEXTURE_2D,tt,ge,Re.width,Re.height)}for(let Re=0,Xe=Pe.length;Re<Xe;Re++)fe=Pe[Re],Ce?Be&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ve,W,fe):t.texImage2D(i.TEXTURE_2D,Re,ge,ve,W,fe);y.generateMipmaps=!1}else if(Ce){if(Le){const Re=xe(te);t.texStorage2D(i.TEXTURE_2D,tt,ge,Re.width,Re.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,W,te)}else t.texImage2D(i.TEXTURE_2D,0,ge,ve,W,te);S(y)&&y.mipmapsAutoUpdate===!0&&M(de),oe.__version=we.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Me(E,y,Y){if(y.image.length!==6)return;const de=re(E,y),ae=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+Y);const we=n.get(ae);if(ae.version!==we.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);const oe=ht.getPrimaries(ht.workingColorSpace),ie=y.colorSpace===Li?null:ht.getPrimaries(y.colorSpace),te=y.colorSpace===Li||oe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ve=y.isCompressedTexture||y.image[0].isCompressedTexture,W=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let Fe=0;Fe<6;Fe++)!ve&&!W?ge[Fe]=v(y.image[Fe],!0,s.maxCubemapSize):ge[Fe]=W?y.image[Fe].image:y.image[Fe],ge[Fe]=he(y,ge[Fe]);const fe=ge[0],Pe=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type);let Le=A(y.internalFormat,Pe,Ce,y.normalized,y.colorSpace);const Be=y.isVideoTexture!==!0,tt=we.__version===void 0||de===!0,Re=ae.dataReady;let Xe=b(y,fe);j(i.TEXTURE_CUBE_MAP,y);let nt;if(y.isDepthTexture){if(Le=x(y.format===pi,y.type),tt)if(Be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Le,fe.width,fe.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Le,fe.width,fe.height,0,Pe,Ce,null)}else if(ve){Be&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Le,fe.width,fe.height);for(let Fe=0;Fe<6;Fe++){nt=ge[Fe].mipmaps;for(let St=0;St<nt.length;St++){const Kt=nt[St];y.format!==Rn?Pe!==null?Be?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,0,0,Kt.width,Kt.height,Pe,Kt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,Le,Kt.width,Kt.height,0,Kt.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,0,0,Kt.width,Kt.height,Pe,Ce,Kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,Le,Kt.width,Kt.height,0,Pe,Ce,Kt.data)}}}else{if(nt=y.mipmaps,Be&&tt){nt.length>0&&Xe++;const Fe=xe(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Le,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(W){Be?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ge[Fe].width,ge[Fe].height,Pe,Ce,ge[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Le,ge[Fe].width,ge[Fe].height,0,Pe,Ce,ge[Fe].data);for(let St=0;St<nt.length;St++){const yi=nt[St].image[Fe].image;Be?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,0,0,yi.width,yi.height,Pe,Ce,yi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,Le,yi.width,yi.height,0,Pe,Ce,yi.data)}}else{Be?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Pe,Ce,ge[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Le,Pe,Ce,ge[Fe]);for(let St=0;St<nt.length;St++){const Kt=nt[St];Be?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,0,0,Pe,Ce,Kt.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,Le,Pe,Ce,Kt.image[Fe])}}}S(y)&&y.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),we.__version=ae.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function pe(E,y,Y,de,ae,we){const oe=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),te=A(Y.internalFormat,oe,ie,Y.normalized,Y.colorSpace),ve=n.get(y),W=n.get(Y);if(W.__renderTarget=y,!ve.__hasExternalTextures){const ge=Math.max(1,y.width>>we),fe=Math.max(1,y.height>>we);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,we,te,ge,fe,y.depth,0,oe,ie,null):t.texImage2D(ae,we,te,ge,fe,0,oe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),I(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,W.__webglTexture,0,et(y)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,W.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(E,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const de=y.depthTexture,ae=de&&de.isDepthTexture?de.type:null,we=x(y.stencilBuffer,ae),oe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;I(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(y),we,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(y),we,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,we,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,E)}else{const de=y.textures;for(let ae=0;ae<de.length;ae++){const we=de[ae],oe=r.convert(we.format,we.colorSpace),ie=r.convert(we.type),te=A(we.internalFormat,oe,ie,we.normalized,we.colorSpace);I(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(y),te,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(y),te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(E,y,Y){const de=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=n.get(y.depthTexture);ae.__renderTarget=y;const we=de?y.depthTexture.image[0]:y.depthTexture.image;(!ae.__webglTexture||we.width!==y.width||we.height!==y.height)&&(we.width=y.width,we.height=y.height,y.depthTexture.needsUpdate=!0),de?H(y.depthTexture,0):me(y.depthTexture,0);const oe=ae.__webglTexture,ie=et(y),te=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,ve=y.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Gi)I(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,te,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,te,oe,0);else if(y.depthTexture.format===pi)I(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,te,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,te,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(E){const y=n.get(E),Y=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const de=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),de){const ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,de.removeEventListener("dispose",ae)};de.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=de}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let de=0;de<6;de++)De(y.__webglFramebuffer[de],E,de);else E.texture.mipmaps.length>0?De(y.__webglFramebuffer[0],E,0):De(y.__webglFramebuffer,E,0);else if(Y){y.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[de]),y.__webglDepthbuffer[de]===void 0)y.__webglDepthbuffer[de]=i.createRenderbuffer(),Ue(y.__webglDepthbuffer[de],E,!1);else{const ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,we)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ue(y.__webglDepthbuffer,E,!1);else{const ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,we)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(E,y,Y){const de=n.get(E);y!==void 0&&pe(de.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&He(E)}function ke(E){const y=E.texture,Y=n.get(E),de=n.get(y);E.addEventListener("dispose",V),L(E);const ae=E.textures,we=E.isWebGLCubeRenderTarget===!0,oe=ae.length>1;if(oe||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=y.version,a.memory.textures++),we){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let te=0;te<y.mipmaps.length;te++)Y.__webglFramebuffer[ie][te]=i.createFramebuffer()}else Y.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(oe)for(let ie=0,te=ae.length;ie<te;ie++){const ve=n.get(ae[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&I(E)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ae.length;ie++){const te=ae[ie];Y.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);const ve=r.convert(te.format,te.colorSpace),W=r.convert(te.type),ge=A(te.internalFormat,ve,W,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),fe=et(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ge,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(Y.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),j(i.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)pe(Y.__webglFramebuffer[ie][te],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,te);else pe(Y.__webglFramebuffer[ie],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);S(y)?M(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(oe){for(let ie=0,te=ae.length;ie<te;ie++){const ve=ae[ie],W=n.get(ve);let ge=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,W.__webglTexture),j(ge,ve),pe(Y.__webglFramebuffer,E,ve,i.COLOR_ATTACHMENT0+ie,ge,0),S(ve)&&M(ge)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,de.__webglTexture),j(ie,y),y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)pe(Y.__webglFramebuffer[te],E,y,i.COLOR_ATTACHMENT0,ie,te);else pe(Y.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ie,0);S(y)?M(ie):y.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&He(E)}function X(E){const y=E.textures;for(let Y=0,de=y.length;Y<de;Y++){const ae=y[Y];if(S(ae)&&ae.mipmapsAutoUpdate===!0){const we=T(E),oe=n.get(ae).__webglTexture;t.bindTexture(we,oe),M(we),t.unbindTexture()}}}const ot=[];function Je(E){if(E.samples>0){if(I(E)===!1){const y=E.textures,Y=E.width,de=E.height;let ae=i.COLOR_BUFFER_BIT;const we=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(E),ie=y.length>1;if(ie)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ve]);const W=n.get(y[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,Y,de,0,0,Y,de,ae,i.NEAREST),l===!0&&(ot.length=0,ot.push(i.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&ot.push(we),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ve]);const W=n.get(y[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,W,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function et(E){return Math.min(s.maxSamples,E.samples)}function I(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(E){const y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function he(E,y){const Y=E.colorSpace,de=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||Y!==Ya&&Y!==Li&&(ht.getTransfer(Y)===_t?(de!==Rn||ae!==vn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",Y)),y}function xe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=_e,this.resetTextureUnits=J,this.getTextureUnits=D,this.setTextureUnits=le,this.setTexture2D=me,this.setTexture2DArray=ye,this.setTexture3D=Te,this.setTextureCube=H,this.rebindTextures=Ye,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=I,this.dispose=O}function Rx(i,e){function t(n,s=Li){let r;const a=ht.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lu)return i.BYTE;if(n===Du)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===Rn)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===vc)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===Ia||n===Ua||n===Oa||n===Fa)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===pl||n===ml||n===gl||n===xl||n===Wa||n===vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===pl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gl)return r.COMPRESSED_R11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wa)return r.COMPRESSED_RG11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ml||n===_l||n===Sl||n===yl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ml)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Il||n===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Nl)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===Fl||n===Xa||n===zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
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

}`;class Lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ju(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ot({vertexShader:Cx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dx extends ps{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Lx,u={},v=t.getContextAttributes();let S=null,M=null;const T=[],A=[],x=new Ee;let b=null,L=null;const P=new wn;P.viewport=new Ct;const N=new wn;N.viewport=new Ct;const V=[P,N],F=new Hp;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=T[Q];return me===void 0&&(me=new wo,T[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=T[Q];return me===void 0&&(me=new wo,T[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=T[Q];return me===void 0&&(me=new wo,T[Q]=me),me.getHandSpace()};function k(Q){const me=A.indexOf(Q.inputSource);if(me===-1)return;const ye=T[me];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||a),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function w(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",z);for(let Q=0;Q<T.length;Q++){const me=A[Q];me!==null&&(A[Q]=null,T[Q].disconnect(me))}C=null,O=null,g.reset();for(const Q in u)delete u[Q];if(e.setRenderTarget(S),p=null,d=null,f=null,s=null,M=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),L!==null){const Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",w),s.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Te=null,H=null;v.depth&&(H=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?pi:Gi,Te=v.stencil?cs:ei);const K={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(K),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Xt(d.textureWidth,d.textureHeight,{format:Rn,type:vn,depthTexture:new us(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Xt(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(Q){for(let me=0;me<Q.removed.length;me++){const ye=Q.removed[me],Te=A.indexOf(ye);Te>=0&&(A[Te]=null,T[Te].disconnect(ye))}for(let me=0;me<Q.added.length;me++){const ye=Q.added[me];let Te=A.indexOf(ye);if(Te===-1){for(let K=0;K<T.length;K++)if(K>=A.length){A.push(ye),Te=K;break}else if(A[K]===null){A[K]=ye,Te=K;break}if(Te===-1)break}const H=T[Te];H&&H.connect(ye)}}function U(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let me=Q.near,ye=Q.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),F.near=N.near=P.near=me,F.far=N.far=P.far=ye,(C!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,O=F.far),F.layers.mask=Q.layers.mask|6,P.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;const Te=Q.parent,H=F.cameras;U(F,Te);for(let K=0;K<H.length;K++)U(H[K],Te);F.projectionMatrix.copy(P.projectionMatrix),F.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),J(Q,F,Te)};function J(Q,me,ye){ye===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Bl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Q){return u[Q]};let D=null;function le(Q,me){if(h=me.getViewerPose(c||a),m=me,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Te=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,Te=!0);for(let B=0;B<ye.length;B++){const j=ye[B];let re=null;if(p!==null)re=p.getViewport(j);else{const ee=f.getViewSubImage(d,j);re=ee.viewport,B===0&&(e.setRenderTargetTextures(M,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(M))}let q=V[B];q===void 0&&(q=new wn,q.layers.enable(B),q.viewport=new Ct,V[B]=q),q.matrix.fromArray(j.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(j.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(re.x,re.y,re.width,re.height),B===0&&(F.matrix.copy(q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Te===!0&&F.cameras.push(q)}const H=s.enabledFeatures;if(H&&H.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const B=f.getDepthInformation(ye[0]);B&&B.isValid&&B.texture&&g.init(B,s.renderState)}if(H&&H.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let B=0;B<ye.length;B++){const j=ye[B].camera;if(j){let re=u[j];re||(re=new Ju,u[j]=re);const q=f.getCameraImage(j);re.sourceTexture=q}}}}for(let ye=0;ye<T.length;ye++){const Te=A[ye],H=T[ye];Te!==null&&H!==void 0&&H.update(Te,me,c||a)}D&&D(Q,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),m=null}const _e=new hf;_e.setAnimationLoop(le),this.setAnimationLoop=function(Q){D=Q},this.dispose=function(){}}}const Nx=new ut,_f=new $e;_f.set(-1,0,0,0,1,0,0,0,1);function Ix(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,af(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,v,S,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(g,u):u.isMeshLambertMaterial?(r(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(g,u),f(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(g,u),d(g,u),u.isMeshPhysicalMaterial&&p(g,u,M)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),_(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,v,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===xn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===xn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const v=e.get(u),S=v.envMap,M=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_f),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,v,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*v,g.scale.value=S*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,v){g.ior.value=u.ior,u.diffuseRoughness>0&&(g.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.retroreflectivity>0&&(g.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function _(g,u){const v=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,e,t,n){let s={},r={};function a(v,S){const M=S.program;n.uniformBlockBinding(v,M,s[v.id])}function o(v,S){let M=s[v.id];M===void 0&&(m(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",g));const T=S.program;n.updateUBOMapping(v,T);const A=e.render.frame;r[v.id]!==A&&(c(v),r[v.id]=A)}function l(v){const S=i.createBuffer(),M=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(v){const S=s[v.id],M=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,x=M.length;A<x;A++){const b=M[A];if(Array.isArray(b))for(let L=0,P=b.length;L<P;L++)h(b[L],A,L,T);else h(b,A,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,S,M,T){if(d(v,S,M,T)===!0){const A=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let L=0;L<x.length;L++){const P=x[L],N=_(P,!0);f(P,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,v.__data)}}function f(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function d(v,S,M,T){const A=v.value,x=S+"_"+M;if(Array.isArray(A)){T[x]===void 0&&(T[x]=[]);const b=T[x];let L=!1;for(let P=0;P<A.length;P++)p(A[P],b,P)===!0&&(L=!0);return L}return p(A,T,x)}function p(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{const T=S[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){const S=v.uniforms;let M=0;const T=16;for(let x=0,b=S.length;x<b;x++){const L=Array.isArray(S[x])?S[x]:[S[x]];for(let P=0,N=L.length;P<N;P++){const V=L[P],F=Array.isArray(V.value)?V.value:[V.value],C=Array.isArray(S[x])||Array.isArray(V.value);let O=M;for(let w=0,z=F.length;w<z;w++){const U=F[w],J=_(U,C),D=M%T,le=D%J.boundary,_e=D+le;M+=le,_e!==0&&T-_e<J.storage&&(M+=T-_e),w===0&&(O=M),M+=J.storage}const k=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new k((M-O)/Float32Array.BYTES_PER_ELEMENT),V.__offset=O}}const A=M%T;return A>0&&(M+=T-A),v.__size=M,v.__cache={},this}function _(v,S){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):je("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){const S=v.target;S.removeEventListener("dispose",g),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:u}}const Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function Fx(){return Wn===null&&(Wn=new Vr(Ox,16,16,hs,Wt),Wn.name="DFG_LUT",Wn.minFilter=hn,Wn.magFilter=hn,Wn.wrapS=fi,Wn.wrapT=fi,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class zx{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=p,g=new Set([_c,Mc,vc]),u=new Set([vn,ei,Dr,cs,mc,gc]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let T=null,A=null;const x=[],b=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,V=null,F=null,C=null,O=null;this._outputColorSpace=Gt;let k=0,w=0,z=null,U=-1,J=null;const D=new Ct,le=new Ct;let _e=null;const Q=new Ke(0);let me=0,ye=t.width,Te=t.height,H=1,K=null,se=null;const B=new Ct(0,0,ye,Te),j=new Ct(0,0,ye,Te);let re=!1;const q=new Ir,ee=new Tc;let ue=!1,Me=!1;const pe=new ut,Ue=new G,De=new Ct,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function ke(){return z===null?H:1}let X=n;function ot(R,Z){return t.getContext(R,Z)}let Je,et,I,be,he,xe,E,y,Y,de,ae,we,oe,ie,te,ve,W,ge,fe,Pe,Ce,Le,Be;try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),X===null){const Z="webgl2";if(X=ot(Z,R),X===null)throw ot(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(R){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),mt("WebGLRenderer: "+R.message),R}function tt(){Je=new Hg(X),Je.init(),Ce=new Rx(X,Je),et=new Pg(X,Je,e,Ce),I=new Tx(X,Je),et.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),F=X.createFramebuffer(),C=X.createFramebuffer(),O=X.createFramebuffer(),be=new Wg(X),he=new fx,xe=new Ax(X,Je,I,he,et,Ce,be),E=new kg(P),y=new qp(X),Le=new Rg(X,y),Y=new Gg(X,y,be,Le),de=new qg(X,Y,y,Le,be),ge=new Xg(X,et,xe),te=new Lg(he),ae=new ux(P,E,Je,et,Le,te),we=new Ix(P,he),oe=new px,ie=new _x(Je),W=new Ag(P,E,I,de,m,l),ve=new Ex(P,de,et),Be=new Ux(X,be,et,I),fe=new Cg(X,Je,be),Pe=new Vg(X,Je,be),be.programs=ae.programs,P.capabilities=et,P.extensions=Je,P.properties=he,P.renderLists=oe,P.shadowMap=ve,P.state=I,P.info=be}_!==vn&&(L=new Kg(_,t.width,t.height,o,s,r));const Re=new Dx(P,X);this.xr=Re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(ye,Te,!1))},this.getSize=function(R){return R.set(ye,Te)},this.setSize=function(R,Z,ce=!0){if(Re.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=R,Te=Z,t.width=Math.floor(R*H),t.height=Math.floor(Z*H),ce===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(ye*H,Te*H).floor()},this.setDrawingBufferSize=function(R,Z,ce){ye=R,Te=Z,H=ce,t.width=Math.floor(R*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(_===vn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(B)},this.setViewport=function(R,Z,ce,$){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,Z,ce,$),I.viewport(D.copy(B).multiplyScalar(ke()).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,Z,ce,$){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,Z,ce,$),I.scissor(le.copy(j).multiplyScalar(ke()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(R){I.setScissorTest(re=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ce=!0){let $=0;if(R){let ne=!1;if(z!==null){const Ie=z.texture.format;ne=g.has(Ie)}if(ne){const Ie=z.texture.type,Ge=u.has(Ie),Ne=W.getClearColor(),ze=W.getClearAlpha(),qe=Ne.r,it=Ne.g,lt=Ne.b;Ge?(v[0]=qe,v[1]=it,v[2]=lt,v[3]=ze,X.clearBufferuiv(X.COLOR,0,v)):(S[0]=qe,S[1]=it,S[2]=lt,S[3]=ze,X.clearBufferiv(X.COLOR,0,S))}else $|=X.COLOR_BUFFER_BIT}Z&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),V=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),W.dispose(),oe.dispose(),ie.dispose(),xe.dispose(),he.dispose(),E.dispose(),de.dispose(),Y.dispose(),Le.dispose(),Be.dispose(),ae.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Kc),Re.removeEventListener("sessionend",Zc),qi.stop()};function Xe(R){R.preventDefault(),ch("WebGLRenderer: Context Lost."),N=!0}function nt(){ch("WebGLRenderer: Context Restored."),N=!1;const R=be.autoReset,Z=ve.enabled,ce=ve.autoUpdate,$=ve.needsUpdate,ne=ve.type;tt(),be.autoReset=R,ve.enabled=Z,ve.autoUpdate=ce,ve.needsUpdate=$,ve.type=ne}function Fe(R){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function St(R){const Z=R.target;Z.removeEventListener("dispose",St),Kt(Z)}function Kt(R){yi(R),he.remove(R)}function yi(R){const Z=he.get(R).programs;Z!==void 0&&(Z.forEach(function(ce){ae.releaseProgram(ce)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ce,$,ne,Ie){Z===null&&(Z=He);const Ge=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ne=Xf(R,Z,ce,$,ne);I.setMaterial($,Ge);let ze=ce.index,qe=1;if($.wireframe===!0){if(ze=Y.getWireframeAttribute(ce),ze===void 0)return;qe=2}const it=ce.drawRange,lt=ce.attributes.position;let Ve=it.start*qe,ct=(it.start+it.count)*qe;Ie!==null&&(Ve=Math.max(Ve,Ie.start*qe),ct=Math.min(ct,(Ie.start+Ie.count)*qe)),ze!==null?(Ve=Math.max(Ve,0),ct=Math.min(ct,ze.count)):lt!=null&&(Ve=Math.max(Ve,0),ct=Math.min(ct,lt.count));const Bt=ct-Ve;if(Bt<0||Bt===1/0)return;Le.setup(ne,$,Ne,ce,ze);let Tt,Et=fe;if(ze!==null&&(Tt=y.get(ze),Et=Pe,Et.setIndex(Tt)),ne.isMesh)$.wireframe===!0?(I.setLineWidth($.wireframeLinewidth*ke()),Et.setMode(X.LINES)):Et.setMode(X.TRIANGLES);else if(ne.isLine){let nn=$.linewidth;nn===void 0&&(nn=1),I.setLineWidth(nn*ke()),ne.isLineSegments?Et.setMode(X.LINES):ne.isLineLoop?Et.setMode(X.LINE_LOOP):Et.setMode(X.LINE_STRIP)}else ne.isPoints?Et.setMode(X.POINTS):ne.isSprite&&Et.setMode(X.TRIANGLES);if(ne.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))Et.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const nn=ne._multiDrawStarts,We=ne._multiDrawCounts,fn=ne._multiDrawCount,xt=ze?y.get(ze).bytesPerElement:1,Yi=he.get($).currentProgram.getUniforms();for(let sn=0;sn<fn;sn++)Yi.setValue(X,"_gl_DrawID",sn),Et.render(nn[sn]/xt,We[sn])}else if(ne.isInstancedMesh)Et.renderInstances(Ve,Bt,ne.count);else if(ce.isInstancedBufferGeometry){const nn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,We=Math.min(ce.instanceCount,nn);Et.renderInstances(Ve,Bt,We)}else Et.render(Ve,Bt)};function Yc(R,Z,ce,$){V!==null&&R.isNodeMaterial&&V.setObject($,R),ue===!0&&te.setState(R,ce,!1),R.transparent===!0&&R.side===Lt&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,sr(R,Z,$),R.side=Hi,R.needsUpdate=!0,sr(R,Z,$),R.side=Lt):sr(R,Z,$)}this.compile=function(R,Z,ce=null){ce===null&&(ce=R),V!==null&&V.renderStart(R,Z,ce),A=ie.get(ce),A.init(Z),b.push(A),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(A.pushLight(ne),ne.castShadow&&A.pushShadow(ne))}),R!==ce&&R.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(A.pushLight(ne),ne.castShadow&&A.pushShadow(ne))}),A.setupLights(),V!==null&&V.updateLights(A.state.lightsArray),Me=this.localClippingEnabled,ue=te.init(this.clippingPlanes,Me),ue===!0&&te.setGlobalState(this.clippingPlanes,Z),V!==null&&ve.render(A.state.shadowsArray,ce,Z);const $=new Set;return R.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){const Ne=Ie[Ge];Yc(Ne,ce,Z,ne),$.add(Ne)}else Yc(Ie,ce,Z,ne),$.add(Ie)}),A=b.pop(),V!==null&&V.renderEnd(),$},this.compileAsync=function(R,Z,ce=null){const $=this.compile(R,Z,ce);return new Promise(ne=>{function Ie(){if($.forEach(function(Ge){const ze=he.get(Ge).currentProgram;(ze===void 0||ze.isReady())&&$.delete(Ge)}),$.size===0){ne(R);return}setTimeout(Ie,10)}Je.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ho=null;function Vf(R){ho&&ho(R)}function Kc(){qi.stop()}function Zc(){qi.start()}const qi=new hf;qi.setAnimationLoop(Vf),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(R){ho=R,Re.setAnimationLoop(R),R===null?qi.stop():qi.start()},Re.addEventListener("sessionstart",Kc),Re.addEventListener("sessionend",Zc),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;V!==null&&V.renderStart(R,Z);const ce=Re.enabled===!0&&Re.isPresenting===!0,$=L!==null&&(z===null||ce)&&L.begin(P,z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Z),Z=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,Z,z),A=ie.get(R,b.length),A.init(Z),A.state.textureUnits=xe.getTextureUnits(),b.push(A),pe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?ee.setFromArrayCamera(Z):q.setFromProjectionMatrix(pe,Bn,Z.reversedDepth),Me=this.localClippingEnabled,ue=te.init(this.clippingPlanes,Me),T=oe.get(R,x.length),T.init(),x.push(T),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){const Ge=P.xr.getDepthSensingMesh();Ge!==null&&uo(Ge,Z,-1/0,P.sortObjects)}uo(R,Z,0,P.sortObjects),T.finish(),V!==null&&V.updateLights(A.state.lightsArray),P.sortObjects===!0&&T.sort(K,se),Ye=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ye&&W.addToRenderList(T,R),this.info.autoReset===!0&&this.info.reset(),ue===!0&&te.beginShadows();const ne=A.state.shadowsArray;if(ve.render(ne,R,Z),ue===!0&&te.endShadows(),($&&L.hasRenderPass())===!1){const Ge=T.opaque,Ne=T.transmissive;if(A.setupLights(),Z.isArrayCamera){const ze=Z.cameras;if(Ne.length>0)for(let qe=0,it=ze.length;qe<it;qe++){const lt=ze[qe];Qc(Ge,Ne,R,lt)}Ye&&W.render(R);for(let qe=0,it=ze.length;qe<it;qe++){const lt=ze[qe];Jc(T,R,lt,lt.viewport)}}else Ne.length>0&&Qc(Ge,Ne,R,Z),Ye&&W.render(R),Jc(T,R,Z)}z!==null&&w===0&&(xe.updateMultisampleRenderTarget(z),xe.updateRenderTargetMipmap(z)),$&&L.end(P),R.isScene===!0&&R.onAfterRender(P,R,Z),Le.resetDefaultState(),U=-1,J=null,b.pop(),b.length>0?(A=b[b.length-1],xe.setTextureUnits(A.state.textureUnits),ue===!0&&te.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,V!==null&&V.renderEnd()};function uo(R,Z,ce,$){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){const Ge=Z.isArrayCamera?ee:q;if(!R.frustumCulled||R.intersectsFrustum(Ge)){$&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const Ne=de.update(R),ze=R.material;ze.visible&&T.push(R,Ne,ze,ce,De.z,null,Z)}}else if(R.isMesh||R.isLine||R.isPoints){const Ge=Z.isArrayCamera?ee:q;if(!R.frustumCulled||R.intersectsFrustum(Ge)){const Ne=de.update(R),ze=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),De.copy(Ne.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(ze)){const qe=Ne.groups;for(let it=0,lt=qe.length;it<lt;it++){const Ve=qe[it],ct=ze[Ve.materialIndex];ct&&ct.visible&&T.push(R,Ne,ct,ce,De.z,Ve,Z)}}else ze.visible&&T.push(R,Ne,ze,ce,De.z,null,Z)}}}const Ie=R.children;for(let Ge=0,Ne=Ie.length;Ge<Ne;Ge++)uo(Ie[Ge],Z,ce,$)}function Jc(R,Z,ce,$){const{opaque:ne,transmissive:Ie,transparent:Ge}=R;A.setupLightsView(ce),ue===!0&&te.setGlobalState(P.clippingPlanes,ce),$&&I.viewport(D.copy($)),ne.length>0&&Zr(ne,Z,ce),Ie.length>0&&Zr(Ie,Z,ce),Ge.length>0&&Zr(Ge,Z,ce),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Qc(R,Z,ce,$){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const Ve=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new Xt(1,1,{generateMipmaps:!0,type:Ve?Wt:vn,minFilter:di,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const Ie=A.state.transmissionRenderTarget[$.id],Ge=$.viewport||D;Ie.setSize(Ge.z*P.transmissionResolutionScale,Ge.w*P.transmissionResolutionScale);const Ne=P.getRenderTarget(),ze=P.getActiveCubeFace(),qe=P.getActiveMipmapLevel();P.setRenderTarget(Ie),P.getClearColor(Q),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),Ye&&W.render(ce);const it=P.toneMapping;P.toneMapping=xi;const lt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),ue===!0&&te.setGlobalState(P.clippingPlanes,$),Zr(R,ce,$),xe.updateMultisampleRenderTarget(Ie),xe.updateRenderTargetMipmap(Ie),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ct=0,Bt=Z.length;ct<Bt;ct++){const Tt=Z[ct],{object:Et,geometry:nn,material:We,group:fn}=Tt;if(We.side===Lt&&Et.layers.test($.layers)){const xt=We.side;We.side=xn,We.needsUpdate=!0,jc(Et,ce,$,nn,We,fn),We.side=xt,We.needsUpdate=!0,Ve=!0}}Ve===!0&&(xe.updateMultisampleRenderTarget(Ie),xe.updateRenderTargetMipmap(Ie))}P.setRenderTarget(Ne,ze,qe),P.setClearColor(Q,me),lt!==void 0&&($.viewport=lt),P.toneMapping=it}function Zr(R,Z,ce){const $=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Ie=R.length;ne<Ie;ne++){const Ge=R[ne],{object:Ne,geometry:ze,group:qe}=Ge;let it=Ge.material;it.allowOverride===!0&&$!==null&&(it=$),Ne.layers.test(ce.layers)&&jc(Ne,Z,ce,ze,it,qe)}}function jc(R,Z,ce,$,ne,Ie){V!==null&&ne.isNodeMaterial&&V.setObject(R,ne),R.onBeforeRender(P,Z,ce,$,ne,Ie),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(P,Z,ce,$,R,Ie),ne.transparent===!0&&ne.side===Lt&&ne.forceSinglePass===!1?(ne.side=xn,ne.needsUpdate=!0,P.renderBufferDirect(ce,Z,$,ne,R,Ie),ne.side=Hi,ne.needsUpdate=!0,P.renderBufferDirect(ce,Z,$,ne,R,Ie),ne.side=Lt):P.renderBufferDirect(ce,Z,$,ne,R,Ie),R.onAfterRender(P,Z,ce,$,ne,Ie)}function $c(R){let Z=0;for(const ce of R)ce.texture!==null&&Z++;return Z}function sr(R,Z,ce){Z.isScene!==!0&&(Z=He);const $=he.get(R),ne=A.state.lights,Ie=A.state.shadowsArray,Ge=ne.state.version,Ne=ae.getParameters(R,ne.state,Ie,Z,ce,A.state.lightProbeGridArray),ze=ae.getProgramCacheKey(Ne);let qe=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,$.fog=Z.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=E.get(R.envMap||$.environment,it),$.envMapRotation=$.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",St),qe=new Map,$.programs=qe,$.programVariants=new Map);let lt=qe.get(ze);if(lt!==void 0){if($.currentProgram===lt&&$.lightsStateVersion===Ge)return th(R,Ne),lt}else Ne.uniforms=ae.getUniforms(R),V!==null&&R.isNodeMaterial&&V.build(R,ce,Ne),R.onBeforeCompile(Ne,P),lt=ae.acquireProgram(Ne,ze),qe.set(ze,lt),$.uniforms=Ne.uniforms;const Ve=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=te.uniform),th(R,Ne),$.needsLights=Yf(R),$.lightsStateVersion=Ge,$.needsLights&&(Ve.ambientLightColor.value=ne.state.ambient,Ve.lightProbe.value=ne.state.probe,Ve.sunLights.value=ne.state.sun,Ve.sunLightShadows.value=ne.state.sunShadow,Ve.directionalLights.value=ne.state.directional,Ve.directionalLightShadows.value=ne.state.directionalShadow,Ve.spotLights.value=ne.state.spot,Ve.spotLightShadows.value=ne.state.spotShadow,Ve.rectAreaLights.value=ne.state.rectArea,Ve.ltc_1.value=ne.state.rectAreaLTC1,Ve.ltc_2.value=ne.state.rectAreaLTC2,Ve.pointLights.value=ne.state.point,Ve.pointLightShadows.value=ne.state.pointShadow,Ve.hemisphereLights.value=ne.state.hemi,Ve.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ve.sunShadowCascade.value=ne.state.sunShadowCascade,Ve.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ne.state.spotLightMatrix,Ve.spotLightMap.value=ne.state.spotLightMap,Ve.pointShadowMatrix.value=ne.state.pointShadowMatrix),$.numLightProbeGrids=$c(A.state.lightProbeGridArray),$.currentProgram=lt,$.uniformsList=null,lt}function Wf(R,Z,ce,$,ne){const Ie=he.get(R),Ge=Ie.currentProgram.id+","+$+","+ne;let Ne=Ie.programVariants.get(Ge);return Ne===void 0?(Ne=sr(R,Z,ce),Ie.programVariants.set(Ge,Ne)):(Ie.currentProgram=Ne,Ie.uniformsList=null,Ie.outputColorSpace=$,Ie.toneMapping=ne),Ne}function eh(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=za.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function th(R,Z){const ce=he.get(R);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Xf(R,Z,ce,$,ne){Z.isScene!==!0&&(Z=He),xe.resetTextureUnits();const Ie=Z.fog,Ge=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?Z.environment:null,Ne=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ht.workingColorSpace,ze=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,qe=E.get($.envMap||Ge,ze),it=$.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,lt=!!ce.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!ce.morphAttributes.position,ct=!!ce.morphAttributes.normal,Bt=!!ce.morphAttributes.color;let Tt=xi;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const Et=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,nn=Et!==void 0?Et.length:0,We=he.get($),fn=A.state.lights;if(ue===!0&&(Me===!0||R!==J)){const Nt=R===J&&$.id===U;te.setState($,R,Nt)}let xt=!1,Yi=!1;$.version===We.__version?We.needsLights&&We.lightsStateVersion!==fn.state.version||ne.isBatchedMesh&&We.batching===!1||!ne.isBatchedMesh&&We.batching===!0||ne.isBatchedMesh&&We.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&We.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&We.instancing===!1||!ne.isInstancedMesh&&We.instancing===!0||ne.isSkinnedMesh&&We.skinning===!1||!ne.isSkinnedMesh&&We.skinning===!0||ne.isInstancedMesh&&We.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&We.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&We.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&We.instancingMorph===!1&&ne.morphTexture!==null||We.envMap!==qe||$.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==te.numPlanes||We.numIntersection!==te.numIntersection)||We.vertexAlphas!==it||We.vertexTangents!==lt||We.morphTargets!==Ve||We.morphNormals!==ct||We.morphColors!==Bt||We.morphTargetsCount!==nn||We.numLightProbeGrids!==$c(A.state.lightProbeGridArray)?xt=!0:(We.outputColorSpace!==Ne||We.toneMapping!==Tt)&&(Yi=!0):(xt=!0,We.__version=$.version);let sn=We.currentProgram;(xt===!0||Yi===!0)&&(sn=Yi===!0?Wf($,Z,ne,Ne,Tt):sr($,Z,ne),V&&$.isNodeMaterial&&V.onUpdateProgram($,sn,We));let Jr=!1,bi=!1,Ki=!1;const dt=sn.getUniforms(),$t=We.uniforms;if(I.useProgram(sn.program)&&(Jr=!0,bi=!0,Ki=!0),$.id!==U&&(U=$.id,bi=!0),Jr||J!==R){I.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),dt.setValue(X,"projectionMatrix",R.projectionMatrix),dt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Zt=dt.map.cameraPosition;Zt!==void 0&&Zt.setValue(X,Ue.setFromMatrixPosition(R.matrixWorld)),et.logarithmicDepthBuffer&&dt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,bi=!0,Ki=!0)}if(We.needsLights&&(fn.state.sunShadowMap.length>0&&dt.setValue(X,"sunShadowMap",fn.state.sunShadowMap,xe),fn.state.directionalShadowMap.length>0&&dt.setValue(X,"directionalShadowMap",fn.state.directionalShadowMap,xe),fn.state.spotShadowMap.length>0&&dt.setValue(X,"spotShadowMap",fn.state.spotShadowMap,xe),fn.state.pointShadowMap.length>0&&dt.setValue(X,"pointShadowMap",fn.state.pointShadowMap,xe)),ne.isSkinnedMesh){dt.setOptional(X,ne,"bindMatrix"),dt.setOptional(X,ne,"bindMatrixInverse");const Nt=ne.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),dt.setValue(X,"boneTexture",Nt.boneTexture,xe))}ne.isBatchedMesh&&(dt.setOptional(X,ne,"batchingTexture"),dt.setValue(X,"batchingTexture",ne._matricesTexture,xe),dt.setOptional(X,ne,"batchingIdTexture"),dt.setValue(X,"batchingIdTexture",ne._indirectTexture,xe),dt.setOptional(X,ne,"batchingColorTexture"),ne._colorsTexture!==null&&dt.setValue(X,"batchingColorTexture",ne._colorsTexture,xe));const Pn=ce.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&ge.update(ne,ce,sn),(bi||We.receiveShadow!==ne.receiveShadow)&&(We.receiveShadow=ne.receiveShadow,dt.setValue(X,"receiveShadow",ne.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&Z.environment!==null&&($t.envMapIntensity.value=Z.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=Fx()),bi){if(dt.setValue(X,"toneMappingExposure",P.toneMappingExposure),We.needsLights&&qf($t,Ki),Ie&&$.fog===!0&&we.refreshFogUniforms($t,Ie),we.refreshMaterialUniforms($t,$,H,Te,A.state.transmissionRenderTarget[R.id]),We.needsLights&&We.numLightProbeGrids>0){const Nt=M;let Zt=0;for(const ni of A.state.lightProbeGridArray)ni.texture!==null&&(Nt.textures[Zt]=ni.texture,Nt.min[Zt]=ni.boundingBox.min,Nt.max[Zt]=ni.boundingBox.max,Nt.resolution[Zt]=ni.resolution,Zt++);for(const ni in Nt)Nt[ni].length=Zt;$t.probesSH.value=Nt.textures,$t.probesMin.value=Nt.min,$t.probesMax.value=Nt.max,$t.probesResolution.value=Nt.resolution}za.upload(X,eh(We),$t,xe)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(za.upload(X,eh(We),$t,xe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(X,"center",ne.center),dt.setValue(X,"modelViewMatrix",ne.modelViewMatrix),dt.setValue(X,"normalMatrix",ne.normalMatrix),dt.setValue(X,"modelMatrix",ne.matrixWorld),$.uniformsGroups!==void 0){const Nt=$.uniformsGroups;for(let Zt=0,ni=Nt.length;Zt<ni;Zt++){const ih=Nt[Zt];Be.update(ih,sn),Be.bind(ih,sn)}}return sn}function qf(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.sunLights.needsUpdate=Z,R.sunLightShadows.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Yf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,Z,ce){const $=he.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),he.get(R.texture).__webglTexture=Z,he.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ce,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ce=he.get(R);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,ce=0){z=R,k=Z,w=ce;let $=null,ne=!1,Ie=!1;if(R){const Ne=he.get(R);if(Ne.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(X.FRAMEBUFFER,Ne.__webglFramebuffer),D.copy(R.viewport),le.copy(R.scissor),_e=R.scissorTest,I.viewport(D),I.scissor(le),I.setScissorTest(_e),U=-1;return}else if(Ne.__webglFramebuffer===void 0)xe.setupRenderTarget(R);else if(Ne.__hasExternalTextures)xe.rebindTextures(R,he.get(R.texture).__webglTexture,he.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Ne.__boundDepthTexture!==it){if(it!==null&&he.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(R)}}const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ie=!0);const qe=he.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[Z])?$=qe[Z][ce]:$=qe[Z],ne=!0):R.samples>0&&xe.useMultisampledRTT(R)===!1?$=he.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[ce]:$=qe,D.copy(R.viewport),le.copy(R.scissor),_e=R.scissorTest}else D.copy(B).multiplyScalar(H).floor(),le.copy(j).multiplyScalar(H).floor(),_e=re;if(ce!==0&&($=F),I.bindFramebuffer(X.FRAMEBUFFER,$)&&I.drawBuffers(R,$),I.viewport(D),I.scissor(le),I.setScissorTest(_e),ne){const Ne=he.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ne.__webglTexture,ce)}else if(Ie){const Ne=Z;for(let ze=0;ze<R.textures.length;ze++){const qe=he.get(R.textures[ze]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ze,qe.__webglTexture,ce,Ne)}}else if(R!==null&&ce!==0){const Ne=he.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ne.__webglTexture,ce)}U=-1};function nh(R){const Z=he.get(R);return(Z.__readFormat!==R.format||Z.__readType!==R.type)&&(Z.__readFormat=R.format,Z.__readType=R.type,Z.__formatReadable=et.textureFormatReadable(R.format),Z.__typeReadable=et.textureTypeReadable(R.type)),Z}this.readRenderTargetPixels=function(R,Z,ce,$,ne,Ie,Ge,Ne=0){if(!(R&&R.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=he.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(ze=ze[Ge],Array.isArray(ze)&&(ze=ze[0])),ze){I.bindFramebuffer(X.FRAMEBUFFER,ze);try{const qe=R.textures[Ne],it=qe.format,lt=qe.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);const Ve=nh(qe);if(Ve.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-$&&ce>=0&&ce<=R.height-ne&&X.readPixels(Z,ce,$,ne,Ce.convert(it),Ce.convert(lt),Ie)}finally{const qe=z!==null?he.get(z).__webglFramebuffer:null;I.bindFramebuffer(X.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ce,$,ne,Ie,Ge,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=he.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(ze=ze[Ge],Array.isArray(ze)&&(ze=ze[0])),ze)if(Z>=0&&Z<=R.width-$&&ce>=0&&ce<=R.height-ne){I.bindFramebuffer(X.FRAMEBUFFER,ze);const qe=R.textures[Ne],it=qe.format,lt=qe.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);const Ve=nh(qe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ct),X.bufferData(X.PIXEL_PACK_BUFFER,Ie.byteLength,X.STREAM_READ),X.readPixels(Z,ce,$,ne,Ce.convert(it),Ce.convert(lt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Bt=z!==null?he.get(z).__webglFramebuffer:null;I.bindFramebuffer(X.FRAMEBUFFER,Bt);const Tt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ed(X,Tt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ct),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ie),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ct),X.deleteSync(Tt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ce=0){const $=Math.pow(2,-ce),ne=Math.floor(R.image.width*$),Ie=Math.floor(R.image.height*$),Ge=Z!==null?Z.x:0,Ne=Z!==null?Z.y:0;xe.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,Ge,Ne,ne,Ie),I.unbindTexture()},this.copyTextureToTexture=function(R,Z,ce=null,$=null,ne=0,Ie=0){let Ge,Ne,ze,qe,it,lt,Ve,ct,Bt;const Tt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(ce!==null)Ge=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,ze=ce.isBox3?ce.max.z-ce.min.z:1,qe=ce.min.x,it=ce.min.y,lt=ce.isBox3?ce.min.z:0;else{const dt=Math.pow(2,-ne);Ge=Math.floor(Tt.width*dt),Ne=Math.floor(Tt.height*dt),R.isDataArrayTexture?ze=Tt.depth:R.isData3DTexture?ze=Math.floor(Tt.depth*dt):ze=1,qe=0,it=0,lt=0}$!==null?(Ve=$.x,ct=$.y,Bt=$.z):(Ve=0,ct=0,Bt=0);const Et=Ce.convert(Z.format),nn=Ce.convert(Z.type);let We;Z.isData3DTexture?(xe.setTexture3D(Z,0),We=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(xe.setTexture2DArray(Z,0),We=X.TEXTURE_2D_ARRAY):(xe.setTexture2D(Z,0),We=X.TEXTURE_2D),I.activeTexture(X.TEXTURE0),I.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const fn=I.getParameter(X.UNPACK_ROW_LENGTH),xt=I.getParameter(X.UNPACK_IMAGE_HEIGHT),Yi=I.getParameter(X.UNPACK_SKIP_PIXELS),sn=I.getParameter(X.UNPACK_SKIP_ROWS),Jr=I.getParameter(X.UNPACK_SKIP_IMAGES);I.pixelStorei(X.UNPACK_ROW_LENGTH,Tt.width),I.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tt.height),I.pixelStorei(X.UNPACK_SKIP_PIXELS,qe),I.pixelStorei(X.UNPACK_SKIP_ROWS,it),I.pixelStorei(X.UNPACK_SKIP_IMAGES,lt);const bi=R.isDataArrayTexture||R.isData3DTexture,Ki=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const dt=he.get(R),$t=he.get(Z),Pn=he.get(dt.__renderTarget),Nt=he.get($t.__renderTarget);I.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),I.bindFramebuffer(X.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Zt=0;Zt<ze;Zt++)bi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,he.get(R).__webglTexture,ne,lt+Zt),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,he.get(Z).__webglTexture,Ie,Bt+Zt)),X.blitFramebuffer(qe,it,qe+Ge,it+Ne,Ve,ct,Ve+Ge,ct+Ne,X.DEPTH_BUFFER_BIT,X.NEAREST);I.bindFramebuffer(X.READ_FRAMEBUFFER,null),I.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ne!==0||R.isRenderTargetTexture||he.has(R)){const dt=he.get(R),$t=he.get(Z);I.bindFramebuffer(X.READ_FRAMEBUFFER,C),I.bindFramebuffer(X.DRAW_FRAMEBUFFER,O);for(let Pn=0;Pn<ze;Pn++)bi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dt.__webglTexture,ne,lt+Pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dt.__webglTexture,ne),Ki?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$t.__webglTexture,Ie,Bt+Pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$t.__webglTexture,Ie),ne!==0?X.blitFramebuffer(qe,it,qe+Ge,it+Ne,Ve,ct,Ve+Ge,ct+Ne,X.COLOR_BUFFER_BIT,X.NEAREST):Ki?X.copyTexSubImage3D(We,Ie,Ve,ct,Bt+Pn,qe,it,Ge,Ne):X.copyTexSubImage2D(We,Ie,Ve,ct,qe,it,Ge,Ne);I.bindFramebuffer(X.READ_FRAMEBUFFER,null),I.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ki?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(We,Ie,Ve,ct,Bt,Ge,Ne,ze,Et,nn,Tt.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(We,Ie,Ve,ct,Bt,Ge,Ne,ze,Et,Tt.data):X.texSubImage3D(We,Ie,Ve,ct,Bt,Ge,Ne,ze,Et,nn,Tt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ie,Ve,ct,Ge,Ne,Et,nn,Tt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ie,Ve,ct,Tt.width,Tt.height,Et,Tt.data):X.texSubImage2D(X.TEXTURE_2D,Ie,Ve,ct,Ge,Ne,Et,nn,Tt);I.pixelStorei(X.UNPACK_ROW_LENGTH,fn),I.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xt),I.pixelStorei(X.UNPACK_SKIP_PIXELS,Yi),I.pixelStorei(X.UNPACK_SKIP_ROWS,sn),I.pixelStorei(X.UNPACK_SKIP_IMAGES,Jr),Ie===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&X.generateMipmap(We),I.unbindTexture()},this.initRenderTarget=function(R){he.get(R).__webglFramebuffer===void 0&&xe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?xe.setTextureCube(R,0):R.isData3DTexture?xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xe.setTexture2DArray(R,0):xe.setTexture2D(R,0),I.unbindTexture()},this.resetState=function(){k=0,w=0,z=null,I.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const is={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bx=new Oc(-1,1,1,-1,0,1);class kx extends wt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const Hx=new kx;class qr{constructor(e){this._mesh=new ft(Hx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Sf extends Xi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cn.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new qr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class uu extends Xi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Gx extends Xi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sf(is),this.copyPass.material.blending=gn,this.timer=new Gp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}uu!==void 0&&(a instanceof uu?n=!0:a instanceof Gx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wx extends Xi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ke}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const wa={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ut},cameraProjectionMatrixInverse:{value:new ut},cameraWorldMatrix:{value:new ut},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

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
		}`},Ea={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Xo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Xx(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=qx(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=t[a],l=2*Math.PI*o/n,c=new G(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new Vr(s,e,e);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}function qx(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}const Ta={defines:{SAMPLES:16,SAMPLE_VECTORS:yf(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraProjectionMatrixInverse:{value:new ut},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function yf(i,e,t){const n=Yx(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Yx(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new G(Math.cos(r),Math.sin(r),a))}return n}class Kx{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,f=(l+c)*h,d=l-f,p=c-f,m=e-d,_=t-p;let g,u;m>_?(g=1,u=0):(g=0,u=1);const v=m-g+h,S=_-u+h,M=m-1+2*h,T=_-1+2*h,A=l&255,x=c&255,b=this.perm[A+this.perm[x]]%12,L=this.perm[A+g+this.perm[x+u]]%12,P=this.perm[A+1+this.perm[x+1]]%12;let N=.5-m*m-_*_;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[b],m,_));let V=.5-v*v-S*S;V<0?s=0:(V*=V,s=V*V*this._dot(this.grad3[L],v,S));let F=.5-M*M-T*T;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[P],M,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),d=Math.floor(n+c),p=1/6,m=(h+f+d)*p,_=h-m,g=f-m,u=d-m,v=e-_,S=t-g,M=n-u;let T,A,x,b,L,P;v>=S?S>=M?(T=1,A=0,x=0,b=1,L=1,P=0):v>=M?(T=1,A=0,x=0,b=1,L=0,P=1):(T=0,A=0,x=1,b=1,L=0,P=1):S<M?(T=0,A=0,x=1,b=0,L=1,P=1):v<M?(T=0,A=1,x=0,b=0,L=1,P=1):(T=0,A=1,x=0,b=1,L=1,P=0);const N=v-T+p,V=S-A+p,F=M-x+p,C=v-b+2*p,O=S-L+2*p,k=M-P+2*p,w=v-1+3*p,z=S-1+3*p,U=M-1+3*p,J=h&255,D=f&255,le=d&255,_e=this.perm[J+this.perm[D+this.perm[le]]]%12,Q=this.perm[J+T+this.perm[D+A+this.perm[le+x]]]%12,me=this.perm[J+b+this.perm[D+L+this.perm[le+P]]]%12,ye=this.perm[J+1+this.perm[D+1+this.perm[le+1]]]%12;let Te=.6-v*v-S*S-M*M;Te<0?s=0:(Te*=Te,s=Te*Te*this._dot3(this.grad3[_e],v,S,M));let H=.6-N*N-V*V-F*F;H<0?r=0:(H*=H,r=H*H*this._dot3(this.grad3[Q],N,V,F));let K=.6-C*C-O*O-k*k;K<0?a=0:(K*=K,a=K*K*this._dot3(this.grad3[me],C,O,k));let se=.6-w*w-z*z-U*U;return se<0?o=0:(se*=se,o=se*se*this._dot3(this.grad3[ye],w,z,U)),32*(s+r+a+o)}noise4d(e,t,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,f,d,p,m;const _=(e+t+n+s)*l,g=Math.floor(e+_),u=Math.floor(t+_),v=Math.floor(n+_),S=Math.floor(s+_),M=(g+u+v+S)*c,T=g-M,A=u-M,x=v-M,b=S-M,L=e-T,P=t-A,N=n-x,V=s-b,F=L>P?32:0,C=L>N?16:0,O=P>N?8:0,k=L>V?4:0,w=P>V?2:0,z=N>V?1:0,U=F+C+O+k+w+z,J=a[U][0]>=3?1:0,D=a[U][1]>=3?1:0,le=a[U][2]>=3?1:0,_e=a[U][3]>=3?1:0,Q=a[U][0]>=2?1:0,me=a[U][1]>=2?1:0,ye=a[U][2]>=2?1:0,Te=a[U][3]>=2?1:0,H=a[U][0]>=1?1:0,K=a[U][1]>=1?1:0,se=a[U][2]>=1?1:0,B=a[U][3]>=1?1:0,j=L-J+c,re=P-D+c,q=N-le+c,ee=V-_e+c,ue=L-Q+2*c,Me=P-me+2*c,pe=N-ye+2*c,Ue=V-Te+2*c,De=L-H+3*c,He=P-K+3*c,Ye=N-se+3*c,ke=V-B+3*c,X=L-1+4*c,ot=P-1+4*c,Je=N-1+4*c,et=V-1+4*c,I=g&255,be=u&255,he=v&255,xe=S&255,E=o[I+o[be+o[he+o[xe]]]]%32,y=o[I+J+o[be+D+o[he+le+o[xe+_e]]]]%32,Y=o[I+Q+o[be+me+o[he+ye+o[xe+Te]]]]%32,de=o[I+H+o[be+K+o[he+se+o[xe+B]]]]%32,ae=o[I+1+o[be+1+o[he+1+o[xe+1]]]]%32;let we=.6-L*L-P*P-N*N-V*V;we<0?h=0:(we*=we,h=we*we*this._dot4(r[E],L,P,N,V));let oe=.6-j*j-re*re-q*q-ee*ee;oe<0?f=0:(oe*=oe,f=oe*oe*this._dot4(r[y],j,re,q,ee));let ie=.6-ue*ue-Me*Me-pe*pe-Ue*Ue;ie<0?d=0:(ie*=ie,d=ie*ie*this._dot4(r[Y],ue,Me,pe,Ue));let te=.6-De*De-He*He-Ye*Ye-ke*ke;te<0?p=0:(te*=te,p=te*te*this._dot4(r[de],De,He,Ye,ke));let ve=.6-X*X-ot*ot-Je*Je-et*et;return ve<0?m=0:(ve*=ve,m=ve*ve*this._dot4(r[ae],X,ot,Je,et)),27*(h+f+d+p+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}}class qn extends Xi{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xt(this.width,this.height,{type:Wt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ot({defines:Object.assign({},wa.defines),uniforms:cn.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:gn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Up,this.normalMaterial.blending=gn,this.pdMaterial=new Ot({defines:Object.assign({},Ta.defines),uniforms:cn.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ot({defines:Object.assign({},Ea.defines),uniforms:cn.clone(Ea.uniforms),vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,blending:gn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ot({uniforms:cn.clone(is.uniforms),vertexShader:is.vertexShader,fragmentShader:is.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:el,blendDst:Mr,blendEquation:Jn,blendSrcAlpha:$o,blendDstAlpha:Mr,blendEquationAlpha:Jn}),this.blendMaterial=new Ot({uniforms:cn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Tu,blendSrc:el,blendDst:Mr,blendEquation:Jn,blendSrcAlpha:$o,blendDstAlpha:Mr,blendEquationAlpha:Jn}),this._fsQuad=new qr(null),this._originalClearColor=new Ke,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const s=new us;s.format=pi,s.type=cs,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:zt,magFilter:zt,type:Wt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=yf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case qn.OUTPUT.Off:break;case qn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=gn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new Kx,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Vr(s,e,e,Rn,vn);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}}qn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Zx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qs extends Xi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,a,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Xt(r,a,{type:Wt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Xt(r,a,{type:Wt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Zx;this.highPassUniforms=cn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ee(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cn.clone(is.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:is.vertexShader,fragmentShader:is.fragmentShader,premultipliedAlpha:!0,blending:ls,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ke,this._oldClearAlpha=1,this._basic=new Vs,this._fsQuad=new qr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ee(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=qs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ot({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}qs.BlurDirectionX=new Ee(1,0);qs.BlurDirectionY=new Ee(0,1);const Aa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Jx extends Xi{constructor(){super(),this.isOutputPass=!0,this.uniforms=cn.clone(Aa.uniforms),this.material=new of({name:Aa.name,uniforms:this.uniforms,vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader}),this._fsQuad=new qr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===to?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===uc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ra={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

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

		}`},Ca={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

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

		}`},qo={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

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

		}`};class Qx extends Xi{constructor(){super(),this._edgesRT=new Xt(1,1,{depthBuffer:!1,type:Wt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Xt(1,1,{depthBuffer:!1,type:Wt}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new jt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=hn,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new jt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=zt,this._searchTexture.minFilter=zt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=cn.clone(Ra.uniforms),this._materialEdges=new Ot({defines:Object.assign({},Ra.defines),uniforms:this._uniformsEdges,vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader}),this._uniformsWeights=cn.clone(Ca.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Ot({defines:Object.assign({},Ca.defines),uniforms:this._uniformsWeights,vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader}),this._uniformsBlend=cn.clone(qo.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Ot({uniforms:this._uniformsBlend,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader}),this._fsQuad=new qr(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const fr=new G;function An(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;fr.copy(e),fr[n]=0,fr.normalize();const c=.5*a/(a+o),h=1-fr.angleTo(i)/l;return Math.sign(fr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class Ys extends st{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new G,c=new G,h=new G(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,m=f.length/6,_=new G,g=.5/a;for(let u=0,v=0;u<f.length;u+=3,v+=2)switch(l.fromArray(f,u),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[u+0]=h.x*Math.sign(l.x)+c.x*r,f[u+1]=h.y*Math.sign(l.y)+c.y*r,f[u+2]=h.z*Math.sign(l.z)+c.z*r,d[u+0]=c.x,d[u+1]=c.y,d[u+2]=c.z,Math.floor(u/m)){case 0:_.set(1,0,0),p[v+0]=An(_,c,"z","y",r,n),p[v+1]=1-An(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),p[v+0]=1-An(_,c,"z","y",r,n),p[v+1]=1-An(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),p[v+0]=1-An(_,c,"x","z",r,e),p[v+1]=An(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),p[v+0]=1-An(_,c,"x","z",r,e),p[v+1]=1-An(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),p[v+0]=1-An(_,c,"x","y",r,e),p[v+1]=1-An(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),p[v+0]=An(_,c,"x","y",r,e),p[v+1]=1-An(_,c,"y","x",r,t);break}}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.segments,e.radius)}}const mi=(i,e,t)=>{let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function jx(i,e,t,n,s){const r=Math.floor(i),a=Math.floor(e),o=i-r,l=e-a,c=(r%t+t)%t,h=(c+1)%t,f=(a%n+n)%n,d=(f+1)%n,p=o*o*(3-2*o),m=l*l*(3-2*l),_=mi(c,f,s),g=mi(h,f,s),u=mi(c,d,s),v=mi(h,d,s);return _+(g-_)*p+(u-_)*m+(_-g-u+v)*p*m}function Mt(i,e,t,n,s,r){let a=0,o=.5,l=0;for(let c=0;c<s;c++)a+=o*jx(i*t,e*n,t,n,r+c*17),l+=o,o*=.5,t*=2,n*=2;return a/l}const Ht=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},mn=(i,e,t)=>i+(e-i)*t,dr=i=>Math.min(255,Math.max(0,i*255));let oo=16;function Kl(i,e,t){const n=new Vr(i,e,e,Rn);return n.wrapS=n.wrapT=$n,n.magFilter=hn,n.minFilter=di,n.generateMipmaps=!0,n.anisotropy=oo,t&&(n.colorSpace=Gt),n.needsUpdate=!0,n}function bf(i,e,t){const n=new Uint8Array(e*e*4),s=t*e/512,r=e-1;for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=(i[a*e+(o-1&r)]-i[a*e+(o+1&r)])*s,c=(i[(a-1&r)*e+o]-i[(a+1&r)*e+o])*s,h=1/Math.hypot(l,c,1),f=(a*e+o)*4;n[f]=(l*h*.5+.5)*255,n[f+1]=(c*h*.5+.5)*255,n[f+2]=(h*.5+.5)*255,n[f+3]=255}return Kl(n,e,!1)}function yn(i,e,t,n={}){const s=i*i,r=new Uint8Array(s*4),a=new Uint8Array(s*4),o=new Float32Array(s),l={};for(let h=0;h<i;h++)for(let f=0;f<i;f++){l.h=.5,l.r=l.g=l.b=.5,l.rough=.8,l.metal=0,t(f/i,h/i,l);const d=h*i+f,p=d*4;o[d]=l.h,r[p]=dr(l.r),r[p+1]=dr(l.g),r[p+2]=dr(l.b),r[p+3]=255,a[p]=255,a[p+1]=dr(l.rough),a[p+2]=dr(l.metal),a[p+3]=255}const c=Kl(a,i,!1);return new Qe({map:Kl(r,i,!0),normalMap:bf(o,i,e),roughnessMap:c,metalnessMap:c,roughness:1,metalness:1,...n})}function fu(i,e,t,n,s){const r=Math.floor(e*n),a=i*t+r%2*.5,o=Math.floor(a),l=a-o,c=e*n-r;return{d:Math.min(Math.min(l,1-l)/t,Math.min(c,1-c)/n),id:mi((o%t+t)%t,r,s)}}function Pa(i,e,t,n=.57,s=0){return yn(i,2.5,(r,a,o)=>{const l=Mt(r,a,6,6,5,t),c=Mt(r,a,48,48,3,t+3),h=Mt(r,a,32,2,3,t+9),f=Ht(n,n+.04,l*.7+c*.2+h*.1),d=.85+.3*c-.2*Ht(.5,.7,h);o.r=mn(e[0]*d,.24+.2*c,f),o.g=mn(e[1]*d,.12+.08*c,f),o.b=mn(e[2]*d,.06,f),o.rough=mn(.36+.25*c,.92,f),o.metal=s*(1-f),o.h=.5+c*.08-f*.12})}function $x(i){oo=i.capabilities.getMaxAnisotropy();const e={};e.paving=yn(1024,2.4,(n,s,r)=>{const a=fu(n,s,4,8,3),o=Ht(.005,.0015,a.d),l=Mt(n,s,96,96,3,4),c=Mt(n,s,3,3,5,5),h=Ht(.62,.7,Mt(n,s,160,160,2,6));let f=(.43+.13*(a.id-.5)+.1*(l-.5)-.1*h)*(.8+.4*c)*(1-.6*o);r.r=f*1.03,r.g=f,r.b=f*.95,r.rough=mn(.72,.38,Ht(.5,.62,c))+o*.2,r.h=Ht(0,.012,a.d)*.7+l*.3+a.id*.1}),e.stone=yn(1024,7,(n,s,r)=>{const a=fu(n,s,3,6,13),o=Ht(.009,.002,a.d),l=Mt(n,s,64,64,4,14),c=Mt(n,s,4,4,5,15),h=Ht(.5,.62,c)*Ht(.03,0,a.d)+Ht(.6,.7,c)*.6;let f=(.4+.16*(a.id-.5)+.16*(l-.5))*(.75+.5*c)*(1-.65*o);r.r=mn(f*1.05,.13,h*.7),r.g=mn(f,.19,h*.7),r.b=mn(f*.9,.08,h*.7),r.rough=.9,r.h=Ht(0,.02,a.d)*.6+l*.5+a.id*.2}),e.grass=yn(1024,6,(n,s,r)=>{const a=Mt(n,s,4,4,5,21),o=Mt(n,s,200,200,2,22),l=Mt(n,s,40,40,3,23),c=.55+.6*o*l+.3*a;r.r=.13*c+.05*a,r.g=.27*c,r.b=.06*c,r.rough=.85,r.h=o*.7+l*.3}),e.asphalt=yn(1024,3,(n,s,r)=>{const a=Mt(n,s,256,256,2,31),o=Mt(n,s,5,5,5,32),l=Ht(.006,.002,Math.abs(Mt(n,s,4,4,5,33)-.5)),c=(.1+.07*a+.05*o)*(1-.5*l);r.r=c,r.g=c,r.b=c*1.04,r.rough=.9-.1*Ht(.52,.6,o),r.h=a-l}),e.concrete=yn(512,3,(n,s,r)=>{const a=Mt(n,s,3,3,6,41),o=Mt(n,s,96,96,3,42),l=Ht(.5,.7,Mt(n,s,40,2,4,43)),c=(.5+.4*(a-.5)+.1*(o-.5))*(1-.3*l);r.r=c,r.g=c*.99,r.b=c*.96,r.rough=.86,r.h=a*.4+o*.4}),e.wood=yn(512,4,(n,s,r)=>{const a=Math.floor(s*6),o=s*6-a,l=Mt(n,s,3,90,4,51+a),c=Ht(.06,.02,Math.min(o,1-o)),h=.75+.3*mi(a,0,52);r.r=(.33+.2*l)*h*(1-.7*c),r.g=(.2+.13*l)*h*(1-.7*c),r.b=(.1+.07*l)*h*(1-.7*c),r.rough=.55+.25*l,r.h=l*.5-c}),e.bark=yn(512,9,(n,s,r)=>{const a=Mt(n,s,14,3,5,61),o=Mt(n,s,60,20,3,62),l=.1+.22*a*a+.06*o;r.r=l*1.1,r.g=l*.95,r.b=l*.75,r.rough=.95,r.h=a+o*.2}),e.tile=yn(512,9,(n,s,r)=>{const a=Math.sqrt(Math.max(0,1-Math.pow(n*8%1*2-1,2))),o=s*12%1,l=Mt(n,s,48,48,3,71),c=Mt(n,s,4,4,4,72),h=(.13+.07*a+.06*l)*(.75+.5*c)*(1-.5*Ht(.12,0,o));r.r=h*.92,r.g=h,r.b=h*1.04,r.rough=.3+.4*c,r.h=a*.8+o*.35+l*.05}),e.steel=yn(512,2,(n,s,r)=>{const a=Mt(n,s,8,8,5,81),o=Ht(.6,.64,Mt(n,s,2,160,3,82)),l=.07+.06*a+.05*o;r.r=l,r.g=l,r.b=l*1.05,r.rough=.34+.3*a,r.metal=1,r.h=a*.4+o*.3}),e.galv=yn(512,2,(n,s,r)=>{const a=Mt(n,s,40,40,2,91),o=Mt(n,s,4,4,5,92),l=.5+.22*(a-.5)+.2*(o-.5);r.r=l,r.g=l*1.01,r.b=l*1.04,r.rough=.45+.3*o,r.metal=.9,r.h=a}),e.fins=yn(256,10,(n,s,r)=>{const a=Math.sin(n*Math.PI*2*24),o=.55+.25*a;r.r=o,r.g=o,r.b=o*1.03,r.rough=.32,r.metal=1,r.h=a*.5+.5}),e.pcb=yn(512,3,(n,s,r)=>{const o=Math.floor(n*24),l=Math.floor(s*24),c=n*24-o,h=s*24-l,f=mi(o,l,101),d=mi(o>>2,l>>2,102),p=d<.45?Math.abs(h-.5):d<.8?Math.abs(c-.5):Math.abs(c-h)*.7,m=Ht(.16,.1,p%.34)*(f<.85?1:0),_=Ht(.2,.14,Math.hypot(c-.5,h-.5))*(f>.9?1:0),g=mi(o>>1,l>>1,103)>.93?Ht(.45,.4,Math.max(Math.abs(c-.5),Math.abs(h-.5))):0,u=Mt(n,s,96,96,2,104);r.r=mn(mn(.02,.05,m),.75,Math.max(_,g)),r.g=mn(mn(.035,.09,m),.6,Math.max(_,g)),r.b=mn(mn(.03,.06,m),.25,Math.max(_,g)),r.rough=mn(.55,.3,Math.max(_,g))+u*.1,r.metal=Math.max(_,g),r.h=m*.3+g*.6+_*.5}),e.red=Pa(512,[.42,.05,.035],111,.62),e.white=Pa(512,[.82,.83,.84],121,.66),e.green=Pa(512,[.1,.22,.16],131,.6),e.yellow=Pa(512,[.8,.55,.04],141,.6);const t=(n,s,r=0,a={})=>new Qe({color:n,roughness:s,metalness:r,...a});return e.shroud=t(723724,.5,.2,{normalMap:e.concrete.normalMap,normalScale:new Ee(.25,.25)}),e.porcelain=t(4858902,.18),e.glass=t(660512,.06,.9),e.gold=t(14263361,.3,1),e.copper=t(12085306,.3,1),e.rubber=t(526344,.9),e.lotus=t(2379807,.45,0,{side:Lt}),e.emit=(n,s)=>new Qe({color:0,emissive:n,emissiveIntensity:s}),e}function ev(){const e=new Float32Array(262144);for(let t=0;t<512;t++)for(let n=0;n<512;n++)e[t*512+n]=Mt(n/512,t/512,6,6,5,201)+.4*Mt(n/512,t/512,24,24,3,202);return bf(e,512,10)}function tv(){const i=document.createElement("canvas");i.width=64,i.height=512;const e=i.getContext("2d");e.strokeStyle="#3c4a1c",e.lineWidth=2,e.beginPath(),e.moveTo(32,0),e.lineTo(32,512),e.stroke();for(let n=3;n<509;n+=4)for(const s of[-1,1]){const r=8+Math.random()*7,a=(.5+Math.random()*.5)*s,o=38+Math.random()*44;e.fillStyle=`rgb(${o*.62|0},${o|0},${o*.22|0})`,e.save(),e.translate(32,n+Math.random()*5),e.rotate(a),e.beginPath(),e.ellipse(0,r/2,1.7,r/2,0,0,7),e.fill(),e.restore()}const t=new Si(i);return t.colorSpace=Gt,t.anisotropy=oo,t}function Ui(i,{w:e=512,h:t=256,bg:n="#0a2a4a",fg:s="#ffffff",font:r='bold 64px "Microsoft YaHei","Segoe UI",sans-serif'}={}){const a=document.createElement("canvas");a.width=e,a.height=t;const o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,e,t),o.fillStyle=s,o.textAlign="center",o.textBaseline="middle",i.forEach((c,h)=>{o.font=c.font||r,o.fillStyle=c.color||s,o.fillText(c.text,e/2,t*(h+.5)/i.length)});const l=new Si(a);return l.colorSpace=Gt,l.anisotropy=oo,l}function kr(i,e,t=0,n=0,s=0){const r=i.attributes.position,a=i.attributes.normal,o=i.attributes.uv;for(let l=0;l<r.count;l++){const c=Math.abs(a.getX(l)),h=Math.abs(a.getY(l)),f=Math.abs(a.getZ(l)),d=r.getX(l)+t,p=r.getY(l)+n,m=r.getZ(l)+s;c>=h&&c>=f?o.setXY(l,m/e,p/e):h>=f?o.setXY(l,d/e,m/e):o.setXY(l,d/e,p/e)}return i}class lo extends ft{constructor(){const e=lo.SkyShader,t=new Ot({name:e.name,uniforms:cn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:xn,depthWrite:!1});super(new st(1,1,1),t),this.isSky=!0}}lo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new G},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};class nv extends ft{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new G(.70707,.70707,0),f=new Ke(t.sunColor!==void 0?t.sunColor:16777215),d=new Ke(t.waterColor!==void 0?t.waterColor:8355711),p=t.eye!==void 0?t.eye:new G(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:Hi,g=t.fog!==void 0?t.fog:!1,u=new hi,v=new G,S=new G,M=new G,T=new ut,A=new G(0,0,-1),x=new Ct,b=new G,L=new G,P=new Ct,N=new ut,V=new wn,F=new Xt(s,r,{type:Wt}),C={name:"MirrorShader",uniforms:cn.merge([Oe.fog,Oe.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ut},sunColor:{value:new Ke(8355711)},sunDirection:{value:new G(.70707,.70707,0)},eye:{value:new G},waterColor:{value:new Ke(5592405)}}]),vertexShader:`
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
				}`},O=new Ot({name:C.name,uniforms:cn.clone(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,lights:!0,side:_,fog:g});O.uniforms.mirrorSampler.value=F.texture,O.uniforms.textureMatrix.value=N,O.uniforms.alpha.value=o,O.uniforms.time.value=l,O.uniforms.normalSampler.value=c,O.uniforms.sunColor.value=f,O.uniforms.waterColor.value=d,O.uniforms.sunDirection.value=h,O.uniforms.distortionScale.value=m,O.uniforms.eye.value=p,n.material=O,n.onBeforeRender=function(k,w,z){if(S.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition(z.matrixWorld),T.extractRotation(n.matrixWorld),v.set(0,0,1),v.applyMatrix4(T),b.subVectors(S,M),b.dot(v)>0)return;b.reflect(v).negate(),b.add(S),T.extractRotation(z.matrixWorld),A.set(0,0,-1),A.applyMatrix4(T),A.add(M),L.subVectors(S,A),L.reflect(v).negate(),L.add(S),V.position.copy(b),V.up.set(0,1,0),V.up.applyMatrix4(T),V.up.reflect(v),V.lookAt(L),V.far=z.far,V.updateMatrixWorld(),V.projectionMatrix.copy(z.projectionMatrix),N.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),N.multiply(V.projectionMatrix),N.multiply(V.matrixWorldInverse),u.setFromNormalAndCoplanarPoint(v,S),u.applyMatrix4(V.matrixWorldInverse),x.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const U=V.projectionMatrix;P.x=(Math.sign(x.x)+U.elements[8])/U.elements[0],P.y=(Math.sign(x.y)+U.elements[9])/U.elements[5],P.z=-1,P.w=(1+U.elements[10])/U.elements[14],x.multiplyScalar(2/x.dot(P)),U.elements[2]=x.x,U.elements[6]=x.y,U.elements[10]=x.z+1-a,U.elements[14]=x.w,p.setFromMatrixPosition(z.matrixWorld);const J=k.getRenderTarget(),D=k.xr.enabled,le=k.shadowMap.autoUpdate;n.visible=!1,k.xr.enabled=!1,k.shadowMap.autoUpdate=!1,k.setRenderTarget(F),k.state.buffers.depth.setMask(!0),k.autoClear===!1&&k.clear(),k.render(w,V),n.visible=!0,k.xr.enabled=D,k.shadowMap.autoUpdate=le,k.setRenderTarget(J);const _e=z.viewport;_e!==void 0&&k.state.viewport(_e)}}}const Se=.8,bn=[[554,-351],[434,-334],[266,-206],[224,-83],[121,-32],[-40,66],[-168,149],[-286,212],[-349,191],[-429,112],[-488,-9],[-648,-130],[-826,-231],[-866,-108],[-838,10],[-865,-47],[-1246,-383],[-1464,-560],[-1705,-576],[-1851,-595],[-2079,-445],[-2213,-418],[-2509,-594],[-2598,-566],[-2630,-630],[-2503,-648],[-2369,-804],[-2313,-867],[-2141,-963],[-2099,-1028],[-2193,-1063],[-2274,-1161],[-2347,-1335],[-2469,-1430],[-2633,-1324],[-2705,-1387],[-2748,-1542],[-2835,-1580],[-2944,-1785],[-2915,-1940],[-2900,-2080],[-2450,-2370],[-2110,-2780],[-1900,-2900],[-1580,-2640],[-1430,-2630],[-1017,-2740],[-606,-2790],[-300,-2790],[-260,-2700],[-300,-2422],[-240,-2130],[-175,-2045],[50,-1840],[80,-1740],[165,-1560],[410,-1305],[535,-1125],[540,-1040],[590,-950],[595,-860],[550,-770],[620,-600],[689,-386]],Hr=[[22,-1208],[-48,-1542],[-64,-1727],[-111,-1866],[-205,-1844],[-267,-1953],[-280,-2084],[-424,-2077],[-456,-2005],[-463,-1812],[-410,-1539],[-187,-1349],[-72,-1275]],Di=[{x:-1680,z:-1340,r:150,name:"小瀛洲"},{x:-909,z:-1515,r:45,name:"湖心亭"},{x:-845,z:-1772,r:32,name:"阮公墩"}],nr=(i,e,t=[])=>{const n=[0];for(let s=1;s<i.length;s++)n.push(n[s-1]+Math.hypot(i[s][0]-i[s-1][0],i[s][1]-i[s-1][1]));return{pts:i,half:e,bridges:t,cum:n,len:n[n.length-1]}},ui=nr([[585,-790],[450,-871],[117,-1122],[8,-1204]],6,[{s:62,half:22,rise:3},{s:570,half:18,rise:2.4}]),ks=nr([[-250,-2415],[-414,-2347],[-625,-2292],[-1100,-2152],[-1645,-2015],[-2142,-1868],[-2586,-1642],[-2870,-1520]],8,[330,770,1210,1650,2090,2500].map(i=>({s:i,half:18,rise:2.6}))),zc=nr([[-300,-2070],[-215,-2150]],5,[{s:58,half:20,rise:2.2}]),Bc=nr([[-36,76],[-56,26]],2.5),kc=nr([[-2462,-736],[-2412,-712]],2.5),wf=[ui,ks,zc,Bc,kc],Ef=[[-60,16],[-700,-520],[-1900,-800],[-2404,-708]],Wi={湖滨路:[[[565,-276],[466,-241],[428,-168],[143,14],[-280,242],[-377,241],[-483,113],[-493,71],[-610,18],[-706,1],[-911,27]],12,"paving"],南山路:[[[-402,237],[-490,116],[-614,28],[-945,29],[-1018,-18],[-1283,-136],[-1450,-242],[-1846,-200],[-1987,-261],[-2106,-365],[-2254,-404],[-2370,-480],[-2429,-494],[-2659,-469],[-2719,-783],[-2687,-973],[-2760,-1407],[-3077,-2029]],14,"asphalt"],杨公堤:[[[-3077,-2029],[-2465,-2415],[-2133,-2829],[-2005,-2929],[-1904,-2956],[-1808,-2924],[-1557,-2679],[-1434,-2679],[-1017,-2789],[-606,-2836],[-269,-2842],[-151,-2884]],12,"asphalt"],北山街:[[[-151,-2884],[-225,-2749],[-224,-2663],[-273,-2422],[-207,-2142],[-146,-2063],[76,-1858],[105,-1747],[188,-1575],[435,-1322],[465,-1255],[561,-1134],[566,-1047],[596,-985],[620,-874],[620,-840],[577,-757],[661,-567],[807,-238]],11,"asphalt"],环城西路:[[[2078,-573],[887,-268],[807,-238],[467,-180]],18,"asphalt"],庆春路:[[[467,-180],[471,443],[430,1128],[431,1540]],24,"asphalt"],延安路:[[[1803,284],[-548,369],[-1483,421]],24,"asphalt"],解放路:[[[-402,237],[-385,248],[-406,380],[-366,1125],[-365,1415]],20,"asphalt"],平海路:[[[-17,110],[26,1106]],14,"asphalt"],学士路:[[[153,59],[160,348],[182,830]],10,"asphalt"],长生路:[[[307,-76],[345,720]],10,"asphalt"],仁和路:[[[-148,181],[-142,357],[-125,720]],10,"asphalt"],邮电路:[[[-268,372],[-243,955]],10,"asphalt"],吴山路:[[[-719,472],[170,456]],10,"asphalt"],东坡路:[[[-274,252],[285,227],[465,125]],12,"paving"],圣塘路:[[[467,-180],[428,-168]],12,"asphalt"]},La=Wi,Ks=[...La.湖滨路[0].slice(2,6),...La.南山路[0],...La.杨公堤[0].slice(1),...La.北山街[0].slice(1),[640,-209],[480,-183]],Qa=[["in77 A",-138,-31,176,234,24,"in77 · A"],["in77 B",-262,-160,262,345,24,"in77 · B"],["in77 D",-74,-27,253,335,26,"in77 · D"],["东坡大世界",-137,-80,255,340,22,"东坡大世界"],["in77 E",-375,-280,270,360,26,"in77 · E"],["in77 C1",-133,-17,385,451,30,"in77 · C1"],["in77 C2",-262,-147,385,455,30,"in77 · C2"],["in77 C3",-386,-277,391,447,30,"in77 · C3"],["湖滨in88",7,145,158,218,22,"湖滨 in88"],["Apple 西湖",8,36,283,314,15,"Apple 西湖"],["工联CC",11,137,375,448,34,"工联CC"],["工联CC二期",80,159,462,538,40,""],["解百",-537,-420,397,461,36,"解百"],["解百新世纪",-528,-417,474,561,60,"解百新世纪"],["涌金广场",-858,-734,229,364,70,"涌金广场"],["杭州嘉里中心",601,765,103,293,80,"嘉里中心 KERRY"]],Xn=[{name:"凤起路",en:"Fengqi Road",x:1006,z:318},{name:"龙翔桥",en:"Longxiangqiao",x:79,z:355},{name:"定安路",en:"Ding'an Road",x:-900,z:732}],Fn={leifeng:[-2784,-654],baochu:[770,-1186],chenghuang:[-1819,606],pavilion:[-10,-1245],fountain:[-34,3],qjnt:[-1300,5300],lakeCentre:[-1150,-1450]};function Kn(i,e,t){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const a=i[s],o=i[r];a[1]>t!=o[1]>t&&e<(o[0]-a[0])*(t-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n}function ds(i,e,t,n){let s={d:1e9,s:0,i:0};for(let r=0;r<i.length-1;r++){const a=i[r][0],o=i[r][1],l=i[r+1][0]-a,c=i[r+1][1]-o,h=l*l+c*c,f=Math.max(0,Math.min(1,((t-a)*l+(n-o)*c)/h)),d=Math.hypot(t-a-l*f,n-o-c*f);d<s.d&&(s={d,s:(e?e[r]:0)+Math.sqrt(h)*f,i:r})}return s}function Mi(i,e){e=Math.max(0,Math.min(i.len,e));let t=0;for(;t<i.pts.length-2&&i.cum[t+1]<e;)t++;const n=i.pts[t],s=i.pts[t+1],r=i.cum[t+1]-i.cum[t],a=(e-i.cum[t])/r;return[n[0]+(s[0]-n[0])*a,n[1]+(s[1]-n[1])*a,(s[0]-n[0])/r,(s[1]-n[1])/r]}const Yr=nr,Zl=(i,e)=>{let t=0;for(const n of i.bridges)Math.abs(e-n.s)<n.half&&(t=Math.max(t,n.rise*.5*(1+Math.cos(Math.PI*(e-n.s)/n.half))));return t},Tf=(i,e,t,n)=>{const s=ds(i.pts,i.cum,e,t);return s.d<=i.half+n?s:null},iv=[ui,ks,zc];function tn(i,e){if(i<700&&e<-700)for(const t of iv){const n=Tf(t,i,e,1);if(n)return Se+Zl(t,n.s)}return Se}function En(i,e){if(!Kn(bn,i,e))return!0;for(const t of wf)if(Tf(t,i,e,-.5))return!0;if(Kn(Hr,i,e))return!0;for(const t of Di)if(Math.hypot(i-t.x,e-t.z)<t.r-1)return!0;return!1}const Af=[[565,-290],[466,-255],[428,-182],[143,0],[-280,228],[-377,227],[-483,99],[-610,30],[-911,40],[-911,9e3],[2500,9e3],[2500,-560],[887,-282],[807,-252]],Ls={leifeng:[-2800,-640,85,40],baochu:[800,-1250,180,70],chenghuang:[-1819,606,240,60]};function Ni(i,e,t){let n=!1;for(let s=0,r=i.length-2;s<i.length;r=s,s+=2)i[s+1]>t!=i[r+1]>t&&e<(i[r]-i[s])*(t-i[s+1])/(i[r+1]-i[s+1])+i[s]&&(n=!n);return n}const Rf=(i,e,t,n)=>Ni(i,e,t)||Ni(i,e+n,t)||Ni(i,e-n,t)||Ni(i,e,t+n)||Ni(i,e,t-n),Yo=new G(-.5,.62,-.6).normalize(),sv=21e-5,rv=new Ke(.62,.69,.76);function av(i,e){i.fog=new wc(rv,sv);const t=new lo;t.scale.setScalar(8e3);const n=t.material.uniforms;n.turbidity.value=3.2,n.rayleigh.value=1.1,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.86,n.sunPosition.value.copy(Yo),n.cloudCoverage.value=.3,n.cloudDensity.value=.45,n.cloudElevation.value=.5;const s=new Wu;s.add(t);const r=new Br(e);i.environment=r.fromScene(s,0,.1,2e4).texture,r.dispose(),i.environmentIntensity=.65,i.add(t);const a=new kp(16772303,4.4);a.castShadow=!0,a.shadow.mapSize.set(4096,4096);const o=a.shadow.camera;o.left=o.bottom=-90,o.right=o.top=90,o.near=1,o.far=520,a.shadow.bias=-4e-4,a.shadow.normalBias=.06,i.add(a,a.target),i.add(new Fp(13622512,5722175,.55));const l=new nv(new Ft(24e3,24e3),{textureWidth:1024,textureHeight:1024,waterNormals:ev(),sunDirection:Yo,sunColor:16774368,waterColor:1919556,distortionScale:2.2,fog:!0});l.rotation.x=-Math.PI/2,l.material.uniforms.size.value=5,i.add(l);const[c,h]=Fn.lakeCentre;function f(d,p,m,_,g,u,v,S){const T=[],A=[];for(let b=0;b<=420;b++){const L=b/420,P=p+(m-p)*L,N=Math.min(1,Math.min(L,1-L)*9),V=(_+g*(Mt(L,.3,S,1,5,v)-.3)*1.6)*N,F=Math.cos(P),C=Math.sin(P);for(const[O,k]of[[-2.4,0],[-1.3,.55],[-.5,.9],[0,1],[1.2,0]])T.push(c+F*(d+O*V),V*k-.5,h+C*(d+O*V));if(b<420)for(let O=0;O<4;O++){const k=b*5+O;A.push(k,k+5,k+1,k+1,k+5,k+6)}}const x=new wt;x.setAttribute("position",new Ze(T,3)),x.setIndex(A),x.computeVertexNormals(),i.add(new ft(x,new Qe({color:u,roughness:1,side:Lt})))}return f(2400,2.62,6.42,60,80,2374430,311,30),f(3050,2.5,6.5,130,140,2769444,321,22),f(3900,2.4,6.6,210,220,3164459,331,14),{sun:a,water:l,sky:t,update(d,p,m){l.material.uniforms.time.value+=p*.7,n.time.value=d;const _=Math.round(m.x/4)*4,g=Math.round(m.z/4)*4;a.target.position.set(_,0,g),a.position.set(_,0,g).addScaledVector(Yo,260)}}}function ov(i,e){const t=new Vt;i.add(t);const n=[],s=[],r=[],a=[];let o=11;const l=(B=0,j=1)=>B+(o=o*16807%2147483647)/2147483647*(j-B),c=48,h=new Map,f={boxes:[],circles:[],polys:[]},d=(B,j)=>{const re=B*100003+j;let q=h.get(re);return q||h.set(re,q={boxes:[],circles:[],polys:[]}),q},p=(B,j,re,q,ee,ue)=>{for(let Me=Math.floor((re-3)/c);Me<=Math.floor((q+3)/c);Me++)for(let pe=Math.floor((ee-3)/c);pe<=Math.floor((ue+3)/c);pe++)d(Me,pe)[B].push(j)},m=B=>p("boxes",B,B.min.x,B.max.x,B.min.z,B.max.z),_=B=>p("circles",B,B.x-B.r,B.x+B.r,B.z-B.r,B.z+B.r),g=(B,j)=>h.get(Math.floor(B/c)*100003+Math.floor(j/c))||f,u=B=>{let j=1e9,re=-1e9,q=1e9,ee=-1e9;for(let ue=0;ue<B.pts.length;ue+=2)j=Math.min(j,B.pts[ue]),re=Math.max(re,B.pts[ue]),q=Math.min(q,B.pts[ue+1]),ee=Math.max(ee,B.pts[ue+1]);p("polys",B,j,re,q,ee)},v=(B,j)=>g(B,j).polys.some(re=>Ni(re.pts,B,j));function S(B,j){const re=B||j?new Vt:i,q=B||j?new Vt:t;(B||j)&&(re.position.set(B,0,j),q.position.set(B,0,j),i.add(re),t.add(q),re.updateMatrixWorld(),q.updateMatrixWorld());function ee(pe,Ue,De,He,Ye,{collide:ke=!1,ry:X=0,rx:ot=0,shadow:Je=!0,parent:et=q}={}){const I=new ft(pe,Ue);return I.position.set(De,He,Ye),I.rotation.set(ot,X,0),I.castShadow=Je,I.receiveShadow=!0,et.add(I),ke&&(I.updateWorldMatrix(!0,!1),m(new Cn().setFromObject(I))),I}return{scene:re,M:e,solids:q,lamps:n,tick:s,noAO:r,dyn:a,rnd:l,add:ee,box:(pe,Ue,De,He,Ye,ke,X,{s:ot=2,r:Je=0,...et}={})=>ee(kr(Je?new Ys(pe,Ue,De,3,Je):new st(pe,Ue,De),ot,Ye,ke,X),He,Ye,ke,X,et),cyl:(pe,Ue,De,He,Ye,ke,X,ot={},Je=20)=>ee(new gt(pe,Ue,De,Je),He,Ye,ke,X,ot),near:g,dx:B,dz:j,inBuilding:v,polys:{push:u},colliders:{push:(...pe)=>pe.forEach(Ue=>m(Ue.translate(new G(B,0,j))))},circles:{push:(...pe)=>pe.forEach(Ue=>_({x:Ue.x+B,z:Ue.z+j,r:Ue.r})),some:()=>!1},shifted:(pe,Ue)=>S(pe,Ue)}}const M=S(0,0),{add:T,box:A}=M,x=Se,b=(B,j=so)=>{const re=new j;return B.forEach(([q,ee],ue)=>ue?re.lineTo(q,-ee):re.moveTo(q,-ee)),re},L=(B,j,re,q)=>{const ee=new Dc(B).rotateX(-Math.PI/2),ue=ee.attributes.uv;for(let pe=0;pe<ue.count;pe++)ue.setXY(pe,ue.getX(pe)/q,ue.getY(pe)/q);const Me=new ft(ee,j);return Me.position.y=re,Me.receiveShadow=!0,t.add(Me),Me},P=b([[-6500,-7e3],[5e3,-7e3],[5e3,9500],[-6500,9500]]);P.holes.push(b(bn,Gl)),L(P,e.grass,x,4),L(b(Hr),e.grass,x,4);const N=(B,j=2)=>{const re=B.clone();return re.polygonOffset=!0,re.polygonOffsetFactor=re.polygonOffsetUnits=-j,re};L(b([[565,-290],[466,-255],[428,-182],[143,0],[-280,228],[-377,227],[-483,99],[-610,30],[-911,40],[-911,9e3],[2500,9e3],[2500,-560],[887,-282],[807,-252]]),N(e.concrete),x+.03,3);const V=e.stone.clone();V.side=Lt;const F=B=>{const j=[],re=[],q=[];let ee=0;for(let Me=0;Me<=B.length;Me++){const pe=B[Me%B.length],Ue=B[(Me+B.length-1)%B.length];if(Me&&(ee+=Math.hypot(pe[0]-Ue[0],pe[1]-Ue[1])),j.push(pe[0],x,pe[1],pe[0],-1.6,pe[1]),re.push(ee/2,0,ee/2,-1.2),Me){const De=Me*2-2;q.push(De,De+1,De+2,De+2,De+1,De+3)}}const ue=new wt;ue.setAttribute("position",new Ze(j,3)),ue.setAttribute("uv",new Ze(re,2)),ue.setIndex(q),ue.computeVertexNormals(),t.add(new ft(ue,V))};F(bn),F(Hr);for(const B of Di)T(kr(new gt(B.r,B.r+1,2.6,56),2),[e.stone,e.grass,e.stone],B.x,x-1.3,B.z).castShadow=!1;function C(B,j,re,q,{tile:ee=4,offset:ue=0}={}){const Me=[],pe=[],Ue=[];let De=0;for(let ke=0;ke<B.length;ke++){const X=B[Math.max(0,ke-1)],ot=B[Math.min(B.length-1,ke+1)],Je=Math.hypot(ot[0]-X[0],ot[1]-X[1])||1,et=-(ot[1]-X[1])/Je,I=(ot[0]-X[0])/Je;ke&&(De+=Math.hypot(B[ke][0]-B[ke-1][0],B[ke][1]-B[ke-1][1]));for(const be of[1,-1])Me.push(B[ke][0]+et*(ue+be*j/2),q,B[ke][1]+I*(ue+be*j/2)),pe.push(be*j/2/ee,De/ee);if(ke){const be=ke*2-2;Ue.push(be,be+1,be+2,be+2,be+1,be+3)}}const He=new wt;He.setAttribute("position",new Ze(Me,3)),He.setAttribute("uv",new Ze(pe,2)),He.setIndex(Ue),He.computeVertexNormals();const Ye=new ft(He,re);return re.side=Lt,Ye.receiveShadow=!0,t.add(Ye),Ye}const O=(B,j=30)=>{const re=[];for(let q=0;q<B.length-1;q++){const ee=B[q],ue=B[q+1],Me=Math.max(1,Math.round(Math.hypot(ue[0]-ee[0],ue[1]-ee[1])/j));for(let pe=0;pe<Me;pe++)re.push([ee[0]+(ue[0]-ee[0])*pe/Me,ee[1]+(ue[1]-ee[1])*pe/Me])}return re.push(B[B.length-1]),re},k=N(e.asphalt,4),w=N(e.paving,4),z=N(new Qe({color:15131346,roughness:.6}),7),U=N(e.concrete,3);for(const[B,j,re]of Object.values(Wi)){const q=O(B);if(re==="asphalt"){if(C(q,j+5,U,x+.05,{tile:3}),C(q,j,k,x+.07),C(q,.2,z,x+.09),j>=14)for(const ee of[-1,1])C(q,.15,z,x+.09,{offset:ee*(j/2-.5)})}else C(q,j,w,x+.07,{tile:2})}const J=O(bn.slice(1,16),15),D=J[5][0]-J[3][0],le=J[5][1]-J[3][1],_e=Math.hypot(D,le),Q=En(J[4][0]-le/_e*6,J[4][1]+D/_e*6)&&!En(J[4][0]+le/_e*6,J[4][1]-D/_e*6)?1:-1;C(J,9,w,x+.06,{tile:2,offset:Q*5.5}),C(O([[-2462,-736],[-2560,-700],[-2700,-680],[-2770,-660]]),6,w,x+.1,{tile:2});const me=[],ye=[];for(const B of[ui,ks,zc]){const j=Math.ceil(B.len/8),re=B.len/j;for(let q=0;q<j;q++){const ee=(q+.5)*re,[ue,Me,pe,Ue]=Mi(B,ee),De=Zl(B,ee-re/2),He=Zl(B,ee+re/2),Ye=B.bridges.some(X=>Math.abs(ee-X.s)<X.half-4),ke={x:ue,z:Me,y:x+(De+He)/2,yaw:Math.atan2(pe,Ue),pitch:-Math.atan2(He-De,re),len:re+.3,w:B.half*2,thick:Ye?.9:3.4};if(me.push(ke),B.bridges.some(X=>Math.abs(ee-X.s)<X.half+2))for(const X of[-1,1])ye.push({...ke,x:ue-Ue*X*(B.half-.3),z:Me+pe*X*(B.half-.3)})}}const Te=new Dt;Te.rotation.order="YXZ";const H=e.paving.clone();for(const B of["map","normalMap","roughnessMap"])H[B]=H[B].clone(),H[B].repeat.set(6,4);H.metalnessMap=H.roughnessMap;const K=new on(new st(1,1,1).translate(0,-.5,0),H,me.length);me.forEach((B,j)=>{Te.position.set(B.x,B.y,B.z),Te.rotation.set(B.pitch,B.yaw,0),Te.scale.set(B.w,B.thick,B.len),Te.updateMatrix(),K.setMatrixAt(j,Te.matrix)});const se=new on(new st(1,1,1).translate(0,.5,0),e.stone,ye.length*2);ye.forEach((B,j)=>{Te.position.set(B.x,B.y,B.z),Te.rotation.set(B.pitch,B.yaw,0),Te.scale.set(.3,1.1,.3),Te.updateMatrix(),se.setMatrixAt(j*2,Te.matrix),Te.position.y=B.y+.85,Te.scale.set(.16,.2,B.len),Te.updateMatrix(),se.setMatrixAt(j*2+1,Te.matrix)});for(const B of[K,se])B.castShadow=B.receiveShadow=!0,B.frustumCulled=!1,t.add(B);for(const B of[Bc,kc]){const[j,re,q,ee]=Mi(B,B.len/2);A(B.half*2,.25,B.len+4,e.wood,j,x-.1,re,{s:1}).rotation.y=Math.atan2(q,ee);for(const ue of[.1,.5,.9])for(const Me of[-1,1]){const[pe,Ue]=Mi(B,B.len*ue);M.cyl(.12,.12,2.6,e.wood,pe-ee*Me*B.half,x-1.1,Ue+q*Me*B.half,{},8)}}return M.ribbon=C,M.dense=O,M.over=N,M}function ss(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new wt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0;const f=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let m=0;m<p.count;++m)f.push(p.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(const h in r){const f=du(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][d]);const m=du(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function du(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Hn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<t;m++){const _=h.getComponent(d,m);o.setComponent(d+f,m,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function lv(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");for(let s=0;s<300;s++){const r=Math.random()*6.3,a=Math.sqrt(Math.random())*104,o=80+Math.random()*120,l=4+Math.random()*2.6,c=9+Math.random()*6;t.save(),t.translate(256/2+Math.cos(r)*a,256/2+Math.sin(r)*a),t.rotate(Math.random()*6.3),t.fillStyle=`rgb(${o*.93|0},${o|0},${o*.72|0})`,t.beginPath(),t.moveTo(-c,0),t.quadraticCurveTo(0,-l,c,0),t.quadraticCurveTo(0,l,-c,0),t.fill(),t.strokeStyle=`rgba(${o*.6|0},${o*.7|0},${o*.45|0},.9)`,t.lineWidth=.7,t.beginPath(),t.moveTo(-c,0),t.lineTo(c,0),t.stroke(),t.restore()}const n=new Si(e);return n.colorSpace=Gt,n.anisotropy=8,n}function cv(i,e,t){const n=new G(0,6.4,0),s=3.4,r=2.6,a=[],o=[],l=[],c=[],h=[],f=[];for(let S=0;S<170;S++){const M=e(0,6.283),T=e(-.45,1),A=Math.sqrt(1-T*T),x=new G(Math.cos(M)*A,T,Math.sin(M)*A),b=.45+.55*Math.sqrt(e()),L=new G(x.x*s*b,x.y*r*b,x.z*s*b).add(n),P=e(.85,1.25),N=x.clone().add(new G(e(-.6,.6),e(-.6,.6),e(-.6,.6))).normalize(),V=new G(e(-1,1),e(-1,1),e(-1,1)).cross(N).normalize(),F=N.clone().cross(V),C=x.clone().multiplyScalar(.8).add(new G(0,.4,0)).normalize(),O=(.42+.58*b)*(.72+.28*(x.y*.5+.5)),k=a.length/3;for(const[w,z]of[[-1,-1],[1,-1],[1,1],[-1,1]])a.push(L.x+(V.x*w+F.x*z)*P,L.y+(V.y*w+F.y*z)*P,L.z+(V.z*w+F.z*z)*P),o.push(w*.5+.5,z*.5+.5),l.push(C.x,C.y,C.z),c.push(O,O,O);h.push(k,k+1,k+2,k,k+2,k+3,k,k+2,k+1,k,k+3,k+2),S%28===0&&f.push(L.clone().lerp(n,.35))}const d=new wt;d.setAttribute("position",new Ze(a,3)),d.setAttribute("uv",new Ze(o,2)),d.setAttribute("normal",new Ze(l,3)),d.setAttribute("color",new Ze(c,3)),d.setIndex(h);const p=[new gt(.17,.3,3.7,9).translate(0,1.85,0)];for(const S of f)p.push(new er(new io([new G(0,3.3,0),new G(S.x*.35,4.6,S.z*.35),S]),6,.075,6));const m=kr(ss(p),1.2),_=lv(),g=S=>{S.uniforms.uTime=t,S.vertexShader=`uniform float uTime;
`+S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      vec4 wp=instanceMatrix*vec4(position,1.); float sw=max(0.,position.y-3.2)*.045;
      transformed.x+=sin(uTime*1.1+wp.x*.21+wp.z*.13+position.y)*sw; transformed.z+=cos(uTime*.8+wp.z*.19+position.x)*sw*.8;
      #endif`)},u=new Qe({map:_,alphaTest:.25,vertexColors:!0,roughness:.9});u.onBeforeCompile=g;const v=new Ic({depthPacking:Fu,map:_,alphaTest:.25});return v.onBeforeCompile=g,{leaf:d,trunk:m,leafMat:u,depthMat:v}}function pr(i,e,t,n){const s=i*14,r=20,a=[],o=[],l=[],c=Math.cos(Math.PI/i),h=2*Math.PI/i;for(let d=0;d<=r;d++)for(let p=0;p<=s;p++){const m=d/r,_=p/s*Math.PI*2,g=c/Math.cos(_%h-Math.PI/i),u=(g-c)/(1-c),v=e*m*g;a.push(Math.cos(_)*v,t*Math.pow(1-m,1.9)+n*Math.pow(m,3)*u*u,Math.sin(_)*v),o.push(p/s*Math.round(e*2.6),m*e/2.4)}for(let d=0;d<r;d++)for(let p=0;p<s;p++){const m=d*(s+1)+p,_=m+s+1;l.push(m,_,m+1,m+1,_,_+1)}const f=new wt;return f.setAttribute("position",new Ze(a,3)),f.setAttribute("uv",new Ze(o,2)),f.setIndex(l),f.computeVertexNormals(),f}function hv(i){const{scene:e,M:t,add:n,box:s,cyl:r,rnd:a,lamps:o,tick:l}=i,c=new Dt,h=t.tile.clone();h.side=Lt;const f={shadow:!1,parent:e},d=new Qe({color:2243100,roughness:1});for(const[H,K,se,B]of Object.values(Ls))n(new ln(1,48,20,0,6.3,0,1.58),d,H,0,K,f).scale.set(se,B,se),i.circles.push({x:H,z:K,r:se*.9});{const[H,K,,se]=Ls.leifeng,B=new Qe({color:7226150,roughness:.5,metalness:.4});n(new gt(16,18,5,8),t.stone,H,se+.5,K,f);for(let j=0;j<5;j++){const re=10-j*1.3,q=se+3+j*8.4;n(new gt(re,re,6.6,8),B,H,q+3.3,K,f),n(pr(8,re+3.8,2.2,.9),h,H,q+6.4,K,f)}n(new gt(.1,1,14,8),t.gold,H,se+52,K,f)}{const[H,K,,se]=Ls.baochu,B=new Qe({color:9074275,roughness:.9});for(let j=0;j<7;j++){const re=3.6-j*.36,q=se-2+j*5.2;n(new gt(re*.94,re,5.2,8),B,H,q+2.6,K,f),n(new gt(re*1.2,re*1.2,.5,8),B,H,q+5.2,K,f)}n(new gt(.1,.9,12,8),t.steel,H,se+40,K,f)}{const[H,K,,se]=Ls.chenghuang;for(let B=0;B<4;B++){const j=20-B*3.6,re=se-2+B*7;n(new st(j,5,j),t.red,H,re+2.5,K,f),n(pr(4,j*.71+6,3,1.6),h,H,re+5,K,{...f,ry:Math.PI/4})}}{const[H,K]=Fn.pavilion,se=Se+.5;s(15,.25,15,t.stone,H,Se+.125,K,{collide:!0}),s(13,.25,13,t.stone,H,Se+.375,K,{collide:!0});const B=new Set;for(let j=0;j<4;j++)for(const re of[-1,1])for(const[q,ee]of[[-5+j*3.333,re*5],[re*5,-5+j*3.333]]){const ue=q.toFixed(1)+ee.toFixed(1);B.has(ue)||(B.add(ue),r(.22,.24,4.2,t.red,H+q,se+2.1,K+ee),r(.34,.38,.3,t.stone,H+q,se+.15,K+ee),i.circles.push({x:H+q,z:K+ee,r:.32}))}for(const j of[-1,1])s(10.8,.42,.3,t.red,H,se+4.1,K+j*5,{s:1}),s(.3,.42,10.8,t.red,H+j*5,se+4.1,K,{s:1}),s(10.6,.3,.2,t.green,H,se+3.6,K+j*5,{s:1}),s(.2,.3,10.6,t.green,H+j*5,se+3.6,K,{s:1});n(pr(4,10.4,3,1.5),h,H,se+4.3,K,{ry:Math.PI/4}),s(5.2,1.7,5.2,t.red,H,se+6.6,K,{s:1}),n(pr(4,6.2,2.8,1.1),h,H,se+7.4,K,{ry:Math.PI/4}),n(new ln(.34,20,14),t.gold,H,se+10.4,K),n(new st(7,4,7),t.red,Di[1].x,Se+2,Di[1].z),n(pr(4,8,2.6,1.2),h,Di[1].x,Se+4,Di[1].z,{ry:Math.PI/4})}const p=[new gt(.2,.36,4.6,10).translate(0,2.3,0)],m=[],_=[],g=[],u=[],v=(H,K,se,B,j,re)=>{const q=m.length/3,ee=Math.cos(j)*.085,ue=Math.sin(j)*.085;for(let Me=0;Me<=5;Me++){const pe=Me/5,Ue=K-B*pe,De=pe*pe*.5;for(const He of[-1,1])m.push(H+He*ee+re.x*De,Ue,se+He*ue+re.z*De),_.push(He*.5+.5,pe),g.push(re.x*.5,.85,re.z*.5);Me<5&&u.push(q+Me*2,q+Me*2+2,q+Me*2+1,q+Me*2+1,q+Me*2+2,q+Me*2+3)}};for(let H=0;H<8;H++){const K=H/8*6.283+a(-.3,.3),se=a(4.2,6.2),B=new G(Math.cos(K),0,Math.sin(K)),j=new io([new G(0,4.3,0),B.clone().multiplyScalar(se*.3).setY(6.6+a(0,1)),B.clone().multiplyScalar(se*.7).setY(7.4+a(0,.8)),B.clone().multiplyScalar(se).setY(6.2)]);p.push(new er(j,12,.085,6));for(let re=0;re<44;re++){const q=j.getPoint(a(.25,1));q.x+=a(-.7,.7),q.z+=a(-.7,.7);const ee=Math.min(q.y-.9,a(3,6.2)),ue=a(0,3.14);v(q.x,q.y,q.z,ee,ue,B),v(q.x,q.y,q.z,ee,ue+1.57,B)}}const S=new wt;S.setAttribute("position",new Ze(m,3)),S.setAttribute("uv",new Ze(_,2)),S.setAttribute("normal",new Ze(g,3)),S.setIndex(u);const M={value:0},T=tv(),A=H=>{H.uniforms.uTime=M,H.vertexShader=`uniform float uTime;
`+H.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      vec4 wp=instanceMatrix*vec4(position,1.); float sw=uv.y*uv.y;
      transformed.x+=sin(uTime*1.2+wp.x*.31+wp.z*.17)*.3*sw; transformed.z+=cos(uTime*.9+wp.z*.27+wp.x*.11)*.22*sw;
      #endif`)},x=new Qe({map:T,alphaTest:.2,side:Lt,roughness:.85,emissive:2898448,emissiveMap:T,emissiveIntensity:.1,color:11059312});x.onBeforeCompile=A;const b=new Ic({depthPacking:Fu,map:T,alphaTest:.2});b.onBeforeCompile=A;const L=[],P=[],N=Object.values(Wi),V=(H,K)=>N.some(([se,B])=>ds(se,null,H,K).d<B/2+1.6),F=()=>new Ke().setHSL(a(.25,.3),a(.42,.58),a(.2,.3)),C=()=>new Ke().setHSL(a(.19,.23),a(.45,.6),a(.3,.4)),O=()=>new Ke().setHSL(a(.93,.97),.62,a(.62,.74)),k=(H,K,se,B)=>{for(let j=K/2;j<H.len;j+=K){const[re,q,ee,ue]=Mi(H,j);for(const Me of[-1,1])B(re-ue*Me*se,q+ee*Me*se,j,Me)}},w=(H,K)=>!H.bridges.some(se=>Math.abs(K-se.s)<se.half+4);k(ui,13,ui.half-1.3,(H,K,se,B)=>{w(ui,se)&&(Math.round(se/13)%2?L.push([H,K]):P.push([H,K,.5,O()]))}),k(ks,19,ks.half-1.5,(H,K,se,B)=>{w(ks,se)&&(Math.round(se/19+(B>0))%2?L.push([H,K]):P.push([H,K,a(.5,.9),Math.round(se/19)%4?F():O()]))});{const H=i.dense(bn.slice(1,16),21);for(let K=1;K<H.length-1;K++){const se=H[K+1][0]-H[K-1][0],B=H[K+1][1]-H[K-1][1],j=Math.hypot(se,B);for(const re of[1,-1]){const q=H[K][0]-B/j*2.6*re,ee=H[K][1]+se/j*2.6*re;if(En(q,ee)&&!Kn(bn,q,ee)&&!V(q,ee)){L.push([q,ee]),K%2&&o.push([q-B/j*5*re,ee+se/j*5*re]);break}}}}for(const[H,K]of[["南山路",15],["杨公堤",15],["北山街",15],["环城西路",18],["延安路",22],["庆春路",26],["解放路",26],["平海路",24],["湖滨路",20]]){const[se,B]=Wi[H],j=Yr(se,0),re="南山路北山街杨公堤".includes(H);k(j,K,B/2+3.5,(q,ee)=>{!Kn(bn,q,ee)&&!V(q,ee)&&P.push([q,ee,re?a(1.25,1.6):a(.9,1.25),re?C():F()])})}for(let H=0;H<2600;H++){const K=bn[Math.floor(a(0,bn.length))],se=K[0]+a(-260,260),B=K[1]+a(-260,260);!Kn(bn,se,B)&&!Kn(Af,se,B)&&!V(se,B)&&P.push([se,B,a(.9,1.7),F()])}for(let H=0;H<260;H++){const K=a(-470,30),se=a(-2090,-1200);Kn(Hr,K,se)&&Math.hypot(K-Fn.pavilion[0],se-Fn.pavilion[1])>30&&P.push([K,se,a(1,1.8),F()])}for(const H of Di)for(let K=0;K<H.r*.5;K++){const se=a(0,6.3),B=Math.sqrt(a())*(H.r-6);B>9&&P.push([H.x+Math.cos(se)*B,H.z+Math.sin(se)*B,a(.9,1.5),F()])}for(const[H,K,se,B]of Object.values(Ls))for(let j=0;j<se*1.4;j++){const re=a(0,6.3),q=Math.sqrt(a())*se*.95;P.push([H+Math.cos(re)*q,K+Math.sin(re)*q,a(1.2,2),F(),B*Math.sqrt(Math.max(0,1-(q/se)**2))-1.5])}for(const H of[L,P,o])for(let K=H.length-1;K>=0;K--)i.inBuilding(H[K][0],H[K][1])&&H.splice(K,1);const z=new on(kr(ss(p),1.2),t.bark,L.length),U=new on(S,x,L.length);U.customDepthMaterial=b,z.castShadow=U.castShadow=U.receiveShadow=z.receiveShadow=!0,z.frustumCulled=U.frustumCulled=!1,L.forEach(([H,K],se)=>{c.position.set(H,tn(H,K),K),c.rotation.set(0,a(0,6.3),0),c.scale.setScalar(a(.85,1.25)),c.updateMatrix(),z.setMatrixAt(se,c.matrix),U.setMatrixAt(se,c.matrix),i.circles.push({x:H,z:K,r:.42})}),e.add(z,U),i.noAO.push(U);const J=cv(t,a,M),D=new on(J.leaf,J.leafMat,P.length),le=new on(J.trunk,t.bark,P.length);D.customDepthMaterial=J.depthMat,P.forEach(([H,K,se,B,j],re)=>{c.position.set(H,j??tn(H,K),K),c.rotation.set(0,a(0,6.3),0),c.scale.set(se,se*a(.9,1.2),se),c.updateMatrix(),D.setMatrixAt(re,c.matrix),le.setMatrixAt(re,c.matrix),D.setColorAt(re,B),j===void 0&&i.circles.push({x:H,z:K,r:.3*se})});for(const H of[D,le])H.castShadow=H.receiveShadow=!0,H.frustumCulled=!1,e.add(H);i.noAO.push(D),k(ui,28,ui.half-.5,(H,K,se,B)=>{B>0&&w(ui,se)&&o.push([H,K])});const _e=(H,K,se,B=!0)=>{const j=new on(H,K,o.length);j.castShadow=B,j.receiveShadow=!0,j.frustumCulled=!1,o.forEach(([re,q],ee)=>{c.position.set(re,tn(re,q)+se,q),c.rotation.set(0,0,0),c.scale.setScalar(1),c.updateMatrix(),j.setMatrixAt(ee,c.matrix)}),e.add(j)};_e(new gt(.05,.09,3.5,10),t.steel,1.75),_e(new gt(.14,.2,.5,10),t.steel,.25),_e(new st(.34,.5,.34),t.emit(16761466,1.2),3.75,!1),_e(new no(.36,.26,4).rotateY(Math.PI/4),t.steel,4.13),o.forEach(([H,K])=>i.circles.push({x:H,z:K,r:.2}));const Q=[],me=(H,K,se,B,j)=>{for(let re=0;re<se;re++){const q=a(0,6.3),ee=Math.sqrt(a()),ue=H+Math.cos(q)*ee*B,Me=K+Math.sin(q)*ee*j;Kn(bn,ue,Me)&&!En(ue,Me)&&Q.push([ue,Me])}};me(40,-8,260,60,22),me(-190,120,240,60,22),me(470,-930,500,45,70),me(-330,-2440,500,60,50),me(-90,-1180,200,30,30);const ye=new on(new Ac(.42,14,.25,5.9).rotateX(-Math.PI/2),t.lotus,Q.length),Te=new on(new ln(.09,8,8).scale(1,1.7,1),new Qe({color:14252175,roughness:.5}),Math.floor(Q.length/9));Q.forEach(([H,K],se)=>{c.position.set(H,.04+a(0,.05),K),c.rotation.set(a(-.12,.12),a(0,6.3),a(-.12,.12)),c.scale.setScalar(a(.6,1.7)),c.updateMatrix(),ye.setMatrixAt(se,c.matrix),se%9===0&&se/9<Te.count&&(c.position.y=.32,c.rotation.set(0,0,0),c.scale.setScalar(.75),c.updateMatrix(),Te.setMatrixAt(se/9,c.matrix))}),ye.receiveShadow=!0,ye.frustumCulled=Te.frustumCulled=!1,e.add(ye,Te),l.push(H=>{M.value=H}),i.makeBoat=(H=1)=>{const K=new Vt,se=t.wood.clone();se.side=Lt,n(new ln(1,28,12,0,6.3,Math.PI/2,Math.PI/2),se,0,.42,0,{parent:K}).scale.set(.95,.6,3.4),n(kr(new st(1.5,.05,5),1),t.wood,0,.26,0,{parent:K});for(const B of[-.7,.7])for(const j of[-1.3,1.3])n(new gt(.035,.035,1.5,8),t.red,B,1,j,{parent:K});n(new gt(.95,.95,3.1,20,1,!0,-Math.PI/2,Math.PI),h,0,1.25,0,{parent:K,rx:Math.PI/2});for(const B of[-1.5,1.5])n(new ln(.1,10,8),t.emit(16732208,3),.75,1.55,B,{parent:K,shadow:!1});return K.scale.setScalar(H),K};for(const[H,K,se]of[[60,-40,.5],[-420,-180,-.9],[-900,-700,1.9],[300,-700,.2],[-1500,-1e3,2.6],[-2200,-1300,1.2],[-600,-1700,.4]]){const B=i.makeBoat();B.position.set(H,.1,K),B.rotation.y=se,i.solids.add(B),l.push(j=>{B.position.y=.1+Math.sin(j*.9+H)*.04,B.rotation.z=Math.sin(j*.7+K)*.025})}}const Cf=`varying float fU,fV,fH,fSeed,fRoof; varying vec3 fRd;
`,uv=`
      vec3 bs=vec3(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz),length(instanceMatrix[2].xyz)), bp=position*bs;
      vec4 bw=modelMatrix*instanceMatrix*vec4(position,1.);
      mat3 br=mat3(instanceMatrix[0].xyz/bs.x,instanceMatrix[1].xyz/bs.y,instanceMatrix[2].xyz/bs.z);
      vec3 be=-((cameraPosition-bw.xyz)*br);
      fH=bs.y; fSeed=seed; fRoof=step(.5,abs(normal.y)); bool xf=abs(normal.x)>.5;
      fU=fRoof>.5?bp.x:((xf?bp.z:bp.x)+seed*37.); fV=fRoof>.5?bp.z:bp.y;
      fRd=xf?vec3(be.z,be.y,-be.x*sign(normal.x)):vec3(be.x,be.y,-be.z*sign(normal.z));`,fv=`
      vec4 bw=modelMatrix*vec4(position,1.); vec3 be=bw.xyz-cameraPosition;
      fH=fa.z; fSeed=fa.y; fRoof=fa.w;
      fU=fRoof>.5?position.x:fa.x+fa.y*37.; fV=fRoof>.5?position.z:position.y-${Se.toFixed(2)};
      fRd=vec3(dot(be,vec3(normal.z,0.,-normal.x)),be.y,-dot(be,normal));`,dv=Cf+`
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
`;function pu(i){const e=new Qe({roughness:.85});return i&&(e.defines={REALB:""}),e.onBeforeCompile=t=>{t.vertexShader=(i?`attribute vec4 fa;
`:`attribute float seed;
`)+Cf+t.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>"+(i?fv:uv)),t.fragmentShader=dv+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 facade(); diffuseColor.rgb=bCol;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor=bRough;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
 metalnessFactor=bMetal;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance+=bEmit;`)},e}const Pf=[["杭州君悦酒店",0,0,"",[104.4,67.1,112.3,81.2,105,84.8,110.2,99.8,108.9,110.6,105.2,119.6,89.6,110.6,70.9,121.1,71.6,139.1,61.3,138.2,53,134.6,45,129.2,40.4,123.3,33.7,127.5,25.5,114.1,5,127.3,17.3,144.7,30.5,155.4,43.6,163.7,57.6,169.5,78.1,169.5,94.6,165.3,106.9,160.4,119.3,149.6,129.1,136.4,136.5,119.1,139,97.6,131.6,72,123.4,55.5]],["",0,0,"apartments",[563.5,698.1,576.3,703,589.9,666.6,577.1,661.7]],["",0,0,"apartments",[563.6,770.7,572.9,774.1,583.7,744.1,574.5,740.7]],["",0,0,"",[534.7,763.9,550.4,770.3,565.5,732.8,571.5,735.2,579.9,714.4,558.2,705.5]],["",0,0,"apartments",[545.3,823.9,558.1,824.5,560.1,786.2,547.2,785.5]],["",0,0,"",[518.8,808.6,530.4,809.5,532.4,782,520.8,781.2]],["",0,0,"",[479.1,805.5,507.5,807.2,510,757.9,527.4,763.3,541.6,723.9,483.6,712.5]],["",0,0,"",[489.4,578.9,506.4,580.4,509,551.8,492,550.3]],["",0,0,"apartments",[549.9,655.8,562.2,660.1,584.9,594.5,572.6,590.2]],["",0,0,"apartments",[542.2,588.8,545.8,590.2,542.1,599.4,545.1,600.6,534.3,627.6,537.3,628.8,529.9,647.2,538.8,650.8,545.9,632.9,543.3,631.9,554.5,603.8,552.2,602.9,555.6,594.2,553.2,593.3,557.3,583.2,546.2,578.8]],["",0,0,"",[510.2,641.1,521.8,642.3,529.1,569.5,517.5,568.3]],["",0,0,"apartments",[543.4,682.2,553.6,685.7,560.4,665.1,550.2,661.7]],["",0,0,"",[521,679.9,530.8,682.2,536.8,655.7,527,653.5]],["",0,0,"",[486.2,634.3,506.3,637.7,509.4,619.5,489.2,616]],["",0,0,"",[521.5,697.8,545.8,704.5,548.8,693.5,524.5,686.8]],["",0,0,"",[502.6,708.1,513.5,711,520,686.3,509.1,683.4]],["",0,0,"",[482.7,691.8,498.9,692.7,501.5,643.3,485.3,642.4]],["",0,0,"apartments",[546,571.8,563,578.4,572.3,553.8,555.4,547.2]],["龙翔服饰城",0,0,"",[177.1,440.5,182.3,445.6,191.7,448.3,305.6,442.2,310.8,440.6,314.9,436.8,319,430.4,317.3,384.4,313.1,377.2,304.4,374.5,184.5,378,178,381.6,176.1,388.1]],["工联CC",0,0,"",[13.1,441.1,17.6,445.2,22.3,448.2,99.4,448,137,384.9,136.9,375.2,28.3,377.9,20.7,380.5,14.7,385.6,10.8,392.2,10.7,436.9]],["",0,0,"",[-41.8,83.2,-38.4,89,-28.3,83,-31.7,77.2]],["",0,0,"",[-479.9,38.7,-467.5,55.6,-463.7,52.8,-452.3,68.2,-443.2,61.5,-454.6,46,-450.4,42.9,-462.9,26]],["",0,0,"",[-498.9,-20.6,-505.8,-28.7,-503.9,-30.3,-515.1,-43.4,-517.5,-41.4,-521.4,-46,-519.1,-48,-528.7,-59.3,-532,-56.5,-541.6,-67.8,-553.8,-57.4,-542.8,-44.5,-539.2,-47.6,-537.2,-45.2,-541.6,-41.3,-531.5,-29.4,-523.5,-36.3,-520.9,-33.3,-525.2,-29.7,-515.2,-18,-521.1,-12.9,-527.6,-7.3,-542.3,-24.6,-567.2,-3.3,-553.2,13.1,-547.3,8.1,-535.4,22.2,-516.2,5.7,-518.7,2.7,-513.1,-2,-510.6,1,-505.3,-3.5,-511,-10.2]],["湖滨银泰in77 A区",0,0,"",[-137.7,190.7,-136.4,234.4,-38.9,231.5,-39.2,222.1,-30.9,221.8,-33.1,148.1,-48.5,148.6,-49,134.8]],["",0,0,"",[-217.9,237.5,-215.4,241.9,-196.3,241.5,-154.8,240.6,-156.6,197.7]],["",0,0,"",[-435.3,69,-438.1,72.1,-423.4,100.5,-420.6,97.3]],["湖滨银泰in77 C1区",0,0,"commercial",[-17.4,445.6,-19.4,413.8,-29.4,414.7,-36.3,411.8,-44.3,405.1,-40.6,400.2,-41.1,393,-46,388,-53.3,386.7,-57.1,388,-60.3,385.3,-132.6,387.7,-129.7,451.5]],["湖滨银泰in77 C2区",0,0,"",[-152.6,385.5,-261.6,389.6,-260.3,423.6,-259.6,441.5,-259.2,454.8,-147.4,452.8]],["湖滨银泰in77 C3区",0,0,"commercial",[-281.3,391.4,-285.6,391.6,-386.1,395.6,-384.2,441.1,-376.2,445.6,-368,446.8,-359.6,442,-356.8,435.2,-339.1,437.3,-328.4,436,-302.3,429.2,-295.4,426.6,-294.2,418.7,-293.7,415.2,-276.7,413.1,-276.9,393.2]],["浙商银行",0,0,"",[532.7,124,511.4,125.2,513.1,155.7,509.5,167.6,503.9,176.2,507.2,236,538.7,234.2]],["",0,0,"",[602.8,63.3,575.3,64.1,576,88.6,537.4,89.7,538,111.3,604.2,109.4]],["",0,0,"",[605.1,367.6,576.7,369.1,577.3,394.9,545.2,394,546.3,421.3,604.5,420.7]],["",0,0,"",[522.7,451.5,499.4,450.6,496.2,508.1,521,513.7]],["",0,0,"",[539.8,367.9,500.3,367.6,498.8,437.6,537.5,439.6]],["天阳·明珠商业中心",0,0,"",[452.1,376.8,449.9,372.6,446.4,368.6,440.8,366.5,351.1,367.3,346.1,368,340.4,370,337.5,375.6,338.2,400,453,396.6,453.1,381.1]],["东坡大世界",0,0,"",[-74,255.1,-130.5,257.4,-137.1,264.5,-135.3,331.9,-122.7,340.1,-92.5,338.5,-92.9,329.7,-70.8,328.5,-71.7,309.7]],["仁和饭店",0,0,"",[-259.9,267.2,-259.6,317.7,-199.8,317.4,-200.1,266.9]],["中国电信",0,0,"",[-544.9,275.7,-583.6,277.5,-581.7,344.8,-577.7,353.9,-571.3,358.2,-563.3,358.9,-540.5,359.2]],["Apple Store",2,0,"commercial",[6.3,281.6,7.5,315.6,15.3,315.3,36.8,314.7,35.8,280.7,14.2,281.3]],["龙翔桥",0,0,"train_station",[2.9,344.1,3,349,3.7,371.2,36.1,370.3,18.4,397.4,-33.6,399,-33.4,401.5,-33.4,404.3,20.1,403.3,20.2,414.3,16.5,414.4,16.5,412.3,14.8,412.3,13.2,412.3,13.2,414.4,6.5,414.4,6.5,417.1,6.5,420,13.1,420,13.2,422.4,14.9,422.4,17,422.3,17,420,25.9,420,25.8,397.2,43.7,370,117.8,368,118.1,379.5,133,392.7,135.1,390.4,136.7,388.5,124.1,377.3,123.9,367.7,153.9,367,153.8,361.3,153.3,339.6,124,340.3,123.4,314.9,131.7,314.8,131.8,320.5,134,320.4,136.4,320.3,136.3,314.4,143.7,314.2,143.6,312.1,143.6,309.9,116.8,310.6,117.1,323.9,108.6,324.1,108.7,326.5,108.7,329.3,117.5,329.1,117.8,341.6,41.8,343.4,41.4,327.3,49.1,327.2,49,323.8,48.9,320.5,42.2,320.7,41.9,313.3,38,313.4,35.2,313.5,35.4,321.1,26,321.3,25.8,313.7,21.7,313.8,18,313.9,18.2,321.7,4,322.1,4.1,325.8,4.2,329.8,27.4,329.1,35.3,328.9,35.7,343.2]],["杭州市新华书店",0,0,"",[-410.4,695.4,-428.8,696.3,-426.9,738.5,-463.8,740.3,-462.7,763.6,-417.8,761.5,-411.4,759.5,-407.7,752.6]],["湖滨in88",0,0,"commercial",[119.4,159,120.4,190.4,31.5,193.3,30.5,163,7.3,163.8,9.1,217.9,144.7,213.5,142.9,158.2]],["杭州华侨饭店",0,0,"",[276.7,-48.8,277.8,-11.5,268.1,-11.1,261,-23.6,247.2,-22.8,240.2,-10.4,210.8,-9.2,211.6,9.8,279,7.1,280.3,40.1,294.2,39.5,291.9,-48.7]],["西湖国贸",0,0,"commercial",[430.6,-20.7,430.3,-25,434.1,-26.8,431.5,-33.3,426.6,-38.7,424.1,-41.2,428.4,-43.4,425.9,-49.6,431.8,-52.5,425.7,-63.9,416.9,-73.8,407,-81.1,395,-86.3,369.4,-86.5,346.9,-76.7,349.5,-70.2,334.7,-62.9,336.6,-59.5,331.3,-52.4,337.9,-37.8,333.3,-24.6,332.8,-14,336.1,-.2,332.5,1.5,333.1,9.8,336.5,17.4,341.2,22.3,347,25.1,429.9,-16.4]],["解放路百货商店",0,0,"commercial",[-423.8,396.9,-536.8,401.3,-534.3,461.2,-481.8,458.7,-419.9,455.8]],["解百新世纪",0,0,"commercial",[-481.3,479.6,-527.8,481.3,-523.7,554.8,-511.9,561.3,-416.6,557.9,-418.9,474.1]],["城中香格里拉酒店配楼",0,0,"commercial",[624.9,118.4,556.4,120.7,560.2,220.4,579.3,217.6,598.1,213.5,618.8,208.1,619.2,203,627.9,202.6,627.5,188.4,626.6,161.5]],["",0,0,"commercial",[564.3,237.7,509,240.1,510.4,273,565.7,270.5]],["杭州城市建设陈列馆",0,0,"",[536.2,280.6,520.7,282.5,523.2,309.1,539.8,308.1]],["杭州图书馆生活主题分馆",0,0,"",[104,696.1,60,696.9,60.7,736.2,104.7,735.4]],["浙江梅地亚宾馆",0,0,"",[452.7,400.4,354,403.8,345.9,405.8,341.2,412,339.8,420.2,341.4,425.5,344.5,429.3,347.7,432.1,351.3,434.1,453,430]],["湖滨银泰in77 D区",0,0,"commercial",[-71.7,309.7,-70.8,328.5,-70.6,334.8,-26.9,333,-30.2,253.3,-74,255.1]],["友好饭店",0,0,"",[-13.8,567.8,-24.1,561.9,-88.5,566.9,-88,571.8,-48,581.4,-60.4,624.4,-27.1,635.4,-10.6,627.4]],["",0,0,"hospital",[-152.2,464.6,-204.7,467.2,-204.4,480.6,-197.9,480.3,-196.1,520,-187.9,519.7,-185.8,583.1,-162.5,589.4,-153.9,586.4,-150.1,581.1,-148.3,567.4,-152.5,478.5,-145.7,477.9,-146,470.8,-151.6,470.8]],["",0,0,"hospital",[-214.4,475.2,-252.5,476.1,-249.3,570.4,-238.4,568.6,-224.5,578.4,-212.7,578.7,-209.7,564.5,-215,564.2,-217.1,513.2,-212.1,512.9]],["",0,0,"commercial",[-277.9,467.6,-381.9,472.3,-381.1,540.4,-372.8,540,-359.2,539.1,-354.3,539.2,-354.3,524.8,-337.5,523.6,-337.9,502.5,-276.7,499.1]],["",0,0,"commercial",[-260.3,423.6,-278.8,424.2,-279.2,418.5,-294.2,418.7,-295.4,426.6,-302.3,429.2,-328.4,436,-339.1,437.3,-356.8,435.2,-359.6,442,-368,446.8,-376.2,445.6,-384.2,441.1,-384,458,-286.4,453.6,-286.4,443.6,-259.6,441.5]],["交通银行浙江省分行",0,0,"",[436.3,673.7,408.1,673.1,406.7,726.8,411.5,733.6,420,737.3,428.8,735.3,435,727.5]],["杭州市第一人民医院教学楼",0,0,"hospital",[68.2,459.9,17.4,461.1,18.9,525.1,21.9,525,22,532.9,27.2,535.1,40.2,534.7,44.4,530.9,43.3,483.3,26.8,483.7,26.6,476,68.6,475]],["4号楼",0,0,"hospital",[51,558.6,20.3,559,18.5,561.6,20.8,645.3,38.2,644.9,38.1,638.8,37.3,613,36.4,580.1,51.6,579.7]],["1号楼",0,0,"hospital",[38.1,638.8,46.6,638,48.4,634.3,51.5,633.5,55.6,635.6,61.6,635.8,66.5,634.3,70.8,631.3,74.3,632.5,79.1,638,89.9,647.2,100.2,649.9,113.2,648.9,123.5,643.8,122.2,584.8,102.9,585.4,102.9,579.1,100.8,570.9,90.8,564.6,79.5,565.4,72.5,570.9,70.6,582,44.9,582,46,612.4,37.3,613]],["2号楼",0,0,"hospital",[153.5,583.7,136.8,584,137.7,631.6,142.7,631.5,143,650.9,132.3,656.4,132.5,666.4,160.7,668.1,159.4,628.2,161.7,628.2,161.4,621.4,161.3,617.4,161.4,614.9,154.1,615]],["",0,0,"hospital",[205.4,631.6,204.7,611.6,219.6,611,220.1,629.4,237.7,629,237.3,611.1,254.7,610.2,255.5,629,273.9,628.3,272.4,585.9,192.1,589.8,186.8,597.6,186,602.2,187.9,632.2]],["",0,0,"",[389.9,638.8,351.7,640,353.7,705.4,357.7,705.3,357.5,701.2,365.4,701,365.4,699,364.1,654.3,377.7,653.9,378.3,672.8,390.9,672.4]],["",0,0,"",[394,672.7,380.5,673.1,381.3,698.5,365.4,699,365.4,701,357.5,701.2,357.7,705.3,357.9,712.8,383.3,712,383.7,723.5,395.6,723.1]],["",0,0,"",[446.4,578.8,427.2,577.8,426.7,588.8,433.2,589.1,430.2,651.9,422.8,651.6,422,667,442.2,667.9]],["",0,0,"",[419.4,578.2,402.7,578.5,404.2,660.2,420.9,659.9]],["浙江省国贸大楼",0,0,"commercial",[449.6,464.5,427.3,464.6,427.5,558.5,437.3,558.5,437.3,565.7,447.6,565.7,447.3,489.8,445,489.8,445,480.9,449.6,474.2]],["",0,0,"hospital",[369.4,766.3,322.3,750.5,314.6,758.5,313.9,798.5,320.7,804.9,372.1,798.3,371.6,793.9,377,789.8,378.5,782.8,376.2,776.5,370.2,772.4]],["",0,0,"hospital",[296,800.2,302.6,800.5,304.8,760.5,303.6,755.7,301.4,749.8,296,745,272.4,744.3,272.4,756.6,263.4,755.9,263.2,762,262.1,787.2,261.7,796.4,271.9,807.5,295.8,807.8]],["",0,0,"hospital",[249.5,761.2,250.2,746.4,243.4,737.7,227.3,736.7,218.9,745.3,218.3,755.7,215.1,758.3,207.5,758.5,206.8,779.7,213.6,779.9,213.6,782.1,211.1,785.5,210.5,789.3,196,788.8,196,811.7,200.2,816.8,233.6,811.4,248.2,791.1,248.6,786.9]],["",0,0,"hospital",[263.2,762,257.3,761.7,249.5,761.2,248.6,786.9,256.5,787.1,262.1,787.2]],["新华书店庆春路购书中心",0,0,"",[450.3,239.6,428,240.8,430.5,286.1,427.2,290.1,411.1,291.4,405.7,295.5,403.6,299.8,404.8,321.3,454.5,318.4,453.3,298,455.9,297.8,453.4,253.9,451.1,254]],["",0,0,"commercial",[434.8,235.6,452.9,234.5,451.1,199.6,449.3,199.5,447.8,174.2,446.1,170.9,443.4,169.2,438.8,168,431.2,168.5]],["",0,0,"school",[428.7,169.6,397.5,179.5,398.7,214.9,380,215.5,380.5,231.1,385.3,230.9,386.2,258,397.3,257.7,396.3,228.4,408.6,228,407.9,207.5,415.8,207.2,416.7,235,409.6,235.3,410.3,256.7,425.1,256.2,424.3,233.2,430.8,233]],["九星里（北）",0,0,"house",[391.8,180.4,374.9,191.1,375.9,211.6,393.3,210.7]],["九星里（中）",0,0,"house",[372.1,194.7,355.6,204.6,359.6,264,375.8,263]],["九星里（南）",0,0,"house",[353.1,207.7,345.2,212.3,345.9,222.8,331.6,223.8,333.4,249.5,350,248.4,350.5,256.3,330.4,257.7,330.7,262,356.6,260.2]],["",0,0,"house",[363.3,265.2,329.7,266,329.9,277,348,276.6,348,273.2,363.5,272.8]],["",0,0,"house",[374.2,274.3,358.6,274.9,358.8,279.9,340.4,280.5,340.7,290.5,359,289.9,358.9,286.9,374.6,286.4]],["浙江省广播电影电视监测中心",0,0,"",[399.6,285.3,376.1,285.5,376.1,295.9,340.6,296.2,340.7,309.7,334.6,309.8,334.7,327.8,392.9,327.3,392.8,307.3,399.8,307.3]],["红泥花园",0,0,"commercial",[208.4,250.4,166.6,251.9,168.2,295.9,201.8,294.7,209.7,287.2]],["浙江胜利剧院",0,0,"",[246.2,250.3,216.1,250,218.2,302.4,203.1,316.6,203.2,320.6,190,321.2,190.6,334.4,249.5,331.9]],["",0,0,"commercial",[209.8,293.2,193.8,308.3,189.2,303.3,178.5,313.4,187.1,322.7,192.5,317.6,194.8,320.1,216.2,300]],["文物大楼",0,0,"",[308.8,243.8,284,244.7,284.2,249.8,254.3,251,255.3,278.7,292,277.3,291.9,273.8,310,273.1]],["",0,0,"commercial",[316.6,313,304.9,313.3,305,318.1,252.3,319.6,252.7,332.5,310.9,330.9,314.4,329.4,317,326.5]],["",0,0,"commercial",[310.4,275.8,294,276,294.5,316,302.7,315.9,302.7,312.7,310.8,312.7]],["",0,0,"commercial",[280.6,281.6,265.3,281.9,265.5,295,253.4,295.2,253.8,318.2,291.7,317.5,291.2,287.5,280.8,287.7]],["工联CC二期",0,0,"",[156.4,419.8,126.6,420.1,99.4,467.5,80.3,524.4,80.4,531.1,84.2,536,90,537.6,144.2,534.9,152.3,532.2,156.1,528,158.6,520.5]],["华侨饭店商务中心",0,0,"hotel",[215.1,13.4,203.7,13.6,204.4,54.6,264,53.6,263.3,15.9,253.2,16.1,253.6,42,215.6,42.7]],["",0,0,"hotel",[277.7,9.5,264.6,9.9,265.7,53.9,297.9,53,297.6,41.6,278.5,42.1]],["华侨饭店",0,0,"hotel",[198.1,13.7,185.5,18.8,174,26.1,168.9,31.9,164.8,39.4,163.2,45.6,163.4,57.9,199.3,56.3]],["大韩民国临时政府杭州旧址纪念馆",0,0,"",[303.9,59.3,285.9,60,288.6,122.6,306.6,121.8]],["湖边村建筑群",2,0,"",[282.2,60.4,266,60.9,268.3,122.8,284.5,121.8]],["",0,0,"",[261.9,60.9,217.3,62.1,217.7,77.3,262.3,76.1]],["富隆酒窖",0,0,"",[261.5,82.4,251.6,82.8,251.5,78.7,226.8,79.6,227.3,93.5,219.6,93.8,219.9,103,262.2,101.4]],["",0,0,"",[263.1,104,220.2,105.2,220.7,123.1,263.6,121.9]],["",0,0,"",[215.3,61.9,200.9,62.5,203.5,125,217.7,124.3]],["",0,0,"commercial",[-154.9,265.6,-193.5,266.4,-192.5,317.5,-186.8,317.4,-186.6,327.4,-157.7,327.4,-157.7,324,-158.4,310.9,-154.1,310.8]],["",0,0,"commercial",[-151,324,-157.7,324,-157.7,327.4,-186.6,327.4,-204.8,327.4,-204.8,321.8,-218.1,321.9,-218.1,328.1,-261.3,328.3,-261.2,352.1,-255,356.8,-161.5,353.2,-154.8,350.8,-151,345.9]],["",0,0,"residential",[206.3,137.2,192.7,137.4,193.4,180.1,207,179.9]],["",0,0,"residential",[189,138.3,175.7,138.6,176.6,177.8,190,177.5]],["",0,0,"",[199.7,62.7,191.1,63,193.6,125.9,202.1,125.5]],["",0,0,"",[188.8,64.6,173.5,65.1,175,100.1,189.9,99.4]],["",0,0,"",[190,101.5,176,101.9,176.9,128.3,190.9,127.8]],["",0,0,"",[171.3,66.7,156.8,67.3,159.4,128.9,174.8,128.3,174.5,119.8,170.1,120,168.2,75.4,171.7,75.2]],["",0,0,"",[174.1,139,162.6,139.5,159.9,144.8,161.6,185.3,168.6,185,175.9,184.7]],["",0,0,"",[252.8,164.1,251.7,136.6,237.5,137.7,238.4,159.8,234.5,160.2,233.7,138.2,216.5,138.7,217,161.9,219.2,162.1,219.8,181.5,230.7,181,233.7,178.5,247.3,178.7,246.5,164.4]],["",0,0,"",[279.9,134,256.3,135.1,257.4,158.9,281,157.8]],["",0,0,"",[309.6,132.1,283.8,132.7,284,142.7,298.6,142.3,298.9,155.4,310.2,155.1]],["",0,0,"school",[325.6,515.7,308.7,516.2,310.2,561.8,327,561.3]],["",0,0,"school",[293.2,514.2,256.4,515.1,257.6,564.4,266,564.2,265,525,283.1,524.6,284.1,563.8,294.4,563.5]],["友好饭店",0,0,"",[-33.9,601.1,-28.6,601.1,-23.6,599.4,-19.4,596.2,-16.4,591.8,-15,586.7,-15.3,581.4,-17.2,576.5,-20.6,572.4,-25.3,569.6,-30.7,568.5,-36.2,569.2,-41.1,571.8,-44.9,575.8,-47.1,580.8,-47.6,586.3,-46.2,591.7,-43.1,596.3,-38.9,599.5]],["",0,0,"",[-56.2,454.9,-119.1,457,-118.6,471.9,-55.7,469.8]],["",0,0,"",[-55.2,472.1,-118.1,474.7,-118.1,503.6,-53.9,506.5]],["",0,0,"",[-53.8,509.5,-72.6,510.4,-71,546.9,-52.2,546]],["",0,0,"",[-75.1,507.9,-92.5,508.6,-90.7,549.7,-73.3,548.9]],["",0,0,"",[-100,506.8,-117.7,507.4,-116.4,547.3,-98.6,546.7]],["",0,0,"",[-121.8,457.3,-134.7,457.8,-131.3,552.5,-118.5,552]],["",0,0,"residential",[418.5,454,391.5,455.2,394.3,519.8,421.3,518.6]],["",0,0,"residential",[379.4,456.8,363.1,457.4,364.5,496.6,380.8,496]],["",0,0,"residential",[420.5,523.9,409.1,524.5,409.8,539.1,421.2,538.5]],["",0,0,"residential",[404.7,524.9,394.4,525.4,395.2,541,405.5,540.5]],["",0,0,"residential",[418.8,545.5,396.1,546.5,396.7,561.2,419.5,560.2]],["",0,0,"residential",[386.7,512.5,365.4,514,368.5,558.1,389.7,556.6]],["",0,0,"residential",[353.5,457.3,341.2,457.9,343,499.3,355.4,498.7]],["",0,0,"residential",[357.4,502.3,342.4,503.4,346.4,560.1,361.5,559]],["",0,0,"residential",[281.6,453.6,271.1,454.3,272.2,472.1,282.8,471.4]],["",0,0,"residential",[267.3,454.9,248.9,455.2,249.2,470.4,267.6,470.1]],["",0,0,"residential",[279.2,475.2,263.9,475.7,264.4,490.5,279.7,490]],["",0,0,"residential",[260.4,473.1,249.3,473.6,250.1,492.8,261.9,492.3,261.7,487.5,255.8,487.8,255.5,479.6,260.7,479.4]],["",0,0,"residential",[286.3,496.3,270.7,496.4,270.7,510.5,286.4,510.4]],["",0,0,"residential",[265.2,498,250.7,498.5,251.1,510.9,265.6,510.4]],["",0,0,"residential",[187,460.1,173.1,460.9,175.4,553.5,190.1,552.5]],["",0,0,"residential",[208.1,459,191.6,459.6,195.5,555.8,201.8,555.6,202.2,563,194.5,563.4,194.7,570.5,212.6,569.8]],["",0,0,"residential",[190.7,557.1,176.2,557.9,177.1,572.6,191.6,571.7]],["",0,0,"residential",[228.6,530,214.2,530.6,215.7,568.2,230.1,567.7]],["",0,0,"residential",[245.6,530.3,233.4,530.7,234.9,567.9,247.1,567.4]],["",0,0,"residential",[242.8,501.2,216.3,501.9,216.3,510.7,213.2,510.7,213.2,525.2,242.5,525.7]],["",0,0,"residential",[243.7,479.6,235.2,479.9,235.4,486.3,225.3,486.7,225.1,483,212.1,483.5,212.5,494.8,244.2,493.6]],["",0,0,"residential",[243.4,456.4,210.2,457,210.6,479.5,218.5,479.4,218.2,463.4,222.9,463.3,223.1,476.9,243.7,476.6]],["",0,0,"residential",[328.1,586.5,324.6,586.7,324.3,580,313.1,580.6,313.4,586.3,309.2,586.5,309.7,595.9,320.6,595.3,320.8,600,328.8,599.6]],["杭州市建设委员会",0,0,"",[327.5,608.6,314.4,609,314.7,619.3,289.8,620,290.2,633.7,295.2,633.5,314.4,633,315,653.3,328.7,653]],["",0,0,"residential",[306.3,579,282,580,283.4,616.4,308.6,615.5,307.9,599.8,300.2,600.1,299.7,585.9,306.6,585.6]],["",0,0,"residential",[327.6,660.9,310,661.6,310.9,683.1,301.4,683.5,302,698.6,329,697.6]],["",0,0,"residential",[297.3,641.1,283.7,641.7,285.9,698.7,299.6,698.2]],["",0,0,"residential",[270.7,635.3,242.1,634.8,241.8,654.5,256.3,654.7,255.8,680.8,250.9,680.7,250.6,697,283,697.5,283.2,682.6,269.9,682.4]],["",0,0,"hospital",[202,635.6,186.2,636.4,186.8,648.3,202.6,647.5]],["8号楼",0,0,"hospital",[211.2,652.5,200.3,652.9,201.3,678.2,212.2,677.7]],["",0,0,"residential",[234,636.8,219.3,637.4,220.2,658.1,229.3,657.8,230.7,692,244.3,691.4,242.9,657.8,234.9,658.1]],["全季酒店",0,0,"",[42.7,776,27,776.3,28.8,836.1,44.7,835.4]],["",0,0,"residential",[52.2,684.7,23.7,685.8,25.7,738.4,54.2,737.4]],["马可波罗假日酒店",0,0,"hotel",[67.9,744.7,39.6,745.9,32.6,750,26.7,756.7,27.3,772.1,68.9,770.4]],["",0,0,"residential",[64.5,777,47.4,777.5,47.7,784.7,57.8,784.4,58.1,795.3,53.4,795.4,54.7,834.6,66.4,834.2]],["",0,0,"school",[-140.6,684.7,-157.1,685.5,-153.6,761.7,-137.1,760.9]],["",0,0,"school",[-166.8,714.1,-182.1,715,-179.1,763.7,-163.9,762.7]],["",0,0,"school",[-185.7,758,-208.9,758.9,-208.6,766.2,-185.5,765.3]],["",0,0,"school",[-238.4,721.1,-246.5,721.5,-244.3,767.5,-231.4,766.8,-232.5,745.8,-237.2,746]],["",0,0,"residential",[-157.1,636.6,-160.2,647.4,-154.5,649.8,-150.4,652.6,-149.4,676.9,-137.3,676.6,-138.6,650.5,-139.1,645.4,-143,641.5]],["杭州市总工会",0,0,"",[-14.2,745.7,-37.3,747.1,-38.8,720.7,-54.8,721.6,-49.8,807.3,-49.6,810.5,-42.4,810,-10.5,808.2]],["杭州市房产管理局",0,0,"",[-33.8,675.9,-47.4,676.5,-46,705.6,-25.4,704.7,-23.8,739,-9,738.3,-11.4,689,-26.6,689.7,-26.4,693.5,-32.9,693.8]],["",0,0,"commercial",[-92.9,568.6,-105.7,567.1,-107.4,581.8,-94.5,583.3]],["",0,0,"commercial",[-96,588.3,-105.9,585.8,-109.3,598.7,-116.2,596.9,-119.7,610.5,-96.6,616.5,-93.7,605.2,-100,603.6]],["",0,0,"commercial",[-111.5,568.6,-125.6,569.3,-124.5,594.3,-110.3,593.7]],["",0,0,"commercial",[-101.9,780.5,-118,781.3,-114.4,846.9,-98.3,846]],["",0,0,"commercial",[-82.4,702.3,-118.9,703.8,-116.2,769.5,-107.3,769.1,-108.2,746.6,-80.6,745.4]],["",0,0,"commercial",[-108.5,667.6,-120.3,668.3,-118.5,699.6,-106.7,698.9]],["",0,0,"commercial",[-55.9,664.9,-69.7,665.6,-69.1,677.2,-81.5,677.8,-78.2,742.4,-57.1,741.3,-59.1,702.1,-54,701.8]],["湖滨派出所",0,0,"",[-211.4,784.6,-230.6,785.3,-227.7,868.1,-208.5,867.4]],["",0,0,"commercial",[-422.1,657.8,-526.5,658.1,-526.3,711.9,-506,711.8,-506,699.9,-485.5,699.8,-485.5,686.4,-422,686.2]],["杭州市口腔医院",0,0,"hospital",[-15.2,514.4,-50.7,516.3,-49,548.3,-26.1,547.1,-27,530,-14.4,529.4]],["共青团杭州市委",0,0,"",[-16.9,485.8,-31.6,486.6,-31,496.2,-50.5,497.4,-49.6,512.8,-15.4,510.9]],["",0,0,"apartments",[-19.6,459.3,-47.5,460.3,-47,476,-34.9,475.5,-35.1,469.7,-27.1,469.4,-26.7,482.1,-18.9,481.8]],["湖滨银泰in77 E区",0,0,"",[-280.9,285.3,-290.4,285.6,-290.8,270.3,-374.8,272.7,-372.7,345.1,-358.5,344.7,-358.1,360,-289.6,358,-290.6,322.8,-279.8,322.5]],["",0,0,"",[-372.8,540,-390.9,541.1,-389.3,566.2,-357.6,564.2,-359.2,539.1]],["",0,0,"",[-314.7,540.5,-327.3,541,-326.9,552.3,-355,553.5,-354.5,564.5,-313.7,562.7]],["",0,0,"",[-276,521,-286.3,521.3,-285.3,554.6,-309.5,555.3,-309.2,564.9,-274.7,563.9]],["",0,0,"",[-289.1,516.8,-334.5,518.4,-334.1,527.3,-350.7,527.9,-350,546.8,-331,546.1,-331.4,534.6,-305.1,533.6,-304.5,550.6,-287.9,549.9]],["中国电信上城分局",0,0,"",[-269.4,684.2,-291.5,685.3,-289,740.2,-293.8,740.5,-301.5,740.8,-301.2,748.2,-306.8,748.5,-306.1,765.8,-265.7,763.9]],["民国邮电大楼",0,0,"",[-273.8,787.9,-305.3,787.9,-305.3,806.3,-273.8,806.3]],["仁和大厦",0,0,"commercial",[-173.2,790.4,-201.3,791,-200.5,828.8,-180.4,828.4,-180.8,809.2,-172.8,809]],["岳王艺术城",0,0,"",[-137.7,783.8,-207.3,785.4,-205,868,-166.6,867.7,-137.2,862.1]],["",0,0,"",[-233.3,613.2,-256.3,613.5,-256,636.2,-233,635.8]],["",0,0,"",[-238.7,641.3,-253.2,641.6,-252.7,665.5,-238.2,665.2]],["",0,0,"residential",[-166.5,637.1,-186.8,637.3,-186.9,631.2,-202.4,631.4,-202,663.7,-189.1,663.5,-189.3,648.9,-179.5,648.8,-179.4,660.3,-166.3,660.1]],["",0,0,"residential",[-160.3,663.6,-182.7,664.3,-181.3,709,-168.9,708.6,-169.8,677.7,-159.9,677.4]],["",0,0,"residential",[-206,624.3,-225.3,624.6,-224.6,665.2,-212.6,665,-213.1,636.8,-205.8,636.7]],["",0,0,"residential",[-196.2,691.9,-209,691.8,-209.2,709.8,-196.3,709.9]],["",0,0,"residential",[-215.9,691.5,-228.4,691.9,-227.9,710.3,-215.3,710]],["",0,0,"residential",[-233.8,691.7,-247.1,691.9,-246.8,710.8,-233.5,710.6]],["",0,0,"residential",[-198.5,669.7,-214.6,669.6,-214.7,686.3,-198.5,686.3]],["",0,0,"residential",[-222.6,670.7,-248.1,671.6,-247.6,687.3,-222,686.4]],["浙江长城资产大楼",0,0,"commercial",[-270.3,609.5,-311.1,611,-308.7,677.4,-267.9,675.9]],["平远里",0,0,"residential",[-320.9,596.3,-346.4,597.7,-341.7,679.1,-316.3,677.7]],["",0,0,"",[-297.2,681.3,-325.8,682.8,-324.3,711.1,-295.7,709.5]],["",0,0,"commercial",[-345,768.3,-307.9,767.1,-308.3,755.6,-345.4,756.8]],["",0,0,"commercial",[-365.2,680.8,-385.3,681.5,-382.1,770.2,-362.1,769.5]],["",0,0,"commercial",[-353.6,597.1,-368.1,597.5,-376.1,601.1,-381.5,608.9,-383.3,616.6,-382.9,631.4,-379.2,631.3,-378.1,674.8,-351.8,674.1,-352.4,651.4,-357.9,651.5,-358.5,631,-352.7,630.8]],["",0,0,"commercial",[-330.7,682.2,-362.1,683.6,-358.3,768.3,-348.1,767.8,-348.9,751.1,-333.6,750.4,-335.4,710.4,-329.5,710.2]],["杭州科技大厦",0,0,"residential",[-311.8,791.3,-364,792.2,-363,851,-372.9,851.2,-372.3,889.3,-335.3,888.6,-336,850,-349.9,850.2,-350.5,813.8,-328.8,813.4,-328.5,829.9,-311.1,829.6]],["",0,0,"residential",[-251.6,787,-268.8,787.6,-268.2,805.2,-258.6,804.9,-257.5,840.7,-249.9,840.4]],["中国工商银行",0,0,"",[-414.8,792.5,-427.2,779.3,-450.2,780,-449.7,798,-456.5,798.2,-455.9,819.2,-414.1,818]],["速8酒店杭州青年路店",0,0,"hotel",[-457.3,778.5,-496,781.6,-494.7,798,-484.4,797.2,-482.9,815.6,-463.7,814.1,-464.7,801.6,-458.3,801.1,-459,792.2,-456.2,792]],["杭州市新华书店有限公司",0,0,"",[-431.8,698.5,-475,698,-475,763,-463.9,762.3,-464.4,738.5,-431,737.2]],["基督教青年会旧址",0,0,"",[-485,709.1,-498.5,709.2,-498.4,722.7,-528.1,722.9,-528,743.8,-487.9,743.6,-487.9,760.5,-479.3,760.5,-479.4,738.6,-484.9,738.7]],["",0,0,"residential",[-531.7,203.6,-515.6,203,-514.1,240.6,-491.8,239.8,-493.7,187.1,-553.4,189.4,-550.7,261.7,-529.5,260.9]],["",0,0,"",[-450.4,337,-453,283.9,-469.4,270.7,-515.6,273.3,-513.3,340.6]],["杭州市农业局",0,0,"",[-537.8,100.8,-579.5,102.8,-578.2,131.4,-564.7,130.8,-565.5,113.2,-552.8,112.6,-551.9,131,-536.4,130.3]],["杭州君悦酒店",2,0,"",[77.6,120.5,83.7,117.6,88.5,112.9,89.6,110.6,91.4,106.7,92.1,100,90.5,93.4,86.8,87.8,81.9,84,76,81.9,69.8,81.7,63.9,83.5,58.8,87.1,55,92.1,53,98,52.9,104.2,54.8,110.2,58.7,115.6,64.3,119.4,70.9,121.1]],["三三医院旧址",0,0,"",[-509.5,131,-550.5,133.5,-549.4,151.9,-553.3,152.1,-552.4,167.2,-489.4,163.3,-497.4,149.7,-508.3,150.4]],["交通银行",0,0,"",[-415.5,603.6,-433.9,603.8,-462.3,604.1,-462,631.2,-448.6,631.1,-448.8,609.4,-440.7,609.4,-440.7,615.7,-429.5,615.6,-429.1,644.2,-421.2,644.1,-421.3,640.4,-418.7,640.4,-418.8,635.7,-408.9,635.6,-409.1,619.1,-415.3,619.2]],["",0,0,"",[-432.7,631.7,-459.1,632.9,-458.3,652,-431.8,650.8]],["汉庭酒店（杭州西湖解百店）",0,0,"hotel",[-464.6,602.9,-495,603.3,-494.4,651.4,-464,651]],["",0,0,"",[-498.9,602.8,-533,603.1,-532.5,646.1,-498.5,645.7]],["",0,0,"residential",[-511.8,790.7,-557,795.2,-552,846.9,-538,845.5,-541.9,806.1,-525.4,804.5,-521.6,843.5,-506.9,842.1]],["",0,0,"commercial",[15.3,315.3,15.6,325.3,15.8,333.8,16,338.1,37.5,337.5,36.8,314.7]],["",0,0,"retail",[35.8,280.7,35.1,255.5,13.6,256.1,14.2,281.3]],["",0,0,"retail",[39.4,255.3,39.8,278,59.4,277.3,58.8,254.5]],["",0,0,"commercial",[151.1,333.7,150.5,315.3,62.2,318.4,61.7,303.8,41.4,304.4,42.1,323.9,42.6,337.3]],["",0,0,"retail",[68.4,254.2,69.7,312.8,87.7,312.4,86.6,263.8,91.5,263.7,92.6,311.9,109.5,311.5,108.4,263.2,113.7,263,114.8,309.9,126.3,309.7,125.2,261.6,130.2,261.5,131.3,309.2,153.7,308.7,152,251.6]],["",0,0,"",[-382.3,124.6,-381.6,126,-372,121.1,-370.6,122.2,-365.9,122.1,-364.2,120.5,-364.9,116.8,-368.5,114.5,-371.8,115.5,-373.7,117.5,-373,119.2,-383,123.1]],["",0,0,"",[279.7,-103.1,270.8,-107.8,265,-97,275,-92.2]],["",0,0,"",[-481.6,6.2,-487.4,-.8,-497.7,8,-491.8,14.9]],["",0,0,"",[-237.3,217,-240.1,213,-244.7,216.3,-241.9,220.3]],["望湖宾馆",0,0,"hotel",[555.3,-147.6,536,-144,536.7,-140,521.2,-137.9,505.9,-119.7,507.9,-104.2,497.8,-102.3,500.8,-87.3,502.6,-77.9,540.6,-85.3,547.5,-49.8,570.7,-54.1,568.7,-64.2,594.1,-68.9,590.2,-90.8,610.1,-94.4,610.9,-89.9,631.5,-93.6,625.6,-126.6,586.3,-119.5,579.7,-124.2,587.2,-135.7,573,-145.1,565.5,-133.5,556.7,-139.7]],["",0,0,"",[540.5,-57.4,535.5,-80.3,502.4,-73,507.4,-50.2]],["",0,0,"",[563.4,-37.8,553.3,-35.5,553.5,-32.9,541.2,-32,549.1,-27.7,556.1,-27.9,554.4,-16.3,563.4,-14.8,564.5,-24.1]],["",0,0,"",[549.1,-27.7,541.2,-32,532.5,-34.8,528.4,-24.7,550.4,-17,553.3,-26]],["",0,0,"",[555.5,20.5,507.9,-7.9,504.2,-8.3,502,-6.6,501,-3.8,501.4,-.6,503.7,2.4,500.5,7.4,503.9,9.2,520.6,17.9,520.6,20,514.3,19.6,514.8,36.6,521,36.6,520.8,39.1,506.9,46.8,503.7,48.6,506.8,54.2,503.8,56.3,502.9,59.1,503.3,61.9,505.3,63.6,508.1,63.8,512,62.3,514.6,61.7,555.6,37]],["",0,0,"",[520.6,17.9,503.9,9.2,499.7,17.7,498.8,23,498.1,30.1,499,35.7,502.2,41.7,506.9,46.8,520.8,39.1,521,36.6,514.8,36.6,514.3,19.6,520.6,20]],["",0,0,"",[169.3,720.5,113.8,698.1,114.7,736.1,138.1,743.5,141.7,823.6,173.8,821.3,171.3,764.6]],["文保建筑",0,0,"",[121.1,764.5,112.6,764.7,112.7,773.7,121.4,773.3]],["",0,0,"hospital",[187.9,632.2,186,602.2,185.8,600.3,185.1,598.7,183.9,597.3,182.3,596.4,180.5,596.1,178.7,596.4,177.1,597.3,175.8,598.7,175.2,600.4,175,602.2,175.4,617.1,175.5,621.1,176.1,632.6]]],Lf=["岚岸咖啡","桥影书房","瓦灯茶铺","湖风面包","苔阶陶坊","暮色唱片","云埠花店","青芜甜点","雨巷修表","白屿照相","潮纹纸品","檐铃杂货","星渠冰室","柳窗面馆","初汀茶社","松檐布铺","拾光画框","远岫香铺","风荷汽水","云岑书局","灯船夜点","石纹工坊","浅湾果铺","绢桥文具","听雨旧物","望汀早餐","青埠花房","月瓦手作","水巷酥饼","临窗咖啡","南枝织物","白波唱片","渔灯面点","桑影茶房","纸船玩具","浅滩果茶","青镜银饰","潮汐书架","流云布店","晚钟面馆","西泠纸艺","岸灯食堂","雨舟画室","荷塘糖水","桥南鞋铺","水纹陶器","夜汀修理","风铃花坊"],pv=Object.values(Wi).map(([i])=>i),Hc=[];for(const[i,,,e,t]of Pf){if(i.includes("Apple")||/train_station|school|hospital|hotel|residential|apartments/.test(e))continue;let n=null;for(let s=0;s<t.length;s+=2){const r=(s+2)%t.length,a=t[r]-t[s],o=t[r+1]-t[s+1],l=Math.hypot(a,o);if(l<8)continue;const c=(t[s]+t[r])/2-o/l*.9,h=(t[s+1]+t[r+1])/2+a/l*.9,d=Math.min(...pv.map(p=>ds(p,null,c,h).d))-Math.min(l,18)*.22;(!n||d<n.score)&&(n={x:c,z:h,score:d})}n&&Hc.push(n)}Hc.sort((i,e)=>i.score-e.score);const Ba=[];for(const i of Hc){if(Ba.length>=Lf.length)break;Ba.some(e=>Math.hypot(i.x-e.x,i.z-e.z)<5)||Ba.push(i)}const mv=Ba.map(({x:i,z:e},t)=>[Lf[t],"fictional_shop",i,e]),Da={x0:-545,x1:568,z0:-118,z1:800},mu=(i,e,t=0)=>i>Da.x0-t&&i<Da.x1+t&&e>Da.z0-t&&e<Da.z1+t,gv=[["君悦",66],["解百新世纪",60],["新世纪",60],["工联CC二期",44],["工联CC",38],["龙翔服饰城",30],["明珠",46],["in77",26],["in88",22],["东坡大世界",24],["望湖宾馆",40],["友好饭店",78],["国贸",70],["银行",44],["大厦",56],["大酒店",52],["酒店",38],["宾馆",32],["饭店",30],["电信",42],["医院",38],["公寓",44],["国际",60],["中心",46],["广场",40],["书店",24],["剧院",20]];function xv([i,e,t,n,s],r){if(t)return t;if(e)return e*3.9;for(const[o,l]of gv)if(i.includes(o))return l;let a=0;for(let o=0;o<s.length;o+=2){const l=(o+2)%s.length;a+=s[o]*s[l+1]-s[l]*s[o+1]}return a=Math.abs(a)/2,n==="apartments"||n==="residential"?20+Math.floor(r(0,5))*3.3:n==="hospital"||n==="hotel"||n==="commercial"?a>1500?30:22:(a<120?8:a<400?13:a<1200?18:a<3e3?23:27)+r(0,3)}function vv(i,e){const{scene:t,M:n,add:s,box:r,cyl:a,tick:o}=i,l=[];let c=7;const h=(I=0,be=1)=>I+(c=c*16807%2147483647)/2147483647*(be-I),f=[],d=[],p=[],m=[],_=[],g=[];for(const I of Pf){const[be,,,he,xe]=I;if(he==="train_station"||be.includes("Apple"))continue;const E=xv(I,h),y=he==="apartments"||he==="residential",Y=/in77|in88|东坡|银泰/.test(be)?4:/君悦|宾馆|酒店|饭店/.test(be)?5:/工联|服饰城|解百|新世纪|明珠|百货/.test(be)?6:y?2:E>62?6:E<15?3:h()<.5?2:E<34?3:1,de=Y+h()*.98,ae=xe.length/2;let we=0,oe=null;for(let ve=0;ve<ae;ve++){const W=xe[ve*2],ge=xe[ve*2+1],fe=xe[(ve+1)%ae*2],Pe=xe[(ve+1)%ae*2+1],Ce=fe-W,Le=Pe-ge,Be=Math.hypot(Ce,Le);if(Be<.05)continue;const tt=-Le/Be,Re=Ce/Be,Xe=f.length/3;f.push(W,Se,ge,fe,Se,Pe,fe,Se+E,Pe,W,Se+E,ge);for(let nt=0;nt<4;nt++)d.push(tt,0,Re);p.push(we,de,E,0,we+Be,de,E,0,we+Be,de,E,0,we,de,E,0),m.push(Xe,Xe+1,Xe+2,Xe,Xe+2,Xe+3),we+=Be,g.push({ax:W,az:ge,bx:fe,bz:Pe,nx:tt,nz:Re,L:Be,H:E,style:Y,u0:we-Be,seed:de}),(!oe||Be>oe.L)&&(oe={L:Be,x:(W+fe)/2,z:(ge+Pe)/2,nx:tt,nz:Re})}const ie=[];for(let ve=0;ve<ae;ve++)ie.push(new Ee(xe[ve*2],xe[ve*2+1]));const te=f.length/3;for(const ve of ie)f.push(ve.x,Se+E,ve.y),d.push(0,1,0),p.push(0,de,E,1);for(const[ve,W,ge]of Qn.triangulateShape(ie,[]))m.push(te+ve,te+W,te+ge);i.polys.push({pts:xe,h:E}),be&&oe.L>9&&!/in77|工联|东坡|in88/.test(be)&&_.push({name:be,H:E,...oe})}const u=new wt;u.setAttribute("position",new Ze(f,3)),u.setAttribute("normal",new Ze(d,3)),u.setAttribute("fa",new Ze(p,4)),u.setIndex(m);const v=pu(!0);v.side=Lt;const S=new ft(u,v);S.castShadow=S.receiveShadow=!0,i.solids.add(S);for(const I of _){const be=Ui([{text:I.name,font:'bold 76px "Microsoft YaHei","Segoe UI",sans-serif',color:"#f4e6c0"}],{w:1024,h:128,bg:"#1a1410"}),he=Math.min(I.L*.6,Math.max(6,I.name.length*1.3)),xe=s(new Ft(he,he/8),new Qe({map:be,emissiveMap:be,emissive:16777215,emissiveIntensity:.4,roughness:.5}),I.x+I.nx*.25,Se+Math.min(I.H-1.5,6.2),I.z+I.nz*.25,{shadow:!1});xe.rotation.y=Math.atan2(I.nx,I.nz)}const M=[],T=(I,be,he,xe,E,y,Y,de,ae)=>{const we=[[I,be],[he,xe],[he+E*ae,xe+y*ae],[I+E*ae,be+y*ae]],oe=(ie,te)=>[we[ie][0],te,we[ie][1]];for(const[ie,te,ve,W]of[[oe(3,Y),oe(2,Y),oe(2,de),oe(3,de)],[oe(0,de),oe(3,de),oe(2,de),oe(1,de)],[oe(0,Y),oe(1,Y),oe(2,Y),oe(3,Y)],[oe(0,Y),oe(3,Y),oe(3,de),oe(0,de)],[oe(1,Y),oe(1,de),oe(2,de),oe(2,Y)]])M.push(...ie,...te,...ve,...ie,...ve,...W)};for(const I of g){if(I.L<2.5)continue;const be=(I.bx-I.ax)/I.L,he=(I.bz-I.az)/I.L,xe=I.style===4||I.style===3;if(T(I.ax,I.az,I.bx,I.bz,I.nx,I.nz,Se+I.H-.55,Se+I.H+.25,.4),xe&&I.H>6&&T(I.ax,I.az,I.bx,I.bz,I.nx,I.nz,Se+(I.style===4?10:4.5),Se+(I.style===4?10.4:4.75),I.style===4?1.1:.8),I.style===1||I.style===5)for(let E=3.3;E<I.H-1.2;E+=3.3)T(I.ax,I.az,I.bx,I.bz,I.nx,I.nz,Se+E-.09,Se+E+.09,.12);if(I.style===4)for(let E=(6.5-(I.u0+I.seed*37)%6.5)%6.5;E<I.L;E+=6.5){const y=Math.max(0,E-.4),Y=Math.min(I.L,E+.4);T(I.ax+be*y,I.az+he*y,I.ax+be*Y,I.az+he*Y,I.nx,I.nz,Se,Se+10,.5)}}const A=new wt;A.setAttribute("position",new Ze(M,3)),A.computeVertexNormals();const x=new ft(A,new Qe({color:11840410,roughness:.85,side:Lt}));x.castShadow=x.receiveShadow=!0,i.solids.add(x);const b={1:[3,3.3,.05,.95,.3,.86],2:[3.6,3.3,.2,.8,.3,.84],3:[5,4.5,.14,.86,.34,.86],4:[6.5,5,.14,.86,.34,.86],5:[3,3.3,.05,.95,.3,.86]},L=[],P=[],N=[],V=[],F=new Dt;for(const I of g){if(I.L<3)continue;const be=(I.bx-I.ax)/I.L,he=(I.bz-I.az)/I.L,xe=Math.atan2(I.nx,I.nz),E=(te,ve,W=0)=>[I.ax+be*te+I.nx*W,Se+ve,I.az+he*te+I.nz*W,xe];if(I.style===6){for(let te=(1.5-(I.u0+I.seed*37)%1.5)%1.5;te<I.L;te+=1.5)V.push([...E(te,.5),I.H-1.6]);continue}const[y,Y,de,ae,we,oe]=b[I.style],ie=I.style===4?2:I.style===3?1:0;for(let te=(y-(I.u0+I.seed*37)%y)%y;te+y<=I.L+.01;te+=y)for(let ve=0;;ve++){const W=ve*Y,[ge,fe,Pe,Ce]=ve<ie?[.05,.95,.04,.7]:[de,ae,we,oe];if(W+Ce*Y>I.H-1.1||W>21)break;if(L.push([...E(te+ge*y,W+Pe*Y),(fe-ge)*y,(Ce-Pe)*Y,I.style===2?15329507:2303530]),I.style===2&&ve>0){const Le=h();Le<.45?P.push([...E(te+.08*y,W),.84*y]):Le<.8&&N.push(E(te+.84*y,W+.12*Y))}}}const C=(I,be,he,xe,E,y)=>new st(I,be,he).translate(xe,E,y).toNonIndexed(),O=(I,be,he,xe,E)=>{const y=new on(I,be,he.length);return he.forEach((Y,de)=>{F.position.set(Y[0],Y[1],Y[2]),F.rotation.set(0,Y[3],0),xe(Y),F.updateMatrix(),y.setMatrixAt(de,F.matrix),Y[6]!==void 0&&y.setColorAt(de,new Ke(Y[6]))}),y.castShadow=E,y.receiveShadow=!0,y.frustumCulled=!1,t.add(y),y},k=ss([C(.035,1,.13,.0175,.5,.065),C(.035,1,.13,.9825,.5,.065),C(1,.04,.13,.5,.98,.065),C(1,.04,.13,.5,.02,.065),C(.022,1,.1,.5,.5,.05),C(1.06,.05,.25,.5,-.025,.125)]);O(k,new Qe({roughness:.45,metalness:.35}),L,I=>F.scale.set(I[4],I[5],1),!1);const w=ss([C(1,.14,1.25,.5,-.07,.625),C(1,.62,.08,.5,.31,1.21),C(.08,.62,1.25,.04,.31,.625),C(.08,.62,1.25,.96,.31,.625),C(1,.05,.06,.5,1.05,1.21),C(.04,.4,.04,.04,.84,1.21),C(.04,.4,.04,.96,.84,1.21)]);O(w,new Qe({color:14276043,roughness:.85}),P,I=>F.scale.set(I[4],1,1),!0);const z=ss([C(.82,.56,.3,0,.28,.2),C(.9,.04,.42,0,-.02,.21),C(.5,.42,.02,-.1,.28,.36)]);O(z,new Qe({color:14606304,roughness:.6}),N,()=>F.scale.set(1,1,1),!0),O(C(.07,1,.18,0,.5,.09),new Qe({color:9146518,roughness:.3,metalness:.9}),V,I=>F.scale.set(1,I[4],1),!1),console.assert(L.length>3e3&&P.length>100,"joinery self-check: frames "+L.length+", balconies "+P.length);const U=[["星巴克","#00704a","#fff"],["肯德基","#c8102e","#fff"],["麦当劳","#da291c","#ffc72c"],["必胜客","#c8102e","#fff"],["Pizza","#c8102e","#fff"],["瑞幸","#0f2a8a","#fff"],["Luckin","#0f2a8a","#fff"],["优衣库","#e60012","#fff"],["无印良品","#7f0019","#fff"],["喜茶","#111","#fff"],["霸王茶姬","#7a1420","#f3e2c0"],["蔚来","#f4f4f2","#111"],["Sony","#000","#fff"],["Balenciaga","#000","#fff"],["全家","#00a041","#fff"],["罗森","#0068b7","#fff"],["银行","#a8141c","#fff"],["知味观","#5a1a12","#f0d9a0"],["老凤祥","#8a1218","#f0d9a0"],["劳斯莱斯","#0b0b0d","#d8d8d8"],["兰博基尼","#0b0b0d","#e0c060"]],J=/bicycle_rental|ferry_terminal|attraction|artwork|ticket|hotel|hostel/;let D=0;for(const[I,be,he,xe]of mv){if(J.test(be))continue;let E=null;for(const oe of g){if(oe.L<4)continue;const ie=Math.max(.15,Math.min(.85,((he-oe.ax)*(oe.bx-oe.ax)+(xe-oe.az)*(oe.bz-oe.az))/(oe.L*oe.L))),te=oe.ax+(oe.bx-oe.ax)*ie,ve=oe.az+(oe.bz-oe.az)*ie,W=Math.hypot(he-te,xe-ve);W<40&&(!E||W<E.d)&&(he-te)*oe.nx+(xe-ve)*oe.nz>-6&&(E={d:W,px:te,pz:ve,w:oe})}if(!E)continue;const[,y,Y]=U.find(([oe])=>I.includes(oe))||["","#16130f","#f2e3bd"],de=Math.min(E.w.L*.7,Math.max(3.2,I.length*(/^[\x20-\x7e]+$/.test(I)?.42:.8))),ae=Ui([{text:I,font:'bold 84px "Microsoft YaHei","Segoe UI",sans-serif',color:Y}],{w:Math.round(128*de/.85),h:128,bg:y}),we=s(new Ft(de,.85),new Qe({map:ae,emissiveMap:ae,emissive:16777215,emissiveIntensity:.6,roughness:.4}),E.px+E.w.nx*(E.w.style===4?1.16:.86),Se+(E.w.style===4?4.2:3.75),E.pz+E.w.nz*(E.w.style===4?1.16:.86),{shadow:!1});we.rotation.y=Math.atan2(E.w.nx,E.w.nz),D++}console.assert(D>30,"expected most mapped shops to find a wall, placed "+D);for(const[I,be,he,xe,E,y,Y]of Qa){const de=(be+he)/2,ae=(xe+E)/2,we=mu(de,ae);if(I.startsWith("Apple")||we||(l.push([de,ae,he-be,y,E-xe,0,1]),i.colliders.push(new Cn(new G(be,0,xe),new G(he,y,E)))),!Y||I==="in77 B")continue;const oe=Y.startsWith("in77"),ie=Ui([{text:Y,font:`bold ${oe?150:110}px "Segoe UI","Microsoft YaHei",sans-serif`},...oe?[{text:"湖滨银泰",font:'bold 70px "Microsoft YaHei",sans-serif',color:"#ffd9a0"}]:[]],{w:1024,h:384,bg:oe?"#b3122a":"#14181d"}),te=new Qe({map:ie,emissiveMap:ie,emissive:16777215,emissiveIntensity:.55,roughness:.5}),ve=Math.min(22,(he-be)*.5),W=Se+Math.min(y-4,15);s(new Ft(ve,ve*.375),te,de,W,xe-.6,{ry:Math.PI,shadow:!1}),s(new Ft(ve,ve*.375),te,de,W,E+.6,{shadow:!1})}const le=Object.values(Wi).map(([I,be])=>({pts:I,w:be})),_e=Object.values(Ls);for(let I=-2600;I<2500;I+=62)for(let be=40;be<4300;be+=62){const he=I+h(8,54),xe=be+h(8,54),E=h(26,44),y=h(24,40),Y=Math.max(E,y)/2+3;if(mu(he,xe,Y)||(he>-911?!Kn(Af,he,xe):xe<130)||Kn(bn,he,xe)||_e.some(([oe,ie,te])=>Math.hypot(he-oe,xe-ie)<te+30)||Qa.some(([,oe,ie,te,ve])=>he>oe-Y-8&&he<ie+Y+8&&xe>te-Y-8&&xe<ve+Y+8)||le.some(oe=>ds(oe.pts,null,he,xe).d<oe.w/2+Y+2))continue;const de=he>1200&&xe<1100,we=xe<620&&!de?h(14,30):de?50+Math.pow(h(),1.6)*130:h()<.07?h(95,165):26+Math.pow(h(),1.8)*60;l.push([he,xe,E,we,y,0,0]),i.colliders.push(new Cn(new G(he-E/2,0,xe-y/2),new G(he+E/2,we,xe+y/2)))}const[Q,me]=Fn.qjnt;for(let I=0;I<80;I++)l.push([Q+h(-650,650),me+h(-500,600),h(34,52),110+Math.pow(h(),1.7)*200,h(34,52),h(0,.7),0]);for(const I of[...l])I[3]>95&&l.push([I[0],I[1],I[2]*.72,I[3]*.16,I[4]*.72,I[5],0,I[3]]);const ye=new st(1,1,1).translate(0,.5,0),Te=new on(ye,pu(!1),l.length),H=new Dt,K=new Float32Array(l.length);l.forEach(([I,be,he,xe,E,y,,Y=0],de)=>{H.position.set(I,Se+Y,be),H.scale.set(he,xe,E),H.rotation.y=y,H.updateMatrix(),Te.setMatrixAt(de,H.matrix),K[de]=h()}),ye.setAttribute("seed",new kl(K,1)),Te.frustumCulled=!1,Te.castShadow=Te.receiveShadow=!0,i.solids.add(Te);const se=l.filter(I=>I[3]<34&&!I[6]&&I.length<8),B=l.filter(I=>I[3]>=34&&I.length<8),j=new so;j.moveTo(-.5,0),j.lineTo(.5,0),j.lineTo(0,1),j.closePath();const re=n.tile.clone();for(const I of["map","normalMap","roughnessMap"])re[I]=re[I].clone(),re[I].repeat.set(4,3);re.metalnessMap=re.roughnessMap;const q=new on(new Lc(j,{depth:1,bevelEnabled:!1}).translate(0,0,-.5),re,se.length);se.forEach(([I,be,he,xe,E],y)=>{H.position.set(I,Se+xe,be),H.rotation.y=he>E?Math.PI/2:0,H.scale.set(Math.min(he,E)+1.6,Math.min(he,E)*.3,Math.max(he,E)+1.6),H.updateMatrix(),q.setMatrixAt(y,H.matrix)});const ee=new on(new st(1,1,1).translate(0,.5,0),n.concrete,B.length*2);B.forEach(([I,be,he,xe,E,y],Y)=>{H.rotation.y=y,H.position.set(I+he*.14,Se+xe,be-E*.1),H.scale.set(he*.34,3,E*.3),H.updateMatrix(),ee.setMatrixAt(Y*2,H.matrix),H.position.set(I-he*.24,Se+xe,be+E*.22),H.scale.set(he*.14,1.8,E*.16),H.updateMatrix(),ee.setMatrixAt(Y*2+1,H.matrix)});for(const I of[q,ee])I.castShadow=I.receiveShadow=!0,I.frustumCulled=!1,t.add(I);const ue=(I,be,he,xe,E)=>{const y=new ft(I,be);return y.position.set(he,xe,E),t.add(y),y};ue(new ln(46,48,32),new Qe({color:14263866,metalness:1,roughness:.22}),Q+200,44,me-420),ue(new ln(60,40,20,0,Math.PI*2,0,Math.PI/2),new Qe({color:13620956,metalness:.7,roughness:.25}),Q+60,0,me-460).scale.set(1,.42,.55);const Me=(I,be,he)=>{const xe=new gt(26,32,250,4,40),E=xe.attributes.position;for(let y=0;y<E.count;y++){const Y=(E.getY(y)/250+.5)*.9*he,de=E.getX(y),ae=E.getZ(y);E.setXYZ(y,de*Math.cos(Y)-ae*Math.sin(Y),E.getY(y),de*Math.sin(Y)+ae*Math.cos(Y))}xe.computeVertexNormals(),ue(xe,new Qe({color:10466504,metalness:.9,roughness:.18}),I,125,be)};Me(Q+520,me+260,1),Me(Q+470,me+320,-1);const pe=[],Ue=(I,be,he)=>{for(let xe=be;xe<=he;xe+=1.1)pe.push([I,xe,4,.5])},De=(I,be,he)=>{for(let xe=be;xe<=he;xe+=1.1)pe.push([xe,I,.5,4])};for(const[I,be,he]of[[2,348,14],[165,342,10],[-143,353,10],[-262,358,10],[-398,363,20],[468,331,24]])Ue(I-he/2-4,be-11,be+11),Ue(I+he/2+4,be-11,be+11),De(be-16,I-he/2+1,I+he/2-1),De(be+16,I-he/2+1,I+he/2-1);const He=new on(new st(1,.02,1),i.over(new Qe({color:15263450,roughness:.6}),8),pe.length);pe.forEach(([I,be,he,xe],E)=>{H.position.set(I,Se+.1,be),H.rotation.set(0,0,0),H.scale.set(he,1,xe),H.updateMatrix(),He.setMatrixAt(E,H.matrix)}),He.receiveShadow=!0,He.frustumCulled=!1,t.add(He);const Ye=36,ke=new on(new gt(.1,.16,1,8).translate(0,.5,0),new Qe({color:15923455,emissive:10470624,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.2,depthWrite:!1}),Ye);ke.frustumCulled=!1,t.add(ke),i.noAO.push(ke),o.push(I=>{for(let be=0;be<Ye;be++){const he=(be-Ye/2)*2.6;H.position.set(-12-.855*he-12,0,22+.52*he-20),H.rotation.set(0,0,0),H.scale.set(1,2+9*Math.pow(Math.abs(Math.sin(I*.9+be*.32)*Math.cos(I*.37+be*.11)),1.5),1),H.updateMatrix(),ke.setMatrixAt(be,H.matrix)}ke.instanceMatrix.needsUpdate=!0});const X=new Qe({color:14164778,roughness:.5}),ot=new Qe({color:328965,roughness:1}),Je=[],et=(I,be,he,xe,E)=>{const y=Xn[I];r(3.6,.1,6.4,ot,he,Se+.06,xe,{shadow:!1});for(let ae=0;ae<6;ae++)r(3.2,.18,.5,n.concrete,he,Se-.1-ae*.2,xe+E*(2.4-ae*.9),{s:1});for(const ae of[-1.9,1.9]){r(.12,1.1,6.4,n.glass,he+ae,Se+.55,xe,{collide:!0});for(const we of[-3,3])a(.07,.07,3,n.galv,he+ae,Se+1.5,xe+we,{},8)}r(3.9,1.1,.12,n.glass,he,Se+.55,xe-E*3.2,{collide:!0}),r(4.4,.14,7.2,n.glass,he,Se+3.05,xe,{s:1}),r(4.4,.3,.2,X,he,Se+2.8,xe+E*3.5,{s:1});const Y=Ui([{text:`地铁 ${y.name}`,font:'bold 96px "Microsoft YaHei",sans-serif'},{text:`${y.en} · Line 1${be?" · Exit "+be:""}`,font:'600 54px "Segoe UI",sans-serif',color:"#ffd6d6"}],{w:1024,h:256,bg:"#d8232a"}),de=new Qe({map:Y,emissiveMap:Y,emissive:16777215,emissiveIntensity:.5});s(new Ft(4,1),de,he,Se+3.7,xe+E*3.55,{ry:E>0?0:Math.PI,shadow:!1}),s(new Ft(4,1),de,he,Se+3.7,xe+E*3.45,{ry:E>0?Math.PI:0,shadow:!1}),Je.push({si:I,x:he,z:xe+E*4.4})};return et(1,"A",148,374,1),et(1,"B",148,335,1),et(1,"C",2,334,-1),et(1,"D",2,374,1),et(0,"",1006,297,-1),et(2,"",-900,750,1),{metro:Je}}function Mv(i){const{scene:e,M:t,add:n,box:s,inBuilding:r}=i,[,a,o,l,c]=Qa.find(([P])=>P.startsWith("Apple")),h=(a+o)/2,f=(l+c)/2,d=o-a-1,p=c-l-1,m=10.8,_=new Qe({color:11450553,metalness:.55,roughness:.38}),g=new Qe({color:13819612,metalness:.25,roughness:.38}),u=new Qe({color:8633799,metalness:.14,roughness:.15,transparent:!0,opacity:.25,depthWrite:!1,side:Lt}),v=new Qe({color:16770741,emissive:16766114,emissiveIntensity:1.65}),S=new Qe({color:6845818,roughness:.62,metalness:.15});s(d+.6,.24,p+.6,S,h,Se+.09,f,{collide:!0}),s(d+1.2,.38,p+1.2,g,h,Se+m,f),s(d-.7,.14,p-.7,S,h,Se+m-.21,f);const M=(P,N,V,F,C,O)=>{const k=n(new Ft(P,N),u,V,F,C,{ry:O,shadow:!1,collide:!0});i.noAO.push(k)};for(const P of[-1,1]){const N=f+P*p/2,V=h+P*d/2,F=3.8,C=(d-F)/8,O=p/8;for(const k of[-1,1]){for(let w=0;w<4;w++){const z=h+k*(F/2+(w+.5)*C);M(C+.03,m-.7,z,Se+m/2,N,0),s(.16,m-.3,.19,_,z+k*C/2,Se+m/2,N)}s(.2,m-.3,.19,_,h+k*F/2,Se+m/2,N)}M(F,m-3.3,h,Se+(m+3)/2,N,0);for(let k=0;k<8;k++){const w=f-p/2+(k+.5)*O;M(O+.03,m-.7,V,Se+m/2,w,Math.PI/2),s(.19,m-.3,.16,_,V,Se+m/2,w+O/2)}s(d,.15,.16,_,h,Se+3.05,N),s(.16,.15,p,_,V,Se+3.05,f)}for(const P of[-p*.31,0,p*.31]){s(d*.78,.07,.22,v,h,Se+m-.34,f+P,{shadow:!1});for(const N of[-d*.23,d*.23])s(2.8,.09,1.15,g,h+N,Se+1.06,f+P),s(2.35,.8,.73,t.wood,h+N,Se+.63,f+P,{collide:!0}),s(1.35,.05,.18,v,h+N,Se+1.13,f+P,{shadow:!1})}const T=new Qe({color:3423554,metalness:.5,roughness:.5}),A=new Dt,x=[[],[],[],[]],b=(P,N,V,F,C)=>x[P].push([N,V,F,C]),L=[["东坡路",43],["学士路",55],["仁和路",46]];for(const[P,N]of L){const[V,F]=Wi[P],C=Yr(V,F/2);for(let O=36;O<C.len-30;O+=N){const[k,w,z,U]=Mi(C,O),J=Math.round(O/N)%2?-1:1,D=k-U*(F/2+2.35)*J,le=w+z*(F/2+2.35)*J;if(!En(D,le)||r(D,le)||Math.hypot(D-h,le-f)<24)continue;const _e=Math.atan2(-U,z);b(0,D,Se+.5,le,_e);for(const ye of[-.78,.78])b(1,D+ye*z,Se+.23,le+ye*U,_e);const Q=D+3*z,me=le+3*U;En(Q,me)&&!r(Q,me)&&(b(2,Q,Se+1.7,me,0),b(3,Q,Se+3.44,me,0),i.lamps.push([Q,me]))}}for(const[P,N,V]of[[0,new st(2.2,.11,.48),t.wood],[1,new st(.13,.46,.39),T],[2,new gt(.045,.07,3.4,8),T],[3,new st(.42,.12,.23),v]]){if(!x[P].length){N.dispose();continue}const F=new on(N,V,x[P].length);x[P].forEach(([C,O,k,w],z)=>{A.position.set(C,O,k),A.rotation.y=w,A.updateMatrix(),F.setMatrixAt(z,A.matrix)}),F.receiveShadow=!0,e.add(F)}}const At=(i,e,t)=>new G(i,e,t);function Ps(i,e,t){const n=e.clone().sub(i),s=new gt(t,t,n.length(),5);return s.applyQuaternion(new ms().setFromUnitVectors(At(0,1,0),n.clone().normalize())),s.translate((i.x+e.x)/2,(i.y+e.y)/2,(i.z+e.z)/2),s}const mr=(i,e,t,n=.025)=>new er(new Pc(i,i.clone().add(e).multiplyScalar(.5).setY(Math.min(i.y,e.y)-t),e),16,n,5);function Na(i,e){const t=[],n=Math.round(i/.07);for(let s=0;s<=n;s++)t.push(new Ee(e*(s%2?1.9:1)*(1-.3*s/n),s*i/n));return new Wr(t,16)}function _v(i){const{scene:e,M:t,add:n,box:s,cyl:r,colliders:a}=i,o=(w,z,U=!0)=>n(w,z,0,0,0,{shadow:U}),l=-92,c=71;s(46,.12,15,t.concrete,l,Se+.06,c,{s:3});for(let w=0;w<3;w++){const z=l-13+w*13,U=c+1;s(4.2,.3,3.4,t.concrete,z,Se+.27,U,{s:2}),s(3,2.6,1.9,t.green,z,Se+1.72,U,{s:1.5,r:.08,collide:!0});for(const D of[-1,1]){const le=s(2.6,1.9,.5,t.fins,z,Se+1.6,U+D*1.25,{s:1.3});le.material=t.fins,s(2.7,.08,.56,t.galv,z,Se+2.6,U+D*1.25,{s:1})}const J=r(.38,.38,2.6,t.green,z,Se+3.75,U-.2,{},20);J.rotation.z=Math.PI/2;for(const D of[-1,1])s(.08,.5,.08,t.galv,z+D,Se+3.25,U-.2,{s:1});for(let D=-1;D<=1;D++)n(Na(1.7,.09),t.porcelain,z+D*.85,Se+3,U+.5),r(.05,.05,.25,t.galv,z+D*.85,Se+4.8,U+.5),n(Na(.6,.06),t.porcelain,z+D*.5,Se+3,U-.75),o(mr(At(z+D*.85,Se+4.9,U+.5),At(z+D*2.2,Se+8.1,c+5.5),.5),t.copper),n(Na(1.1,.07),t.porcelain,z+D*2.2,Se+8.1,c+5.5,{rx:Math.PI});n(new Ft(.7,.7),new Qe({map:Ui([{text:"⚡",font:"150px sans-serif",color:"#111"},{text:"高压危险",font:'bold 44px "Microsoft YaHei",sans-serif',color:"#111"}],{w:256,h:256,bg:"#f2c300"}),roughness:.5}),z,Se+2,U-.97,{ry:Math.PI,shadow:!1})}const h=Se+9.4;for(const w of[l-21,l,l+21])for(const z of[-.7,.7])s(.3,9.4,.3,t.galv,w,Se+4.7,c+5.5+z,{s:1});for(const w of[l-21,l,l+21])i.circles.push({x:w,z:c+5.5,r:.8});s(43,.5,1.7,t.galv,l,h,c+5.5,{s:1});for(let w=-1;w<=1;w++)o(mr(At(l-20,Se+8.1,c+5.5+w*.5),At(l+20,Se+8.1,c+5.5+w*.5),.25,.04),t.copper);const f=document.createElement("canvas");f.width=f.height=64;const d=f.getContext("2d");d.strokeStyle="#b9bcc0",d.lineWidth=3;for(let w=-64;w<128;w+=16)d.beginPath(),d.moveTo(w,0),d.lineTo(w+64,64),d.moveTo(w+64,0),d.lineTo(w,64),d.stroke();const p=new Si(f);p.wrapS=p.wrapT=$n,p.colorSpace=Gt;const m=(w,z,U,J)=>{const D=p.clone();D.repeat.set(w*5,12),D.needsUpdate=!0,i.noAO.push(n(new Ft(w,2.4),new Qe({map:D,alphaTest:.5,side:Lt,metalness:.7,roughness:.5}),z,Se+1.2,U,{ry:J}));for(let le=0;le<=w;le+=3.5){const _e=z+(J?0:le-w/2),Q=U+(J?le-w/2:0);r(.04,.04,2.5,t.galv,_e,Se+1.25,Q,{},6)}};m(46,l,78.6,0),m(15,l-23,71.2,Math.PI/2),m(15,l+23,71.2,Math.PI/2),a.push(new Cn(At(l-23.2,Se,63.6),At(l-22.8,Se+2.4,78.8)),new Cn(At(l+22.8,Se,63.6),At(l+23.2,Se+2.4,78.8)));for(let w=l-21;w<=l+21;w+=3)r(.09,.09,.9,t.yellow,w,Se+.45,63.4,{},12);const _=[],g=30,u=w=>3.2-2.5*(w/g);for(let w=0;w<g;w+=3.75){const z=u(w),U=u(w+3.75),J=w+3.75;for(const[D,le]of[[1,1],[1,-1],[-1,-1],[-1,1]]){_.push(Ps(At(D*z,w,le*z),At(D*U,J,le*U),.09));const _e=le===D?D:-D,Q=le===D?-le:le;_.push(Ps(At(D*z,w,le*z),At(_e*U,J,Q*U),.045),Ps(At(D*U,J,le*U),At(_e*U,J,Q*U),.045))}}const v=[[19,7],[23.5,5.5],[28,4]];for(const[w,z]of v)for(const U of[-1,1])_.push(Ps(At(0,w,.5),At(U*z,w,0),.06),Ps(At(0,w,-.5),At(U*z,w,0),.06),Ps(At(0,w+2,0),At(U*z,w,0),.045)),_.push(Na(1.6,.08).rotateX(Math.PI).translate(U*z,w,0));const S=ss(_.map(w=>{const z=w.toNonIndexed();return z.deleteAttribute("uv"),z})),M=[[-62,74],[-210,190],[-420,330]];M.forEach(([w,z],U)=>{n(S,t.galv,w,Se,z,{ry:.65,parent:U?e:void 0}).updateMatrixWorld(),U||i.circles.push({x:w,z,r:3.4})});const T=(w,z,U,J)=>At(w[0]+Math.cos(-.65)*J*U,Se+z-1.6,w[1]+Math.sin(-.65)*J*U*-1);for(let w=0;w<M.length-1;w++)for(const[z,U]of v)for(const J of[-1,1])n(mr(T(M[w],z,U,J),T(M[w+1],z,U,J),9,.035),t.steel,0,0,0,{parent:e,shadow:!1});for(const[w,z]of v.slice(0,1))for(const U of[-1,1])o(mr(T(M[0],w,z,U),At(l+20+U,Se+9.7,c+5.5),2.5,.035),t.steel,!1);for(let w=0;w<4;w++){const z=-44+w*5.2,U=71;s(2.44,2.9,6.06,t.white,z,Se+1.6,U,{s:2,r:.04,collide:!0}),s(2.6,.15,6.2,t.concrete,z,Se+.075,U,{s:1});for(const J of[-.6,.6])s(1.05,2.4,.04,t.white,z+J,Se+1.55,67.95,{s:1.3});s(1.6,.9,.3,t.fins,z,Se+2.2,74.15,{s:.8}),s(2,.05,.03,t.emit(3211120,5),z,Se+2.95,67.94,{shadow:!1}),n(new Ft(1.6,.5),new Qe({map:Ui([{text:`储能 BESS-0${w+1}`,font:'bold 60px "Microsoft YaHei",sans-serif',color:"#1a5fb4"}],{w:512,h:160,bg:"#e9eaec"}),roughness:.5}),z,Se+2.5,67.92,{ry:Math.PI,shadow:!1})}const A=95,x=69,b=document.createElement("canvas");b.width=b.height=256;const L=b.getContext("2d");L.fillStyle="#0a1330",L.fillRect(0,0,256,256),L.strokeStyle="#8a93a8",L.lineWidth=1;for(let w=0;w<=256;w+=32)L.strokeRect(w,0,.5,256),L.strokeRect(0,w,256,.5);L.strokeStyle="#c9ced8",L.lineWidth=5,L.strokeRect(0,0,256,256);const P=new Si(b);P.wrapS=P.wrapT=$n,P.repeat.set(17,5),P.colorSpace=Gt,P.anisotropy=16;const N=new Vt;N.position.set(A,Se+4.3,x),N.rotation.x=-.12,i.solids.add(N),n(new st(34,.12,10),[t.galv,t.galv,new Qe({map:P,roughness:.12,metalness:.6}),t.white,t.galv,t.galv],0,0,0,{parent:N});for(let w=-15;w<=15;w+=6)n(new st(1.6,.04,.12),t.emit(14674687,6),w,-.09,1,{parent:N,shadow:!1});for(const w of[-15,0,15])for(const z of[-3.5,3.5])r(.12,.12,4.2+z*.12,t.galv,A+w,Se+2.1+z*.06,x+z,{},12),i.circles.push({x:A+w,z:x+z,r:.25});const V=new zr(14674175,120,24,2);V.position.set(A,Se+3.6,x),e.add(V);const F=new Qe({emissiveMap:Ui([{text:"⚡ 充电中",font:'bold 54px "Microsoft YaHei",sans-serif',color:"#5dff9a"},{text:"240 kW",font:'bold 70px "Segoe UI",sans-serif'}],{w:256,h:256,bg:"#02130c"}),emissive:16777215,emissiveIntensity:1.6,color:0});for(let w=0;w<6;w++){const z=A-14+w*5.6,U=x+4.2;s(.55,1.9,.38,t.white,z,Se+.95,U,{s:1,r:.06,collide:!0}),n(new Ft(.36,.36),F,z,Se+1.45,U-.2,{ry:Math.PI,shadow:!1}),s(.5,.03,.02,t.emit(3211120,6),z,Se+1.86,U-.2,{shadow:!1}),o(mr(At(z+.28,Se+1.2,U),At(z+1.2,Se+.8,U-2.2),.7,.02),t.rubber),s(.1,.012,5.2,t.white,z-2.8,Se+.008,x+1.3,{shadow:!1})}const C=22,O=60.6;for(const w of[-2.6,2.6])r(.06,.06,2.6,t.galv,C+w,Se+1.3,O+.6,{},10);s(5.8,.06,1.8,t.glass,C,Se+2.62,O,{s:1}),s(3.2,.06,.4,t.wood,C-1,Se+.48,O+.4,{s:1});const k=Ui([{text:"杭州 · 西湖",font:'bold 88px "Microsoft YaHei",sans-serif'},{text:"HANGZHOU  WEST LAKE",font:'300 34px "Segoe UI",sans-serif',color:"#9fd8ff"}],{w:512,h:512,bg:"#06203c"});s(1.5,2.1,.12,t.steel,C+1.9,Se+1.25,O+.6,{s:1,collide:!0});for(const w of[-1,1])n(new Ft(1.36,1.96),new Qe({emissiveMap:k,emissive:16777215,emissiveIntensity:1.5,color:0}),C+1.9,Se+1.25,O+.6+w*.065,{ry:w>0?0:Math.PI,shadow:!1});return{carSpots:[[A-13.8,x+1,0],[A-2.6,x+1,0],[A+8.6,x+1,0],[8,55.4,Math.PI/2],[-58,48.8,-Math.PI/2]],zones:[{x:l,z:68,r:24,name:"SUBSTATION 220kV"},{x:A,z:67,r:20,name:"SOLAR CHARGING HUB"}]}}function Sv(i){const e=new Vt,t=new Qe({color:0,emissive:16711680,emissiveIntensity:5}),n=(s,r,a,o,l)=>{const c=new ft(s,r);return c.position.set(a,o,l),c.castShadow=!0,e.add(c),c};n(new st(1.33,.31,.014),i.pcb,0,0,0);for(const s of[-1,1]){n(new Ys(1.31,.25,.03,2,.01),i.shroud,0,.045,s*.022);for(let r=0;r<5;r++)n(new st(.16,.012,.004),i.galv,-.4+r*.2,.1-r*.02,s*.039);n(new st(.6,.05,.016),i.gold,-.345,-.135,s*.001),n(new st(.66,.05,.016),i.gold,.325,-.135,s*.001)}return n(new Ys(1.31,.06,.07,2,.02),t,0,.19,0).castShadow=!1,{group:e,rgb:t}}const yv=[{name:"GT-LP 2GB",sub:"low-profile · semi",L:.17,W:.075,T:.036,fans:1,hex:16760944,dmg:30,rate:.17,heat:6,vram:0,auto:!1,spread:.004,kick:.8},{name:"RX TRI 12GB",sub:"triple fan · full auto",L:.32,W:.13,T:.055,fans:3,hex:3201279,dmg:17,rate:.075,heat:3,vram:.05,auto:!0,spread:.011,kick:.45},{name:"TITAN RT 24GB",sub:"ray tracer · piercing beam",L:.36,W:.15,T:.082,fans:3,hex:11816191,dmg:160,rate:.95,heat:36,vram:1.5,auto:!1,spread:0,kick:2.4,ray:!0},{name:"PIXEL DUO 8GB",sub:"pixel burst · five-way pulse",L:.24,W:.13,T:.062,fans:2,hex:16297282,dmg:15,rate:.43,heat:12,vram:.35,auto:!1,spread:.055,kick:1.35,pellets:5},{name:"ORBIT XT 16GB",sub:"orbital core · plasma orb",L:.38,W:.16,T:.09,fans:2,hex:16737620,dmg:74,rate:1.32,heat:30,vram:1.8,auto:!1,spread:0,kick:1.9,rocket:!0},{name:"NEURAL LINK 32GB",sub:"attention engine · chain pulse",L:.32,W:.14,T:.073,fans:3,hex:7400366,dmg:46,rate:.31,heat:8,vram:.28,auto:!0,spread:.007,kick:.63,chain:!0}];function bv(i){const e=[new gt(i*.3,i*.3,.006,20)];for(let t=0;t<9;t++)e.push(new st(i*.72,.0015,i*.36).rotateX(.5).rotateY(-.25).translate(i*.62,0,0).rotateY(t*Math.PI*2/9));return ss(e.map(t=>t.toNonIndexed()))}function wv(i,e){const t=new Vt,n=[],{L:s,W:r,T:a}=e,o=new Qe({color:0,emissive:e.hex,emissiveIntensity:3}),l=new Qe({color:0,emissive:e.hex,emissiveIntensity:0}),c=(S,M,T,A,x)=>{const b=new ft(S,M);return b.position.set(T,A,x),b.receiveShadow=!0,t.add(b),b},h=(S,M,T,A)=>new Ys(S,M,T,3,A);c(h(r,.004,s,.0015),i.steel,0,0,0),c(new st(r-.008,.003,s-.012),i.pcb,0,.005,0),c(new st(.01,.0025,.085),i.gold,-r/2-.004,.005,s*.12);const f=a-.026,d=c(new st(r-.014,f,s-.02),i.fins,0,.007+f/2,0);d.material=i.fins;for(let S=0;S<(e.ray?6:e.fans>1?4:2);S++){const M=(S-(e.ray?2.5:e.fans>1?1.5:.5))*.016,T=c(new gt(.004,.004,s*.5,10),i.copper,M,.012+f*.5,-s*.28);T.rotation.x=Math.PI/2;const A=c(new ln(.0045,10,8),l,M,.012+f*.5,-s*.53);A.userData.tip=!0}const p=a-.012;c(h(r,.016,s,.006),i.shroud,0,p,0);for(const S of[-1,1])c(h(.006,a-.012,s*.96,.002),i.shroud,S*(r/2-.003),(a-.012)/2+.004,0);c(new st(.003,.006,s*.82),o,r/2+5e-4,p-.002,0),c(new st(r*.5,.0015,.004),o,0,p+.0085,-s/2+.012);const m=Math.min(r*.42,s/e.fans*.44),_=bv(m);for(let S=0;S<e.fans;S++){const M=(S-(e.fans-1)/2)*(s/e.fans)*.98;c(new gt(m*1.06,m*1.06,.002,40),i.rubber,0,p+.0085,M),c(new Nc(m*1.07,.0022,8,48),S===1||e.fans===1?o:i.steel,0,p+.0095,M).rotation.x=Math.PI/2;const T=c(_,i.rubber,0,p+.0125,M);n.push(T),c(new gt(m*.2,m*.2,5e-4,20),i.galv,0,p+.0162,M)}c(new st(r+.012,a+.004,.0015),new Qe({color:2895409,metalness:1,roughness:.45}),0,a/2-.004,s/2+.001);for(let S=0;S<3;S++)c(new st(.017,.006,.002),i.rubber,-r*.28+S*r*.28,.014,s/2+.002);c(h(.03,.012,.014,.002),i.rubber,r*.25,p+.012,s*.18);const g=new er(new io([new G(r*.25,p+.016,s*.18),new G(r*.4,p+.05,s*.3),new G(r*.2,.02,s*.62),new G(0,-.12,s*.7)]),20,.0045,6);c(g,i.rubber,0,0,0);const u=c(h(.03,.1,.036,.008),i.shroud,0,-.05,s/2-.045);u.rotation.x=-.25,c(h(.012,.012,.05,.003),i.steel,0,-.012,s/2-.085);const v=new Dt;return v.position.set(0,.012+f*.5,-s*.56),t.add(v),{g:t,fans:n,rgb:o,core:l,muzzle:v,def:e,temp:38,throttled:!1,cool:0}}function Ev(i,e){const t=new Vt;i.add(t);const n=yv.map(d=>{const p=wv(e,d);return p.g.visible=!1,t.add(p.g),p}),s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d");r.translate(64,64);for(let d=0;d<10;d++){r.rotate(.4+Math.random());const p=28+Math.random()*34,m=r.createLinearGradient(0,0,p,0);m.addColorStop(0,"rgba(255,255,255,1)"),m.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=m,r.beginPath(),r.moveTo(0,-6),r.lineTo(p,0),r.lineTo(0,6),r.fill()}const a=r.createRadialGradient(0,0,0,0,0,30);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(-64,-64,128,128);const o=new ft(new Ft(.26,.26),new Vs({map:new Si(s),transparent:!0,blending:ls,depthWrite:!1,fog:!1}));o.visible=!1,i.add(o);const l=new zr(16777215,0,14,2);l.position.set(0,0,-.9),i.add(l);const c=new G(.15,-.175,-.38),h=new G(.02,-.105,-.3),f={cards:n,cur:1,next:1,swap:0,recoil:0,flashT:0,adsT:0,sway:new Ee,flash:o,light:l,root:t,get card(){return n[f.cur]},select(d){d!==f.next&&n[d]&&(f.next=d,f.swap=.36)},kick(){const d=f.card;f.recoil=Math.min(f.recoil+d.def.kick,3),f.flashT=d.def.ray?.12:.04,o.material.color.set(d.def.hex).multiplyScalar(d.def.ray?9:5),l.color.set(d.def.hex),o.rotation.z=Math.random()*6.3,o.scale.setScalar((.7+Math.random()*.5)*(d.def.ray?2:1))},update(d,p){const m=(S,M,T)=>S+(M-S)*(1-Math.exp(-T*d));f.swap>0&&(f.swap-=d,f.swap<.18&&f.cur!==f.next&&(f.cur=f.next));const _=f.swap>0?Math.sin(Math.min(1,f.swap/.36)*Math.PI):0;n.forEach((S,M)=>{S.g.visible=M===f.cur;const T=Math.min(1,Math.max(0,(S.temp-38)/57));for(const A of S.fans)A.rotation.y-=(8+T*70)*d;S.rgb.emissive.set(S.def.hex).lerp(new Ke(16722440),T*T),S.rgb.emissiveIntensity=S.throttled?2+4*Math.abs(Math.sin(p.t*9)):3+T*3,S.core.emissiveIntensity=m(S.core.emissiveIntensity,.4+T*2,6)});const g=f.card;f.adsT=m(f.adsT,p.ads?1:0,16),f.recoil=m(f.recoil,0,10),f.sway.x=m(f.sway.x,-p.mdx*6e-4,10),f.sway.y=m(f.sway.y,p.mdy*6e-4,10);const u=1-f.adsT,v=g.g;v.position.lerpVectors(c,h,f.adsT),v.position.x+=(f.sway.x+p.bobX*.5)*u,v.position.y+=(f.sway.y-p.bobY*.4)*u-_*.3-Math.max(0,-p.vy)*.004+(.33-g.def.L)*.1,v.position.z+=f.recoil*.022+g.def.L*.5-.16,v.rotation.set(f.recoil*.03*(.4+u)+f.sway.y*1.5-_*.8,.07*u+f.sway.x*2*u,.72+.5*f.adsT-f.sway.x*1.2*u),f.flashT-=d,o.visible=f.flashT>0,l.intensity=f.flashT>0?g.def.ray?160:50:0,o.visible&&(g.muzzle.getWorldPosition(o.position),i.worldToLocal(o.position),f.flashT>.02&&(g.core.emissiveIntensity=30))}};return f}const ts=(i,e)=>{for(let t=1;t<e.length;t++)if(i<=e[t][0]){const n=e[t-1],s=e[t],r=(i-n[0])/(s[0]-n[0]),a=r*r*(3-2*r);return n[1]+(s[1]-n[1])*a}return e[e.length-1][1]},gu=(i,e)=>Math.sign(i)*Math.pow(Math.abs(i),e),Ns=4.75,xu=[[0,.5],[.05,.8],[.18,.94],[.5,.965],[.84,.94],[.95,.84],[1,.58]],Jl=[[0,.56],[.04,.7],[.28,.9],[.4,.99],[.86,1.03],[.95,.99],[1,.8]],Df=[[0,.44],[.07,.25],[.92,.25],[1,.42]];function vu(i,e,t,n){const s=[],r=[];for(let o=0;o<=i;o++)for(let l=0;l<=e;l++){const c=o/i,[h,f]=t(c,l/e);s.push(h,f,(c-.5)*Ns)}for(let o=0;o<i;o++)for(let l=0;l<e;l++){const c=o*(e+1)+l,h=c+e+1;r.push(c,c+1,h,h,c+1,h+1)}if(n)for(const o of[0,i]){const l=s.length/3,c=o/i;s.push(0,(ts(c,Jl)+ts(c,Df))/2,(c-.5)*Ns);for(let h=0;h<e;h++){const f=o*(e+1)+h;o?r.push(l,f+1,f):r.push(l,f,f+1)}}const a=new wt;return a.setAttribute("position",new Ze(s,3)),a.setIndex(r),a.computeVertexNormals(),a}function Tv(i,e,t){const n=new Vt;n.rotation.order="YXZ";const s=new Oh({color:e,roughness:.32,metalness:.55,clearcoat:1,clearcoatRoughness:.04,side:Lt}),r=new Oh({color:329740,roughness:.03,metalness:.9,clearcoat:1,side:Lt}),a=(g,u,v=0,S=0,M=0,T=n)=>{const A=new ft(g,u);return A.position.set(v,S,M),A.castShadow=A.receiveShadow=!0,T.add(A),A};a(vu(44,36,(g,u)=>{const v=u*Math.PI*2,S=ts(g,xu),M=ts(g,Jl),T=ts(g,Df),A=Math.cos(v),x=Math.sin(v);return[gu(A,.36)*S*(1-.07*Math.max(0,x)),(M+T)/2+gu(x,.42)*(M-T)/2]},!0),s),a(vu(30,20,(g,u)=>{const v=.3+g*.64,S=u*Math.PI,M=ts(v,xu)*.87*(.86+.14*Math.sin(Math.PI*g)),T=.5*Math.pow(Math.sin(Math.PI*Math.pow(g,.78)),.5);return[Math.cos(S)*M*(1-.2*Math.sin(S))*(.55+.45*Math.pow(Math.abs(Math.cos(S)),.25)),ts(v,Jl)-.035+Math.pow(Math.sin(S),.55)*T]},!1),r);for(const g of[-1,1]){a(new st(.035,.07,2.7),i.rubber,g*.955,.3,.02),a(new ln(.1,14,10),s,g*1.03,1.02,-.72).scale.set(.5,.6,1.1);const v=a(new st(.36,.045,.1),i.emit(15398143,3.5),g*.6,.71,-Ns/2+.17);v.rotation.y=-g*.5,v.castShadow=!1,a(new st(.3,.012,.012),i.galv,g*.975,.86,.35).castShadow=!1,a(new st(.3,.012,.012),i.galv,g*.975,.86,-.55).castShadow=!1}a(new st(1.1,.12,.06),i.rubber,0,.4,-Ns/2+.07);const o=i.emit(16717064,2.5);a(new st(1.46,.04,.06),o,0,.9,Ns/2-.1).castShadow=!1;const l=document.createElement("canvas");l.width=440,l.height=140;const c=l.getContext("2d"),h=c.createLinearGradient(0,0,440,0);h.addColorStop(0,"#e9f6ee"),h.addColorStop(1,"#38b56b"),c.fillStyle=h,c.fillRect(0,0,440,140),c.strokeStyle="#111",c.lineWidth=6,c.strokeRect(5,5,430,130),c.fillStyle="#111",c.font='bold 86px "Segoe UI","Microsoft YaHei",sans-serif',c.textAlign="center",c.textBaseline="middle",c.fillText(t,220,74);const f=new Si(l);f.colorSpace=Gt,a(new Ft(.44,.14),new Qe({map:f,roughness:.4}),0,.6,Ns/2-.035).castShadow=!1;const d=new Wr([[.2,-.12],[.3,-.125],[.345,-.1],[.36,-.04],[.36,.04],[.345,.1],[.3,.125],[.2,.12]].map(([g,u])=>new Ee(g,u)),36).rotateZ(Math.PI/2),p=new Qe({color:10132898,metalness:1,roughness:.25}),m=[],_=[];for(const g of[-1,1])for(const u of[-1.47,1.42]){const v=new Vt;v.position.set(g*.845,.36,u),n.add(v);const S=new Vt;v.add(S),a(d,i.rubber,0,0,0,S),a(new gt(.29,.29,.2,32,1,!0).rotateZ(Math.PI/2),p,0,0,0,S).material.side=Lt,a(new gt(.2,.2,.02,24).rotateZ(Math.PI/2),i.steel,g*.02,0,0,S),a(new gt(.06,.07,.05,16).rotateZ(Math.PI/2),p,g*.1,0,0,S);for(let M=0;M<10;M++)a(new st(.025,.25,.035).translate(0,.16,0).rotateX(M*Math.PI/5),p,g*.095,0,0,S);m.push(S),u<0&&_.push(v)}return{g:n,spin:m,pivots:_,tail:o}}function Av(i,e,t,n){const s=[14211805,1382687,9049622,2837096,15526628,4016703],r=Yr([...Ks,Ks[0]],0),a=e.map(([c,h,f],d)=>{const p=Tv(t,s[d%s.length],`浙A·D${(73154+d*12347)%9e4+1e4}`);i.scene.add(p.g);const m={...p,pos:new G(c,tn(c,h),h),heading:f,vx:0,vz:0,v:0,slip:0,steer:0,auto:!1,circles:[{x:c,z:h,r:.95},{x:c,z:h,r:.95}]};return i.dyn.push(...m.circles),m}),o=(c,h,f,d)=>{if(!En(h,f))return!1;const p=i.near(h,f);for(const m of p.boxes)if(h>m.min.x-.9&&h<m.max.x+.9&&f>m.min.z-.9&&f<m.max.z+.9&&m.max.y>d+.3&&m.min.y<d+1.4)return!1;for(const m of p.circles)if(Math.hypot(h-m.x,f-m.z)<m.r+.9)return!1;for(const m of p.polys)if(Rf(m.pts,h,f,.9))return!1;for(const m of i.dyn)if(!c.circles.includes(m)&&Math.hypot(h-m.x,f-m.z)<m.r+.9)return!1;return!0},l=c=>{const h=ds(r.pts,r.cum,c.pos.x,c.pos.z),[f,d]=Mi(r,(h.s+13+Math.abs(c.v)*.7)%r.len);let p=Math.atan2(-(f-c.pos.x),-(d-c.pos.z))-c.heading;p=Math.atan2(Math.sin(p),Math.cos(p));const m=19/(1+Math.abs(p)*2.5);return{steer:Math.max(-1,Math.min(1,p*2.2)),thr:c.v<m?.7:c.v>m+3?-.5:0}};return{list:a,ring:r,nearest:(c,h)=>a.find(f=>Math.hypot(f.pos.x-c.x,f.pos.z-c.z)<h),update(c,h,f){for(const d of a){let p=d===h?f:{thr:0,steer:0,brake:Math.abs(d.v)<6,parked:!0};if(d===h&&d.auto){const k=l(d);p={thr:p.thr||k.thr,steer:p.steer||k.steer,brake:p.brake}}const m=(k,w,z)=>k+(w-k)*(1-Math.exp(-z*c)),_=d.heading,g=-Math.sin(_),u=-Math.cos(_),v=Math.cos(_),S=-Math.sin(_);let M=d.vx*g+d.vz*u,T=d.vx*v+d.vz*S;p.thr>0?M+=(M<0?16:9.5)*p.thr*c:p.thr<0?M-=(M>.5?17:5)*-p.thr*c:M=m(M,0,.45),p.brake&&(M=m(M,0,p.parked?3:1.1)),T=m(T,0,p.brake&&!p.parked?1.3:Math.abs(T)>5?3.2:9),M=Math.max(-8,Math.min(34,M)),d.steer=m(d.steer,p.steer*.55/(1+Math.abs(M)*(p.brake?.04:.085)),8);const A=_+M*Math.tan(d.steer)/2.9*(p.brake&&!p.parked?1.6:1)*c;d.vx=g*M+v*T,d.vz=u*M+S*T;const x=d.pos.x+d.vx*c,b=d.pos.z+d.vz*c,L=d.pos.y,P=-Math.sin(A),N=-Math.cos(A);Math.abs(M)+Math.abs(T)>.01&&(o(d,x+P*1.5,b+N*1.5,L)&&o(d,x-P*1.5,b-N*1.5,L)&&o(d,x,b,L)?(d.pos.x=x,d.pos.z=b,d.heading=A):(d.vx*=-.25,d.vz*=-.25)),d.v=M,d.slip=Math.abs(T);const V=-Math.sin(d.heading),F=-Math.cos(d.heading),C=tn(d.pos.x+V*1.47,d.pos.z+F*1.47),O=tn(d.pos.x-V*1.42,d.pos.z-F*1.42);d.pos.y=(C+O)/2+.08,d.g.position.copy(d.pos),d.g.rotation.set(Math.atan2(C-O,2.89),d.heading,Math.max(-.07,Math.min(.07,-d.steer*Math.min(1,Math.abs(M)/12)*.1+T*.006)));for(const k of d.spin)k.rotation.x-=(p.brake&&!p.parked?M*.2:M)/.36*c;for(const k of d.pivots)k.rotation.y=d.steer;if(d.tail.emissiveIntensity=p.brake||p.thr<0&&M>.5?9:2.5,d.slip>3.2&&Math.abs(M)>4&&n)for(const k of[-1,1])n(d.pos.x-V*1.4+F*k*.8,d.pos.y+.1,d.pos.z-F*1.4-V*k*.8);d.circles[0].x=d.pos.x+V*1.2,d.circles[0].z=d.pos.z+F*1.2,d.circles[1].x=d.pos.x-V*1.2,d.circles[1].z=d.pos.z-F*1.2}}}}function Rv(i,e,t,n){const{scene:s,M:r}=i,a=new Vt;a.position.set(0,-80,0),s.add(a);const o=(F,C=.6,O=0)=>new Qe({color:F,roughness:C,metalness:O}),l=(F,C,O,k,w,z,U)=>{const J=new ft(new st(F,C,O),k);return J.position.set(w,z,U),a.add(J),J},c=o(15001320,.5),h=o(14164778,.5),f=o(2052e3,.55),d=o(131844,.05,.8),p=o(12172480,.25,1);l(2.9,.1,20,o(3816770,.7),0,0,0),l(2.9,.1,20,c,0,2.35,0),l(1.6,.03,18,r.emit(15922943,3),0,2.29,0);for(const F of[-10,10])l(2.9,2.4,.1,c,0,1.2,F);const m=[];for(const F of[-1,1]){l(.1,2.4,20,c,F*1.45,1.2,0),l(.02,.07,20,h,F*1.39,2.05,0);for(let O=0;O<4;O++){const k=-7.5+O*5;l(.02,.95,2.6,d,F*1.39,1.5,k),l(.46,.08,2.6,f,F*1.15,.45,k),l(.08,.5,2.6,f,F*1.36,.75,k),l(.03,1.95,1.1,o(13225168,.3,.6),F*1.39,1,k+2.5);const w=new ft(new gt(.018,.018,2.25,10),p);w.position.set(F*.6,1.17,k+1.7),a.add(w)}const C=new ft(new gt(.016,.016,19,8).rotateX(Math.PI/2),p);C.position.set(F*.6,1.95,0),a.add(C);for(let O=0;O<7;O++){const k=l(.015,.05,1.4,r.emit(16767392,6),F*1.375,1.25+O%3*.22,0);k.userData.o=O*2.9,m.push(k)}}const _=document.createElement("canvas");_.width=1024,_.height=160;const g=_.getContext("2d"),u=new Si(_);u.colorSpace=Gt;const v=F=>{g.fillStyle="#050505",g.fillRect(0,0,1024,160),g.fillStyle="#ff7a2a",g.font='bold 76px "Microsoft YaHei","Segoe UI",sans-serif',g.textAlign="center",g.textBaseline="middle",g.fillText(F,512,84),u.needsUpdate=!0};for(const F of[-9.93,9.93]){const C=new ft(new Ft(2,.31),new Qe({emissiveMap:u,emissive:16777215,emissiveIntensity:2,color:0}));C.position.set(0,2.05,F),C.rotation.y=F>0?Math.PI:0,a.add(C)}for(const F of[-5,5]){const C=new zr(15922943,9,14,2);C.position.set(0,2.1,F),a.add(C)}const S=Yr(Ef,0),M=i.makeBoat(1.7);i.solids.add(M);const T={s:0,v:0,dir:1},A=[Bc,kc],x=F=>{const[C,O,k,w]=Mi(S,T.s);M.position.set(C,.12+Math.sin(F*.9)*.05,O),M.rotation.set(0,Math.atan2(k,w),Math.sin(F*.7)*.02)};x(0);const b=F=>Mi(A[F],A[F].len-1.5);let L=null,P=0;const N=F=>t.find(C=>Math.hypot(F.x-C.x,F.z-C.z)<3.2),V=F=>[0,1].find(C=>{const[O,k]=b(C);return Math.hypot(F.x-O,F.z-k)<5});return{get riding(){return!!L},get safe(){return L?.kind==="metro"},prompt(F){const C=N(F);if(C)return`E — 地铁1号线 Metro Line 1 · ${Xn[C.si].name}`;const O=V(F);return O!==void 0?O===0?"E — ferry to Leifeng Pagoda 雷峰塔":"E — ferry back to Hubin 湖滨":""},key(F){if(L?.kind==="metro"){if(L.phase!=="stop")return n("Doors open at the next station"),!0;const k=t.find(w=>w.si===L.idx);return F.pos.set(k.x,tn(k.x,k.z),k.z),F.vel.set(0,0,0),n(`${Xn[L.idx].name} · ${Xn[L.idx].en}`),L=null,!0}if(L)return n("Stay aboard — the ferry is under way"),!0;const C=N(F.pos);if(C)return L={kind:"metro",idx:C.si,dir:C.si===Xn.length-1?-1:1,phase:"run",t:0},v(`下一站 Next: ${Xn[C.si+L.dir].name}`),n("Metro Line 1 — mouse to look around"),!0;const O=V(F.pos);return O!==void 0?(T.s=O?S.len:0,T.dir=O?-1:1,T.v=0,L={kind:"boat",to:1-O},n(O?"Ferry to Hubin 湖滨":"Ferry to Leifeng Pagoda 雷峰塔 — about two minutes"),!0):!1},update(F,C){if(P+=F,!L)return x(P),!1;if(L.kind==="metro"){L.t+=F;let O=0;if(L.phase==="run"){if(O=Math.sin(Math.PI*Math.min(1,L.t/10)),L.t>=10){L.idx+=L.dir,L.phase="stop",L.t=0;const k=Xn[L.idx];v(`${k.name}  ${k.en}`),n(`到站 ${k.name} · ${k.en} — press E to get off`),(L.idx===0||L.idx===Xn.length-1)&&(L.dir*=-1)}}else L.t>6&&(L.phase="run",L.t=0,v(`下一站 Next: ${Xn[L.idx+L.dir].name}`));for(const k of m)k.userData.o=(k.userData.o+O*70*F)%20,k.position.z=k.userData.o-10,k.visible=O>.02;e.position.set(.35+Math.sin(P*13)*.004*O,-80+1.32+Math.sin(P*17)*.006*O,1.2),e.rotation.set(C.pitch,C.yaw,0)}else{const O=T.dir>0?S.len-T.s:T.s,k=Math.min(27,Math.max(3,O*.22));if(T.v+=Math.sign(k-T.v)*Math.min(Math.abs(k-T.v),5*F),T.s+=T.dir*T.v*F,x(P),C.pos.set(M.position.x,Se,M.position.z),C.vel.set(0,0,0),e.position.set(M.position.x,M.position.y+2.5,M.position.z),e.rotation.set(C.pitch,C.yaw,M.rotation.z),O<1.5){const[w,z]=b(L.to);C.pos.set(w,Se,z),T.s=T.dir>0?S.len:0,n(L.to?"雷峰塔码头 Leifeng Pagoda pier — the path leads up to the pagoda":"湖滨码头 Hubin pier"),L=null}}return e.fov+=(70-e.fov)*Math.min(1,F*6),e.updateProjectionMatrix(),e.updateMatrixWorld(),!0},boat:T,ferry:M,route:S}}const Cv=`
#map{position:fixed;right:18px;top:18px;width:190px;height:190px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 2px 12px rgba(0,0,0,.5);pointer-events:auto;cursor:pointer;background:#27402a}
#map.big{right:50%;top:50%;transform:translate(50%,-50%);width:min(86vmin,760px);height:min(86vmin,760px);border-radius:10px}
#touch{position:fixed;inset:0;display:none;touch-action:none;-webkit-user-select:none;user-select:none;--pad:5vw;--base:max(5vh,env(safe-area-inset-bottom));--small:clamp(49px,11vmin,76px);--large:clamp(64px,15vmin,104px);--gap:clamp(8px,1.5vmin,14px);--stick:clamp(100px,23vmin,150px)}
#touch.on{display:block}
#stick{position:absolute;left:var(--pad);bottom:var(--base);width:var(--stick);height:var(--stick);border-radius:50%;background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.4)}
#stick i{position:absolute;left:50%;top:50%;width:42%;height:42%;margin:-21%;border-radius:50%;background:rgba(255,255,255,.55)}
.tb{position:absolute;min-width:var(--small);height:var(--small);padding:0 7px;border-radius:999px;border:2px solid rgba(255,255,255,.55);background:rgba(10,14,20,.64);color:#fff;font:600 clamp(10px,2.3vmin,14px) "Segoe UI","Microsoft YaHei",sans-serif;letter-spacing:.02em}
.tb.act{background:rgba(255,176,0,.75);color:#111}.tb.hide{display:none}
#bGas,#bFire{right:var(--pad);bottom:var(--base);width:var(--large);height:var(--large);font-size:clamp(13px,3vmin,17px)}
#bBrake,#bJump{right:calc(var(--pad) + var(--large) + var(--gap));bottom:var(--base)}
#bDrift,#bAim{right:var(--pad);bottom:calc(var(--base) + var(--large) + var(--gap))}
#bAuto,#bSwap{right:calc(var(--pad) + var(--large) + var(--gap));bottom:calc(var(--base) + var(--small) + var(--gap))}
#bUse{right:var(--pad);bottom:calc(var(--base) + var(--large) + var(--small) + 2 * var(--gap))}
@media (pointer:coarse){
  #osd{top:12px;left:12px;font-size:10px;padding:6px 9px}
  #right,#left{bottom:auto;top:145px}
  #left{left:12px}#right{right:12px}
  .bar{width:min(120px,30vw)}.big{font-size:19px}#slots{font-size:9px}
  #map:not(.big){top:12px;right:12px;width:clamp(82px,19vmin,132px);height:clamp(82px,19vmin,132px)}
  #top{top:117px;left:8px;right:8px;font-size:10px;letter-spacing:.05em}
  #top,#slots{pointer-events:none}
}
@media (pointer:coarse) and (orientation:landscape){
  #top{top:13px;left:25%;right:25%}
  #left{top:137px}#right{top:75px;right:auto;left:25%;text-align:left}
}
`;function Pv({keys:i,onLook:e,onUse:t,onSwap:n}){document.head.appendChild(Object.assign(document.createElement("style"),{textContent:Cv}));const s=document.getElementById("hud"),r=Object.assign(document.createElement("canvas"),{id:"map",width:760,height:760});s.appendChild(r);const a=Object.assign(document.createElement("div"),{id:"touch"});document.body.appendChild(a),a.innerHTML='<div id="stick"><i></i></div>'+[["bGas","加速 GAS"],["bBrake","BRAKE"],["bDrift","漂移 DRIFT"],["bAuto","AUTO"],["bFire","FIRE"],["bJump","JUMP"],["bAim","AIM"],["bSwap","GPU"],["bUse","E"]].map(([v,S])=>`<button class="tb" id="${v}">${S}</button>`).join("");const o=v=>document.getElementById(v),l={touch:matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,moveX:0,moveY:0,fire:!1,aim:!1,big:!1,autoTap:!1};l.touch&&a.classList.add("on");const c=o("stick"),h=c.firstChild;let f=null;const d=v=>{const S=c.getBoundingClientRect(),M=S.width*.4,T=(v.clientX-S.left-S.width/2)/M,A=(v.clientY-S.top-S.height/2)/M,x=Math.max(1,Math.hypot(T,A));l.moveX=T/x,l.moveY=-A/x,h.style.transform=`translate(${l.moveX*S.width*.29}px,${-l.moveY*S.height*.29}px)`};c.addEventListener("touchstart",v=>{v.preventDefault(),f=v.changedTouches[0].identifier,d(v.changedTouches[0])},{passive:!1}),c.addEventListener("touchmove",v=>{v.preventDefault();for(const S of v.changedTouches)S.identifier===f&&d(S)},{passive:!1});const p=v=>{for(const S of v.changedTouches)S.identifier===f&&(f=null,l.moveX=l.moveY=0,h.style.transform="")};c.addEventListener("touchend",p),c.addEventListener("touchcancel",p);const m=new Map;a.addEventListener("touchstart",v=>{for(const S of v.changedTouches)S.target===a&&m.set(S.identifier,[S.clientX,S.clientY])},{passive:!0}),a.addEventListener("touchmove",v=>{v.preventDefault();for(const S of v.changedTouches){const M=m.get(S.identifier);M&&(e((S.clientX-M[0])*2.2,(S.clientY-M[1])*2.2),m.set(S.identifier,[S.clientX,S.clientY]))}},{passive:!1});const _=v=>{for(const S of v.changedTouches)m.delete(S.identifier)};a.addEventListener("touchend",_),a.addEventListener("touchcancel",_);const g=(v,S,M)=>{const T=o(v),A=b=>{b.preventDefault(),b.stopPropagation(),T.classList.add("act"),S()},x=b=>{b.preventDefault(),T.classList.remove("act"),M&&M()};T.addEventListener("touchstart",A,{passive:!1}),T.addEventListener("touchend",x),T.addEventListener("touchcancel",x),T.addEventListener("mousedown",A),T.addEventListener("mouseup",x)};g("bGas",()=>i.KeyW=!0,()=>i.KeyW=!1),g("bBrake",()=>i.KeyS=!0,()=>i.KeyS=!1),g("bDrift",()=>i.Space=!0,()=>i.Space=!1),g("bJump",()=>i.Space=!0,()=>i.Space=!1),g("bFire",()=>l.fire=!0,()=>l.fire=!1),g("bAim",()=>l.aim=!l.aim),g("bAuto",()=>l.autoTap=!0),g("bUse",t),g("bSwap",n),r.addEventListener("click",()=>{l.big=!l.big,r.classList.toggle("big",l.big)}),addEventListener("keydown",v=>{v.code==="KeyM"&&r.click()}),l.mode=(v,S,M,T)=>{const A=(x,b)=>o(x).classList.toggle("hide",!b);for(const x of["bGas","bBrake","bDrift","bAuto"])A(x,v);for(const x of["bFire","bJump","bAim","bSwap"])A(x,!v&&!S);o("bAuto").classList.toggle("act",!!M),o("bAuto").textContent=M?"自动 AUTO ✓":"自动 AUTO",o("bAim").classList.toggle("act",l.aim),o("bUse").textContent=v?"下车 EXIT":T?"上 / USE":"E",A("bUse",v||!!T||S),c.style.display=S?"none":""};const u=r.getContext("2d");return l.drawMap=v=>{const M=l.big?4700:950,T=l.big?Fn.lakeCentre[0]:v.x,A=l.big?Fn.lakeCentre[1]+600:v.z,x=760/M,b=C=>760/2+(C-A)*x,L=C=>760/2-(C-T)*x,P=(C,O)=>{u.beginPath(),C.forEach(([k,w],z)=>z?u.lineTo(b(w),L(k)):u.moveTo(b(w),L(k))),O&&u.closePath()};u.fillStyle="#2f4a2c",u.fillRect(0,0,760,760),u.fillStyle="#3d4348",u.fillRect(b(Math.max(A-M,230)),0,760,760),P(bn,!0),u.fillStyle="#3f86a8",u.fill(),u.fillStyle="#2f4a2c",P(Hr,!0),u.fill();for(const C of Di)u.beginPath(),u.arc(b(C.z),L(C.x),C.r*x,0,7),u.fill();u.lineCap=u.lineJoin="round";for(const C of wf)P(C.pts),u.strokeStyle="#cfc7ae",u.lineWidth=Math.max(2,C.half*2*x),u.stroke();for(const[C,O]of Object.values(Wi))P(C),u.strokeStyle="#e8e4d8",u.lineWidth=Math.max(1.5,O*x),u.stroke();P([...Ks,Ks[0]]),u.strokeStyle="rgba(255,176,0,.9)",u.lineWidth=l.big?3:2,u.setLineDash([10,8]),u.stroke(),u.setLineDash([]),P(Ef),u.strokeStyle="rgba(255,255,255,.6)",u.lineWidth=1.5,u.setLineDash([4,6]),u.stroke(),u.setLineDash([]),u.fillStyle="#8b3a3a";for(const[,C,O,k,w]of Qa)u.fillRect(b(k),L(O),(w-k)*x,(O-C)*x);const N=l.big?17:22;u.font=`600 ${N}px "Microsoft YaHei","Segoe UI",sans-serif`,u.textAlign="center",u.textBaseline="middle";const V=(C,O,k,w="#fff")=>{u.fillStyle="rgba(0,0,0,.55)",u.fillText(C,b(k)+1,L(O)+1),u.fillStyle=w,u.fillText(C,b(k),L(O))};for(const C of Xn)u.fillStyle="#d8232a",u.beginPath(),u.arc(b(C.z),L(C.x),l.big?7:11,0,7),u.fill(),V("M "+C.name,C.x+(l.big?70:26),C.z,"#ffb3b3");for(const[C,O]of[["雷峰塔",Fn.leifeng],["保俶塔",Fn.baochu],["断桥",[569,-801]],["平湖秋月",Fn.pavilion],["苏堤",[-1400,-2080]],["白堤",[280,-1e3]],["in77",[-90,250]],["码头",[-56,26]],["码头",[-2412,-712]],["孤山",[-230,-1700]],["三潭印月",[-1680,-1340]]])V(C,O[0],O[1],"#ffe9b0");l.big&&(V("钱江新城 →",-1300,A+M/2-260,"#ffe9b0"),u.font="12px sans-serif",u.fillStyle="rgba(255,255,255,.7)",u.textAlign="left",u.fillText("map data © OpenStreetMap contributors",10,748),u.fillText("N ↑",12,18));for(const C of v.cars)u.fillStyle="#6fd3ff",u.fillRect(b(C.pos.z)-5,L(C.pos.x)-5,10,10);v.ferry&&(u.fillStyle="#fff",u.beginPath(),u.arc(b(v.ferry.z),L(v.ferry.x),6,0,7),u.fill());const F=(C,O,k,w,z=!1)=>{!Number.isFinite(k)||k<=0||(u.save(),u.strokeStyle=w,u.lineWidth=l.big?3:5,z&&u.setLineDash([10,8]),u.beginPath(),u.arc(C,O,k,0,2*Math.PI),u.stroke(),u.restore())};if(v.zone){const{x:C,z:O,r:k,shrinking:w,to:z}=v.zone;u.fillStyle="rgba(44,91,190,.23)",u.beginPath(),u.rect(0,0,760,760),u.moveTo(b(O)+k*x,L(C)),u.arc(b(O),L(C),k*x,0,2*Math.PI),u.fill("evenodd"),F(b(O),L(C),k*x,"#77c9ff"),w&&z&&F(b(z.z),L(z.x),z.r*x,"#effaff",!0)}for(const C of v.mates||[])u.fillStyle="#30d8ff",u.strokeStyle="#152d47",u.lineWidth=2,u.beginPath(),u.arc(b(C.pos.z),L(C.pos.x),l.big?5:9,0,2*Math.PI),u.fill(),u.stroke();l.big&&v.zone&&(u.fillStyle="rgba(13,24,44,.80)",u.fillRect(8,29,183,53),u.font='14px "Microsoft YaHei",system-ui,sans-serif',u.textAlign="left",u.fillStyle="#77c9ff",u.fillText("○  当前安全区",16,42),u.fillStyle="#30d8ff",u.fillText("●  GPU 队友",16,64),v.zone.shrinking&&v.zone.to&&(u.fillStyle="#effaff",u.fillText("◌  下一安全区",95,64))),u.save(),u.translate(b(v.z),L(v.x)),u.rotate(-v.yaw),u.fillStyle="#ffb000",u.strokeStyle="#111",u.lineWidth=2,u.beginPath(),u.moveTo(0,-16),u.lineTo(10,11),u.lineTo(0,5),u.lineTo(-10,11),u.closePath(),u.fill(),u.stroke(),u.restore()},l}let yt,Ds,ka,Ha,yr,Is;function Lv(){if(yt){yt.resume();return}yt=new AudioContext;const i=yt.createDynamicsCompressor();i.connect(yt.destination),Ds=yt.createGain(),Ds.gain.value=.55,Ds.connect(i),ka=yt.createConvolver();const e=yt.sampleRate*1.6,t=yt.createBuffer(2,e,yt.sampleRate);for(let c=0;c<2;c++){const h=t.getChannelData(c);for(let f=0;f<e;f++)h[f]=(Math.random()*2-1)*Math.pow(1-f/e,5)}ka.buffer=t;const n=yt.createGain();n.gain.value=.18,ka.connect(n),n.connect(i),Ha=yt.createBuffer(1,yt.sampleRate*2,yt.sampleRate);const s=Ha.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=yt.createBufferSource();r.buffer=Ha,r.loop=!0;const a=yt.createBiquadFilter();a.type="lowpass",a.frequency.value=500;const o=yt.createGain();o.gain.value=.05,r.connect(a),a.connect(o),o.connect(Ds),r.start(),yr=yt.createOscillator(),yr.type="sawtooth";const l=yt.createBiquadFilter();l.type="bandpass",l.frequency.value=900,l.Q.value=2,Is=yt.createGain(),Is.gain.value=0,yr.connect(l),l.connect(Is),Is.connect(Ds),yr.start()}function Nf(i,e,t){const n=yt.createGain(),s=yt.currentTime;n.gain.setValueAtTime(e,s),n.gain.exponentialRampToValueAtTime(8e-4,s+t),i.connect(n),n.connect(Ds),n.connect(ka)}function In(i,e,t,n="lowpass"){if(!yt)return;const s=yt.createBufferSource();s.buffer=Ha,s.loop=!0;const r=yt.createBiquadFilter();r.type=n,r.frequency.value=e,s.connect(r),Nf(r,t,i),s.start(0,Math.random()),s.stop(yt.currentTime+i)}function dn(i,e,t,n,s="sine"){if(!yt)return;const r=yt.createOscillator(),a=yt.currentTime;r.type=s,r.frequency.setValueAtTime(i,a),r.frequency.exponentialRampToValueAtTime(e,a+t),Nf(r,n,t),r.start(),r.stop(a+t)}const Dv=(i,e)=>{Is&&(Is.gain.value=i,yr.frequency.value=e)},Mn={shot:[()=>{In(.1,3e3,.6),dn(520,120,.09,.7,"square")},()=>{In(.07,4200,.45),dn(900,260,.06,.5,"sawtooth"),dn(140,60,.08,.5)},()=>{dn(2400,90,.5,.8,"sawtooth"),In(.7,900,.9),dn(70,30,.6,1)}],hit(){dn(2100,1100,.05,.2,"square")},impact(){In(.05,2500,.12,"bandpass")},splash(){In(.25,1400,.18,"bandpass")},droneShot(){dn(1e3,200,.2,.12,"sawtooth")},boom(){In(1,500,.9),dn(95,30,.5,.8)},hurt(){dn(220,70,.22,.4,"sawtooth"),In(.1,900,.4)},click(){In(.03,4500,.25,"highpass")},step(){In(.06,320,.1)},pickup(){dn(660,660,.08,.3,"triangle"),setTimeout(()=>dn(990,990,.14,.3,"triangle"),80)},throttle(){dn(300,80,.5,.5,"square")},botShot(){In(.06,2600,.16),dn(420,150,.05,.14,"square")},skid(){In(.12,2600,.07,"bandpass")},chime(){dn(880,880,.25,.25,"triangle"),setTimeout(()=>dn(660,660,.4,.25,"triangle"),260)}},Us=[{name:"GPU 队",short:"GPU",color:3201279},{name:"RAM 队",short:"RAM",color:16756736},{name:"火箭队",short:"火箭",color:16730682},{name:"LLM 队",short:"LLM",color:6480010}],Mu=[[-18,96],[600,-745],[-1560,-2700],[-2600,-695]],_u=[[-60,200],[600,-745],[-2600,-695],[-1560,-2700],[-1283,-136]],Ko=[4300,2600,1500,800,350,120,40];function Nv(i){const{scene:e,world:t,player:n}=i,s=new Vt;e.add(s);const r=Yr([...Ks,Ks[0]],0),a=(w,z)=>w+Math.random()*(z-w),o=new Qe({color:15132906,roughness:.32,metalness:.15}),l=new Qe({color:1382170,roughness:.5,metalness:.6}),c=(w,z)=>new es(w,z,6,14).translate(0,-z/2-w*.2,0),h={torso:new Wr([[0,-.06],[.12,-.05],[.135,.04],[.16,.2],[.19,.33],[.18,.43],[.1,.5],[.055,.55],[0,.56]].map(([w,z])=>new Ee(w,z)),22).scale(1,1,.72),pelvis:new ln(.15,18,12).scale(1.1,.75,.85),head:new ln(.108,22,16).scale(.95,1.1,1),visor:new ln(.112,22,10,Math.PI*.18,Math.PI*.64,Math.PI*.32,Math.PI*.24).scale(.95,1.1,1),upper:c(.05,.2),fore:c(.043,.2),hand:new ln(.05,12,10),thigh:c(.072,.28),shin:c(.055,.3),foot:new es(.048,.13,4,10).rotateX(Math.PI/2).translate(0,-.4,.06),ball:new ln(.062,12,10),gun:new es(.03,.34,4,10).rotateX(Math.PI/2).translate(0,-.34,.16),stripe:new es(.012,.26,3,8).rotateX(Math.PI/2).translate(0,-.305,.16)},f=Us.map(w=>new Qe({color:0,emissive:w.color,emissiveIntensity:2.2}));function d(w){const z=new Vt,U=f[w.team],J={},D=(Q,me,ye,Te=0,H=0,K=0)=>{const se=new ft(Q,me);return se.position.set(Te,H,K),se.castShadow=!0,se.userData.bot=w,ye.add(se),se},le=(Q,me,ye,Te)=>{const H=new Vt;return H.position.set(me,ye,Te),Q.add(H),H},_e=le(z,0,.93,0);J.hips=_e,D(h.pelvis,l,_e),D(h.torso,o,_e,0,.06,0),D(h.head,o,_e,0,.75,0),D(h.visor,U,_e,0,.75,0).rotation.y=-Math.PI/2;for(const Q of[-1,1]){const me=le(_e,Q*.235,.5,0),ye=le(me,0,-.29,0);D(h.ball,l,me),D(h.upper,o,me),D(h.ball,l,ye).scale.setScalar(.8),D(h.fore,o,ye),D(h.hand,l,ye,0,-.3,0);const Te=le(_e,Q*.1,-.04,0),H=le(Te,0,-.42,0);D(h.thigh,o,Te),D(h.ball,l,H).scale.setScalar(.95),D(h.shin,o,H),D(h.foot,l,H),J[Q<0?"armL":"armR"]=me,J[Q<0?"elL":"elR"]=ye,J[Q<0?"legL":"legR"]=Te,J[Q<0?"knL":"knR"]=H,Q>0&&(D(h.gun,l,ye),D(h.stripe,U,ye))}s.add(z),w.g=z,w.P=J}function p(w,z){const U=z.x-w.x,J=z.z-w.z,D=Math.hypot(U,J),le=Math.ceil(D/3);for(let _e=1;_e<le;_e++){const Q=_e/le,me=w.x+U*Q,ye=w.z+J*Q,Te=w.y+1.4+(z.y-w.y)*Q,H=t.near(me,ye);for(const K of H.polys)if(Te<K.h+Se&&Ni(K.pts,me,ye))return!1;for(const K of H.boxes)if(Te<K.max.y&&Te>K.min.y&&me>K.min.x&&me<K.max.x&&ye>K.min.z&&ye<K.max.z)return!1}return!0}const m={isPlayer:!0,team:0,pos:n.pos,vel:n.vel,kills:0,get alive(){return n.hp>0}},_=[],g=[m];for(let w=0;w<4;w++)for(let z=w===0?1:0;z<10;z++){const U={team:w,pos:new G,vel:new G,yaw:0,hp:100,alive:!0,kills:0,think:Math.random()*.3,cool:1,phase:Math.random()*6,target:null,goal:null,stuck:0,last:new G,dead:0,side:Math.random()<.5?1:-1};d(U),_.push(U),g.push(U)}const u={x:0,z:0,r:0,stage:0,t:0,from:null,to:null,fin:null,shrinking:!1},v=new ft(new gt(1,1,1,128,1,!0),new Vs({color:3842303,transparent:!0,opacity:.13,side:Lt,depthWrite:!1,blending:ls,fog:!1}));i.fx.add(v);const S=[],M=new es(.07,.6,4,10).rotateX(Math.PI/2),T=new Qe({color:15921904,roughness:.35}),A=new Vs({color:new Ke(8,4,1),fog:!1});let x=null;function b(){x=null;for(const z of _){let U,J,D=0;do U=Mu[z.team][0]+a(-28,28),J=Mu[z.team][1]+a(-28,28);while(i.blocked(U,Se,J)&&++D<60);z.pos.set(U,tn(U,J),J),z.hp=100,z.alive=!0,z.kills=0,z.target=z.goal=null,z.dead=0,z.g.visible=!0,z.g.rotation.set(0,0,0),z.g.position.copy(z.pos),z.last.copy(z.pos)}m.kills=0;const w=_u[Math.floor(Math.random()*_u.length)];Object.assign(u,{x:w[0],z:w[1],r:Ko[0],stage:0,t:120,shrinking:!1,fin:w});for(const z of S)e.remove(z.m);S.length=0}function L(w,z,U){return!w.alive||U&&U.team===w.team?!1:w.isPlayer?(i.hurtPlayer(z),n.hp<=0&&U&&U.kills++,!0):(w.hp-=z,w.hp>0||(w.alive=!1,w.dead=.01,U&&(U.kills++,U.isPlayer&&i.note(`击倒 ${Us[w.team].name} 的机器人 · 你已击倒 ${U.kills}`))),!0)}function P(w,z){i.boom(w);for(const U of g){const J=U.pos.distanceTo(w);J<8&&L(U,130*(1-J/9),z)}}function N(w,z,U){const J=new ft(M,T),D=new ft(new no(.06,.5,8).rotateX(-Math.PI/2).translate(0,0,-.55),A);J.add(D),J.position.copy(w),J.lookAt(w.clone().add(z)),e.add(J),S.push({m:J,vel:z.clone().multiplyScalar(55),by:U,life:6})}const V=new G,F=new G,C=new G;function O(w,z,U){let J=z-w.pos.x,D=U-w.pos.z,le=Math.hypot(J,D)||1,_e=le<700;for(let Q=12;_e&&Q<le;Q+=12)if(!En(w.pos.x+J/le*Q,w.pos.z+D/le*Q)){_e=!1;break}if(!_e){const Q=ds(r.pts,r.cum,w.pos.x,w.pos.z),Te=(ds(r.pts,r.cum,z,U).s-Q.s+r.len)%r.len<r.len/2?1:-1,[H,K]=Mi(r,(Q.s+Te*16+r.len)%r.len);J=H-w.pos.x,D=K-w.pos.z,le=Math.hypot(J,D)||1}return[J/le,D/le]}function k(w,z){if(u.t-=w,u.t<=0&&u.stage<Ko.length-1&&(u.shrinking?(u.shrinking=!1,u.stage++,u.t=60):(u.shrinking=!0,u.t=u.dur=u.stage?80:120,u.from={x:u.x,z:u.z,r:u.r},u.to={x:u.fin[0],z:u.fin[1],r:Ko[u.stage+1]},i.note("安全区正在缩小"))),u.shrinking){const D=1-Math.max(0,u.t)/u.dur;u.x=u.from.x+(u.to.x-u.from.x)*D,u.z=u.from.z+(u.to.z-u.from.z)*D,u.r=u.from.r+(u.to.r-u.from.r)*D}v.position.set(u.x,100,u.z),v.scale.set(u.r,400,u.r);for(const D of g)D.alive&&Math.hypot(D.pos.x-u.x,D.pos.z-u.z)>u.r&&(D.isPlayer?i.hurtPlayer((.4+u.stage*.6)*w,!0):(D.hp-=(.4+u.stage*.6)*w,D.hp<=0&&(D.alive=!1,D.dead=.01)));const U=i.camera.position;for(const D of _){const le=D.P;if(!D.alive){D.dead>0&&D.dead<1&&(D.dead=Math.min(1,D.dead+w*2.2),D.g.rotation.x=-D.dead*1.5,D.g.position.y=D.pos.y+D.dead*.12);continue}if((D.think-=w)<=0){D.think=.3;let K=null,se=90;for(const B of g)if(B.alive&&B.team!==D.team){const j=B.pos.distanceTo(D.pos);j<se&&p(D.pos,B.pos)&&(se=j,K=B)}if(D.target=K,!K)if(Math.hypot(D.pos.x-u.x,D.pos.z-u.z)>u.r*.7)D.goal=[u.x,u.z];else{let j=null,re=1e9;for(const q of g)if(q.alive&&q.team!==D.team){const ee=q.pos.distanceTo(D.pos);ee<re&&(re=ee,j=q)}D.goal=j?[j.pos.x,j.pos.z]:null}D.pos.distanceTo(D.last)<.6&&(D.stuck=1.2),D.last.copy(D.pos)}let _e=0,Q=0,me=0;if(D.target&&D.target.alive){const K=D.target,se=K.pos.x-D.pos.x,B=K.pos.z-D.pos.z,j=Math.hypot(se,B)||1;if(D.yaw=Math.atan2(se,B),j>26?(_e=se/j,Q=B/j,me=4.6):j<9?(_e=-se/j,Q=-B/j,me=3):(_e=-B/j*D.side,Q=se/j*D.side,me=2.2,Math.random()<w*.4&&(D.side*=-1)),(D.cool-=w)<=0){D.cool=a(.22,.5),F.set(D.pos.x+se/j*.5,D.pos.y+1.35,D.pos.z+B/j*.5);const re=Math.random()<Math.max(.08,.62-j/130)*(K.vel&&K.vel.length()>5?.55:1);C.set(K.pos.x+(re?0:a(-1.5,1.5)),K.pos.y+1.2+(re?0:a(-.6,1.4)),K.pos.z+(re?0:a(-1.5,1.5))),F.distanceTo(U)<260&&(i.tracer(F,C,Us[D.team].color),F.distanceTo(U)<90&&i.sfx.botShot()),re&&L(K,8,D)}}else D.goal&&([_e,Q]=O(D,D.goal[0],D.goal[1]),me=9.5,D.yaw=Math.atan2(_e,Q));if(D.stuck>0){D.stuck-=w;const K=Math.atan2(_e,Q)+D.side*1.3;_e=Math.sin(K),Q=Math.cos(K)}if(me){const K=D.pos.x+_e*me*w,se=D.pos.z+Q*me*w;i.blocked(K,D.pos.y,se)?i.blocked(K,D.pos.y,D.pos.z)?i.blocked(D.pos.x,D.pos.y,se)?me=0:D.pos.z=se:D.pos.x=K:(D.pos.x=K,D.pos.z=se),D.pos.y=tn(D.pos.x,D.pos.z)}D.phase+=me*w*2.1;const ye=Math.sin(D.phase)*Math.min(1,me/4)*.75,Te=!!D.target;D.g.position.set(D.pos.x,D.pos.y+Math.abs(Math.cos(D.phase))*.025*Math.min(1,me),D.pos.z);let H=D.yaw-D.g.rotation.y;H=Math.atan2(Math.sin(H),Math.cos(H)),D.g.rotation.y+=H*Math.min(1,w*9),le.legL.rotation.x=-ye,le.legR.rotation.x=ye,le.knL.rotation.x=Math.max(0,ye)*1.1+.05,le.knR.rotation.x=Math.max(0,-ye)*1.1+.05,le.armL.rotation.x=ye*.8,le.elL.rotation.x=-.25-Math.abs(ye)*.4,le.armR.rotation.x+=((Te?-1.35:-ye*.8)-le.armR.rotation.x)*Math.min(1,w*10),le.elR.rotation.x=Te?-.15:-.3,le.hips.rotation.x=Math.min(.2,me*.03)}for(let D=S.length-1;D>=0;D--){const le=S[D],_e=le.m.position;_e.addScaledVector(le.vel,w),le.life-=w,le.vel.y-=2*w,i.burst(_e,V.set(0,0,0),2,1.2,.7,.7,.7);const Q=t.near(_e.x,_e.z);let me=le.life<=0||_e.y<(En(_e.x,_e.z)?tn(_e.x,_e.z):0)||Q.polys.some(ye=>_e.y<ye.h+Se&&Ni(ye.pts,_e.x,_e.z))||Q.boxes.some(ye=>ye.containsPoint(_e));for(const ye of g)ye.alive&&ye.team!==le.by.team&&ye.pos.distanceTo(_e)<1.8&&(me=!0);me&&(P(_e.clone(),le.by),e.remove(le.m),S.splice(D,1))}const J=[0,0,0,0];for(const D of g)D.alive&&J[D.team]++;if(!x){const D=J.filter(le=>le>0).length;m.alive?D===1&&(x="win"):x="lose"}return J}return b(),{group:s,bots:_,ents:g,me:m,zone:u,update:k,reset:b,damage:L,explode:P,fireRocket:N,get over(){return x},placing(){return Us.map((z,U)=>U).filter(z=>g.some(U=>U.alive&&U.team===z)).length}}}const Qt=i=>document.getElementById(i),gi=(i,e)=>i+Math.random()*(e-i),ki=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),un=new zx({antialias:!1,powerPreference:"high-performance"});un.setPixelRatio(Math.min(devicePixelRatio,2));un.setSize(innerWidth,innerHeight);un.shadowMap.enabled=!0;un.shadowMap.type=wr;un.toneMapping=to;un.toneMappingExposure=.46;document.body.prepend(un.domElement);const kn=new Wu,bt=new wn(72,innerWidth/innerHeight,.08,16e3);bt.rotation.order="YXZ";kn.add(bt);const Oi=new Vt;kn.add(Oi);let Ci,Ql,Pt,If,vt,rs,_i,Rt,pt=null,li,Hs,Uf=!1;const Zs=[-18,96],Zn=[-1900,-3133],Ae={pos:new G(Zs[0],Se,Zs[1]),vel:new G,yaw:-.3,pitch:.03,hp:100,onGround:!0,lastHurt:-99,bob:0,vram:16},Un=.38,Of=1.68,gr=24;function Ii(i,e,t){if(!En(i,t))return!0;const n=Pt.near(i,t);for(const s of n.boxes)if(i>s.min.x-Un&&i<s.max.x+Un&&t>s.min.z-Un&&t<s.max.z+Un&&s.max.y>e+.35&&s.min.y<e+1.75)return!0;for(const s of n.circles)if(Math.hypot(i-s.x,t-s.z)<s.r+Un)return!0;for(const s of n.polys)if(e<s.h&&Rf(s.pts,i,t,Un))return!0;for(const s of Pt.dyn)if(Math.hypot(i-s.x,t-s.z)<s.r+Un)return!0;return!1}function Iv(i,e,t){let n=tn(i,t);for(const s of Pt.near(i,t).boxes)i>s.min.x-Un*.5&&i<s.max.x+Un*.5&&t>s.min.z-Un*.5&&t<s.max.z+Un*.5&&s.max.y<=e+.35&&(n=Math.max(n,s.max.y));return n}const en={};let as=!1,Gc=!1,Js=!1,Rr=!1,Gn=!1,Gr=0,jl=0;const $l=()=>as||Gc,Ff=(i,e)=>{const t=.0021*(Gn?.55:1);Ae.yaw-=i*t,Ae.pitch=Math.max(-1.5,Math.min(1.5,Ae.pitch-e*t)),Gr+=i,jl+=e};addEventListener("keydown",i=>{en[i.code]=!0,!(!$l()||i.repeat)&&(/^Digit[1-6]$/.test(i.code)&&vt.select(+i.code[5]-1),i.code==="KeyE"&&tc(),i.code==="KeyF"&&pt&&Bf())});addEventListener("keyup",i=>{en[i.code]=!1});addEventListener("wheel",i=>{as&&vt.select((vt.next+(i.deltaY>0?1:vt.cards.length-1))%vt.cards.length)});addEventListener("mousemove",i=>{as&&Ff(i.movementX,i.movementY)});addEventListener("mousedown",i=>{as&&(i.button===0&&(Js=Rr=!0),i.button===2&&(Gn=!0))});addEventListener("mouseup",i=>{i.button===0&&(Js=!1),i.button===2&&(Gn=!1)});addEventListener("contextmenu",i=>i.preventDefault());const Kr=Qt("overlay"),zf=()=>{Uf&&(Lv(),Ae.hp<=0&&Hv(),Rt.touch?(Gc=!0,Kr.style.display="none",document.documentElement.requestFullscreen?.()?.catch(()=>{})):un.domElement.requestPointerLock?un.domElement.requestPointerLock()?.catch(()=>{Qt("msg").textContent="无法锁定鼠标，请再点击一次。"}):Qt("msg").textContent="此浏览器不支持鼠标锁定，请使用触屏或更新浏览器。")};Kr.addEventListener("click",zf);Kr.addEventListener("keydown",i=>{(i.code==="Enter"||i.code==="Space")&&zf()});document.addEventListener("pointerlockchange",()=>{as=document.pointerLockElement===un.domElement,!(!Rt||Rt.touch)&&(Kr.style.display=as?"none":"flex",as||(Js=Gn=!1,Ae.hp>0&&(Qt("msg").textContent="Paused — click to resume")))});let ec=0;const jn=i=>{Qt("note").textContent=i,Qt("note").style.opacity=1,ec=3};function tc(){if(_i.riding)return _i.key(Ae);if(pt){const e=pt,t=e.heading;if(Math.abs(e.v)>3)return jn("Slow down before getting out");for(const n of[1,-1,2.2,-2.2]){const s=e.pos.x-Math.cos(t)*1.9*n,r=e.pos.z+Math.sin(t)*1.9*n;if(!Ii(s,e.pos.y,r)){Ae.pos.set(s,tn(s,r),r),Ae.vel.set(0,0,0),Ae.yaw=t,Ae.pitch=0,e.auto=!1,pt=null;return}}return jn("No room to get out here")}const i=rs.nearest(Ae.pos,3.6);if(i){pt=i,i.auto=Rt.touch,jn(Rt.touch?"Auto-drive on — steer or brake any time to take over":"Driving — WASD, Space drift, F auto-drive, E get out");return}_i.key(Ae)}const Bf=()=>{pt.auto=!pt.auto,jn(pt.auto?"Auto-drive ON — follows the lake ring road; your inputs still override":"Auto-drive off")},ir=1600,Fi=new Float32Array(ir*3).fill(-99),os=new Float32Array(ir*3),ns=new Float32Array(ir*3),Ga=new Float32Array(ir);let Zo=0,Cr,nc=[],Su=0,zi=[],Os=0,Fs,Qs,kf=[];function Uv(){const i=new wt;i.setAttribute("position",new Hn(Fi,3)),i.setAttribute("color",new Hn(os,3)),Cr=new $d(i,new Yu({size:.06,vertexColors:!0,blending:ls,depthWrite:!1,transparent:!0})),Cr.frustumCulled=!1,Oi.add(Cr);const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,2,32,32,30);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.3,"rgba(10,8,8,.9)"),n.addColorStop(.55,"rgba(30,26,24,.45)"),n.addColorStop(1,"rgba(40,38,36,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const s=new Qe({map:new Si(e),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8});for(let o=0;o<90;o++){const l=new ft(new Ft(.16,.16),s);l.visible=!1,Oi.add(l),nc.push(l)}const r=new gt(1,1,1,8).rotateX(Math.PI/2),a=()=>new Vs({transparent:!0,blending:ls,depthWrite:!1,fog:!1});for(let o=0;o<10;o++){const l=new ft(r,a());l.visible=!1,l.userData.life=0,Oi.add(l),zi.push(l)}Fs=new ft(r,a()),Fs.visible=!1,Fs.userData.life=0,Oi.add(Fs),Qs=new zr(16742960,0,30,2),kn.add(Qs);for(let o=0;o<4;o++){const l=new zr(16758896,10,20,2);kn.add(l),kf.push(l)}}function Bi(i,e,t,n,s,r,a){for(let o=0;o<t;o++){const l=(Zo=(Zo+1)%ir)*3;Fi[l]=i.x,Fi[l+1]=i.y,Fi[l+2]=i.z,ns[l]=(e.x*.8+gi(-1,1))*n*Math.random(),ns[l+1]=(e.y*.8+gi(-.6,1.2))*n*Math.random(),ns[l+2]=(e.z*.8+gi(-1,1))*n*Math.random(),os[l]=s,os[l+1]=r,os[l+2]=a,Ga[Zo]=gi(.25,.9)}}function Va(i,e,t,n,s,r,a){i.position.copy(e).lerp(t,.5),i.lookAt(t),i.scale.set(n,n,e.distanceTo(t)),i.material.color.set(s).multiplyScalar(r),i.visible=!0,i.userData.life=i.userData.max=a,i.userData.r=n}const ic=new G(0,1,0),Ov=new G;let sc=0;const Fv=(i,e,t)=>{Bi(Ov.set(i,e,t),ic,2,1.6,.42,.42,.42),sc<=0&&(Mn.skid(),sc=.09)};let It;const co=[];function zv(){for(const[i,e]of[[-100,138],[40,46],[300,-984],[-10,-1228],[-1100,-2152],[-2142,-1868],[-2600,-695],[-8,244],[79,339.5],[600,-745],[Zn[0]-70,Zn[1]+61],[Zn[0]+95,Zn[1]+61],[-1283,-120],[-1904,-2940]]){const t=Sv(Ci);t.group.position.set(i,tn(i,e)+1.15,e),t.group.scale.setScalar(.62),kn.add(t.group),co.push({...t,x:i,z:e,respawn:0})}}const xr=new Wp,Pi=new G,Jo=new G,ci=new G,rc=new G;let $i=!1;const Bv=()=>{const i=Qt("hit");i.style.transition="none",i.style.opacity=1,requestAnimationFrame(()=>{i.style.transition="opacity .25s",i.style.opacity=0})};function kv(i,e,t,n,s){Pi.set(gi(-s,s),gi(-s,s),-1).normalize().transformDirection(bt.matrixWorld),xr.set(bt.getWorldPosition(Jo),Pi),xr.far=600;const r=xr.intersectObject(Pt.solids,!0)[0],a=Pi.y<0?-Jo.y/Pi.y:1/0,o=Math.min(r?r.distance:600,a),l=Jo.clone().addScaledVector(Pi,o);xr.far=o;const c=new Set;let h=null,f=null;for(const m of xr.intersectObject(It.group,!0)){const _=m.object.userData.bot;if(!(!_||c.has(_)||!_.alive||_.team===0)&&(c.add(_),It.damage(_,n,It.me),Bi(m.point,ci.copy(Pi).negate(),12,4,1.6,.9,.3),Mn.hit(),Bv(),f=f||_,!e.ray)){h=m.point;break}}if(e.chain&&f){const m=It.bots.find(_=>_.alive&&_.team!==0&&_!==f&&_.pos.distanceTo(f.pos)<9);m&&(It.damage(m,n*.5,It.me),Va(zi[Os=(Os+1)%zi.length],f.pos.clone().setY(f.pos.y+1.2),m.pos.clone().setY(m.pos.y+1.2),.01,t,7,.09))}if(i.muzzle.getWorldPosition(ci),e.ray?Va(Fs,ci,l,.035,t,9,.28):Va(zi[Os=(Os+1)%zi.length],ci,h||l,.006,t,7,.05),h)return;if(a<(r?r.distance:600)){Bi(l,ci.set(0,1,0),e.ray?60:16,4,.5,.6,.7),Mn.splash();return}if(!r)return;const d=r.face?ci.copy(r.face.normal).transformDirection(r.object.matrixWorld):ci.copy(Pi).negate();Bi(l,d,e.ray?50:10,e.ray?7:3.5,t.r*2,t.g*2,t.b*2),Bi(l,d,6,1.2,.15,.15,.15),Mn.impact();const p=nc[Su=(Su+1)%nc.length];p.position.copy(l).addScaledVector(d,.02),p.lookAt(rc.copy(l).add(d)),p.rotateZ(gi(0,6.3)),p.scale.setScalar(gi(.7,1.2)*(e.ray?3:1)),p.visible=!0}function Hf(i){const e=i.def,t=new Ke(e.hex),n=e.dmg*($i?1.6:1);if(Ae.vram-=e.vram,i.temp+=e.heat,i.cool=e.rate,vt.kick(),(Mn.shot[vt.cur]||Mn.shot[vt.cur%3])(),Ae.pitch+=e.kick*.008+Math.random()*.003,Ae.yaw+=gi(-.004,.004)*e.kick,e.rocket){i.muzzle.getWorldPosition(ci),It.fireRocket(ci.clone(),Pi.set(0,0,-1).transformDirection(bt.matrixWorld).clone(),It.me);return}const s=Math.hypot(Ae.vel.x,Ae.vel.z)>1,r=e.spread*(Gn?.3:s?2:1);for(let a=0;a<(e.pellets||1);a++)kv(i,e,t,n,r)}function Gf(i){Qt("msg").textContent=`${i} ${Rt.touch?"点击屏幕":"点击"}再来一局`,Ae.hp=0,Gc=!1,Js=Rr=Gn=!1,Rt.fire=Rt.aim=!1,Kr.style.display="flex",document.exitPointerLock?.()}function yu(i,e){Ae.hp<=0||_i.safe||(Ae.hp-=i*(pt?.5:1),Ae.lastHurt=br,e||(Hs.uniforms.hurt.value=1,Mn.hurt()),Ae.hp<=0&&Gf(`你被淘汰了 · 击倒 ${It.me.kills} 个 · 还剩 ${It.placing()} 支队伍。`))}function Hv(){Ae.pos.set(Zs[0],Se,Zs[1]),Ae.vel.set(0,0,0),Ae.yaw=-.3,Ae.pitch=.03,Ae.hp=100,Ae.vram=16,pt=null;for(const i of vt.cards)i.temp=38,i.cool=0,i.throttled=!1;Ae.onGround=!0,Ae.lastHurt=-99;for(const i of Object.keys(en))en[i]=!1;It.reset()}let br=0,Qo=0,ac=60,ja=0,$a=0;function Gv(i){const e=Ae.pos,t=(en.KeyW?1:0)-(en.KeyS?1:0)+Rt.moveY,n=(en.KeyD?1:0)-(en.KeyA?1:0)+Rt.moveX,s=Math.max(1,Math.hypot(t,n)),r=(en.ShiftLeft||Rt.moveY>.92)&&t>0&&!Gn,a=(Gn?2.4:r?7.4:4.5)/s,o=Math.sin(Ae.yaw),l=Math.cos(Ae.yaw),c=Ae.onGround?12:2.5;Ae.vel.x=ki(Ae.vel.x,(-o*t+l*n)*a,c,i),Ae.vel.z=ki(Ae.vel.z,(-l*t-o*n)*a,c,i),Ae.vel.y-=21*i,en.Space&&Ae.onGround&&(Ae.vel.y=6.7,Ae.onGround=!1);const h=e.x+Ae.vel.x*i;Ii(h,e.y,e.z)?Ae.vel.x=0:e.x=h;const f=e.z+Ae.vel.z*i;Ii(e.x,e.y,f)?Ae.vel.z=0:e.z=f,e.y+=Ae.vel.y*i;const d=Iv(e.x,e.y,e.z);e.y<=d||Ae.onGround&&Ae.vel.y<=0&&e.y-d<.4?(Ae.vel.y<-8&&(vt.recoil+=.8),e.y=d,Ae.vel.y=0,Ae.onGround=!0):Ae.onGround=!1;const p=Math.hypot(Ae.vel.x,Ae.vel.z),m=Math.min(1,p/4);Ae.onGround&&p>.5&&(Ae.bob+=p*i*1.9,Qo-=p*i,Qo<0&&(Qo=2.3,Mn.step())),$a=Math.sin(Ae.bob*2)*.022*m,ja=Math.cos(Ae.bob)*.014*m,bt.position.set(e.x,e.y+Of+$a,e.z),bt.rotation.set(Ae.pitch,Ae.yaw,ja*.4),bt.fov=ki(bt.fov,Gn?46:r?78:72,14,i),bt.updateProjectionMatrix(),bt.updateMatrixWorld()}let jo=0;function Vv(i){const e=pt,t=6.8+Math.abs(e.v)*.07;Ae.pos.copy(e.pos),Ae.vel.set(e.vx,0,e.vz),Ae.onGround=!0,ja=$a=0,jo=ki(jo+-Gr*.004,0,Math.abs(Gr)>.5?0:.6,i);const n=e.heading+jo;rc.set(e.pos.x+Math.sin(n)*t,e.pos.y+2.5+Math.max(-1.2,Math.min(3,Ae.pitch*-3)),e.pos.z+Math.cos(n)*t),bt.position.lerp(rc,1-Math.exp(-7*i)),bt.lookAt(e.pos.x,e.pos.y+1.2,e.pos.z),bt.fov=ki(bt.fov,62+Math.abs(e.v)*.55,4,i),bt.updateProjectionMatrix(),bt.updateMatrixWorld()}function bu(i,e){const t=Ae.pos;sc-=i,Rt.autoTap&&(Rt.autoTap=!1,pt&&Bf()),Rt.touch&&(Js=Rt.fire,Rt.fire&&!vt.card.def.auto&&vt.card.cool<=0&&(Rr=!0),Gn=Rt.aim);const n=(en.KeyW?1:0)-(en.KeyS?1:0),s=(en.KeyA?1:0)-(en.KeyD?1:0)-(Math.abs(Rt.moveX)>.15?Rt.moveX:0);rs.update(i,pt,pt?{thr:n,steer:Math.max(-1,Math.min(1,s)),brake:!!en.Space}:null);const r=_i.update(i,Ae);r||(pt?Vv(i):Gv(i)),vt.root.visible=!pt&&!r;const a=If.find(u=>Math.hypot(t.x-u.x,t.z-u.z)<u.r);!!a!==$i&&($i=!!a,$i&&jn(`Overclock — ${a.name}`)),$i&&(Ae.vram=Math.min(gr,Ae.vram+.9*i));for(const u of vt.cards)u.cool-=i,u.temp=Math.max(38,u.temp-(u===vt.card?13:22)*($i?1.7:1)*i),u.temp>=95&&!u.throttled?(u.throttled=!0,Mn.throttle(),jn("Thermal throttle")):u.throttled&&u.temp<66&&(u.throttled=!1);const o=vt.card,l=o.def.auto?Js:Rr;Rr=!1,l&&!pt&&!r&&vt.swap<=0&&o.cool<=0&&!o.throttled&&(Ae.vram>=o.def.vram?Hf(o):(Mn.click(),jn("Out of VRAM — find RAM"),o.cool=.4)),vt.update(i,{ads:Gn,bobX:ja,bobY:$a,mdx:Gr,mdy:jl,t:e,vy:Ae.vel.y}),Gr=jl=0;const c=(o.temp-38)/57,h=pt?Math.abs(pt.v):0;Dv(pt?.012+h*.0015:r?.02:.004+c*.05,pt?110+h*42:r?140:160+c*520),e-Ae.lastHurt>5&&Ae.hp<100&&(Ae.hp=Math.min(100,Ae.hp+10*i));for(const u of co){if(u.respawn>0){u.respawn-=i,u.group.visible=u.respawn<=0;continue}Math.hypot(t.x-u.x,t.z-u.z)<(pt?2.6:1.5)&&Ae.vram<gr-.5&&(Ae.vram=Math.min(gr,Ae.vram+8),u.respawn=25,u.group.visible=!1,Mn.pickup(),jn("+8 GB VRAM"))}const f=It.update(i,e),d=Math.hypot(t.x-It.zone.x,t.z-It.zone.z)>It.zone.r;It.over==="win"&&Ae.hp>0&&Gf(`胜利！${Us[0].name}是最后的幸存队伍 · 你击倒 ${It.me.kills} 个。`);const p=o.temp>80?"hot":"",m=u=>"█".repeat(Math.round(Math.max(0,Math.min(1,u))*12)).padEnd(12,"░"),_=pt||r?"":rs.nearest(t,3.6)?"E — drive this car":_i.prompt(t),g=pt?`${Math.abs(pt.v*3.6).toFixed(0)} km/h${pt.slip>3.2?' <span class="hot">DRIFT</span>':""}${pt.auto?' <span class="oc">AUTO</span>':""}`:"—";Qt("osd").innerHTML=`<b>GPU </b> ${o.def.name}
<b>TEMP</b> <span class="${p}">${o.temp.toFixed(0).padStart(3)}°C ${m(c)}</span>${o.throttled?' <span class="hot">THROTTLED</span>':""}
<b>VRAM</b> ${Ae.vram.toFixed(1).padStart(4)} / ${gr} GB ${m(Ae.vram/gr)}
<b>PWR </b> ${$i?'<span class="oc">OVERCLOCK +60%</span>':"STOCK"}
<b>FPS </b> ${ac.toFixed(0)}
<b>CAR </b> ${g}`,Qt("hp").textContent=Math.ceil(Ae.hp),Qt("hpb").style.width=Ae.hp+"%",Qt("wname").textContent=o.def.name,Qt("wsub").textContent=o.def.sub,Qt("slots").innerHTML=vt.cards.map((u,v)=>`<div class="${v===vt.next?"on":""}">${v+1} · ${u.def.name}${u.throttled?" — hot":""}</div>`).join(""),Qt("top").textContent=_||(d?"⚠ 你在安全区外 · ":"")+Us.map((u,v)=>`${u.short} ${f[v]}`).join(" · ")+` · ${It.zone.shrinking?"缩圈中":"下次缩圈"} ${Math.ceil(Math.max(0,It.zone.t))}s`,Qt("cross").style.opacity=pt||r?0:1-vt.adsT,ec>0&&(ec-=i)<=0&&(Qt("note").style.opacity=0),Rt.mode(!!pt,r,pt?.auto,_)}let wu=0,Eu=0;function Wv(i,e){for(let t=0;t<ir;t++){if(Ga[t]<=0)continue;Ga[t]-=i;const n=t*3;ns[n+1]-=9.8*i,Fi[n]+=ns[n]*i,Fi[n+1]+=ns[n+1]*i,Fi[n+2]+=ns[n+2]*i;const s=Math.exp(-4*i);os[n]*=s,os[n+1]*=s*s,os[n+2]*=s*s,Ga[t]<=0&&(Fi[n+1]=-99)}Cr.geometry.attributes.position.needsUpdate=Cr.geometry.attributes.color.needsUpdate=!0;for(const t of[...zi,Fs])if(t.visible){t.userData.life-=i;const n=t.userData.life/t.userData.max;n<=0?t.visible=!1:t.scale.x=t.scale.y=t.userData.r*n}Qs.intensity=ki(Qs.intensity,0,9,i);for(const t of co)t.group.rotation.y=e*1.2+t.x,t.group.position.y=tn(t.x,t.z)+1.15+Math.sin(e*2+t.z)*.08,t.rgb.emissive.setHSL((e*.25+t.x*.01)%1,1,.5);for(const t of Pt.tick)t(e);if((wu-=i)<=0&&Pt.lamps.length){wu=.3;const t=Ae.pos,n=Pt.lamps.map(s=>[Math.hypot(s[0]-t.x,s[1]-t.z),s]).sort((s,r)=>s[0]-r[0]);kf.forEach((s,r)=>{const[a,o]=n[r][1];s.position.set(a,tn(a,o)+3.6,o)})}(Eu-=i)<=0&&(Eu=.12,Rt.drawMap({x:Ae.pos.x,z:Ae.pos.z,yaw:pt?pt.heading:Ae.yaw,cars:rs.list,ferry:_i.ferry.position,zone:It.zone,mates:It.bots.filter(t=>t.alive&&t.team===0)})),Ql.update(e,i,bt.position.y<-10?Ae.pos:bt.position),Hs.uniforms.time.value=e,Hs.uniforms.hurt.value=ki(Hs.uniforms.hurt.value,Ae.hp<35?.35:0,3,i)}function Xv(){const i=innerWidth,e=innerHeight;li=new Vx(un),li.addPass(new Wx(kn,bt));const t=new qn(kn,bt,i,e),n=t.render.bind(t);t.render=(...s)=>{const r=vt.flash.visible;Oi.visible=vt.flash.visible=!1;for(const a of Pt.noAO)a.visible=!1;n(...s);for(const a of Pt.noAO)a.visible=!0;Oi.visible=!0,vt.flash.visible=r},li.addPass(t),li.addPass(new qs(new Ee(i,e),.05,.4,4)),li.addPass(new Jx),li.addPass(new Qx),Hs=new Sf({uniforms:{tDiffuse:{value:null},time:{value:0},hurt:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float time,hurt;varying vec2 vUv;
      void main(){vec2 c=vUv-.5;float d=dot(c,c);vec2 o=c*d*.008;
        vec3 col=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);
        col*=1.-d*.7; float n=fract(sin(dot(gl_FragCoord.xy+fract(time)*91.7,vec2(12.9898,78.233)))*43758.5453); col+=(n-.5)*.02;
        col=mix(col,vec3(.55,0.,0.),clamp(hurt*d*3.,0.,.8)); gl_FragColor=vec4(col,1.);}`}),li.addPass(Hs)}addEventListener("resize",()=>{bt.aspect=innerWidth/innerHeight,bt.updateProjectionMatrix(),un.setSize(innerWidth,innerHeight),li?.setSize(innerWidth,innerHeight)});function qv(){Ci=$x(un),Ql=av(kn,un),Pt=ov(kn,Ci);const i=vv(Pt);Mv(Pt),hv(Pt);const e=_v(Pt.shifted(Zn[0],Zn[1]));If=e.zones.map(s=>({...s,x:s.x+Zn[0],z:s.z+Zn[1]})),Pt.ribbon(Pt.dense([[-1904,-2956],[-1900,-3010],[-1900,-3072]]),9,Pt.over(Ci.asphalt,4),Se+.07),Pt.ribbon(Pt.dense([[-2030,-3078],[-1780,-3078]]),12,Pt.over(Ci.asphalt,4),Se+.07);const t=[...e.carSpots.slice(0,3).map(([s,r,a])=>[s+Zn[0],r+Zn[1],a]),[-70,128,2.1],[-60,152,2.1],[-6,262,-1.57],[140,352,3.14],[-640,62,1.2],[640,-690,.4],[-2725,-700,1.4],[-1560,-2712,0],[-2150,-1866,-1.3]];rs=Av(Pt,t,Ci,Fv),rs.update(.016,null,null),Rt=Pv({keys:en,onLook:Ff,onUse:()=>$l()&&tc(),onSwap:()=>vt.select((vt.next+1)%vt.cards.length)}),_i=Rv(Pt,bt,i.metro,s=>{jn(s),Mn.chime()}),vt=Ev(bt,Ci),Uv(),zv(),Xv(),It=Nv({scene:kn,fx:Oi,world:Pt,M:Ci,player:Ae,blocked:Ii,burst:Bi,note:jn,sfx:Mn,camera:bt,hurtPlayer:yu,tracer:(s,r,a)=>Va(zi[Os=(Os+1)%zi.length],s,r,.012,new Ke(a),5,.07),boom:s=>{Bi(s,ic,130,10,2.2,1,.3),Bi(s,ic,60,4,.3,.3,.3),Qs.position.copy(s),Qs.intensity=700,Mn.boom()}}),console.assert(Ii(-600,Se,-900)&&!Ii(Zs[0],Se,Zs[1])&&Ii(-200,Se,420)&&En(532,-822)&&En(-1100,-2152)&&En(-2784,-700),"collision self-check failed"),console.assert(tn(532,-822)>Se+2&&tn(0,300)===Se,"ground self-check failed"),bt.position.set(Ae.pos.x,Ae.pos.y+Of,Ae.pos.z),bt.rotation.set(Ae.pitch,Ae.yaw,0),vt.update(.016,{ads:!1,bobX:0,bobY:0,mdx:0,mdy:0,t:0,vy:0}),Rt.mode(!1,!1,!1,""),Uf=!0,Qt("msg").textContent=Rt.touch?"Tap to start":"Click to deploy",window.G={scene:kn,camera:bt,player:Ae,renderer:un,world:Pt,env:Ql,W:vt,get battle(){return It},rams:co,cars:rs,keys:en,ui:Rt,transit:_i,use:tc,blocked:Ii,POI:Fn,get driving(){return pt},hurt:yu,fire:()=>Hf(vt.card),step:s=>{br+=s,bu(s,br)}};let n=performance.now();un.setAnimationLoop(s=>{const r=Math.min((s-n)/1e3,.05);n=s,ac=ki(ac,1/Math.max(r,.001),2,r),$l()&&Ae.hp>0&&(br+=r,bu(r,br)),Wv(r,s/1e3),li.render(r)})}setTimeout(qv,60);
