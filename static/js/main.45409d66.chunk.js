(this["webpackJsonpd3-web-app-demo"]=this["webpackJsonpd3-web-app-demo"]||[]).push([[0],{30:function(e,t,n){e.exports=n(42)},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(10),i=n.n(s),o=(n(35),n(6)),c=n(7),l=n(11),u=n(9),d=n(8),h=(n(36),n(5)),g=n(44),p=n(21),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={jsonData:{},diseaseName:""},a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){this.makeGraph(this.props.jsonData,this.props.diseaseName,this.props.proteins,this.props.drugs)}},{key:"render",value:function(){return h.selectAll("svg > *").remove(),r.a.createElement(g.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{id:"dataviz_graph",style:{width:"100%",height:"1080px"}},r.a.createElement("svg",{className:"GraphSvg",id:"graph",style:{backgroundColor:"white",height:"1080px",width:"100%"}},r.a.createElement("g",{id:"graphCart"})))))}},{key:"makeGraph",value:function(e,t,n,a){if(e.hasOwnProperty(t)){console.log("starting to paint graph...");var r=[],s=[],i=1;for(var o in r.push({id:t,name:t,type:"disease"}),n)if(r.push({id:n[o],name:n[o],type:"protein"}),s.push({target:n[o],source:t}),a[n[o]].length<10)for(var c in a[n[o]]){var l=a[n[o]][c];r.push({id:"".concat(l).concat(i),name:l,type:"drug"}),s.push({target:"".concat(l).concat(i),source:n[o]}),i++}var u=window.innerWidth,d=window.innerHeight+400,g=h.select("#dataviz_graph").select("svg").append("g");h.select("#dataviz_graph").call(h.zoom().on("zoom",(function(){g.attr("transform",h.event.transform)})));var p=h.forceLink().id((function(e){return e.id})),f=h.forceSimulation().force("charge",h.forceManyBody().strength(-300)).force("center",h.forceCenter(u/2,d/2)).force("link",p),m=g.append("g").attr("class","links").selectAll("line").data(s).enter().append("line").attr("stroke-dasharray",3).attr("stroke","rgba(50, 50, 50, 0.4)");function v(e){return"disease"===e.type?"red":"protein"===e.type?"#1589FF":"green"}var y=g.append("g").attr("class","nodes").selectAll("circle").data((b=r,b.filter((function(e){return"protein"===e.type})))).enter().append("circle").attr("r",8).attr("fill",v).on("mouseover",(function(e){h.select(this).style("fill","yellow")})).on("mouseout",(function(e){h.select(this).style("fill","#1589FF")})),E=g.append("g").attr("class","nodes").selectAll("rect").data(function(e){return e.filter((function(e){return"disease"===e.type}))}(r)).enter().append("rect").attr("width",15).attr("height",15).attr("fill",v).on("mouseover",(function(e){h.select(this).style("fill","yellow")})).on("mouseout",(function(e){h.select(this).style("fill","red")})),w=g.append("g").attr("class","nodes").selectAll("circle").data(function(e){return e.filter((function(e){return"drug"===e.type}))}(r)).enter().append("circle").attr("r",6).attr("fill",v).on("mouseover",(function(e){h.select(this).style("fill","yellow")})).on("mouseout",(function(e){h.select(this).style("fill","#348017")})),x=g.append("g").attr("class","texts").selectAll("text").data(r).enter().append("text").text((function(e){return e.name})).attr("font-size",11).attr("dx",15).attr("dy",4).attr("fill",v).attr("font-weight","bold");f.nodes(r).on("tick",(function(){y.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})),E.attr("x",(function(e){return e.x})).attr("y",(function(e){return e.y})),w.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})),x.attr("x",(function(e){return e.x})).attr("y",(function(e){return e.y})),m.attr("x1",(function(e){return e.source.x})).attr("y1",(function(e){return e.source.y})).attr("x2",(function(e){return e.target.x})).attr("y2",(function(e){return e.target.y}))})),f.force("link").links(s)}var b}}]),n}(a.Component),m=n(13),v=n(48),y=n(47),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.props.hideChart();var t=a.props.suggestions,n=e.currentTarget.value,r=t.filter((function(e){return 0===e.toLowerCase().indexOf(n.toLowerCase())}));a.setState({activeSuggestion:0,filteredSuggestions:r,showSuggestions:!0,userInput:e.currentTarget.value})},a.onClick=function(e){a.setState({activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:e.currentTarget.innerText}),a.props.handler(e,e.currentTarget.innerText)},a.onKeyDown=function(e){var t=a.state,n=t.activeSuggestion,r=t.filteredSuggestions;if(13===e.keyCode)a.setState({activeSuggestion:0,showSuggestions:!1,userInput:r[n]});else if(38===e.keyCode){if(0===n)return;a.setState({activeSuggestion:n-1})}else if(40===e.keyCode){if(n-1===r.length)return;a.setState({activeSuggestion:n+1})}},a.state={activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e,t,n=this.onChange,s=this.onClick,i=this.onKeyDown,o=this.state,c=o.activeSuggestion,l=o.filteredSuggestions,u=o.showSuggestions,d=o.userInput;return u&&d&&(t=l.length?r.a.createElement(v.a,{className:"suggestions"},l.map((function(e,t){var n;return t===c&&(n="suggestion-active"),r.a.createElement(v.a.Item,{className:n,key:e,onClick:s},e)}))):r.a.createElement(v.a,{className:"no-suggestions"},r.a.createElement(v.a.Item,null,"No suggestions, you're on your own!"))),r.a.createElement(a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicDisease"},r.a.createElement(y.a.Control,(e={type:"text",placeholder:"Enter disease name (i.e COVID-19)"},Object(m.a)(e,"type","text"),Object(m.a)(e,"onChange",n),Object(m.a)(e,"onKeyDown",i),Object(m.a)(e,"value",d),e)),t)))}}]),n}(a.Component);E.defaultProps={suggestions:[]};var w=E,x=(n(40),n(41),n(45)),b=n(50),k=n(49),S=n(46),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).AutoCompleteHandler=a.AutoCompleteHandler.bind(Object(l.a)(a)),a.hideChart=a.hideChart.bind(Object(l.a)(a)),a.state={value:"",disease:"",jsonData:{},jsonDrugs:{},drugs:[],view:!1,open:!1},a}return Object(c.a)(n,[{key:"hideChart",value:function(){this.setState({view:!1,open:!1})}},{key:"AutoCompleteHandler",value:function(e,t){this.setState({disease:t,value:t})}},{key:"componentDidMount",value:function(){var e=this;console.log("mounting APP");var t="https://api.jsonbin.io/b/5f74bd117243cd7e824742f6";fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"secret-key":"$2b$10$ySWzEs3S9JUHfDfnYERQc.EsFmQlIYLt5Jab9bvVm3zU6g1dvMJ8m"}}).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{jsonData:t}})),e.getDiseases(t)})),t="https://api.jsonbin.io/b/5f762e2c7243cd7e82484f0c",fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"secret-key":"$2b$10$ySWzEs3S9JUHfDfnYERQc.EsFmQlIYLt5Jab9bvVm3zU6g1dvMJ8m"}}).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{jsonDrugs:t}}))}))}},{key:"getDiseases",value:function(e){var t=[];for(var n in e)t.push(n);this.setState((function(e){return{diseases:t}}))}},{key:"onInput",value:function(e){e.preventDefault(),this.setState({value:e.target.value,view:!1,open:!1}),console.log("key")}},{key:"getData",value:function(){var e=this,t=this.state.jsonData[this.state.value],n={};for(var a in t)n[t[a]]=this.state.jsonDrugs[t[a]];this.setState((function(t){return{proteins:e.state.jsonData[e.state.value],disease:e.state.value,drugs:n}}))}},{key:"onEnter",value:function(e){console.log("enter"),this.getData(),e.preventDefault(),this.setState((function(e){return{view:!0,open:!0}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(x.a,{fluid:!0,style:{backgroundImage:"url(https://eskipaper.com/images/high-res-abstract-backgrounds-1.jpg)"}},r.a.createElement(g.a,null,r.a.createElement(p.a,{md:3,xs:12},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Ben-Gurion_University_of_the_Negev.svg/1200px-Ben-Gurion_University_of_the_Negev.svg.png",alt:"",style:{height:"150px",width:"150px",paddingTop:"10px"}})),r.a.createElement(p.a,{md:6,xs:12},r.a.createElement("h1",{style:{display:"flex",justifyContent:"center",fontFamily:"Arial Black",color:"white"}},"Disease - Protein - Drug"," "),r.a.createElement("br",null),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement(p.a,{md:5,xs:8,style:{paddingRight:"0px"}},r.a.createElement(w,{suggestions:this.state.diseases,handler:this.AutoCompleteHandler,hideChart:this.hideChart})),r.a.createElement(p.a,{md:1,xs:3,style:{paddingLeft:"0px"}},r.a.createElement(b.a,{variant:"primary",className:"button",onClick:function(t){e.getData(),e.onEnter(t)},"aria-controls":"example-fade-text","aria-expanded":this.state.open}," ","SUBMIT ",r.a.createElement("br",null))))),r.a.createElement(p.a,{xs:3},r.a.createElement(k.a,{in:this.state.open},r.a.createElement(S.a,{style:{marginTop:"50px",height:"auto",width:"200px",color:"white",fontSize:"19px",display:"flex",justifyContent:"center"}},this.state.view?r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"r-cl"},"Disease")),r.a.createElement("tr",null,r.a.createElement("td",{className:"c-p-cl"},"Protein")),r.a.createElement("tr",null,r.a.createElement("td",{className:"c-d-cl"},"Drug"))):null)))),r.a.createElement(g.a,{style:{marginTop:"20px",width:"100%"}},r.a.createElement(p.a,{style:{width:"100%"}},r.a.createElement(k.a,{in:this.state.open},r.a.createElement("div",{id:"example-fade-text"},r.a.createElement(f,{jsonData:this.state.jsonData,diseaseName:this.state.disease,proteins:this.state.proteins,drugs:this.state.drugs}))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.45409d66.chunk.js.map