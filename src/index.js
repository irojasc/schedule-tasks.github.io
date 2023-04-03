import React from 'react'; 
import ReactDOM from 'react-dom/client'; //esto sirve para hacer render del root
import App from './App/index'; // en estar parte si no se especifica el archivo, llama a index.js
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')); //en esta parte se envia la raiz del proyecto
root.render( //render es para renderizar los nodos que se encuentran en <App/>
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// CREAR COMPONENTES
// class componentName extends React.Component{} <<<<<<<ANTIGUA
// (1)>function componentName(){return(<>[HTML_CODE]</>);}   <<<<< NUEVA

// CREAR ELEMENTOS
// const e = React.createElement
// e('h1', {id: 'title'}', 'holis react');  <<<< ANTIGUA(VAINILLA)
// En (1) se agrega el codigo HTML: return(
// <h1 id="title">
// holis react
// </h1>
//);   <<< NUEVA(FACILIDADES DE CREATE-REACT-APP)

//Pasar argumentos(propiedades) a un componente, esto con el fin de reutilizar componentes
// <App saludo="Habla barrio"/> <<Componente
// function App(props){return(<h1>{props.saludo}</h1>);}

//SOS, propiedad children
// <App>  
//  buenasssssss
// </App>    <<Componente
// function App(props){return(<h1>{props.children}</h1>);} <<Imprime en la etiqueta h1 el buenassss

