(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(2),i=t.n(s),c=t(3),m=t(4),o=t(7),g=t(5),l=t(8),u=(t(14),function(e){return n.a.createElement("div",{className:"card col s3",onClick:function(){return e.selectOption(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))}),d=(t(16),function(e){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"/",className:"brand-logo"},"Stroop Effect Game"),n.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},n.a.createElement("li",null,n.a.createElement("a",{className:"message",href:"/"},e.message)),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Current Score: ",e.currentScore)),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Highest Score: ",e.highScore)))))}),p=t(6),h=function(e){function a(){var e,t;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(n)))).state={options:p,chosenArr:[],currentScore:0,highScore:0,message:"Click an Image to Start"},t.shuffle=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e},t.selectOption=function(e){t.setState({options:t.shuffle(t.state.options)}),-1===t.state.chosenArr.indexOf(e)?(t.state.chosenArr.push(e),t.setState({chosenArr:t.state.chosenArr,currentScore:t.state.currentScore+1,message:"Nice! Pick Again"})):(t.setState({currentScore:0,chosenArr:[],message:"Game Over"}),t.state.currentScore>t.state.highScore&&t.setState({highScore:t.state.currentScore,message:"New High Score!"}))},t}return Object(l.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(d,{currentScore:this.state.currentScore,highScore:this.state.highScore,message:this.state.message}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.options.map(function(a){return n.a.createElement(u,{selectOption:e.selectOption,id:a.id,key:a.id,name:a.name,image:a.image})}))))}}]),a}(r.Component);i.a.render(n.a.createElement(h,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,name:"blueBlue",image:"./assets/images/blueblue.jpg"},{id:2,name:"blueRed",image:"./assets/images/bluered.jpg"},{id:3,name:"greenGreen",image:"./assets/images/greenGreen.jpg"},{id:4,name:"greenOrange",image:"./assets/images/greenOrange.jpg"},{id:5,name:"greenPurple",image:"./assets/images/greenpurple.jpg"},{id:6,name:"orangeGreen",image:"./assets/images/orangegreen.jpg"},{id:7,name:"orangeRed",image:"./assets/images/orangered.jpg"},{id:8,name:"purpleGreen",image:"./assets/images/purpleGreen.jpg"},{id:9,name:"purpleOrange",image:"./assets/images/purpleorange.jpg"},{id:10,name:"redBlue",image:"./assets/images/redblue.jpg"},{id:11,name:"redPurple",image:"./assets/images/redpurple.jpg"},{id:12,name:"redRed",image:"./assets/images/redred.jpg"}]},9:function(e,a,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.09e78cb8.chunk.js.map