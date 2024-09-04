import { getAxiosInstance } from "./axios.server"

/**
 * List the entire user's favorites
 * (well, the first 50; pagination is not yet supported)
 */
export async function getFavorites({
  username,
  accessToken,

  currentPage,
  favoriteTypes,
  pageSize,
  searchText,
}) {
  const axiosInstance = getAxiosInstance({ accessToken })

  const params = {
    page_size: pageSize,
    page: currentPage,
  }
  if (searchText) {
    params.query = searchText
    params.deep_search = 1
  }
  if (favoriteTypes?.length) {
    // Space delimited list of types of favorites to retrieve.
    // Accepted options: project, pattern, yarn, stash, forumpost, designer, yarnbrand, yarnshop, bundle.
    // Defaults to all types.
    params.types = favoriteTypes.join(" ")
  }

  const fullFavoritesURL =
    getFavoritesURL(username) + new URLSearchParams(params)
  // TODO support favorites pagination
  // https://www.ravelry.com/api#favorites_list
  const response = await axiosInstance.get(fullFavoritesURL)
  console.log("favorites request", fullFavoritesURL, "response:", response.data)
  return { favorites: response.data.favorites, data: response.data }
}

function getFavoritesURL(username) {
  return `https://api.ravelry.com/people/${username}/favorites/list.json?`
}
