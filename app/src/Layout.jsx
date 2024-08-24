import * as React from "react"
import { Box, Container } from "@mui/material"

import ResponsiveAppBar from "./navigation/ResponsiveAppBar"
import Copyright from "./Copyright"

export default function Layout({ children }) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        margin: 0,
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
      }}
    >
      <ResponsiveAppBar />
      <Box sx={{ my: 4 }}>{children}</Box>

      <Footer />
    </Container>
  )
}

export function Footer() {
  return (
    <Box sx={{ display: "block", minHeight: "50px" }}>
      <Copyright />
    </Box>
  )
}
