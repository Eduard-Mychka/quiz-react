(this["webpackJsonpquiz-react"]=this["webpackJsonpquiz-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),r=s(8),a=s.n(r),c=(s(17),s(4)),u=s(5),l=s(7),o=s(6),j=(s(18),s(1)),d=function(e){var t=["menu-toggle","far","fas"];return e.isOpen?(t.push("fa-times"),t.push("open")):t.push("fa-bars"),Object(j.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},h=(s(20),function(e){return Object(j.jsx)("div",{className:"backdrop",onClick:e.onClick})}),b=(s(21),[1,2,3]),O=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"renderLinks",value:function(){return b.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsxs)("a",{children:["Link ",e]})},t)}))}},{key:"render",value:function(){var e=["drawer"];return this.props.isOpen||e.push("close"),Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)("nav",{className:e.join(" "),children:Object(j.jsx)("ul",{children:this.renderLinks()})}),this.props.isOpen?Object(j.jsx)(h,{onClick:this.props.onClose}):null]})}}]),s}(n.Component),x=(s(22),function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Layout",children:[Object(j.jsx)(O,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),Object(j.jsx)(d,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),Object(j.jsx)("main",{children:this.props.children})]})}}]),s}(n.Component)),f=s(10),m=(s(23),function(e){var t=["answer-item"];return e.state&&t.push([e.state]),Object(j.jsx)("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)},children:e.answer.text})}),w=(s(24),function(e){return Object(j.jsx)("ul",{className:"answers-list",children:e.answers.map((function(t,s){return Object(j.jsx)(m,{answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null},s)}))})}),p=(s(25),function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Answer all questions"}),Object(j.jsxs)("div",{className:"active-quiz",children:[Object(j.jsxs)("p",{className:"question",children:[Object(j.jsxs)("span",{children:[Object(j.jsxs)("strong",{children:[e.answerNumber,"."]}),"\xa0",e.question]}),Object(j.jsxs)("small",{children:[e.answerNumber," of ",e.quizLength]})]}),Object(j.jsx)(w,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick})]})]})}),v=s(47),k=(s(26),function(e){var t=Object.keys(e.results).reduce((function(t,s){return"success"===e.results[s]&&t++,t}),0);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"That's all"}),Object(j.jsxs)("div",{className:"finished-quiz",children:[Object(j.jsx)("h3",{children:"Your result"}),Object(j.jsx)("ul",{children:e.quiz.map((function(t,s){var n=["far","error"===e.results[t.id]?"fa-times-circle red":"fa-check-circle green",[e.results[t.id]]];return Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:s+1}),".\xa0",t.question,Object(j.jsx)("i",{className:n.join(" ")})]},s)}))}),Object(j.jsxs)("p",{className:"result",children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(v.a,{className:"me-2",onClick:e.onRetry,color:"primary",size:"small",variant:"contained",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),Object(j.jsx)(v.a,{color:"secondary",variant:"contained",size:"small",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043a\u0441\u0442\u043e\u0432"})]})]})]})}),g=(s(31),function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{question:"\u041a\u0430\u043a\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u043d\u0435\u0431\u043e ?",rightAnswerId:3,id:1,answers:[{text:"\u0411\u0435\u043b\u043e\u0435",id:1},{text:"\u0413\u043e\u043b\u0443\u0431\u043e\u0435",id:2},{text:"\u0421\u0438\u043d\u0435\u0435",id:3},{text:"\u041d\u0435\u0431\u0435\u0441\u043d\u043e\u0435",id:4}]},{question:"C\u0442\u043e\u043b\u0438\u0446\u0430 \u041f\u043e\u043b\u044c\u0448\u044b ?",rightAnswerId:3,id:2,answers:[{text:"\u041a\u0440\u0430\u043a\u043e\u0432",id:1},{text:"\u0412\u0440\u043e\u0446\u043b\u0430\u0432",id:2},{text:"\u0412\u0430\u0440\u0448\u0430\u0432\u0430",id:3},{text:"\u041b\u044e\u0431\u043b\u0438\u043d",id:4}]},{question:"C\u0442\u043e\u043b\u0438\u0446\u0430 Deda ?",rightAnswerId:2,id:3,answers:[{text:"\u041a\u0438\u0435\u0432",id:1},{text:"\u0422\u0440\u0443\u0441\u0438\u043b\u044f",id:2},{text:"\u041f\u0440\u0438\u043b\u0443\u043a\u0438",id:3},{text:"\u0413\u0435\u043d\u0435\u0437\u0438\u0441",id:4}]}]},e.onAswerClickHandler=function(t){if(e.state.answerState){var s=Object.keys(e.state.answerState)[0];if("success"===e.state.answerState[s])return}var n=e.state.quiz[e.state.activeQuestion],i=e.state.results;if(n.rightAnswerId===t){i[n.id]||(i[n.id]="success"),e.setState({answerState:Object(f.a)({},t,"success"),results:i});var r=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(r)}),800)}else i[n.id]="error",e.setState({answerState:Object(f.a)({},t,"error"),results:i})},e.retryHandler=function(){e.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},e}return Object(u.a)(s,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"quiz",children:Object(j.jsx)("div",{className:"quiz-wrapper",children:this.state.isFinished?Object(j.jsx)(k,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):Object(j.jsx)(p,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})})})}}]),s}(n.Component)),q=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(j.jsx)(x,{children:Object(j.jsx)(g,{})})}}]),s}(n.Component);a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.4a531ed2.chunk.js.map