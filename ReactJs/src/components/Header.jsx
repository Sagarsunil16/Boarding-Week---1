import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Header
