import{j as n,r as l}from"./jsx-runtime-BJa62n0-.js";import{u as p,D as d,H as x,P as g,N as h}from"./Paginator-BlDmNtSt.js";import{c as t}from"./emotion-css.development.esm-CNBYDLmo.js";import{T as a}from"./Typography-wcXED6J0.js";import{P as m}from"./Paper-d-ALm8uW.js";import{u}from"./components-BuGUhU6K.js";import"./index-DOTPFuaT.js";import"./DefaultPropsProvider-EXnQoTJj.js";import"./createSvgIcon-DhpipJwV.js";import"./useIsFocusVisible-CPlKmROo.js";import"./chainPropTypes-CPkqCYVL.js";import"./ButtonBase-KljXaplS.js";import"./Tooltip-BKiMUKxq.js";import"./useTheme-5sFMoId9.js";import"./index-COTo03wr.js";import"./Button-fn9KT81s.js";import"./GlobalStyles-DQzmn2_Z.js";function c({stash:e,type:i="list"}){var o;const r=j(e==null?void 0:e.packs);return n.jsxs(l.Fragment,{children:[e.colorway_name&&n.jsxs(a,{variant:"body2",component:"div",children:["Colorway: ",e.colorway_name]}),e.long_yarn_weight_name&&n.jsxs(a,{variant:"body2",component:"div",children:["Weight: ",e.long_yarn_weight_name]}),r&&n.jsxs(a,{variant:"body2",component:"div",children:[r," yards"]}),((o=e.stash_status)==null?void 0:o.name)&&n.jsx(a,{variant:"body2",component:"div",children:e.stash_status.name}),e.location&&n.jsxs(a,{variant:"body2",component:"div",children:["Location: ",e.location]}),e.notes&&i==="list"&&n.jsxs(a,{variant:"body2",component:"div",children:["Notes: ",e.notes]})]})}function j(e){return e?e.reduce(function(i,r){return i+r.total_yards},0):0}const y=t`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`,f=t`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=t`
  flex-grow: 1;
`,w=t`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`,b="../../images/yarn-ball.jpg";function _({stash:e}){const i=e==null?void 0:e.photos[0];return n.jsx(m,{elevation:2,children:n.jsxs("div",{className:y,children:[n.jsx("a",{href:`https://www.ravelry.com/people/marybeshaw/stash/${e.permalink}`,target:"_blank",className:f,children:n.jsx("img",{className:w,src:(i==null?void 0:i.small_url)||b,alt:""})}),n.jsxs("div",{className:v,children:[n.jsx(a,{variant:"h2",component:"h2",children:e.name},e.id),n.jsx(c,{stash:e})]})]})},`stash-${e.id}`)}const C=t`
  // box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 200px;
  overflow: hidden;
`,N=t`
  overflow: hidden;
  object-fit: cover;
  max-width: 350px;
`,P=t`
  padding: 3px 10px 10px 10px;
`,S=t`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`,L="../../images/yarn-ball.jpg";function T({stash:e}){const i=e==null?void 0:e.photos[0];return n.jsx("div",{className:S,children:n.jsxs(m,{elevation:2,children:[n.jsx("a",{href:`https://www.ravelry.com/people/marybeshaw/stash/${e.permalink}`,target:"_blank",className:C,children:n.jsx("img",{className:N,src:(i==null?void 0:i.medium_url)||L,alt:""})}),n.jsxs("div",{className:P,children:[n.jsx(a,{variant:"h3",component:"h3",children:e.name}),n.jsx(c,{stash:e,type:"thumbnail"})]})]},`stash-${e.id}`)},e.id)}const I=t`
  margin-right: 4px; // to match the paginator form's right margin
`,R=t`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px 10px -8px; // to compensate for margins on the edge thumbnails
`;function k({stashes:e}){const{displayPrefs:i}=p(),r=i.resultsStyle==="list"?_:T;return n.jsx("div",{className:i.resultsStyle==="list"?I:R,children:e.map(o=>n.jsx(r,{stash:o},`stash-list-item-${o.id}`))})}function Q(){var s;const{stashes:e,data:i,pageProps:r}=u(),o=((s=i==null?void 0:i.paginator)==null?void 0:s.last_page)||1;return n.jsxs(d,{children:[n.jsx(x,{...r,children:"My Yarn Collection"}),e.length?n.jsxs(l.Fragment,{children:[n.jsx(k,{stashes:e}),n.jsx(g,{pageSize:r.pageSize,currentPage:r.currentPage,numPages:o})]}):n.jsx(h,{searchText:r.searchText}),n.jsx(a,{variant:"body2",sx:{marginLeft:"10px"},children:"To add something to your Ravelry stash, please visit Ravelry."})]})}export{Q as default};
