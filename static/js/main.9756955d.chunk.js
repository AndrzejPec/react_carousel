(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),c=n(4),r=n(5),s=n(8),u=n(6),o=n(1),l=n.n(o),m=(n(13),n(7)),j=(n(14),n(0)),b=function(t){var e=t.images,n=t.imageWidth,i=t.frameSize,a=t.step,c=t.animationDuration,r=t.infinite,s=void 0!==r&&r,u=(n+25)*i,l=(n+25)*e.length,b=-(l-u),g=Object(o.useState)(0),p=Object(m.a)(g,2),d=p[0],h=p[1];return Object(j.jsxs)("div",{className:"Carousel",style:{width:"".concat(u,"px")},children:[Object(j.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(l,"px"),marginLeft:"".concat(d,"px"),transition:"margin-left ".concat(c/1e3,"s ease-in-out")},children:e.map((function(t,e){return Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:t,alt:"Image ".concat(e+1),style:{width:"".concat(n,"px")}})},t)}))}),Object(j.jsx)("button",{title:"prevButton",type:"button",onClick:function(){d>b&&function(){var t=d-(n+25)*a;s&&t<b&&(t=b),h(t)}()},disabled:d<=b,children:" \u2190 "}),Object(j.jsx)("button",{"data-cy":"next",title:"nextButton",type:"button",onClick:function(){d<0&&function(){var t=d+(n+25)*a;s&&t>0&&(t=0),h(t)}()},disabled:d>=0,children:" \u2192 "})]})},g=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.itemWidth,a=e.frameSize,c=e.step,r=e.animationDuration;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:["Item Width:",Object(j.jsx)("input",{type:"number",value:i,onChange:function(e){return t.setState({itemWidth:Number(e.target.value)})}})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:["Frame Size:",Object(j.jsx)("input",{type:"number",value:a,onChange:function(e){return t.setState({frameSize:Number(e.target.value)})}})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:["Step:",Object(j.jsx)("input",{type:"number",value:c,onChange:function(e){return t.setState({step:Number(e.target.value)})}})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:["Animation Duration:",Object(j.jsx)("input",{type:"number",value:r,onChange:function(e){return t.setState({animationDuration:Number(e.target.value)})}})]})}),Object(j.jsx)(b,{step:3,images:n,frameSize:a,imageWidth:i,animationDuration:1e3,infinite:!0})]})}}]),n}(l.a.Component);a.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9756955d.chunk.js.map