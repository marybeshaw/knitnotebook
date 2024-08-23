import { createTheme, colors } from "@mui/material"

const skippySharp = ["Skippy Sharp", "sans-serif"].join(",")
const capitolina = ["capitolina", "serif"].join(",")

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
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
      fontFamily: capitolina,
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
    body1: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 16,
    },
    body2: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 14,
    },
    button: {
      fontFamily: skippySharp,
      fontWeight: 400,
      fontSize: 16,
      textTransform: "none",
    },
  },
})

export default theme
