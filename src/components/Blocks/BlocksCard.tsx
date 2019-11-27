import React from "react";
import classes from "./scss/BlocksCard.module.scss";
import { PublicLedger } from "../../generated/graphql";
import BlockCard from "../../UI/BlockCard";

export type TBlocksCard = {
    blocks: PublicLedger[];
    error?: any;
    token: string;
};


export default function BlocksCard({
    blocks,
    error,
    token
}: TBlocksCard) {
    return (
        <div data-test="blockCardContainer" className={classes.blockCardContainer}>
            {error && <div data-test="errorDiv">error : {error.message}</div>}
            {blocks.length && blocks.map((blockInfo: PublicLedger, key: number) => <BlockCard data-test="blocksDiv-BlockCards" {...{ blockInfo, key, token, }} />)}
        </div>
    );
}
