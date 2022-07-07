import { useEffect } from "react";
import "./App.css";
import saveLanguagesService from "./services/saveLanguagesService";
import "bootstrap/dist/css/bootstrap.min.css";
import Translator from "./components/Translator";
import Nav from "./components/Nav";

function App() {

  useEffect(() => {
    saveLanguagesService();
  }, []);
  return (
    <div>
      <Nav />
      <Translator />
    </div>
  );
}

export default App;
