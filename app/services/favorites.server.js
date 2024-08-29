import { getAxiosInstance } from "./axios.server"

/**
 * List the entire user's favorites
 * (well, the first 50; pagination is not yet supported)
 */
export async function getFavorites({ username, accessToken }) {
  const axiosInstance = getAxiosInstance({ accessToken })

  // TODO support favorites pagination
  // https://www.ravelry.com/api#favorites_list
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/favorites/list.json`,
  )
  console.log("favorites response", response.data.favorites.length)
  return { favorites: response.data.favorites, data: response.data }
}
