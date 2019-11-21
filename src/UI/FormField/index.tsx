import React from "react";
import classes from "./FormField.module.scss";

interface IFormField {
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
        <div className={classes.formItems}>
            <div className={classes.formLabel} style={{color}}>{label} :</div>
            <div className={classes.formInputContainer}
                // style={{ backgroundColor: 'blue' }}
            >
                <input
                    className={classes.formInput}
                    style={{width: backendLabel === "details" ? "90%" : "inherit"}}
                    required
                    {...{type, value}}
                    onChange={e => onChange(e, backendLabel)}
                />
            </div>
        </div>
    );
}
