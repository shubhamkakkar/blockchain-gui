import React, {Dispatch, SetStateAction} from "react"
import {TLoginForm, TuserCredential} from "./Form"
import classes from './Form.module.scss';
import FormField from "../../../UI/FormField";


export default function FormFields({loginForm, userCredentials, setUserCredentials}: {
    loginForm: TLoginForm[],
    userCredentials: TuserCredential,
    setUserCredentials: Dispatch<SetStateAction<TuserCredential>>
}) {

    function onChange(e: any, label: string) {
        e.preventDefault();
        if (label === "Confirm Password") {
            setUserCredentials({...userCredentials, confirmPassword: e.target.value})
        } else {
            setUserCredentials({...userCredentials, [label]: e.target.value})
        }
    }

    return (
        <div className={classes.formFields}>
            {
                loginForm.map(({type, label}, key) =>
                    <FormField {...{
                        // @ts-ignore
                        value: userCredentials[key],
                        type,
                        label,
                        onChange,
                        key,
                        backendLabel: "",
                        labelColor: "#754DA5"
                    }} />
                )
            }
        </div>
    )
}
