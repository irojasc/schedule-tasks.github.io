import React, {Component, useState} from 'react';
import './todoitem.css'

export const Todoitem = ({text, done, onComplete, taskDelete})=>{
    const [currentDelete, setDelete] = React.useState(false);
    const activateCompleted = ()=>{
        onComplete();
    };

    const deteleTask = ()=>{
        setDelete(true);
        setTimeout(() => {
            taskDelete() 
        }, 250); 
    };

    return (
        <li className={`task-li ${currentDelete && 'animation_delete'}`}>
            <div className={`wait_state`} onClick={activateCompleted}>
              <div className={`done_state ${done && 'done_state-activate'}`}>
                </div>  
            </div>
            <p className={`text ${done && 'text-decoration_'}`}>{text}</p>
            <span className={`delete_icon`} onClick={deteleTask}>{`>`}</span>    
        </li>
    );
}
