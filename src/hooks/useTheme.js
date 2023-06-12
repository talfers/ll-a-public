import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("dark");

  
  const toggleTheme = async (email, password) => {
      setTheme(theme==='light'?'dark':'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(ThemeContext)
}