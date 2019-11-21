import React from "react";
import classes from "./scss/BlocksCard.module.scss";
import {Block} from "../../generated/graphql";
import BlockCard from "../../UI/BlockCard";
type TData = {
    blocks: Block[];
};


export default function BlocksCard({
                                       data: {blocks},
                                       error
                                   }: {
    data: TData;
    error: any;
}) {
    return (
        <div className={classes.blockCardContainer}>
            {error && <div>error : {error.message}</div>}
            {blocks.length && blocks.map((blockInfo: Block, key: number) => <BlockCard {...{blockInfo, key}} />)}
        </div>


    );
}
