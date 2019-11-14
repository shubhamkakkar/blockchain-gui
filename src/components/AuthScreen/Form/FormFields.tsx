import React from "react"
import { TLoginForm } from "./Form"
import classes from './Form.module.scss';
function FormField({ type, label }: TLoginForm) {
    return (
        <div className={classes.formItems}>
            <div className={classes.formLabel}>{label}</div>
            <input className={classes.formInput}  {...{ type }} name="firstname" />
        </div>
    )
}


export default function FormFields({ loginForm }: { loginForm: TLoginForm[] }) {
    return (
        <div className={classes.formFields}>
            {
                loginForm.map(({ type, label }, key) => <FormField {...{ type, label, key }} />)
            }
        </div>
    )
}