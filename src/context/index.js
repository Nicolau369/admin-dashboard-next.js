'use cliente';

import { createContext, useContext } from "react";

export const GlobalContext = createContext(null)

export default function GlobalContext({ children }) {
    return <GlobalContext.Provider value={{}} >{children}</GlobalContext>
}
