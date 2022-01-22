import React, { useReducer } from "react"
import { userInitialState } from "./user/userInitialState"
const Store = React.createContext()
Store.displayName = "Store"

/* Merkezi state in diğer componentlerde kullanılmasını kolaylaştırmak için tanımladık */
export const useStore = () => React.useContext(Store)

export const StoreProvider = () => {
  const [user, isUserLogin] = useReducer(userInitialState)

  return <Store.Provider value={{ user, isUserLogin }}></Store.Provider>
}
