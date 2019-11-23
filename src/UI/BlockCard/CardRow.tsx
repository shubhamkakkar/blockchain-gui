import React from "react"
import classes from "./BlockCard.module.scss";

export default function CardRow({ label, value }: { label: string; value: string, }) {
    return (
        <div className={classes.cardRow}>
            <div className={classes.label}>{label} :</div>
            <div className={classes.value}>{value}</div>
        </div>
    );
}
