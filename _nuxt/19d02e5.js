(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,3,4],{315:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("1d3c57aa",content,!0,{sourceMap:!1})},316:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("dc5542b8",content,!0,{sourceMap:!1})},317:function(t,e,r){"use strict";r.r(e);var n=r(2).default.extend({props:{icon:{type:String,required:!0}}}),o=r(25),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:"fa fa-"+t.icon,attrs:{"aria-hidden":"true"}})}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,r){"use strict";r(315)},319:function(t,e,r){var n=r(40)(!1);n.push([t.i,".back{font-size:20px}",""]),t.exports=n},320:function(t,e,r){"use strict";r.r(e);var n=r(2).default.extend({props:{to:{default:"/menu"}}}),o=(r(318),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"back",attrs:{to:t.to}},[r("FaIcon",{attrs:{icon:"arrow-left"}}),t._v(" Back")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FaIcon:r(317).default})},321:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(31),o=r(71);function c(){Object(n.d)((function(){var t=Object(n.g)();Object(o.a)().viewPage(t)}))}},322:function(t,e,r){"use strict";r(316)},323:function(t,e,r){var n=r(40)(!1);n.push([t.i,".project{text-align:center}.project__description{margin-top:48px;margin-bottom:48px}.project__screenshot{max-width:100%;-o-object-fit:contain;object-fit:contain;margin-top:12px}.project__achievements{text-align:left}.project__achievement{margin-top:12px}.project__link_container{margin-left:18px;text-align:left}.project__link{color:#b2ffff;display:block}.project__title{text-transform:uppercase;color:#ffc1cc}.project__header{text-transform:uppercase;color:#90ee90}",""]),t.exports=n},324:function(t,e,r){"use strict";r.r(e);var n=r(2).default.extend({props:{project:{type:Object,required:!0},id:{type:String,required:!0}}}),o=(r(322),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("h1",{staticClass:"project__title"},[t._v(t._s(t.project.title))]),t._v(" "),r("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))]),t._v(" "),r("h2",{staticClass:"project__header"},[t._v("ACHIEVEMENTS")]),t._v(" "),r("ul",{staticClass:"project__achievements"},t._l(t.project.achievements,(function(e,n){return r("li",{key:"a"+n,staticClass:"project__achievement"},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),t.project.screenshots.length?r("h2",{staticClass:"project__header"},[t._v("SCREENSHOTS")]):t._e(),t._v(" "),t._l(t.project.screenshots,(function(s,e){return r("p",{key:"s"+e},[r("img",{staticClass:"project__screenshot",attrs:{src:"/screenshots/"+t.id+"/"+String(e+1).padStart(3,"0")+".png",alt:s}}),t._v(" "),r("br"),t._v("\n    "+t._s(s)+"\n  ")])})),t._v(" "),t.project.links.length?r("h2",{staticClass:"project__header"},[t._v("LINKS")]):t._e(),t._v(" "),t._l(t.project.links,(function(e,n){return r("h4",{key:"p"+n,staticClass:"project__link_container"},[r("a",{staticClass:"project__link",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))])])})),t._v(" "),r("div",{staticClass:"project__back"},[r("Back",{attrs:{to:"/projects"}})],1)],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Back:r(320).default})},356:function(t){t.exports=JSON.parse('{"id":"myportfolio2014","title":"My Portfolio (2014)","description":"This website serves as my self-introduction to other people. It can be viewed on desktop, tablet or mobile devices. I also abstract project listings and descriptions into JSON files so that I can update the site easily in the future.","achievements":["Use Twitter Bootstrap for responsive web design","Save project descriptions and links in JSON, and retrive them via jQuery AJAX methods when user clicks the project detail link"],"screenshots":["support mobile devices"],"links":[{"name":"Project GitHub","url":"https://github.com/fsworld009/fsworld009.github.io_2014"}]}')},385:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(31),c=r(321),l=r(356),_=n.default.extend({setup:function(){return Object(c.a)(),{project:Object(o.e)(l)}}}),f=r(25),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ProjectPage",{attrs:{project:t.project,id:"myportfolio2014"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectPage:r(324).default})}}]);