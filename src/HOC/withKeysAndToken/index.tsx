import React from 'react';
import {connect} from 'react-redux';
import {decryptToken} from "../../JWT";
import {KEYS_TOKEN} from "../../store/actions";


const mapStateToProps = ({keysAndToken}: { keysAndToken: string }) => ({keysAndToken});

function withKeysAndToken(Component: (props: any) => any) {
    function yourFunction({keysAndToken, history}: { keysAndToken: string, history: any }) {
        if (keysAndToken && keysAndToken.trim().length) {
            // @ts-ignore
            const {data} = decryptToken(keysAndToken);
            return <Component  {...{...data, history}} />
        } else {
            const value = localStorage.getItem(KEYS_TOKEN)
            if (value) {
                // @ts-ignore
                const {data} = decryptToken(value);
                return <Component  {...{...data, history}} />
            } else {

                return <Component  {...{history}} />
            }
        }
    }

    return connect(mapStateToProps)(yourFunction);
}


export default withKeysAndToken;
