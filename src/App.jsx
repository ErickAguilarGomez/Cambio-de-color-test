import { createContext, useState } from "react";
import UserData from "./components/UserData";

const userContext = createContext();

function App() {
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    email: ""
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setInput(prevInput => ({ ...prevInput, [name]: value }));
  }

  return (
    <userContext.Provider value={{ input, handleInput }}>
      <UserData />
    </userContext.Provider>
  );
}

export default App;
export { userContext };
