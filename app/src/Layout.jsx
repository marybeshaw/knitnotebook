import * as React from "react"
import { Box, Container } from "@mui/material"
import ProTip from "./ProTip"
import Copyright from "./Copyright"

export default function Layout({ children }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {children}

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
