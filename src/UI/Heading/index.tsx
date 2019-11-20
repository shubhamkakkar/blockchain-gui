import classes from "./Heading.module.scss";
import React from "react";

export default function Heading({title}: { title: string }) {
    return (
        <div className={classes.blocksHeadingContainer && classes.scrollAnimationClass}>
            <div className={classes.blocksHeadingText}>
                {title}
            </div>
        </div>
    )
}
