import{j as n,r as l}from"./jsx-runtime-BJa62n0-.js";import{u as p,D as d,H as x,P as g,N as h}from"./Paginator-kdGQch_0.js";import{c as i}from"./emotion-css.development.esm-C6UEzJz8.js";import{T as a}from"./Typography-dtGcwS0X.js";import{P as c}from"./Paper-Tyotlhwi.js";import{u}from"./components-BuGUhU6K.js";import"./DefaultPropsProvider-C281ww91.js";import"./Tooltip-DDyUAJNb.js";import"./useTheme-Dhy-gWQn.js";import"./index-CWydLga-.js";import"./useIsFocusVisible-DIRFxSei.js";import"./chainPropTypes-CPkqCYVL.js";import"./ButtonBase-jjP0Lg2h.js";import"./index-DOTPFuaT.js";import"./createSvgIcon-Cn5ZKe3B.js";import"./Button-CG61Da3B.js";import"./GlobalStyles-DG2zUTQf.js";function m({stash:e,type:r="list"}){var o;const t=j(e==null?void 0:e.packs);return n.jsxs(l.Fragment,{children:[e.colorway_name&&n.jsxs(a,{variant:"body2",component:"div",children:["Colorway: ",e.colorway_name]}),e.long_yarn_weight_name&&n.jsxs(a,{variant:"body2",component:"div",children:["Weight: ",e.long_yarn_weight_name]}),t&&n.jsxs(a,{variant:"body2",component:"div",children:[t," yards"]}),((o=e.stash_status)==null?void 0:o.name)&&n.jsx(a,{variant:"body2",component:"div",children:e.stash_status.name}),e.location&&n.jsxs(a,{variant:"body2",component:"div",children:["Location: ",e.location]}),e.notes&&r==="list"&&n.jsxs(a,{variant:"body2",component:"div",children:["Notes: ",e.notes]})]})}function j(e){return e?e.reduce(function(r,t){return r+t.total_yards},0):0}const y=i`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`,f=i`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=i`
  flex-grow: 1;
`,w=i`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`,b="../../images/yarn-ball.jpg";function _({stash:e}){const r=e==null?void 0:e.photos[0];return n.jsx(c,{elevation:2,children:n.jsxs("div",{className:y,children:[n.jsx("a",{href:`https://www.ravelry.com/people/marybeshaw/stash/${e.permalink}`,target:"_blank",className:f,children:n.jsx("img",{className:w,src:(r==null?void 0:r.small_url)||b,alt:""})}),n.jsxs("div",{className:v,children:[n.jsx(a,{variant:"h2",component:"h2",children:e.name},e.id),n.jsx(m,{stash:e})]})]})},`stash-${e.id}`)}const C=i`
  // box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 200px;
  overflow: hidden;
`,N=i`
  overflow: hidden;
  object-fit: cover;
  max-width: 350px;
`,P=i`
  padding: 3px 10px 10px 10px;
`,S=i`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`,T="../../images/yarn-ball.jpg";function L({stash:e}){const r=e==null?void 0:e.photos[0];return n.jsx("div",{className:S,children:n.jsxs(c,{elevation:2,children:[n.jsx("a",{href:`https://www.ravelry.com/people/marybeshaw/stash/${e.permalink}`,target:"_blank",className:C,children:n.jsx("img",{className:N,src:(r==null?void 0:r.medium_url)||T,alt:""})}),n.jsxs("div",{className:P,children:[n.jsx(a,{variant:"h3",component:"h3",children:e.name}),n.jsx(m,{stash:e,type:"thumbnail"})]})]},`stash-${e.id}`)},e.id)}const I=i`
  margin-right: 4px; // to match the paginator form's right margin
`,R=i`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px 10px -8px; // to compensate for margins on the edge thumbnails
`;function k({stashes:e}){const{displayPrefs:r}=p(),t=r.resultsStyle==="list"?_:L;return n.jsx("div",{className:r.resultsStyle==="list"?I:R,children:e.map(o=>n.jsx(t,{stash:o},`stash-list-item-${o.id}`))})}function Q(){var s;const{stashes:e,data:r,pageProps:t}=u(),o=((s=r==null?void 0:r.paginator)==null?void 0:s.last_page)||1;return console.log("search text?",t.searchText),n.jsxs(d,{children:[n.jsx(x,{...t,children:"My Yarn Collection"}),e.length?n.jsxs(l.Fragment,{children:[n.jsx(k,{stashes:e}),n.jsx(g,{pageSize:t.pageSize,currentPage:t.currentPage,numPages:o})]}):n.jsx(h,{searchText:t.searchText}),n.jsx(a,{variant:"body2",sx:{marginLeft:"10px"},children:"To add something to your Ravelry stash, please visit Ravelry."})]})}export{Q as default};
