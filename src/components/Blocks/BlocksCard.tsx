import React from "react";
import classes from "./scss/BlocksCard.module.scss"
import {Block} from "../../generated/graphql";


type TData = {
    blocks: Block[]
}

function BlockCard({blockInfo: {_id, password, index, hash, data}}: { blockInfo: Partial<Block> }) {

    return <div>
        {_id}
        {password}
        {index}
        {hash}
    </div>
}

export default function BlocksCard({data, error}: { data: TData, error: any }) {
    return (
        <div className={classes.blockCardContainer}>
            {error && <div>error : {error.message}</div>}
            {
                data.blocks.map((blockInfo: Block, key: number) => <BlockCard {...{blockInfo, key}}/>)
            }
        </div>
    )
}


