import { useState } from "react"


const NameInput = () => {
    const [name,setName] = useState("")
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
        <p>Your name:{name}</p>
      </form>
    </div>
  )
}

export default NameInput
