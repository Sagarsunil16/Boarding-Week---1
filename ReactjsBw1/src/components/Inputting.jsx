import { useRef, useState } from 'react'
const Inputting = () => {
    const inputRef = useRef(null)
    const [text,setText] = useState("")
    const handleInput = ()=>{
      setText(inputRef.current.value)
    }
  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInput}/>
      <h2>Live inputs:{text}</h2>
    </div>
  )
}

export default Inputting
