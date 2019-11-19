import React from 'react';
import {connect} from "react-redux"
import Form from "./Form/Form"
import classes from './AuthScreen.module.scss';
import {Redirect} from "react-router";
import {keysAndTokenAction, TKeysTokenActionPayload} from "../../store/actions";


const ImageLoginScreen = () => React.useMemo(() => (
    <div className={classes.loginSigninImageContainer}>
        <img className={classes.loginSigninImage}
            // src={"https://cdn.dribbble.com/users/1736627/screenshots/5948340/attachments/1279242/artwork_landing_page-01.jpg"}
             src={"https://cdn.dribbble.com/users/103909/screenshots/6010724/services-icon-preview-02.png"}
             alt="login-signup"/>
    </div>
), [])


function AuthScreen({setKeysAndToken}: { setKeysAndToken: any }) {
    const value = JSON.parse(localStorage.getItem("KEYS_TOKEN") || "");
    if (value) {
        console.log({value})
        setKeysAndToken({...value})
        return <Redirect to={"blocks"}/>
    }
    return (
        <div className={classes.authScreenContainer}>
            <ImageLoginScreen/>
            <Form {...{setKeysAndToken}} />
        </div>
    )
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: TKeysTokenActionPayload; }) => void) => ({
    setKeysAndToken: (payload: TKeysTokenActionPayload) => dispatch(keysAndTokenAction(payload))
});

export default connect(null, mapDispatchToProps)(AuthScreen)
