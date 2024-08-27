import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import * as ReactDOMServer from "react-dom/server";
import { RemixServer, Meta, Links, ScrollRestoration, Scripts, useLoaderData, Outlet, json, useRouteError, isRouteErrorResponse, useSubmit, Form, useFetcher, useSearchParams } from "@remix-run/react";
import { createTheme, ThemeProvider, CssBaseline, Link as Link$1, AppBar, Container, Toolbar, Typography, Box, IconButton, Menu as Menu$1, MenuItem, Tooltip, Avatar, unstable_useEnhancedEffect, ToggleButtonGroup, ToggleButton, Button, FormControl, InputLabel, Select, Pagination, Grid, Paper, Unstable_Grid2 } from "@mui/material";
import { CacheProvider, withEmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import * as React from "react";
import React__default, { createContext, forwardRef, useState, useContext, Fragment, useCallback, useMemo } from "react";
import createCache from "@emotion/cache";
import { useHref, useLinkClickHandler } from "react-router-dom";
import { Notebook, Menu } from "mdi-material-ui";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import axios from "axios";
import { createCookieSessionStorage } from "@remix-run/node";
import { FavoriteBorder, Workspaces, BrandingWatermark, Store, Psychology, Forum, Backpack, Gesture, BorderColor, ImportContacts, ViewList, GridView, ImportExport } from "@mui/icons-material";
import { useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { useSortable, sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { css } from "@emotion/css";
import { CSS } from "@dnd-kit/utilities";
import { useHydrated } from "remix-utils/use-hydrated";
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
    /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", align: "center", children: "This application is not affiliated with Ravelry in any way, and is not endorsed by or associated with Ravelry." })
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
const loader$7 = async ({ request }) => {
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
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
const loader$6 = async ({ request }) => {
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
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
const loader$5 = async ({ request }) => {
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
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
function LoginFailed() {
  return /* @__PURE__ */ jsx("p", { children: "Login failed." });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LoginFailed
}, Symbol.toStringTag, { value: "Module" }));
const loader$4 = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  return json(data);
};
function Dashboard() {
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
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
async function getFavorites({ username, accessToken }) {
  const axiosInstance = axios.create();
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/favorites/list.json`
  );
  console.log("favorites response", response.data.favorites.length);
  return response.data.favorites;
}
const DisplayPrefsContext = createContext({});
function DisplayPrefsProvider({ initialPrefs, children }) {
  const [displayPrefs, setDisplayPrefs] = useState(
    initialPrefs || {
      resultsStyle: "list"
      // could be list or thumbnails
    }
  );
  const setResultsStyle = useCallback(
    (newStyle) => {
      console.log("changing results style to", newStyle);
      setDisplayPrefs({ ...displayPrefs, resultsStyle: newStyle });
    },
    [displayPrefs]
  );
  return /* @__PURE__ */ jsx(
    DisplayPrefsContext.Provider,
    {
      value: { displayPrefs, setDisplayPrefs, setResultsStyle },
      children
    }
  );
}
function useDisplayPrefs() {
  const { displayPrefs, setDisplayPrefs, setResultsStyle } = useContext(DisplayPrefsContext);
  if (!displayPrefs) {
    throw new Error(
      "useDisplayPrefs must be used inside a DisplayPrefsProvider"
    );
  }
  return { displayPrefs, setDisplayPrefs, setResultsStyle };
}
function FavoritesResults({ favoritesResults }) {
  return /* @__PURE__ */ jsx(Fragment, { children: favoritesResults.map((fav) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("p", { children: [
    /* @__PURE__ */ jsx(FavoriteBorder, {}),
    /* @__PURE__ */ jsx(FavItem, { fav })
  ] }) }, fav.id)) });
}
function FavItem({ fav }) {
  switch (fav.type) {
    default:
      return /* @__PURE__ */ jsxs("p", { children: [
        fav.favorited.name,
        /* @__PURE__ */ jsx("img", { src: fav.favorited.first_photo.small_url }),
        /* @__PURE__ */ jsx(FavIcon, { fav })
      ] });
  }
}
function FavIcon({ fav }) {
  switch (fav.type) {
    case "pattern":
      return /* @__PURE__ */ jsx(ImportContacts, {});
    case "project":
      return /* @__PURE__ */ jsx(BorderColor, {});
    case "yarn":
      return /* @__PURE__ */ jsx(Gesture, {});
    case "stash":
      return /* @__PURE__ */ jsx(Backpack, {});
    case "forumpost":
      return /* @__PURE__ */ jsx(Forum, {});
    case "designer":
      return /* @__PURE__ */ jsx(Psychology, {});
    case "yarnshop":
      return /* @__PURE__ */ jsx(Store, {});
    case "yarnbrand":
      return /* @__PURE__ */ jsx(BrandingWatermark, {});
    case "bundle":
      return /* @__PURE__ */ jsx(Workspaces, {});
    default:
      return fav.type;
  }
}
function ResultsPreferences() {
  const { displayPrefs, setResultsStyle } = useDisplayPrefs();
  const handleAlignment = (event, newAlignment) => {
    setResultsStyle(newAlignment);
  };
  return /* @__PURE__ */ jsxs(
    ToggleButtonGroup,
    {
      value: displayPrefs.resultsStyle,
      exclusive: true,
      onChange: handleAlignment,
      "aria-label": "results display preferences",
      children: [
        /* @__PURE__ */ jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsx(ToggleButton, { value: "list", "aria-label": "list with images", children: /* @__PURE__ */ jsx(ViewList, { alt: "View as List" }) }) }),
        /* @__PURE__ */ jsx(ToggleButton, { value: "thumbnails", "aria-label": "large thumbnails", children: /* @__PURE__ */ jsx(GridView, { alt: "View as Thumbnails" }) })
      ]
    }
  );
}
const loader$3 = async ({ request }) => {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  const favoritesResults = await getFavorites({
    accessToken: tokens.access_token,
    username: user.username
    /* todo add more search terms */
  });
  return json({ user, tokens, favoritesResults });
};
function Favorites() {
  const { favoritesResults } = useLoaderData();
  return /* @__PURE__ */ jsxs(DisplayPrefsProvider, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", sx: { padding: "10px" }, children: "My Favorites" }),
    /* @__PURE__ */ jsx(ResultsPreferences, {}),
    /* @__PURE__ */ jsx(FavoritesResults, { favoritesResults }),
    /* @__PURE__ */ jsx(Typography, { children: "To add something to your Ravelry favorites, please visit Ravelry." })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Favorites,
  loader: loader$3
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
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: Logout
}, Symbol.toStringTag, { value: "Module" }));
const loader$2 = async ({ request }) => {
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
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Profile,
  loader: loader$2
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
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "About the Knit Notebook" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "Mary Shaw started this to demo: Complex state in React for UtahJS on September 13, 2024." }),
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
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  oldPosition,
  username,
  accessToken
}) {
  const newSortOrder = newPosition > oldPosition ? newPosition + 2 : newPosition + 1;
  const axiosInstance = axios.create();
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response = await axiosInstance.post(
    `https://api.ravelry.com/people/${username}/queue/${projectId}/update.json`,
    {
      sort_order: newSortOrder
      // position is 1-based (not zero-based)
    }
  );
  console.log(
    "response from network",
    `https://api.ravelry.com/people/${username}/queue/${projectId}/update.json`,
    { sort_order: newSortOrder },
    //
    response
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
const projectRowCss$1 = css`
  display: flex;
  flex-direction: row;
  border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
  cursor: pointer;
`;
const detailsCss$1 = css`
  flex-grow: 1;
`;
const imageCss$1 = css`
  aspect-ratio: 1; /* make width equal to height  */
  height: auto;
  width: 150px;
  max-width: 100%;
  max-height: 150px;
  object-fit: cover;

  margin: 0 10px 0 0;
`;
function SortableQueueItem({ project }) {
  let isHydrated = useHydrated();
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
  return isHydrated ? /* @__PURE__ */ jsx("li", { ref: setNodeRef, style, ...attributes, ...listeners, children: /* @__PURE__ */ jsx(QueueItem, { project }) }) : /* @__PURE__ */ jsx(Fragment, {});
}
const QueueItem = forwardRef(({ project }, ref) => {
  const patternPhoto = project == null ? void 0 : project.best_photo;
  return /* @__PURE__ */ jsxs("div", { className: projectRowCss$1, ref, children: [
    patternPhoto && /* @__PURE__ */ jsx("img", { className: imageCss$1, src: patternPhoto.small_url, alt: "" }),
    /* @__PURE__ */ jsxs("div", { className: detailsCss$1, children: [
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
    /* @__PURE__ */ jsx(ImportExport, { sx: { display: "flex", mr: 1, mt: 1 } })
  ] }, `item-${project.id}`);
});
const queueList = css`
  list-style-type: none;
  padding: 0 10px;
  margin: 0px;
`;
function SortableQueue({ queuedProjects, reorderProjects }) {
  const fetcher = useFetcher();
  const [queue, setQueue] = useState(queuedProjects);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
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
          newPosition: newIndex,
          oldPosition: oldIndex
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
const loader$1 = async ({ request }) => {
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
  const { projectId, newPosition, oldPosition } = await request.json();
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  try {
    await postReorderQueue({
      projectId,
      newPosition,
      oldPosition,
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
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Queue,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
async function getStash({
  username,
  accessToken,
  pageSize,
  currentPage,
  sortOrder
}) {
  const axiosInstance = axios.create();
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/stash/list.json?page_size=${pageSize}&page=${currentPage}&sort=${sortOrder}`
  );
  const stashOrig = response.data.stash;
  const stashFull = await Promise.allSettled(
    stashOrig.map(
      (stash) => addFullStashInfo({ axiosInstance, stash, username, accessToken })
    )
  ).then((promises) => {
    return promises.filter((promise) => {
      return promise.status === "fulfilled" ? promise.value : null;
    }).map((promise) => {
      return promise.value;
    });
  });
  return { stashes: stashFull, data: response.data };
}
async function addFullStashInfo({
  axiosInstance,
  username,
  stash,
  accessToken
}) {
  const stashId = stash.id;
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/stash/${stashId}.json`
  );
  console.log("stash data", response.data.stash);
  return response.data.stash;
}
function Paginator({
  pageSize,
  currentPage,
  numPages,
  onChangePageNum,
  onChangePageSize
}) {
  console.log(
    "rendering page number",
    currentPage,
    "page size",
    pageSize,
    "numPages",
    numPages
  );
  return /* @__PURE__ */ jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsx(Box, { sx: { minWidth: 120 }, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, size: "small", children: [
      /* @__PURE__ */ jsx(InputLabel, { id: "page-size-label", children: "Page Size" }),
      /* @__PURE__ */ jsxs(
        Select,
        {
          labelId: "page-size-label",
          id: "page-size",
          value: pageSize,
          label: "Page Size",
          onChange: onChangePageSize,
          children: [
            /* @__PURE__ */ jsx(MenuItem, { value: 10, children: "10" }),
            /* @__PURE__ */ jsx(MenuItem, { value: 20, children: "20" }),
            /* @__PURE__ */ jsx(MenuItem, { value: 50, children: "50" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      Pagination,
      {
        count: numPages,
        variant: "outlined",
        shape: "rounded",
        size: "large",
        page: +currentPage,
        onChange: onChangePageNum
      }
    )
  ] });
}
const projectRowCss = css`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`;
const linkCss = css`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const detailsCss = css`
  flex-grow: 1;
`;
const imageCss = css`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`;
const missingImageUrl = `../../images/yarn-ball.jpg`;
function StashListItem({ stash }) {
  const { displayPrefs } = useDisplayPrefs();
  if (displayPrefs.resultsStyle === "list") {
    return /* @__PURE__ */ jsx(StashListItemRow, { stash });
  } else {
    return /* @__PURE__ */ jsx(StashListItemThumbnail, { stash });
  }
}
function StashListItemThumbnail({ stash }) {
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 2, sm: 4, md: 4, children: /* @__PURE__ */ jsx(Typography, { variant: "h2", component: "h2", children: stash.name }) }, stash.id);
}
function StashListItemRow({ stash }) {
  var _a;
  const stashPhoto = stash == null ? void 0 : stash.photos[0];
  const totalYardage = getTotalYardage(stash == null ? void 0 : stash.packs);
  return /* @__PURE__ */ jsx(Paper, { elevation: 2, children: /* @__PURE__ */ jsxs("div", { className: projectRowCss, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `https://www.ravelry.com/people/marybeshaw/stash/${stash.permalink}`,
        target: "_blank",
        className: linkCss,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: imageCss,
            src: (stashPhoto == null ? void 0 : stashPhoto.medium_url) || missingImageUrl,
            alt: ""
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: detailsCss, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", component: "h2", children: stash.name }, stash.id),
      stash.colorway_name && /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "div", children: [
        "Colorway: ",
        stash.colorway_name
      ] }),
      stash.long_yarn_weight_name && /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "div", children: [
        "Weight: ",
        stash.long_yarn_weight_name
      ] }),
      totalYardage && /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "div", children: [
        totalYardage,
        " yards"
      ] }),
      ((_a = stash.stash_status) == null ? void 0 : _a.name) && /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "div", children: stash.stash_status.name }),
      stash.location && /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "div", children: [
        "Location: ",
        stash.location
      ] }),
      stash.notes && /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "div", children: [
        "Notes: ",
        stash.notes
      ] })
    ] })
  ] }) }, `stash-${stash.id}`);
}
function getTotalYardage(packs) {
  if (!packs) {
    return 0;
  }
  packs.reduce(function(acc, pack) {
    return acc + pack.total_yards;
  }, 0);
}
function StashList({ stashes }) {
  const { displayPrefs } = useDisplayPrefs();
  const Tag = displayPrefs.resultsStyle === "list" ? StashListRowStyle : StashListThumbnailStyle;
  return /* @__PURE__ */ jsx(Tag, { children: stashes.map((stash) => /* @__PURE__ */ jsx(StashListItem, { stash }, `stash-list-item-${stash.id}`)) });
}
function StashListRowStyle({ children }) {
  return /* @__PURE__ */ jsx(Fragment$1, { children });
}
function StashListThumbnailStyle({ children }) {
  return /* @__PURE__ */ jsx(
    Grid,
    {
      container: true,
      spacing: { xs: 2, md: 3 },
      columns: { xs: 4, sm: 8, md: 12 },
      children
    }
  );
}
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_SORT_ORDER = "recent";
const stashListWrapperCss = css`
  margin-right: 4px; // to match the paginator form's right margin
`;
async function loader({ request }) {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  const searchParams = new URL(request.url).searchParams;
  const pageSize = searchParams.get("pageSize") || DEFAULT_PAGE_SIZE;
  const currentPage = searchParams.get("currentPage") || DEFAULT_CURRENT_PAGE;
  const sortOrder = searchParams.get("sortOrder") || DEFAULT_SORT_ORDER;
  const { stashes, data } = await getStash({
    accessToken: tokens.access_token,
    username: user.username,
    pageSize,
    page: currentPage,
    sortOrder
  });
  return json({
    user,
    tokens,
    stashes,
    data,
    pageProps: { pageSize, currentPage, sortOrder }
  });
}
function Stash() {
  const { stashes, data, pageProps } = useLoaderData();
  const [searchParams] = useSearchParams();
  const numPages = data.paginator.last_page;
  console.log(
    "num results",
    data.paginator.results,
    "page size",
    pageProps.pageSize,
    "current page",
    pageProps.currentPage,
    "sort order",
    pageProps.sortOrder,
    "num pages",
    numPages
  );
  console.log("data", data);
  function handleChangePageNum(e, value) {
    console.log("change page number to", value);
    searchParams.set("currentPage", value);
  }
  function handleChangePageSize(e) {
    console.log("change page size to", e.target.value);
    searchParams.set("pageSize", e.target.value);
  }
  return /* @__PURE__ */ jsxs(DisplayPrefsProvider, { children: [
    /* @__PURE__ */ jsxs(
      Unstable_Grid2,
      {
        container: true,
        spacing: 3,
        columnSpacing: { xs: 1, sm: 2, md: 3 },
        disableEqualOverflow: true,
        sx: { marginBottom: "10px" },
        children: [
          /* @__PURE__ */ jsx(Unstable_Grid2, { xs: 12, sm: 8, children: /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", sx: { padding: "10px" }, children: "My Yarn Collection" }) }),
          /* @__PURE__ */ jsx(
            Unstable_Grid2,
            {
              xs: 12,
              sm: 4,
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              children: /* @__PURE__ */ jsx(ResultsPreferences, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: stashListWrapperCss, children: /* @__PURE__ */ jsx(StashList, { stashes }) }),
    /* @__PURE__ */ jsx(
      Paginator,
      {
        pageSize: pageProps.pageSize,
        currentPage: pageProps.currentPage,
        onChangePageNum: handleChangePageNum,
        onChangePageSize: handleChangePageSize,
        numPages
      }
    ),
    /* @__PURE__ */ jsx(Typography, { children: "To add something to your Ravelry stash, please visit Ravelry." })
  ] });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Stash,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DWODdhUV.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/index-Bm93K0U-.js", "/assets/index-D90acgM7.js", "/assets/theme-CzDbLl9l.js", "/assets/GlobalStyles-CMtFhkOZ.js", "/assets/components-DJ55LjMZ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BW3-1ZmM.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/index-Bm93K0U-.js", "/assets/index-D90acgM7.js", "/assets/theme-CzDbLl9l.js", "/assets/GlobalStyles-CMtFhkOZ.js", "/assets/components-DJ55LjMZ.js", "/assets/Typography-CbunWm-a.js", "/assets/useIsFocusVisible-VR3Qdb5l.js", "/assets/ButtonBase-Dj9uuRPZ.js", "/assets/Tooltip-CJOwkLwv.js", "/assets/Link-Iljc2CrZ.js", "/assets/UserProvider-DZWmR8mT.js", "/assets/MenuItem-D42l22xF.js", "/assets/createSvgIcon-DTYW70ZG.js"], "css": [] }, "routes/auth.ravelry.callback": { "id": "routes/auth.ravelry.callback", "parentId": "routes/auth.ravelry", "path": "callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry.callback-CnpGb9ZP.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/index-D90acgM7.js", "/assets/components-DJ55LjMZ.js"], "css": [] }, "routes/auth.ravelry": { "id": "routes/auth.ravelry", "parentId": "root", "path": "auth/ravelry", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login-failed": { "id": "routes/login-failed", "parentId": "root", "path": "login-failed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-failed-TM3j_Pv9.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js"], "css": [] }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard-DUhHeA-E.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/index-D90acgM7.js", "/assets/Typography-CbunWm-a.js", "/assets/useIsFocusVisible-VR3Qdb5l.js", "/assets/Link-Iljc2CrZ.js"], "css": [] }, "routes/favorites": { "id": "routes/favorites", "parentId": "root", "path": "favorites", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/favorites-mM0EhlYj.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/Typography-CbunWm-a.js", "/assets/useIsFocusVisible-VR3Qdb5l.js", "/assets/index-Bm93K0U-.js", "/assets/index-D90acgM7.js", "/assets/ButtonBase-Dj9uuRPZ.js", "/assets/Tooltip-CJOwkLwv.js", "/assets/createSvgIcon-DTYW70ZG.js", "/assets/ResultsPreferences-yTSzwyOV.js", "/assets/components-DJ55LjMZ.js"], "css": [] }, "routes/sign-out": { "id": "routes/sign-out", "parentId": "root", "path": "sign-out", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/sign-out-DOiIRGRU.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/index-D90acgM7.js", "/assets/Typography-CbunWm-a.js", "/assets/useIsFocusVisible-VR3Qdb5l.js", "/assets/UserProvider-DZWmR8mT.js", "/assets/components-DJ55LjMZ.js", "/assets/ButtonBase-Dj9uuRPZ.js"], "css": [] }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/profile-D4R9MfEK.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/index-D90acgM7.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/components-DJ55LjMZ.js", "/assets/Typography-CbunWm-a.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-CmTE65so.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/index-D90acgM7.js", "/assets/Typography-CbunWm-a.js", "/assets/useIsFocusVisible-VR3Qdb5l.js", "/assets/Link-Iljc2CrZ.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-ByHDLAg1.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/index-D90acgM7.js", "/assets/Typography-CbunWm-a.js", "/assets/useIsFocusVisible-VR3Qdb5l.js", "/assets/Link-Iljc2CrZ.js"], "css": [] }, "routes/queue": { "id": "routes/queue", "parentId": "root", "path": "queue", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/queue-KOscIY9v.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/Typography-CbunWm-a.js", "/assets/index-D90acgM7.js", "/assets/emotion-css.development.esm-MDCT8pKE.js", "/assets/createSvgIcon-DTYW70ZG.js", "/assets/components-DJ55LjMZ.js"], "css": [] }, "routes/stash": { "id": "routes/stash", "parentId": "root", "path": "stash", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/stash-UGAtzecF.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-DAnhN6oH.js", "/assets/Typography-CbunWm-a.js", "/assets/useIsFocusVisible-VR3Qdb5l.js", "/assets/index-Bm93K0U-.js", "/assets/index-D90acgM7.js", "/assets/ButtonBase-Dj9uuRPZ.js", "/assets/Tooltip-CJOwkLwv.js", "/assets/createSvgIcon-DTYW70ZG.js", "/assets/emotion-css.development.esm-MDCT8pKE.js", "/assets/ResultsPreferences-yTSzwyOV.js", "/assets/MenuItem-D42l22xF.js", "/assets/GlobalStyles-CMtFhkOZ.js", "/assets/components-DJ55LjMZ.js"], "css": [] } }, "url": "/assets/manifest-a7bb16f7.js", "version": "a7bb16f7" };
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
  "routes/favorites": {
    id: "routes/favorites",
    parentId: "root",
    path: "favorites",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/sign-out": {
    id: "routes/sign-out",
    parentId: "root",
    path: "sign-out",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route8
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/queue": {
    id: "routes/queue",
    parentId: "root",
    path: "queue",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/stash": {
    id: "routes/stash",
    parentId: "root",
    path: "stash",
    index: void 0,
    caseSensitive: void 0,
    module: route11
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
