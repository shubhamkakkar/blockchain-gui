import React from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import BlocksCard from './BlocksCard'
import classes from "./scss/Blocks.module.scss"
import withKeysAndToken from "../../HOC/withKeysAndToken";
import { BLOCKS_QUERY } from "../../gql/query/blocks";
import Heading from "../../UI/Heading";
import { PublicLedger } from "../../generated/graphql";

function Blocks({ token, history, ...rest }: { token: string, history: any }) {
    // const { loading, error, data } = useQuery(BLOCKS_QUERY, {
    //     variables: { token },
    // });

    const [caller, { loading, data }] = useLazyQuery(BLOCKS_QUERY, {
        variables: { token },
    });

    let dataFromLocalState: string | null;

    const [blocks, setBlocks] = React.useState([])

    React.useEffect(() => {
        dataFromLocalState = sessionStorage.getItem("PUBLIC_LEDGER");
        if (dataFromLocalState && dataFromLocalState.length) {
            console.log("here")
            setBlocks(JSON.parse(dataFromLocalState).blocks)
        } else {
            caller();
        }
    }, []);

    React.useEffect(() => {
        if (data && data.blocks.length)
            sessionStorage.setItem("PUBLIC_LEDGER", JSON.stringify(data));
    }, [blocks, data])

    if (!token) {
        //TODO: add error 404 page
        return <div>Error 404 !!</div>
    }
    return (
        <div className={classes.blocksContainer}>
            <Heading title={"Public Ledger"} />
            {
                blocks.length || data && data.blocks.length
                    ? <BlocksCard {...{ blocks: blocks.length ? blocks : data.blocks, token }} />
                    : <div>loading ... </div>
            }
        </div>
    )
}

export default withKeysAndToken(Blocks)
