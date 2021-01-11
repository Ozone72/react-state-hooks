import React, { useState } from "react";



function App(){
  const state = useState(0);
 
    
  function inc(){
    // count++;
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={inc}>+</button>
    </div>
  )
};

export default App;