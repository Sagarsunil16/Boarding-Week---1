import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users,setUsers] = useState([])
    const fetchData = async()=>{
        try {
            const response =  await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
       <h3>User List</h3>
       {users.length === 0 ? (
        <p>loading...</p>
       ):(
        <ul>
            {users.map((user)=>
                (
                    <li key={user.id}>{user.name} hello</li>
                )
            )}
        </ul>
       )}
    </div>
  )
}

export default UserList
