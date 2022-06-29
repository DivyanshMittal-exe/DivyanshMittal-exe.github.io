import{b as dt,c as lt,g as Fe,S as vt,a as mt}from"./ScrollToPlugin.bccbbdfe.js";var gt="tippy-box",je="tippy-content",ht="tippy-backdrop",We="tippy-arrow",ke="tippy-svg-arrow",L={passive:!0,capture:!0},$e=function(){return document.body};function re(e,r,i){if(Array.isArray(e)){var s=e[r];return s==null?Array.isArray(i)?i[r]:i:s}return e}function ce(e,r){var i={}.toString.call(e);return i.indexOf("[object")===0&&i.indexOf(r+"]")>-1}function qe(e,r){return typeof e=="function"?e.apply(void 0,r):e}function Ie(e,r){if(r===0)return e;var i;return function(s){clearTimeout(i),i=setTimeout(function(){e(s)},r)}}function bt(e){return e.split(/\s+/).filter(Boolean)}function I(e){return[].concat(e)}function Re(e,r){e.indexOf(r)===-1&&e.push(r)}function yt(e){return e.filter(function(r,i){return e.indexOf(r)===i})}function Tt(e){return e.split("-")[0]}function K(e){return[].slice.call(e)}function Ue(e){return Object.keys(e).reduce(function(r,i){return e[i]!==void 0&&(r[i]=e[i]),r},{})}function B(){return document.createElement("div")}function X(e){return["Element","Fragment"].some(function(r){return ce(e,r)})}function At(e){return ce(e,"NodeList")}function Et(e){return ce(e,"MouseEvent")}function wt(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Ot(e){return X(e)?[e]:At(e)?K(e):Array.isArray(e)?e:K(document.querySelectorAll(e))}function ie(e,r){e.forEach(function(i){i&&(i.style.transitionDuration=r+"ms")})}function Ve(e,r){e.forEach(function(i){i&&i.setAttribute("data-state",r)})}function Dt(e){var r,i=I(e),s=i[0];return s!=null&&(r=s.ownerDocument)!=null&&r.body?s.ownerDocument:document}function Ct(e,r){var i=r.clientX,s=r.clientY;return e.every(function(v){var d=v.popperRect,u=v.popperState,m=v.props,l=m.interactiveBorder,A=Tt(u.placement),g=u.modifiersData.offset;if(!g)return!0;var H=A==="bottom"?g.top.y:0,P=A==="top"?g.bottom.y:0,U=A==="right"?g.left.x:0,O=A==="left"?g.right.x:0,F=d.top-s+H>l,G=s-d.bottom-P>l,J=d.left-i+U>l,j=i-d.right-O>l;return F||G||J||j})}function oe(e,r,i){var s=r+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(v){e[s](v,i)})}function Ne(e,r){for(var i=r;i;){var s;if(e.contains(i))return!0;i=i.getRootNode==null||(s=i.getRootNode())==null?void 0:s.host}return!1}var w={isTouch:!1},_e=0;function Lt(){w.isTouch||(w.isTouch=!0,window.performance&&document.addEventListener("mousemove",ze))}function ze(){var e=performance.now();e-_e<20&&(w.isTouch=!1,document.removeEventListener("mousemove",ze)),_e=e}function St(){var e=document.activeElement;if(wt(e)){var r=e._tippy;e.blur&&!r.state.isVisible&&e.blur()}}function xt(){document.addEventListener("touchstart",Lt,L),window.addEventListener("blur",St)}var Mt=typeof window!="undefined"&&typeof document!="undefined",It=Mt?!!window.msCrypto:!1,Rt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ut={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},T=Object.assign({appendTo:$e,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Rt,Ut),Vt=Object.keys(T),Nt=function(r){var i=Object.keys(r);i.forEach(function(s){T[s]=r[s]})};function Ye(e){var r=e.plugins||[],i=r.reduce(function(s,v){var d=v.name,u=v.defaultValue;if(d){var m;s[d]=e[d]!==void 0?e[d]:(m=T[d])!=null?m:u}return s},{});return Object.assign({},e,i)}function _t(e,r){var i=r?Object.keys(Ye(Object.assign({},T,{plugins:r}))):Vt,s=i.reduce(function(v,d){var u=(e.getAttribute("data-tippy-"+d)||"").trim();if(!u)return v;if(d==="content")v[d]=u;else try{v[d]=JSON.parse(u)}catch{v[d]=u}return v},{});return s}function Be(e,r){var i=Object.assign({},r,{content:qe(r.content,[e])},r.ignoreAttributes?{}:_t(e,r.plugins));return i.aria=Object.assign({},T.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?r.interactive:i.aria.expanded,content:i.aria.content==="auto"?r.interactive?null:"describedby":i.aria.content},i}var Bt=function(){return"innerHTML"};function se(e,r){e[Bt()]=r}function He(e){var r=B();return e===!0?r.className=We:(r.className=ke,X(e)?r.appendChild(e):se(r,e)),r}function Pe(e,r){X(r.content)?(se(e,""),e.appendChild(r.content)):typeof r.content!="function"&&(r.allowHTML?se(e,r.content):e.textContent=r.content)}function ue(e){var r=e.firstElementChild,i=K(r.children);return{box:r,content:i.find(function(s){return s.classList.contains(je)}),arrow:i.find(function(s){return s.classList.contains(We)||s.classList.contains(ke)}),backdrop:i.find(function(s){return s.classList.contains(ht)})}}function Ke(e){var r=B(),i=B();i.className=gt,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var s=B();s.className=je,s.setAttribute("data-state","hidden"),Pe(s,e.props),r.appendChild(i),i.appendChild(s),v(e.props,e.props);function v(d,u){var m=ue(r),l=m.box,A=m.content,g=m.arrow;u.theme?l.setAttribute("data-theme",u.theme):l.removeAttribute("data-theme"),typeof u.animation=="string"?l.setAttribute("data-animation",u.animation):l.removeAttribute("data-animation"),u.inertia?l.setAttribute("data-inertia",""):l.removeAttribute("data-inertia"),l.style.maxWidth=typeof u.maxWidth=="number"?u.maxWidth+"px":u.maxWidth,u.role?l.setAttribute("role",u.role):l.removeAttribute("role"),(d.content!==u.content||d.allowHTML!==u.allowHTML)&&Pe(A,e.props),u.arrow?g?d.arrow!==u.arrow&&(l.removeChild(g),l.appendChild(He(u.arrow))):l.appendChild(He(u.arrow)):g&&l.removeChild(g)}return{popper:r,onUpdate:v}}Ke.$$tippy=!0;var Ht=1,Y=[],ae=[];function Pt(e,r){var i=Be(e,Object.assign({},T,Ye(Ue(r)))),s,v,d,u=!1,m=!1,l=!1,A=!1,g,H,P,U=[],O=Ie(we,i.interactiveDebounce),F,G=Ht++,J=null,j=yt(i.plugins),Xe={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},t={id:G,reference:e,popper:B(),popperInstance:J,props:i,state:Xe,plugins:j,clearDelayTimeouts:rt,setProps:it,setContent:ot,show:at,hide:st,hideWithInteractivity:ut,enable:tt,disable:nt,unmount:ct,destroy:pt};if(!i.render)return t;var pe=i.render(t),p=pe.popper,fe=pe.onUpdate;p.setAttribute("data-tippy-root",""),p.id="tippy-"+t.id,t.popper=p,e._tippy=t,p._tippy=t;var Ge=j.map(function(n){return n.fn(t)}),Je=e.hasAttribute("aria-expanded");return Te(),_(),W(),b("onCreate",[t]),i.showOnCreate&&xe(),p.addEventListener("mouseenter",function(){t.props.interactive&&t.state.isVisible&&t.clearDelayTimeouts()}),p.addEventListener("mouseleave",function(){t.props.interactive&&t.props.trigger.indexOf("mouseenter")>=0&&V().addEventListener("mousemove",O)}),t;function de(){var n=t.props.touch;return Array.isArray(n)?n:[n,0]}function le(){return de()[0]==="hold"}function E(){var n;return!!((n=t.props.render)!=null&&n.$$tippy)}function D(){return F||e}function V(){var n=D().parentNode;return n?Dt(n):document}function N(){return ue(p)}function ve(n){return t.state.isMounted&&!t.state.isVisible||w.isTouch||g&&g.type==="focus"?0:re(t.props.delay,n?0:1,T.delay)}function W(n){n===void 0&&(n=!1),p.style.pointerEvents=t.props.interactive&&!n?"":"none",p.style.zIndex=""+t.props.zIndex}function b(n,o,a){if(a===void 0&&(a=!0),Ge.forEach(function(c){c[n]&&c[n].apply(c,o)}),a){var f;(f=t.props)[n].apply(f,o)}}function me(){var n=t.props.aria;if(!!n.content){var o="aria-"+n.content,a=p.id,f=I(t.props.triggerTarget||e);f.forEach(function(c){var h=c.getAttribute(o);if(t.state.isVisible)c.setAttribute(o,h?h+" "+a:a);else{var y=h&&h.replace(a,"").trim();y?c.setAttribute(o,y):c.removeAttribute(o)}})}}function _(){if(!(Je||!t.props.aria.expanded)){var n=I(t.props.triggerTarget||e);n.forEach(function(o){t.props.interactive?o.setAttribute("aria-expanded",t.state.isVisible&&o===D()?"true":"false"):o.removeAttribute("aria-expanded")})}}function Q(){V().removeEventListener("mousemove",O),Y=Y.filter(function(n){return n!==O})}function k(n){if(!(w.isTouch&&(l||n.type==="mousedown"))){var o=n.composedPath&&n.composedPath()[0]||n.target;if(!(t.props.interactive&&Ne(p,o))){if(I(t.props.triggerTarget||e).some(function(a){return Ne(a,o)})){if(w.isTouch||t.state.isVisible&&t.props.trigger.indexOf("click")>=0)return}else b("onClickOutside",[t,n]);t.props.hideOnClick===!0&&(t.clearDelayTimeouts(),t.hide(),m=!0,setTimeout(function(){m=!1}),t.state.isMounted||Z())}}}function ge(){l=!0}function he(){l=!1}function be(){var n=V();n.addEventListener("mousedown",k,!0),n.addEventListener("touchend",k,L),n.addEventListener("touchstart",he,L),n.addEventListener("touchmove",ge,L)}function Z(){var n=V();n.removeEventListener("mousedown",k,!0),n.removeEventListener("touchend",k,L),n.removeEventListener("touchstart",he,L),n.removeEventListener("touchmove",ge,L)}function Qe(n,o){ye(n,function(){!t.state.isVisible&&p.parentNode&&p.parentNode.contains(p)&&o()})}function Ze(n,o){ye(n,o)}function ye(n,o){var a=N().box;function f(c){c.target===a&&(oe(a,"remove",f),o())}if(n===0)return o();oe(a,"remove",H),oe(a,"add",f),H=f}function S(n,o,a){a===void 0&&(a=!1);var f=I(t.props.triggerTarget||e);f.forEach(function(c){c.addEventListener(n,o,a),U.push({node:c,eventType:n,handler:o,options:a})})}function Te(){le()&&(S("touchstart",Ee,{passive:!0}),S("touchend",Oe,{passive:!0})),bt(t.props.trigger).forEach(function(n){if(n!=="manual")switch(S(n,Ee),n){case"mouseenter":S("mouseleave",Oe);break;case"focus":S(It?"focusout":"blur",De);break;case"focusin":S("focusout",De);break}})}function Ae(){U.forEach(function(n){var o=n.node,a=n.eventType,f=n.handler,c=n.options;o.removeEventListener(a,f,c)}),U=[]}function Ee(n){var o,a=!1;if(!(!t.state.isEnabled||Ce(n)||m)){var f=((o=g)==null?void 0:o.type)==="focus";g=n,F=n.currentTarget,_(),!t.state.isVisible&&Et(n)&&Y.forEach(function(c){return c(n)}),n.type==="click"&&(t.props.trigger.indexOf("mouseenter")<0||u)&&t.props.hideOnClick!==!1&&t.state.isVisible?a=!0:xe(n),n.type==="click"&&(u=!a),a&&!f&&$(n)}}function we(n){var o=n.target,a=D().contains(o)||p.contains(o);if(!(n.type==="mousemove"&&a)){var f=ee().concat(p).map(function(c){var h,y=c._tippy,x=(h=y.popperInstance)==null?void 0:h.state;return x?{popperRect:c.getBoundingClientRect(),popperState:x,props:i}:null}).filter(Boolean);Ct(f,n)&&(Q(),$(n))}}function Oe(n){var o=Ce(n)||t.props.trigger.indexOf("click")>=0&&u;if(!o){if(t.props.interactive){t.hideWithInteractivity(n);return}$(n)}}function De(n){t.props.trigger.indexOf("focusin")<0&&n.target!==D()||t.props.interactive&&n.relatedTarget&&p.contains(n.relatedTarget)||$(n)}function Ce(n){return w.isTouch?le()!==n.type.indexOf("touch")>=0:!1}function Le(){Se();var n=t.props,o=n.popperOptions,a=n.placement,f=n.offset,c=n.getReferenceClientRect,h=n.moveTransition,y=E()?ue(p).arrow:null,x=c?{getBoundingClientRect:c,contextElement:c.contextElement||D()}:e,Me={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(q){var M=q.state;if(E()){var ft=N(),ne=ft.box;["placement","reference-hidden","escaped"].forEach(function(z){z==="placement"?ne.setAttribute("data-placement",M.placement):M.attributes.popper["data-popper-"+z]?ne.setAttribute("data-"+z,""):ne.removeAttribute("data-"+z)}),M.attributes.popper={}}}},C=[{name:"offset",options:{offset:f}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!h}},Me];E()&&y&&C.push({name:"arrow",options:{element:y,padding:3}}),C.push.apply(C,(o==null?void 0:o.modifiers)||[]),t.popperInstance=lt(x,p,Object.assign({},o,{placement:a,onFirstUpdate:P,modifiers:C}))}function Se(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)}function et(){var n=t.props.appendTo,o,a=D();t.props.interactive&&n===$e||n==="parent"?o=a.parentNode:o=qe(n,[a]),o.contains(p)||o.appendChild(p),t.state.isMounted=!0,Le()}function ee(){return K(p.querySelectorAll("[data-tippy-root]"))}function xe(n){t.clearDelayTimeouts(),n&&b("onTrigger",[t,n]),be();var o=ve(!0),a=de(),f=a[0],c=a[1];w.isTouch&&f==="hold"&&c&&(o=c),o?s=setTimeout(function(){t.show()},o):t.show()}function $(n){if(t.clearDelayTimeouts(),b("onUntrigger",[t,n]),!t.state.isVisible){Z();return}if(!(t.props.trigger.indexOf("mouseenter")>=0&&t.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(n.type)>=0&&u)){var o=ve(!1);o?v=setTimeout(function(){t.state.isVisible&&t.hide()},o):d=requestAnimationFrame(function(){t.hide()})}}function tt(){t.state.isEnabled=!0}function nt(){t.hide(),t.state.isEnabled=!1}function rt(){clearTimeout(s),clearTimeout(v),cancelAnimationFrame(d)}function it(n){if(!t.state.isDestroyed){b("onBeforeUpdate",[t,n]),Ae();var o=t.props,a=Be(e,Object.assign({},o,Ue(n),{ignoreAttributes:!0}));t.props=a,Te(),o.interactiveDebounce!==a.interactiveDebounce&&(Q(),O=Ie(we,a.interactiveDebounce)),o.triggerTarget&&!a.triggerTarget?I(o.triggerTarget).forEach(function(f){f.removeAttribute("aria-expanded")}):a.triggerTarget&&e.removeAttribute("aria-expanded"),_(),W(),fe&&fe(o,a),t.popperInstance&&(Le(),ee().forEach(function(f){requestAnimationFrame(f._tippy.popperInstance.forceUpdate)})),b("onAfterUpdate",[t,n])}}function ot(n){t.setProps({content:n})}function at(){var n=t.state.isVisible,o=t.state.isDestroyed,a=!t.state.isEnabled,f=w.isTouch&&!t.props.touch,c=re(t.props.duration,0,T.duration);if(!(n||o||a||f)&&!D().hasAttribute("disabled")&&(b("onShow",[t],!1),t.props.onShow(t)!==!1)){if(t.state.isVisible=!0,E()&&(p.style.visibility="visible"),W(),be(),t.state.isMounted||(p.style.transition="none"),E()){var h=N(),y=h.box,x=h.content;ie([y,x],0)}P=function(){var C;if(!(!t.state.isVisible||A)){if(A=!0,p.offsetHeight,p.style.transition=t.props.moveTransition,E()&&t.props.animation){var te=N(),q=te.box,M=te.content;ie([q,M],c),Ve([q,M],"visible")}me(),_(),Re(ae,t),(C=t.popperInstance)==null||C.forceUpdate(),b("onMount",[t]),t.props.animation&&E()&&Ze(c,function(){t.state.isShown=!0,b("onShown",[t])})}},et()}}function st(){var n=!t.state.isVisible,o=t.state.isDestroyed,a=!t.state.isEnabled,f=re(t.props.duration,1,T.duration);if(!(n||o||a)&&(b("onHide",[t],!1),t.props.onHide(t)!==!1)){if(t.state.isVisible=!1,t.state.isShown=!1,A=!1,u=!1,E()&&(p.style.visibility="hidden"),Q(),Z(),W(!0),E()){var c=N(),h=c.box,y=c.content;t.props.animation&&(ie([h,y],f),Ve([h,y],"hidden"))}me(),_(),t.props.animation?E()&&Qe(f,t.unmount):t.unmount()}}function ut(n){V().addEventListener("mousemove",O),Re(Y,O),O(n)}function ct(){t.state.isVisible&&t.hide(),t.state.isMounted&&(Se(),ee().forEach(function(n){n._tippy.unmount()}),p.parentNode&&p.parentNode.removeChild(p),ae=ae.filter(function(n){return n!==t}),t.state.isMounted=!1,b("onHidden",[t]))}function pt(){t.state.isDestroyed||(t.clearDelayTimeouts(),t.unmount(),Ae(),delete e._tippy,t.state.isDestroyed=!0,b("onDestroy",[t]))}}function R(e,r){r===void 0&&(r={});var i=T.plugins.concat(r.plugins||[]);xt();var s=Object.assign({},r,{plugins:i}),v=Ot(e),d=v.reduce(function(u,m){var l=m&&Pt(m,s);return l&&u.push(l),u},[]);return X(e)?d[0]:d}R.defaultProps=T;R.setDefaultProps=Nt;R.currentInput=w;Object.assign({},dt,{effect:function(r){var i=r.state,s={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,s.popper),i.styles=s,i.elements.arrow&&Object.assign(i.elements.arrow.style,s.arrow)}});R.setDefaultProps({render:Ke});R("[data-tippy-content]",{placement:"right",animation:"shift-away"});R("[top-data-tippy-content]",{placement:"top",animation:"shift-away"});Fe.registerPlugin(vt,mt);let Ft=document.querySelectorAll(".prog_l_top");function jt(e){Fe.to(e,{yPercent:100,scrollTrigger:{trigger:e,scrub:1,start:"top 55%",end:"bottom 55%"}})}Ft.forEach(jt);
