import React, {Component, useState, useContext} from 'react';
import './todosearch.css';
import { TodoContext, TodoProvider } from '../TodoContext';


export const Todosearch = ()=>{
    const [isClass, setClass] = useState(false);
    const {
        setSearch
    } = useContext(TodoContext);

    const activateAnimation = (event)=>{
        setSearch(event.target.value);
    };

    return (
        <>
        <div className='search_container'>
        <input className='ipt_search' placeholder='Busca una tarea' onChange={activateAnimation}></input>
        <button className={`search_button ${(isClass)?'animation':''}`} onClick={activateAnimation}>Buscar</button>
        </div>
        </>
    );
    //para pasar argumentos a un funcion de algun evento => onClick={()={printMessage("Hola Mundo")}};
}