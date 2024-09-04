import { jsx, jsxs } from "react/jsx-runtime";
import * as ReactDOMServer from "react-dom/server";
import { RemixServer, Meta, Links, ScrollRestoration, Scripts, useLoaderData, Outlet, json, useRouteError, isRouteErrorResponse, useSearchParams, useSubmit, Form, useFetcher } from "@remix-run/react";
import { createTheme, ThemeProvider, CssBaseline, Typography, Link as Link$1, AppBar, Container, Toolbar, Box, IconButton, Menu as Menu$1, MenuItem, Tooltip, Avatar, unstable_useEnhancedEffect, Card, CardMedia, CardContent, CardActions, Chip, Paper, ToggleButtonGroup, ToggleButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Select, Unstable_Grid2, Button, Pagination } from "@mui/material";
import { CacheProvider, withEmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import * as React from "react";
import React__default, { createContext, Fragment, forwardRef, useState, useContext, useReducer, useEffect, useCallback, useMemo } from "react";
import createCache from "@emotion/cache";
import { useHref, useLinkClickHandler } from "react-router-dom";
import { Notebook, Menu } from "mdi-material-ui";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import axios from "axios";
import { createCookieSessionStorage } from "@remix-run/node";
import { css } from "@emotion/css";
import { Workspaces, BrandingWatermark, Store, Psychology, Forum, Backpack, Gesture, BorderColor, ImportContacts, ViewList, GridView, Search, ImportExport } from "@mui/icons-material";
import { useDebouncedCallback } from "use-debounce";
import { useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { useSortable, sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
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
      fontSize: 26,
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
        main: "#4884a4"
      }
    }),
    primary: theme.palette.augmentColor({
      color: {
        main: "#4884a4"
      }
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: "#854092"
      }
    }),
    error: theme.palette.augmentColor({
      color: {
        main: "#c53468"
      }
    }),
    warning: theme.palette.augmentColor({
      color: {
        main: "#7d5735"
      }
    }),
    info: theme.palette.augmentColor({
      color: {
        main: "#319ba0"
      }
    }),
    success: theme.palette.augmentColor({
      color: {
        main: "#47549b"
      }
    })
  }
});
theme = createTheme(theme, {
  components: {
    // Name of the component
    MuiChip: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: "18px",
          margin: "2px"
        },
        label: {
          margin: "3px 10px"
        },
        outlined: {
          // fontSize: "18px",
        }
      }
    }
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
function Layout({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ResponsiveAppBar, {}),
    /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx(Box, { sx: { my: 4 }, children }),
          /* @__PURE__ */ jsx(Footer, {})
        ]
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx(Box, { sx: { display: "block", minHeight: "50px" }, children: /* @__PURE__ */ jsx(Copyright, {}) });
}
function getAxiosInstance({ accessToken }) {
  const axiosInstance = axios.create();
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return axiosInstance;
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
    const axiosInstance = getAxiosInstance({ accessToken: tokens.access_token });
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
const thumbnailContainerCss$1 = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px;
`;
const thumbnailInnerContainerCss$2 = css`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`;
const loader$4 = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  return json(data);
};
const cardItems = [
  {
    name: "Projects",
    path: "/projects",
    description: "See all of your knitting projects in one place! The good, the bad, and maybe the ugly....",
    splashUrl: "../images/projects-splash.jpeg"
  },
  {
    name: "Queue",
    path: "/queue",
    description: "What will you work on next? Possibilities are endless, but they are here!",
    splashUrl: "../images/queue-splash.jpeg"
  },
  {
    name: "Stash",
    path: "/stash",
    description: 'Do you have a "stash beyond live expectancy" (SABLE)? Click to find out!',
    splashUrl: "../images/stash-splash.jpeg"
  },
  {
    name: "Favorites",
    path: "/favorites",
    description: "See and search the Ravelry items you love, including projects, patterns, and forum posts!",
    splashUrl: "../images/favorites-splash.jpeg"
  }
];
function Dashboard() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", children: "Knit Notebook Dashboard" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "Welcome to your Knit Notebook, where you can update your Ravelry notebook with a different UI for a limited time." }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: "What will you work on next?" }),
    /* @__PURE__ */ jsx("div", { className: thumbnailContainerCss$1, children: cardItems.map((cardItem) => /* @__PURE__ */ jsx(MenuCardItem, { ...cardItem }, cardItem.name)) })
  ] });
}
function MenuCardItem({ name, path, description, splashUrl }) {
  return /* @__PURE__ */ jsx("div", { className: thumbnailInnerContainerCss$2, children: /* @__PURE__ */ jsxs(Card, { sx: { maxWidth: 345 }, children: [
    /* @__PURE__ */ jsx(CardMedia, { sx: { height: 140 }, image: splashUrl, title: "" }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: name }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: description })
    ] }),
    /* @__PURE__ */ jsx(CardActions, { children: /* @__PURE__ */ jsxs(Link, { to: path, variant: "contained", children: [
      "Visit your ",
      name
    ] }) })
  ] }) });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
async function getFavorites({
  username,
  accessToken,
  currentPage,
  favoriteTypes,
  pageSize,
  searchText
}) {
  const axiosInstance = getAxiosInstance({ accessToken });
  const params = {
    page_size: pageSize,
    page: currentPage
  };
  if (searchText) {
    params.query = searchText;
    params.deep_search = 1;
  }
  if (favoriteTypes == null ? void 0 : favoriteTypes.length) {
    params.types = favoriteTypes.join(" ");
  }
  const fullFavoritesURL = getFavoritesURL(username) + new URLSearchParams(params);
  const response = await axiosInstance.get(fullFavoritesURL);
  console.log("favorites request", fullFavoritesURL, "response:", response.data);
  return { favorites: response.data.favorites, data: response.data };
}
function getFavoritesURL(username) {
  return `https://api.ravelry.com/people/${username}/favorites/list.json?`;
}
css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 300px;
`;
const allFavoriteTypes = [
  { key: "project", label: "Projects" },
  { key: "pattern", label: "Patterns" },
  { key: "yarn", label: "Yarn" },
  { key: "stash", label: "Stash" }
  // I am hiding these other available types for now to make the UI simpler
  //   "forumpost",
  //   "designer",
  //   "yarnbrand",
  //   "yarnshop",
  //   "bundle",
];
function FavoriteTypeChips() {
  const [searchParams] = useSearchParams();
  const { handleChipClick } = useFavorites();
  const selectedTypes = searchParams.getAll("favoriteType");
  return /* @__PURE__ */ jsx("div", { css: "favoriteChipContainerCss", children: allFavoriteTypes.map((favoriteType) => /* @__PURE__ */ jsx(
    FavoriteTypeChip,
    {
      favoriteType,
      selectedTypes,
      handleChipClick
    },
    favoriteType.key
  )) });
}
function FavoriteTypeChip({ favoriteType, selectedTypes, handleChipClick }) {
  return /* @__PURE__ */ jsx(
    Chip,
    {
      onClick: () => handleChipClick(favoriteType),
      label: favoriteType.label,
      variant: !selectedTypes.find((type) => type === favoriteType.key) ? "outlined" : "",
      sx: { marginRight: 1 }
    }
  );
}
function useFavorites() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(
    favoriteTypeReducer,
    searchParams,
    initFavoriteTypeReducer
  );
  useEffect(() => {
    if (JSON.stringify(state.selectedTypes) !== JSON.stringify(state.lastSelectedTypes)) {
      setSearchParams(
        (params) => {
          params.delete("favoriteType");
          state.selectedTypes.forEach((selectedType) => {
            params.append("favoriteType", selectedType);
          });
          return params;
        },
        { replace: false }
        // this causes navigation to the url with this  value in the path
      );
      dispatch({ actionType: "storedSearchParam" });
    }
  }, [state]);
  const handleChipClick = (favoriteType) => {
    dispatch({ actionType: "toggleChip", key: favoriteType.key });
  };
  return { handleChipClick };
}
function favoriteTypeReducer(state, action2) {
  const newState = { lastSelectedTypes: state.selectedTypes };
  if (action2.actionType === "toggleChip") {
    if (state.selectedTypes.find((key) => key === action2.key)) {
      newState.selectedTypes = state.selectedTypes.filter((key) => key !== action2.key).sort();
    } else {
      newState.selectedTypes = [action2.key, ...state.selectedTypes].sort();
    }
  } else if (action2.actionType === "storedSearchParam") {
    newState.selectedTypes = state.selectedTypes;
  }
  return newState;
}
function initFavoriteTypeReducer(searchParams) {
  return { selectedTypes: searchParams.getAll("favoriteType") };
}
const DisplayPrefsContext = createContext({});
function DisplayPrefsProvider({ initialPrefs, children }) {
  const [displayPrefs, setDisplayPrefs] = useState(
    initialPrefs || {
      resultsStyle: "list"
      // options: list or thumbnails
    }
  );
  function setResultsStyle(newStyle) {
    setDisplayPrefs((prefs) => {
      return { ...prefs, resultsStyle: newStyle };
    });
    window.localStorage.setItem("display-prefs", newStyle);
  }
  useEffect(() => {
    if (window.localStorage.getItem("display-prefs") === "thumbnails") {
      setResultsStyle("thumbnails");
    }
  }, []);
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
const FavItemContext = createContext({});
function FavItemProvider({ fav, children }) {
  return /* @__PURE__ */ jsx(FavItemContext.Provider, { value: fav, children });
}
function useFavItem() {
  const fav = useContext(FavItemContext);
  if (!fav) {
    throw new Error("useFavItem must be used inside a DisplayPrefsProvider");
  }
  return fav;
}
function FavItemByline() {
  var _a, _b, _c;
  const fav = useFavItem();
  console.log("in fav item title.", fav.type);
  return /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: [
    fav.type === "pattern" && /* @__PURE__ */ jsxs("span", { children: [
      "by ",
      ((_a = fav.favorited.designer) == null ? void 0 : _a.name) || "a designer"
    ] }),
    fav.type === "project" && /* @__PURE__ */ jsxs("span", { children: [
      "by ",
      ((_b = fav.favorited.user) == null ? void 0 : _b.username) || "a knitter"
    ] }),
    fav.type === "yarn" && /* @__PURE__ */ jsxs("span", { children: [
      fav.favorited.name,
      " by ",
      fav.favorited.yarn_company_name
    ] }),
    fav.type === "stash" && /* @__PURE__ */ jsxs("span", { children: [
      "by ",
      ((_c = fav.favorited.user) == null ? void 0 : _c.username) || "a collector"
    ] })
  ] });
}
function FavPermalink() {
  var _a, _b;
  const fav = useFavItem();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    fav.type === "yarn" && fav.favorited.permalink && /* @__PURE__ */ jsx(
      Link$1,
      {
        href: `https://www.ravelry.com/yarns/library/${fav.favorited.permalink}`,
        variant: "contained",
        target: "_blank",
        children: "Yarn on Ravelry"
      }
    ),
    fav.type === "pattern" && fav.favorited.permalink && /* @__PURE__ */ jsx(
      Link$1,
      {
        href: `https://www.ravelry.com/patterns/library/${fav.favorited.permalink}`,
        variant: "contained",
        target: "_blank",
        component: "a",
        children: "Pattern on Ravelry"
      }
    ),
    fav.type === "stash" && fav.favorited.permalink && ((_a = fav.favorited.user) == null ? void 0 : _a.username) && /* @__PURE__ */ jsx(
      Link$1,
      {
        href: `https://www.ravelry.com/people/${fav.favorited.user.username}/stash/${fav.favorited.permalink}`,
        variant: "contained",
        target: "_blank",
        component: "a",
        children: "Stash on Ravelry"
      }
    ),
    fav.type === "project" && fav.favorited.permalink && ((_b = fav.favorited.user) == null ? void 0 : _b.username) && /* @__PURE__ */ jsx(
      Link$1,
      {
        href: `https://www.ravelry.com/projects/${fav.favorited.user.username}/${fav.favorited.permalink}`,
        variant: "contained",
        target: "_blank",
        component: "a",
        children: "Project on Ravelry"
      }
    )
  ] });
}
function FavTypeIcon({ fav }) {
  switch (fav.type) {
    case "pattern":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Pattern", children: /* @__PURE__ */ jsx(ImportContacts, {}) });
    case "project":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Project", children: /* @__PURE__ */ jsx(BorderColor, {}) });
    case "yarn":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Yarn", children: /* @__PURE__ */ jsx(Gesture, {}) });
    case "stash":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Stash", children: /* @__PURE__ */ jsx(Backpack, {}) });
    case "forumpost":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Forum", children: /* @__PURE__ */ jsx(Forum, {}) });
    case "designer":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Designer", children: /* @__PURE__ */ jsx(Psychology, {}) });
    case "yarnshop":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Yarn Shop", children: /* @__PURE__ */ jsx(Store, {}) });
    case "yarnbrand":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Yarn Brand", children: /* @__PURE__ */ jsx(BrandingWatermark, {}) });
    case "bundle":
      return /* @__PURE__ */ jsx(Tooltip, { title: "Bundle", children: /* @__PURE__ */ jsx(Workspaces, {}) });
    default:
      return fav.type;
  }
}
const rowCss = css`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`;
const outerImageCss = css`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const rowDetailsCss$1 = css`
  flex-grow: 1;
`;
const rowImageCss$1 = css`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`;
const typeLinkContainerCss = css`
  display: flex;
  margin-top: 10px;
  max-width: 400px;
  & * {
    margin-right: 10px;
  }
`;
const missingImageUrl$2 = `../../images/yarn-ball.jpg`;
function FavListItem() {
  var _a;
  const fav = useFavItem();
  return /* @__PURE__ */ jsx(Paper, { elevation: 2, children: /* @__PURE__ */ jsxs("div", { className: rowCss, children: [
    /* @__PURE__ */ jsx("div", { className: outerImageCss, children: /* @__PURE__ */ jsx(
      "img",
      {
        className: rowImageCss$1,
        src: fav.favorited.first_photo.small_url || missingImageUrl$2,
        alt: ""
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: rowDetailsCss$1, children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: fav.favorited.name }),
      /* @__PURE__ */ jsx(FavItemByline, {}),
      fav.type === "yarn" && ((_a = fav.favorited.yarn_weight) == null ? void 0 : _a.name) && /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: fav.favorited.yarn_weight.name }),
      fav.comment && /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: [
        '"',
        fav.comment,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: typeLinkContainerCss, children: [
        /* @__PURE__ */ jsx(FavTypeIcon, { fav }),
        /* @__PURE__ */ jsx(FavPermalink, {})
      ] })
    ] })
  ] }) }, `stash-${fav.id}`);
}
const thumbnailInnerContainerCss$1 = css`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`;
function FavThumbnailItem() {
  var _a;
  const fav = useFavItem();
  console.log("fav item", fav);
  return /* @__PURE__ */ jsx("div", { className: thumbnailInnerContainerCss$1, children: /* @__PURE__ */ jsxs(Card, { sx: { maxWidth: 345 }, children: [
    /* @__PURE__ */ jsx(
      CardMedia,
      {
        sx: { height: 140 },
        image: fav.favorited.first_photo.small_url,
        title: ""
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: fav.favorited.name }),
      /* @__PURE__ */ jsx(FavItemByline, {}),
      fav.type === "yarn" && ((_a = fav.favorited.yarn_weight) == null ? void 0 : _a.name) && /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: fav.favorited.yarn_weight.name }),
      fav.comment && /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: [
        '"',
        fav.comment,
        '"'
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardActions, { sx: { display: "flex", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsx(FavTypeIcon, { fav }),
      /* @__PURE__ */ jsx(FavPermalink, {})
    ] })
  ] }) });
}
const thumbnailContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px;
`;
const listWrapperCss$1 = css`
  margin-right: 4px; // to match the paginator form's right margin
`;
function FavoritesResults({ favoritesResults }) {
  const { displayPrefs } = useDisplayPrefs();
  const Tag = displayPrefs.resultsStyle === "list" ? FavListItem : FavThumbnailItem;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: displayPrefs.resultsStyle === "list" ? listWrapperCss$1 : thumbnailContainerCss,
      children: favoritesResults.map((fav) => /* @__PURE__ */ jsx(FavItemProvider, { fav, children: /* @__PURE__ */ jsx(Tag, { fav }) }, fav.id))
    }
  ) });
}
function DisplayPrefsOptions() {
  const { displayPrefs, setResultsStyle } = useDisplayPrefs();
  return /* @__PURE__ */ jsxs(
    ToggleButtonGroup,
    {
      value: displayPrefs.resultsStyle,
      exclusive: true,
      onChange: (event, newAlignment) => {
        setResultsStyle(newAlignment);
      },
      "aria-label": "results display preferences",
      children: [
        /* @__PURE__ */ jsx(Tooltip, { title: "Display Preferences", children: /* @__PURE__ */ jsx(ToggleButton, { value: "list", "aria-label": "list with images", children: /* @__PURE__ */ jsx(ViewList, { alt: "View as List" }) }) }),
        /* @__PURE__ */ jsx(Tooltip, { title: "Thumbnails", children: /* @__PURE__ */ jsx(ToggleButton, { value: "thumbnails", "aria-label": "large thumbnails", children: /* @__PURE__ */ jsx(GridView, { alt: "View as Thumbnails" }) }) })
      ]
    }
  );
}
function SearchInput({ searchText }) {
  const [, setSearchParams] = useSearchParams();
  const onChangeSearchText = useCallback(
    (e) => {
      setSearchParams(
        (params) => {
          if (params.get("searchText") !== e.target.value) {
            params.set("searchText", e.target.value);
          }
          return params;
        },
        { replace: false }
        // this causes navigation to the url with this  value in the path
      );
    },
    [searchText, setSearchParams]
  );
  const handleChangeSearchText = useDebouncedCallback(onChangeSearchText, 300);
  return /* @__PURE__ */ jsx(Box, { sx: { marginRight: "10px" }, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, variant: "outlined", children: [
    /* @__PURE__ */ jsx(InputLabel, { htmlFor: "search-text", children: "Search" }),
    /* @__PURE__ */ jsx(
      OutlinedInput,
      {
        id: "search-text",
        type: "text",
        endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(Search, {}) }),
        label: "Search",
        defaultValue: searchText,
        onChange: handleChangeSearchText
      }
    )
  ] }) });
}
const stashSort = {
  recent: "Date Added",
  alpha: "A to Z",
  weight: "Weight",
  colorfamily: "Color",
  _yards: "Most Yardage"
};
function SortOrder({ dataType = "stash", sortOrder }) {
  const [, setSearchParams] = useSearchParams();
  const sortOptions = stashSort;
  function onChangeSortOrder(e) {
    setSearchParams(
      (params) => {
        params.set("sortOrder", e.target.value);
        return params;
      },
      { replace: false }
      // this causes navigation to the url with this  value in the path
    );
  }
  return /* @__PURE__ */ jsx(Box, { sx: { marginRight: "10px" }, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsx(InputLabel, { id: "sort-by-label", children: "Sort By:" }),
    /* @__PURE__ */ jsx(
      Select,
      {
        labelId: "sort-by-label",
        id: "sort-by-select",
        value: sortOrder,
        label: "Sort By",
        autoWidth: false,
        defaultValue: sortOrder,
        onChange: onChangeSortOrder,
        children: Object.keys(sortOptions).map((sortOptionKey) => {
          return /* @__PURE__ */ jsx(MenuItem, { value: sortOptionKey, children: sortOptions[sortOptionKey] }, sortOptionKey);
        })
      }
    )
  ] }) });
}
function HeaderRow({
  searchText,
  sortOrder,
  dataType = "stash",
  children
}) {
  return /* @__PURE__ */ jsxs(
    Unstable_Grid2,
    {
      container: true,
      spacing: 3,
      columnSpacing: { xs: 1, sm: 2, md: 3 },
      disableEqualOverflow: true,
      sx: { marginBottom: "10px" },
      children: [
        /* @__PURE__ */ jsx(
          Unstable_Grid2,
          {
            xs: 12,
            sm: dataType === "favorites" ? 12 : 6,
            md: dataType === "favorites" ? 3 : 4,
            children: /* @__PURE__ */ jsx(Typography, { variant: "h1", component: "h1", sx: { padding: "10px" }, children })
          }
        ),
        dataType === "favorites" && /* @__PURE__ */ jsx(
          Unstable_Grid2,
          {
            xs: 12,
            sm: 6,
            md: 5,
            sx: { alignSelf: "center", textAlign: "right" },
            children: /* @__PURE__ */ jsx(FavoriteTypeChips, {})
          }
        ),
        /* @__PURE__ */ jsxs(
          Unstable_Grid2,
          {
            xs: 12,
            sm: 6,
            md: dataType === "favorites" ? 4 : 6,
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            children: [
              /* @__PURE__ */ jsx(SearchInput, { searchText }),
              dataType === "stash" && /* @__PURE__ */ jsx(SortOrder, { sortOrder }),
              /* @__PURE__ */ jsx(DisplayPrefsOptions, {})
            ]
          }
        )
      ]
    }
  );
}
const noResultsCss = css`
  margin: 20px 20px 40px 10px;
`;
function NoResults({ searchText, dataType = "stash" }) {
  const [, setSearchParams] = useSearchParams();
  function handleClick() {
    setSearchParams(
      (params) => {
        params.delete("searchText");
        return params;
      },
      { replace: false }
      // this causes navigation to the url with this  value in the path
    );
  }
  return /* @__PURE__ */ jsx("div", { className: noResultsCss, children: searchText ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { marginBottom: 2 }, children: [
      dataType === "favorites" ? "No favorites match" : "No stash yarn matches",
      " ",
      "your search term, ",
      searchText,
      "."
    ] }),
    /* @__PURE__ */ jsxs(Button, { onClick: handleClick, variant: "contained", children: [
      "See your entire",
      " ",
      dataType === "favorites" ? "favorites list" : "stash"
    ] })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h2", children: "No stash yarn found." }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "You are missing out on something awesome!" })
  ] }) });
}
const pageSizeOptions = [10, 20, 50];
function Paginator({ pageSize, currentPage, numPages }) {
  const [, setSearchParams] = useSearchParams();
  function onChangePageNum(e, value) {
    setSearchParams(
      (params) => {
        params.set("currentPage", value);
        return params;
      },
      { replace: false }
      // this causes navigation to the url with this  value in the path
    );
  }
  function onChangePageSize(e) {
    setSearchParams(
      (params) => {
        const pageSize2 = e.target.value;
        const startNumberGoal = params.get("pageSize") * (params.get("currentPage") - 1);
        params.set("pageSize", pageSize2);
        params.set("currentPage", Math.floor(startNumberGoal / pageSize2 + 1));
        return params;
      },
      { replace: false }
      // this causes navigation to the url with this  value in the path
    );
  }
  return /* @__PURE__ */ jsxs(
    Box,
    {
      display: "flex",
      justifyContent: "space-between",
      sx: { marginRight: "-4px" },
      children: [
        /* @__PURE__ */ jsx(Box, { sx: { minWidth: 120 }, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, size: "small", children: [
          /* @__PURE__ */ jsx(InputLabel, { id: "page-size-label", children: "Page Size" }),
          /* @__PURE__ */ jsx(
            Select,
            {
              labelId: "page-size-label",
              id: "page-size",
              value: pageSize,
              label: "Page Size",
              onChange: onChangePageSize,
              children: pageSizeOptions.map((pageSizeOption) => /* @__PURE__ */ jsx(MenuItem, { value: pageSizeOption, children: pageSizeOption }, pageSizeOption))
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
      ]
    }
  );
}
const DEFAULT_PAGE_SIZE$1 = 10;
const DEFAULT_CURRENT_PAGE$1 = 1;
const DEFAULT_SORT_ORDER$1 = "recent";
const loader$3 = async ({ request }) => {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  const searchParams = new URL(request.url).searchParams;
  const favoriteTypes = getFavoriteTypes(searchParams);
  const pageSize = searchParams.get("pageSize") || DEFAULT_PAGE_SIZE$1;
  const sortOrder = searchParams.get("sortOrder") || DEFAULT_SORT_ORDER$1;
  const searchText = searchParams.get("searchText") || "";
  const currentPage = searchParams.get("currentPage") ? +searchParams.get("currentPage") : DEFAULT_CURRENT_PAGE$1;
  const { favorites, data } = await getFavorites({
    accessToken: tokens.access_token,
    username: user.username,
    /* todo add more search terms */
    currentPage,
    favoriteTypes,
    pageSize,
    searchText,
    sortOrder
  });
  return json({
    user,
    tokens,
    favorites,
    data,
    pageProps: { pageSize, currentPage, sortOrder, searchText }
  });
};
function Favorites() {
  var _a;
  const { favorites, data, pageProps } = useLoaderData();
  const numPages = ((_a = data == null ? void 0 : data.paginator) == null ? void 0 : _a.last_page) || 1;
  return /* @__PURE__ */ jsxs(DisplayPrefsProvider, { children: [
    /* @__PURE__ */ jsx(HeaderRow, { dataType: "favorites", ...pageProps, children: "My Favorites" }),
    favorites.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(FavoritesResults, { favoritesResults: favorites }),
      /* @__PURE__ */ jsx(
        Paginator,
        {
          pageSize: pageProps.pageSize,
          currentPage: pageProps.currentPage,
          numPages
        }
      )
    ] }) : /* @__PURE__ */ jsx(NoResults, { searchText: pageProps.searchText, dataType: "favorites" }),
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "body2",
        sx: { marginTop: "10px", marginLeft: "10px" },
        children: "To add something to your Ravelry favorites, please visit Ravelry."
      }
    )
  ] });
}
function getFavoriteTypes(searchParams) {
  allFavoriteTypes.sort();
  const favoriteTypeSearchParams = (searchParams.getAll("favoriteType") || []).sort();
  if (areArraysEqual(allFavoriteTypes, favoriteTypeSearchParams)) {
    return [];
  }
  return favoriteTypeSearchParams;
}
function areArraysEqual(array1, array2) {
  (array1 == null ? void 0 : array1.length) === (array2 == null ? void 0 : array2.length) && array1.every((value, index) => value === array2[index]);
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
      /* @__PURE__ */ jsx(
        Typography,
        {
          variant: "body2",
          component: "p",
          sx: { marginTop: 1, marginBottom: 2 },
          children: "Are you sure you want to sign out?"
        }
      ),
      /* @__PURE__ */ jsx(Button, { value: "logout", type: "submit", variant: "contained", children: "Yes, Sign Out" })
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
  const axiosInstance = getAxiosInstance({ accessToken });
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
  const axiosInstance = getAxiosInstance({ accessToken });
  const newSortOrder = newPosition > oldPosition ? newPosition + 2 : newPosition + 1;
  const response = await axiosInstance.post(
    `https://api.ravelry.com/people/${username}/queue/${projectId}/update.json`,
    {
      sort_order: newSortOrder
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
  return /* @__PURE__ */ jsx(Paper, { ref, elevation: 2, children: /* @__PURE__ */ jsxs("div", { className: projectRowCss, children: [
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
    /* @__PURE__ */ jsx(ImportExport, { sx: { display: "flex", mr: 1, mt: 1 } })
  ] }) }, `item-${project.id}`);
});
const queueList = css`
  list-style-type: none;
  padding: 0 10px;
  margin: 0px;
`;
function SortableQueue({ queuedProjects }) {
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
  accessToken,
  username,
  currentPage,
  pageSize,
  searchText,
  sortOrder
}) {
  const axiosInstance = getAxiosInstance({ accessToken });
  const params = {
    page_size: pageSize,
    page: currentPage,
    sort: sortOrder
  };
  if (searchText) {
    params.query = searchText;
  }
  const response = await axiosInstance.get(
    getStashURL(username, searchText) + new URLSearchParams(params)
  );
  const stashOrig = searchText ? response.data.stashes : response.data.stash;
  if (!stashOrig) {
    return { stashes: [], data: response.data };
  }
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
async function addFullStashInfo({ axiosInstance, username, stash }) {
  const stashId = stash.id;
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/stash/${stashId}.json`
  );
  return response.data.stash;
}
function getStashURL(username, searchText) {
  if (searchText) {
    return `https://api.ravelry.com/stash/search.json/?user=${username}&`;
  }
  return `https://api.ravelry.com/people/${username}/stash/list.json?`;
}
function StashDetails({ stash, type = "list" }) {
  var _a;
  const totalYardage = getTotalYardage(stash == null ? void 0 : stash.packs);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
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
    stash.notes && type === "list" && /* @__PURE__ */ jsxs(Typography, { variant: "body2", component: "div", children: [
      "Notes: ",
      stash.notes
    ] })
  ] });
}
function getTotalYardage(packs) {
  if (!packs) {
    return 0;
  }
  return packs.reduce(function(acc, pack) {
    return acc + pack.total_yards;
  }, 0);
}
const stashRowCss = css`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`;
const rowLinkCss = css`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const rowDetailsCss = css`
  flex-grow: 1;
`;
const rowImageCss = css`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`;
const missingImageUrl$1 = `../../images/yarn-ball.jpg`;
function StashListItemRow({ stash }) {
  const stashPhoto = stash == null ? void 0 : stash.photos[0];
  return /* @__PURE__ */ jsx(Paper, { elevation: 2, children: /* @__PURE__ */ jsxs("div", { className: stashRowCss, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `https://www.ravelry.com/people/marybeshaw/stash/${stash.permalink}`,
        target: "_blank",
        className: rowLinkCss,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: rowImageCss,
            src: (stashPhoto == null ? void 0 : stashPhoto.small_url) || missingImageUrl$1,
            alt: ""
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: rowDetailsCss, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", component: "h2", children: stash.name }, stash.id),
      /* @__PURE__ */ jsx(StashDetails, { stash })
    ] })
  ] }) }, `stash-${stash.id}`);
}
const thumbnailLinkCss = css`
  // box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 200px;
  overflow: hidden;
`;
const thumbnailImageCss = css`
  overflow: hidden;
  object-fit: cover;
  max-width: 350px;
`;
const thumbnailContentCss = css`
  padding: 3px 10px 10px 10px;
`;
const thumbnailInnerContainerCss = css`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`;
const missingImageUrl = `../../images/yarn-ball.jpg`;
function StashListItemThumbnail({ stash }) {
  const stashPhoto = stash == null ? void 0 : stash.photos[0];
  return /* @__PURE__ */ jsx("div", { className: thumbnailInnerContainerCss, children: /* @__PURE__ */ jsxs(Paper, { elevation: 2, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `https://www.ravelry.com/people/marybeshaw/stash/${stash.permalink}`,
        target: "_blank",
        className: thumbnailLinkCss,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: thumbnailImageCss,
            src: (stashPhoto == null ? void 0 : stashPhoto.medium_url) || missingImageUrl,
            alt: ""
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: thumbnailContentCss, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", children: stash.name }),
      /* @__PURE__ */ jsx(StashDetails, { stash, type: "thumbnail" })
    ] })
  ] }, `stash-${stash.id}`) }, stash.id);
}
const listWrapperCss = css`
  margin-right: 4px; // to match the paginator form's right margin
`;
const thumbnailWrapperCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px 10px -8px; // to compensate for margins on the edge thumbnails
`;
function StashList({ stashes }) {
  const { displayPrefs } = useDisplayPrefs();
  const Tag = displayPrefs.resultsStyle === "list" ? StashListItemRow : StashListItemThumbnail;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: displayPrefs.resultsStyle === "list" ? listWrapperCss : thumbnailWrapperCss,
      children: stashes.map((stash) => /* @__PURE__ */ jsx(Tag, { stash }, `stash-list-item-${stash.id}`))
    }
  );
}
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_SORT_ORDER = "recent";
async function loader({ request }) {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  const searchParams = new URL(request.url).searchParams;
  const pageSize = searchParams.get("pageSize") || DEFAULT_PAGE_SIZE;
  const sortOrder = searchParams.get("sortOrder") || DEFAULT_SORT_ORDER;
  const searchText = searchParams.get("searchText") || "";
  const currentPage = searchParams.get("currentPage") ? +searchParams.get("currentPage") : DEFAULT_CURRENT_PAGE;
  const { stashes, data } = await getStash({
    accessToken: tokens.access_token,
    username: user.username,
    currentPage,
    pageSize,
    searchText,
    sortOrder
  });
  return json({
    user,
    tokens,
    stashes,
    data,
    pageProps: { pageSize, currentPage, sortOrder, searchText }
  });
}
function Stash() {
  var _a;
  const { stashes, data, pageProps } = useLoaderData();
  const numPages = ((_a = data == null ? void 0 : data.paginator) == null ? void 0 : _a.last_page) || 1;
  return /* @__PURE__ */ jsxs(DisplayPrefsProvider, { children: [
    /* @__PURE__ */ jsx(HeaderRow, { ...pageProps, children: "My Yarn Collection" }),
    stashes.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(StashList, { stashes }),
      /* @__PURE__ */ jsx(
        Paginator,
        {
          pageSize: pageProps.pageSize,
          currentPage: pageProps.currentPage,
          numPages
        }
      )
    ] }) : /* @__PURE__ */ jsx(NoResults, { searchText: pageProps.searchText }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { marginLeft: "10px" }, children: "To add something to your Ravelry stash, please visit Ravelry." })
  ] });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Stash,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CA1sEkyv.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/useTheme-5sFMoId9.js", "/assets/index-DOTPFuaT.js", "/assets/theme-V3xXse2h.js", "/assets/index-COTo03wr.js", "/assets/GlobalStyles-DQzmn2_Z.js", "/assets/components-BuGUhU6K.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BBjZ8L9f.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/useTheme-5sFMoId9.js", "/assets/index-DOTPFuaT.js", "/assets/theme-V3xXse2h.js", "/assets/index-COTo03wr.js", "/assets/GlobalStyles-DQzmn2_Z.js", "/assets/components-BuGUhU6K.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/Typography-wcXED6J0.js", "/assets/useIsFocusVisible-CPlKmROo.js", "/assets/Link-BYYak0VS.js", "/assets/ButtonBase-KljXaplS.js", "/assets/Paper-d-ALm8uW.js", "/assets/Link-S1ptO2_9.js", "/assets/UserProvider-DZWmR8mT.js", "/assets/Tooltip-BKiMUKxq.js", "/assets/createSvgIcon-DhpipJwV.js"], "css": [] }, "routes/auth.ravelry.callback": { "id": "routes/auth.ravelry.callback", "parentId": "routes/auth.ravelry", "path": "callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry.callback-DqMyK8dA.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/index-DOTPFuaT.js", "/assets/components-BuGUhU6K.js"], "css": [] }, "routes/auth.ravelry": { "id": "routes/auth.ravelry", "parentId": "root", "path": "auth/ravelry", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.ravelry-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login-failed": { "id": "routes/login-failed", "parentId": "root", "path": "login-failed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-failed-TM3j_Pv9.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js"], "css": [] }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard-BvlxvUEs.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/Typography-wcXED6J0.js", "/assets/useIsFocusVisible-CPlKmROo.js", "/assets/index-DOTPFuaT.js", "/assets/Link-BYYak0VS.js", "/assets/useTheme-5sFMoId9.js", "/assets/Paper-d-ALm8uW.js", "/assets/emotion-css.development.esm-CNBYDLmo.js", "/assets/Link-S1ptO2_9.js", "/assets/CardMedia-3qf8g595.js"], "css": [] }, "routes/favorites": { "id": "routes/favorites", "parentId": "root", "path": "favorites", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/favorites-W_RLkSTt.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/Typography-wcXED6J0.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/useIsFocusVisible-CPlKmROo.js", "/assets/useTheme-5sFMoId9.js", "/assets/index-COTo03wr.js", "/assets/ButtonBase-KljXaplS.js", "/assets/Paper-d-ALm8uW.js", "/assets/index-DOTPFuaT.js", "/assets/emotion-css.development.esm-CNBYDLmo.js", "/assets/createSvgIcon-DhpipJwV.js", "/assets/Tooltip-BKiMUKxq.js", "/assets/Button-fn9KT81s.js", "/assets/GlobalStyles-DQzmn2_Z.js", "/assets/Paginator-BlDmNtSt.js", "/assets/Link-BYYak0VS.js", "/assets/CardMedia-3qf8g595.js", "/assets/components-BuGUhU6K.js"], "css": [] }, "routes/sign-out": { "id": "routes/sign-out", "parentId": "root", "path": "sign-out", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/sign-out-D_eFM_CV.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/index-DOTPFuaT.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/Typography-wcXED6J0.js", "/assets/useIsFocusVisible-CPlKmROo.js", "/assets/ButtonBase-KljXaplS.js", "/assets/UserProvider-DZWmR8mT.js", "/assets/components-BuGUhU6K.js", "/assets/Button-fn9KT81s.js"], "css": [] }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/profile-5wJldYQz.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/index-DOTPFuaT.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/components-BuGUhU6K.js", "/assets/Typography-wcXED6J0.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-ByWz2VYz.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/Typography-wcXED6J0.js", "/assets/useIsFocusVisible-CPlKmROo.js", "/assets/index-DOTPFuaT.js", "/assets/Link-BYYak0VS.js", "/assets/Link-S1ptO2_9.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-C0TPkh4L.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/Typography-wcXED6J0.js", "/assets/useIsFocusVisible-CPlKmROo.js", "/assets/index-DOTPFuaT.js", "/assets/Link-BYYak0VS.js", "/assets/Link-S1ptO2_9.js"], "css": [] }, "routes/queue": { "id": "routes/queue", "parentId": "root", "path": "queue", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/queue-sXyAK95V.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/Typography-wcXED6J0.js", "/assets/useTheme-5sFMoId9.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/index-DOTPFuaT.js", "/assets/emotion-css.development.esm-CNBYDLmo.js", "/assets/Paper-d-ALm8uW.js", "/assets/createSvgIcon-DhpipJwV.js", "/assets/components-BuGUhU6K.js"], "css": [] }, "routes/stash": { "id": "routes/stash", "parentId": "root", "path": "stash", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/stash-CAytomGB.js", "imports": ["/assets/jsx-runtime-BJa62n0-.js", "/assets/DefaultPropsProvider-EXnQoTJj.js", "/assets/Typography-wcXED6J0.js", "/assets/chainPropTypes-CPkqCYVL.js", "/assets/useIsFocusVisible-CPlKmROo.js", "/assets/useTheme-5sFMoId9.js", "/assets/index-COTo03wr.js", "/assets/ButtonBase-KljXaplS.js", "/assets/Paper-d-ALm8uW.js", "/assets/index-DOTPFuaT.js", "/assets/emotion-css.development.esm-CNBYDLmo.js", "/assets/createSvgIcon-DhpipJwV.js", "/assets/Tooltip-BKiMUKxq.js", "/assets/Button-fn9KT81s.js", "/assets/GlobalStyles-DQzmn2_Z.js", "/assets/Paginator-BlDmNtSt.js", "/assets/components-BuGUhU6K.js"], "css": [] } }, "url": "/assets/manifest-1a5a05ca.js", "version": "1a5a05ca" };
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
