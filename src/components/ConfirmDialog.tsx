import React from "react";

interface Props_confirm {
    onConfirm():void, 
    onCanel():void,
    open:boolean

}
const ConfirmDialog = ({onConfirm, onCanel , open}:Props_confirm)=>{
    return(
        <div className={`dialog-content ${open? "show":''}`}>
            <h3>Confirmation</h3>
            <p>Vous devez l'incrementer ?</p>
            <div className="button">
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCanel}>NO</button>
            </div>
        </div>
    )
}
export default ConfirmDialog;