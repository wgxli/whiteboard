(this.webpackJsonpwhiteboard=this.webpackJsonpwhiteboard||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(3),r=n.n(a),l=(n(9),n(1)),c=null,s=null,h=0;var d=function(){return null},u=[],k=0,b=0;function v(e){var t=[2*e.clientX,2*e.clientY,e.buttons],n=t[0],i=t[1],o=t[2];if(h===o)switch(o){case 1:u.push([n,i]),s.beginPath(),s.moveTo((u[0][0]+u[1][0])/2,(u[0][1]+u[1][1])/2);for(var a=2;a<u.length;a++){var r=Object(l.a)(u[a-1],2),c=r[0],d=r[1],k=Object(l.a)(u[a],2),b=k[0],v=k[1];s.quadraticCurveTo(c,d,(c+b)/2,(d+v)/2)}s.stroke(),u.length>600&&(u=u.slice(u.length-2));break;case 2:s.fillStyle="white",s.beginPath(),s.arc(n,i,50,0,2*Math.PI),s.fill()}else u=[[n,i]];h=o}function f(){d(),s.clearRect(0,0,c.width,c.height);var e=[s.strokeStyle,s.lineWidth,s.getLineDash()],t=e[0],n=e[1],i=e[2],o=2*window.innerWidth,a=2*window.innerHeight;k%=4;var r=[Math.round((o-500)/120),Math.round((a-500)/120)],l=r[0],h=r[1],u=(o-500)/(l-=l%2),b=(a-500)/(h-=h%2),v=function(e){return(o-u*l)/2+e*u},f=function(e){return(a-b*h)/2+e*b};if(1===k){s.lineWidth=2,s.strokeStyle="#888";for(var w=0;w<=h;w++)s.beginPath(),s.moveTo(250,f(w)),s.lineTo(o-250,f(w)),s.stroke()}if([2,3].includes(k)){s.lineWidth=2,s.strokeStyle="#888",s.setLineDash([10,10]);for(var g=0;g<=h;g++)s.beginPath(),s.moveTo(v(0),f(g)),s.lineTo(v(l),f(g)),s.stroke();for(var m=0;m<=l;m++)s.beginPath(),s.moveTo(v(m),f(0)),s.lineTo(v(m),f(h)),s.stroke();s.setLineDash([])}if(3===k){s.lineWidth=5,s.strokeStyle="black",s.fillStyle="black";var y=v(Math.floor(l/2)),T=f(Math.ceil(h/2));s.beginPath(),s.moveTo(v(-.5),T),s.lineTo(v(l+.5),T),s.stroke(),s.beginPath(),s.moveTo(y,f(h+.5)),s.lineTo(y,f(-.5)),s.stroke(),s.beginPath(),s.moveTo(v(l+.5),T-20),s.lineTo(v(l+.5)+40,T),s.lineTo(v(l+.5),T+20),s.fill(),s.beginPath(),s.moveTo(y+20,f(-.5)),s.lineTo(y,f(-.5)-40),s.lineTo(y-20,f(-.5)),s.fill()}s.strokeStyle=t,s.lineWidth=n,s.setLineDash(i)}function w(e){switch(e.key){case"a":s.lineWidth=Math.max(s.lineWidth-1,1);break;case"b":s.lineWidth+=1;break;case"c":k+=1,f();break;case"e":f();break;case"g":s.strokeStyle="black";break;case"h":s.strokeStyle="red";break;case"i":s.strokeStyle="blue";break;case"j":s.strokeStyle="green";break;case"k":var t=[[],[20,20],[3,17]];b+=1,b%=t.length,s.setLineDash(t[b]);break;case"l":s.strokeStyle="black",s.lineWidth=4,b=0,s.setLineDash([])}}var g=function(){var e=Object(i.useState)(2*window.innerWidth),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(2*window.innerHeight),h=Object(l.a)(r,2),u=h[0],k=h[1];return Object(i.useEffect)((function(){c=document.getElementById("canvas"),(s=c.getContext("2d")).lineCap="round",s.lineJoin="round",s.lineWidth=4,s.strokeStyle="black",window.addEventListener("mousemove",v),window.addEventListener("keydown",w),d=function(){a(2*window.innerWidth),k(2*window.innerHeight)}})),o.a.createElement("canvas",{id:"canvas",width:n,height:u,onContextMenu:function(e){return e.preventDefault(),!1}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.633afe3c.chunk.js.map