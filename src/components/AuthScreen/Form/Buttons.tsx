import React from "react"
import classes from './Form.module.scss';


type TButton = { title: "Login" | "Signup", cssName: string, alignment: "center" | "right" }

interface IButton extends TButton {
    buttonActions: ({ title }: { title: string }) => void
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




function Button({ title, cssName, alignment, buttonActions }: IButton) {
    return (
        <div className={classes.btnWrapper} style={{ textAlign: alignment }}>
            <button onClick={() => buttonActions({ title })} className={classes[cssName]}>
                {title.toUpperCase()}
            </button>
        </div>
    )
}

const buttonMaps = ({ buttonActions }: { buttonActions: any }) => buttonsAr.map((buttonProps, index) => <Button {...{ ...buttonProps, index, buttonActions }} key={index} />)

export default function Buttons({ isLogin, buttonActions }: { isLogin: boolean, buttonActions: ({ title }: { title: string }) => void }) {
    return (
        <div className={classes.btnContainer}>
            {
                isLogin ? buttonMaps({ buttonActions }) : buttonMaps({ buttonActions }).reverse()
            }
        </div>
    )
}