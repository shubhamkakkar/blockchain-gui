import React from 'react';
import FormFields from './FormFields';
import Buttons from "./Buttons"
import classes from './Form.module.scss';

export type TLoginForm = {
    type: string,
    label: string
}

export type TuserCredential = {
    email: string;
    password: string;
    confirmPassword: string;
}


let loginForm: TLoginForm[] = [
    {
        label: "email",
        type: "email"
    },
    {
        label: "password",
        type: "password"
    },
]

const initialState: Partial<TuserCredential> = {};

export default function Form() {
    const [isLogin, setLogin] = React.useState(true);
    const [userCredentials, setUserCredentials] = React.useState(initialState);
    React.useEffect(() => {
        console.log({userCredentials})
    }, [userCredentials])

    function buttonActions({title}: { title: string }) {

        if (isLogin) {
            if (title === "Login") {

            } else {
                loginForm = [
                    ...loginForm,
                    {
                        label: "Confirm Password",
                        type: "password"
                    },
                ];
                setLogin(false)
            }
        } else {
            if (title === "Login") {
                loginForm = [...loginForm.slice(0, 2)];
                setLogin(true)
            } else {
                const {email, password, ...rest} = userCredentials;
            }
        }
    }

    return (
        <div className={classes.formContainer}>
            <div className={classes.cardContainer}>
                <FormFields {...{loginForm, userCredentials, setUserCredentials}} />
                <Buttons  {...{isLogin, buttonActions}} />
            </div>
        </div>
    )
}
