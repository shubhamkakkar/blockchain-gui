import React from 'react';
import Form from "./Form/Form"
import classes from './AuthScreen.module.scss';


const ImageLoginScreen = () => React.useMemo(() => (
    <div className={classes.loginSigninImageContainer}>
        <img className={classes.loginSigninImage}
            // src={"https://cdn.dribbble.com/users/1736627/screenshots/5948340/attachments/1279242/artwork_landing_page-01.jpg"}
             src={"https://cdn.dribbble.com/users/103909/screenshots/6010724/services-icon-preview-02.png"}
             alt="login-signup"/>
    </div>
), [])


export default function AuthScreen() {
    return (
        <div className={classes.authScreenContainer}>
            <ImageLoginScreen/>
            <Form/>
        </div>
    )
}

