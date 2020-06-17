(this["webpackJsonpbookshelf-app"]=this["webpackJsonpbookshelf-app"]||[]).push([[0],{112:function(e,t,a){e.exports=a(150)},117:function(e,t,a){},118:function(e,t){},146:function(e,t){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"books",(function(){return we}));var r=a(0),o=a.n(r),l=a(42),c=a.n(l),i=(a(117),a(111)),u=(a(118),a(151)),m=a(152),s=a(153),p=a(174),d=a(154),E=a(155),h=a(156),f=a(157),b={left:[{title:"HomePage",to:"/"},{title:"Read Books",to:"/read-books"}],right:[{title:"+ Add Book",to:"/add-book"}]},g=a(26),v=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",null,o.a.createElement(u.a,{color:"dark",dark:!0,expand:"md"},o.a.createElement(m.a,{tag:g.b,to:"/"},"BookShelf App"),o.a.createElement(s.a,{onClick:function(){return n(!a)}}),o.a.createElement(p.a,{isOpen:a,navbar:!0},o.a.createElement(d.a,{className:"mr-auto",navbar:!0},b.left.map((function(e){return o.a.createElement(E.a,null,o.a.createElement(h.a,{tag:g.b,to:e.to},e.title))}))),b.right.map((function(e){return o.a.createElement(f.a,null,o.a.createElement(h.a,{tag:g.b,to:e.to},e.title))})))))},O=a(24),k=a(74),y=a(43),S=a(44),w=a(55),j=a(56),x=a(33),C=a(60),T=a.n(C),B=["JavaScript","HTML","CSS","Python","JAVA"],A=[1,2,3,4,5],_=["Not read","Read"],P="https://5ebf287d00eabe0016fa39aa.mockapi.io/",R=a(158),N=a(159),D=function(e){Object(j.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={bookViewNumber:3},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.getBooks()}},{key:"render",value:function(){var e=this;if(this.props.loading)return o.a.createElement("h1",null,"BOOKS ARE LOADING...");var t=this.props.books,a=[];a=this.props.filter?t.filter((function(t){return t.category===e.props.filter})):t,this.props.searchTerm&&(a=a.filter((function(t){return t.title.toLowerCase().indexOf(e.props.searchTerm.toLowerCase())>-1||t.author.toLowerCase().indexOf(e.props.searchTerm.toLowerCase())>-1})));var n=[],r="";return r=(n=this.props.sortTerm?Object(k.a)(a).sort((function(t,a){return console.log(t,a,e.props.sortTerm),parseInt(a[e.props.sortTerm])-parseInt(t[e.props.sortTerm])})):a).length<1?o.a.createElement("h2",null,"NO BOOKS HERE"):o.a.createElement(pe,{items:n,view:this.state.bookViewNumber}),o.a.createElement("div",null,o.a.createElement(ke,null),o.a.createElement(R.a,{onClick:function(){e.setState({bookViewNumber:12})}},"List View")," ",o.a.createElement(R.a,{onClick:function(){e.setState({bookViewNumber:3})}},"Item View"),o.a.createElement(N.a,null,o.a.createElement("div",{className:"books-holder"},r)))}}]),a}(o.a.Component),L={getBooks:function(){return function(e){e({type:"LOAD_BOOKS"}),T.a.get("".concat(P,"/books")).then((function(t){e({type:"SET_BOOKS",payload:t.data})})).catch((function(e){console.log(e)}))}}},K=Object(x.b)((function(e){return{books:e.books.data,loading:e.books.loading,filter:e.books.filter,searchTerm:e.books.searchTerm,sortTerm:e.books.sortTerm}}),L)(D),F=a(160),I=a(161),V=function(e){Object(j.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={book:""},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.routerProps.match.params.id;t&&T.a.get("".concat(P,"/books/").concat(t)).then((function(t){e.setState({book:t.data})}))}},{key:"render",value:function(){var e=this.props.componentProps.isEdit;this.props.routerProps.match.params.id;return o.a.createElement(F.a,null,o.a.createElement(I.a,{xs:12},e?o.a.createElement("h3",null,"Edit book"):o.a.createElement("h3",null,"Add a new book")),o.a.createElement(I.a,{xs:12},o.a.createElement(te,{isEdit:e,book:this.state.book})))}}]),a}(o.a.Component),U=[{title:"Home Page",path:"/",exact:!0,componentProps:{},component:K},{title:"Add Book",path:"/add-book",exact:!1,componentProps:{},component:V},{title:"Edit Book",path:"/edit-book/:id",exact:!1,componentProps:{isEdit:!0},component:V}],H=function(){return o.a.createElement("div",null,o.a.createElement(O.c,null,U.map((function(e){return o.a.createElement(O.a,{path:e.path,exact:e.exact,component:function(t){var a=e.component;return o.a.createElement(q,{title:e.title,routerProps:t,componentProps:e.componentProps},a)}})}))))},M=(a(146),H),q=function(e){Object(j.a)(a,e);var t=Object(w.a)(a);function a(e){return Object(y.a)(this,a),t.call(this,e)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.title;document.title=e}},{key:"render",value:function(){console.log(this.props);var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(e,{routerProps:this.props.routerProps,componentProps:this.props.componentProps}))}}]),a}(r.Component),J=a(29),G=a(162),W=a(163),X=a(164),z=a(165),$=a(166),Q=a(110),Y=a(64),Z=Y.a().shape({title:Y.b().required("Title is a required field"),author:Y.b().required("Author is a required field"),review:Y.b().min(30,"Review must be 30 characters or more")}),ee={addBook:function(e,t){return function(a){T.a.post("".concat(P,"/books"),e).then((function(e){a({type:"ADD_BOOK",payload:e.data}),t.push("/")})).catch((function(e){console.log(e)}))}}},te=Object(O.f)(Object(x.b)(null,ee)((function(e){console.log(e);var t={title:"",author:"",category:"",description:"",rating:"",imageUrl:"",status:"",review:"",goodread:""};return e.isEdit&&e.book&&(t=Object(J.a)({review:"",goodread:""},e.book)),o.a.createElement("div",null,o.a.createElement(Q.a,{initialValues:t,validationSchema:Z,onSubmit:function(t){console.log(t),e.addBook(t,e.history)},enableReinitialize:!0},(function(t){var a=t.values,n=t.errors,r=(t.touched,t.handleChange),l=(t.handleBlur,t.handleSubmit);t.isSubmitting;return o.a.createElement(G.a,{onSubmit:l},o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"title"},"Title"),o.a.createElement(z.a,{type:"text",name:"title",id:"title",placeholder:"Name of the book",value:a.title,onChange:r,invalid:n.title}),n.title&&o.a.createElement($.a,null,n.title)),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"author"},"Author"),o.a.createElement(z.a,{type:"text",name:"author",id:"author",placeholder:"Author of the book",value:a.author,onChange:r,invalid:n.author}),n.author&&o.a.createElement($.a,null,n.author)),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"imageUrl"},"Image URL"),o.a.createElement(z.a,{type:"text",name:"imageUrl",id:"imageUrl",placeholder:"Image of the book",value:a.imageUrl,onChange:r})),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"exampleSelect"},"Category"),o.a.createElement(z.a,{type:"select",name:"category",id:"category",value:a.category,onChange:r},B.map((function(e){return o.a.createElement("option",null,e)})))),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"exampleText"},"Description"),o.a.createElement(z.a,{type:"textarea",name:"description",id:"description",value:a.description,onChange:r})),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"exampleSelect"},"Rating"),o.a.createElement(z.a,{type:"select",name:"rating",id:"rating",value:a.rating,onChange:r},A.map((function(e){return o.a.createElement("option",null,e)})))),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"exampleSelect"},"Status"),o.a.createElement(z.a,{type:"select",name:"status",id:"status",value:a.status,onChange:r},_.map((function(e){return o.a.createElement("option",null,e)})))),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"review"},"Review"),o.a.createElement(z.a,{type:"textarea",name:"review",id:"review",value:a.review,onChange:r,invalid:n.review}),n.review&&o.a.createElement($.a,null,n.review)),o.a.createElement(W.a,null,o.a.createElement(X.a,{for:"goodread"},"Goodread Link"),o.a.createElement(z.a,{type:"url",name:"goodread",id:"goodread",placeholder:"url of the book in goodread",value:a.goodread,onChange:r})),e.isEdit?o.a.createElement(R.a,{color:"primary"},"Save"):o.a.createElement(R.a,{color:"primary"},"Add"))})))}))),ae=a(168),ne=a(169),re=a(170),oe=a(171),le=a(62),ce=a(63),ie=a(167);function ue(){var e=Object(le.a)(["\n    height: 444px;\n    .card-img-top {\n        height: 250px;\n    }\n    margin-bottom: 20px;\n"]);return ue=function(){return e},e}var me=Object(ce.a)(ie.a)(ue()),se=function(e){var t=e.imageUrl,a=e.rating,n=e.title,r=e.id;return o.a.createElement(me,null,o.a.createElement(ae.a,{top:!0,width:"100%",src:t,alt:n}),o.a.createElement(ne.a,null,o.a.createElement(re.a,null,o.a.createElement("strong",null,"".concat(a," / 5"))),o.a.createElement(re.a,null,n),o.a.createElement(oe.a,null,"Details"),o.a.createElement(oe.a,null,o.a.createElement(g.b,{to:"/edit-book/".concat(r)},"Edit Book")),e.goodread&&o.a.createElement(oe.a,null,o.a.createElement("a",{target:"_blank",href:e.goodread},"Goodreads"))))},pe=function(e){return o.a.createElement(F.a,null,e.items.map((function(t){return o.a.createElement(I.a,{xs:e.view},o.a.createElement(se,t))})))},de=a(173),Ee=a(108),he=a(172);function fe(){var e=Object(le.a)(["\n    display: inline-flex;\n    width: 50%;\n"]);return fe=function(){return e},e}function be(){var e=Object(le.a)(["\n    margin-left: 15px;\n    color: ",";\n    cursor: pointer;\n"]);return be=function(){return e},e}var ge=Object(ce.a)(f.a)(be(),(function(e){return e.active?"#FF8247":"#035491"})),ve=Object(ce.a)(he.a)(fe()),Oe={changeFilter:function(e){return function(t){t({type:"SET_FILTER",payload:e})}},search:function(e){return function(t){t({type:"SEARCH_BOOKS",payload:e})}},sort:function(e){return function(t){t({type:"SORT_BOOKS",payload:e})}}},ke=Object(x.b)((function(e){return{activeFilter:e.books.filter}}),Oe)((function(e){return o.a.createElement("div",null,o.a.createElement(N.a,{fluid:!0,className:"bg-white",style:{padding:"15px"}},o.a.createElement(F.a,null,o.a.createElement(I.a,{xs:6},o.a.createElement(d.a,{className:"bg-white"},o.a.createElement(ge,null,o.a.createElement("strong",null,"Categories:")),o.a.createElement(ge,{active:!e.activeFilter,onClick:function(){e.changeFilter("")}},"All"),B.map((function(t){return o.a.createElement(ge,{active:e.activeFilter===t,onClick:function(){e.changeFilter(t)}},t)})))),o.a.createElement(I.a,{xs:6},o.a.createElement(ve,null,o.a.createElement(de.a,{addonType:"prepend"},o.a.createElement(Ee.a,null,"Search ")),o.a.createElement(z.a,{placeholder:"by name or author",onChange:function(t){e.search(t.target.value)}})),o.a.createElement(ve,null,o.a.createElement(z.a,{type:"select",name:"select",id:"exampleSelect",onChange:function(t){e.sort(t.target.value)}},o.a.createElement("option",{value:""},"No Sort"),o.a.createElement("option",{value:"alphabetical"},"Sort Alphabetical"),o.a.createElement("option",{value:"rating"},"Sort by Rating")))))))}));var ye=function(){return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(148),a(149);var Se={data:[],loading:!1,filter:"",searchTerm:"",sortTerm:""},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK":return Object(J.a)({},e,{data:[].concat(Object(k.a)(e.data),[t.payload])});case"SET_BOOKS":return Object(J.a)({},e,{data:t.payload,loading:!1});case"LOAD_BOOKS":return Object(J.a)({},e,{loading:!0});case"SET_FILTER":return Object(J.a)({},e,{filter:t.payload});case"SEARCH_BOOKS":return Object(J.a)({},e,{searchTerm:t.payload});case"SORT_BOOKS":return Object(J.a)({},e,{sortTerm:t.payload});default:return e}},je=a(41),xe=a(109),Ce=Object(je.c)(n),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,Be=Object(je.e)(Ce,Te(Object(je.a)(xe.a))),Ae=a(13),_e=Object(Ae.a)();c.a.render(o.a.createElement(x.a,{store:Be},o.a.createElement(g.a,{history:_e},o.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.18ca4c96.chunk.js.map