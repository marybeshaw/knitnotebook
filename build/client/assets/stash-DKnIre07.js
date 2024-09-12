import{j as e,r as g}from"./jsx-runtime-BJa62n0-.js";import{F as h,I as u,S as f,G as p,a as S,b as C,D as P,P as _,u as I,c as N,N as z}from"./DisplayPrefsOptions-WJMdYm0B.js";import{c as j}from"./index-quUFlI7y.js";import{B as x,M as y}from"./Tooltip-zq-lYHWG.js";import{T as a}from"./Typography-wcXED6J0.js";import{c as i}from"./emotion-css.development.esm-CNBYDLmo.js";import{P as v}from"./Paper-d-ALm8uW.js";import{u as L}from"./components-CUuv5FDo.js";import"./DefaultPropsProvider-EXnQoTJj.js";import"./useTheme-5sFMoId9.js";import"./index-COTo03wr.js";import"./createSvgIcon-DhpipJwV.js";import"./ButtonBase-KljXaplS.js";import"./useIsFocusVisible-CPlKmROo.js";import"./chainPropTypes-CPkqCYVL.js";import"./Button-fn9KT81s.js";import"./GlobalStyles-DQzmn2_Z.js";const R={recent:"Date Added",alpha:"A to Z",weight:"Weight",colorfamily:"Color",_yards:"Most Yardage"};function D({dataType:t="stash",sortOrder:n}){const[,r]=j(),s=R;function m(l){r(o=>(o.set("sortOrder",l.target.value),o),{replace:!1})}return e.jsx(x,{sx:{marginRight:"10px"},children:e.jsxs(h,{fullWidth:!0,children:[e.jsx(u,{id:"sort-by-label",children:"Sort By:"}),e.jsx(f,{labelId:"sort-by-label",id:"sort-by-select",value:n,label:"Sort By",autoWidth:!1,defaultValue:n,onChange:m,children:Object.keys(s).map(l=>e.jsx(y,{value:l,children:s[l]},l))})]})})}function W({searchText:t,sortOrder:n,dataType:r="stash",children:s}){return e.jsxs(p,{container:!0,spacing:3,columnSpacing:{xs:1,sm:2,md:3},disableEqualOverflow:!0,sx:{marginBottom:"10px"},children:[e.jsx(p,{xs:12,sm:r==="favorites"?12:6,md:r==="favorites"?3:4,children:e.jsx(a,{variant:"h1",component:"h1",sx:{padding:"10px"},children:s})}),r==="favorites"&&e.jsx(p,{xs:12,sm:6,md:5,sx:{alignSelf:"center",textAlign:"right"},children:e.jsx(S,{})}),e.jsxs(p,{xs:12,sm:6,md:r==="favorites"?4:6,display:"flex",justifyContent:"right",alignItems:"right",children:[e.jsx(C,{searchText:t}),r==="stash"&&e.jsx(D,{sortOrder:n}),e.jsx(P,{})]})]})}const k=[10,20,50];function T({pageSize:t,currentPage:n,numPages:r}){const[,s]=j();function m(o,c){s(d=>(d.set("currentPage",c),d),{replace:!1})}function l(o){s(c=>{const d=o.target.value,w=c.get("pageSize")*(c.get("currentPage")-1);return c.set("pageSize",d),c.set("currentPage",Math.floor(w/d+1)),c},{replace:!1})}return e.jsxs(x,{display:"flex",justifyContent:"space-between",sx:{marginRight:"-4px"},children:[e.jsx(x,{sx:{minWidth:120},children:e.jsxs(h,{fullWidth:!0,size:"small",children:[e.jsx(u,{id:"page-size-label",children:"Page Size"}),e.jsx(f,{labelId:"page-size-label",id:"page-size",value:t,label:"Page Size",onChange:l,children:k.map(o=>e.jsx(y,{value:o,children:o},o))})]})}),e.jsx(_,{count:r,variant:"outlined",shape:"rounded",size:"large",page:+n,onChange:m})]})}function b({stash:t,type:n="list"}){var s;const r=$(t==null?void 0:t.packs);return e.jsxs(g.Fragment,{children:[t.colorway_name&&e.jsxs(a,{variant:"body2",component:"div",children:["Colorway: ",t.colorway_name]}),t.long_yarn_weight_name&&e.jsxs(a,{variant:"body2",component:"div",children:["Weight: ",t.long_yarn_weight_name]}),r&&e.jsxs(a,{variant:"body2",component:"div",children:[r," yards"]}),((s=t.stash_status)==null?void 0:s.name)&&e.jsx(a,{variant:"body2",component:"div",children:t.stash_status.name}),t.location&&e.jsxs(a,{variant:"body2",component:"div",children:["Location: ",t.location]}),t.notes&&n==="list"&&e.jsxs(a,{variant:"body2",component:"div",children:["Notes: ",t.notes]})]})}function $(t){return t?t.reduce(function(n,r){return n+r.total_yards},0):0}const B=i`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`,F=i`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`,M=i`
  flex-grow: 1;
`,Y=i`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`,A="../../images/yarn-ball.jpg";function E({stash:t}){const n=t==null?void 0:t.photos[0];return e.jsx(v,{elevation:2,children:e.jsxs("div",{className:B,children:[e.jsx("a",{href:`https://www.ravelry.com/people/marybeshaw/stash/${t.permalink}`,target:"_blank",className:F,children:e.jsx("img",{className:Y,src:(n==null?void 0:n.small_url)||A,alt:""})}),e.jsxs("div",{className:M,children:[e.jsx(a,{variant:"h2",component:"h2",children:t.name},t.id),e.jsx(b,{stash:t})]})]})},`stash-${t.id}`)}const G=i`
  // box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 200px;
  overflow: hidden;
`,O=i`
  overflow: hidden;
  object-fit: cover;
  max-width: 350px;
`,U=i`
  padding: 3px 10px 10px 10px;
`,q=i`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`,H="../../images/yarn-ball.jpg";function V({stash:t}){const n=t==null?void 0:t.photos[0];return e.jsx("div",{className:q,children:e.jsxs(v,{elevation:2,children:[e.jsx("a",{href:`https://www.ravelry.com/people/marybeshaw/stash/${t.permalink}`,target:"_blank",className:G,children:e.jsx("img",{className:O,src:(n==null?void 0:n.medium_url)||H,alt:""})}),e.jsxs("div",{className:U,children:[e.jsx(a,{variant:"h3",component:"h3",children:t.name}),e.jsx(b,{stash:t,type:"thumbnail"})]})]},`stash-${t.id}`)},t.id)}const Z=i`
  margin-right: 4px; // to match the paginator form's right margin
`,J=i`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px 10px -8px; // to compensate for margins on the edge thumbnails
`;function Q({stashes:t}){const{displayPrefs:n}=I(),r=n.resultsStyle==="list"?E:V;return e.jsx("div",{className:n.resultsStyle==="list"?Z:J,children:t.map(s=>e.jsx(r,{stash:s},`stash-list-item-${s.id}`))})}function he(){var m;const{stashes:t,data:n,pageProps:r}=L(),s=((m=n==null?void 0:n.paginator)==null?void 0:m.last_page)||1;return e.jsxs(N,{children:[e.jsx(W,{...r,children:"My Yarn Collection"}),t.length?e.jsxs(g.Fragment,{children:[e.jsx(Q,{stashes:t}),e.jsx(T,{pageSize:r.pageSize,currentPage:r.currentPage,numPages:s})]}):e.jsx(z,{searchText:r.searchText}),e.jsx(a,{variant:"body2",sx:{marginLeft:"10px"},children:"To add something to your Ravelry stash, please visit Ravelry."})]})}export{he as default};
