import React from 'react'

const Button = React.memo(({onClick,children}) => {
    console.log("🔁 Button re-rendered");
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
})

export default Button
