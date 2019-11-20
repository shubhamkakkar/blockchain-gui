import React from "react";
import {useQuery} from "@apollo/react-hooks";
import BlocksCard from './BlocksCard'
import classes from "./scss/Blocks.module.scss"
import withKeysAndToken from "../../HOC/withKeysAndToken";
import {BLOCKS_QUERY} from "../../gql/query/blocks";
import Heading from "../../UI/Heading";

function Blocks({token, history, ...rest}: { token: string, history: any }) {
    const {loading, error, data} = useQuery(BLOCKS_QUERY, {
        variables: {token},
    });

    if (!token) {
        //TODO: add error 404 page
        return <div>Error 404 !!</div>
    }
    return (
        <div className={classes.blocksContainer}>
            <Heading title={"Public Ledger"}/>
            {!loading && !error && <BlocksCard {...{error, data}} />}
        </div>
    )
}

export default withKeysAndToken(Blocks)
