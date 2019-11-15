import React, {Dispatch, SetStateAction} from "react"
import {TLoginForm, TuserCredential} from "./Form"
import classes from './Form.module.scss';

function FormField({type, label, onChange}: { type: string, label: string, onChange: (e: any, label: string) => void }) {
    return (
        <div className={classes.formItems}>
            <div className={classes.formLabel}>{label} :</div>
            <input className={classes.formInput} required {...{type}} onChange={(e) => onChange(e, label)}/>
        </div>
    )
}


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
