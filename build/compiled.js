(function() {var fa=aa(),c=null,ha=0;window.addEventListener("contextmenu",function(a){a.preventDefault()},!1);var ia=h(60,100,50),t=p(ia,50,null,null,null);t.name=t.type="sun";t.h=!0;var x=u(h(180,39,62),10,t,500,.003,v()*w),y={};y.f=x;y.J=.01;y.K=300;y.L=0;y.M=0;y.I=1E3;y.m=0;c=y;u(h(-1,60,70),5,x,100,-.002,v()*w);var z=u(h(-1,60,70),20,t,1123,.0015,v()*w);u(h(-1,60,70),5,z,8*z.size,.01,v()*w);u(h(-1,60,70),10,z,9*z.size,.005);u(h(-1,60,70),30,t,2532,-.001,v()*w);ja(x);ja(z);A(x);A(t);A(t);A(t);A(z);A(z);A(z);
ka(x);ka(x);ka(x);ka(z);var la=performance.now(),ma=1E3/60,na=0,oa=0,pa=[];(function qa(a){requestAnimationFrame(qa);var f=la+ma;pa.push(1/((a-na)/1E3));na=a;if(60<pa.length){var k=0,e=1E3,d=0;pa.shift();pa.forEach(function(a){k+=a;e=Math.min(e,a);d=Math.max(d,a)});oa=Math.floor(k/60)+", "+~~e+" - "+~~d}a>f&&(wa(Math.min(Math.floor((a-la)/ma),60)),xa(),la=a)})(la);
function wa(a){0===ha?0<ya--||(za?Aa():Ba?Ca():B&&(ha=1)):(Da="",Ea(),Fa.forEach(function(a){a.update()}),C.forEach(function(a){a.update()}));Ga=Ha=Ia=B=!1;--a&&wa(a)}
function xa(){Oa();G.clearRect(0,0,H.width,H.height);G.drawImage(Pa,Math.floor(.5*H.width-I-2048),Math.floor(.5*H.height-J-2048),4096,4096);Qa();0===ha?(Oa(),Ra()):(G.setTransform(O,0,0,O,-I+H.width/2,-J+H.height/2),C.forEach(function(a){a.s()}),Sa(),Ta(),G.setTransform(1,0,0,1,H.width/2,H.height/2),Fa.forEach(function(a){a.s()}),Oa(),G.font="14px monospace",G.textBaseline="top",G.textAlign="left",G.fillStyle="#ffffff",G.fillText("#js13k tower defense prototype",20,20),G.fillText("https://github.com/scorp200/td13k",
20,40),G.fillText("framerate: "+oa,20,60),G.fillText("mouse (gui): "+P+", "+Q,20,80),G.fillText("mouse (view): "+R+", "+V,20,100),G.fillText("planet name: "+Da,20,120),G.fillText("view x: "+I,20,160),G.fillText("view y: "+J,20,180),G.fillText("view zoom: "+O,20,200),G.fillText("view tilt: "+W,20,220),G.fillText("minerals: "+Math.floor(100*c.m)/100,20,260))};var I=0,J=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,O=1,$a=1,W=2;function Ea(){if(Ha||Ga){var a=$a+(Ha?.1:-.1);$a=2<a?2:.1>a?.1:a}W=Math.min(1+(O-.1),2);B&&!fa.display&&(ab=!0,Wa=I,Xa=J,Ya=P,Za=Q);bb&&ab?(Ua=Wa+(Ya-P),Va=Xa+(Za-Q)):Ia&&(ab=!1);a=O;O+=.001>Math.abs(O-$a)?0:($a-O)/5;a=O-a;.001<Math.abs(a)&&(I+=R*a,J+=V*a,Ua+=R*a,Va+=V*a);I+=.001>Math.abs(I-Ua)?0:(Ua-I)/5;J+=.001>Math.abs(J-Va)?0:(Va-J)/5}function Oa(){G.setTransform(1,0,0,1,0,0)}var ab;var cb=document.createElement("CANVAS");cb.width=512;cb.height=512;var X=cb.getContext("2d");X.shadowBlur=1;X.globalAlpha=.5;for(var db=300;db--;){var eb=512*Math.random(),fb=512*Math.random(),ob=h(-1,100,90);X.fillStyle=ob;X.shadowColor=ob;X.beginPath();X.arc(eb,fb,.5,0,2*Math.PI);X.fill()}var pb=G.createPattern(cb,"repeat");
function Qa(){var a=performance.now()/2E3;G.beginPath();G.rect(0,0,H.width,H.height);G.fillStyle=pb;G.translate(.5*H.width,.5*H.height);G.scale(.5,.5);G.translate(-I/25,-J/25);G.rotate(a/200);G.fill();G.rotate(-a/200);G.scale(2,2);G.translate(-I/50,-J/50);G.fill()}var Pa=document.createElement(qb),rb=Pa.getContext("2d",{alpha:!1});Pa.width=512;Pa.height=512;rb.beginPath();var sb=rb.createRadialGradient(256,256,0,256,256,256);sb.addColorStop(0,"#141e28");sb.addColorStop(1,"#000000");rb.fillStyle=sb;
rb.fillRect(0,0,512,512);var Da="",H=tb.getElementById("c"),G=H.getContext("2d",{alpha:!1});ub();window.addEventListener("resize",ub,!1);function ub(){H.width=window.innerWidth;H.height=window.innerHeight;G.clearRect(0,0,H.width,H.height)}var vb=[];
function Sa(){G.globalAlpha=1;for(var a=0;a<C.length;a++){var b=C[a];if(!b.cache){var f=b.h?wb:b.color,k=b.h?50:10,e=b.size+k,d=b,g=2*e,m=tb.createElement(qb);m.width=2*e;m.height=g;d.cache=m;d=b.cache.getContext("2d");b.h&&(d.filter="blur(4px)");d.beginPath();d.fillStyle=f;d.shadowColor=b.color;d.shadowBlur=k;d.arc(e,e,b.size,0,w,!1);d.fill();if(!b.h)for(k=f=b.size,d.beginPath(),d.arc(e,e,b.size,0,2*Math.PI,!1),d.clip();f--;)d.beginPath(),d.globalAlpha=.05,d.fillStyle="#000000",d.shadowColor="#000000",
d.shadowBlur=10,d.save(),d.transform(1,0,0,1,e-k/2+(b.size-k)/2,e),d.arc(0,0,2*k--,-w/4,w/4),d.fill(),d.restore()}e=C[0];e=Math.atan2((b.y-e.y)*W,b.x-e.x);G.save();G.translate(b.x,b.y);G.rotate(e);b.h&&(e=1+.01*Math.sin(performance.now()/30),G.scale(e,e));G.drawImage(b.cache,-b.cache.width/2,-b.cache.height/2);G.restore()}}
function Ta(){G.beginPath();for(var a=75*(W-1),b=0;b<Y.length;b++)for(var f=Y[b],k=b;k<Y.length;k++){var e=Y[k],d;if(d=e!=f){d=e.x-f.x;var g=(e.y-f.y)*W;d=Math.sqrt(d*d+g*g)<=c.I}d&&(G.moveTo(f.x,f.y),G.bezierCurveTo(f.x,f.y-a,e.x,e.y-a,e.x,e.y))}G.globalAlpha=.2/O;a=1/O*2;G.lineWidth=3<a?3:1>a?1:a;G.strokeStyle="#00FF00";G.stroke();G.globalAlpha=1};function xb(){function a(a){return Math.sin(6.283184*a)}var b=[a,function(a){return.5>a%1?1:-1},function(a){return a%1*2-1},function(a){a=a%1*4;return 2>a?a-1:3-a}],f,k,e,d,g;this.D=function(a){f=a;k=a.B;e=0;d=a.u*a.o*(k+1)*2;g=new Int32Array(d)};this.C=function(){var m,ba,K,r,S,L=new Int32Array(d),n=f.H[e],T=f.u,ra=f.o,Ja=0,sa=0,D;var E=!1;var ta=[];for(ba=0;ba<=k;++ba){var ca=n.p[ba];for(K=0;K<ra;++K){if(S=ca?n.c[ca-1].b[K]:0)n.a[S-1]=n.c[ca-1].b[K+ra]||0,16>S&&(ta=[]);var Jb=b[n.a[15]],Kb=n.a[16]/
512,Lb=Math.pow(2,n.a[17]-9)/T,Mb=n.a[18],gb=n.a[19],Nb=135.82764118168*n.a[20]/44100,Ob=1-n.a[21]/255,Ka=1E-5*n.a[22],Pb=n.a[23]/32,Qb=n.a[24]/512,Rb=6.283184*Math.pow(2,n.a[25]-9)/T,hb=n.a[26]/255,La=n.a[27]*T&-2;S=(ba*ra+K)*T;for(r=0;4>r;++r)if(m=ca?n.c[ca-1].n[K+r*ra]:0){if(!ta[m]){var l=ta;var M=m;var ib=D=void 0,ua,F,q=n,jb=m,Sb=b[q.a[0]],Tb=q.a[1],Ub=q.a[3],Vb=b[q.a[4]],Wb=q.a[5],Xb=q.a[8],kb=q.a[9],U=q.a[10]*q.a[10]*4,va=q.a[11]*q.a[11]*4,Ma=q.a[12]*q.a[12]*4,Yb=1/Ma,da=q.a[13],Zb=T*Math.pow(2,
2-q.a[14]),lb=new Int32Array(U+va+Ma),mb=0,nb=0;for(ua=F=0;F<U+va+Ma;F++,ua++){0<=ua&&(da=da>>8|(da&255)<<4,ua-=Zb,ib=.003959503758*Math.pow(2,(jb+(da&15)+q.a[2]-128-128)/12),D=.003959503758*Math.pow(2,(jb+(da&15)+q.a[6]-128-128)/12)*(1+8E-4*q.a[7]));var N=1;F<U?N=F/U:F>=U+va&&(N-=(F-U-va)*Yb);var ea=ib;Ub&&(ea*=N*N);mb+=ea;var Na=Sb(mb)*Tb;ea=D;Xb&&(ea*=N*N);nb+=ea;Na+=Vb(nb)*Wb;kb&&(Na+=(2*Math.random()-1)*kb);lb[F]=80*Na*N|0}l[M]=lb}M=ta[m];m=0;for(l=2*S;m<M.length;m++,l+=2)L[l]+=M[m]}for(m=0;m<
T;m++)r=2*(S+m),(l=L[r])||E?(E=Nb,Mb&&(E*=Jb(Lb*r)*Kb+.5),E=1.5*Math.sin(E),Ja+=E*sa,l=Ob*(l-sa)-Ja,sa+=E*l,l=3==gb?sa:1==gb?l:Ja,Ka&&(l*=Ka,l=1>l?-1<l?a(.25*l):-1:1,l/=Ka),l*=Pb,E=1E-5<l*l,M=Math.sin(Rb*r)*Qb+.5,D=l*(1-M),l*=M):D=0,r>=La&&(D+=L[r-La+1]*hb,l+=L[r-La]*hb),L[r]=D|0,L[r+1]=l|0,g[r]+=D|0,g[r+1]+=l|0}}e++;return e/f.F};this.A=function(){var a=44+2*d-8,b=a-36,e=new Uint8Array(44+2*d);e.set([82,73,70,70,a&255,a>>8&255,a>>16&255,a>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,
0,0,16,177,2,0,4,0,16,0,100,97,116,97,b&255,b>>8&255,b>>16&255,b>>24&255]);a=0;for(b=44;a<d;++a){var f=g[a];f=-32767>f?-32767:32767<f?32767:f;e[b++]=f&255;e[b++]=f>>8&255}return e};this.getData=function(a,b){for(var d=2*Math.floor(44100*a),m=Array(b),e=0;e<2*b;e+=1){var f=d+e;m[e]=0<a&&f<g.length?g[f]/32768:0}return m}};var tb=document,Z=void 0,wb="#ffffff",qb="CANVAS";var za=!0,yb=[],Ba=!0,zb=[],Bb=Ab,Cb=new xb;Cb.w=new Audio;Cb.D(Bb);zb.push(Cb);Ab=Cb.w;var Eb=Db,Fb=new xb;Fb.v=!0;Fb.D(Eb);yb.push(Fb);var Gb=0;function Aa(){for(var a=0;a<yb.length;a++){var b=yb[a];b.v&&(b.v=1<=b.C(),Gb+=1,b=b.A(),b=URL.createObjectURL(new Blob([b],{type:"audio/wav"})),b=new Audio(b),b.addEventListener("ended",function(){this.currentTime=0;this.play()},!1),b.play())}Gb>=yb.length&&(za=!1)}var Hb=0;
function Ca(){for(var a=0;a<zb.length;a++){var b=zb[a];if(1<=b.C()){Hb+=1;var f=b.A();f=URL.createObjectURL(new Blob([f],{type:"audio/wav"}));b.w.src=f}}Hb>=zb.length&&(Ba=!1)};var Db={H:[{a:[2,100,128,0,3,201,128,0,0,0,0,6,29,0,0,0,194,4,1,3,25,191,115,244,147,6,84,6],p:[5,1,2,1,1,1,1,3,4,1,2,1,2,1,2,,,7,8,7,8,7,8,7,8,6,9],c:[{n:[123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130],b:[21,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,48]},{n:[123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130,126,125,126,128,123,,99,,,,99,,,,,,,,,,,,,,,,,,,,,,,,,,111],b:[,,,,,,,,,,,,,,,,,,,,,,,,,,,
11,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,31]},{n:[111,,,,,,,,123,,,,,,,,111,,,,,,,,123],b:[]},{n:[114,,,,,,,,126,,,,,,,,114,,,,,,,,114,126,111,123,114,126,118,130],b:[13,,,,,,,,,,,,,,,,,,,,,,,,13,,13,,13,,13,11,29,,,,,,,,,,,,,,,,,,,,,,,,32,,41,,29,,25,15]},{n:[123,123,135,128,123,123,135,130,126,125,126,128,123,123,135,128,123,123,135,130,126,125,126,128,123,,99,,,,99,,,,,,,,,,,,,,,,,,,,,,,,,,111],b:[13,11,21,17,,,,,,,,,,,,,,,,,,,,,,,,,,,,17,29,,25,113,,,,,,,,,,,,,,,,,,,,,,,,,,,,194]},{n:[111,,,,,,,,
123,,,,,,,,111,,,,,,,,99],b:[]},{n:[111,123,,123,111,,123,111,111,123,,123,111,,123,111,111,123,,123,111,,123,111,111,123,,123,111,,123,111],b:[]},{n:[114,126,,126,114,,126,114,114,126,,126,114,,126,114,114,126,,126,114,,126,114,116,128,,128,116,,114,121],b:[]},{n:[],b:[]}]},{a:[0,255,117,1,0,255,110,0,1,0,4,6,35,0,0,0,0,0,0,2,14,1,1,39,76,5,0,0],p:[,1,1,1,1,1,1,2,,,,1,1,1,1,1,1,,,1,1,1,1,1,1],c:[{n:[147,,,,,,147,,,,147,,,,,,147,,,,,,147,,,,147,,,,147],b:[]},{n:[147],b:[]}]},{a:[0,0,140,0,0,0,140,
0,0,60,4,10,68,0,0,0,187,5,0,1,239,135,0,32,108,5,16,4],p:[,1,1,2,3,2,3,4,,,,2,3,2,3,2,3,,,5,5,5,5,5,5,4],c:[{n:[,,,,147,,,,,,,,148,,,,,,,,147,,,,,,,,147],b:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,,147],b:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,147,147,147],b:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[147],b:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,68]},{n:[147,,,147,,,147,,147,,,147,,147,,147,147,,,147,
,,147,,147,,,147,,147,,147],b:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]}]},{a:[2,192,128,0,2,192,140,18,0,0,107,115,138,0,0,0,136,5,1,2,8,92,21,56,148,5,85,8],p:[3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],c:[{n:[111],b:[]},{n:[114],b:[]},{n:[111],b:[24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,56]}]},{a:[3,0,127,0,3,68,127,0,1,218,4,4,40,0,0,1,55,4,1,2,67,115,124,190,67,6,39,1],p:[,,,1,2,1,2,3,,,,1,2,1,2,1,2,,,1,4,1,4,1,4,3],c:[{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,
147],b:[]},{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147,,147,147],b:[]},{n:[147],b:[]},{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147,,,147],b:[]}]},{a:[0,91,128,0,0,95,128,12,0,0,12,0,67,0,0,0,0,0,0,2,255,15,0,32,83,3,134,4],p:[,,,1,2,3,2,1,2,,,1,2,3,2,1,2,,,,,4,5,4,5],c:[{n:[159,,147,,154,,147,,157,,147,,154,,150,,159,,147,,154,,147,,162,,147,,154,,150,,123],b:[5,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[159,,147,,154,,147,,157,,147,,154,,150,,159,,147,,154,,147,,162,,147,,157,,162,,126],b:[]},{n:[159,
,147,,154,,147,,157,,147,,154,,150,,159,,147,,154,,147,,162,,147,,154,,150,,123],b:[5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3]},{n:[159,,162,,164,,,,159,,162,164,,,162,,159,,162,,164,,,,159,,162,164,,,162],b:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,25]},{n:[157,,162,,164,,,,157,,162,164,,,162,,157,,162,,164,,,,157,,162,164,,,162],b:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]}]},{a:[3,146,140,0,1,224,128,3,0,0,92,0,95,0,0,3,179,5,1,3,37,135,63,67,150,3,157,6],p:[,,,,,,,,,1,2,3,,1,2,1,
2,3,,4,5,,,,,3],c:[{n:[123,,,,,,,,,,,,,,,,130],b:[11,24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,92,67]},{n:[133,,,,,,,,,,,,,,,138,126,,,,,,,,,,,,125],b:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,11,,,,95,,,,,,,,,,,,,,,,,,,,,,,,,,,,29]},{n:[123],b:[24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,52,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[123,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,138,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,116],b:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,95]},{n:[133,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,126,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,118],b:[]}]},
{a:[0,255,106,1,0,255,106,0,1,0,5,7,164,0,0,0,0,0,0,2,255,0,2,16,83,5,53,1],p:[,,,,,,,1,,,,,,,,,,1,,,,,,,,1],c:[{n:[147],b:[]}]}],u:5513,o:32,B:26,F:8};var Ab={H:[{a:[3,255,128,0,0,255,140,0,0,127,2,2,23,0,0,0,96,3,1,3,94,79,0,32,84,2,12,4],p:[1],c:[{n:[163],b:[]}]}],u:5513,o:1,B:0,F:1};var P=0,Q=0,R=0,V=0,B=!1,bb=!1,Ia=!1,Ga=!1,Ha=!1,Ib;window.addEventListener("mousemove",function(a){var b=H.getBoundingClientRect();P=a.clientX-b.left;Q=a.clientY-b.top;R=(P+I-H.width/2)/O;V=(Q+J-H.height/2)/O;Ib&&(bb=!0)},!1);window.addEventListener("mousedown",function(){Ib=B=!0},!1);window.addEventListener("mouseup",function(){Ib=!1;bb||(Ia=!0);bb=!1},!1);window.addEventListener("mousewheel",function(a){Ga=0<a.deltaY;Ha=0>a.deltaY},!1);var C=[],Y=[],$b=[],ac=5;
function p(a,b,f,k,e,d){d===Z&&(d=0);var g={name:"Some Shithole Planet",type:"orbital",x:0,y:0};g.color=a;g.size=b;g.h=!1;f&&(g.j={f:f,g:k,speed:e,angle:d});g.update=function(){var a=R-g.x,b=V-g.y;Math.sqrt(a*a+b*b)<g.size+ac&&(Da=g.name,Ia&&(fa.show(g),Ab.play()));g.j&&(a=g.j,a.angle+=a.speed,g.x=a.g*Math.cos(a.angle)+a.f.x,g.y=a.g/W*Math.sin(a.angle)+a.f.y)};g.s=function(){var a=g.j;if(a){var b=g.G;b||(b=g.G=[]);var d=Math.floor(4*O);b=b[d];b||(b=document.createElement("CANVAS"),b.width=a.g+40,
b.height=a.g+40,g.G[d]=b,d=b.getContext("2d"),d.clearRect(0,0,b.width,b.height),d.setLineDash([5/O,5/O]),d.beginPath(),d.lineWidth=2/O,d.strokeStyle=g.color,d.globalAlpha=1,d.arc(0,0,a.g,0,w/4,!1),d.stroke(),d.setLineDash(vb));G.save();G.translate(a.f.x,a.f.y);G.scale(1,1/W);G.drawImage(b,0,0,b.width,b.height);G.scale(-1,1);G.drawImage(b,0,0);G.scale(1,-1);G.drawImage(b,0,0);G.scale(-1,1);G.drawImage(b,0,0);G.restore()}if(a=g.j)G.beginPath(),G.globalAlpha=.5,G.strokeStyle=g.color,G.lineWidth=4/O,
G.save(),G.transform(1,0,0,1/W,a.f.x,a.f.y),G.arc(0,0,a.g,a.angle-a.speed*a.g/2,a.angle,0>a.speed),G.restore(),G.stroke()};C.push(g);return g}function u(a,b,f,k,e,d){d===Z&&(d=0);a=p(a,b,f,k+b/2,e,d);a.name=a.type="planet";a.update=bc(a.update,function(){});return a}function ja(a){cc(dc,a,Y)!==Z&&(a=p(h(212,100,97),2,a,3*a.size,-.005),a.name=a.type="mining",a.update=bc(a.update,function(){c.m+=c.J}))}var dc=4;
function A(a){var b=cc(ec,a,Y);b!==Z&&(a=p(h(160,100,50),2,a,5*a.size,.01,b),a.name=a.type="satellite",a.index=Y.length,Y.push(a))}var ec=3;function ka(a){var b=cc(fc,a,$b);b!==Z&&(a=p(h(33,100,50),2,a,7*a.size,.005,b),a.name=a.type="defense",a.index=$b.length,$b.push(a))}var fc=2;var Fa=[];
function aa(){var a={};Fa.push(a);a.display=!1;a.l=300;a.i=400;a.target=null;a.show=function(b){bb||fa.display||"planet"!=b.type||(a.display=!0,a.target=b)};a.update=function(){if(a.display){var b=P-H.width/2,f=Q-H.height/2;B&&(b>-a.l/2&&b<a.l/2&&f>-a.i/2&&f<a.i/2?gc("logged menu"):(a.target=null,a.display=!1))}};a.s=function(){if(a.display){G.fillStyle="#141e28";G.fillRect(-a.l/2,-a.i/2,a.l,a.i);G.fillStyle="#ffffff";G.textAlign="center";G.font="24px monospace";G.fillText((c.f===a.target?"Base":
"")+" "+a.target.name,0,-a.i/2+20);var b=a.target.cache;G.drawImage(b,-b.width/2,-b.height/2)}};return a};var gc=console.log.bind(console),v=Math.random,w=2*Math.PI;function bc(a,b){return function(){a();b()}}function cc(a,b,f){var k=0;f.forEach(function(e){e.j.f==b&&(k+=w/a)});return k>=w?Z:k}function h(a,b,f){return"hsl("+(0>a?360*v():a)+","+(0>b?100*v():b)+"%,"+(0>f?100*v():f)+"%)"};var ya=60;
function Ra(){var a=H.width/2,b=H.height/2;G.fillStyle="#FFFFFF";G.textAlign="center";G.textBaseline="middle";G.font="small-caps 700 256px monospace";G.fillText("ex0ex",a,b-64);G.font="small-caps 700 32px monospace";za?G.fillText("Loading music...",a,b+64):Ba?G.fillText("Loading sounds...",a,b+64):G.fillText("Click to continue!",a,b+64);G.font="small-caps 700 16px monospace";G.fillText("Created by",a,H.height-68);G.fillText("ai Doge & Jack Oatley",a,H.height-48);G.fillText("for #js13k",a,H.height-
28)};})();
