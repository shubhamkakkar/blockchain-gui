import React from "react";
import classes from "./scss/BlocksCard.module.scss";
import { Block as BlockType } from "../../generated/graphql";
import BlockCard from "../../UI/BlockCard";
type TData = {
    blocks: BlockType[];
};


export default function BlocksCard({
    data: { blocks },
    error,
    token
}: {
    data: TData;
    error: any;
    token: string;
}) {





    return (
        <div className={classes.blockCardContainer}>
            {error && <div>error : {error.message}</div>}
            {blocks.length && blocks.map((blockInfo: BlockType, key: number) => <BlockCard {...{ blockInfo, key, token, }} />)}
        </div>


    );
}
