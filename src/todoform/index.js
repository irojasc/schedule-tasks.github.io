import React, {useState} from 'react';
import './todoform.css';
import '../todobutton/todobutton.css';
import { TodoContext, TodoProvider } from '../TodoContext';


export const Todoform = ({
    isfrmOpen,
    setfrmOpen
    })=>{
    const [newTodoValue, setNewTodoValue] = useState("");
    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onWrite = (event)=>{
        setNewTodoValue(event.target.value);
    }

    const onAdd = ()=>{
        if (newTodoValue === ""){
            setfrmOpen(false);
        }else{
            addTodo(newTodoValue);
            setfrmOpen(false);
        }
    }
    
    return(
        <>
        <div className='formContainer'>
        <label className='lbl'>Ingrese una tarea</label>
        <textarea 
            className='txtArea' 
            maxLength={"35"} 
            cols={"20"} 
            value={newTodoValue}
            onChange={onWrite} />
        <a href='#' className='button_ button_form' onClick={onAdd}>+</a>
        </div>
        </>
    );
}