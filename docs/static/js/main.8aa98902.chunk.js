(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},16:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(9),r=n.n(c),i=(n(16),n(10)),s=n(6),l=n(1),u=n(2),d=n(4),f=n(3),h=n(5),p=(n(8),n(20),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.click,o=e.isDone,c=e.deleteEl;return a.a.createElement("li",{className:"listItem"},a.a.createElement("span",{onClick:n,className:o?"done":""},t),a.a.createElement("button",{className:"deleteButton",onClick:c},"\xd7"))}}]),t}(o.Component)),m=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("input",{type:"text",placeholder:"Add your To Do",onKeyUp:function(t){e.props.keyupfunction(t)}})}}]),t}(o.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("h2",null,"To Do done: ",this.props.num)}}]),t}(o.Component);console.clear();var b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n.addToDoArray=function(e){if("Enter"===e.key){var t=[{text:e.target.value,done:!1}].concat(Object(s.a)(n.state.todos));n.setState({todos:t}),e.target.value=""}},n.toggleDone=function(e){var t=n.state.todos,o=Object(s.a)(t.slice(0,e)).concat([Object(i.a)({},t[e],{done:!t[e].done})],Object(s.a)(t.slice(e+1)));n.setState({todos:o})},n.deleteListItem=function(e){var t=n.state.todos,o=Object(s.a)(t.slice(0,e)).concat(Object(s.a)(t.slice(e+1)));n.setState({todos:o})},n.counterToDo=function(){return n.state.todos.filter(function(e){return e.done}).length},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"createToDoList",value:function(){var e=this;return this.state.todos.map(function(t,n){return a.a.createElement(p,{key:n,isDone:t.done,text:t.text,click:function(){return e.toggleDone(n)},deleteEl:function(){return e.deleteListItem(n)}})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"layout"},a.a.createElement("div",{className:"styleEl"}),a.a.createElement("main",{className:"container"},a.a.createElement("header",null,a.a.createElement(v,{num:this.counterToDo()})),a.a.createElement("section",null,a.a.createElement(m,{keyupfunction:this.addToDoArray})),a.a.createElement("section",{className:"listContainer"},a.a.createElement("ul",null,this.createToDoList()))))}}]),t}(o.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(t,e)})}}()},8:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.8aa98902.chunk.js.map