import axios from "axios"

/**
 * List the entire user's queue
 * (well,the first 50; pagination is not yet supported)
 */
export async function getStash({
  username,
  accessToken,
  pageSize,
  currentPage,
  sortOrder,
}) {
  const axiosInstance = axios.create()

  // TODO the queue may change but the projects won't, so keep those cached somehow

  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`
  // TODO support queue pagination
  // https://www.ravelry.com/api#stash_list
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/stash/list.json?page_size=${pageSize}&page=${currentPage}&sort=${sortOrder}`,
  )

  const stashOrig = response.data.stash
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
 * Add pattern data to the project object
 */
async function addFullStashInfo({
  axiosInstance,
  username,
  stash,
  accessToken,
}) {
  const stashId = stash.id

  // https://www.ravelry.com/api#Stash_full_result See: Stash (full)
  // https://www.ravelry.com/api#stash_show

  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/stash/${stashId}.json`,
  )
  console.log("stash data", response.data.stash)

  return response.data.stash
}
