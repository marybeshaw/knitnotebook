import { jsx, jsxs } from "react/jsx-runtime";
import * as ReactDOMServer from "react-dom/server";
import { RemixServer, Meta, Links, ScrollRestoration, Scripts, Outlet, useRouteError, isRouteErrorResponse, useLoaderData, json, Link as Link$1 } from "@remix-run/react";
import createCache from "@emotion/cache";
import { createTheme, colors, ThemeProvider, CssBaseline, Typography, Link, SvgIcon, Container, Box, unstable_useEnhancedEffect, Button } from "@mui/material";
import { CacheProvider, withEmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import * as React from "react";
import React__default from "react";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import axios from "axios";
import { createCookieSessionStorage } from "@remix-run/node";
function createEmotionCache() {
  return createCache({ key: "css" });
}
const skippySharp = ["Skippy Sharp", "sans-serif"].join(",");
const capitolina = ["capitolina", "serif"].join(",");
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: colors.red.A400
    }
  },
  typography: {
    fontFamily: skippySharp,
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      fontFamily: capitolina
    },
    h1: {
      fontFamily: capitolina,
      fontWeight: 700,
      fontSize: 32
    },
    h2: {
      fontFamily: capitolina,
      fontWeight: 700,
      fontSize: 29
    },
    h3: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 25
    },
    h4: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 22
    },
    body1: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 16
    },
    body2: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 14
    },
    button: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 16,
      textTransform: "none"
    }
  }
});
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  function MuiRemixServer() {
    return /* @__PURE__ */ jsx(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxs(ThemeProvider, { theme, children: [
      /* @__PURE__ */ jsx(CssBaseline, {}),
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
    ] }) });
  }
  const html = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(MuiRemixServer, {}));
  const { styles } = extractCriticalToChunks(html);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html.replace(
    /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
    `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
  );
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const ClientStyleContext = React.createContext({
  reset: () => {
  }
});
function LightBulbIcon(props) {
  return /* @__PURE__ */ jsx(SvgIcon, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" }) });
}
function ProTip() {
  return /* @__PURE__ */ jsxs(Typography, { sx: { mt: 6, mb: 3, color: "text.secondary" }, children: [
    /* @__PURE__ */ jsx(LightBulbIcon, { sx: { mr: 1, verticalAlign: "middle" } }),
    "Pro tip: See more ",
    /* @__PURE__ */ jsx(Link, { href: "https://mui.com/material-ui/getting-started/templates/", children: "templates" }),
    " in the Material UI documentation."
  ] });
}
function Copyright() {
  return /* @__PURE__ */ jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", children: [
    "Copyright © ",
    /* @__PURE__ */ jsx(Link, { color: "inherit", href: "https://mui.com/", children: "Knit Notebook" }),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxs(Box, { sx: { my: 4 }, children: [
    children,
    /* @__PURE__ */ jsx(ProTip, {}),
    /* @__PURE__ */ jsx(Copyright, {})
  ] }) });
}
const Document = withEmotionCache(({ children, title }, emotionCache) => {
  const clientStyleData = React__default.useContext(ClientStyleContext);
  unstable_useEnhancedEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme.palette.primary.main }),
      title ? /* @__PURE__ */ jsx("title", { children: title }) : null,
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://use.typekit.net/ojf8ene.css" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "emotion-insertion-point",
          content: "emotion-insertion-point"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
});
function App() {
  return /* @__PURE__ */ jsx(Document, { children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = /* @__PURE__ */ jsx("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." });
        break;
      case 404:
        message = /* @__PURE__ */ jsx("p", { children: "Oops! Looks like you tried to visit a page that does not exist." });
        break;
      default:
        throw new Error(error.data || error.statusText);
    }
    return /* @__PURE__ */ jsx(Document, { title: `${error.status} ${error.statusText}`, children: /* @__PURE__ */ jsxs(Layout, { children: [
      /* @__PURE__ */ jsxs("h1", { children: [
        error.status,
        ": ",
        error.statusText
      ] }),
      message
    ] }) });
  }
  if (error instanceof Error) {
    console.error(error);
    return /* @__PURE__ */ jsx(Document, { title: "Error!", children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { children: "There was an error" }),
      /* @__PURE__ */ jsx("p", { children: error.message }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("p", { children: "Hey, developer, you should replace this with what you want your users to see." })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx("h1", { children: "Unknown Error" });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const loader$2 = async ({ request }) => {
  return { loader: true };
};
function Callback() {
  const data = useLoaderData();
  console.log("we should never get here", data);
  return /* @__PURE__ */ jsx("p", { children: "Page" });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Callback,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    // use any name you want here
    sameSite: "lax",
    // this helps with CSRF
    path: "/",
    // remember to add this so the cookie will work in all routes
    httpOnly: true,
    // for security reasons, make this cookie http only
    secrets: ["s3cr3t"],
    // replace this with an actual secret
    secure: process.env.NODE_ENV === "production"
    // enable this in prod only
  }
});
const domain = process.env.NODE_ENV === "development" ? `${process.env.USE_LOCAL_HTTPS ? "https" : "http"}://localhost:${Number(
  process.env.PORT || 3e3
)}` : "https://knitnotebook.com";
const redirectURI = `${domain}/auth/ravelry/callback`;
const authenticator = new Authenticator(sessionStorage, {
  sessionKey: "sessionKey",
  sessionErrorKey: "sessionErrorKey"
});
const ravelryStrategy = new OAuth2Strategy(
  {
    clientId: process.env.RAVELRY_API_CLIENT_ID,
    clientSecret: process.env.RAVELRY_API,
    redirectURI,
    scopes: [
      "offline"
      // standard OAuth 2.0 scope for requesting refresh tokens
    ],
    authenticateWith: "http_basic_auth",
    // Ravelry needs this type of auth.
    authorizationEndpoint: `https://www.ravelry.com/oauth2/auth`,
    tokenEndpoint: `https://www.ravelry.com/oauth2/token`
  },
  async ({ tokens, profile, context, request }) => {
    const response = await axios.get(
      "https://api.ravelry.com/current_user.json",
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
          Accept: "application/json"
        }
      }
    );
    return { tokens, profile, user: response.data.user };
  }
);
authenticator.use(
  ravelryStrategy,
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "ravelry"
);
const loader$1 = async ({ request }) => {
  return authenticator.authenticate("ravelry", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login-failed"
  });
};
const action$1 = ({ request }) => {
  return authenticator.authenticate("ravelry", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login-failed"
  });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
function LoginFailed() {
  return /* @__PURE__ */ jsx("p", { children: "Login failed." });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LoginFailed
}, Symbol.toStringTag, { value: "Module" }));
const loader = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  console.log("data", data);
  return json(data);
};
function Login() {
  const { user, tokens } = useLoaderData();
  console.log("user data!!YAY", user);
  const response = axios.get(
    `https://api.ravelry.com/people/${user.username}/queue/list.json`,
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
        Accept: "application/json"
      }
    }
  );
  console.log("axios response", response);
  return /* @__PURE__ */ jsx("p", { children: "Dashboard page." });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => [
  { title: "Knit Notebook" },
  {
    name: "description",
    content: "Have fun with your Knitting Notebook - queue, favorites, and more."
  }
];
function Index() {
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", sx: { mb: 2 }, children: "Knit Notebook" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body1", children: "To use the knit notebook, you’ll want a Ravelry account." }),
    /* @__PURE__ */ jsx(Link, { to: "/auth/ravelry", color: "secondary", component: Link$1, children: "Sign in with Ravelry" }),
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/about", color: "secondary", component: Link$1, children: "Go to the about page" })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
let action = async ({ request, params }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h4", component: "h1", sx: { mb: 2 }, children: "Knit Notebook by Mary Shaw" }),
    /* @__PURE__ */ jsx(Button, { variant: "contained", component: Link$1, to: "/", children: "Go to the main page" })
  ] });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Ccr5h3ZC.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-BHmgdzK_.js", "/assets/components-BfamxL2E.js", "/assets/theme-D_c9Gy6E.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DZsJWF8A.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-BHmgdzK_.js", "/assets/components-BfamxL2E.js", "/assets/theme-D_c9Gy6E.js", "/assets/Typography-D3Ecso4y.js", "/assets/Link-GXY_UejE.js", "/assets/useEnhancedEffect-CtgP67NC.js"], "css": [] }, "routes/auth.ravelry.callback": { "id": "routes/auth.ravelry.callback", "parentId": "routes/auth.ravelry", "path": "callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry.callback-CV5FcUw7.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/components-BfamxL2E.js"], "css": [] }, "routes/auth.ravelry": { "id": "routes/auth.ravelry", "parentId": "root", "path": "auth/ravelry", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login-failed": { "id": "routes/login-failed", "parentId": "root", "path": "login-failed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-failed-TM3j_Pv9.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js"], "css": [] }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard-DbZQrJb6.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/components-BfamxL2E.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Oy8Dh1ew.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-BHmgdzK_.js", "/assets/Typography-D3Ecso4y.js", "/assets/Link-GXY_UejE.js", "/assets/components-BfamxL2E.js"], "css": [] }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/logout-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-wWR4MMMt.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-BHmgdzK_.js", "/assets/Typography-D3Ecso4y.js", "/assets/useEnhancedEffect-CtgP67NC.js", "/assets/components-BfamxL2E.js"], "css": [] } }, "url": "/assets/manifest-27341e59.js", "version": "27341e59" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/auth.ravelry.callback": {
    id: "routes/auth.ravelry.callback",
    parentId: "routes/auth.ravelry",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/auth.ravelry": {
    id: "routes/auth.ravelry",
    parentId: "root",
    path: "auth/ravelry",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/login-failed": {
    id: "routes/login-failed",
    parentId: "root",
    path: "login-failed",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
