/* eslint-disable react/prop-types */
import {createContext} from 'react'
export const themeContext = createContext();

function ThemeProvider({children}) {

    const value ={

    }
  return (
     <themeContext.Provider value={value}>
        {children}
     </themeContext.Provider>
  )
}

export default ThemeProvider