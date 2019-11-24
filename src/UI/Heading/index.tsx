import classes from "./Heading.module.scss";
import React from "react";

export type THeading = { title: string }

export default function Heading({ title }: THeading) {
    return (
        <div data-test="headingContainer" className={classes.blocksHeadingContainer && classes.scrollAnimationClass}>
            <div data-test="headingText" className={classes.blocksHeadingText}>
                {title}
            </div>
        </div>
    )
}
