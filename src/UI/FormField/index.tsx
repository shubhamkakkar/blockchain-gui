import React from "react";
import classes from "./FormField.module.scss";

export default function FormField({
                                      value,
                                      type,
                                      label,
                                      onChange
                                  }: {
    type: string;
    value: string;
    label: string;
    onChange: (e: any, label: string) => void;
}) {
    return (
        <div className={classes.formItems}>
            <div className={classes.formLabel}>{label} :</div>
            <div className={classes.formInputContainer}>
                <input
                    className={classes.formInput}
                    required
                    {...{type, value}}
                    onChange={e => onChange(e, label)}
                />
            </div>
        </div>
    );
}
