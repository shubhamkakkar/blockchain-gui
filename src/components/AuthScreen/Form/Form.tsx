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
]

const initialState: Partial<TuserCredential> = {};


// function authenticate({variables: {email, password}}: { variables: any }) {
//     const [] = useMutation(AUTHENTICATION_MUTATION);
//
// }

export default function Form() {
    const [isLogin, setLogin] = React.useState(true);
    const [userCredentials, setUserCredentials] = React.useState(initialState);
    const [authenticationSignin] = useMutation(SIGNIN_MUTATION);
    const [authenticationLogin] = useMutation(LOGIN_MUTATION);

    function buttonActions({title}: { title: string }) {
        if (isLogin) {
            if (title === "Login") {
                const {email, password} = userCredentials;
                authenticationLogin({variables: {email, password}})
                    .then(({data: {login: {...loginProps}}}) => console.log({loginProps}))
                    .catch(er => console.log({er}))
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
                authenticationSignin({variables: {email, password}})
                    .then(({data: {signin: {...signinProps}}}) => console.log({signinProps}))
                    .catch(er => console.log({er}))
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
