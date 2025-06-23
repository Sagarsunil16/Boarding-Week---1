import React, { useState } from 'react'

const SecretMessage = () => {
    const [show,setShow] = useState(false)
    const handleShowMessage = ()=>{
        setShow((prev)=>!prev)
    }
  return (
    <div>
      <button onClick={handleShowMessage}>{show?"Don't show" : "Show Message"}</button>
        {show && <p>This is a secret Message</p>}
    </div>
  )
}

export default SecretMessage
