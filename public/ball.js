(()=>{"use strict";function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var e=function(){function e(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"ctx",void 0),i(this,"canvas",void 0);var t=document.querySelector("#first");this.ctx=t.getContext("2d"),this.canvas=t}var n,o;return n=e,o=[{key:"Instance",get:function(){return this._instance||(this._instance=new this)}}],null&&t(n.prototype,null),o&&t(n,o),e}();i(e,"_instance",void 0);const n=e.Instance;function o(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}for(var s=n.ctx,a=n.canvas,h={left:0,right:a.width,top:0,bottom:a.height},l=[],c=function(){function t(i,e,n,o,s,a){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"x",void 0),r(this,"y",void 0),r(this,"r",void 0),r(this,"vx",void 0),r(this,"vy",void 0),r(this,"color",void 0),this.x=i,this.y=e,this.r=n,this.vx=o,this.vy=s,this.color=a}var i,e;return i=t,(e=[{key:"setVelocityAsRandom",value:function(t,i){var e=t+Math.random()*(i-t),n=2*Math.PI*Math.random();return this.vx=e*Math.cos(n),this.vy=e*Math.sin(n),this}},{key:"setColorAsRandom",value:function(t,i){var e=Math.floor(t+Math.random()*(i-t)),n=Math.floor(t+Math.random()*(i-t)),o=Math.floor(t+Math.random()*(i-t));return this.color="rgb(".concat(e,", ").concat(n,", ").concat(o,")"),this}},{key:"draw",value:function(){return s.fillStyle=this.color,s.beginPath(),s.arc(this.x,this.y,this.r,0,2*Math.PI,!0),s.fill(),this}},{key:"move",value:function(){return this.x+=this.vx,this.y+=this.vy,this}},{key:"collisionWall",value:function(t){return this.x-this.r<t.left&&(this.x=t.left+this.r,this.vx<0&&this.setVelocityAsRandom(2,7)),this.x+this.r>t.right&&(this.x=t.right-this.r,this.vx>0&&this.setVelocityAsRandom(2,7)),this.y-this.r<t.top&&(this.y=t.top+this.r,this.vy<0&&this.setVelocityAsRandom(2,7)),this.y+this.r>t.bottom&&(this.y=t.bottom-this.r,this.vy>0&&this.setVelocityAsRandom(2,7)),this}}])&&o(i.prototype,e),t}(),u=0;u<100;u++)l[u]=new c(h.right/2,h.bottom/2,5),l[u].setVelocityAsRandom(2,7).setColorAsRandom(50,255);setInterval((function(){s.fillStyle="rgba(0,0,0,".concat(.1,")"),s.fillRect(0,0,a.width,a.height);for(var t=0;t<l.length;t++)l[t].move().collisionWall(h).draw()}),1e3)})();