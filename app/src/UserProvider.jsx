import { createContext, useContext, useState } from "react"
const UserContext = createContext({})

export default function UserProvider({ user, children }) {
  // If the user logs out, this boolean will force the site to reflect it
  const [loggedOut, setLoggedOut] = useState()

  return (
    <UserContext.Provider
      value={{ user: loggedOut ? undefined : user, setLoggedOut }}
    >
      {children}
    </UserContext.Provider>
  )
}

/**
 * @returns {user: object, setLoggedOut: function} user data, if a user is logged in; null if not
 */
export function useUser() {
  const { user, setLoggedOut } = useContext(UserContext)
  return { user, setLoggedOut } || undefined
}
