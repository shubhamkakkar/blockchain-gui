import React from 'react';
import {connect} from 'react-redux';
import {TKeysTokenActionPayload} from "../../store/actions";


const mapStateToProps = ({keysAndToken}: { keysAndToken: TKeysTokenActionPayload }) => ({keysAndToken});

function withKeysAndToken(Component: (props: any) => any) {
    function yourFunction({keysAndToken, ...rest}: { keysAndToken: TKeysTokenActionPayload }) {
        // @ts-ignore
        return <Component  {...keysAndToken} />
    }

    return connect(mapStateToProps)(yourFunction);
}


export default withKeysAndToken;
