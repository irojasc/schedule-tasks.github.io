// import logo from './logo.svg';
// import './App.css'; //Esta parte no es necesario por que aqui se maneja solo componentes

import React from 'react';
import { useState, Component } from 'react';
import { AppUI } from './AppUI';
import { TodoContext, TodoProvider } from '../TodoContext';

// const defaultTodos = [{
//   text: "Cortar el cesped con las tijeras nuevas que compro mama",
//   completed: false,
// },
// {
//   text: "dormir",
//   completed: false,
// },
// {
//   text: "cantar",
//   completed: false,
// },
// {
//   text: "Bailar bachata de manuel turizo",
//   completed: false,
// }];

function App() { 
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    );
}

export default App;
