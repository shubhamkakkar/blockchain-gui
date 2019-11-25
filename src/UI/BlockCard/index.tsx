import React from "react";
import classes from "./BlockCard.module.scss";
import { Block } from "../../generated/graphql";
import CardRow from "./CardRow";
import { useQuery } from "@apollo/react-hooks";
import { BLOCK } from "../../gql/query/block";

export type TBlockCard = {
    blockInfo: Block;
    children?: any;
    isCreatBlock?: boolean | false;
    token?: string;
}

export default function BlockCard({
    blockInfo: { _id, password, hash, data, prevHash },
    children,
    isCreatBlock,
    token
}: TBlockCard) {
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

    const conditionClass = isCreatBlock
        ? classes.emptyClass
        : classes.blockCardInLedgerOnly;

    const [statePassword, setPassword] = React.useState("");
    const { loading, data: queryData, error: queryError } = useQuery(BLOCK, {
        variables: { token, password: statePassword, id: _id }
    });

    React.useEffect(() => {
        if (statePassword !== "") {
            console.log({ queryData })
        }
    }, [statePassword]);

    function onClick() {
        const tempPassword = window.prompt(
            "Are you sure you wish to delete this item?"
        );
        if (tempPassword && tempPassword.length) {
            setPassword(tempPassword);
        }
    }


    function SubmitButton() {
        const Memorized = React.memo(() => <div className={classes.actionArea}>
            <button {...{ onClick }} >Decrypt</button>
        </div>);

        return <Memorized />
    }


    function ParsedObject({ data }: { data: string }) {
        const { organ, details, blood } = JSON.parse(data);
        console.log({ organ, details, blood });
        return (
            <div>
                <CardRow label={"organ taken?"} value={organ.toString()} />
                <CardRow label={"blood taken?"} value={blood.toString()} />
                <CardRow label={"Brief details"} value={details} />
            </div>
        )
    }

    function dataDecrypt() {
        if (!loading &&
            queryData.block.data !== data) {
            return <ParsedObject data={queryData.block.data} />
        }
        return <div>Authentication Failed</div>

    }

    return (
        <div className={`${classes.blockCard} ${conditionClass}`}>
            <CardRowSet />
            {children && (<React.Fragment>{children}</React.Fragment>)}
            {statePassword !== "" && dataDecrypt()}

            {!children && !loading &&
                queryData.block.data === data && <SubmitButton />}
        </div>
    );
}
