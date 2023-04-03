import React, {Component} from 'react';
import './todobutton.css';


export const Todobutton = ({
    isfrmOpen,
    setfrmOpen
    })=>{
    return (
        <div className={`parent_ ${isfrmOpen && "change_background"}`}>
        <a href='#' className={`button_ ${isfrmOpen && "parent_fixed"}`} onClick={()=>(setfrmOpen(!isfrmOpen))}>{(isfrmOpen?"x":"+")}</a>
        </div>
    );
}