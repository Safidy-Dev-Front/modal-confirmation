import React from "react";

interface Props_confirm {
    onConfirm():void, 
    onCanel():void,
    open:boolean,
    title?:String,
    description?:String

}
const ConfirmDialog = ({onConfirm, onCanel , open, title, description}:Props_confirm)=>{
    return(
        <div className={`dialog-content ${open? "show":''}`}>
            <h3>{title??'Confirmation'}</h3>
            <p>{description??"Vous devez l'incrementer ?"}</p>
            <div className="button">
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCanel}>NO</button>
            </div>
        </div>
    )
}
export default ConfirmDialog;