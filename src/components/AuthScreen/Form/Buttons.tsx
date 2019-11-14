import React from "react"
import classes from './Form.module.scss';


type TButton = { title: "Login" | "Signup", cssName: string, alignment: "center" | "right" }

interface IButton extends TButton {
    index: number
}

const buttonsAr: TButton[] = [
    {
        title: "Login",
        cssName: "login",
        alignment: "center",

    },
    {
        title: "Signup",
        cssName: "signin",
        alignment: "right"
    },
]




function Button({ title, cssName, alignment, index }: IButton) {
    return (
        <div className={classes.btnWrapper} style={{ textAlign: alignment }}>
            <button className={classes[cssName]}>
                {title.toUpperCase()}
            </button>
        </div>
    )
}

export default function Buttons({ isLogin }: { isLogin: boolean }) {
    return (
        <div className={classes.btnContainer}>
            {
                buttonsAr.map((buttonProps, index) => <Button {...{ ...buttonProps, index }} key={index} />)
            }
        </div>
    )
}