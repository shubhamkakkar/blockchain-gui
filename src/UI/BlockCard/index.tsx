import classes from "./BlockCard.module.scss";
import {Block} from "../../generated/graphql";
import React from "react";

export function CardRow({label, value}: { label: string; value: string, }) {
    return (
        <div className={classes.cardRow}>
            <div className={classes.label}>{label} :</div>
            <div className={classes.value}>{value}</div>
        </div>
    );
}

export default function BlockCard({
                                      blockInfo: {_id, password, hash, data, prevHash},
                                      children,
                                      isCreatBlock
                                  }: {
    blockInfo: Block;
    children?: any,
    isCreatBlock?: boolean | false
}) {


    function CardRowSet() {
        const Memorized = React.memo(() => (
            <>
                <CardRow label={"Previous hash"} value={prevHash}/>
                <CardRow label={"Block Hash"} value={hash}/>
                <CardRow label={"Digital Password"} value={password}/>
            </>
        ));
        return <Memorized/>;
    }

    const conditionClass = isCreatBlock ? classes.emptyClass : classes.blockCardInLedgerOnly;
    return (
        <div
            className={`${classes.blockCard} ${conditionClass}`}>
            <CardRowSet/>
            {
                children
                    ? <React.Fragment>{children}</React.Fragment>
                    : <div className={classes.actionArea}>
                        <button>
                            Decrypt
                        </button>
                    </div>

            }
        </div>
    );
}
