import React, {Component, useState, useContext} from 'react';
import { Todocounter } from '../todocounter';
import { Todosearch } from '../todosearch';
import { Todolist } from '../todolist';
import { Todoitem } from '../todoitem';
import { Todobutton } from '../todobutton';
import { TodoContext, TodoProvider } from '../TodoContext';
import { Modal } from '../Modal';
import { Todoform } from '../todoform';
import './App.css';


export const AppUI = function(){
    const {
        loading,
        error,
        searchedTodos,
        completeTodos,
        taskDelete,
        isfrmOpen,
        setfrmOpen,
    } = useContext(TodoContext);
    return(    
        <React.Fragment>
            <Todocounter/>
            <Todosearch/>
            <Todolist>
                {error && <p>Desesperate, hubo un error...</p>}
                {loading && <div className='lds-face'><div></div><div></div><div></div></div>}
                {(!loading && !searchedTodos.length) && <p>!Crea tu primera tarea¡ ✍️</p>}

                {searchedTodos.map(item=>(<Todoitem 
                key={item.text} 
                text={item.text} 
                done={item.completed} 
                onComplete={()=>(completeTodos(item.text))} 
                taskDelete={()=>(taskDelete(item.text))}
                />
                ))}
                
                <Todobutton
                isfrmOpen={isfrmOpen}
                setfrmOpen={setfrmOpen}
                />
            </Todolist>
            
            {!!isfrmOpen && (<Modal>
            <Todoform
            isfrmOpen={isfrmOpen}
            setfrmOpen={setfrmOpen} 
            />
            </Modal>)}


            
        </React.Fragment>
        );
}