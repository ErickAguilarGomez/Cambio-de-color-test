import { useState } from "react";
import DenisContext from "./DenisContext";




const DenisProvider = ({children}) => {
    const [value,setValue]=useState([])
  return (
   <DenisContext.Provider value={{value,setValue}}>
    {children}
   </DenisContext.Provider>
  )
}

export default DenisProvider
