import React from 'react'
import Heading from '../../UI/Heading'
import classes from './Home.module.scss'
import withKeysAndToken from "../../HOC/withKeysAndToken";

export type THome = { token: string, history: any }

function Home({ token, history }: THome) {
    return (
        <div style={{ display: "flex", flex: 1, flexDirection: "column", padding: "20px" }}>
            <div>
                <Heading title={"Medical Record Safe - Blockchain"} />
            </div>
            <div className={classes.contentContainer}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ textAlign: "center", color: "#3f51b5" }}>
                        We provide you with service to save your medical recors and blood/organ related transaction details in a blockchain based architecture.
                    </p>
                    <p style={{ textAlign: "center", color: "#3f51b5" }}><b>All your data would be stored in an encypted format and no user other than you, could have access to it</b></p>
                    <div className={classes.flex}>
                        <button className={classes.button} onClick={
                            () => {
                                if (token) {
                                    history.push("/blocks")
                                } else {
                                    history.push("/auth")
                                }
                            }
                        }>
                            {token ? "Enter " : "Join "} the chain
                </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withKeysAndToken(Home)
