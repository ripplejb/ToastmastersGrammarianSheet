(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(14),l=n.n(r),s=(n(84),n(18)),o=n(19),u=n(22),c=n(20),f=n(23),p=n(10),d=(n(86),n(160)),m=n(152),h=n(159),b=n(153),O=(n(88),n(90),function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).call(this,e))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,{fluid:!0,inverse:!0,collapseOnSelect:!0,defaultExpanded:!0},i.a.createElement(d.a.Header,null,i.a.createElement(d.a.Brand,null,i.a.createElement("a",{href:"#"},"Grammarian Filler Word Counter"))),i.a.createElement(m.a,null,i.a.createElement(h.a,{title:"Speakers",class:"dropdown-menu",onToggle:function(){return e.props.handleDropDown()}},this.props.data.list.map(function(t){return i.a.createElement(b.a,{eventKey:1+t.id/10,onClick:function(){e.props.handleSelect(t.id)}},t.title)}))))}}]),t}(a.Component)),C={list:[{filler:"Ah",count:0},{filler:"Um",count:0},{filler:"Well",count:0},{filler:"So",count:0},{filler:"But",count:0},{filler:"And",count:0},{filler:"Like",count:0},{filler:"You Know",count:0},{filler:"Repeat",count:0},{filler:"Other",count:0},{filler:"Word Of The Day",count:0}]},g={list:[{id:1,title:"Presiding Officer",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:2,title:"Jock/Chuckle",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:3,title:"Toastmaster",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:4,title:"Speaker 1",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:5,title:"Speaker 2",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:6,title:"Speaker 3",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:7,title:"Table Topic Master",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:8,title:"TT Speaker 1",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:9,title:"TT Speaker 2",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:10,title:"TT Speaker 3",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:11,title:"TT Speaker 4",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:12,title:"TT Speaker 5",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:13,title:"TT Speaker 6",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:14,title:"TT Speaker 7",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:15,title:"TT Speaker 8",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:16,title:"General Evaluator",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:17,title:"Evaluator 1",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:18,title:"Evaluator 2",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:19,title:"Evaluator 3",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})},{id:20,title:"Timer",name:"",fillerCounts:C.list.map(function(e){return Object.assign({},e)})}]},j=n(157),k=n(154),v=n(156),S=n(158),E=n(161),y=n(116),w=n(155),T=n(69),D=n(150),x=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e,n))).addCount=a.addCount.bind(Object(p.a)(Object(p.a)(a))),a.minusCount=a.minusCount.bind(Object(p.a)(Object(p.a)(a))),a.saveState=a.saveState.bind(Object(p.a)(Object(p.a)(a))),a.state={filler:e.filler},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"saveState",value:function(e){this.setState({filler:e}),this.props.onFillerCountChange(e)}},{key:"addCount",value:function(){var e=this.props.filler;e.count++,this.saveState(e)}},{key:"minusCount",value:function(){var e=this.props.filler;0!==e.count&&(e.count--,this.saveState(e))}},{key:"render",value:function(){var e=this;return i.a.createElement(k.a,null,i.a.createElement(y.a,null,i.a.createElement(w.a,null,i.a.createElement(v.a,{xs:10,md:10,sm:10,lg:10},i.a.createElement(T.a,{bsSize:"large",bsStyle:t.getStyle(this.props.filler.count),onClick:function(){e.addCount(e.props.filler)},block:!0},i.a.createElement(D.a,{glyph:"plus-sign"})," ",this.props.filler.filler," (",this.props.filler.count,")")),i.a.createElement(v.a,{xs:2,md:2,sm:2,lg:2},i.a.createElement(T.a,{bsSize:"large",bsStyle:"warning",onClick:function(){e.minusCount(e.props.filler)}},i.a.createElement(D.a,{glyph:"minus-sign"}))))))}}],[{key:"getStyle",value:function(e){return e<5?"success":e<10?"warning":"danger"}}]),t}(a.Component),I=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e,n))).handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.fillerCountChange=a.fillerCountChange.bind(Object(p.a)(Object(p.a)(a))),a.findFillerIndex=a.findFillerIndex.bind(Object(p.a)(Object(p.a)(a))),a.saveState=a.saveState.bind(Object(p.a)(Object(p.a)(a))),a.state={speaker:e.speaker},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"saveState",value:function(e){this.setState({speaker:e}),this.props.onGrammarianSheetChange(e)}},{key:"handleChange",value:function(e){var t=this.props.speaker;t.name=e.target.value,this.saveState(t)}},{key:"findFillerIndex",value:function(e){return this.props.speaker.fillerCounts.findIndex(function(t){return t.filler===e.filler})}},{key:"fillerCountChange",value:function(e){var t=this.findFillerIndex(e),n=this.props.speaker;n.fillerCounts[t]=e,this.saveState(n)}},{key:"render",value:function(){var e=this;return i.a.createElement(j.a,{inline:!0},i.a.createElement(k.a,null,i.a.createElement(v.a,{xs:12,md:12,sm:12},i.a.createElement(k.a,null,i.a.createElement(S.a,null,this.props.speaker.title),i.a.createElement(E.a,{type:"text",bsSize:"lg",placeholder:this.props.speaker.title+" Name",value:this.props.speaker.name,onChange:this.handleChange})),this.props.speaker.fillerCounts.map(function(t){return i.a.createElement(x,{filler:t,onFillerCountChange:function(){return e.fillerCountChange(t)}})}))))}}]),t}(a.Component),F=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e,n))).state={currentSpeaker:g.list[0],dropDownOpen:!1},a.handleRoleChange=a.handleRoleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleDropDown=a.handleDropDown.bind(Object(p.a)(Object(p.a)(a))),a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"findIndex",value:function(e){return g.list.findIndex(function(t){return t.id===e})}},{key:"handleDropDown",value:function(){this.setState(function(e){return{currentSpeaker:e.currentSpeaker,dropDownOpen:!e.dropDownOpen}})}},{key:"handleRoleChange",value:function(e){var t=this.findIndex(e);t<0||this.setState({currentSpeaker:g.list[t]})}},{key:"handleGrammarianSheetChange",value:function(e){var t=this.findIndex(e.id);t<0||(g.list[t]=e,console.log(e),this.setState({currentSpeaker:g.list[t]}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(O,{data:g,handleSelect:this.handleRoleChange,handleDropDown:function(){return e.handleDropDown()}}),this.state.dropDownOpen?null:i.a.createElement(I,{speaker:this.state.currentSpeaker,onGrammarianSheetChange:function(t){return e.handleGrammarianSheetChange(t)}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){e.exports=n(151)},84:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){}},[[79,2,1]]]);
//# sourceMappingURL=main.cd562843.chunk.js.map