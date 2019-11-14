import React from 'react';
import FormFields from './FormFields';
import Buttons from "./Buttons"
import classes from './Form.module.scss';

export type TLoginForm = {
    type: string,
    label: string
}

let loginForm: TLoginForm[] = [
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
    const [isLogin, setLogin] = React.useState(true)
    function buttonActions({ title }: { title: string }) {

        if (isLogin) {
            if (title === "Login") {
                // if isLogin and title=="Login" -> post req to login

            } else {
                loginForm = [
                    ...loginForm,
                    {
                        label: "Confirm Password",
                        type: "password"
                    },
                ]
                setLogin(false)
            }

        } else {

            if (title === "Login") {
                loginForm = [...loginForm.slice(0, 2)]
                setLogin(true)
            } else {
                // of isLogin false and title === "signup" post req to signup
            }
        }
    }
    return (
        <div className={classes.formContainer}>
            <div className={classes.cardContainer}>
                <FormFields {...{ loginForm }} />
                <Buttons  {...{ isLogin, buttonActions }} />
            </div>
        </div>
    )
}