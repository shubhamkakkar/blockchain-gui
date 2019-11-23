import React from 'react';
import { connect } from "react-redux"
import Form from "./Form/Form"
import classes from './AuthScreen.module.scss';
import { KEYS_TOKEN, keysAndTokenAction } from "../../store/actions";
import ImageContainer from "../../UI/ImageContainer";

function AuthScreen({ setKeysAndToken, history }: { setKeysAndToken: any, history: any }) {

    React.useEffect(() => {
        const value = localStorage.getItem(KEYS_TOKEN)
        if (value && value.trim().length) {
            setKeysAndToken(value);
            history.push("blocks")
        }
    }, []);

    return (
        <div className={classes.authScreenContainer}>
            <ImageContainer
                imageContainerClass={classes.loginSigninImageContainer}
                imageClass={classes.loginSigninImage}
                alt={"Authentication Image"}
                src={"https://cdn.dribbble.com/users/103909/screenshots/6010724/services-icon-preview-02.png"} />
            <Form {...{ setKeysAndToken }} />
        </div>
    )
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any }) => void) => ({
    setKeysAndToken: (payload: any) => dispatch(keysAndTokenAction(payload))
});

export default connect(null, mapDispatchToProps)(AuthScreen)
