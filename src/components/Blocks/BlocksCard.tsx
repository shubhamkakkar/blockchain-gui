import React from "react";
import classes from "./scss/BlocksCard.module.scss"
import {Block} from "../../generated/graphql";


function BlockCard({blockInfo}: { blockInfo: Block }) {
    return <div>shubham</div>
}

export default function BlocksCard({loading, data, error}: { loading: any, data: Block[], error: any }) {
    console.log({loading, error});
    return (
        <div className={classes.blockCardContainer}>shubham</div>
    )
}


