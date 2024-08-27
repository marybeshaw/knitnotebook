import { createContext, useCallback, useContext, useState } from "react"
const DisplayPrefsContext = createContext({})

export default function DisplayPrefsProvider({ initialPrefs, children }) {
  const [displayPrefs, setDisplayPrefs] = useState(
    initialPrefs || {
      resultsStyle: "list", // could be list or thumbnails
    },
  )

  const setResultsStyle = useCallback(
    (newStyle) => {
      console.log("changing results style to", newStyle)
      setDisplayPrefs({ ...displayPrefs, resultsStyle: newStyle })
    },
    [displayPrefs],
  )

  return (
    <DisplayPrefsContext.Provider
      value={{ displayPrefs, setDisplayPrefs, setResultsStyle }}
    >
      {children}
    </DisplayPrefsContext.Provider>
  )
}

/**
 * @returns {user: object, setLoggedOut: function} user data, if a user is logged in; null if not
 */
export function useDisplayPrefs() {
  const { displayPrefs, setDisplayPrefs, setResultsStyle } =
    useContext(DisplayPrefsContext)
  if (!displayPrefs) {
    throw new Error(
      "useDisplayPrefs must be used inside a DisplayPrefsProvider",
    )
  }
  return { displayPrefs, setDisplayPrefs, setResultsStyle } || undefined
}
