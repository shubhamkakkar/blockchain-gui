import React from 'react';
import classes from './Form.module.scss';


type TLoginForm = {
    type?: string,
    label: string
}

const loginForm: TLoginForm[] = [
    {
        label: "Email",
        type: "email"
    },
    {
        label: "Password",
        type: "password"
    }
]


export default function Form() {
    return (
        <div className={classes.formContainer}>
            {
                loginForm.map(({ type, label }, key) => (
                    <div className={classes.formItems}  {...{ key }} >
                        <div className={classes.formLabel}>{label}</div>
                        <input className={classes.formInput}  {...{ type }} name="firstname" />
                    </div>
                ))
            }
        </div>
    )
}