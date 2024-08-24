import{P as e,_ as Y,d as oe,m as se,u as Re,g as Ke}from"./DefaultPropsProvider-CI10phDB.js";import{r as a,R as X,j as w}from"./jsx-runtime-BJa62n0-.js";import{c as E,g as ye,s as re,a as Ae}from"./Typography-_VhkBNkm.js";import{b as Xe,a as fe,u as Ye,e as qe}from"./useIsFocusVisible-BK8dAlmh.js";const We=typeof window<"u"?a.useLayoutEffect:a.useEffect,He=e.oneOfType([e.func,e.object]);function H(t){const n=a.useRef(t);return We(()=>{n.current=t}),a.useRef((...s)=>(0,n.current)(...s)).current}function te(t,n){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,u){return s.__proto__=u,s},te(t,n)}function Ge(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,te(t,n)}const de=X.createContext(null);function Je(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ie(t,n){var s=function(o){return n&&a.isValidElement(o)?n(o):o},u=Object.create(null);return t&&a.Children.map(t,function(r){return r}).forEach(function(r){u[r.key]=s(r)}),u}function Qe(t,n){t=t||{},n=n||{};function s(h){return h in n?n[h]:t[h]}var u=Object.create(null),r=[];for(var o in t)o in n?r.length&&(u[o]=r,r=[]):r.push(o);var i,p={};for(var c in n){if(u[c])for(i=0;i<u[c].length;i++){var f=u[c][i];p[u[c][i]]=s(f)}p[c]=s(c)}for(i=0;i<r.length;i++)p[r[i]]=s(r[i]);return p}function N(t,n,s){return s[n]!=null?s[n]:t.props[n]}function Ze(t,n){return ie(t.children,function(s){return a.cloneElement(s,{onExited:n.bind(null,s),in:!0,appear:N(s,"appear",t),enter:N(s,"enter",t),exit:N(s,"exit",t)})})}function et(t,n,s){var u=ie(t.children),r=Qe(n,u);return Object.keys(r).forEach(function(o){var i=r[o];if(a.isValidElement(i)){var p=o in n,c=o in u,f=n[o],h=a.isValidElement(f)&&!f.props.in;c&&(!p||h)?r[o]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:N(i,"exit",t),enter:N(i,"enter",t)}):!c&&p&&!h?r[o]=a.cloneElement(i,{in:!1}):c&&p&&a.isValidElement(f)&&(r[o]=a.cloneElement(i,{onExited:s.bind(null,i),in:f.props.in,exit:N(i,"exit",t),enter:N(i,"enter",t)}))}}),r}var tt=Object.values||function(t){return Object.keys(t).map(function(n){return t[n]})},nt={component:"div",childFactory:function(n){return n}},ae=function(t){Ge(n,t);function n(u,r){var o;o=t.call(this,u,r)||this;var i=o.handleExited.bind(Je(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var s=n.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(r,o){var i=o.children,p=o.handleExited,c=o.firstRender;return{children:c?Ze(r,p):et(r,i,p),firstRender:!1}},s.handleExited=function(r,o){var i=ie(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(p){var c=Y({},p.children);return delete c[r.key],{children:c}}))},s.render=function(){var r=this.props,o=r.component,i=r.childFactory,p=oe(r,["component","childFactory"]),c=this.state.contextValue,f=tt(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,o===null?X.createElement(de.Provider,{value:c},f):X.createElement(de.Provider,{value:c},X.createElement(o,p,f))},n}(X.Component);ae.propTypes={component:e.any,children:e.node,appear:e.bool,enter:e.bool,exit:e.bool,childFactory:e.func};ae.defaultProps=nt;function Te(t){const{className:n,classes:s,pulsate:u=!1,rippleX:r,rippleY:o,rippleSize:i,in:p,onExited:c,timeout:f}=t,[h,y]=a.useState(!1),g=E(n,s.ripple,s.rippleVisible,u&&s.ripplePulsate),v={width:i,height:i,top:-(i/2)+o,left:-(i/2)+r},m=E(s.child,h&&s.childLeaving,u&&s.childPulsate);return!p&&!h&&y(!0),a.useEffect(()=>{if(!p&&c!=null){const T=setTimeout(c,f);return()=>{clearTimeout(T)}}},[c,p,f]),w.jsx("span",{className:g,style:v,children:w.jsx("span",{className:m})})}Te.propTypes={classes:e.object.isRequired,className:e.string,in:e.bool,onExited:e.func,pulsate:e.bool,rippleSize:e.number,rippleX:e.number,rippleY:e.number,timeout:e.number.isRequired};const b=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ot=["center","classes","className"];let G=t=>t,he,me,be,ge;const ne=550,st=80,rt=se(he||(he=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),it=se(me||(me=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),at=se(be||(be=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),lt=re("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ut=re(Te,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),b.rippleVisible,rt,ne,({theme:t})=>t.transitions.easing.easeInOut,b.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,b.child,b.childLeaving,it,ne,({theme:t})=>t.transitions.easing.easeInOut,b.childPulsate,at,({theme:t})=>t.transitions.easing.easeInOut),Me=a.forwardRef(function(n,s){const u=Re({props:n,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:i}=u,p=oe(u,ot),[c,f]=a.useState([]),h=a.useRef(0),y=a.useRef(null);a.useEffect(()=>{y.current&&(y.current(),y.current=null)},[c]);const g=a.useRef(!1),v=Xe(),m=a.useRef(null),T=a.useRef(null),I=a.useCallback(d=>{const{pulsate:M,rippleX:x,rippleY:O,rippleSize:_,cb:z}=d;f(C=>[...C,w.jsx(ut,{classes:{ripple:E(o.ripple,b.ripple),rippleVisible:E(o.rippleVisible,b.rippleVisible),ripplePulsate:E(o.ripplePulsate,b.ripplePulsate),child:E(o.child,b.child),childLeaving:E(o.childLeaving,b.childLeaving),childPulsate:E(o.childPulsate,b.childPulsate)},timeout:ne,pulsate:M,rippleX:x,rippleY:O,rippleSize:_},h.current)]),h.current+=1,y.current=z},[o]),F=a.useCallback((d={},M={},x=()=>{})=>{const{pulsate:O=!1,center:_=r||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&g.current){g.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(g.current=!0);const C=z?null:T.current,j=C?C.getBoundingClientRect():{width:0,height:0,left:0,top:0};let P,L,D;if(_||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)P=Math.round(j.width/2),L=Math.round(j.height/2);else{const{clientX:S,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;P=Math.round(S-j.left),L=Math.round(V-j.top)}if(_)D=Math.sqrt((2*j.width**2+j.height**2)/3),D%2===0&&(D+=1);else{const S=Math.max(Math.abs((C?C.clientWidth:0)-P),P)*2+2,V=Math.max(Math.abs((C?C.clientHeight:0)-L),L)*2+2;D=Math.sqrt(S**2+V**2)}d!=null&&d.touches?m.current===null&&(m.current=()=>{I({pulsate:O,rippleX:P,rippleY:L,rippleSize:D,cb:x})},v.start(st,()=>{m.current&&(m.current(),m.current=null)})):I({pulsate:O,rippleX:P,rippleY:L,rippleSize:D,cb:x})},[r,I,v]),$=a.useCallback(()=>{F({},{pulsate:!0})},[F]),U=a.useCallback((d,M)=>{if(v.clear(),(d==null?void 0:d.type)==="touchend"&&m.current){m.current(),m.current=null,v.start(0,()=>{U(d,M)});return}m.current=null,f(x=>x.length>0?x.slice(1):x),y.current=M},[v]);return a.useImperativeHandle(s,()=>({pulsate:$,start:F,stop:U}),[$,F,U]),w.jsx(lt,Y({className:E(b.root,o.root,i),ref:T},p,{children:w.jsx(ae,{component:null,exit:!0,children:c})}))});Me.propTypes={center:e.bool,classes:e.object,className:e.string};function ct(t){return Ke("MuiButtonBase",t)}const pt=ye("MuiButtonBase",["root","disabled","focusVisible"]),ft=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],dt=t=>{const{disabled:n,focusVisible:s,focusVisibleClassName:u,classes:r}=t,i=Ae({root:["root",n&&"disabled",s&&"focusVisible"]},ct,r);return s&&u&&(i.root+=` ${u}`),i},ht=re("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,n)=>n.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=a.forwardRef(function(n,s){const u=Re({props:n,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:i,className:p,component:c="button",disabled:f=!1,disableRipple:h=!1,disableTouchRipple:y=!1,focusRipple:g=!1,LinkComponent:v="a",onBlur:m,onClick:T,onContextMenu:I,onDragLeave:F,onFocus:$,onFocusVisible:U,onKeyDown:d,onKeyUp:M,onMouseDown:x,onMouseLeave:O,onMouseUp:_,onTouchEnd:z,onTouchMove:C,onTouchStart:j,tabIndex:P=0,TouchRippleProps:L,touchRippleRef:D,type:S}=u,V=oe(u,ft),K=a.useRef(null),R=a.useRef(null),Ce=fe(R,D),{isFocusVisibleRef:le,onFocus:Ee,onBlur:ve,ref:Pe}=Ye(),[k,q]=a.useState(!1);f&&k&&q(!1),a.useImperativeHandle(r,()=>({focusVisible:()=>{q(!0),K.current.focus()}}),[]);const[J,Ve]=a.useState(!1);a.useEffect(()=>{Ve(!0)},[]);const Q=J&&!h&&!f;a.useEffect(()=>{k&&g&&!h&&J&&R.current.pulsate()},[h,g,k,J]);function B(l,ce,ze=y){return H(pe=>(ce&&ce(pe),!ze&&R.current&&R.current[l](pe),!0))}const Be=B("start",x),je=B("stop",I),Le=B("stop",F),De=B("stop",_),we=B("stop",l=>{k&&l.preventDefault(),O&&O(l)}),Oe=B("start",j),Se=B("stop",z),ke=B("stop",C),Ne=B("stop",l=>{ve(l),le.current===!1&&q(!1),m&&m(l)},!1),Fe=H(l=>{K.current||(K.current=l.currentTarget),Ee(l),le.current===!0&&(q(!0),U&&U(l)),$&&$(l)}),Z=()=>{const l=K.current;return c&&c!=="button"&&!(l.tagName==="A"&&l.href)},ee=a.useRef(!1),Ue=H(l=>{g&&!ee.current&&k&&R.current&&l.key===" "&&(ee.current=!0,R.current.stop(l,()=>{R.current.start(l)})),l.target===l.currentTarget&&Z()&&l.key===" "&&l.preventDefault(),d&&d(l),l.target===l.currentTarget&&Z()&&l.key==="Enter"&&!f&&(l.preventDefault(),T&&T(l))}),_e=H(l=>{g&&l.key===" "&&R.current&&k&&!l.defaultPrevented&&(ee.current=!1,R.current.stop(l,()=>{R.current.pulsate(l)})),M&&M(l),T&&l.target===l.currentTarget&&Z()&&l.key===" "&&!l.defaultPrevented&&T(l)});let W=c;W==="button"&&(V.href||V.to)&&(W=v);const A={};W==="button"?(A.type=S===void 0?"button":S,A.disabled=f):(!V.href&&!V.to&&(A.role="button"),f&&(A["aria-disabled"]=f));const Ie=fe(s,Pe,K);a.useEffect(()=>{Q&&!R.current&&console.error(["MUI: The `component` prop provided to ButtonBase is invalid.","Please make sure the children prop is rendered in this custom component."].join(`
`))},[Q]);const ue=Y({},u,{centerRipple:o,component:c,disabled:f,disableRipple:h,disableTouchRipple:y,focusRipple:g,tabIndex:P,focusVisible:k}),$e=dt(ue);return w.jsxs(ht,Y({as:W,className:E($e.root,p),ownerState:ue,onBlur:Ne,onClick:T,onContextMenu:je,onFocus:Fe,onKeyDown:Ue,onKeyUp:_e,onMouseDown:Be,onMouseLeave:we,onMouseUp:De,onDragLeave:Le,onTouchEnd:Se,onTouchMove:ke,onTouchStart:Oe,ref:Ie,tabIndex:f?-1:P,type:S},A,V,{children:[i,Q?w.jsx(Me,Y({ref:Ce,center:o},L)):null]}))});mt.propTypes={action:He,centerRipple:e.bool,children:e.node,classes:e.object,className:e.string,component:qe,disabled:e.bool,disableRipple:e.bool,disableTouchRipple:e.bool,focusRipple:e.bool,focusVisibleClassName:e.string,href:e.any,LinkComponent:e.elementType,onBlur:e.func,onClick:e.func,onContextMenu:e.func,onDragLeave:e.func,onFocus:e.func,onFocusVisible:e.func,onKeyDown:e.func,onKeyUp:e.func,onMouseDown:e.func,onMouseLeave:e.func,onMouseUp:e.func,onTouchEnd:e.func,onTouchMove:e.func,onTouchStart:e.func,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),tabIndex:e.number,TouchRippleProps:e.object,touchRippleRef:e.oneOfType([e.func,e.shape({current:e.shape({pulsate:e.func.isRequired,start:e.func.isRequired,stop:e.func.isRequired})})]),type:e.oneOfType([e.oneOf(["button","reset","submit"]),e.string])};const xe=a.createContext({});function Mt({user:t,children:n}){const[s,u]=a.useState();return w.jsx(xe.Provider,{value:{user:s?void 0:t,setLoggedOut:u},children:n})}function xt(){const{user:t,setLoggedOut:n}=a.useContext(xe);return{user:t,setLoggedOut:n}}export{mt as B,de as T,Mt as U,Ge as _,We as a,H as b,He as r,xt as u};
