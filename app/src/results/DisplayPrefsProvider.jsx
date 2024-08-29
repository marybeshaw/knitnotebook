import { createContext, useContext, useEffect, useState } from "react"

// I prefer not to export the context; instead, I export a custom hook (or more than one) for interacting with the context.
// This allows me to throw an error in the hook to help future collaborators (it might be me!)
const DisplayPrefsContext = createContext({})

/**
 * Context provider for display preferences.
 *
 * @param {object} initialPrefs - prefs to preload if known at initial render time
 * @param {object} children - React children
 * @returns {jsx}
 */
export default function DisplayPrefsProvider({ initialPrefs, children }) {
  const [displayPrefs, setDisplayPrefs] = useState(
    initialPrefs || {
      resultsStyle: "list", // options: list or thumbnails
    },
  )

  /**
   * This function is called in DisplayPrefsOptions, when a user changes their display preferences.
   *
   * @param {string} newStyle - list or thumbnails
   * @returns {undefined}
   */
  function setResultsStyle(newStyle) {
    setDisplayPrefs((prefs) => {
      return { ...prefs, resultsStyle: newStyle }
    })

    // save user's choice in local storage for next time
    window.localStorage.setItem("display-prefs", newStyle)
  }

  useEffect(() => {
    // look for a local storage display prefs setting in the browser
    // remix needs this in a useEffect
    if (window.localStorage.getItem("display-prefs") === "thumbnails") {
      setResultsStyle("thumbnails")
    }
  }, [])

  return (
    <DisplayPrefsContext.Provider
      value={{ displayPrefs, setDisplayPrefs, setResultsStyle }}
    >
      {children}
    </DisplayPrefsContext.Provider>
  )
}

/**
 * Custom hook for children to access display prefs context data & functions
 *
 * @returns {{displayPrefs: {resultsStyle: string}, setDisplayPrefs: function, setResultsStyle: function}}
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
