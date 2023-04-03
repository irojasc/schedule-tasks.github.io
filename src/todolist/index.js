import React, {Component} from 'react';
import './todolist.css'


export const Todolist = (props)=>{
    return (
            <section>
                <ul className='task_list'>
                    {props.children}
                </ul>
            </section>
    );
}


