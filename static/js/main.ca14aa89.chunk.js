(this["webpackJsonpquiz-react"]=this["webpackJsonpquiz-react"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(9),i=n.n(r),c=(n(73),n(24)),o=n(13),l=n(14),u=n(16),d=n(15),h=n(130),j=(n(74),n(1)),b=function(e){var t=["menu-toggle","far","fas"];return e.isOpen?(t.push("fa-times"),t.push("open")):t.push("fa-bars"),Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{title:"Menu",placement:"right",children:Object(j.jsx)("i",{className:t.join(" "),onClick:e.onToggle})})})},v=(n(79),function(e){return Object(j.jsx)("div",{className:"backdrop",onClick:e.onClick})}),m=(n(80),[{to:"/",label:"Test List",exact:!0},{to:"/auth",label:"Authorization",exact:!1},{to:"/quiz-creator",label:"Creation Test",exact:!1}]),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).clickHandler=function(){e.props.onClose()},e}return Object(l.a)(n,[{key:"renderLinks",value:function(){var e=this;return m.map((function(t,n){return Object(j.jsx)("li",{children:Object(j.jsx)(c.c,{to:t.to,exact:t.exact,activeClassName:"active",onClick:e.clickHandler,children:t.label})},n)}))}},{key:"render",value:function(){var e=["drawer"];return this.props.isOpen||e.push("close"),Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("nav",{className:e.join(" "),children:Object(j.jsx)("ul",{children:this.renderLinks()})}),this.props.isOpen?Object(j.jsx)(v,{onClick:this.props.onClose}):null]})}}]),n}(a.Component),f=(n(82),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Layout",children:[Object(j.jsx)(p,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),Object(j.jsx)(b,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),Object(j.jsx)("main",{children:this.props.children})]})}}]),n}(a.Component)),O=n(5),x=n(17),g=n.n(x),w=n(25),C=n(36),k=(n(84),function(e){var t=["answer-item"];return e.state&&t.push([e.state]),Object(j.jsx)("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)},children:e.answer.text})}),y=(n(85),function(e){return Object(j.jsx)("ul",{className:"answers-list",children:e.answers.map((function(t,n){return Object(j.jsx)(k,{answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null},n)}))})}),q=(n(86),function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Answer all questions"}),Object(j.jsxs)("div",{className:"active-quiz",children:[Object(j.jsxs)("div",{className:"question",children:[Object(j.jsxs)("span",{children:[Object(j.jsxs)("strong",{children:[e.answerNumber,"."]}),"\xa0",e.question]}),Object(j.jsxs)("small",{children:[e.answerNumber," of ",e.quizLength]})]}),Object(j.jsx)(y,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick})]})]})}),z=n(131),N=(n(87),function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("h1",{children:"That's all"}),Object(j.jsxs)("div",{className:"finished-quiz",children:[Object(j.jsxs)("div",{className:"finished-quiz-head",children:[Object(j.jsx)("h3",{children:"Your result"}),Object(j.jsxs)("p",{className:"result",children:["Correct answers ",t," of ",e.quiz.length]})]}),Object(j.jsx)("ul",{children:e.quiz.map((function(t,n){var a=["far","error"===e.results[t.id]?"fa-times-circle red":"fa-check-circle green",[e.results[t.id]]];return Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:n+1}),".\xa0",t.question,Object(j.jsx)("i",{className:a.join(" ")})]},n)}))}),Object(j.jsxs)("div",{className:"finished-quiz-btn",children:[Object(j.jsx)(z.a,{className:"me-2",onClick:e.onRetry,color:"primary",size:"small",variant:"contained",children:"Take again"}),Object(j.jsx)(c.b,{to:"/",className:"btn-all-test",children:Object(j.jsx)(z.a,{onClick:e.onRetry,color:"secondary",variant:"contained",size:"small",children:"All tests"})})]})]})]})}),A=n(59),S=n.n(A).a.create({baseURL:"https://quiz-app-e026e-default-rtdb.europe-west1.firebasedatabase.app/"}),H=(n(106),function(e){return Object(j.jsx)("div",{className:"align-items-center",children:Object(j.jsxs)("div",{className:"loader",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}),F=n(46),T=n.n(F),M=(n(108),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[],loader:!0},e.onAswerClickHandler=function(t){if(e.state.answerState){var n=Object.keys(e.state.answerState)[0];if("success"===e.state.answerState[n])return}var a=e.state.quiz[e.state.activeQuestion],s=e.state.results;if(a.rightAnswerId===t){s[a.id]||(s[a.id]="success"),e.setState({answerState:Object(C.a)({},t,"success"),results:s});var r=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(r)}),800)}else s[a.id]="error",e.setState({answerState:Object(C.a)({},t,"error"),results:s})},e.retryHandler=function(){e.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},e}return Object(l.a)(n,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"componentDidMount",value:function(){var e=Object(w.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/quizes/".concat(this.props.match.params.id,".json"));case 3:t=e.sent,n=t.data,this.setState({quiz:n,loader:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"containerr",children:[Object(j.jsx)(h.a,{title:"Home",placement:"right",className:"home",children:Object(j.jsx)("a",{href:"/quiz-react/",children:Object(j.jsx)("i",{className:"fas fa-home"})})}),Object(j.jsx)(h.a,{title:"Create Test",placement:"right",className:"create-test",children:Object(j.jsx)("a",{href:"/quiz-creator",children:Object(j.jsx)("i",{className:"fad fa-layer-plus"})})}),Object(j.jsx)("div",{className:"quiz",children:Object(j.jsx)("div",{className:"quiz-wrapper",children:this.state.loader?Object(j.jsx)(H,{}):this.state.isFinished?Object(j.jsx)(T.a,{right:!0,children:Object(j.jsx)(N,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler})}):Object(j.jsxs)(T.a,{left:!0,children:[Object(j.jsx)(q,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})," "]})})})]})}}]),n}(a.Component)),Q=n(60),I=n.n(Q),V=(n(109),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={quizes:[],loading:!0},e}return Object(l.a)(n,[{key:"renderQuizes",value:function(){return this.state.quizes.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(c.c,{to:"/quiz/"+e.id,children:e.name})},e.id)}))}},{key:"componentDidMount",value:function(){var e=Object(w.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/quizes.json");case 3:t=e.sent,n=[],Object.keys(t.data).forEach((function(e,t){n.push({id:e,name:"Test number: ".concat(t+1)})})),this.setState({quizes:n,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{className:"quiz-list",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:Object(j.jsx)(I.a,{left:!0,cascade:!0,children:"Test List"})}),this.state.loading?Object(j.jsx)(H,{}):Object(j.jsx)("ul",{children:this.renderQuizes()})]})})}}]),n}(a.Component)),L=n(26);n(110);function J(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var E=function(e){var t=e.type||"text",n=["input","option"===e.name?"col-6":""],a="".concat(t,"-").concat(Math.random());return J(e)&&n.push("invalid"),Object(j.jsxs)("div",{className:n.join(" "),children:[Object(j.jsx)("label",{htmlFor:a,children:e.label}),Object(j.jsx)("input",{type:t,id:a,value:e.value,onChange:e.onChange}),Object(j.jsx)("span",{children:J(e)?e.errorMessage||"\u0412\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":null})]})},D=(n(111),n(61)),B=n.n(D),Y=n(62),R=n.n(Y),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"Enter correct - email !",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"Password",errorMessage:"Enter correct - password !",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=Object(w.a)(g.a.mark((function t(){var n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControls.email.value,password:e.state.formControls.password.value,returnSecureToken:!0},t.prev=1,t.next=4,S.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsTJqiAJ8JTrTzYJ17B-v0pGvM3-4BzY4",n);case 4:a=t.sent,console.log(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.registerHandler=Object(w.a)(g.a.mark((function t(){var n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControls.email.value,password:e.state.formControls.password.value,returnSecureToken:!0},t.prev=1,t.next=4,S.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsTJqiAJ8JTrTzYJ17B-v0pGvM3-4BzY4",n);case 4:a=t.sent,console.log(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(L.a)({},e.state.formControls),s=Object(L.a)({},a[n]);s.value=t.target.value,s.touched=!0,s.valid=e.validateControl(s.value,s.validation),a[n]=s;var r=!0;Object.keys(a).forEach((function(e){r=a[e].valid&&r})),e.setState({formControls:a,isFormValid:r})},e}return Object(l.a)(n,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=B.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return Object(j.jsx)(E,{type:a.type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,errorMessage:a.errorMessage,shouldValidate:!!a.validation,onChange:function(n){return e.onChangeHandler(n,t)}},t+n)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"auth",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(R.a,{top:!0,children:Object(j.jsxs)("form",{onSubmit:this.submitHandler,className:"auth-form",children:[Object(j.jsx)("h1",{children:"Login Form"}),this.renderInputs(),Object(j.jsxs)("div",{className:"auth-form-btn",children:[Object(j.jsx)(z.a,{className:"w-50 h-25 me-3",onClick:this.loginHandler,color:"primary",size:"small",variant:"contained",disabled:!this.state.isFormValid,children:"Sign In"}),Object(j.jsx)(z.a,{className:"w-50 h-25",onClick:this.registerHandler,color:"secondary",size:"small",variant:"contained",disabled:!this.state.isFormValid,children:"Sign Up"})]})]})})})})}}]),n}(a.Component);function U(e,t){return Object(L.a)(Object(L.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function W(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}n(112);var K=function(e){var t="".concat(e.label,"-").concat(Math.random());return Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("label",{htmlFor:t,children:e.label}),Object(j.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(j.jsx)("option",{value:e.value,children:e.text},e.value+t)}))})]})},X=n(63),Z=n.n(X);n(113);function $(e){return U({name:"option",label:"Option ".concat(e),errorMessage:"Value cannot be empty",id:e},{required:!0})}function _(){return{question:U({label:"Enter a question",errorMessage:"The question cannot be empty"},{required:!0}),option1:$(1),option2:$(2),option3:$(3),option4:$(4)}}var ee=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={quiz:[],isFormValid:!1,rightAnswerId:1,formControls:_()},e.submitHandler=function(e){return e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=e.state.quiz.concat(),a=n.length+1,s=e.state.formControls,r=s.question,i=s.option1,c=s.option2,o=s.option3,l=s.option4,u={question:r.value,id:a,rightAnswerId:e.state.rightAnswerId,answers:[{text:i.value,id:i.id},{text:c.value,id:c.id},{text:o.value,id:o.id},{text:l.value,id:l.id}]};n.push(u),e.setState({quiz:n,isFormValid:!1,rightAnswerId:1,formControls:_()})},e.createQuizHandler=function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,S.post("/quizes.json",e.state.quiz);case 4:e.setState({quiz:[],isFormValid:!1,rightAnswerId:1,formControls:_()}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),e.changeHandler=function(t,n){var a=Object(L.a)({},e.state.formControls),s=Object(L.a)({},a[n]);s.touched=!0,s.value=t,s.valid=G(s.value,s.validation),a[n]=s,e.setState({formControls:a,isFormValid:W(a)})},e.selectChangeHandler=function(t){e.setState({rightAnswerId:+t.target.value})},e}return Object(l.a)(n,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsx)(E,{label:a.label,name:a.name,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}})},t+n)}))}},{key:"render",value:function(){var e=Object(j.jsx)(K,{label:"Choose the correct answer",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return Object(j.jsxs)("div",{className:"quiz-creator",children:[Object(j.jsx)("div",{className:"home",children:Object(j.jsx)("a",{href:"/quiz-react/",children:Object(j.jsx)("i",{className:"fas fa-home"})})}),Object(j.jsx)("div",{className:"containere",children:Object(j.jsx)(Z.a,{top:!0,children:Object(j.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(j.jsx)("h1",{children:"Creation Test"}),Object(j.jsx)("div",{className:"row",children:this.renderControls()}),e,Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)(z.a,{className:"w-50 h-25 me-3",onClick:this.addQuestionHandler,color:"primary",size:"small",variant:"contained",disabled:!this.state.isFormValid,children:"Add Question"}),Object(j.jsx)(z.a,{className:"w-50 h-25",onClick:this.createQuizHandler,color:"secondary",size:"small",variant:"contained",disabled:0===this.state.quiz.length,children:"Create Test"})]})]})})})]})}}]),n}(a.Component),te=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)(f,{children:Object(j.jsxs)(O.c,{children:[Object(j.jsx)(O.a,{path:"/auth",component:P}),Object(j.jsx)(O.a,{path:"/quiz-creator",component:ee}),Object(j.jsx)(O.a,{path:"/quiz/:id",component:M}),Object(j.jsx)(O.a,{path:"/",component:V})]})})}}]),n}(a.Component),ne=Object(j.jsx)(c.a,{children:Object(j.jsx)(te,{})});i.a.render(ne,document.getElementById("root"))},73:function(e,t,n){},74:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.ca14aa89.chunk.js.map