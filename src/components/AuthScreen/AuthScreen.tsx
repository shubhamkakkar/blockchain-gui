import React from 'react';
import {connect} from "react-redux"
import Form from "./Form/Form"
import classes from './AuthScreen.module.scss';
import {Redirect} from "react-router";
import {KEYS_TOKEN, keysAndTokenAction, TKeysTokenActionPayload} from "../../store/actions";
import aesjs from "aes-js";


const ImageLoginScreen = () => React.useMemo(() => (
    <div className={classes.loginSigninImageContainer}>
        <img className={classes.loginSigninImage}
            // src={"https://cdn.dribbble.com/users/1736627/screenshots/5948340/attachments/1279242/artwork_landing_page-01.jpg"}
             src={"https://cdn.dribbble.com/users/103909/screenshots/6010724/services-icon-preview-02.png"}
             alt="login-signup"/>
    </div>
), [])


function AuthScreen({setKeysAndToken}: { setKeysAndToken: any }) {
    const value = localStorage.getItem(KEYS_TOKEN)
    if (value && value.trim().length) {
        setKeysAndToken(value);
        return <Redirect to={"block"}/>
    }
    return (
        <div className={classes.authScreenContainer}>
            <ImageLoginScreen/>
            <Form {...{setKeysAndToken}} />
        </div>
    )
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any }) => void) => ({
    setKeysAndToken: (payload: any) => dispatch(keysAndTokenAction(payload))
});

export default connect(null, mapDispatchToProps)(AuthScreen)
