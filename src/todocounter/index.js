import React, {Component, useState, useContext} from 'react';
import './todocounter.css'; 
import { TodoContext, TodoProvider } from '../TodoContext';
// cada vez que importe un file.css, este se agregara a la etiqueta <style> del <head>

const Todocounter = ()=>{
    const {
        todosCompleted,
        todosAll,
    } = useContext(TodoContext);

    return (
        <h2 className="Todocounter">{`Completaste ${todosCompleted} de ${todosAll} tareas`}</h2> //esto es codigo jsx, no es HTML(es parecido) el que se encarga de transformalo en html en babel
    );
}

export { Todocounter };