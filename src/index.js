import React from "react";// biblioteca react. Apartir da versao 16, esta linha n e obri...// biblioteca dom que renderiza os componentes em tela
import ReactDOM from "react-dom";
// esses 2 imports React e ReactDOM são muito importantes para a aplicação
//--------------------------------------------------------------

import "./style/global.css"// trazendo nossa estilização principal

import {Home} from "./pages/Home/index.jsx"// importmos pra cá nossa tag App

// o index é o orquivo principal que renderiza tudo

// jsx me mpermite usar js dentro de html 
ReactDOM.render(
  //React.StrictMode esse cara vai deixar que a gente veja o consolelog com o nosso DOM virtual no nosso anbiente de desenvilvimento
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById("root")// esse cara está pegando "root" lá no index.html
);

// tudo no react é uma TAG HTML

