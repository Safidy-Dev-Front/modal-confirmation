import { useRef, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const confirmAction = {
    current: ()=> Promise.resolve(true),
}

export const confirm = ()=>{
    return confirmAction.current()
}

export const ConfirmGlobal = ()=>{
    const [open, setOpen]= useState(false);
    const resolveRef = useRef((v: boolean)=>{});
    confirmAction.current = () => new Promise((resolve)=>{
        setOpen(true)
        resolveRef.current = resolve
    })
    return <ConfirmDialog 
            onConfirm={()=>{resolveRef.current(true); setOpen(false)}} 
            onCanel={()=>{resolveRef.current(false); setOpen(false)}} 
            open={open} 
            />
}
