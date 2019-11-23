import React from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks"
import classes from "./scss/BlocksCard.module.scss";
import { BLOCK } from "../../gql/query/block"
import { Block as BlockType } from "../../generated/graphql";
import BlockCard from "../../UI/BlockCard";
import CardRow from "../../UI/BlockCard/CardRow";
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

    const [cred, setCred] = React.useState({ password: "", _id: "" });
    const { loading, data: queryData, error: queryError } = useQuery(BLOCK,
        {
            variables: { token, password: cred.password, id: cred._id }
        }
    );


    function onClick({ _id }: { _id: string }) {
        const password = window.prompt('Are you sure you wish to delete this item?')
        if (password && password.length) {
            setCred({ password, _id })
        }
    }

    return (
        <div className={classes.blockCardContainer}>
            {error && <div>error : {error.message}</div>}
            {blocks.length && blocks.map((blockInfo: BlockType, key: number) => <BlockCard {...{ blockInfo, key, onClick, queryData, queryError, loading }} />)}
        </div>


    );
}