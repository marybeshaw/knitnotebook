import { createContext, useContext } from "react"

// I prefer not to export the context; instead, I export a custom hook (or more than one) for interacting with the context.
// This allows me to throw an error in the hook to help future collaborators (it might be me!)
const FavItemContext = createContext({})

/**
 * Context provider for a favorite item
 *
 * @param {object} fav - favorite object data for this result
 * @param {object} children - React children
 * @returns {jsx}
 */
export default function FavItemProvider({ fav, children }) {
  // Put any data processing of the item here, rather than in a later hook.
  // Every new time a hook is invoked, it's made brand new, so the place to
  // save processing power is in the provider itself.

  return (
    <FavItemContext.Provider value={fav}>{children}</FavItemContext.Provider>
  )
}

/**
 * Custom hook for children to access fav item data
 * @returns {{object}} fav item
 */
export function useFavItem() {
  const fav = useContext(FavItemContext)
  if (!fav) {
    throw new Error("useFavItem must be used inside a DisplayPrefsProvider")
  }
  return fav
}
