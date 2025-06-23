import { useRef } from "react"
import { useState } from "react"


const ControlledAndUncontrolled = () => {
    const [name,setName] = useState("")
    const ageRef =useRef()
    const  handleSubmit = ()=>{
        alert("You typed: " + ageRef.current.value);
    }
  return (
    <>
     <div>
        <h3>Controlled Component</h3>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)} />
        Name: {name}
    </div>
    <div>
        <label htmlFor="age">Age</label>
        <input type="number" ref={ageRef} />
        <button onClick={handleSubmit}>Show input</button>
    </div>
    </>
   
  )
}

export default ControlledAndUncontrolled
