import React from 'react';
import FormFields from './FormFields';
import Buttons from "./Buttons"
import classes from './Form.module.scss';

export type TLoginForm = {
    type: string,
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
    },
]


export default function Form() {
    const [isLogin, setLogin] = React.useState(false)
    return (
        <div className={classes.formContainer}>
            <div className={classes.cardContainer}>
                <FormFields {...{ loginForm }} />
                <Buttons  {...{ isLogin, setLogin }} />
            </div>
        </div>
    )
}