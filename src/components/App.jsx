import React, { useState } from 'react'

export default function App(){
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount( count + 1 );
  }

  const dec = () => {
    setCount( count - 1 );
  }

  return(
    <div className="container">
      <h1>{ count }</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}