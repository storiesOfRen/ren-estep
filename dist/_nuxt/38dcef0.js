(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8],{231:function(t,e,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(86).default)("69382bd1",content,!0,{sourceMap:!1})},232:function(t,e,r){"use strict";r(231)},233:function(t,e,r){var o=r(85)(!1);o.push([t.i,".PostCard{border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.65);margin:1rem 0;padding:.25rem 1rem .5rem;width:85%}@media(max-width:960px){.PostCard{width:90%}}.PostCard_title{margin-bottom:10px}.PostCard_title-link{color:var(--color-primary);text-decoration:none;border:2px dotted transparent;padding:.15rem .25rem}.PostCard_title-link:focus,.PostCard_title-link:hover{outline:0;border:2px dotted var(--color-primary);border-radius:6px}.PostCard_tags{display:flex;padding:0}.PostCard_tags li{border:1px solid var(--color-primary);border-radius:20px;list-style:none;margin:0 .25rem;padding:5px}",""]),t.exports=o},237:function(t,e,r){var content=r(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(86).default)("28f1127f",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,default:""},description:{type:String,default:""},url:{type:String,default:""},tags:{type:Array,default:function(){return[]}}}},n=(r(232),r(13)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"PostCard"},[r("h3",{staticClass:"PostCard_title"},[r("a",{staticClass:"PostCard_title-link",attrs:{target:"blank",href:t.url}},[t._v(t._s(t.title))])]),t._v(" "),r("ul",{staticClass:"PostCard_tags"},t._l(t.tags,(function(e){return r("li",{key:e},[t._v("#"+t._s(e))])})),0),t._v(" "),r("p",[t._v(t._s(t.description))])])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,r){"use strict";r(237)},253:function(t,e,r){var o=r(85)(!1);o.push([t.i,".LinkHoverFocus{border:1px dotted transparent;height:2em;margin:1em;transition:transform .2s;width:2em}.LinkHoverFocus a{align-items:center;display:flex;height:inherit;justify-content:center;width:inherit}.LinkHoverFocus svg{fill:var(--color-primary)}.LinkHoverFocus:hover,.LinkHoverFocus[focus-within]{border:1px dotted #b200fd;border-radius:50%;transform:scale(1.5)}.LinkHoverFocus:focus-within,.LinkHoverFocus:hover{border:1px dotted #b200fd;border-radius:50%;transform:scale(1.5)}.srOnly{height:0;width:0;font-size:0}.Content{width:80ch}@media(max-width:960px){.Content{border-left:0;border-top:2px solid var(--color-primary);max-height:70vh;overflow:auto;width:100%}}.Card{margin-top:1%;padding:1.5rem 1.5rem 0;width:90%}@media(max-width:960px){.Card{padding:0}}.Card_title{font-size:2rem}.Card_text{font-size:1.25rem;max-width:80ch}.Blog{padding:1.5rem}@media(max-width:960px){.Blog{padding:0}}.Blog_entries{display:flex;flex-direction:column;list-style:none;height:50vh;overflow:auto;padding:0 0 0 .5rem}@media(max-width:960px){.Blog_entries{max-height:100%;padding-left:0}}",""]),t.exports=o},259:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(48),r(11),r(59),{data:function(){return{intro:"I am a creator of things...",snippet:" I was once told that you should be able to tell someone concisely what\n        you do in the time it takes you to ride in an elevator. These are some of the things I'm about:",description:"Accessibility, Web Development, Drawing, Art, & Cardio.",blogPosts:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dev.to/api/articles?username=stories_of_ren").then((function(t){return t.json()}));case 2:t.blogPosts=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),head:function(){return{title:"Creator of Things | Ren Estep"}}}),l=(r(252),r(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Content"},[r("section",{attrs:{"aria-label":"Hero Section"}},[r("div",{staticClass:"Card"},[r("h1",{staticClass:"Card_title"},[t._v(t._s(t.intro))]),t._v(" "),r("p",{staticClass:"Card_text"},[t._v("\n        "+t._s(t.snippet)+"\n      ")]),t._v(" "),r("p",{staticClass:"Card_text"},[r("strong",[t._v(t._s(t.description))])])])]),t._v(" "),r("section",{staticClass:"Blog",attrs:{"aria-label":"Blog Section"}},[t._m(0),t._v(" "),r("ul",{staticClass:"Blog_entries"},t._l(t.blogPosts,(function(t){return r("li",{key:t.id},[r("PostCard",{attrs:{title:t.title,url:t.url,description:t.description,tags:t.tag_list}})],1)})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[t._v("\n      Oh! Did I mention I have a blog?\n      "),r("span",{staticClass:"srOnly"},[t._v("These will open in a new tab")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PostCard:r(239).default})}}]);