(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),s=(a(101),a(17)),o=a(16),c=a(20),u=a(18),d=a(19),p=a(7),h=(a(103),a(191)),m=a(182),f=a(192),g=a(183),S=a(133),b=a(184),O=a(185),C=a(162),k=(a(105),a(107),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{fluid:!0,inverse:!0,collapseOnSelect:!0,defaultExpanded:!0},l.a.createElement(h.a.Header,null,l.a.createElement(h.a.Brand,null,l.a.createElement("a",{href:"#"},"Grammarian Filler Word Counter")),l.a.createElement(h.a.Toggle,null)),l.a.createElement(h.a.Collapse,null,l.a.createElement(m.a,null,l.a.createElement(f.a,{title:"Speakers",class:"dropdown-menu",onToggle:function(){return e.props.handleDropDown()}},this.props.data.list.map(function(t){return l.a.createElement(g.a,{eventKey:1+t.id/10,onClick:function(){e.props.handleSelect(t.id)}},l.a.createElement(S.a,null,l.a.createElement(b.a,{sm:6,md:6,lg:6,xs:6},t.title),l.a.createElement(b.a,{sm:6,md:6,lg:6,xs:6},t.name)))}))),l.a.createElement(m.a,{pullRight:!0},l.a.createElement(O.a,{onClick:this.props.handleAddSpeaker},l.a.createElement(C.a,{glyph:"plus"})),l.a.createElement(O.a,{onClick:this.props.handleRemoveSpeaker},l.a.createElement(C.a,{glyph:"minus"})),l.a.createElement(O.a,{onClick:this.props.handleClear},l.a.createElement(C.a,{glyph:"refresh"})))))}}]),t}(n.Component)),E={list:[{filler:"Ah",count:0},{filler:"Um",count:0},{filler:"Well",count:0},{filler:"So",count:0},{filler:"But",count:0},{filler:"And",count:0},{filler:"Like",count:0},{filler:"You Know",count:0},{filler:"Repeat",count:0},{filler:"Other",count:0},{filler:"Word Of The Day",count:0}]},v={list:[{id:1,title:"Presiding Officer",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:2,title:"Jock/Chuckle",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:3,title:"Toastmaster",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:4,title:"Speaker 1",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:5,title:"Speaker 2",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:6,title:"Speaker 3",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:7,title:"Speaker 4",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:8,title:"Table Topic Master",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:9,title:"TT Speaker 1",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:10,title:"TT Speaker 2",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:11,title:"TT Speaker 3",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:12,title:"TT Speaker 4",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:13,title:"TT Speaker 5",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:14,title:"TT Speaker 6",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:15,title:"TT Speaker 7",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:16,title:"TT Speaker 8",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:17,title:"General Evaluator",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:18,title:"Evaluator 1",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:19,title:"Evaluator 2",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:20,title:"Evaluator 3",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:21,title:"Evaluator 4",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})},{id:22,title:"Timer",name:"",fillerCounts:E.list.map(function(e){return Object.assign({},e)})}]},j=a(188),y=a(187),w=a(186),T=a(189),R=a(193),A=a(81),x=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e,a))).addCount=n.addCount.bind(Object(p.a)(Object(p.a)(n))),n.minusCount=n.minusCount.bind(Object(p.a)(Object(p.a)(n))),n.saveState=n.saveState.bind(Object(p.a)(Object(p.a)(n))),n.state={filler:e.filler},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"saveState",value:function(e){this.setState({filler:e}),this.props.onFillerCountChange(e)}},{key:"addCount",value:function(){var e=this.props.filler;e.count++,this.saveState(e)}},{key:"minusCount",value:function(){var e=this.props.filler;0!==e.count&&(e.count--,this.saveState(e))}},{key:"render",value:function(){var e=this;return l.a.createElement(w.a,null,l.a.createElement(S.a,null,l.a.createElement(y.a,null,l.a.createElement(b.a,{xs:10,md:10,sm:10,lg:10},l.a.createElement(A.a,{bsSize:"large",bsStyle:t.getStyle(this.props.filler.count),onClick:function(){e.addCount(e.props.filler)},block:!0},l.a.createElement(C.a,{glyph:"plus-sign"})," ",this.props.filler.filler," (",this.props.filler.count,")")),l.a.createElement(b.a,{xs:2,md:2,sm:2,lg:2},l.a.createElement(A.a,{bsSize:"large",bsStyle:"warning",onClick:function(){e.minusCount(e.props.filler)}},l.a.createElement(C.a,{glyph:"minus-sign"}))))))}}],[{key:"getStyle",value:function(e){return e<5?"success":e<10?"warning":"danger"}}]),t}(n.Component),I=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e,a))).paddingStyle={grid:{paddingLeft:5,paddingRight:5},row:{marginLeft:5,marginRight:5},col:{paddingLeft:5,paddingRight:5}},n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.fillerCountChange=n.fillerCountChange.bind(Object(p.a)(Object(p.a)(n))),n.findFillerIndex=n.findFillerIndex.bind(Object(p.a)(Object(p.a)(n))),n.saveState=n.saveState.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"saveState",value:function(e){this.props.onGrammarianSheetChange(e)}},{key:"handleChange",value:function(e){var t=this.props.speaker;t.name=e.target.value,this.saveState(t)}},{key:"findFillerIndex",value:function(e){return this.props.speaker.fillerCounts.findIndex(function(t){return t.filler===e.filler})}},{key:"fillerCountChange",value:function(e){var t=this.findFillerIndex(e),a=this.props.speaker;a.fillerCounts[t]=e,this.saveState(a)}},{key:"render",value:function(){var e=this;return l.a.createElement(j.a,null,l.a.createElement(S.a,{fluid:!0,style:this.paddingStyle.grid},l.a.createElement(y.a,{style:this.paddingStyle.row},l.a.createElement(b.a,{xs:12,md:12,sm:12,lg:12,style:this.paddingStyle.col},l.a.createElement(w.a,null,l.a.createElement(T.a,null,this.props.speaker.title),l.a.createElement(R.a,{bsSize:"lg",placeholder:this.props.speaker.title+" Name",value:this.props.speaker.name,onChange:this.handleChange})))),l.a.createElement(y.a,{style:this.paddingStyle.row},l.a.createElement(b.a,{xs:12,md:12,sm:12,lg:12,style:this.paddingStyle.col},this.props.speaker.fillerCounts.map(function(t){return l.a.createElement(x,{filler:t,onFillerCountChange:function(){return e.fillerCountChange(t)}})})))))}}]),t}(n.Component),D=a(95),L=a.n(D),N=a(190),_=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(N.a,{show:this.props.show},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,this.props.modelTitle)),l.a.createElement(N.a.Body,null,this.props.modelText),l.a.createElement(N.a.Footer,null,l.a.createElement(A.a,{bsStyle:"danger",bsSize:"lg",onClick:function(){return e.props.handleResponse(!0)}},this.props.OkCaption),l.a.createElement(A.a,{bsStyle:"success",bsSize:"lg",onClick:function(){return e.props.handleResponse(!1)}},this.props.CancelCaption)))}}]),t}(n.Component),G=[{id:1,role:"Presiding Officer"},{id:2,role:"Joke/Chuckle"},{id:3,role:"Toastmasters"},{id:4,role:"Speaker"},{id:5,role:"TableTopic Master"},{id:6,role:"TableTopic Speaker"},{id:7,role:"TableTopic Speaker"},{id:8,role:"General Evaluator"},{id:9,role:"Evaluator"},{id:10,role:"Timer"},{id:11,role:"Grammarian"}],J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).paddingStyle={grid:{paddingLeft:5,paddingRight:5},row:{marginLeft:5,marginRight:5},col:{paddingLeft:5,paddingRight:5}},a.state={title:G[0].role,name:""},a.handleNameChange=a.handleNameChange.bind(Object(p.a)(Object(p.a)(a))),a.handleTitleChange=a.handleTitleChange.bind(Object(p.a)(Object(p.a)(a))),a.onEntering=a.onEntering.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleTitleChange",value:function(e){var t=e.target.value;this.setState(function(e){return{title:t,name:e.name}})}},{key:"handleNameChange",value:function(e){var t=e.target.value;this.setState(function(e){return{title:e.title,name:t}})}}]),Object(o.a)(t,[{key:"onEntering",value:function(){this.setState(function(){return{title:G[0].role,name:""}})}},{key:"render",value:function(){var e=this;return l.a.createElement(N.a,{show:this.props.show,onEntering:this.onEntering},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,"Add A Speaker")),l.a.createElement(N.a.Body,null,l.a.createElement(S.a,{fluid:!0,style:this.paddingStyle.grid},l.a.createElement(y.a,{style:this.paddingStyle.row},l.a.createElement(w.a,null,l.a.createElement(T.a,null,"Role"),l.a.createElement(R.a,{type:"text",bsSize:"lg",placeholder:"Name",value:this.state.name,onChange:this.handleNameChange}))),l.a.createElement(y.a,{style:this.paddingStyle.row},l.a.createElement(w.a,null,l.a.createElement(T.a,null,"Name"),l.a.createElement(R.a,{componentClass:"select",bsSize:"lg",placeholder:"Select Role",value:this.state.title,onChange:this.handleTitleChange},G.map(function(e){return l.a.createElement("option",{value:e.role},e.role)})))))),l.a.createElement(N.a.Footer,null,l.a.createElement(A.a,{bsStyle:"success",onClick:function(){return e.props.handleResponse(e.state)},disabled:""===this.state.name||""===this.state.title},"Save"),l.a.createElement(A.a,{bsStyle:"danger",onClick:function(){return e.props.handleResponse(null)}},"Cancel")))}}]),t}(n.Component),M=function(e){function t(e,a){var n;Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e,a))).LOCAL_STORAGE_KEY="speakers",n.LOCAL_STORAGE_SPEAKER_INDEX="speakerIndex";var l=localStorage.getItem(n.LOCAL_STORAGE_KEY),r=localStorage.getItem(n.LOCAL_STORAGE_SPEAKER_INDEX);return n.state={allStates:{speakers:l?JSON.parse(l):JSON.parse(JSON.stringify(v)),currentIndex:r?parseInt(r,10):0,dropDownOpen:!1,clearModelShow:!1,addSpeakerShow:!1}},n.handleRoleChange=n.handleRoleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleDropDown=n.handleDropDown.bind(Object(p.a)(Object(p.a)(n))),n.handleClearModelResponse=n.handleClearModelResponse.bind(Object(p.a)(Object(p.a)(n))),n.handleClear=n.handleClear.bind(Object(p.a)(Object(p.a)(n))),n.handleAddSpeaker=n.handleAddSpeaker.bind(Object(p.a)(Object(p.a)(n))),n.handleRemoveSpeaker=n.handleRemoveSpeaker.bind(Object(p.a)(Object(p.a)(n))),n.handleAddSpeakerResponse=n.handleAddSpeakerResponse.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"findIndex",value:function(e){return this.state.allStates.speakers.list.findIndex(function(t){return t.id===e})}},{key:"handleDropDown",value:function(){this.setState(function(e){var t=e.allStates;return t.dropDownOpen=!e.allStates.dropDownOpen,{allStates:t}})}},{key:"handleRoleChange",value:function(e){var t=this.findIndex(e);if(!(t<0)){var a=this.state.allStates;a.currentIndex=t,localStorage.setItem(this.LOCAL_STORAGE_SPEAKER_INDEX,t),this.setState({allStates:a})}}},{key:"handleGrammarianSheetChange",value:function(e){var t=this.findIndex(e.id);if(!(t<0)){var a=this.state.allStates;a.speakers.list[t]=e,localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(a.speakers)),this.setState(function(){return a})}}},{key:"handleClearModelResponse",value:function(e){var t=this.state.allStates;e?(localStorage.clear(),t.currentIndex=0,t.clearModelShow=!1,t.dropDownOpen=!1,t.speakers=JSON.parse(JSON.stringify(v))):t.clearModelShow=!1,this.setState(function(){return t})}},{key:"handleClear",value:function(){var e=this.state.allStates;e.clearModelShow=!0,this.setState(function(){return e})}},{key:"handleAddSpeakerResponse",value:function(e){var t=this.state.allStates;t.addSpeakerShow=!1,null!==e&&(t.speakers.list.push({id:t.speakers.list.length,title:e.title,name:e.name,fillerCounts:E.list.map(function(e){return Object.assign({},e)})}),localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(t.speakers))),this.setState(function(){return t})}},{key:"handleAddSpeaker",value:function(){var e=this.state.allStates;e.addSpeakerShow=!0,this.setState(function(){return e})}},{key:"handleRemoveSpeaker",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(k,{data:this.state.allStates.speakers,handleSelect:this.handleRoleChange,handleDropDown:function(){return e.handleDropDown()},handleClear:this.handleClear,handleAddSpeaker:this.handleAddSpeaker,handleRemoveSpeaker:this.handleRemoveSpeaker}),!this.state.allStates.dropDownOpen&&this.state.allStates.speakers.list.length>0?l.a.createElement(L.a,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:1e3,transitionEnter:!1,transitionLeave:!1},l.a.createElement(I,{key:"1",speaker:this.state.allStates.speakers.list[this.state.allStates.currentIndex],onGrammarianSheetChange:function(t){return e.handleGrammarianSheetChange(t)}})):null,l.a.createElement(_,{handleResponse:function(t){return e.handleClearModelResponse(t)},show:this.state.allStates.clearModelShow,OkCaption:"Yes",CancelCaption:"No",modelTitle:"Warning",modelText:"Do you want to clear the data ?"}),l.a.createElement(J,{handleResponse:this.handleAddSpeakerResponse,show:this.state.allStates.addSpeakerShow}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(181)}},[[96,2,1]]]);
//# sourceMappingURL=main.3459e796.chunk.js.map