(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{lWZg:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),i=t("Fe25"),u=function(){function l(){this.filter=[]}return l.prototype.ngOnInit=function(){},l.prototype.onFilterChange=function(l){this.filter=l,this.child.filterData()},l}(),o={title:"Informational Tour"},r=function(){return function(){}}(),a=t("pMnS"),c=t("9AJC"),d=t("UdPE"),s=t("FvYy"),p=t("ZYCi"),m=t("4GxJ"),f=t("Ip0R"),g=t("lBcp"),h=function(){function l(l){this.tagService=l,this.isCollapsed=!0,this.filters=[],this.filterItems=new e.EventEmitter}return l.prototype.ngOnInit=function(){this.getAllTags()},l.prototype.getAllTags=function(){var l=this;this.tagService.getTags().subscribe(function(n){return l.tags=n})},l.prototype.setFilter=function(l,n){if(this.filters.includes(l)){for(var t=0;t<this.filters.length;t++)if(this.filters[t]===l){this.filters.splice(t,1);break}}else this.filters.push(l);n.target.classList.toggle("unselectedTag"),this.filterItems.emit(this.filters)},l}(),v=e["\u0275crt"]({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{margin-bottom:2rem}span[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px;cursor:pointer}.unselectedTag[_ngcontent-%COMP%]{background-color:#fff;color:#343a40;border:1px solid #343a40}"]],data:{}});function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","badge badge-pill badge-dark unselectedTag"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.setFilter(l.context.$implicit.name,t)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.name)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"button",[["class","btn btn-dark"],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,t){var e=!0,i=l.component;return"click"===n&&(e=0!=(i.isCollapsed=!i.isCollapsed)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Filters"])),(l()(),e["\u0275eld"](4,0,null,null,5,"div",[["id","collapseExample"]],[[2,"collapse",null],[2,"show",null]],null,null,null,null)),e["\u0275did"](5,16384,null,0,m.m,[],{collapsed:[0,"collapsed"]},null),(l()(),e["\u0275eld"](6,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](9,278528,null,0,f.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.isCollapsed),l(n,9,0,t.tags)},function(l,n){l(n,2,0,!n.component.isCollapsed),l(n,4,0,!0,!e["\u0275nov"](n,5).collapsed)})}var y=t("syPK"),I=t("jcKA"),F=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{child:0}),(l()(),e["\u0275eld"](1,0,null,null,1,"banner",[],null,null,null,d.b,d.a)),e["\u0275did"](2,114688,null,0,s.a,[p.a],null,null),(l()(),e["\u0275eld"](3,0,null,null,1,"filter",[],null,[[null,"filterItems"]],function(l,n,t){var e=!0;return"filterItems"===n&&(e=!1!==l.component.onFilterChange(t)&&e),e},b,v)),e["\u0275did"](4,114688,null,0,h,[g.a],null,{filterItems:"filterItems"}),(l()(),e["\u0275eld"](5,0,null,null,1,"card",[],null,null,null,y.b,y.a)),e["\u0275did"](6,114688,[[1,4]],0,i.a,[m.x,I.a],{filters:[0,"filters"],whichItem:[1,"whichItem"]},null)],function(l,n){var t=n.component;l(n,2,0),l(n,4,0),l(n,6,0,t.filter,"info")},null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-information",[],null,null,null,k,F)),e["\u0275did"](1,114688,null,0,u,[],null,null)],function(l,n){l(n,1,0)},null)}var x=e["\u0275ccf"]("app-information",u,w,{},{},[]),M=t("PQwL"),R=t("gIcY"),O=t("t/Na"),T=t("PCNd");t.d(n,"InformationModuleNgFactory",function(){return _});var _=e["\u0275cmf"](r,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,c.a,c.b,c.k,c.g,c.h,c.i,c.j,x,M.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[e.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,R.r,R.r,[]),e["\u0275mpd"](4608,m.x,m.x,[e.ComponentFactoryResolver,e.Injector,m.Z,m.y]),e["\u0275mpd"](4608,I.a,I.a,[O.c]),e["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),e["\u0275mpd"](1073742336,p.n,p.n,[[2,p.t],[2,p.k]]),e["\u0275mpd"](1073742336,m.c,m.c,[]),e["\u0275mpd"](1073742336,m.g,m.g,[]),e["\u0275mpd"](1073742336,m.h,m.h,[]),e["\u0275mpd"](1073742336,m.l,m.l,[]),e["\u0275mpd"](1073742336,m.n,m.n,[]),e["\u0275mpd"](1073742336,R.p,R.p,[]),e["\u0275mpd"](1073742336,R.d,R.d,[]),e["\u0275mpd"](1073742336,m.s,m.s,[]),e["\u0275mpd"](1073742336,m.v,m.v,[]),e["\u0275mpd"](1073742336,m.z,m.z,[]),e["\u0275mpd"](1073742336,m.D,m.D,[]),e["\u0275mpd"](1073742336,m.G,m.G,[]),e["\u0275mpd"](1073742336,m.J,m.J,[]),e["\u0275mpd"](1073742336,m.M,m.M,[]),e["\u0275mpd"](1073742336,m.R,m.R,[]),e["\u0275mpd"](1073742336,m.V,m.V,[]),e["\u0275mpd"](1073742336,m.W,m.W,[]),e["\u0275mpd"](1073742336,m.X,m.X,[]),e["\u0275mpd"](1073742336,m.A,m.A,[]),e["\u0275mpd"](1073742336,T.a,T.a,[]),e["\u0275mpd"](1073742336,r,r,[]),e["\u0275mpd"](1024,p.i,function(){return[[{path:"",component:u,pathMatch:"full",data:o}]]},[])])})}}]);