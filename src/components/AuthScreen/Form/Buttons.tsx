import React from "react"
import classes from './Form.module.scss';


function Button({ css }: { css: string }) {
    return (
        <button className={classes[css]}>
            shubham
        </button>
    )
}

export default function Buttons({ isLogin }: { isLogin: boolean }) {
    return (
        <div className={classes.buttonContainer}>
            <Button css={"login"} />
            <Button css={"signin"} />
        </div>
    )
}