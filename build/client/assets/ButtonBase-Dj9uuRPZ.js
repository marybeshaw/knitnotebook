import{P as e,_ as Y,f as oe,n as se,u as Re,b as ze}from"./DefaultPropsProvider-DAnhN6oH.js";import{r as l,R as X,j as F}from"./jsx-runtime-BJa62n0-.js";import{c as C,g as ye,s as ie,a as Ke}from"./Typography-CbunWm-a.js";import{b as Ae,a as fe,u as Xe,e as Ye}from"./useIsFocusVisible-VR3Qdb5l.js";const qe=typeof window<"u"?l.useLayoutEffect:l.useEffect,We=e.oneOfType([e.func,e.object]);function H(t){const n=l.useRef(t);return qe(()=>{n.current=t}),l.useRef((...i)=>(0,n.current)(...i)).current}function te(t,n){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,u){return i.__proto__=u,i},te(t,n)}function He(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,te(t,n)}const de=X.createContext(null);function Ge(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function re(t,n){var i=function(o){return n&&l.isValidElement(o)?n(o):o},u=Object.create(null);return t&&l.Children.map(t,function(s){return s}).forEach(function(s){u[s.key]=i(s)}),u}function Je(t,n){t=t||{},n=n||{};function i(h){return h in n?n[h]:t[h]}var u=Object.create(null),s=[];for(var o in t)o in n?s.length&&(u[o]=s,s=[]):s.push(o);var r,p={};for(var c in n){if(u[c])for(r=0;r<u[c].length;r++){var f=u[c][r];p[u[c][r]]=i(f)}p[c]=i(c)}for(r=0;r<s.length;r++)p[s[r]]=i(s[r]);return p}function N(t,n,i){return i[n]!=null?i[n]:t.props[n]}function Qe(t,n){return re(t.children,function(i){return l.cloneElement(i,{onExited:n.bind(null,i),in:!0,appear:N(i,"appear",t),enter:N(i,"enter",t),exit:N(i,"exit",t)})})}function Ze(t,n,i){var u=re(t.children),s=Je(n,u);return Object.keys(s).forEach(function(o){var r=s[o];if(l.isValidElement(r)){var p=o in n,c=o in u,f=n[o],h=l.isValidElement(f)&&!f.props.in;c&&(!p||h)?s[o]=l.cloneElement(r,{onExited:i.bind(null,r),in:!0,exit:N(r,"exit",t),enter:N(r,"enter",t)}):!c&&p&&!h?s[o]=l.cloneElement(r,{in:!1}):c&&p&&l.isValidElement(f)&&(s[o]=l.cloneElement(r,{onExited:i.bind(null,r),in:f.props.in,exit:N(r,"exit",t),enter:N(r,"enter",t)}))}}),s}var et=Object.values||function(t){return Object.keys(t).map(function(n){return t[n]})},tt={component:"div",childFactory:function(n){return n}},ae=function(t){He(n,t);function n(u,s){var o;o=t.call(this,u,s)||this;var r=o.handleExited.bind(Ge(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}var i=n.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(s,o){var r=o.children,p=o.handleExited,c=o.firstRender;return{children:c?Qe(s,p):Ze(s,r,p),firstRender:!1}},i.handleExited=function(s,o){var r=re(this.props.children);s.key in r||(s.props.onExited&&s.props.onExited(o),this.mounted&&this.setState(function(p){var c=Y({},p.children);return delete c[s.key],{children:c}}))},i.render=function(){var s=this.props,o=s.component,r=s.childFactory,p=oe(s,["component","childFactory"]),c=this.state.contextValue,f=et(this.state.children).map(r);return delete p.appear,delete p.enter,delete p.exit,o===null?X.createElement(de.Provider,{value:c},f):X.createElement(de.Provider,{value:c},X.createElement(o,p,f))},n}(X.Component);ae.propTypes={component:e.any,children:e.node,appear:e.bool,enter:e.bool,exit:e.bool,childFactory:e.func};ae.defaultProps=tt;function Te(t){const{className:n,classes:i,pulsate:u=!1,rippleX:s,rippleY:o,rippleSize:r,in:p,onExited:c,timeout:f}=t,[h,y]=l.useState(!1),g=C(n,i.ripple,i.rippleVisible,u&&i.ripplePulsate),v={width:r,height:r,top:-(r/2)+o,left:-(r/2)+s},m=C(i.child,h&&i.childLeaving,u&&i.childPulsate);return!p&&!h&&y(!0),l.useEffect(()=>{if(!p&&c!=null){const T=setTimeout(c,f);return()=>{clearTimeout(T)}}},[c,p,f]),F.jsx("span",{className:g,style:v,children:F.jsx("span",{className:m})})}Te.propTypes={classes:e.object.isRequired,className:e.string,in:e.bool,onExited:e.func,pulsate:e.bool,rippleSize:e.number,rippleX:e.number,rippleY:e.number,timeout:e.number.isRequired};const b=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),nt=["center","classes","className"];let G=t=>t,he,me,be,ge;const ne=550,ot=80,st=se(he||(he=G`
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
`)),rt=se(be||(be=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),at=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),lt=ie(Te,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=G`
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
`),b.rippleVisible,st,ne,({theme:t})=>t.transitions.easing.easeInOut,b.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,b.child,b.childLeaving,it,ne,({theme:t})=>t.transitions.easing.easeInOut,b.childPulsate,rt,({theme:t})=>t.transitions.easing.easeInOut),Me=l.forwardRef(function(n,i){const u=Re({props:n,name:"MuiTouchRipple"}),{center:s=!1,classes:o={},className:r}=u,p=oe(u,nt),[c,f]=l.useState([]),h=l.useRef(0),y=l.useRef(null);l.useEffect(()=>{y.current&&(y.current(),y.current=null)},[c]);const g=l.useRef(!1),v=Ae(),m=l.useRef(null),T=l.useRef(null),U=l.useCallback(d=>{const{pulsate:M,rippleX:x,rippleY:L,rippleSize:I,cb:z}=d;f(E=>[...E,F.jsx(lt,{classes:{ripple:C(o.ripple,b.ripple),rippleVisible:C(o.rippleVisible,b.rippleVisible),ripplePulsate:C(o.ripplePulsate,b.ripplePulsate),child:C(o.child,b.child),childLeaving:C(o.childLeaving,b.childLeaving),childPulsate:C(o.childPulsate,b.childPulsate)},timeout:ne,pulsate:M,rippleX:x,rippleY:L,rippleSize:I},h.current)]),h.current+=1,y.current=z},[o]),O=l.useCallback((d={},M={},x=()=>{})=>{const{pulsate:L=!1,center:I=s||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&g.current){g.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(g.current=!0);const E=z?null:T.current,j=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let P,D,w;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)P=Math.round(j.width/2),D=Math.round(j.height/2);else{const{clientX:S,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;P=Math.round(S-j.left),D=Math.round(V-j.top)}if(I)w=Math.sqrt((2*j.width**2+j.height**2)/3),w%2===0&&(w+=1);else{const S=Math.max(Math.abs((E?E.clientWidth:0)-P),P)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-D),D)*2+2;w=Math.sqrt(S**2+V**2)}d!=null&&d.touches?m.current===null&&(m.current=()=>{U({pulsate:L,rippleX:P,rippleY:D,rippleSize:w,cb:x})},v.start(ot,()=>{m.current&&(m.current(),m.current=null)})):U({pulsate:L,rippleX:P,rippleY:D,rippleSize:w,cb:x})},[s,U,v]),$=l.useCallback(()=>{O({},{pulsate:!0})},[O]),_=l.useCallback((d,M)=>{if(v.clear(),(d==null?void 0:d.type)==="touchend"&&m.current){m.current(),m.current=null,v.start(0,()=>{_(d,M)});return}m.current=null,f(x=>x.length>0?x.slice(1):x),y.current=M},[v]);return l.useImperativeHandle(i,()=>({pulsate:$,start:O,stop:_}),[$,O,_]),F.jsx(at,Y({className:C(b.root,o.root,r),ref:T},p,{children:F.jsx(ae,{component:null,exit:!0,children:c})}))});Me.propTypes={center:e.bool,classes:e.object,className:e.string};function ut(t){return ze("MuiButtonBase",t)}const ct=ye("MuiButtonBase",["root","disabled","focusVisible"]),pt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ft=t=>{const{disabled:n,focusVisible:i,focusVisibleClassName:u,classes:s}=t,r=Ke({root:["root",n&&"disabled",i&&"focusVisible"]},ut,s);return i&&u&&(r.root+=` ${u}`),r},dt=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,n)=>n.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ht=l.forwardRef(function(n,i){const u=Re({props:n,name:"MuiButtonBase"}),{action:s,centerRipple:o=!1,children:r,className:p,component:c="button",disabled:f=!1,disableRipple:h=!1,disableTouchRipple:y=!1,focusRipple:g=!1,LinkComponent:v="a",onBlur:m,onClick:T,onContextMenu:U,onDragLeave:O,onFocus:$,onFocusVisible:_,onKeyDown:d,onKeyUp:M,onMouseDown:x,onMouseLeave:L,onMouseUp:I,onTouchEnd:z,onTouchMove:E,onTouchStart:j,tabIndex:P=0,TouchRippleProps:D,touchRippleRef:w,type:S}=u,V=oe(u,pt),K=l.useRef(null),R=l.useRef(null),xe=fe(R,w),{isFocusVisibleRef:le,onFocus:Ee,onBlur:Ce,ref:ve}=Xe(),[k,q]=l.useState(!1);f&&k&&q(!1),l.useImperativeHandle(s,()=>({focusVisible:()=>{q(!0),K.current.focus()}}),[]);const[J,Pe]=l.useState(!1);l.useEffect(()=>{Pe(!0)},[]);const Q=J&&!h&&!f;l.useEffect(()=>{k&&g&&!h&&J&&R.current.pulsate()},[h,g,k,J]);function B(a,ce,$e=y){return H(pe=>(ce&&ce(pe),!$e&&R.current&&R.current[a](pe),!0))}const Ve=B("start",x),Be=B("stop",U),je=B("stop",O),De=B("stop",I),we=B("stop",a=>{k&&a.preventDefault(),L&&L(a)}),Le=B("start",j),Se=B("stop",z),ke=B("stop",E),Ne=B("stop",a=>{Ce(a),le.current===!1&&q(!1),m&&m(a)},!1),Fe=H(a=>{K.current||(K.current=a.currentTarget),Ee(a),le.current===!0&&(q(!0),_&&_(a)),$&&$(a)}),Z=()=>{const a=K.current;return c&&c!=="button"&&!(a.tagName==="A"&&a.href)},ee=l.useRef(!1),Oe=H(a=>{g&&!ee.current&&k&&R.current&&a.key===" "&&(ee.current=!0,R.current.stop(a,()=>{R.current.start(a)})),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),d&&d(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),T&&T(a))}),_e=H(a=>{g&&a.key===" "&&R.current&&k&&!a.defaultPrevented&&(ee.current=!1,R.current.stop(a,()=>{R.current.pulsate(a)})),M&&M(a),T&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&T(a)});let W=c;W==="button"&&(V.href||V.to)&&(W=v);const A={};W==="button"?(A.type=S===void 0?"button":S,A.disabled=f):(!V.href&&!V.to&&(A.role="button"),f&&(A["aria-disabled"]=f));const Ie=fe(i,ve,K);l.useEffect(()=>{Q&&!R.current&&console.error(["MUI: The `component` prop provided to ButtonBase is invalid.","Please make sure the children prop is rendered in this custom component."].join(`
`))},[Q]);const ue=Y({},u,{centerRipple:o,component:c,disabled:f,disableRipple:h,disableTouchRipple:y,focusRipple:g,tabIndex:P,focusVisible:k}),Ue=ft(ue);return F.jsxs(dt,Y({as:W,className:C(Ue.root,p),ownerState:ue,onBlur:Ne,onClick:T,onContextMenu:Be,onFocus:Fe,onKeyDown:Oe,onKeyUp:_e,onMouseDown:Ve,onMouseLeave:we,onMouseUp:De,onDragLeave:je,onTouchEnd:Se,onTouchMove:ke,onTouchStart:Le,ref:Ie,tabIndex:f?-1:P,type:S},A,V,{children:[r,Q?F.jsx(Me,Y({ref:xe,center:o},D)):null]}))});ht.propTypes={action:We,centerRipple:e.bool,children:e.node,classes:e.object,className:e.string,component:Ye,disabled:e.bool,disableRipple:e.bool,disableTouchRipple:e.bool,focusRipple:e.bool,focusVisibleClassName:e.string,href:e.any,LinkComponent:e.elementType,onBlur:e.func,onClick:e.func,onContextMenu:e.func,onDragLeave:e.func,onFocus:e.func,onFocusVisible:e.func,onKeyDown:e.func,onKeyUp:e.func,onMouseDown:e.func,onMouseLeave:e.func,onMouseUp:e.func,onTouchEnd:e.func,onTouchMove:e.func,onTouchStart:e.func,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),tabIndex:e.number,TouchRippleProps:e.object,touchRippleRef:e.oneOfType([e.func,e.shape({current:e.shape({pulsate:e.func.isRequired,start:e.func.isRequired,stop:e.func.isRequired})})]),type:e.oneOfType([e.oneOf(["button","reset","submit"]),e.string])};export{ht as B,de as T,He as _,H as a,We as r,qe as u};
