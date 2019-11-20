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
        if (label === "Confirm Password") {
            setUserCredentials({...userCredentials, confirmPassword: e.target.value})
        } else {
            setUserCredentials({...userCredentials, [label]: e.target.value})
        }
    }

    return (
        <div className={classes.formFields}>
            {
                loginForm.map(({type, label}, key) => <FormField {...{type, label, key, onChange}} />)
            }
        </div>
    )
}
