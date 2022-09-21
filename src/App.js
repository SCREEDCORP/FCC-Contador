import "./App.css";
import freeCodeLogo from "./img/logohuawei.png";
import Boton from "./componentes/Boton"
import Contador from "./componentes/Contador";
import './stylesheet/Boton.css'
import {useState} from "react";

function App() {

  const [numClics, setNumClics] =  useState(0);


  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

const reinciarContador = () => {
  setNumClics(0);
};

  return (
    <div className="App">
      <div className="freecode-logo-container">
        <img
          className="freecode-logo"
          src={freeCodeLogo}
          alt="logo de free code"
        />
      </div>

      <div className="main-container">
        <Contador
        numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reinciarContador} />
      </div>
    </div>
  );
}

export default App;
