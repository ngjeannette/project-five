(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a(282)},121:function(e,t,a){},124:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(37),l=a.n(n),s=(a(121),a(68)),c=a.n(s),i=a(107),m=a(108),u=a(109),h=a(114),d=a(110),p=a(115),g=(a(124),a(69)),f=a.n(g);f.a.initializeApp({apiKey:"AIzaSyABfJF03g1ZNaKeklq6-7qx94C3HDL97VI",authDomain:"first-firebase-project-csj.firebaseapp.com",databaseURL:"https://first-firebase-project-csj.firebaseio.com",projectId:"first-firebase-project-csj",storageBucket:"first-firebase-project-csj.appspot.com",messagingSenderId:"678006963297"});var b=f.a,v=a(70),C=a(72),E=function(e){var t={color:e.color};return o.a.createElement("div",{className:"header"},o.a.createElement("h1",{style:t},e.text))},y=function(){return o.a.createElement("footer",null,o.a.createElement("p",null,"\xa9 2019 Developed by Jeannette Ng "))},N=a(111),S=a.n(N),w=a(112),k=a.n(w),M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).callApi=function(e){return S.a.get("https://www.purgomalum.com/service/json",{params:{text:e,fill_char:"*"}}).then(function(e){var t=e.data.result;if("string"==typeof t){var a=t.replace(/\*/g,"\ud83d\udca9");return console.log(a,"stringarray"),a}console.log("error")})},a.handleChange=function(e){e.preventDefault(),a.setState({userInput:e.target.value})},a.handleMessageChange=function(e){e.preventDefault();var t=e.target.value;a.setState({userMessage:t}),console.log(a.state.userMessage)},a.handleInput=function(){" "===a.state.name?a.setState({errorMessage:"Type Username"}):a.setState({userName:"Message"})},a.handleSubmit=function(e){e.preventDefault(),a.setState({name:a.state.userInput},function(){a.handleInput()})},a.handleSubmitMessageForm=function(){var e=Object(i.a)(c.a.mark(function e(t){var r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=b.database().ref("messages"),e.next=4,a.callApi(a.state.userMessage);case 4:o=e.sent,r.push({content:o,name:a.state.userInput,dateCreated:(new Date).toLocaleString("en-US"),color:a.state.color,fontColor:a.state.fontColor}),a.setState({userMessage:""});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.scroll=function(){var e=a.myRef.current;e.scrollTop=e.scrollHeight},a.handleColor=function(e){a.setState({color:e.target.value})},a.handleTheme=function(){a.setState(function(e){return"white"===e.theme?{theme:"#171717",themeColor:{border:"lightgray",chatMessage:"#e6e4ec"},fontColor:"black",color:a.handleLightColor()}:{theme:"white",themeColor:{border:"lightgray",chatMessage:"#1c1c1e"},fontColor:"white",color:a.handleDarkColor()}})},a.handleDarkColor=function(){"#ab9df2"===a.state.color?a.setState({color:"#6900F2"}):"#f09665"===a.state.color?a.setState({color:"#A14B12"}):"#a9dc76"===a.state.color?a.setState({color:"#325115"}):a.setState({color:"#901437"})},a.handleLightColor=function(){"#6900F2"===a.state.color?a.setState({color:"#ab9df2"}):"#A14B12"===a.state.color?a.setState({color:"#f09665"}):"#325115"===a.state.color?a.setState({color:"#a9dc76"}):a.setState({color:"#ea5d86"})},a.getDarkColor=function(e){return"#ab9df2"===e||"#6900F2"===e?"#6900F2":"#f09665"===e||"#A14B12"===e?"#A14B12":"#a9dc76"===e||"#325115"===e?"#325115":"#901437"},a.getLightColor=function(e){return"#6900F2"===e||"#ab9df2"===e?"#ab9df2":"#A14B12"===e||"#f09665"===e?"#f09665":"#325115"===e||"#a9dc76"===e?"#a9dc76":"#ea5d86"},a.state={messages:[],userInput:"",userMessage:"",userName:"",placeHolder:"e.g. Jeannette",color:"",theme:"white",themeColor:{border:"lightgray",chatMessage:"rgb(230, 228, 236)"},filteredMessage:"",placeHolderMessage:"message",errorMessage:"",fontColor:"black"},a.myRef=o.a.createRef(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.database().ref("messages").on("value",function(t){if(null!==t.val()){var a=Object.values(t.val());e.setState({messages:a},e.scroll)}})}},{key:"componentDidUpdate",value:function(){this.scroll()}},{key:"render",value:function(){var e=this;return""===this.state.userName?o.a.createElement("div",{className:"firstPage"},o.a.createElement("div",{className:"formContainer"},o.a.createElement("form",{action:"submit",onSubmit:this.handleSubmit,ref:this.myRef,className:"firstPageForm",autocomplete:"off"},o.a.createElement("h1",null,"ChatTime"),o.a.createElement("p",null,"Chat with anyone, anywhere, anytime"),o.a.createElement("p",null,"Enter username:"),o.a.createElement("div",{className:"enterUserName"},o.a.createElement("label",{htmlFor:"userName",className:"visuallyHidden"},"Username"),o.a.createElement("input",{value:this.state.userInput,type:"text",id:"userName",placeholder:this.state.placeHolder,onChange:this.handleChange,maxLength:"15",required:!0,autocomplete:"off"})),o.a.createElement("p",null,"Select color:"),o.a.createElement("div",{className:"themeColorSelection"},o.a.createElement("input",{type:"radio",value:"#f09665",name:"color",id:"orange",onClick:this.handleColor,required:!0}),o.a.createElement("label",{htmlFor:"orange"}),o.a.createElement("input",{type:"radio",value:"#ab9df2",name:"color",id:"purple",onClick:this.handleColor}),o.a.createElement("label",{htmlFor:"purple"}),o.a.createElement("input",{type:"radio",value:"#ea5d86",name:"color",id:"PaleVioletRed",onClick:this.handleColor}),o.a.createElement("label",{htmlFor:"PaleVioletRed"}),o.a.createElement("input",{type:"radio",value:"#a9dc76",name:"color",id:"lightGreen",onClick:this.handleColor}),o.a.createElement("label",{htmlFor:"lightGreen"})),o.a.createElement("button",{type:"submit",className:"cta-1"},"Let's Chat",o.a.createElement(v.a,{icon:C.a,className:"chatIcon"})))),o.a.createElement(y,null)):o.a.createElement("div",{className:"App",style:{background:this.state.theme}},o.a.createElement("div",{className:"heading"},o.a.createElement("div",{className:"container"},o.a.createElement(E,{text:this.state.userInput,color:this.state.color}),o.a.createElement("div",{className:"toggleSwitch"},o.a.createElement("p",{style:{color:this.state.fontColor}},"Dark Mode"),o.a.createElement("div",{className:"switch"},o.a.createElement(k.a,{checked:"white"===this.state.theme,onChange:this.handleTheme,value:"checkedA",color:"primary"})),o.a.createElement("p",{style:{color:this.state.fontColor}},"Light Mode")))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"chatMessages",ref:this.myRef,style:{border:"1px solid ".concat(this.state.themeColor.border)}},this.state.messages.map(function(t,a){return o.a.createElement("div",{className:"chatmessages",key:a},o.a.createElement("div",{className:"chat",style:{background:e.state.themeColor.chatMessage}},o.a.createElement("p",{className:"name",style:{color:"white"===e.state.theme?e.getDarkColor(t.color):e.getLightColor(t.color)}},t.name),o.a.createElement("p",{className:"content",style:{color:e.state.fontColor}},t.content),o.a.createElement("p",{className:"dateCreated",style:{color:"white"===e.state.theme?e.getDarkColor(t.color):e.getLightColor(t.color)}},t.dateCreated)))})),o.a.createElement("form",{action:"submit",onSubmit:this.handleSubmitMessageForm,id:"messageInputArea"},o.a.createElement("textarea",{value:this.state.userMessage,type:"text",placeholder:this.state.placeHolderMessage,onChange:this.handleMessageChange,id:"messageInput",required:!0,"data-gramm_editor":"false",style:{border:"1px solid ".concat(this.state.themeColor.border)}}),o.a.createElement("button",{type:"submit",className:"cta-messageInputArea",style:{border:"1px solid ".concat(this.state.themeColor.border)}},o.a.createElement(v.a,{icon:C.a})))),o.a.createElement("footer",{className:"chatMessageFooter",style:{background:this.state.color}},o.a.createElement("p",null,"\xa9 2019 Developed by Jeannette Ng ")))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[116,1,2]]]);
//# sourceMappingURL=main.02683a98.chunk.js.map