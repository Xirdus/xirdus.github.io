(this.webpackJsonpmath=this.webpackJsonpmath||[]).push([[0],{25:function(t,e,a){},32:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(14),i=a.n(s),r=(a(25),a(8)),l=a(2),h=a(15),o=a(16),j=a(20),p=a(19),d=a(1);function b(t,e){return Math.floor(Math.random()*(e-t))+t}function m(){var t=b(2,101),e=b(1,t);return{expression:"".concat(e," + ").concat(t-e),answer:t}}function u(){var t=b(2,101),e=b(1,t);return{expression:"".concat(t," - ").concat(e),answer:t-e}}function x(){var t=b(1,11),e=b(1,11);return{expression:"".concat(t," \xd7 ").concat(e),answer:t*e}}function O(){var t=b(1,11),e=b(1,11);return{expression:"".concat(t*e," \xf7 ").concat(e),answer:t}}var v=function(t){Object(j.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).onInputChange=function(t){var e=t.target.value;/^\d*$/.test(e)&&n.setState({input:e})},n.onCheck=function(){n.setState({checked:!0})},n.onNext=function(){n.setState({data:n.props.dataFn(),input:"",checked:!1})},n.state={data:t.dataFn(),input:"",checked:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var t,e,a;return this.state.checked?(a=Object(d.jsx)("input",{type:"button",className:"simple-math-button",value:"Next",onClick:this.onNext}),parseInt(this.state.input)===this.state.data.answer?(t=Object(d.jsx)("p",{className:"simple-math-answer-correct",children:this.state.input}),e=Object(d.jsx)("p",{className:"simple-math-label-correct",children:"Correct!"})):(t=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"simple-math-answer-wrong",children:this.state.input}),Object(d.jsx)("p",{className:"simple-math-answer-correct",children:this.state.data.answer})]}),e=Object(d.jsx)("p",{className:"simple-math-label-wrong",children:"Wrong!"}))):(t=Object(d.jsx)("input",{type:"text",className:"simple-math-input",maxLength:"3",value:this.state.input,onChange:this.onInputChange}),e=null,a=Object(d.jsx)("input",{type:"button",className:"simple-math-button",value:"Check",disabled:0===this.state.input.length,onClick:this.onCheck})),Object(d.jsxs)("div",{className:"simple-math-container-vertical",children:[Object(d.jsxs)("div",{className:"simple-math-container-horizontal",children:[Object(d.jsxs)("p",{className:"simple-math-expr",children:[this.state.data.expression," = "]}),t]}),e,a]})}}]),a}(c.a.Component);var f=function(){return Object(d.jsx)(r.a,{basename:"/math",children:Object(d.jsxs)(l.c,{children:[Object(d.jsxs)(l.a,{exact:!0,path:"/",children:[Object(d.jsx)("h2",{children:Object(d.jsx)(r.b,{to:"/simple-addition",children:"Simple addition"})}),Object(d.jsx)("h2",{children:Object(d.jsx)(r.b,{to:"/simple-subtraction",children:"Simple subtraction"})}),Object(d.jsx)("h2",{children:Object(d.jsx)(r.b,{to:"/simple-multiplication",children:"Simple multiplication"})}),Object(d.jsx)("h2",{children:Object(d.jsx)(r.b,{to:"/simple-division",children:"Simple division"})})]}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)("div",{className:"back-button",children:Object(d.jsx)(r.b,{to:"/",children:"< Back"})}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/simple-addition",children:Object(d.jsx)(v,{dataFn:m})}),Object(d.jsx)(l.a,{exact:!0,path:"/simple-subtraction",children:Object(d.jsx)(v,{dataFn:u})}),Object(d.jsx)(l.a,{exact:!0,path:"/simple-multiplication",children:Object(d.jsx)(v,{dataFn:x})}),Object(d.jsx)(l.a,{exact:!0,path:"/simple-division",children:Object(d.jsx)(v,{dataFn:O})})]})]})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.95d0c94c.chunk.js.map