(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(56),l=a.n(s),o=(a(67),a(57)),c=a(58),i=a(60),m=a(59),u=a(61),h=(a(68),a(39)),d=a.n(h);d.a.initializeApp({apiKey:"AIzaSyABfJF03g1ZNaKeklq6-7qx94C3HDL97VI",authDomain:"first-firebase-project-csj.firebaseapp.com",databaseURL:"https://first-firebase-project-csj.firebaseio.com",projectId:"first-firebase-project-csj",storageBucket:"first-firebase-project-csj.appspot.com",messagingSenderId:"678006963297"});var p=d.a,g=a(40),f=a(42),b=function(e){var t={color:e.color};return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{style:t},e.text))},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState({userInput:e.target.value})},a.handleMessageChange=function(e){e.preventDefault();var t=e.target.value;a.setState({userMessage:t})},a.handleInput=function(){""===a.state.name?a.setState({placeHolder:"Type Username"}):a.setState({userName:"Message"})},a.handleSubmit=function(e){e.preventDefault(),a.setState({name:a.state.userInput},function(){a.handleInput()})},a.handleSubmitMessageForm=function(e){e.preventDefault(),p.database().ref("messages").push({content:a.state.userMessage,name:a.state.userInput,dateCreated:(new Date).toLocaleString("en-US"),color:a.state.color}),a.setState({userMessage:""})},a.scroll=function(){var e=a.myRef.current;e.scrollTop=e.scrollHeight},a.handleColor=function(e){a.setState({color:e.target.value})},a.handleTheme=function(){a.setState(function(e){return"white"===e.theme?{theme:"rgb(43, 40, 45)",themeColor:{border:"lightgray",chatMessage:"rgb(40, 44, 52)"},text:"Light Mode"}:{theme:"white",themeColor:{border:"lightgray",chatMessage:"#575757"},text:"Dark Mode"}})},a.state={messages:[],userInput:"",userMessage:"",userName:"",placeHolder:"e.g. JeannetteNg5",color:"",theme:"rgb(43, 40, 45)",themeColor:{border:"white",chatMessage:"rgb(40, 44, 52)"},text:"Light Mode"},a.myRef=r.a.createRef(),console.log("constructor() this.myRef",a.myRef),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.database().ref("messages").on("value",function(t){if(null!==t.val()){var a=Object.values(t.val());e.setState({messages:a},e.scroll),console.log(a)}})}},{key:"componentDidUpdate",value:function(){this.scroll()}},{key:"render",value:function(){var e=this;return""===this.state.userName?r.a.createElement("div",{className:"firstPage"},r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{action:"submit",onSubmit:this.handleSubmit,ref:this.myRef,className:"firstPageForm"},r.a.createElement("h1",null,"ChatTime"),r.a.createElement("p",null,"Join HackerYou Chat room"),r.a.createElement("p",null,"Enter Username"),r.a.createElement("div",{className:"enterUserName"},r.a.createElement("label",{htmlFor:"userName",className:"visuallyHidden"},"UserName"),r.a.createElement("input",{value:this.state.userInput,type:"text",id:"userName",placeholder:this.state.placeHolder,onChange:this.handleChange,maxLength:"15"})),r.a.createElement("p",null,"Select Username Color"),r.a.createElement("div",{className:"themeColorSelection"},r.a.createElement("label",{htmlFor:"orange"},r.a.createElement("input",{type:"radio",value:"#f09665",name:"color",id:"orange",onClick:this.handleColor,required:!0})),r.a.createElement("label",{htmlFor:"purple"},r.a.createElement("input",{type:"radio",value:"#ab9df2",name:"color",id:"purple",onClick:this.handleColor})),r.a.createElement("label",{htmlFor:"PaleVioletRed"},r.a.createElement("input",{type:"radio",value:"#ea5d86",name:"color",id:"PaleVioletRed",onClick:this.handleColor})),r.a.createElement("label",{htmlFor:"lightGreen"},r.a.createElement("input",{type:"radio",value:"#a9dc76",name:"color",id:"lightGreen",onClick:this.handleColor}))),r.a.createElement("button",{type:"submit",className:"cta-1"},r.a.createElement("p",null,"Let's Chat"),r.a.createElement(g.a,{icon:f.a})))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 Jeannette Ng 2019"))):r.a.createElement("div",{className:"App",style:{background:this.state.theme}},r.a.createElement(b,{text:this.state.userInput,color:this.state.color}),r.a.createElement("button",{onClick:this.handleTheme,style:{background:this.state.themeColor.border},className:"cta-2"},this.state.text),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"chatMessages",ref:this.myRef,style:{border:"1px solid ".concat(this.state.themeColor.border)}},this.state.messages.map(function(t,a){return r.a.createElement("div",{className:"chatmessages",key:a},r.a.createElement("div",{className:"chat",style:{background:e.state.themeColor.chatMessage}},r.a.createElement("p",{className:"name",style:{color:t.color}},r.a.createElement("div",{className:"circle",style:{background:t.color}}),t.name),r.a.createElement("p",{className:"content"},t.content),r.a.createElement("p",{className:"dateCreated"},t.dateCreated)))})),r.a.createElement("form",{action:"submit",onSubmit:this.handleSubmitMessageForm,id:"messageInputArea"},r.a.createElement("textarea",{value:this.state.userMessage,type:"text",placeholder:"messages",onChange:this.handleMessageChange,id:"messageInput","data-gramm_editor":"false",style:{border:"1px solid ".concat(this.state.themeColor.border)}}),r.a.createElement("button",{type:"submit",className:"cta-messageInputArea",style:{border:"1px solid ".concat(this.state.themeColor.border)}},r.a.createElement(g.a,{icon:f.a})))),r.a.createElement("footer",{style:{background:this.state.color}},r.a.createElement("p",null,"\xa9 Jeannette Ng 2019")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(125)},67:function(e,t,a){},68:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.53c1d4f2.chunk.js.map