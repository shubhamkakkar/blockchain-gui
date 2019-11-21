import classes from "./BlockCard.module.scss";
import {Block} from "../../generated/graphql";
import React from "react";

function CardRow({label, value}: { label: string; value: string }) {
    return (
        <div className={classes.cardRow}>
            <div className={classes.label}>{label} :</div>
            <div className={classes.value}>{value}</div>
        </div>
    );
}

export default function BlockCard({
                                      blockInfo: {_id, password, hash, prevHash},
                                      children
                                  }: {
    blockInfo: Block;
    children?: React.ReactNode
}) {
    return (
        <div className={classes.blockCard}>
            <CardRow label={"Previous hash"} value={prevHash}/>
            <CardRow label={"Block Hash"} value={hash}/>
            <CardRow label={"Digital Password"} value={password}/>
            {
                children
                    ? <div>children</div>
                    : <div className={classes.actionArea}>
                        <button>
                            Decrypt
                        </button>
                    </div>

            }
        </div>
    );
}
