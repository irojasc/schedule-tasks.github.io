import React from "react";
import ReactDOM from 'react-dom';
import './modal.css';


function Modal(props){
    return ReactDOM.createPortal(
            <div className="modal_">
                {props.children}
            </div>
            ,
            document.querySelector("#ivanrojas")
        );
}

export { Modal };