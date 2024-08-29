import axios from "axios"

// Since the default header stuff is lots of typing, and can be easily mistyped,
// Including it in a single function is best:
// - it's easier to unit-test
// - mistyping won't be a problem
// - if we need to add another common header, we have a place for it!
export function getAxiosInstance({ accessToken }) {
  const axiosInstance = axios.create()
  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`
  return axiosInstance
}
