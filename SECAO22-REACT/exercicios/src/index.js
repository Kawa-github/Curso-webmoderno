import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Primeiro from './componentes/Primeiro';
import Bomdia from './componentes/BomDia';
import Multi , {BoaNoite} from './componentes/Multiplos';
import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Saudacao tipo="Bom dia" nome="Kawazin"></Saudacao> */}
    {/* <Multi.BoaTarde name="Ana" />
    <BoaNoite name="Bia" /> */}
    <Pai nome='Paulo' sobrenome='Silva'>
        {/* Como passo os componentes filhos aqui? */}
      <Filho nome="Kawã" sobrenome="Silva"></Filho>
      <Filho nome="João" sobrenome="Silva"></Filho>
      <Filho nome="Rafaela" sobrenome="Silva"></Filho>

    </Pai>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
