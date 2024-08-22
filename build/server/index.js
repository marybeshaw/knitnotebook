import { jsx, jsxs } from "react/jsx-runtime";
import { isbot } from "isbot";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { createReadableStreamFromReadable, createCookieSessionStorage } from "@remix-run/node";
import { RemixServer, Meta, Links, Outlet, Scripts, useLoaderData, json } from "@remix-run/react";
import "react";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import axios from "axios";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  return isbot(userAgent);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const styles = "/assets/global-styles-C-jAUzXQ.css";
const links = () => [{ rel: "stylesheet", href: styles }];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("h1", { className: styles.heading, children: "Welcome to my Knit Notebook" }),
      /* @__PURE__ */ jsx("form", { action: `/auth/ravelry`, method: "post", children: /* @__PURE__ */ jsx("button", { children: "Sign in with Ravelry" }) }),
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  links
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
console.log("official redirect uri that doesn't work:", redirectURI);
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
let action = async ({ request, params }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BC01TrHc.js", "imports": ["/assets/jsx-runtime-CZxWQka4.js", "/assets/components-DpqDqPB9.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-Btwxo7xW.js", "imports": ["/assets/jsx-runtime-CZxWQka4.js", "/assets/components-DpqDqPB9.js"], "css": [] }, "routes/auth.ravelry.callback": { "id": "routes/auth.ravelry.callback", "parentId": "routes/auth.ravelry", "path": "callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry.callback-D3yLY8NN.js", "imports": ["/assets/jsx-runtime-CZxWQka4.js", "/assets/components-DpqDqPB9.js"], "css": [] }, "routes/auth.ravelry": { "id": "routes/auth.ravelry", "parentId": "root", "path": "auth/ravelry", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login-failed": { "id": "routes/login-failed", "parentId": "root", "path": "login-failed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-failed-Eeb8aWw1.js", "imports": ["/assets/jsx-runtime-CZxWQka4.js"], "css": [] }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard-D8T9szs1.js", "imports": ["/assets/jsx-runtime-CZxWQka4.js", "/assets/components-DpqDqPB9.js"], "css": [] }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/logout-l0sNRNKZ.js", "imports": [], "css": [] } }, "url": "/assets/manifest-e0fa799f.js", "version": "e0fa799f" };
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
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route5
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
