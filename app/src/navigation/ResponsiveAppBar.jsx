import * as React from "react"
import Link from "../components/Link"

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import { Menu as MenuIcon, Notebook } from "mdi-material-ui"

import { useUser } from "../UserProvider"

const loggedInRoutes = [
  { name: "Projects", path: "/projects" },
  { name: "Queue", path: "/queue" },
  { name: "Stash", path: "/stash" },
  { name: "Favorites", path: "/favorites" },
  { name: "About", path: "/about" },
]
const loggedOutRoutes = [
  { name: "Sign in with Ravelry", path: "/auth/ravelry" },
  { name: "About", path: "/about" },
]
const settings = [
  { name: "Profile", path: "/profile" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Sign Out", path: "/sign-out" },
]

function ResponsiveAppBar() {
  const { user: userLoggedIn } = useUser() // userLoggedIn is undefined if not signed in

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const routes = userLoggedIn ? loggedInRoutes : loggedOutRoutes

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
              aria-controls="menu-app-bar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-app-bar"
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
              {routes.map((page) => (
                // Putting the link outside the menu item lets the use click
                // anywhere in the menu item (not just the text) to visit the link
                <Link
                  key={page.name}
                  variant="menuLink"
                  to={page.path}
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>{page.name}</MenuItem>
                </Link>
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
            {routes.map((page) => (
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

          {userLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={userLoggedIn?.username}
                    src={userLoggedIn?.small_photo_url}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-app-bar"
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
                  // Putting the link outside the menu item means you can click
                  // anywhere in the menu item (not just the text) to visit the link
                  <Link
                    key={setting.name}
                    to={setting.path}
                    variant="menuLink"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      {setting.name}
                    </MenuItem>
                  </Link>
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
