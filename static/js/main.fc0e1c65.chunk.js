(window.webpackJsonpGameName=window.webpackJsonpGameName||[]).push([[0],{192:function(e,t,n){e.exports=n.p+"static/media/404.33c655af.svg"},215:function(e,t,n){e.exports=n(396)},220:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/Background.bed2ef9a.png"},395:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(12),c=(n(220),n(21)),u=n(22),l=n(24),s=n(23),m=n(25),d=n(14),p=n(34),g=n(190),f=n(108),h=n(43),b=n(438),v=n(437);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O="user/REQUEST",A="user/SUCCESS",j="user/ERROR",k="user/SIGNOUT",S="user/LOAD",x="user/RESETPLAYERS",w="user/ADDPLAYERS",I="user/UPDATE",W={request:Object(b.a)(O),success:Object(b.a)(A),error:Object(b.a)(j),signout:Object(b.a)(k),loadSets:Object(b.a)(S),resetPlayers:Object(b.a)(x),addPlayers:Object(b.a)(w),updatePoints:Object(b.a)(I)},q={fetching:!1,error:!1,nickname:"",googleTokenId:"",isAuth:!1,gameSelected:"",sets:[],players:[],points:{}},z=Object(v.a)((a={},Object(h.a)(a,O,(function(e){return y({},e,{fetching:!0,error:!1})})),Object(h.a)(a,A,(function(e,t){return y({},e,{fetching:!1},t.payload)})),Object(h.a)(a,S,(function(e,t){return y({},e,{fetching:!1,sets:t.payload})})),Object(h.a)(a,x,(function(e){return y({},e,{fetching:!1,players:[],points:{}})})),Object(h.a)(a,w,(function(e,t){return y({},e,{fetching:!1,players:t.payload})})),Object(h.a)(a,I,(function(e,t){return y({},e,{fetching:!1,points:t.payload})})),Object(h.a)(a,k,(function(){return y({fetching:!1,isAuth:!1},q)})),Object(h.a)(a,j,(function(e){return y({},e,{fetching:!1,error:!0})})),a),q),C={error:function(e){return e.user.error},fetching:function(e){return e.user.fetching},nickname:function(e){return e.user.nickname},isAuth:function(e){return e.user.isAuth},googleTokenId:function(e){return e.user.googleTokenId},gameSelected:function(e){return e.user.gameSelected},sets:function(e){return e.user.sets},points:function(e){return e.user.points},players:function(e){return e.user.players}},P=z,T=n(77),F=n(191),Q=function(e){var t=e.subtitle,n=e.children,a=(e.description,"".concat(t," \xb7 Game Name"));return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.Helmet,{title:a,meta:[{name:"description",content:"Game Name page"}]}),n)};Q.defaultProps={description:""};var G=Q,B=function(e,t){return o.a.createElement(G,{subtitle:t},e)},M=function(e){var t=e.component,n=e.isAuth,a=Object(T.a)(e,["component","isAuth"]);return o.a.createElement(f.b,Object.assign({},a,{render:function(e){return n?B(o.a.createElement(t,e),a.title):o.a.createElement(f.a,{to:"/?redirect=".concat(e.location.pathname).concat(e.location.search)})}}))};var N=function(e){var t=e.component,n=e.isAuth,a=Object(T.a)(e,["component","isAuth"]),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[[]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("redirect");return o.a.createElement(f.b,Object.assign({},a,{render:function(e){return n?o.a.createElement(f.a,{to:""===r||null===r?"/homepage":r}):B(o.a.createElement(t,e),a.title)}}))},D=n(192),R=n.n(D),Y=n(30),K=n.n(Y),U=n(426),V=n(429),L=n(430),H=n(431),Z=n(56),J=n.n(Z),X=n(201),$=n(193),_=n.n($),ee=n(194),te=n(203),ne=n(36),ae=n(133),re=n(137),oe=n(11),ie=n.n(oe),ce=n(202),ue=ie.a.mark(le);function le(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.a)([]);case 2:case"end":return e.stop()}}),ue)}var se,me,de={key:"root",storage:_.a,whitelist:["user"]},pe=Object(te.a)({basename:"/GameNameHosting"}),ge=Object(X.a)(),fe=Object(ae.a)(de,(se=pe,Object(ne.combineReducers)({user:P,router:Object(p.b)(se)}))),he=Object(ee.composeWithDevTools)({serialize:!0}),be=function(){return me||(me=Object(ne.createStore)(fe,he(Object(ne.applyMiddleware)(Object(re.a)(pe),ge)))),me};me=be(),ge.run(le);var ve=Object(ae.b)(me);var Ee=n(26),ye="/",Oe="/game/add/players",Ae={textAlign:"center",backgroundImage:"url(".concat(K.a,")"),height:"100vh",fontFamily:"Montserrat",backgroundSize:"cover"},je=function(){return o.a.createElement("div",{style:Ae},o.a.createElement(U.a,{position:"static",style:{background:"transparent",boxShadow:"none"}},o.a.createElement(V.a,null,o.a.createElement(L.a,{edge:"start",style:{color:"#000"},"aria-label":"back",onClick:function(){return be().dispatch(Object(Ee.d)("/homepage"))}},o.a.createElement(J.a,null),o.a.createElement(H.a,{variant:"body1"},"Return to Home")))),o.a.createElement("div",{style:{padding:"20vh 0 0 0"}},o.a.createElement("h3",null,"Sorry, page not found!"),o.a.createElement("img",{src:R.a,alt:"404",style:{margin:"10vh",maxWidth:"30vh"}})))},ke=n(20),Se=n(81),xe=n(71),we=n.n(xe),Ie=n(109),We=n.n(Ie),qe=n(432),ze=n(433),Ce={root:{display:"flex",alignItems:"center",backgroundColor:"#D2F2FF"},wrapper:{position:"relative"},buttonSuccess:{backgroundColor:We.a[500],"&:hover":{backgroundColor:We.a[700]}},fabProgress:{color:We.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:"#D2F2FF",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},button:{color:"#000",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"14px",fontWeight:"600",minWidth:"25vh",border:"#D2F2FF",textTransform:"None",backgroundColor:"#D2F2FF",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.25)",padding:"0.5rem 0.8rem",margin:"0.5rem"}},Pe=function(e){var t=e.loading,n=e.children,a=Object(T.a)(e,["loading","children"]);return o.a.createElement("div",{className:Ce.wrapper},o.a.createElement(qe.a,Object.assign({variant:"contained",style:Ce.button,disabled:t},a),n,t&&o.a.createElement(ze.a,{size:24,className:Ce.buttonProgress})))};Pe.defaultProps={loading:!1};var Te=Pe,Fe={main:{padding:"20vh 0 0 0",textAlign:"center",backgroundImage:"url(".concat(K.a,")"),height:"100vh",fontFamily:"Montserrat",backgroundSize:"cover"}},Qe=function(e){console.log(e)},Ge=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:Fe.main},o.a.createElement("img",{src:we.a,alt:"HomePage",style:{maxWidth:"45vh",marginBottom:"7.5vh"}}),o.a.createElement(Se.GoogleLogin,{clientId:"772369058063-665vio82g46oqmvijs344qtf1u5aiec5.apps.googleusercontent.com",render:function(e){return o.a.createElement(Te,{variant:"contained",loading:!1,onClick:Object(ke.a)(ie.a.mark((function t(){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.onClick();case 1:case"end":return t.stop()}}),t)}))),disabled:e.disabled},"Play")},buttonText:"Login",onSuccess:function(t){e.props.signIn(t),be().dispatch(Object(Ee.d)("/homepage"))},onFailure:Qe}))}}]),t}(r.Component);var Be=Object(d.c)((function(e){return{}}),(function(e){return{signIn:function(){var t=Object(ke.a)(ie.a.mark((function t(n){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(W.success({googleTokenId:"".concat(n.profileObj.givenName,"-").concat(n.profileObj.familyName),nickname:n.profileObj.givenName,isAuth:!0}))}catch(a){e(W.error())}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Ge),Me=n(61),Ne=n(28),De=n.n(Ne),Re=n(15),Ye=n(32),Ke=n(200),Ue=n.n(Ke),Ve=function(e){var t=e.url,n=e.data;return Ue.a.post("".concat("https://gamenamebackend.com","/").concat(t),n,{headers:{}})},Le={main:{backgroundImage:"url(".concat(K.a,")"),height:"100%",fontFamily:"Montserrat",backgroundSize:"cover"},form:{margin:"0 auto",maxWidth:"320px",textAlign:"left"}},He=Me.object().shape({gameName:Me.string().required("Required"),q1:Me.string().required("Required")}),Ze=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:Le.main},o.a.createElement(U.a,{position:"static",style:{background:"transparent",boxShadow:"none"}},o.a.createElement(V.a,null,o.a.createElement(L.a,{edge:"start",style:{color:"#000"},"aria-label":"back",onClick:function(){return be().dispatch(Object(Ee.d)("/homepage"))}},o.a.createElement(J.a,null)))),o.a.createElement(Re.c,{initialValues:{gameName:"",q1:"",q2:"",q3:"",q4:"",q5:"",q6:"",q7:"",q8:"",q9:"",q10:""},validationSchema:He,onSubmit:function(){var t=Object(ke.a)(ie.a.mark((function t(n,a){var r,o;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,a.setSubmitting)(!1),r=De.a.map(De.a.filter(n,(function(e,t){return"gameName"!==t&&""!==e})),(function(e){return{question:e}})),o={questions:r,title:n.gameName,author:e.props.googleTokenId},Ve({url:"api/sets/",data:o}).then((function(t){e.props.selectGame(o),be().dispatch(Object(Ee.d)("/create/success"))})).catch((function(e){return console.log(e)}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},(function(e){var t=e.isSubmitting,n=e.isValid;return o.a.createElement(Re.b,{style:Le.form},o.a.createElement("br",null),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:700}},"Enter a game name:"),o.a.createElement(Re.a,{type:"text",name:"gameName",margin:"dense",component:Ye.a,fullWidth:!0,autoFocus:!0,variant:"outlined"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(H.a,{variant:"body2",style:{fontSize:"0.9rem",fontWeight:700}},"Create 10 questions for your game!"),o.a.createElement(H.a,{variant:"body2",style:{fontSize:"0.7rem",fontWeight:500}},"e.g. Trump's favourite local dish is <blank> because he will <blank>."),o.a.createElement("br",null),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q1"),o.a.createElement(Re.a,{type:"text",name:"q1",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined"}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q2"),o.a.createElement(Re.a,{type:"text",name:"q2",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined"}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q3"),o.a.createElement(Re.a,{type:"text",name:"q3",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q4"),o.a.createElement(Re.a,{type:"text",name:"q4",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q5"),o.a.createElement(Re.a,{type:"text",name:"q5",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q6"),o.a.createElement(Re.a,{type:"text",name:"q6",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q7"),o.a.createElement(Re.a,{type:"text",name:"q7",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q8"),o.a.createElement(Re.a,{type:"text",name:"q8",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q9"),o.a.createElement(Re.a,{type:"text",name:"q9",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:500}},"Q10"),o.a.createElement(Re.a,{type:"text",name:"q10",margin:"dense",component:Ye.a,fullWidth:!0,variant:"outlined",style:{paddingBottom:"1rem"}}),o.a.createElement(Te,{size:"large",disabled:!n&&t,type:"submit",style:{boxShadow:"2px 4px 3px #E0E0E0",minWidth:"30vh",margin:"auto",position:"absolute",backgroundColor:"#8ECAB1",textTransform:"None"}},"Create Game"))}))))}}]),t}(r.Component);var Je=Object(d.c)((function(e){return{googleTokenId:C.googleTokenId(e)}}),(function(e){return{selectGame:function(){var t=Object(ke.a)(ie.a.mark((function t(n){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(W.success({gameSelected:n}))}catch(a){e(W.error())}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Ze),Xe={main:{padding:"20vh 0 0 0",textAlign:"center",backgroundImage:"url(".concat(K.a,")"),height:"100vh",fontFamily:"Montserrat",backgroundSize:"cover"}},$e=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:Xe.main},o.a.createElement(H.a,{variant:"h4",style:{fontFamily:"Montserrat",marginBottom:"7.5vh",textTransform:"capitalize"}},"<".concat(this.props.gameSelected.title,">")),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:700,fontFamily:"Montserrat"}},"Play with your friends!"),o.a.createElement("br",null),o.a.createElement(Te,{variant:"contained",loading:!1,style:{boxShadow:"2px 4px 3px #E0E0E0",minWidth:"30vh",margin:"1rem",backgroundColor:"#8ECAB1"},onClick:function(){be().dispatch(Object(Ee.d)(Oe))}},"Add friends"),o.a.createElement(Te,{variant:"contained",loading:!1,style:{boxShadow:"2px 4px 3px #E0E0E0",minWidth:"30vh",backgroundColor:"#8ECAB1"},onClick:function(){be().dispatch(Object(Ee.d)(ye))}},"Back to Home Page"))}}]),t}(r.Component);var _e=Object(d.c)((function(e){return{gameSelected:C.gameSelected(e)}}),(function(e){return{}}))($e),et=n(436),tt=n(440),nt={main:{backgroundImage:"url(".concat(K.a,")"),height:"100%",fontFamily:"Montserrat",backgroundSize:"cover"},form:{margin:"30vh auto 70vh auto",maxWidth:"320px",textAlign:"left"}},at=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={numOfPlayers:1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ke.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.resetPlayers();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderForm",value:function(){for(var e=this,t={},n={},a=[],r=0;r<this.state.numOfPlayers;r++)t[r]="",n[r]=Me.string().required("Required"),a.push(r);var i=Me.object().shape(n);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Re.c,{initialValues:t,validationSchema:i,onSubmit:function(){var t=Object(ke.a)(ie.a.mark((function t(n,a){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,a.setSubmitting)(!1),e.props.addPlayers(De.a.values(n)),be().dispatch(Object(Ee.d)("/game/play"));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},(function(e){var t=e.isSubmitting,n=e.isValid;return o.a.createElement(Re.b,null,De.a.map(a,(function(e){return o.a.createElement("div",{key:"playerform-".concat(e)},o.a.createElement("br",null),o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:700}},"Player ".concat(e+1,": ")),o.a.createElement(Re.a,{type:"text",name:e.toString(),margin:"dense",component:Ye.a,fullWidth:!0,autoFocus:!0,variant:"outlined",style:{minWidth:"30vh"}}))})),o.a.createElement(Te,{size:"large",disabled:!n&&t,type:"submit",style:{boxShadow:"2px 4px 3px #E0E0E0",minWidth:"30vh",margin:"auto",position:"absolute",backgroundColor:"#8ECAB1",textTransform:"None"}},"Join Game"))})))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:nt.main},o.a.createElement(U.a,{position:"static",style:{background:"transparent",boxShadow:"none"}},o.a.createElement(V.a,null,o.a.createElement(L.a,{edge:"start",style:{color:"#000"},"aria-label":"back",onClick:function(){return be().dispatch(Object(Ee.d)(ye))}},o.a.createElement(J.a,null)))),o.a.createElement("div",{style:nt.form},o.a.createElement("form",{style:{minWidth:"20vh",margin:"auto"},autoComplete:"off"},o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:700}},"Number of Players"),o.a.createElement(et.a,{value:this.state.numOfPlayers,onChange:function(t){return e.setState({numOfPlayers:t.target.value})},inputProps:{name:"numOfPlayers",id:"numOfPlayers"}},o.a.createElement(tt.a,{value:1},"1"),o.a.createElement(tt.a,{value:2},"2"),o.a.createElement(tt.a,{value:3},"3"),o.a.createElement(tt.a,{value:4},"4"),o.a.createElement(tt.a,{value:5},"5"),o.a.createElement(tt.a,{value:6},"6"),o.a.createElement(tt.a,{value:7},"7"),o.a.createElement(tt.a,{value:8},"8"))),this.renderForm())))}}]),t}(r.Component);var rt=Object(d.c)((function(e){return{isAuth:C.isAuth(e)}}),(function(e){return{addPlayers:function(){var t=Object(ke.a)(ie.a.mark((function t(n){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(W.addPlayers(n))}catch(a){e(W.error())}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),resetPlayers:function(){var t=Object(ke.a)(ie.a.mark((function t(){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(W.resetPlayers());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),signOut:function(){var t=Object(ke.a)(ie.a.mark((function t(){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(W.signout()),be().dispatch(Object(Ee.d)(ye));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))(at),ot={main:{margin:"1rem",background:"transparent",fontFamily:"Montserrat",display:"inline-block"},button:{cursor:"pointer",background:"#FFEEE6",boxShadow:"3px 3px 6px rgba(0, 0, 0, 0.25)",padding:"1rem",textTransform:"none",minWidth:"6.5rem",minHeight:"6.5rem"}},it=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectGame,n=e.set,a=n.title,r=n.questions;return o.a.createElement("div",{style:ot.main},o.a.createElement(Te,{loading:!1,variant:"contained",style:ot.button,onClick:function(){return t(n)}},a,o.a.createElement("br",null),"With ".concat(r.length," Questions")))}}]),t}(r.Component);var ct=Object(d.c)((function(e){return{}}),(function(e){return{selectGame:function(){var t=Object(ke.a)(ie.a.mark((function t(n){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(W.success({gameSelected:n})),be().dispatch(Object(Ee.d)(Oe))}catch(a){e(W.error())}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(it),ut={main:{background:"transparent",textAlign:"center",fontFamily:"Montserrat"}},lt=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).renderSets=function(){var e=n.props.sets;return De.a.map(e,(function(e){return o.a.createElement(ct,{key:e.pk,set:e})}))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ke.a)(ie.a.mark((function e(){var t,n,a,r,o;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.loadSets,a=t.isAuth,r=t.googleTokenId,o=t.sets,e.next=3,n({sets:o,isAuth:a,googleTokenId:r});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{style:ut.main},o.a.createElement(H.a,{variant:"body1",gutterBottom:!0,style:{fontFamily:"Montserrat",fontSize:"0.9rem",fontWeight:700}},"Game Library"),o.a.createElement("br",null),this.renderSets())}}]),t}(r.Component);var st=Object(d.c)((function(e){return{isAuth:C.isAuth(e),googleTokenId:C.googleTokenId(e),sets:C.sets(e)}}),(function(e){return{loadSets:function(){var t=Object(ke.a)(ie.a.mark((function t(n){var a,r,o;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.sets,r=n.isAuth,o=n.googleTokenId,r&&o&&Ve({url:"api/secure_sets/",data:{author:o}}).then((function(t){var n=t.data,r=De.a.unionWith(a,n,(function(e,t){return e.pk===t.pk}));e(W.loadSets(r))})).catch((function(e){return console.log("The author set fetching is failing.",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(lt),mt={main:{padding:"0 0 0 0",textAlign:"center",backgroundImage:"url(".concat(K.a,")"),height:"100vh",fontFamily:"Montserrat",backgroundSize:"cover"}},dt=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:mt.main},o.a.createElement(U.a,{position:"static",style:{background:"transparent",boxShadow:"none"}},o.a.createElement(V.a,null,o.a.createElement(L.a,{edge:"end","aria-label":"signout",onClick:function(){return e.props.signOut()}},this.props.isAuth?o.a.createElement(Se.GoogleLogout,{clientId:"772369058063-665vio82g46oqmvijs344qtf1u5aiec5.apps.googleusercontent.com",buttonText:"Logout"}):null))),o.a.createElement("img",{src:we.a,alt:"HomePage",style:{marginTop:"20vh",maxWidth:"45vh",marginBottom:"7.5vh"}}),this.props.isAuth?o.a.createElement(Te,{variant:"contained",loading:!1,onClick:function(){return be().dispatch(Object(Ee.d)("/create/questions"))}},"Create new game"):null,o.a.createElement("hr",null),o.a.createElement(st,null))}}]),t}(r.Component);var pt=Object(d.c)((function(e){return{isAuth:C.isAuth(e)}}),(function(e){return{signOut:function(){var t=Object(ke.a)(ie.a.mark((function t(){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(W.signout()),be().dispatch(Object(Ee.d)(ye));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))(dt),gt={main:{padding:"20vh 0 0 0",textAlign:"center",backgroundImage:"url(".concat(K.a,")"),height:"100vh",fontFamily:"Montserrat",backgroundSize:"cover"}},ft=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={judge:0,questionIter:0,answers:[],total:n.props.set.questions.length,roundWinner:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.questionIter,a=t.total,r=t.roundWinner,i=this.props,c=i.set.questions,u=i.points,l=i.players,s=i.setWinner,m=i.resetGame;return o.a.createElement("div",{style:gt.main},o.a.createElement("img",{src:we.a,alt:"HomePage",style:{maxWidth:"45vh",marginBottom:"7.5vh"}}),this.state.questionIter<a?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,null,c[n].question),o.a.createElement("br",null),o.a.createElement("div",{style:gt.form},o.a.createElement("form",{style:{minWidth:"20vh",margin:"auto"},autoComplete:"off"},o.a.createElement(H.a,{variant:"body1",style:{fontSize:"0.9rem",fontWeight:700}},"The Winner for this round is:"),o.a.createElement(et.a,{value:r,onChange:function(t){return e.setState({roundWinner:t.target.value})},inputProps:{name:"roundWinner",id:"roundWinner"}},De.a.map(l,(function(e){return o.a.createElement(tt.a,{value:e},"".concat(e))}))))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(Te,{variant:"contained",loading:!1,onClick:function(){e.setState({questionIter:n+1}),s(r,u)}},"Next Question")):o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{variant:"h4"},"Congrats! The Winner is ".concat(De.a.reduce(De.a.keys(u),(function(e,t){return u[t]>e[1]?[t,u[t]]:e}),["",0])[0],"!!!")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(Te,{variant:"contained",loading:!1,style:{boxShadow:"2px 4px 3px #E0E0E0",minWidth:"30vh",backgroundColor:"#8ECAB1"},onClick:function(){m(),be().dispatch(Object(Ee.d)(ye))}},"Back to Home Page")))}}]),t}(r.Component);var ht=Object(d.c)((function(e){return{set:C.gameSelected(e),players:C.players(e),points:C.points(e)}}),(function(e){return{setWinner:function(t,n){var a=n;De.a.find(De.a.keys(a),t)>0?a[t]+=1:a[t]=1,e(W.updatePoints(a))},resetGame:function(){e(W.resetPlayers())}}}))(ft);var bt=Object(d.c)((function(e){return{isAuth:C.isAuth(e),location:e.router.location.pathname}}),null)((function(e){var t=e.isAuth;e.location;return o.a.createElement(f.d,null,o.a.createElement(N,{path:ye,exact:!0,component:Be,isAuth:t,title:"Home"}),o.a.createElement(N,{path:"/create/success",exact:!0,component:_e,isAuth:!1,title:"Success"}),o.a.createElement(N,{path:"/homepage",exact:!0,component:pt,isAuth:!1,title:"Select Game"}),o.a.createElement(M,{path:"/create/questions",exact:!0,component:Je,isAuth:t,title:"Create Game"}),o.a.createElement(N,{path:Oe,exact:!0,component:rt,isAuth:!1,title:"Add Players"}),o.a.createElement(N,{path:"/game/play",exact:!0,component:ht,isAuth:!1,title:"Play"}),o.a.createElement(N,{component:je,isAuth:!1,title:"Page Not Found"}))})),vt=(n(395),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("Game Name client: v29"),o.a.createElement("div",{className:"App container"},o.a.createElement(d.a,{store:be()},o.a.createElement(g.a,{loading:null,persistor:ve},o.a.createElement(p.a,{history:pe},o.a.createElement(bt,null)))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(i.render)(o.a.createElement(vt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t){e.exports="data:image/png;base64,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"}},[[215,1,2]]]);
//# sourceMappingURL=main.fc0e1c65.chunk.js.map