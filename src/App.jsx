import Main from "./components/Main";
import DenisProvider from "./context/DenisProvider";
import Home from "./views/Home";

function App() {
  return(
    <DenisProvider>
    <Home></Home>
    </DenisProvider>
  )
}

export default App;
