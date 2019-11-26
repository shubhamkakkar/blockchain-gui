import React from "react";
import classes from "./FormField.module.scss";

export interface IFormField {
    type: string;
    value: string;
    label: string;
    onChange: (e: any, label: string) => void;
    backendLabel: string | "";
    labelColor: string
}

export default function FormField({
    value,
    type,
    label,
    backendLabel,
    onChange,
    labelColor: color
}: IFormField) {
    return (
        <div data-test="formFieldContainer" className={classes.formItems}>
            <div data-test="label" className={classes.formLabel} style={{ color }}>{label} :</div>
            <div data-test="inputContainer" className={classes.formInputContainer}>
                <input
                    data-test="input"
                    className={classes.formInput}
                    style={{ width: backendLabel === "details" ? "90%" : "inherit" }}
                    required
                    {...{ type, value }}
                    onChange={e => onChange(e, backendLabel)}
                />
            </div>
        </div>
    );
}
