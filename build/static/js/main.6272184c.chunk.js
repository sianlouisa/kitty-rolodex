(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(20)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),s=t.n(o),c=(t(14),t(3)),i=t(4),l=t(6),u=t(5),m=t(7),d=(t(15),t(16),t(17),function(e){var n=e.monster;return a.createElement("div",{className:"card-container"},a.createElement("img",{alt:"monster",className:"card-img",src:"https://robohash.org/".concat(n.id,"?set=set4")}),a.createElement("h2",null,n.name),a.createElement("p",null,n.email))}),h=function(e){var n=e.monsters;return n.length<=0?a.createElement("h1",{style:{color:"#ff8fa0"}},"No users found :("):a.createElement("div",{className:"card-list"},n.map(function(e){return a.createElement(d,{monster:e,key:e.id})}))},f=(t(18),function(e){var n=e.handleSearchChange,t=e.placeholder,r=e.autoFocus,o=e.className;return a.createElement("input",{type:"search",className:o,autoFocus:r,placeholder:t,onChange:n})}),g=(t(19),function(e){var n=e.handleSort,t=e.isSortedAscending;return a.createElement("div",{className:"sort-options"},a.createElement("button",{onClick:n},t?"Sort Ascending":"Sort Descending"))}),p=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).compareNamesAscending=function(e,n){var t=e.name.toLowerCase(),a=n.name.toLowerCase(),r=0;return t>a?r=1:t<a&&(r=-1),r},e.compareNamesDescending=function(e,n){var t=e.name.toLowerCase(),a=n.name.toLowerCase(),r=0;return t<a?r=1:t>a&&(r=-1),r},e.onChange=function(n){return e.setState({searchField:n.target.value})},e.handleSort=function(n){var t=e.state,a=t.monsters;if(t.isSortedAscending){var r=a.sort(e.compareNamesDescending);e.setState({monsters:r,isSortedAscending:!1})}else{var o=a.sort(e.compareNamesAscending);e.setState({monsters:o,isSortedAscending:!0})}},e.state={monsters:[],searchField:"",isSortedAscending:!1},e}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({monsters:n})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=e.isSortedAscending,o=n.filter(function(e){var n=e.name.toLowerCase(),a=e.email.toLowerCase(),r=t.toLowerCase();return n.includes(r)||a.includes(r)});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Kitty Rolodex"),r.a.createElement(f,{handleSearchChange:this.onChange,placeholder:"Search users...",autoFocus:!0,className:"search-field"}),o.length>=1&&r.a.createElement(g,{handleSort:this.handleSort,isSortedAscending:a}),r.a.createElement(h,{monsters:o}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.6272184c.chunk.js.map