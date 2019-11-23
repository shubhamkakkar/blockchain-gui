import React from "react";
import classes from "./BlockCard.module.scss";
import { Block } from "../../generated/graphql";
import CardRow from './CardRow'

export default function BlockCard({
    blockInfo: { _id, password, hash, data, prevHash },
    children,
    isCreatBlock,
    onClick,
    queryData, queryError, loading
}: {
    blockInfo: Block;
    children?: any,
    isCreatBlock?: boolean | false,
    onClick?: any,
    queryData?: any, queryError?: any, loading?: boolean
}) {


    function CardRowSet() {
        const Memorized = React.memo(() => (
            <>
                <CardRow label={"Previous hash"} value={prevHash} />
                <CardRow label={"Block Hash"} value={hash} />
                <CardRow label={"Digital Password"} value={password} />
            </>
        ));
        return <Memorized />;
    }




    const conditionClass = isCreatBlock ? classes.emptyClass : classes.blockCardInLedgerOnly;
    const [dataShow, setDataShow] = React.useState(false)

    return (
        <div
            className={`${classes.blockCard} ${conditionClass}`}>
            <CardRowSet />
            {children && <React.Fragment>{children}</React.Fragment>}

        </div>
    );
}


// {
//     !dataShow ? <div className={classes.actionArea}>
//         <button onClick={() => {
//             onClick({ _id })
//             if (queryData) {
//                 setDataShow(true)

//             }

//         }} >
//             Decrypt
//     </button>
//     </div> : <CardRow label={"Digital Password"} value={password} />

// }