import { ComponentProps,useRef, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
type Params = Partial<Omit<ComponentProps<typeof ConfirmDialog>,'open'|'onConfirm'|'onCanel'>>
const confirmAction = {
    current: (p:Params)=> Promise.resolve(true),
}

export const confirm = (props:Params)=>{
    return confirmAction.current(props)
}

export const ConfirmGlobal = ()=>{
    const [open, setOpen]= useState(false);
    const [props, setProps]= useState({})
    const resolveRef = useRef((v: boolean)=>{});
    confirmAction.current = (props) => new Promise((resolve)=>{
        setProps(props)
        setOpen(true)
        resolveRef.current = resolve
    })
    return <ConfirmDialog 
            onConfirm={()=>{resolveRef.current(true); setOpen(false)}} 
            onCanel={()=>{resolveRef.current(false); setOpen(false)}} 
            open={open} 
            {...props}
            />
}
