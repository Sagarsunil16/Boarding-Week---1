import React, { useCallback, useState } from 'react'
import Button from './Button'

const CounterWithUC = () => {
    const [count,setCounter] = useState(0)
    const handleIncrement = useCallback(()=>{
        setCounter((prev)=>prev+1)
    },[])
  return (
    <div>
      <h1>Count:{count}</h1>
      <Button onClick={handleIncrement}>Increment me</Button>
    </div>
  )
}

export default CounterWithUC
