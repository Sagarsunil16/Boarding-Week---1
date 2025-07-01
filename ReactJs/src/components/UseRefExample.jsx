import { useRef } from "react"

const UseRefExample = () => {
    const inputRef = useRef()
    const handleButton = ()=>{
       inputRef.current.focus()
    }
  return (
    <div>
      <h1>UseRef example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleButton}>
        click me
      </button>
    </div>
  )
}

export default UseRefExample
