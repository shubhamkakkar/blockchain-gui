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
    blockInfo: { _id, password, hash, data: blockData, prevHash },
    children,
    isCreatBlock,
    token
}: TBlockCard) {
    function CardRowSet() {
        const Memorized = React.memo(() => (
            <>
                <CardRow data-test="CardRow" label={"Previous hash"} value={prevHash} />
                <CardRow data-test="CardRow" label={"Block Hash"} value={hash} />
                <CardRow data-test="CardRow" label={"Digital Password"} value={password} />
            </>
        ));
        return <Memorized />;
    }

    const conditionClass = isCreatBlock
        ? classes.emptyClass
        : classes.blockCardInLedgerOnly;

    const [statePassword, setPassword] = React.useState("");
    const { loading, data, error: queryError } = useQuery(BLOCK, {
        variables: { token, password: statePassword, id: _id }
    });

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
            <button {...{ onClick }}>Decrypt</button>
        </div>);
        return <Memorized />
    }


    function ParsedObject({ data }: { data: string }) {
        const { organ, details, blood } = JSON.parse(data);
        return (
            <div>
                <CardRow data-test="CardRow" label={"organ taken?"} value={organ.toString()} />
                <CardRow data-test="CardRow" label={"blood taken?"} value={blood.toString()} />
                <CardRow data-test="CardRow" label={"Brief details"} value={details} />
            </div>
        )
    }

    function dataDecrypt() {
        if (!loading &&
            data.block.data !== data) {
            return <ParsedObject data-test="ParsedObject" data={data.block.data} />
        }
        return <div>Authentication Failed</div>

    }

    return (
        <div data-text="container" className={`${classes.blockCard} ${conditionClass}`}>
            <CardRowSet data-text="CardRowSet" />
            {children && (<React.Fragment>{children}</React.Fragment>)}
            {statePassword !== "" && dataDecrypt()}
            {!children && !loading && data !== undefined &&
                data.block.data === blockData && <SubmitButton data-test="SubmitButton" />}
        </div>
    );
}
