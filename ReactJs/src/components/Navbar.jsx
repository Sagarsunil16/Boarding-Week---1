import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
    const {state,dispatch} = useContext(AuthContext)
  return (
    <nav>
      <h3>{state.isAuthenticated? state.user.name:"Guest"}</h3>
      {state.isAuthenticated ? (
         <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
      ): (
         <button
          onClick={() =>
            dispatch({ type: "LOGIN", payload: { name: "Sagar Sunil" } })
          }
        >
          Login
        </button>
      )}
    </nav>
  )
}

export default Navbar
