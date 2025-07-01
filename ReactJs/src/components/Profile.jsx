import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Profile = () => {
    const {state} = useContext(AuthContext)
    if (!state.isAuthenticated) return <p>Please login to view your profile.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {state.user.name}</p>
    </div>
  )
}

export default Profile
