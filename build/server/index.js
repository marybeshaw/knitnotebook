import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as ReactDOMServer from "react-dom/server";
import { RemixServer, Meta, Links, ScrollRestoration, Scripts, useLoaderData, Outlet, json, useRouteError, isRouteErrorResponse, useSubmit, Form } from "@remix-run/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider, CssBaseline, Link as Link$1, AppBar, Container, Toolbar, Typography, Box, IconButton, Menu as Menu$1, MenuItem, Tooltip, Avatar, unstable_useEnhancedEffect, Button } from "@mui/material";
import { CacheProvider, withEmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import * as React from "react";
import React__default, { forwardRef, createContext, useState, useContext, useCallback } from "react";
import { useHref, useLinkClickHandler } from "react-router-dom";
import { Notebook, Menu } from "mdi-material-ui";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import axios from "axios";
import { createCookieSessionStorage } from "@remix-run/node";
function createEmotionCache() {
  return createCache({ key: "css" });
}
const skippySharp = ["skippy-sharp", "sans-serif"].join(",");
const capitolina = ["capitolina", "serif"].join(",");
let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
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
    navTitle: {
      fontFamily: capitolina,
      fontWeight: 700,
      fontSize: 22,
      textTransform: "none",
      textDecoration: "none",
      flexGrow: 1
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
    h5: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20
    },
    body1: {
      fontFamily: capitolina,
      fontWeight: 400,
      fontSize: 18
    },
    body2: {
      fontFamily: capitolina,
      fontWeight: 400,
      fontSize: 16
    },
    button: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 20,
      textTransform: "none"
    },
    primaryLink: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 22,
      textTransform: "none",
      textDecoration: "none"
    },
    menuLink: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 22,
      textTransform: "none",
      textDecoration: "none"
    },
    subtitle1: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20
    },
    subtitle2: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20
    },
    caption: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20
    },
    overline: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20,
      textTransform: "uppercase"
    }
  }
});
theme = createTheme(theme, {
  palette: {
    default: theme.palette.augmentColor({
      color: {
        main: "#077cdd"
      }
    }),
    primary: theme.palette.augmentColor({
      color: {
        main: "#077cdd"
      }
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: "#a112b3"
      }
    }),
    error: theme.palette.augmentColor({
      color: {
        main: "#d10f45"
      }
    }),
    warning: theme.palette.augmentColor({
      color: {
        main: "#995c00"
      }
    }),
    info: theme.palette.augmentColor({
      color: {
        main: "#039eb1"
      }
    }),
    success: theme.palette.augmentColor({
      color: {
        main: "#5120b4"
      }
    })
  }
});
const theme$1 = theme;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  function MuiRemixServer() {
    return /* @__PURE__ */ jsx(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxs(ThemeProvider, { theme: theme$1, children: [
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
const Link = forwardRef(
  ({ onClick, replace = false, state, target, to, ...rest }, ref) => {
    let href = useHref(to);
    let handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target
    });
    return /* @__PURE__ */ jsx(
      Link$1,
      {
        ...rest,
        href,
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          if (!event.defaultPrevented) {
            handleClick(event);
          }
        },
        ref,
        target
      }
    );
  }
);
const UserContext = createContext({});
function UserProvider({ user, children }) {
  const [loggedOut, setLoggedOut] = useState();
  return /* @__PURE__ */ jsx(
    UserContext.Provider,
    {
      value: { user: loggedOut ? void 0 : user, setLoggedOut },
      children
    }
  );
}
function useUser() {
  const { user, setLoggedOut } = useContext(UserContext);
  return { user, setLoggedOut };
}
const loggedInPages = [
  { name: "Projects", path: "/projects" },
  { name: "Queue", path: "/queue" },
  { name: "Stash", path: "/stash" },
  { name: "Favorites", path: "/favorites" },
  { name: "About", path: "/about" }
];
const loggedOutPages = [
  { name: "Sign in with Ravelry", path: "/auth/ravelry" },
  { name: "About", path: "/about" }
];
const settings = [
  { name: "Profile", path: "/profile" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Log Out", path: "/logout" }
];
function ResponsiveAppBar() {
  const { user: maybeUser } = useUser();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = maybeUser ? loggedInPages : loggedOutPages;
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return /* @__PURE__ */ jsx(AppBar, { color: "primary", position: "static", children: /* @__PURE__ */ jsx(Container, { maxWidth: "xl", children: /* @__PURE__ */ jsxs(Toolbar, { disableGutters: true, children: [
    /* @__PURE__ */ jsx(Notebook, { sx: { display: { xs: "none", md: "flex" }, mr: 1 } }),
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "navTitle",
        noWrap: true,
        component: "a",
        href: "/",
        sx: {
          mr: 3,
          display: { xs: "none", md: "flex" },
          color: "inherit"
        },
        children: "Knit Notebook"
      }
    ),
    /* @__PURE__ */ jsxs(Box, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
      /* @__PURE__ */ jsx(
        IconButton,
        {
          size: "large",
          "aria-label": "account of current user",
          "aria-controls": "menu-appbar",
          "aria-haspopup": "true",
          onClick: handleOpenNavMenu,
          color: "inherit",
          children: /* @__PURE__ */ jsx(Menu, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Menu$1,
        {
          id: "menu-appbar",
          anchorEl: anchorElNav,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          keepMounted: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          open: Boolean(anchorElNav),
          onClose: handleCloseNavMenu,
          sx: {
            display: { xs: "block", md: "none" }
          },
          children: pages.map((page) => /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseNavMenu, children: /* @__PURE__ */ jsx(
            Link,
            {
              variant: "menuLink",
              to: page.path,
              sx: {
                display: {
                  textDecoration: "none"
                }
              },
              children: page.name
            }
          ) }, page.name))
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Notebook, { sx: { display: { xs: "flex", md: "none" }, mr: 1 } }),
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "navTitle",
        noWrap: true,
        component: "a",
        href: "/",
        sx: {
          mr: 3,
          display: { xs: "flex", md: "none" },
          color: "inherit"
        },
        children: "Knit Notebook"
      }
    ),
    /* @__PURE__ */ jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }, children: pages.map((page) => /* @__PURE__ */ jsx(Box, { mr: 1, ml: 1, children: /* @__PURE__ */ jsx(
      Link,
      {
        to: page.path,
        onClick: handleCloseNavMenu,
        color: "inherit",
        variant: "menuLink",
        sx: {
          textDecoration: "none"
        },
        children: page.name
      }
    ) }, page.name)) }),
    maybeUser && /* @__PURE__ */ jsxs(Box, { sx: { flexGrow: 0 }, children: [
      /* @__PURE__ */ jsx(Tooltip, { title: "Open settings", children: /* @__PURE__ */ jsx(IconButton, { onClick: handleOpenUserMenu, sx: { p: 0 }, children: /* @__PURE__ */ jsx(
        Avatar,
        {
          alt: maybeUser == null ? void 0 : maybeUser.username,
          src: maybeUser == null ? void 0 : maybeUser.small_photo_url
        }
      ) }) }),
      /* @__PURE__ */ jsx(
        Menu$1,
        {
          sx: { mt: "45px" },
          id: "menu-appbar",
          anchorEl: anchorElUser,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          keepMounted: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          open: Boolean(anchorElUser),
          onClose: handleCloseUserMenu,
          children: settings.map((setting) => /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseUserMenu, children: /* @__PURE__ */ jsx(
            Link,
            {
              to: setting.path,
              variant: "menuLink",
              sx: {
                textDecoration: "none"
              },
              children: setting.name
            }
          ) }, setting.name))
        }
      )
    ] })
  ] }) }) });
}
function Copyright() {
  return /* @__PURE__ */ jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", children: [
    "Copyright © ",
    /* @__PURE__ */ jsx(Link$1, { color: "inherit", href: "https://www.knitnotebook.com/", children: "Knit Notebook" }),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs(
    Container,
    {
      maxWidth: "xl",
      sx: {
        margin: 0,
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh"
      },
      children: [
        /* @__PURE__ */ jsx(ResponsiveAppBar, {}),
        /* @__PURE__ */ jsx(Box, { sx: { my: 4 }, children }),
        /* @__PURE__ */ jsx(Footer, {})
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx(Box, { sx: { display: "block", minHeight: "50px" }, children: /* @__PURE__ */ jsx(Copyright, {}) });
}
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
    console.log("current_user response data", response.data);
    return { tokens, profile, user: response.data.user };
  }
);
authenticator.use(
  ravelryStrategy,
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "ravelry"
);
const loader$4 = async ({ request }) => {
  let data = {};
  try {
    data = await authenticator.isAuthenticated(request);
  } catch (e) {
    console.log("error loading root data", e);
  }
  return json(data);
};
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
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme$1.palette.primary.main }),
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
  const loaderData = useLoaderData();
  return /* @__PURE__ */ jsx(UserProvider, { user: loaderData == null ? void 0 : loaderData.user, children: /* @__PURE__ */ jsx(Document, { children: /* @__PURE__ */ jsx(
    Box,
    {
      sx: { minHeight: "100vh", display: "flex", flexDirection: "column" },
      children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Outlet, {}) })
    }
  ) }) });
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
  default: App,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const loader$3 = async ({ request }) => {
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
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
const loader$2 = async ({ request }) => {
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
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
function LoginFailed() {
  return /* @__PURE__ */ jsx("p", { children: "Login failed." });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LoginFailed
}, Symbol.toStringTag, { value: "Module" }));
const loader$1 = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  console.log("data", data);
  return json(data);
};
function Dashboard() {
  const { user, tokens } = useLoaderData();
  console.log("rendering dashboard", user);
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
  default: Dashboard,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const loader = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  return json(data);
};
function Profile() {
  const { user } = useLoaderData();
  console.log("rendering profile", user);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "My Profile" }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", component: "h2", children: user.username }),
    /* @__PURE__ */ jsx("img", { src: user.large_photo_url, alt: "" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body1", component: "p", children: "Right now, Knit Notebook only displays user data from Ravelry." })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Profile,
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
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "Knit Notebook" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body1", children: "Welcome to my knit notebook, a project to help me manage my Ravelry account." }),
    /* @__PURE__ */ jsx(Typography, { variant: "body1", children: "To use the knit notebook, you’ll want a Ravelry account." }),
    /* @__PURE__ */ jsx(Link, { to: "/auth/ravelry", variant: "contained", children: "Sign in with Ravelry" })
  ] });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
let action = async ({ request, params }) => {
  console.log("handling logout on the server");
  await authenticator.logout(request, { redirectTo: "/" });
};
function Logout() {
  const { user, setLoggedOut } = useUser();
  const submit = useSubmit();
  const handleSubmit = useCallback(
    (e) => {
      console.log("submitting log out");
      setLoggedOut(true);
      submit(
        { logout: "yes" },
        {
          method: "post",
          encType: "application/json",
          navigate: false,
          replace: true
        }
      );
    },
    [submit, setLoggedOut]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "Logout" }),
    (user == null ? void 0 : user.username) && /* @__PURE__ */ jsxs(Form, { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "Are you sure you want to log out?" }),
      /* @__PURE__ */ jsx(Button, { value: "logout", type: "submit", children: "Yes, Log Out" })
    ] }),
    !(user == null ? void 0 : user.username) && /* @__PURE__ */ jsx(Typography, { variant: "body1", component: "p", children: "You have now logged out of Ravelry." })
  ] });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Logout
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "About the Knit Notebook" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "Mary Shaw started this to demo &rquot;complex state in React&lquot; for UtahJS on September 13, 2024." }),
    /* @__PURE__ */ jsx(Link, { variant: "primaryLink", to: "/", children: "Go to the main page" })
  ] });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-D8To4bgw.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/DefaultPropsProvider-D51iAxbH.js", "/assets/index-CJLi3wgZ.js", "/assets/theme-D_TBr3Kt.js", "/assets/components-CdNMkR6R.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Hb6ne7MB.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/DefaultPropsProvider-D51iAxbH.js", "/assets/index-CJLi3wgZ.js", "/assets/theme-D_TBr3Kt.js", "/assets/components-CdNMkR6R.js", "/assets/Typography-Ba9FbqKo.js", "/assets/useIsFocusVisible-7K5PZs8K.js", "/assets/Link-CSOfzlTI.js", "/assets/UserProvider-D6X8cN53.js"], "css": [] }, "routes/auth.ravelry.callback": { "id": "routes/auth.ravelry.callback", "parentId": "routes/auth.ravelry", "path": "callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry.callback-CEeN8BZp.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/index-CJLi3wgZ.js", "/assets/components-CdNMkR6R.js"], "css": [] }, "routes/auth.ravelry": { "id": "routes/auth.ravelry", "parentId": "root", "path": "auth/ravelry", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login-failed": { "id": "routes/login-failed", "parentId": "root", "path": "login-failed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-failed-CBTR9n4s.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js"], "css": [] }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard-CsqiYSj0.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/index-CJLi3wgZ.js", "/assets/components-CdNMkR6R.js"], "css": [] }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/profile-CrNmkx3f.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/index-CJLi3wgZ.js", "/assets/DefaultPropsProvider-D51iAxbH.js", "/assets/components-CdNMkR6R.js", "/assets/Typography-Ba9FbqKo.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DOTBTzAm.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/DefaultPropsProvider-D51iAxbH.js", "/assets/index-CJLi3wgZ.js", "/assets/Typography-Ba9FbqKo.js", "/assets/useIsFocusVisible-7K5PZs8K.js", "/assets/Link-CSOfzlTI.js"], "css": [] }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/logout-B1cQlj9I.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/DefaultPropsProvider-D51iAxbH.js", "/assets/Typography-Ba9FbqKo.js", "/assets/useIsFocusVisible-7K5PZs8K.js", "/assets/index-CJLi3wgZ.js", "/assets/UserProvider-D6X8cN53.js", "/assets/components-CdNMkR6R.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-jU8KoIsd.js", "imports": ["/assets/jsx-runtime-COeSZJCi.js", "/assets/DefaultPropsProvider-D51iAxbH.js", "/assets/index-CJLi3wgZ.js", "/assets/Typography-Ba9FbqKo.js", "/assets/useIsFocusVisible-7K5PZs8K.js", "/assets/Link-CSOfzlTI.js"], "css": [] } }, "url": "/assets/manifest-f1150139.js", "version": "f1150139" };
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
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route6
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route8
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
