import { Box, Container } from "@mui/material"
import { Fragment } from "react"

import Copyright from "./Copyright"
import ResponsiveAppBar from "./navigation/ResponsiveAppBar"

export default function Layout({ children }) {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <Container
        maxWidth="xl"
        sx={{
          margin: 0,
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ my: 4 }}>{children}</Box>

        <Footer />
      </Container>
    </Fragment>
  )
}

export function Footer() {
  return (
    <Box sx={{ display: "block", minHeight: "50px" }}>
      <Copyright />
    </Box>
  )
}
