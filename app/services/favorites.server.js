import axios from "axios"

/**
 * List the entire user's favorites
 * (well, the first 50; pagination is not yet supported)
 */
export async function getFavorites({ username, accessToken }) {
  const axiosInstance = axios.create()

  // TODO the queue may change but the projects won't, so keep those cached somehow

  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`
  // TODO support favorites pagination
  // https://www.ravelry.com/api#favorites_list
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/favorites/list.json`,
  )
  console.log("favorites response", response.data.favorites.length)
  return response.data.favorites
}
