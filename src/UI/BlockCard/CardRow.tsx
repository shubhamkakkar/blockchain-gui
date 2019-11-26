import React from "react"
import classes from "./BlockCard.module.scss";


export type TCardRow = { label: string; value: string, }

export default function CardRow({ label, value }: TCardRow) {
    return (
        <div data-test="cardRowContainer" className={classes.cardRow}>
            <div data-test="cardRowLabel" className={classes.label}>{label} :</div>
            <div data-test="cardRowValue" className={classes.value}>{value}</div>
        </div>
    );
}
