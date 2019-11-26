import React, { Dispatch, SetStateAction } from "react"
import { TLoginForm, TuserCredential } from "./Form"
import classes from './Form.module.scss';
import FormField from "../../../UI/FormField";

export type TFormFieldsProps = {
    loginForm: TLoginForm[],
    userCredentials: TuserCredential,
    setUserCredentials: Dispatch<SetStateAction<TuserCredential>>
}

export default function FormFields({ loginForm, userCredentials, setUserCredentials }: TFormFieldsProps) {

    function onChange(e: any, label: string) {
        e.preventDefault();
        if (label === "Confirm Password") {
            setUserCredentials({ ...userCredentials, confirmPassword: e.target.value })
        } else {
            setUserCredentials({ ...userCredentials, [label]: e.target.value })
        }
    }

    return (
        <div data-test='formFieldsContainer' className={classes.formFields}>
            {
                loginForm.map(({ type, label }, key) =>
                    <FormField
                        data-test='FormField'
                        {...{
                            // @ts-ignore
                            value: userCredentials[key],
                            type,
                            label,
                            onChange,
                            key,
                            backendLabel: "",
                            labelColor: "#5C43DB"
                        }} />
                )
            }
        </div>
    )
}
