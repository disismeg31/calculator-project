/* eslint-disable react/prop-types */
import {createContext,useState} from 'react'
export const themeContext = createContext();

function ThemeProvider({children}) {

   const [theme,setTheme] = useState('theme1');

    const value ={
      theme,
      setTheme
    }
  return (
     <themeContext.Provider value={value}>
        {children}
     </themeContext.Provider>
  )
}

export default ThemeProvider