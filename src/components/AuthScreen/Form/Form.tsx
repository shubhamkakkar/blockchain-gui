import React from 'react';
import FormFields from './FormFields';
import Buttons from "./Buttons"
import classes from './Form.module.scss';
import {useMutation} from "@apollo/react-hooks";
import {SIGNIN_MUTATION, LOGIN_MUTATION} from "../../../gql/mutations/authentication"

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
];

const initialState: TuserCredential = {
    email: "",
    password: "",
    confirmPassword: ""
};

export default function Form(message?: any) {
    const [isLogin, setLogin] = React.useState(true);
    const [userCredentials, setUserCredentials] = React.useState(initialState);
    const [authenticationSignin] = useMutation(SIGNIN_MUTATION);
    const [authenticationLogin] = useMutation(LOGIN_MUTATION);

    function buttonActions({title}: { title: string }) {
        if (isLogin) {
            if (title === "Login") {
                const {email, password} = userCredentials;
                if (email.trim().length && password.trim().length) {
                    authenticationLogin({variables: {email, password}})
                        .then(({data: {login: {...loginProps}}}) => loginProps)
                        .catch(er => {
                            alert(er);
                            console.log({er})
                        })
                } else {
                    alert("All the fields are required")
                }
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
                const {email, password, confirmPassword} = userCredentials;
                if (email.trim().length && password.trim().length && confirmPassword.trim().length) {
                    if (password === confirmPassword) {
                        authenticationSignin({variables: {email, password}})
                            .then(({data: {signin: {...signinProps}}}) => signinProps)
                            .catch(er => {
                                alert("Signup failed, retry");
                                console.log({er})
                            })
                    } else {
                        alert("Passwords did not match")
                    }
                } else {
                    alert("All the fields are required")
                }
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
