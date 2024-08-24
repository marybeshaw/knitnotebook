import axios from "axios"

export async function getQueue({ username, accessToken }) {
  const axiosInstance = axios.create()

  // TODO the queue may change but the projects won't, so keep those cached somehow

  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`
  // TODO support queue pagination
  // https://www.ravelry.com/api#QueuedProject_result
  const response = await axiosInstance.get(
    `https://api.ravelry.com/people/${username}/queue/list.json`,
  )
  const queuedProjectsOrig = response.data.queued_projects
  const queuedProjectResults = await Promise.allSettled(
    queuedProjectsOrig.map((project) =>
      addPatternData({ axiosInstance, project, accessToken }),
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

  return queuedProjectResults
}

export async function postReorderQueue({
  projectId,
  newPosition,
  username,
  accessToken,
}) {
  const axiosInstance = axios.create()
  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`

  // docs at https://www.ravelry.com/api#queue_reposition
  const response = await axiosInstance.post(
    `https://api.ravelry.com/people/${username}/queue/${projectId}/reposition.json`,
    {
      insert_at: newPosition + 1, // position is 1-based (not zero-based)
    },
  )

  return response
}

/**
 * Add pattern data to the project object
 */
async function addPatternData({ axiosInstance, project, accessToken }) {
  const patternId = project.pattern_id

  // https://www.ravelry.com/api#Pattern_result See: Pattern (full)
  const response = await axiosInstance.get(
    `https://api.ravelry.com/patterns/${patternId}.json`,
    {
      headers: getHeaders(accessToken),
    },
  )

  project.pattern = response.data.pattern
  return project
}

function getHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
  }
}
