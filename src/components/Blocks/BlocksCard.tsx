import React from "react";
import classes from "./scss/BlocksCard.module.scss";
import { Block as BlockType } from "../../generated/graphql";
import BlockCard from "../../UI/BlockCard";
type TData = {
    blocks: BlockType[];
};

export type TBlocksCard = {
    data: TData;
    error: any;
    token: string;
};


export default function BlocksCard({
    data: { blocks },
    error,
    token
}: TBlocksCard) {
    return (
        <div data-test="blockCardContainer" className={classes.blockCardContainer}>
            {error && <div data-test="errorDiv">error : {error.message}</div>}
            {blocks.length && blocks.map((blockInfo: BlockType, key: number) => <BlockCard data-test="blocksDiv-BlockCards" {...{ blockInfo, key, token, }} />)}
        </div>
    );
}
