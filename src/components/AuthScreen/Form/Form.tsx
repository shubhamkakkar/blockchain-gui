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
            <div className={classes.formChild}>
                First name:
                <input type="text" name="firstname" />
            </div>
            <div>
                Last name:
                <input type="text" name="lastname" />
            </div>
        </div>
    )
}