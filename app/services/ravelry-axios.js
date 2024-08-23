import axios from "axios"
import Cookies from "js-cookie"
// we might not keep this around..

// Adds existing session id to requests
function authHeaderInterceptor(config) {
  const sessionId = Cookies.get("ravsessionid")

  if (sessionId) {
    config.headers.setAuthorization(`Bearer ${sessionId}`)
  } else {
    config.headers.delete("Authorization")
  }
}

// send along auth and other useful info on axios requests
axios.interceptors.request.use(authHeaderInterceptor, (err) =>
  Promise.reject(err),
)

// shenanigans to add interceptors to the axios.create function, which doesn't use normal interceptors
const origCreate = axios.create

function createInstanceWithHeaderInterceptors(config) {
  const instance = origCreate(config)
  instance.interceptors.request(authHeaderInterceptor, (err) =>
    Promise.reject(err),
  )
}

axios.create = createInstanceWithHeaderInterceptors

export default axios
