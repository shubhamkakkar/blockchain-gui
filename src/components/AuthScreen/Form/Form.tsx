import React from "react";
import FormFields from "./FormFields";
import Buttons from "./Buttons";
import classes from "./Form.module.scss";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router";
import { encryptedKeysAndToken } from "../../../JWT";
import {
    SIGNIN_MUTATION,
    LOGIN_MUTATION
} from "../../../gql/mutations/authentication";
import {
    TKeysTokenActionPayload
} from "../../../store/actions";

export type TLoginForm = {
    type: string;
    label: string;
    backendLabel: string;
};

export type TuserCredential = {
    email: string;
    password: string;
    confirmPassword: string;
};

type TLSAuthenticator = { email: string; password: string };

let loginForm: TLoginForm[] = [
    {
        label: "Email",
        type: "email",
        backendLabel: "email",
    },
    {
        label: "password",
        type: "password",
        backendLabel: "password"
    }
];

const initialState: TuserCredential = {
    email: "",
    password: "",
    confirmPassword: ""
};


function Form({ setKeysAndToken, ...rest }: { setKeysAndToken: any }) {
    const [isLogin, setLogin] = React.useState(true);
    const [userCredentials, setUserCredentials] = React.useState(initialState);
    const [authenticationSignin] = useMutation(SIGNIN_MUTATION);
    const [authenticationLogin] = useMutation(LOGIN_MUTATION);

    function updateReduxKeysAndToken(data: TKeysTokenActionPayload) {
        const tokenize = encryptedKeysAndToken(data);
        setKeysAndToken(tokenize)
    }

    function loginAuthenticator({ email, password }: TLSAuthenticator) {
        authenticationLogin({ variables: { email, password } })
            .then(({ data: { login: { __typename, ...loginProps } } }) => {
                updateReduxKeysAndToken(loginProps)
                // @ts-ignore
                rest.history.push("blocks");
            })
            .catch(({ graphQLErrors }) => {
                const { message } = graphQLErrors[0];
                alert(message);
                console.log({ message });
            });
    }

    function signupAuthenticator({ email, password }: TLSAuthenticator) {
        authenticationSignin({ variables: { email, password } })
            .then(({ data: { signin: { __typename, ...signinProps } } }) =>
                updateReduxKeysAndToken(signinProps)
            )
            .catch(({ graphQLErrors }) => {
                const { message } = graphQLErrors[0];
                alert(message);
                console.log({ message });
            });
    }

    function buttonActions({ title }: { title: string }) {
        console.log({ userCredentials })
        if (isLogin) {
            if (title === "Login") {
                const { email, password } = userCredentials;
                if (email.trim().length && password.trim().length) {
                    loginAuthenticator({ email, password });
                } else {
                    alert("All the fields are required");
                }
            } else {
                loginForm = [
                    ...loginForm,
                    {
                        label: "Confirm Password",
                        type: "password",
                        backendLabel: "confirmPassword"
                    }
                ];
                setLogin(false);
            }
        } else {
            if (title === "Login") {
                loginForm = [...loginForm.slice(0, 2)];
                setLogin(true);
            } else {
                const { email, password, confirmPassword } = userCredentials;
                if (
                    email.trim().length &&
                    password.trim().length &&
                    confirmPassword.trim().length
                ) {
                    if (password === confirmPassword) {
                        signupAuthenticator({ email, password });
                    } else {
                        alert("Passwords did not match");
                    }
                } else {
                    alert("All the fields are required");
                }
            }
        }
    }

    return (
        <div className={classes.formContainer}>
            <div className={classes.cardContainer}>
                <FormFields {...{ loginForm, userCredentials, setUserCredentials }} />
                <Buttons {...{ isLogin, buttonActions }} />
            </div>
        </div>
    );
}

//@ts-ignore
export default withRouter(Form);
