"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{3385:function(e,t,n){n.d(t,{LB:function(){return e2},O1:function(){return e6},Zj:function(){return e7}});var r,l,i,a,o,u,s,c,d,h,f,g,p,v,b,y,m,w,x,D,E=n(2265),C=n(4887);let S="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function R(e){let t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function M(e){return"nodeType"in e}function k(e){var t,n;return e?R(e)?e:M(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function O(e){let{Document:t}=k(e);return e instanceof t}function T(e){return!R(e)&&e instanceof k(e).HTMLElement}function L(e){return e?R(e)?e.document:M(e)?O(e)?e:T(e)?e.ownerDocument:document:document:document}let N=S?E.useLayoutEffect:E.useEffect;function A(e){let t=(0,E.useRef)(e);return N(()=>{t.current=e}),(0,E.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}function P(e,t){void 0===t&&(t=[e]);let n=(0,E.useRef)(e);return N(()=>{n.current!==e&&(n.current=e)},t),n}function B(e,t){let n=(0,E.useRef)();return(0,E.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function _(e){let t=A(e),n=(0,E.useRef)(null),r=(0,E.useCallback)(e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e},[]);return[n,r]}function z(e){let t=(0,E.useRef)();return(0,E.useEffect)(()=>{t.current=e},[e]),t.current}let I={};function j(e,t){return(0,E.useMemo)(()=>{if(t)return t;let n=null==I[e]?0:I[e]+1;return I[e]=n,e+"-"+n},[e,t])}function F(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];return r.reduce((t,n)=>{let r=Object.entries(n);for(let[n,l]of r){let r=t[n];null!=r&&(t[n]=r+e*l)}return t},{...t})}}let U=F(1),K=F(-1);function W(e){if(!e)return!1;let{KeyboardEvent:t}=k(e.target);return t&&e instanceof t}function Y(e){if(function(e){if(!e)return!1;let{TouchEvent:t}=k(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return"clientX"in e&&"clientY"in e?{x:e.clientX,y:e.clientY}:null}let X=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[X.Translate.toString(e),X.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),H="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",V={display:"none"};function J(e){let{id:t,value:n}=e;return E.createElement("div",{id:t,style:V},n)}let q={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};function $(e){let{id:t,announcement:n}=e;return E.createElement("div",{id:t,style:q,role:"status","aria-live":"assertive","aria-atomic":!0},n)}let G=(0,E.createContext)(null),Z={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Q={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function ee(e){let{announcements:t=Q,container:n,hiddenTextDescribedById:r,screenReaderInstructions:l=Z}=e,{announce:i,announcement:a}=function(){let[e,t]=(0,E.useState)(""),n=(0,E.useCallback)(e=>{null!=e&&t(e)},[]);return{announce:n,announcement:e}}(),o=j("DndLiveRegion"),[u,s]=(0,E.useState)(!1);if((0,E.useEffect)(()=>{s(!0)},[]),!function(e){let t=(0,E.useContext)(G);(0,E.useEffect)(()=>{if(!t)throw Error("useDndMonitor must be used within a children of <DndContext>");let n=t(e);return n},[e,t])}((0,E.useMemo)(()=>({onDragStart(e){let{active:n}=e;i(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&i(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;i(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;i(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;i(t.onDragCancel({active:n,over:r}))}}),[i,t])),!u)return null;let c=E.createElement(E.Fragment,null,E.createElement(J,{id:r,value:l.draggable}),E.createElement($,{id:o,announcement:a}));return n?(0,C.createPortal)(c,n):c}function et(){}(r=f||(f={})).DragStart="dragStart",r.DragMove="dragMove",r.DragEnd="dragEnd",r.DragCancel="dragCancel",r.DragOver="dragOver",r.RegisterDroppable="registerDroppable",r.SetDroppableDisabled="setDroppableDisabled",r.UnregisterDroppable="unregisterDroppable";let en=Object.freeze({x:0,y:0});function er(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}let el=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,l=[];for(let e of r){let{id:r}=e,i=n.get(r);if(i){let n=function(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),l=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height);if(r<l&&n<i){let a=t.width*t.height,o=e.width*e.height,u=(l-r)*(i-n);return Number((u/(a+o-u)).toFixed(4))}return 0}(i,t);n>0&&l.push({id:r,data:{droppableContainer:e,value:n}})}}return l.sort(er)};function ei(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:en}let ea=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((e,t)=>({...e,top:e.top+1*t.y,bottom:e.bottom+1*t.y,left:e.left+1*t.x,right:e.right+1*t.x}),{...e})},eo={ignoreTransform:!1};function eu(e,t){void 0===t&&(t=eo);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=k(e).getComputedStyle(e);t&&(n=function(e,t,n){let r=function(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;let{scaleX:l,scaleY:i,x:a,y:o}=r,u=e.left-a-(1-l)*parseFloat(n),s=e.top-o-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),c=l?e.width/l:e.width,d=i?e.height/i:e.height;return{width:c,height:d,top:s,right:u+c,bottom:s+d,left:u}}(n,t,r))}let{top:r,left:l,width:i,height:a,bottom:o,right:u}=n;return{top:r,left:l,width:i,height:a,bottom:o,right:u}}function es(e){return eu(e,{ignoreTransform:!0})}function ec(e,t){let n=[];return e?function r(l){var i;if(null!=t&&n.length>=t||!l)return n;if(O(l)&&null!=l.scrollingElement&&!n.includes(l.scrollingElement))return n.push(l.scrollingElement),n;if(!T(l)||l instanceof k(l).SVGElement||n.includes(l))return n;let a=k(e).getComputedStyle(l);return(l!==e&&function(e,t){void 0===t&&(t=k(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(e=>{let r=t[e];return"string"==typeof r&&n.test(r)})}(l,a)&&n.push(l),void 0===(i=a)&&(i=k(l).getComputedStyle(l)),"fixed"===i.position)?n:r(l.parentNode)}(e):n}function ed(e){let[t]=ec(e,1);return null!=t?t:null}function eh(e){return S&&e?R(e)?e:M(e)?O(e)||e===L(e).scrollingElement?window:T(e)?e:null:null:null}function ef(e){return R(e)?e.scrollX:e.scrollLeft}function eg(e){return R(e)?e.scrollY:e.scrollTop}function ep(e){return{x:ef(e),y:eg(e)}}function ev(e){return!!S&&!!e&&e===document.scrollingElement}function eb(e){let t={x:0,y:0},n=ev(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},l=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,a=e.scrollTop>=r.y,o=e.scrollLeft>=r.x;return{isTop:l,isLeft:i,isBottom:a,isRight:o,maxScroll:r,minScroll:t}}(l=g||(g={}))[l.Forward=1]="Forward",l[l.Backward=-1]="Backward";let ey={x:.2,y:.2};function em(e){return e.reduce((e,t)=>U(e,ep(t)),en)}let ew=[["x",["left","right"],function(e){return e.reduce((e,t)=>e+ef(t),0)}],["y",["top","bottom"],function(e){return e.reduce((e,t)=>e+eg(t),0)}]];class ex{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=ec(t),r=em(n);for(let[t,l,i]of(this.rect={...e},this.width=e.width,this.height=e.height,ew))for(let e of l)Object.defineProperty(this,e,{get:()=>{let l=i(n),a=r[t]-l;return this.rect[e]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class eD{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)})},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function eE(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}function eC(e){e.preventDefault()}function eS(e){e.stopPropagation()}(i=p||(p={})).Click="click",i.DragStart="dragstart",i.Keydown="keydown",i.ContextMenu="contextmenu",i.Resize="resize",i.SelectionChange="selectionchange",i.VisibilityChange="visibilitychange",(a=v||(v={})).Space="Space",a.Down="ArrowDown",a.Right="ArrowRight",a.Left="ArrowLeft",a.Up="ArrowUp",a.Esc="Escape",a.Enter="Enter";let eR={start:[v.Space,v.Enter],cancel:[v.Esc],end:[v.Space,v.Enter]},eM=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case v.Right:return{...n,x:n.x+25};case v.Left:return{...n,x:n.x-25};case v.Down:return{...n,y:n.y+25};case v.Up:return{...n,y:n.y-25}}};class ek{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new eD(L(t)),this.windowListeners=new eD(k(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(p.Resize,this.handleCancel),this.windowListeners.add(p.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(p.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=eu),!e)return;let{top:n,left:r,bottom:l,right:i}=t(e),a=ed(e);a&&(l<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(en)}handleKeyDown(e){if(W(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:l=eR,coordinateGetter:i=eM,scrollBehavior:a="smooth"}=r,{code:o}=e;if(l.end.includes(o)){this.handleEnd(e);return}if(l.cancel.includes(o)){this.handleCancel(e);return}let{collisionRect:u}=n.current,s=u?{x:u.left,y:u.top}:en;this.referenceCoordinates||(this.referenceCoordinates=s);let c=i(e,{active:t,context:n.current,currentCoordinates:s});if(c){let t=K(c,s),r={x:0,y:0},{scrollableAncestors:l}=n.current;for(let n of l){let l=e.code,{isTop:i,isRight:o,isLeft:u,isBottom:s,maxScroll:d,minScroll:h}=eb(n),f=function(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:l}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:l,width:e.clientWidth,height:e.clientHeight}}(n),g={x:Math.min(l===v.Right?f.right-f.width/2:f.right,Math.max(l===v.Right?f.left:f.left+f.width/2,c.x)),y:Math.min(l===v.Down?f.bottom-f.height/2:f.bottom,Math.max(l===v.Down?f.top:f.top+f.height/2,c.y))},p=l===v.Right&&!o||l===v.Left&&!u,b=l===v.Down&&!s||l===v.Up&&!i;if(p&&g.x!==c.x){let e=n.scrollLeft+t.x,i=l===v.Right&&e<=d.x||l===v.Left&&e>=h.x;if(i&&!t.y){n.scrollTo({left:e,behavior:a});return}i?r.x=n.scrollLeft-e:r.x=l===v.Right?n.scrollLeft-d.x:n.scrollLeft-h.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(b&&g.y!==c.y){let e=n.scrollTop+t.y,i=l===v.Down&&e<=d.y||l===v.Up&&e>=h.y;if(i&&!t.x){n.scrollTo({top:e,behavior:a});return}i?r.y=n.scrollTop-e:r.y=l===v.Down?n.scrollTop-d.y:n.scrollTop-h.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,U(K(c,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}function eO(e){return!!(e&&"distance"in e)}function eT(e){return!!(e&&"delay"in e)}ek.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=eR,onActivation:l}=t,{active:i}=n,{code:a}=e.nativeEvent;if(r.start.includes(a)){let t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==l||l({event:e.nativeEvent}),!0)}return!1}}];class eL{constructor(e,t,n){var r;void 0===n&&(n=function(e){let{EventTarget:t}=k(e);return e instanceof t?e:L(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:l}=e,{target:i}=l;this.props=e,this.events=t,this.document=L(i),this.documentListeners=new eD(this.document),this.listeners=new eD(n),this.windowListeners=new eD(k(i)),this.initialCoordinates=null!=(r=Y(l))?r:en,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(p.Resize,this.handleCancel),this.windowListeners.add(p.DragStart,eC),this.windowListeners.add(p.VisibilityChange,this.handleCancel),this.windowListeners.add(p.ContextMenu,eC),this.documentListeners.add(p.Keydown,this.handleKeydown),t){if(eO(t))return;if(eT(t)){this.timeoutId=setTimeout(this.handleStart,t.delay);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(p.Click,eS,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(p.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;let{activated:n,initialCoordinates:r,props:l}=this,{onMove:i,options:{activationConstraint:a}}=l;if(!r)return;let o=null!=(t=Y(e))?t:en,u=K(r,o);if(!n&&a){if(eT(a))return eE(u,a.tolerance)?this.handleCancel():void 0;if(eO(a))return null!=a.tolerance&&eE(u,a.tolerance)?this.handleCancel():eE(u,a.distance)?this.handleStart():void 0}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onEnd:e}=this.props;this.detach(),e()}handleCancel(){let{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===v.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}let eN={move:{name:"pointermove"},end:{name:"pointerup"}};class eA extends eL{constructor(e){let{event:t}=e,n=L(t.target);super(e,eN,n)}}eA.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!!n.isPrimary&&0===n.button&&(null==r||r({event:n}),!0)}}],(o=b||(b={}))[o.RightClick=2]="RightClick",(u=y||(y={}))[u.Pointer=0]="Pointer",u[u.DraggableRect=1]="DraggableRect",(s=m||(m={}))[s.TreeOrder=0]="TreeOrder",s[s.ReversedTreeOrder=1]="ReversedTreeOrder";let eP={x:{[g.Backward]:!1,[g.Forward]:!1},y:{[g.Backward]:!1,[g.Forward]:!1}};(c=w||(w={}))[c.Always=0]="Always",c[c.BeforeDragging=1]="BeforeDragging",c[c.WhileDragging=2]="WhileDragging",(x||(x={})).Optimized="optimized";let eB=new Map;function e_(e,t){return B(n=>e?n||("function"==typeof t?t(e):e):null,[t,e])}function ez(e){let{callback:t,disabled:n}=e,r=A(t),l=(0,E.useMemo)(()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,E.useEffect)(()=>()=>null==l?void 0:l.disconnect(),[l]),l}function eI(e){return new ex(eu(e),e)}function ej(e,t,n){void 0===t&&(t=eI);let[r,l]=(0,E.useReducer)(function(r){if(!e)return null;if(!1===e.isConnected){var l;return null!=(l=null!=r?r:n)?l:null}let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i},null),i=function(e){let{callback:t,disabled:n}=e,r=A(t),l=(0,E.useMemo)(()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,E.useEffect)(()=>()=>null==l?void 0:l.disconnect(),[l]),l}({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){l();break}}}}),a=ez({callback:l});return N(()=>{l(),e?(null==a||a.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==i||i.disconnect())},[e]),r}let eF=[];function eU(e,t){void 0===t&&(t=[]);let n=(0,E.useRef)(null);return(0,E.useEffect)(()=>{n.current=null},t),(0,E.useEffect)(()=>{let t=e!==en;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?K(e,n.current):en}function eK(e){return(0,E.useMemo)(()=>e?function(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null,[e])}let eW=[],eY=[{sensor:eA,options:{}},{sensor:ek,options:{}}],eX={current:{}},eH={draggable:{measure:es},droppable:{measure:es,strategy:w.WhileDragging,frequency:x.Optimized},dragOverlay:{measure:eu}};class eV extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}let eJ={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new eV,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:et},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:eH,measureDroppableContainers:et,windowRect:null,measuringScheduled:!1},eq={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:et,draggableNodes:new Map,over:null,measureDroppableContainers:et},e$=(0,E.createContext)(eq),eG=(0,E.createContext)(eJ);function eZ(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new eV}}}function eQ(e,t){switch(t.type){case f.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case f.DragMove:if(!e.draggable.active)return e;return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case f.DragEnd:case f.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case f.RegisterDroppable:{let{element:n}=t,{id:r}=n,l=new eV(e.droppable.containers);return l.set(r,n),{...e,droppable:{...e.droppable,containers:l}}}case f.SetDroppableDisabled:{let{id:n,key:r,disabled:l}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new eV(e.droppable.containers);return a.set(n,{...i,disabled:l}),{...e,droppable:{...e.droppable,containers:a}}}case f.UnregisterDroppable:{let{id:n,key:r}=t,l=e.droppable.containers.get(n);if(!l||r!==l.key)return e;let i=new eV(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function e0(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:l}=(0,E.useContext)(e$),i=z(r),a=z(null==n?void 0:n.id);return(0,E.useEffect)(()=>{if(!t&&!r&&i&&null!=a){if(!W(i)||document.activeElement===i.target)return;let e=l.get(a);if(!e)return;let{activatorNode:t,node:n}=e;(t.current||n.current)&&requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=e.matches(H)?e:e.querySelector(H);if(t){t.focus();break}}})}},[r,t,l,a,i]),null}let e1=(0,E.createContext)({...en,scaleX:1,scaleY:1});(d=D||(D={}))[d.Uninitialized=0]="Uninitialized",d[d.Initializing=1]="Initializing",d[d.Initialized=2]="Initialized";let e2=(0,E.memo)(function(e){var t,n,r,l,i;let{id:a,accessibility:o,autoScroll:u=!0,children:s,sensors:c=eY,collisionDetection:d=el,measuring:h,modifiers:p,...v}=e,b=(0,E.useReducer)(eQ,void 0,eZ),[x,R]=b,[M,O]=function(){let[e]=(0,E.useState)(()=>new Set),t=(0,E.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]),n=(0,E.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)})},[e]);return[n,t]}(),[L,A]=(0,E.useState)(D.Uninitialized),I=L===D.Initialized,{draggable:{active:F,nodes:K,translate:W},droppable:{containers:X}}=x,H=F?K.get(F):null,V=(0,E.useRef)({initial:null,translated:null}),J=(0,E.useMemo)(()=>{var e;return null!=F?{id:F,data:null!=(e=null==H?void 0:H.data)?e:eX,rect:V}:null},[F,H]),q=(0,E.useRef)(null),[$,Z]=(0,E.useState)(null),[Q,et]=(0,E.useState)(null),er=P(v,Object.values(v)),eo=j("DndDescribedBy",a),es=(0,E.useMemo)(()=>X.getEnabled(),[X]),ef=(0,E.useMemo)(()=>({draggable:{...eH.draggable,...null==h?void 0:h.draggable},droppable:{...eH.droppable,...null==h?void 0:h.droppable},dragOverlay:{...eH.dragOverlay,...null==h?void 0:h.dragOverlay}}),[null==h?void 0:h.draggable,null==h?void 0:h.droppable,null==h?void 0:h.dragOverlay]),{droppableRects:eg,measureDroppableContainers:ew,measuringScheduled:eD}=function(e,t){let{dragging:n,dependencies:r,config:l}=t,[i,a]=(0,E.useState)(null),{frequency:o,measure:u,strategy:s}=l,c=(0,E.useRef)(e),d=function(){switch(s){case w.Always:return!1;case w.BeforeDragging:return n;default:return!n}}(),h=P(d),f=(0,E.useCallback)(function(e){void 0===e&&(e=[]),h.current||a(t=>null===t?e:t.concat(e.filter(e=>!t.includes(e))))},[h]),g=(0,E.useRef)(null),p=B(t=>{if(d&&!n)return eB;if(!t||t===eB||c.current!==e||null!=i){let t=new Map;for(let n of e){if(!n)continue;if(i&&i.length>0&&!i.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new ex(u(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,i,n,d,u]);return(0,E.useEffect)(()=>{c.current=e},[e]),(0,E.useEffect)(()=>{d||f()},[n,d]),(0,E.useEffect)(()=>{i&&i.length>0&&a(null)},[JSON.stringify(i)]),(0,E.useEffect)(()=>{d||"number"!=typeof o||null!==g.current||(g.current=setTimeout(()=>{f(),g.current=null},o))},[o,d,f,...r]),{droppableRects:p,measureDroppableContainers:f,measuringScheduled:null!=i}}(es,{dragging:I,dependencies:[W.x,W.y],config:ef.droppable}),eE=function(e,t){let n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return B(e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null},[r,t])}(K,F),eC=(0,E.useMemo)(()=>Q?Y(Q):null,[Q]),eS=function(){let e=(null==$?void 0:$.autoScrollEnabled)===!1,t="object"==typeof u?!1===u.enabled:!1===u,n=I&&!e&&!t;return"object"==typeof u?{...u,enabled:n}:{enabled:n}}(),eR=e_(eE,ef.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:l=!0}=e,i=(0,E.useRef)(!1),{x:a,y:o}="boolean"==typeof l?{x:l,y:l}:l;N(()=>{let e=!a&&!o;if(e||!t){i.current=!1;return}if(i.current||!r)return;let l=null==t?void 0:t.node.current;if(!l||!1===l.isConnected)return;let u=n(l),s=ei(u,r);if(a||(s.x=0),o||(s.y=0),i.current=!0,Math.abs(s.x)>0||Math.abs(s.y)>0){let e=ed(l);e&&e.scrollBy({top:s.y,left:s.x})}},[t,a,o,r,n])}({activeNode:F?K.get(F):null,config:eS.layoutShiftCompensation,initialRect:eR,measure:ef.draggable.measure});let eM=ej(eE,ef.draggable.measure,eR),ek=ej(eE?eE.parentElement:null),eO=(0,E.useRef)({activatorEvent:null,active:null,activeNode:eE,collisionRect:null,collisions:null,droppableRects:eg,draggableNodes:K,draggingNode:null,draggingNodeRect:null,droppableContainers:X,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),eT=X.getNodeFor(null==(t=eO.current.over)?void 0:t.id),eL=function(e){let{measure:t}=e,[n,r]=(0,E.useState)(null),l=(0,E.useCallback)(e=>{for(let{target:n}of e)if(T(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t]),i=ez({callback:l}),a=(0,E.useCallback)(e=>{let n=function(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return T(t)?t:e}(e);null==i||i.disconnect(),n&&(null==i||i.observe(n)),r(n?t(n):null)},[t,i]),[o,u]=_(a);return(0,E.useMemo)(()=>({nodeRef:o,rect:n,setRef:u}),[n,o,u])}({measure:ef.dragOverlay.measure}),eN=null!=(n=eL.nodeRef.current)?n:eE,eA=I?null!=(r=eL.rect)?r:eM:null,eI=!!(eL.nodeRef.current&&eL.rect),eV=function(e){let t=e_(e);return ei(e,t)}(eI?null:eM),eJ=eK(eN?k(eN):null),eq=function(e){let t=(0,E.useRef)(e),n=B(n=>e?n&&n!==eF&&e&&t.current&&e.parentNode===t.current.parentNode?n:ec(e):eF,[e]);return(0,E.useEffect)(()=>{t.current=e},[e]),n}(I?null!=eT?eT:eE:null),e2=function(e,t){void 0===t&&(t=eu);let[n]=e,r=eK(n?k(n):null),[l,i]=(0,E.useReducer)(function(){return e.length?e.map(e=>ev(e)?r:new ex(t(e),e)):eW},eW),a=ez({callback:i});return e.length>0&&l===eW&&i(),N(()=>{e.length?e.forEach(e=>null==a?void 0:a.observe(e)):(null==a||a.disconnect(),i())},[e]),l}(eq),e5=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}(p,{transform:{x:W.x-eV.x,y:W.y-eV.y,scaleX:1,scaleY:1},activatorEvent:Q,active:J,activeNodeRect:eM,containerNodeRect:ek,draggingNodeRect:eA,over:eO.current.over,overlayNodeRect:eL.rect,scrollableAncestors:eq,scrollableAncestorRects:e2,windowRect:eJ}),e3=eC?U(eC,W):null,e6=function(e){let[t,n]=(0,E.useState)(null),r=(0,E.useRef)(e),l=(0,E.useCallback)(e=>{let t=eh(e.target);t&&n(e=>e?(e.set(t,ep(t)),new Map(e)):null)},[]);return(0,E.useEffect)(()=>{let t=r.current;if(e!==t){i(t);let a=e.map(e=>{let t=eh(e);return t?(t.addEventListener("scroll",l,{passive:!0}),[t,ep(t)]):null}).filter(e=>null!=e);n(a.length?new Map(a):null),r.current=e}return()=>{i(e),i(t)};function i(e){e.forEach(e=>{let t=eh(e);null==t||t.removeEventListener("scroll",l)})}},[l,e]),(0,E.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>U(e,t),en):em(e):en,[e,t])}(eq),e4=eU(e6),e7=eU(e6,[eM]),e8=U(e5,e4),e9=eA?ea(eA,e5):null,te=J&&e9?d({active:J,collisionRect:e9,droppableRects:eg,droppableContainers:es,pointerCoordinates:e3}):null,tt=function(e,t){if(!e||0===e.length)return null;let[n]=e;return t?n[t]:n}(te,"id"),[tn,tr]=(0,E.useState)(null),tl=eI?e5:U(e5,e7),ti=(i=null!=(l=null==tn?void 0:tn.rect)?l:null,{...tl,scaleX:i&&eM?i.width/eM.width:1,scaleY:i&&eM?i.height/eM.height:1}),ta=(0,E.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(null==q.current)return;let l=K.get(q.current);if(!l)return;let i=e.nativeEvent,a=new n({active:q.current,activeNode:l,event:i,options:r,context:eO,onStart(e){let t=q.current;if(null==t)return;let n=K.get(t);if(!n)return;let{onDragStart:r}=er.current,l={active:{id:t,data:n.data,rect:V}};(0,C.unstable_batchedUpdates)(()=>{null==r||r(l),A(D.Initializing),R({type:f.DragStart,initialCoordinates:e,active:t}),M({type:"onDragStart",event:l})})},onMove(e){R({type:f.DragMove,coordinates:e})},onEnd:o(f.DragEnd),onCancel:o(f.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:l}=eO.current,a=null;if(t&&l){let{cancelDrop:o}=er.current;if(a={activatorEvent:i,active:t,collisions:n,delta:l,over:r},e===f.DragEnd&&"function"==typeof o){let t=await Promise.resolve(o(a));t&&(e=f.DragCancel)}}q.current=null,(0,C.unstable_batchedUpdates)(()=>{R({type:e}),A(D.Uninitialized),tr(null),Z(null),et(null);let t=e===f.DragEnd?"onDragEnd":"onDragCancel";if(a){let e=er.current[t];null==e||e(a),M({type:t,event:a})}})}}(0,C.unstable_batchedUpdates)(()=>{Z(a),et(e.nativeEvent)})},[K]),to=(0,E.useCallback)((e,t)=>(n,r)=>{let l=n.nativeEvent,i=K.get(r);if(null!==q.current||!i||l.dndKit||l.defaultPrevented)return;let a=e(n,t.options,{active:i});!0===a&&(l.dndKit={capturedBy:t.sensor},q.current=r,ta(n,t))},[K,ta]),tu=(0,E.useMemo)(()=>c.reduce((e,t)=>{let{sensor:n}=t,r=n.activators.map(e=>({eventName:e.eventName,handler:to(e.handler,t)}));return[...e,...r]},[]),[c,to]);(0,E.useEffect)(()=>{if(!S)return;let e=c.map(e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()});return()=>{for(let t of e)null==t||t()}},c.map(e=>{let{sensor:t}=e;return t})),N(()=>{eM&&L===D.Initializing&&A(D.Initialized)},[eM,L]),(0,E.useEffect)(()=>{let{onDragMove:e}=er.current,{active:t,activatorEvent:n,collisions:r,over:l}=eO.current;if(!t||!n)return;let i={active:t,activatorEvent:n,collisions:r,delta:{x:e8.x,y:e8.y},over:l};(0,C.unstable_batchedUpdates)(()=>{null==e||e(i),M({type:"onDragMove",event:i})})},[e8.x,e8.y]),(0,E.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:l}=eO.current;if(!e||null==q.current||!t||!l)return;let{onDragOver:i}=er.current,a=r.get(tt),o=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,u={active:e,activatorEvent:t,collisions:n,delta:{x:l.x,y:l.y},over:o};(0,C.unstable_batchedUpdates)(()=>{tr(o),null==i||i(u),M({type:"onDragOver",event:u})})},[tt]),N(()=>{eO.current={activatorEvent:Q,active:J,activeNode:eE,collisionRect:e9,collisions:te,droppableRects:eg,draggableNodes:K,draggingNode:eN,draggingNodeRect:eA,droppableContainers:X,over:tn,scrollableAncestors:eq,scrollAdjustedTranslate:e8},V.current={initial:eA,translated:e9}},[J,eE,te,e9,K,eN,eA,eg,X,tn,eq,e8]),function(e){let{acceleration:t,activator:n=y.Pointer,canScroll:r,draggingRect:l,enabled:i,interval:a=5,order:o=m.TreeOrder,pointerCoordinates:u,scrollableAncestors:s,scrollableAncestorRects:c,delta:d,threshold:h}=e,f=function(e){let{delta:t,disabled:n}=e,r=z(t);return B(e=>{if(n||!r||!e)return eP;let l={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[g.Backward]:e.x[g.Backward]||-1===l.x,[g.Forward]:e.x[g.Forward]||1===l.x},y:{[g.Backward]:e.y[g.Backward]||-1===l.y,[g.Forward]:e.y[g.Forward]||1===l.y}}},[n,t,r])}({delta:d,disabled:!i}),[p,v]=function(){let e=(0,E.useRef)(null),t=(0,E.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),n=(0,E.useCallback)(()=>{null!==e.current&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}(),b=(0,E.useRef)({x:0,y:0}),w=(0,E.useRef)({x:0,y:0}),x=(0,E.useMemo)(()=>{switch(n){case y.Pointer:return u?{top:u.y,bottom:u.y,left:u.x,right:u.x}:null;case y.DraggableRect:return l}},[n,l,u]),D=(0,E.useRef)(null),C=(0,E.useCallback)(()=>{let e=D.current;if(!e)return;let t=b.current.x*w.current.x,n=b.current.y*w.current.y;e.scrollBy(t,n)},[]),S=(0,E.useMemo)(()=>o===m.TreeOrder?[...s].reverse():s,[o,s]);(0,E.useEffect)(()=>{if(!i||!s.length||!x){v();return}for(let e of S){if((null==r?void 0:r(e))===!1)continue;let n=s.indexOf(e),l=c[n];if(!l)continue;let{direction:i,speed:o}=function(e,t,n,r,l){let{top:i,left:a,right:o,bottom:u}=n;void 0===r&&(r=10),void 0===l&&(l=ey);let{isTop:s,isBottom:c,isLeft:d,isRight:h}=eb(e),f={x:0,y:0},p={x:0,y:0},v={height:t.height*l.y,width:t.width*l.x};return!s&&i<=t.top+v.height?(f.y=g.Backward,p.y=r*Math.abs((t.top+v.height-i)/v.height)):!c&&u>=t.bottom-v.height&&(f.y=g.Forward,p.y=r*Math.abs((t.bottom-v.height-u)/v.height)),!h&&o>=t.right-v.width?(f.x=g.Forward,p.x=r*Math.abs((t.right-v.width-o)/v.width)):!d&&a<=t.left+v.width&&(f.x=g.Backward,p.x=r*Math.abs((t.left+v.width-a)/v.width)),{direction:f,speed:p}}(e,l,x,t,h);for(let e of["x","y"])f[e][i[e]]||(o[e]=0,i[e]=0);if(o.x>0||o.y>0){v(),D.current=e,p(C,a),b.current=o,w.current=i;return}}b.current={x:0,y:0},w.current={x:0,y:0},v()},[t,C,r,v,i,a,JSON.stringify(x),JSON.stringify(f),p,s,S,c,JSON.stringify(h)])}({...eS,delta:W,draggingRect:e9,pointerCoordinates:e3,scrollableAncestors:eq,scrollableAncestorRects:e2});let ts=(0,E.useMemo)(()=>({active:J,activeNode:eE,activeNodeRect:eM,activatorEvent:Q,collisions:te,containerNodeRect:ek,dragOverlay:eL,draggableNodes:K,droppableContainers:X,droppableRects:eg,over:tn,measureDroppableContainers:ew,scrollableAncestors:eq,scrollableAncestorRects:e2,measuringConfiguration:ef,measuringScheduled:eD,windowRect:eJ}),[J,eE,eM,Q,te,ek,eL,K,X,eg,tn,ew,eq,e2,ef,eD,eJ]),tc=(0,E.useMemo)(()=>({activatorEvent:Q,activators:tu,active:J,activeNodeRect:eM,ariaDescribedById:{draggable:eo},dispatch:R,draggableNodes:K,over:tn,measureDroppableContainers:ew}),[Q,tu,J,eM,R,eo,K,tn,ew]);return E.createElement(G.Provider,{value:O},E.createElement(e$.Provider,{value:tc},E.createElement(eG.Provider,{value:ts},E.createElement(e1.Provider,{value:ti},s)),E.createElement(e0,{disabled:(null==o?void 0:o.restoreFocus)===!1})),E.createElement(ee,{...o,hiddenTextDescribedById:eo}))}),e5=(0,E.createContext)(null),e3="button";function e6(e){let{id:t,data:n,disabled:r=!1,attributes:l}=e,i=j("Droppable"),{activators:a,activatorEvent:o,active:u,activeNodeRect:s,ariaDescribedById:c,draggableNodes:d,over:h}=(0,E.useContext)(e$),{role:f=e3,roleDescription:g="draggable",tabIndex:p=0}=null!=l?l:{},v=(null==u?void 0:u.id)===t,b=(0,E.useContext)(v?e1:e5),[y,m]=_(),[w,x]=_(),D=(0,E.useMemo)(()=>a.reduce((e,n)=>{let{eventName:r,handler:l}=n;return e[r]=e=>{l(e,t)},e},{}),[a,t]),C=P(n);N(()=>(d.set(t,{id:t,key:i,node:y,activatorNode:w,data:C}),()=>{let e=d.get(t);e&&e.key===i&&d.delete(t)}),[d,t]);let S=(0,E.useMemo)(()=>({role:f,tabIndex:p,"aria-disabled":r,"aria-pressed":!!v&&f===e3||void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[r,f,p,v,g,c.draggable]);return{active:u,activatorEvent:o,activeNodeRect:s,attributes:S,isDragging:v,listeners:r?void 0:D,node:y,over:h,setNodeRef:m,setActivatorNodeRef:x,transform:b}}let e4={timeout:25};function e7(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:l}=e,i=j("Droppable"),{active:a,dispatch:o,over:u,measureDroppableContainers:s}=(0,E.useContext)(e$),c=(0,E.useRef)({disabled:n}),d=(0,E.useRef)(!1),h=(0,E.useRef)(null),g=(0,E.useRef)(null),{disabled:p,updateMeasurementsFor:v,timeout:b}={...e4,...l},y=P(null!=v?v:r),m=(0,E.useCallback)(()=>{if(!d.current){d.current=!0;return}null!=g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{s(Array.isArray(y.current)?y.current:[y.current]),g.current=null},b)},[b]),w=ez({callback:m,disabled:p||!a}),x=(0,E.useCallback)((e,t)=>{w&&(t&&(w.unobserve(t),d.current=!1),e&&w.observe(e))},[w]),[D,C]=_(x),S=P(t);return(0,E.useEffect)(()=>{w&&D.current&&(w.disconnect(),d.current=!1,w.observe(D.current))},[D,w]),N(()=>(o({type:f.RegisterDroppable,element:{id:r,key:i,disabled:n,node:D,rect:h,data:S}}),()=>o({type:f.UnregisterDroppable,key:i,id:r})),[r]),(0,E.useEffect)(()=>{n!==c.current.disabled&&(o({type:f.SetDroppableDisabled,id:r,key:i,disabled:n}),c.current.disabled=n)},[r,i,n,o]),{active:a,rect:h,isOver:(null==u?void 0:u.id)===r,node:D,over:u,setNodeRef:C}}h={styles:{active:{opacity:"0"}}},e=>{let{active:t,dragOverlay:n}=e,r={},{styles:l,className:i}=h;if(null!=l&&l.active)for(let[e,n]of Object.entries(l.active))void 0!==n&&(r[e]=t.node.style.getPropertyValue(e),t.node.style.setProperty(e,n));if(null!=l&&l.dragOverlay)for(let[e,t]of Object.entries(l.dragOverlay))void 0!==t&&n.node.style.setProperty(e,t);return null!=i&&i.active&&t.node.classList.add(i.active),null!=i&&i.dragOverlay&&n.node.classList.add(i.dragOverlay),function(){for(let[e,n]of Object.entries(r))t.node.style.setProperty(e,n);null!=i&&i.active&&t.node.classList.remove(i.active)}}},622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),l=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,u={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:c,props:u,_owner:a.current}}t.jsx=u,t.jsxs=u},7437:function(e,t,n){e.exports=n(622)}}]);