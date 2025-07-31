import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const incrementCount = ()=>{
        return setCount((prev)=>prev+1)
    }
    const decrementCount = ()=>{
        if(count === 0) return 
        else{
            return setCount((prev)=>prev-1)
        }
    }

  return (
    <div>
      <h2>Counter value:{count}</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}

export default Counter
