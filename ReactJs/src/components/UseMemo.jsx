import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {

    const [a,setA] = useState(2)
    const [b,setB] = useState(4)
    const result =  useMemo(()=>{
            console.log("Calculating");
            return a * b
        },[a,b])
  return (
    <div>
    <h2>Multiplication Result: {result}</h2>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
  )
}

export default UseMemoExample
