import { createTheme } from "@mui/material"

const skippySharp = ["skippy-sharp", "sans-serif"].join(",")
const capitolina = ["capitolina", "serif"].join(",")

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
      fontFamily: capitolina,
    },
    navTitle: {
      fontFamily: capitolina,
      fontWeight: 700,
      fontSize: 22,
      textTransform: "none",
      textDecoration: "none",
      flexGrow: 1,
    },
    h1: {
      fontFamily: capitolina,
      fontWeight: 700,
      fontSize: 32,
    },
    h2: {
      fontFamily: capitolina,
      fontWeight: 700,
      fontSize: 29,
    },
    h3: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 25,
    },
    h4: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 22,
    },
    h5: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20,
    },
    body1: {
      fontFamily: capitolina,
      fontWeight: 400,
      fontSize: 18,
    },
    body2: {
      fontFamily: capitolina,
      fontWeight: 400,
      fontSize: 16,
    },
    button: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 20,
      textTransform: "none",
    },
    primaryLink: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 22,
      textTransform: "none",
      textDecoration: "none",
    },
    menuLink: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 22,
      textTransform: "none",
      textDecoration: "none",
    },
    subtitle1: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20,
    },
    subtitle2: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20,
    },
    caption: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20,
    },
    overline: {
      fontFamily: capitolina,
      fontWeight: 600,
      fontSize: 20,
      textTransform: "uppercase",
    },
  },
})

// Create a theme instance.
theme = createTheme(theme, {
  palette: {
    default: theme.palette.augmentColor({
      color: {
        main: "#077cdd",
      },
    }),
    primary: theme.palette.augmentColor({
      color: {
        main: "#077cdd",
      },
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: "#a112b3",
      },
    }),
    error: theme.palette.augmentColor({
      color: {
        main: "#d10f45",
      },
    }),
    warning: theme.palette.augmentColor({
      color: {
        main: "#995c00",
      },
    }),
    info: theme.palette.augmentColor({
      color: {
        main: "#039eb1",
      },
    }),
    success: theme.palette.augmentColor({
      color: {
        main: "#5120b4",
      },
    }),
  },
})

export default theme
