import { useState } from "react"


const Counter = () => {
    const [count,setCount] = useState(0)
    const incrementCount = ()=>{
        return setCount((prev)=>prev+1)
    }

    const decrementCount = ()=>{
        if(count==0) return 
        return setCount((prev)=>prev-1)
    }
  return (
    <div>
      <button onClick={incrementCount}> + </button>
      <h1>{count}</h1>
      <button onClick={decrementCount}> - </button>
    </div>
  )
}

export default Counter
