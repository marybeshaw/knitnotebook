import * as React from "react"
import Link from "../components/Link"

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import { Menu as MenuIcon, Notebook } from "mdi-material-ui"

import { useUser } from "../UserProvider"

const loggedInPages = [
  { name: "Projects", path: "/projects" },
  { name: "Queue", path: "/queue" },
  { name: "Stash", path: "/stash" },
  { name: "Favorites", path: "/favorites" },
  { name: "About", path: "/about" },
]
const loggedOutPages = [
  { name: "Sign in with Ravelry", path: "/auth/ravelry" },
  { name: "About", path: "/about" },
]
const settings = [
  { name: "Profile", path: "/profile" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Log Out", path: "/logout" },
]

function ResponsiveAppBar() {
  const { user: maybeUser } = useUser() // maybeUser is undefined if not signed in

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const pages = maybeUser ? loggedInPages : loggedOutPages

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Notebook sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="navTitle"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              color: "inherit",
            }}
          >
            Knit Notebook
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    variant="menuLink"
                    to={page.path}
                    sx={{
                      display: {
                        textDecoration: "none",
                      },
                    }}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Notebook sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="navTitle"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: "flex", md: "none" },
              color: "inherit",
            }}
          >
            Knit Notebook
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box key={page.name} mr={1} ml={1}>
                <Link
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  color="inherit"
                  variant="menuLink"
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  {page.name}
                </Link>
              </Box>
            ))}
          </Box>

          {maybeUser && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={maybeUser?.username}
                    src={maybeUser?.small_photo_url}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Link
                      to={setting.path}
                      variant="menuLink"
                      sx={{
                        textDecoration: "none",
                      }}
                    >
                      {setting.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
