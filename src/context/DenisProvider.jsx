import { useCallback, useEffect, useState } from "react";
import DenisContext from "./DenisContext";

const DenisProvider = ({children}) => {
  const [filteredEventos, setFilteredEventos] = useState([]);
  const [productos,setProductos]=useState([])
  console.log(productos)

   const filteredProducts=useCallback((evento)=> {
    const products = productos.filter((producto) =>
      producto.name.toLowerCase().includes(evento.toLowerCase())
    );
    setFilteredEventos(products);
  },[filteredEventos])

  return (
   <DenisContext.Provider value={{filteredEventos,filteredProducts,setFilteredEventos,productos,setProductos}}>
    {children}
   </DenisContext.Provider>
  )
}

export default DenisProvider
