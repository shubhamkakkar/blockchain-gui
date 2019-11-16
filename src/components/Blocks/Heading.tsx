import React from "react";
import classes from "./scss/BlockHeading.module.scss"

export default function BlockHeading({loading}: { loading: boolean }) {
    return (
        <div className={classes.blocksHeadingContainer && classes.scrollAnimationClass}>
            <div className={classes.blocksHeadingText}>
                Public Ledger
            </div>
        </div>
    )
}
