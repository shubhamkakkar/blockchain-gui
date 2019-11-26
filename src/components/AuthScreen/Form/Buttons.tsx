import React from "react"
import classes from './Form.module.scss';


export type TButton = { title: "Login" | "Signup", cssName: string, alignment: "center" | "right" }
export type TbuttonsProp = { isLogin: boolean, buttonActions: ({ title }: { title: string }) => void }
export interface IButton extends TButton {
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
];



const buttonMaps = ({ buttonActions }: { buttonActions: any }) => buttonsAr.map(({ title, cssName, alignment }, key) => (
    <div {...{ key }} data-test="buttonMapsContainer" className={classes.btnWrapper} style={{ textAlign: alignment }}>
        <button data-test="Button" onClick={() => buttonActions({ title })} className={classes[cssName]}>
            {title.toUpperCase()}
        </button>
    </div>
));



export default function Buttons({ isLogin, buttonActions }: TbuttonsProp) {
    return <div data-test="ButtonsChildContainer" className={classes.btnContainer}>
        {
            isLogin ? buttonMaps({ buttonActions }) : buttonMaps({ buttonActions }).reverse()
        }
    </div>
}
