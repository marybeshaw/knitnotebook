import { json, useLoaderData } from "@remix-run/react"

import { Typography } from "@mui/material"

import { authenticator } from "../services/auth.server"
import { getFavorites } from "../services/favorites.server"

import DisplayPrefsProvider from "../src/components/DisplayPrefsProvider"
import FavoritesResults from "../src/components/FavoritesResults"
import ResultsPreferences from "../src/components/ResultsPreferences"

export const loader = async ({ request }) => {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })
  const favoritesResults = await getFavorites({
    accessToken: tokens.access_token,
    username: user.username,
    /* todo add more search terms */
  })
  return json({ user, tokens, favoritesResults })
}

export default function Favorites() {
  const { favoritesResults } = useLoaderData()

  return (
    <DisplayPrefsProvider>
      <Typography variant="h1" component="h1" sx={{ padding: "10px" }}>
        My Favorites
      </Typography>
      <ResultsPreferences />
      <FavoritesResults favoritesResults={favoritesResults} />
      <Typography>
        To add something to your Ravelry favorites, please visit Ravelry.
      </Typography>
    </DisplayPrefsProvider>
  )
}
