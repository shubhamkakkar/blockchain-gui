import React from 'react';
import {connect} from 'react-redux';
import {TKeysTokenActionPayload} from "../../store/actions";


const mapStateToProps = ({keysAndToken}: { keysAndToken: TKeysTokenActionPayload }) => ({keysAndToken});

function withKeysAndToken(Component: (props: any) => any) {
    function yourFunction({keysAndToken, history}: { keysAndToken: TKeysTokenActionPayload, history: any }) {
        // @ts-ignore
        return <Component  {...{...keysAndToken, history}} />
    }

    return connect(mapStateToProps)(yourFunction);
}


export default withKeysAndToken;
