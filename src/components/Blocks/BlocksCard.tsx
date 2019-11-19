import React from "react";
import classes from "./scss/BlocksCard.module.scss";
import {Block} from "../../generated/graphql";

type TData = {
    blocks: Block[];
};

function CardRow({label, value}: { label: string; value: string }) {
    return (
        <div className={classes.cardRow}>
            <div className={classes.label}>{label} : </div>
            <div className={classes.value}>{value}</div>
        </div>
    );
}

function BlockCard({
                       blockInfo: {_id, password, index, hash, data, prevHash}
                   }: {
    blockInfo: Block;
}) {
    return (
        <div className={classes.blockCard}>
            <CardRow label={"Previous hash"} value={prevHash}/>
            <CardRow label={"Block Hash"} value={hash}/>
            <CardRow label={"Digital Password"} value={password}/>
        </div>
    );
}

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
            {blocks.map((blockInfo: Block, key: number) => <BlockCard {...{blockInfo, key}} />)}
        </div>
    );
}
