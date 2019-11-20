import React from "react";
import classes from "./FormField.module.scss"

export default function FormField({type, label, onChange}: { type: string, label: string, onChange: (e: any, label: string) => void }) {
    const MemorizedForm = React.memo(() => (
        <div className={classes.formItems}>
            <div className={classes.formLabel}>{label} :</div>
            <input className={classes.formInput} required {...{type}} onChange={(e) => onChange(e, label)}/>
        </div>
    ))
    return <MemorizedForm/>
}
