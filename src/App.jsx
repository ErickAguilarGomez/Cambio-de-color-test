import { useState } from "react";

function App() {
  const [value,setValue]=useState(false)

  function toggleValue(){
    setValue(!value)
    console.log(value)
  }

  return (<>
  {value===false? <h1 className="bg-red-800 w-screen h-96" onClick={toggleValue}>Color sin cambiar</h1>:<h1 onClick={toggleValue}>Color cambiado</h1>}
  
  
  </>)
}

export default App;
