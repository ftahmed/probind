if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),a=n.data(i);if(!a){var r=e.extend({},o,n.data(),"object"==typeof t&&t);n.data(i,a=new s(n,r))}if("string"==typeof a){if(void 0===a[t])throw new Error("No method named "+t);a[t]()}})}var i="lte.boxrefresh",o={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',onLoadStart:function(){},onLoadDone:function(e){return e}},n={data:'[data-widget="box-refresh"]'},s=function(t,i){if(this.element=t,this.options=i,this.$overlay=e(i.overlay),""===i.source)throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(),this.load()};s.prototype.load=function(){this._addOverlay(),this.options.onLoadStart.call(e(this)),e.get(this.options.source,this.options.params,function(t){this.options.loadInContent&&e(this.options.content).html(t),this.options.onLoadDone.call(e(this),t),this._removeOverlay()}.bind(this),""!==this.options.responseType&&this.options.responseType)},s.prototype._setUpListeners=function(){e(this.element).on("click",n.trigger,function(e){e&&e.preventDefault(),this.load()}.bind(this))},s.prototype._addOverlay=function(){e(this.element).append(this.$overlay)},s.prototype._removeOverlay=function(){e(this.element).remove(this.$overlay)};var a=e.fn.boxRefresh;e.fn.boxRefresh=t,e.fn.boxRefresh.Constructor=s,e.fn.boxRefresh.noConflict=function(){return e.fn.boxRefresh=a,this},e(window).on("load",function(){e(n.data).each(function(){t.call(e(this))})})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var n=e(this),s=n.data(i);if(!s){var a=e.extend({},o,n.data(),"object"==typeof t&&t);n.data(i,s=new r(n,a))}if("string"==typeof t){if(void 0===s[t])throw new Error("No method named "+t);s[t]()}})}var i="lte.boxwidget",o={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},n={data:".box",collapsed:".collapsed-box",header:".box-header",body:".box-body",footer:".box-footer",tools:".box-tools"},s={collapsed:"collapsed-box"},a={collapsed:"collapsed.boxwidget",expanded:"expanded.boxwidget",removed:"removed.boxwidget"},r=function(e,t){this.element=e,this.options=t,this._setUpListeners()};r.prototype.toggle=function(){e(this.element).is(n.collapsed)?this.expand():this.collapse()},r.prototype.expand=function(){var t=e.Event(a.expanded),i=this.options.collapseIcon,o=this.options.expandIcon;e(this.element).removeClass(s.collapsed),e(this.element).children(n.header+", "+n.body+", "+n.footer).children(n.tools).find("."+o).removeClass(o).addClass(i),e(this.element).children(n.body+", "+n.footer).slideDown(this.options.animationSpeed,function(){e(this.element).trigger(t)}.bind(this))},r.prototype.collapse=function(){var t=e.Event(a.collapsed),i=this.options.collapseIcon,o=this.options.expandIcon;e(this.element).children(n.header+", "+n.body+", "+n.footer).children(n.tools).find("."+i).removeClass(i).addClass(o),e(this.element).children(n.body+", "+n.footer).slideUp(this.options.animationSpeed,function(){e(this.element).addClass(s.collapsed),e(this.element).trigger(t)}.bind(this))},r.prototype.remove=function(){var t=e.Event(a.removed);e(this.element).slideUp(this.options.animationSpeed,function(){e(this.element).trigger(t),e(this.element).remove()}.bind(this))},r.prototype._setUpListeners=function(){var t=this;e(this.element).on("click",this.options.collapseTrigger,function(i){return i&&i.preventDefault(),t.toggle(e(this)),!1}),e(this.element).on("click",this.options.removeTrigger,function(i){return i&&i.preventDefault(),t.remove(e(this)),!1})};var d=e.fn.boxWidget;e.fn.boxWidget=t,e.fn.boxWidget.Constructor=r,e.fn.boxWidget.noConflict=function(){return e.fn.boxWidget=d,this},e(window).on("load",function(){e(n.data).each(function(){t.call(e(this))})})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var n=e(this),s=n.data(i);if(!s){var a=e.extend({},o,n.data(),"object"==typeof t&&t);n.data(i,s=new r(n,a))}"string"==typeof t&&s.toggle()})}var i="lte.controlsidebar",o={slide:!0},n={sidebar:".control-sidebar",data:'[data-toggle="control-sidebar"]',open:".control-sidebar-open",bg:".control-sidebar-bg",wrapper:".wrapper",content:".content-wrapper",boxed:".layout-boxed"},s={open:"control-sidebar-open",fixed:"fixed"},a={collapsed:"collapsed.controlsidebar",expanded:"expanded.controlsidebar"},r=function(e,t){this.element=e,this.options=t,this.hasBindedResize=!1,this.init()};r.prototype.init=function(){e(this.element).is(n.data)||e(this).on("click",this.toggle),this.fix(),e(window).resize(function(){this.fix()}.bind(this))},r.prototype.toggle=function(t){t&&t.preventDefault(),this.fix(),e(n.sidebar).is(n.open)||e("body").is(n.open)?this.collapse():this.expand()},r.prototype.expand=function(){this.options.slide?e(n.sidebar).addClass(s.open):e("body").addClass(s.open),e(this.element).trigger(e.Event(a.expanded))},r.prototype.collapse=function(){e("body, "+n.sidebar).removeClass(s.open),e(this.element).trigger(e.Event(a.collapsed))},r.prototype.fix=function(){e("body").is(n.boxed)&&this._fixForBoxed(e(n.bg))},r.prototype._fixForBoxed=function(t){t.css({position:"absolute",height:e(n.wrapper).height()})};var d=e.fn.controlSidebar;e.fn.controlSidebar=t,e.fn.controlSidebar.Constructor=r,e.fn.controlSidebar.noConflict=function(){return e.fn.controlSidebar=d,this},e(document).on("click",n.data,function(i){i&&i.preventDefault(),t.call(e(this),"toggle")})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var o=e(this),n=o.data(i);n||o.data(i,n=new s(o)),"string"==typeof t&&n.toggle(o)})}var i="lte.directchat",o={data:'[data-widget="chat-pane-toggle"]',box:".direct-chat"},n={open:"direct-chat-contacts-open"},s=function(e){this.element=e};s.prototype.toggle=function(e){e.parents(o.box).first().toggleClass(n.open)};var a=e.fn.directChat;e.fn.directChat=t,e.fn.directChat.Constructor=s,e.fn.directChat.noConflict=function(){return e.fn.directChat=a,this},e(document).on("click",o.data,function(i){i&&i.preventDefault(),t.call(e(this),"toggle")})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var n=e(this),s=n.data(i);if(!s){var r=e.extend({},o,n.data(),"object"==typeof t&&t);n.data(i,s=new a(r))}if("string"==typeof t){if(void 0===s[t])throw new Error("No method named "+t);s[t]()}})}var i="lte.layout",o={slimscroll:!0,resetHeight:!0},n={wrapper:".wrapper",contentWrapper:".content-wrapper",layoutBoxed:".layout-boxed",mainFooter:".main-footer",mainHeader:".main-header",sidebar:".sidebar",controlSidebar:".control-sidebar",fixed:".fixed",sidebarMenu:".sidebar-menu",logo:".main-header .logo"},s={fixed:"fixed",holdTransition:"hold-transition"},a=function(e){this.options=e,this.bindedResize=!1,this.activate()};a.prototype.activate=function(){this.fix(),this.fixSidebar(),e("body").removeClass(s.holdTransition),this.options.resetHeight&&e("body, html, "+n.wrapper).css({height:"auto","min-height":"100%"}),this.bindedResize||(e(window).resize(function(){this.fix(),this.fixSidebar(),e(n.logo+", "+n.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(),this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0),e(n.sidebarMenu).on("expanded.tree",function(){this.fix(),this.fixSidebar()}.bind(this)),e(n.sidebarMenu).on("collapsed.tree",function(){this.fix(),this.fixSidebar()}.bind(this))},a.prototype.fix=function(){e(n.layoutBoxed+" > "+n.wrapper).css("overflow","hidden");var t=e(n.mainFooter).outerHeight()||0,i=e(n.mainHeader).outerHeight()+t,o=e(window).height(),a=e(n.sidebar).height()||0;if(e("body").hasClass(s.fixed))e(n.contentWrapper).css("min-height",o-t);else{var r;o>=a?(e(n.contentWrapper).css("min-height",o-i),r=o-i):(e(n.contentWrapper).css("min-height",a),r=a);var d=e(n.controlSidebar);void 0!==d&&d.height()>r&&e(n.contentWrapper).css("min-height",d.height())}},a.prototype.fixSidebar=function(){if(!e("body").hasClass(s.fixed))return void(void 0!==e.fn.slimScroll&&e(n.sidebar).slimScroll({destroy:!0}).height("auto"));this.options.slimscroll&&void 0!==e.fn.slimScroll&&e(n.sidebar).slimScroll({height:e(window).height()-e(n.mainHeader).height()+"px"})};var r=e.fn.layout;e.fn.layout=t,e.fn.layout.Constuctor=a,e.fn.layout.noConflict=function(){return e.fn.layout=r,this},e(window).on("load",function(){t.call(e("body"))})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var n=e(this),s=n.data(i);if(!s){var a=e.extend({},o,n.data(),"object"==typeof t&&t);n.data(i,s=new r(a))}"toggle"===t&&s.toggle()})}var i="lte.pushmenu",o={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},n={collapsed:".sidebar-collapse",open:".sidebar-open",mainSidebar:".main-sidebar",contentWrapper:".content-wrapper",searchInput:".sidebar-form .form-control",button:'[data-toggle="push-menu"]',mini:".sidebar-mini",expanded:".sidebar-expanded-on-hover",layoutFixed:".fixed"},s={collapsed:"sidebar-collapse",open:"sidebar-open",mini:"sidebar-mini",expanded:"sidebar-expanded-on-hover",expandFeature:"sidebar-mini-expand-feature",layoutFixed:"fixed"},a={expanded:"expanded.pushMenu",collapsed:"collapsed.pushMenu"},r=function(e){this.options=e,this.init()};r.prototype.init=function(){(this.options.expandOnHover||e("body").is(n.mini+n.layoutFixed))&&(this.expandOnHover(),e("body").addClass(s.expandFeature)),e(n.contentWrapper).click(function(){e(window).width()<=this.options.collapseScreenSize&&e("body").hasClass(s.open)&&this.close()}.bind(this)),e(n.searchInput).click(function(e){e.stopPropagation()})},r.prototype.toggle=function(){var t=e(window).width(),i=!e("body").hasClass(s.collapsed);t<=this.options.collapseScreenSize&&(i=e("body").hasClass(s.open)),i?this.close():this.open()},r.prototype.open=function(){e(window).width()>this.options.collapseScreenSize?e("body").removeClass(s.collapsed).trigger(e.Event(a.expanded)):e("body").addClass(s.open).trigger(e.Event(a.expanded))},r.prototype.close=function(){e(window).width()>this.options.collapseScreenSize?e("body").addClass(s.collapsed).trigger(e.Event(a.collapsed)):e("body").removeClass(s.open+" "+s.collapsed).trigger(e.Event(a.collapsed))},r.prototype.expandOnHover=function(){e(n.mainSidebar).hover(function(){e("body").is(n.mini+n.collapsed)&&e(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){e("body").is(n.expanded)&&this.collapse()}.bind(this))},r.prototype.expand=function(){setTimeout(function(){e("body").removeClass(s.collapsed).addClass(s.expanded)},this.options.expandTransitionDelay)},r.prototype.collapse=function(){setTimeout(function(){e("body").removeClass(s.expanded).addClass(s.collapsed)},this.options.expandTransitionDelay)};var d=e.fn.pushMenu;e.fn.pushMenu=t,e.fn.pushMenu.Constructor=r,e.fn.pushMenu.noConflict=function(){return e.fn.pushMenu=d,this},e(document).on("click",n.button,function(i){i.preventDefault(),t.call(e(this),"toggle")}),e(window).on("load",function(){t.call(e(n.button))})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var n=e(this),s=n.data(i);if(!s){var r=e.extend({},o,n.data(),"object"==typeof t&&t);n.data(i,s=new a(n,r))}if("string"==typeof s){if(void 0===s[t])throw new Error("No method named "+t);s[t]()}})}var i="lte.todolist",o={onCheck:function(e){return e},onUnCheck:function(e){return e}},n={data:'[data-widget="todo-list"]'},s={done:"done"},a=function(e,t){this.element=e,this.options=t,this._setUpListeners()};a.prototype.toggle=function(e){if(e.parents(n.li).first().toggleClass(s.done),!e.prop("checked"))return void this.unCheck(e);this.check(e)},a.prototype.check=function(e){this.options.onCheck.call(e)},a.prototype.unCheck=function(e){this.options.onUnCheck.call(e)},a.prototype._setUpListeners=function(){var t=this;e(this.element).on("change ifChanged","input:checkbox",function(){t.toggle(e(this))})};var r=e.fn.todoList;e.fn.todoList=t,e.fn.todoList.Constructor=a,e.fn.todoList.noConflict=function(){return e.fn.todoList=r,this},e(window).on("load",function(){e(n.data).each(function(){t.call(e(this))})})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var n=e(this);if(!n.data(i)){var s=e.extend({},o,n.data(),"object"==typeof t&&t);n.data(i,new r(n,s))}})}var i="lte.tree",o={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},n={tree:".tree",treeview:".treeview",treeviewMenu:".treeview-menu",open:".menu-open, .active",li:"li",data:'[data-widget="tree"]',active:".active"},s={open:"menu-open",tree:"tree"},a={collapsed:"collapsed.tree",expanded:"expanded.tree"},r=function(t,i){this.element=t,this.options=i,e(this.element).addClass(s.tree),e(n.treeview+n.active,this.element).addClass(s.open),this._setUpListeners()};r.prototype.toggle=function(e,t){var i=e.next(n.treeviewMenu),o=e.parent(),a=o.hasClass(s.open);o.is(n.treeview)&&(this.options.followLink&&"#"!==e.attr("href")||t.preventDefault(),a?this.collapse(i,o):this.expand(i,o))},r.prototype.expand=function(t,i){var o=e.Event(a.expanded);if(this.options.accordion){var r=i.siblings(n.open),d=r.children(n.treeviewMenu);this.collapse(d,r)}i.addClass(s.open),t.slideDown(this.options.animationSpeed,function(){e(this.element).trigger(o)}.bind(this))},r.prototype.collapse=function(t,i){var o=e.Event(a.collapsed);t.find(n.open).removeClass(s.open),i.removeClass(s.open),t.slideUp(this.options.animationSpeed,function(){t.find(n.open+" > "+n.treeview).slideUp(),e(this.element).trigger(o)}.bind(this))},r.prototype._setUpListeners=function(){var t=this;e(this.element).on("click",this.options.trigger,function(i){t.toggle(e(this),i)})};var d=e.fn.tree;e.fn.tree=t,e.fn.tree.Constructor=r,e.fn.tree.noConflict=function(){return e.fn.tree=d,this},e(window).on("load",function(){e(n.data).each(function(){t.call(e(this))})})}(jQuery),function(e){function t(e,t,n){var s=e[0],a=/er/.test(n)?b:/bl/.test(n)?f:p,r=n==v?{checked:s[p],disabled:s[f],indeterminate:"true"==e.attr(b)||"false"==e.attr(u)}:s[a];if(/^(ch|di|in)/.test(n)&&!r)i(e,a);else if(/^(un|en|de)/.test(n)&&r)o(e,a);else if(n==v)for(a in r)r[a]?i(e,a,!0):o(e,a,!0);else t&&"toggle"!=n||(t||e[x]("ifClicked"),r?s[g]!==l&&o(e,a):i(e,a))}function i(t,i,n){var v=t[0],x=t.parent(),w=i==p,k=i==b,S=i==f,E=k?u:w?h:"enabled",L=s(t,E+a(v[g])),T=s(t,i+a(v[g]));if(!0!==v[i]){if(!n&&i==p&&v[g]==l&&v.name){var j=t.closest("form"),D='input[name="'+v.name+'"]',D=j.length?j.find(D):e(D);D.each(function(){this!==v&&e(this).data(d)&&o(e(this),i)})}k?(v[i]=!0,v[p]&&o(t,p,"force")):(n||(v[i]=!0),w&&v[b]&&o(t,b,!1)),r(t,w,i,n)}v[f]&&s(t,C,!0)&&x.find("."+c).css(C,"default"),x[m](T||s(t,i)||""),S?x.attr("aria-disabled","true"):x.attr("aria-checked",k?"mixed":"true"),x[y](L||s(t,E)||"")}function o(e,t,i){var o=e[0],n=e.parent(),d=t==p,l=t==b,v=t==f,x=l?u:d?h:"enabled",w=s(e,x+a(o[g])),k=s(e,t+a(o[g]));!1!==o[t]&&(!l&&i&&"force"!=i||(o[t]=!1),r(e,d,x,i)),!o[f]&&s(e,C,!0)&&n.find("."+c).css(C,"pointer"),n[y](k||s(e,t)||""),v?n.attr("aria-disabled","false"):n.attr("aria-checked","false"),n[m](w||s(e,x)||"")}function n(t,i){t.data(d)&&(t.parent().html(t.attr("style",t.data(d).s||"")),i&&t[x](i),t.off(".i").unwrap(),e(w+'[for="'+t[0].id+'"]').add(t.closest(w)).off(".i"))}function s(e,t,i){if(e.data(d))return e.data(d).o[t+(i?"":"Class")]}function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e,t,i,o){o||(t&&e[x]("ifToggled"),e[x]("ifChanged")[x]("if"+a(i)))}var d="iCheck",c=d+"-helper",l="radio",p="checked",h="un"+p,f="disabled",u="determinate",b="in"+u,v="update",g="type",m="addClass",y="removeClass",x="trigger",w="label",C="cursor",k=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);e.fn[d]=function(s,a){var r='input[type="checkbox"], input[type="'+l+'"]',h=e(),u=function(t){t.each(function(){var t=e(this);h=t.is(r)?h.add(t):h.add(t.find(r))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(s))return s=s.toLowerCase(),u(this),h.each(function(){var i=e(this);"destroy"==s?n(i,"ifDestroyed"):t(i,!0,s),e.isFunction(a)&&a()});if("object"!=typeof s&&s)return this;var C=e.extend({checkedClass:p,disabledClass:f,indeterminateClass:b,labelHover:!0,aria:!1},s),S=C.handle,E=C.hoverClass||"hover",L=C.focusClass||"focus",T=C.activeClass||"active",j=!!C.labelHover,D=C.labelHoverClass||"hover",U=0|(""+C.increaseArea).replace("%","");return"checkbox"!=S&&S!=l||(r='input[type="'+S+'"]'),-50>U&&(U=-50),u(this),h.each(function(){var s=e(this);n(s);var a=this,r=a.id,h=-U+"%",u=100+2*U+"%",u={position:"absolute",top:h,left:h,display:"block",width:u,height:u,margin:0,padding:0,background:"#fff",border:0,opacity:0},h=k?{position:"absolute",visibility:"hidden"}:U?u:{position:"absolute",opacity:0},b="checkbox"==a[g]?C.checkboxClass||"icheckbox":C.radioClass||"i"+l,S=e(w+'[for="'+r+'"]').add(s.closest(w)),H=!!C.aria,M=d+"-"+Math.random().toString(36).replace("0.",""),_='<div class="'+b+'" '+(H?'role="'+a[g]+'" ':"");S.length&&H&&S.each(function(){_+='aria-labelledby="',this.id?_+=this.id:(this.id=M,_+=M),_+='"'}),_=s.wrap(_+"/>")[x]("ifCreated").parent().append(C.insert),u=e('<ins class="'+c+'"/>').css(u).appendTo(_),s.data(d,{o:C,s:s.attr("style")}).css(h),C.inheritClass&&_[m](a.className||""),C.inheritID&&r&&_.attr("id",d+"-"+r),"static"==_.css("position")&&_.css("position","relative"),t(s,!0,v),S.length&&S.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i",function(i){var o=i[g],n=e(this);if(!a[f]){if("click"==o){if(e(i.target).is("a"))return;t(s,!1,!0)}else j&&(/ut|nd/.test(o)?(_[y](E),n[y](D)):(_[m](E),n[m](D)));if(!k)return!1;i.stopPropagation()}}),s.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[g];return e=e.keyCode,"click"!=t&&("keydown"==t&&32==e?(a[g]==l&&a[p]||(a[p]?o(s,p):i(s,p)),!1):void("keyup"==t&&a[g]==l?!a[p]&&i(s,p):/us|ur/.test(t)&&_["blur"==t?y:m](L)))}),u.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(e){var i=e[g],o=/wn|up/.test(i)?T:E;if(!a[f]){if("click"==i?t(s,!1,!0):(/wn|er|in/.test(i)?_[m](o):_[y](o+" "+T),S.length&&j&&o==E&&S[/ut|nd/.test(i)?y:m](D)),!k)return!1;e.stopPropagation()}})})}}(window.jQuery||window.Zepto);