(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r(3),a=r(6),c=r(4),s=r(7),l=r(0),u=r.n(l),o=r(5),d=r.n(o),p=(r(15),function(){return u.a.createElement("div",{id:"header"},u.a.createElement("i",{className:"fas fa-utensils"}),"Recipe App")}),m=function(e){return u.a.createElement("div",{id:"directory"},u.a.createElement(h,{searchVal:e.searchVal,handleChange:e.handleChange,selectRecipes:e.selectRecipes}),e.recipeList.map(function(t){return u.a.createElement(y,{name:t.name,clickHandler:e.clickHandler,id:t.id,key:t.id})}))},h=function(e){return u.a.createElement("div",null,u.a.createElement("form",null,u.a.createElement("input",{value:e.searchVal,onChange:e.handleChange}),u.a.createElement("button",{onClick:e.selectRecipes},"Search")))},y=function(e){return u.a.createElement("div",null,u.a.createElement("h3",{onClick:function(){return e.clickHandler(e.id)}},e.name))},f=function(e){return u.a.createElement("div",{id:"details"},u.a.createElement("p",null,e.recipe.name),u.a.createElement("p",null,e.recipe.ingredients),u.a.createElement("p",null,e.recipe.instructions))},k=function(e){function t(){var e,r;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return(r=Object(a.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={recipeList:[{id:1,name:"turkey + stuff",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:2,name:"turkey salad",ingredients:["turkey","mayonnaise","pickles","celery","potato"],instructions:["chop leftover turkey til fine","mix mayonnaise","add additional ingredients"]},{id:3,name:"bread",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:4,name:"white rice",ingredients:["1 cup white rice","1 cup water"],instructions:["bring water to boil","add rice","cover","turn off heat"]},{id:5,name:"yellow rice",ingredients:["1 cup yellow rice","1 cup water"],instructions:["bring water to boil","add rice","cover","turn off heat"]},{id:6,name:"dirty rice",ingredients:["1 cup white rice","1 cup water","dirt"],instructions:["bring water to boil","add rice","add dirt","cover","turn off heat"]},{id:7,name:"turkey + stuff",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:8,name:"turkey + stuff",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:9,name:"turkey + stuff",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:10,name:"turkey + stuff",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]}],searchVal:"",selectedRecipes:[],recipe:{}},r.handleChange=function(e){r.setState({searchVal:e.target.value})},r.selectRecipes=function(e){e.preventDefault();var t=r.state.recipeList.filter(function(e){return e.name.includes(r.state.searchVal)});r.setState({selectedRecipes:t,recipe:t[0]})},r.selectARecipe=function(e){console.log(e),r.setState({recipe:r.state.selectedRecipes.find(function(t){return t.id===e})})},r}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"container"},u.a.createElement(p,null),u.a.createElement(m,{recipeList:this.state.selectedRecipes,handleChange:this.handleChange,searchVal:this.state.searchVal,selectRecipes:this.selectRecipes,clickHandler:this.selectARecipe}),u.a.createElement(f,{recipe:this.state.recipe}))}}]),t}(u.a.Component);d.a.render(u.a.createElement(k,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.6267be21.chunk.js.map