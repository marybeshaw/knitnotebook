import { getAxiosInstance } from "./axios.server"

/**
 * List the entire user's stash with pagination
 * Will either search or list, depending on params
 *
 * @param {string} accessToken - The user's oath access token we add to our API request
 * @param {string} username - The user's signed-in username
 * @param {number} currentPage - Current... well, page
 * @param {number} pageSize  - number of results per page
 * @param {string} [searchText] - if present, search on this text instead of listing the entire stash
 * @param {string} sortOrder - recent, alpha, weight, colorfamily, or yards. Defaults to "alpha".
 * @returns { stashes: {array}, data: {object} } - stashes contains the full data about each stash item, data is the original results
 */
export async function getStash({
  accessToken,
  username,
  currentPage,
  pageSize,
  searchText,
  sortOrder,
}) {
  const axiosInstance = getAxiosInstance({ accessToken })

  const params = {
    page_size: pageSize,
    page: currentPage,
    sort: sortOrder,
  }
  if (searchText) {
    params.query = searchText
  }

  // console.log(
  //   "request url:",
  //   getStashURL(username, searchText) + new URLSearchParams(params),
  // )

  const response = await axiosInstance.get(
    getStashURL(username, searchText) + new URLSearchParams(params),
  )

  // Because the Ravelry API is fun this way
  const stashOrig = searchText ? response.data.stashes : response.data.stash

  // Handle "no results" gracefully
  if (!stashOrig) {
    return { stashes: [], data: response.data }
  }

  // Fetch all the information about each item we're displaying
  const stashFull = await Promise.allSettled(
    stashOrig.map((stash) =>
      addFullStashInfo({ axiosInstance, stash, username, accessToken }),
    ),
  ).then((promises) => {
    return promises
      .filter((promise) => {
        return promise.status === "fulfilled" ? promise.value : null
      })
      .map((promise) => {
        return promise.value
      })
  })

  return { stashes: stashFull, data: response.data }
}

/**
 * Call to get all the stash info about a stash item
 *
 * @returns {array} stash list
 */
async function addFullStashInfo({ axiosInstance, username, stash }) {
  const stashId = stash.id

  // https://www.ravelry.com/api#Stash_full_result See: Stash (full)
  // https://www.ravelry.com/api#stash_show

  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/stash/${stashId}.json`,
  )

  return response.data.stash
}

/**
 * Gets the URL to use to get the stash
 * "list" if no search terms https://www.ravelry.com/api#stash_list
 * "search" if search terms https://www.ravelry.com/api#stash_search
 *
 * @param {string} username - logged-in user's name
 * @param {string} searchText - text in the search field
 * @returns URL to access the logged-in-user's stash
 */
function getStashURL(username, searchText) {
  if (searchText) {
    return `https://api.ravelry.com/stash/search.json/?user=${username}&`
  }
  return `https://api.ravelry.com/people/${username}/stash/list.json?`
}
