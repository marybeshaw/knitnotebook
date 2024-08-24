import { jsx, jsxs } from "react/jsx-runtime";
import * as ReactDOMServer from "react-dom/server";
import { RemixServer, Meta, Links, ScrollRestoration, Scripts, useLoaderData, Outlet, json, useRouteError, isRouteErrorResponse, useSubmit, Form, useFetcher } from "@remix-run/react";
import { createTheme, ThemeProvider, CssBaseline, Link as Link$1, AppBar, Container, Toolbar, Typography, Box, IconButton, Menu as Menu$1, MenuItem, Tooltip, Avatar, unstable_useEnhancedEffect, Button } from "@mui/material";
import { CacheProvider, withEmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import * as React from "react";
import React__default, { createContext, forwardRef, useState, useContext, Fragment, useCallback, useMemo } from "react";
import createCache from "@emotion/cache";
import { useHref, useLinkClickHandler } from "react-router-dom";
import { Notebook, Menu, Drag } from "mdi-material-ui";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import axios from "axios";
import { createCookieSessionStorage } from "@remix-run/node";
import { useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { useSortable, sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { css } from "@emotion/css";
import { CSS } from "@dnd-kit/utilities";
const ClientStyleContext = createContext({
  reset: () => {
  }
});
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
  function MuiRemixServer(styles2 = null) {
    return /* @__PURE__ */ jsx(ClientStyleContext.Provider, { value: null, children: /* @__PURE__ */ jsx(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxs(ThemeProvider, { theme: theme$1, children: [
      /* @__PURE__ */ jsx(CssBaseline, {}),
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
    ] }) }) });
  }
  const html = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(MuiRemixServer, {}));
  const { styles } = extractCriticalToChunks(html);
  const markup = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(MuiRemixServer, { styles })
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
const ServerStyleContext = createContext(null);
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
const loggedInRoutes = [
  { name: "Projects", path: "/projects" },
  { name: "Queue", path: "/queue" },
  { name: "Stash", path: "/stash" },
  { name: "Favorites", path: "/favorites" },
  { name: "About", path: "/about" }
];
const loggedOutRoutes = [
  { name: "Sign in with Ravelry", path: "/auth/ravelry" },
  { name: "About", path: "/about" }
];
const settings = [
  { name: "Profile", path: "/profile" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Sign Out", path: "/sign-out" }
];
function ResponsiveAppBar() {
  const { user: userLoggedIn } = useUser();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const routes2 = userLoggedIn ? loggedInRoutes : loggedOutRoutes;
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
          "aria-controls": "menu-app-bar",
          "aria-haspopup": "true",
          onClick: handleOpenNavMenu,
          color: "inherit",
          children: /* @__PURE__ */ jsx(Menu, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Menu$1,
        {
          id: "menu-app-bar",
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
          children: routes2.map((page) => (
            // Putting the link outside the menu item lets the use click
            // anywhere in the menu item (not just the text) to visit the link
            /* @__PURE__ */ jsx(
              Link,
              {
                variant: "menuLink",
                to: page.path,
                sx: {
                  textDecoration: "none"
                },
                children: /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseNavMenu, children: page.name })
              },
              page.name
            )
          ))
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
    /* @__PURE__ */ jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }, children: routes2.map((page) => /* @__PURE__ */ jsx(Box, { mr: 1, ml: 1, children: /* @__PURE__ */ jsx(
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
    userLoggedIn && /* @__PURE__ */ jsxs(Box, { sx: { flexGrow: 0 }, children: [
      /* @__PURE__ */ jsx(Tooltip, { title: "Open settings", children: /* @__PURE__ */ jsx(IconButton, { onClick: handleOpenUserMenu, sx: { p: 0 }, children: /* @__PURE__ */ jsx(
        Avatar,
        {
          alt: userLoggedIn == null ? void 0 : userLoggedIn.username,
          src: userLoggedIn == null ? void 0 : userLoggedIn.small_photo_url
        }
      ) }) }),
      /* @__PURE__ */ jsx(
        Menu$1,
        {
          sx: { mt: "45px" },
          id: "menu-app-bar",
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
          children: settings.map((setting) => (
            // Putting the link outside the menu item means you can click
            // anywhere in the menu item (not just the text) to visit the link
            /* @__PURE__ */ jsx(
              Link,
              {
                to: setting.path,
                variant: "menuLink",
                sx: {
                  textDecoration: "none"
                },
                children: /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseUserMenu, children: setting.name })
              },
              setting.name
            )
          ))
        }
      )
    ] })
  ] }) }) });
}
function Copyright() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", children: [
      "Copyright © ",
      /* @__PURE__ */ jsx(Link$1, { color: "inherit", href: "https://www.knitnotebook.com/", children: "Knit Notebook" }),
      " ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      "."
    ] }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", align: "center", children: "This application is not affiliated with Ravelry in any way, and is not endorsed or associated with Ravelry." })
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
    const axiosInstance = axios.create();
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${tokens.access_token}`;
    const response = await axiosInstance.get(
      "https://api.ravelry.com/current_user.json"
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
const loader$5 = async ({ request }) => {
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
  const serverStyleData = React__default.useContext(ServerStyleContext);
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
      serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css: css2 }) => /* @__PURE__ */ jsx(
        "style",
        {
          "data-emotion": `${key} ${ids.join(" ")}`,
          dangerouslySetInnerHTML: { __html: css2 }
        },
        key
      ))
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
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
const loader$4 = async ({ request }) => {
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
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const loader$3 = async ({ request }) => {
  return authenticator.authenticate("ravelry", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login-failed"
  });
};
const action$2 = ({ request }) => {
  return authenticator.authenticate("ravelry", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login-failed"
  });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
function LoginFailed() {
  return /* @__PURE__ */ jsx("p", { children: "Login failed." });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LoginFailed
}, Symbol.toStringTag, { value: "Module" }));
const loader$2 = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  return json(data);
};
function Dashboard() {
  const { user } = useLoaderData();
  console.log("rendering dashboard", user);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "Knit Notebook Dashboard" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "Welcome to your Knit Notebook, where you can update your Ravelry notebook with a different UI." }),
    /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "p", children: [
      "What will you work on next? Check out your",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/queue", children: "queue" }),
      "!"
    ] })
  ] });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
let action$1 = async ({ request, params }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
function Logout() {
  const { user, setLoggedOut } = useUser();
  const submit = useSubmit();
  const handleSubmit = useCallback(
    (e) => {
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
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "Sign Out" }),
    (user == null ? void 0 : user.username) && /* @__PURE__ */ jsxs(Form, { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "Are you sure you want to sign out?" }),
      /* @__PURE__ */ jsx(Button, { value: "logout", type: "submit", children: "Yes, Sign Out" })
    ] }),
    !(user == null ? void 0 : user.username) && /* @__PURE__ */ jsx(Typography, { variant: "body1", component: "p", children: "You have now logged out of Ravelry." })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: Logout
}, Symbol.toStringTag, { value: "Module" }));
const loader$1 = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  return json(data);
};
function Profile() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "My Profile" }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", component: "h2", children: user.username }),
    /* @__PURE__ */ jsx("img", { src: user.large_photo_url, alt: "" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body1", component: "p", children: "Right now, Knit Notebook only displays user data from Ravelry." })
  ] });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Profile,
  loader: loader$1
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
    /* @__PURE__ */ jsx(Typography, { variant: "body1", children: "Welcome to the knit notebook, a demo project for UtahJS in September." }),
    /* @__PURE__ */ jsx(Typography, { variant: "body1", children: "To use the knit notebook, you’ll want a Ravelry account." }),
    /* @__PURE__ */ jsx(Link, { to: "/auth/ravelry", variant: "contained", children: "Sign in with Ravelry" })
  ] });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "About the Knit Notebook" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "Mary Shaw started this to demo &rquot;complex state in React&lquot; for UtahJS on September 13, 2024." }),
    /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "p", children: [
      /* @__PURE__ */ jsx(Link$1, { href: "https://remix.run/", children: "Remix" }),
      " is the React SSR stack."
    ] }),
    /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "p", children: [
      /* @__PURE__ */ jsx(Link$1, { href: "https://mui.com/material-ui", children: "Material UI" }),
      " is the base design system."
    ] }),
    /* @__PURE__ */ jsx(Link, { variant: "primaryLink", to: "/", children: "Go to the main page" })
  ] });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
async function getQueue({ username, accessToken }) {
  const axiosInstance = axios.create();
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/queue/list.json`
  );
  const queuedProjectsOrig = response.data.queued_projects;
  const queuedProjectResults = await Promise.allSettled(
    queuedProjectsOrig.map(
      (project) => addPatternData({ axiosInstance, project, accessToken })
    )
  ).then((promises) => {
    return promises.filter((promise) => {
      return promise.status === "fulfilled" ? promise.value : null;
    }).map((promise) => {
      return promise.value;
    });
  });
  return queuedProjectResults;
}
async function postReorderQueue({
  projectId,
  newPosition,
  username,
  accessToken
}) {
  const axiosInstance = axios.create();
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response = await axiosInstance.post(
    `https://api.ravelry.com/people/${username}/queue/${projectId}/reposition.json`,
    {
      insert_at: newPosition + 1
      // position is 1-based (not zero-based)
    }
  );
  return response;
}
async function addPatternData({ axiosInstance, project, accessToken }) {
  const patternId = project.pattern_id;
  const response = await axiosInstance.get(
    `https://api.ravelry.com/patterns/${patternId}.json`,
    {
      headers: getHeaders(accessToken)
    }
  );
  project.pattern = response.data.pattern;
  return project;
}
function getHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json"
  };
}
const projectRowCss = css`
  display: flex;
  flex-direction: row;
  border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
  cursor: pointer;
`;
const detailsCss = css`
  flex-grow: 1;
`;
const imageCss = css`
  aspect-ratio: 1; /* make width equal to height  */
  height: auto;
  width: 150px;
  max-width: 100%;
  max-height: 150px;
  object-fit: cover;

  margin: 0 10px 0 0;
`;
function SortableQueueItem({ project }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: project.id,
    transition: {
      duration: 150,
      // milliseconds
      easing: "cubic-bezier(0.25, 1, 0.5, 1)"
    }
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsx(
    "li",
    {
      ref: setNodeRef,
      style,
      ...attributes,
      ...listeners,
      children: /* @__PURE__ */ jsx(QueueItem, { project })
    },
    project.id
  );
}
const QueueItem = forwardRef(({ project }, ref) => {
  const patternPhoto = project == null ? void 0 : project.best_photo;
  return /* @__PURE__ */ jsxs("div", { className: projectRowCss, ref, children: [
    patternPhoto && /* @__PURE__ */ jsx("img", { className: imageCss, src: patternPhoto.small_url, alt: "" }),
    /* @__PURE__ */ jsxs("div", { className: detailsCss, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", component: "h2", children: project.short_pattern_name }, project.id),
      /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "p", children: [
        "by ",
        project.pattern_author_name
      ] }),
      /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "p", children: [
        "Yarn: ",
        project.pattern.yardage_description,
        " of",
        " ",
        project.pattern.yarn_weight_description
      ] })
    ] }),
    /* @__PURE__ */ jsx(Drag, { sx: { display: "flex", mr: 1, mt: 1 } })
  ] }, `item-${project.id}`);
});
const queueList = css`
  list-style-type: none;
  padding: 0 10px;
  margin: 0px;
`;
createContext({});
function SortableQueue({ queuedProjects, reorderProjects }) {
  const [activeId, setActiveId] = useState(null);
  const [queue, setQueue] = useState(queuedProjects);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const fetcher = useFetcher();
  const activeProject = useMemo(
    () => activeId && queue.find((item) => item.id === activeId),
    [activeId, queue]
  );
  return /* @__PURE__ */ jsxs(
    DndContext,
    {
      sensors,
      collisionDetection: closestCenter,
      onDragEnd: handleDragEnd,
      children: [
        /* @__PURE__ */ jsx(SortableContext, { items: queue, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsx("ul", { className: queueList, children: queue.map((project) => /* @__PURE__ */ jsx(
          SortableQueueItem,
          {
            project
          },
          `queue-item-${project.id}`
        )) }) }),
        /* @__PURE__ */ jsx(DragOverlay, { children: activeProject ? /* @__PURE__ */ jsx(QueueItem, { project: activeProject }) : null })
      ]
    }
  );
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      let projectId, oldIndex, newIndex;
      setQueue((items) => {
        var _a;
        projectId = (_a = queue.find((item) => item.id === active.id)) == null ? void 0 : _a.id;
        oldIndex = items.findIndex((item) => item.id === active.id);
        newIndex = items.findIndex((item) => item.id === over.id);
        console.log(
          `moving item from ${active.id}/${oldIndex} to ${over.id}/${newIndex}`
        );
        return arrayMove(items, oldIndex, newIndex);
      });
      fetcher.submit(
        {
          projectId,
          newPosition: newIndex
        },
        {
          fetcherKey: "sort-queue",
          action: "/queue",
          method: "POST",
          encType: "application/json",
          navigate: false,
          replace: true,
          preventScrollReset: true
        }
      );
    }
    setActiveId(null);
  }
}
const loader = async ({ request }) => {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  const queuedProjects = await getQueue({
    accessToken: tokens.access_token,
    username: user.username
  });
  return json({ user, tokens, queuedProjects });
};
async function action({ request }) {
  const { projectId, newPosition } = await request.json();
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  try {
    await postReorderQueue({
      projectId,
      newPosition,
      username: user.username,
      accessToken: tokens.access_token
    });
    return true;
  } catch (e) {
    console.log("queue reorder error:", e);
    return e;
  }
}
function Queue() {
  const { queuedProjects } = useLoaderData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", sx: { padding: "10px" }, children: "My Queue" }),
    /* @__PURE__ */ jsx(SortableQueue, { queuedProjects }),
    /* @__PURE__ */ jsx(Typography, { children: "To add something to your Ravelry queue, please visit Ravelry." })
  ] });
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Queue,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DMwlMsnu.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/index-ASZ93w5C.js", "/assets/theme-CsKrMJxd.js", "/assets/components-Bd1wM9pL.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-CWQ_D2oM.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/index-ASZ93w5C.js", "/assets/theme-CsKrMJxd.js", "/assets/components-Bd1wM9pL.js", "/assets/Typography-_VhkBNkm.js", "/assets/useIsFocusVisible-BK8dAlmh.js", "/assets/Link-C5cBJoP4.js", "/assets/UserProvider-DlDRyGY6.js", "/assets/createIcon-DKtQoX0T.js"], "css": [] }, "routes/auth.ravelry.callback": { "id": "routes/auth.ravelry.callback", "parentId": "routes/auth.ravelry", "path": "callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry.callback-C5JH9ZGC.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/index-ASZ93w5C.js", "/assets/components-Bd1wM9pL.js"], "css": [] }, "routes/auth.ravelry": { "id": "routes/auth.ravelry", "parentId": "root", "path": "auth/ravelry", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login-failed": { "id": "routes/login-failed", "parentId": "root", "path": "login-failed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-failed-TM3j_Pv9.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js"], "css": [] }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard-CltN4q2N.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/index-ASZ93w5C.js", "/assets/Typography-_VhkBNkm.js", "/assets/useIsFocusVisible-BK8dAlmh.js", "/assets/Link-C5cBJoP4.js", "/assets/components-Bd1wM9pL.js"], "css": [] }, "routes/sign-out": { "id": "routes/sign-out", "parentId": "root", "path": "sign-out", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/sign-out-CO-jtMst.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/Typography-_VhkBNkm.js", "/assets/useIsFocusVisible-BK8dAlmh.js", "/assets/index-ASZ93w5C.js", "/assets/UserProvider-DlDRyGY6.js", "/assets/components-Bd1wM9pL.js"], "css": [] }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/profile-FJslbPVO.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/index-ASZ93w5C.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/components-Bd1wM9pL.js", "/assets/Typography-_VhkBNkm.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-1_mLhKWp.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/index-ASZ93w5C.js", "/assets/Typography-_VhkBNkm.js", "/assets/useIsFocusVisible-BK8dAlmh.js", "/assets/Link-C5cBJoP4.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-gO72yWk6.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/index-ASZ93w5C.js", "/assets/Typography-_VhkBNkm.js", "/assets/useIsFocusVisible-BK8dAlmh.js", "/assets/Link-C5cBJoP4.js"], "css": [] }, "routes/queue": { "id": "routes/queue", "parentId": "root", "path": "queue", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/queue-DLzmCzgf.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-CI10phDB.js", "/assets/Typography-_VhkBNkm.js", "/assets/index-ASZ93w5C.js", "/assets/createIcon-DKtQoX0T.js", "/assets/components-Bd1wM9pL.js"], "css": [] } }, "url": "/assets/manifest-509acb4b.js", "version": "509acb4b" };
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
  "routes/sign-out": {
    id: "routes/sign-out",
    parentId: "root",
    path: "sign-out",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
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
  },
  "routes/queue": {
    id: "routes/queue",
    parentId: "root",
    path: "queue",
    index: void 0,
    caseSensitive: void 0,
    module: route9
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
