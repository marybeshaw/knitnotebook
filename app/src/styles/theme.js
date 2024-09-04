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
      fontSize: 26,
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
        main: "#4884a4",
      },
    }),
    primary: theme.palette.augmentColor({
      color: {
        main: "#4884a4",
      },
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: "#854092",
      },
    }),
    error: theme.palette.augmentColor({
      color: {
        main: "#c53468",
      },
    }),
    warning: theme.palette.augmentColor({
      color: {
        main: "#7d5735",
      },
    }),
    info: theme.palette.augmentColor({
      color: {
        main: "#319ba0",
      },
    }),
    success: theme.palette.augmentColor({
      color: {
        main: "#47549b",
      },
    }),
  },
})

theme = createTheme(theme, {
  components: {
    // Name of the component
    MuiChip: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: "18px",
          margin: "2px",
        },
        label: {
          margin: "3px 10px",
        },
        outlined: {
          // fontSize: "18px",
        },
      },
    },
  },
})

export default theme
