(this.webpackJsonpcovid_19=this.webpackJsonpcovid_19||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/covid.cc494aef.png"},21:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),r=a(5),c=a(4),o=a(17),u=a.n(o),m=a(0),i=a.n(m),s=(a(6),a(18)),h=a.n(s);var d=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:h.a,className:"logo",alt:"covid logo"}),i.a.createElement("h1",{className:"hed"},"Covid 19 live updates"),i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("br",null))},E=a(7),p=a.n(E),v=a(19),f=a(20),b=a.n(f),D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.summary,t=this.props.currentDate;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"NewConfirmed"},i.a.createElement("h3",null,"New Confirmed "),i.a.createElement("h1",null,e.NewConfirmed),i.a.createElement("h4",null,new Date(t).toDateString())),i.a.createElement("div",{className:"TotalConfirmed"},i.a.createElement("h3",null,"Total Confirmed "),i.a.createElement("h1",null,e.TotalConfirmed),i.a.createElement("h4",null,new Date(t).toDateString())),i.a.createElement("div",{className:"NewDeaths"},i.a.createElement("h3",null,"New Deaths "),i.a.createElement("h1",null,e.NewDeaths),i.a.createElement("h4",null,new Date(t).toDateString())),i.a.createElement("div",{className:"TotalDeaths"},i.a.createElement("h3",null,"Toal Deaths "),i.a.createElement("h1",null,e.TotalDeaths),i.a.createElement("h4",null,new Date(t).toDateString())),i.a.createElement("div",{className:"NewRecovered"},i.a.createElement("h3",null,"New Recovered "),i.a.createElement("h1",null,e.NewRecovered),i.a.createElement("h4",null,new Date(t).toDateString())),i.a.createElement("div",{className:"TotalRecovered"},i.a.createElement("h3",null,"Total Recovered "),i.a.createElement("h1",null,e.NewConfirmed),i.a.createElement("h4",null,new Date(t).toDateString())))}}]),a}(m.Component),w=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.country;return i.a.createElement("tr",null,i.a.createElement("td",null,e.Country),i.a.createElement("td",null,e.TotalConfirmed),i.a.createElement("td",null,e.NewConfirmed),i.a.createElement("td",null,e.TotalRecovered),i.a.createElement("td",null,e.TotalDeaths))}}]),a}(m.Component),y=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={Countaries:{},global:{},currentDate:"",loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.covid19api.com/summary");case 2:t=e.sent,this.setState({Countaries:t.data.Countries,global:t.data.Global,currentDate:t.data.Date,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?i.a.createElement("h1",null,"loading...."):i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{summary:this.state.global,currentDate:this.state.currentDate}),i.a.createElement("h1",{className:"contry"},"  Country wise  Updates "),i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Country"),i.a.createElement("th",null,"Total Confirmed"),i.a.createElement("th",null,"new Confirmed"),i.a.createElement("th",null,"Total recovered"),i.a.createElement("th",null,"Total Death"))),i.a.createElement("tbody",null,this.state.Countaries.map((function(e){return i.a.createElement(w,{country:e,key:e.Country})})))))}}]),a}(m.Component),C=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null),i.a.createElement(y,null)))}}]),a}(m.Component);u.a.render(i.a.createElement(C,null),document.getElementById("root"))},6:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.2dcb00d1.chunk.js.map