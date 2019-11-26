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


function Button({ title, cssName, alignment, buttonActions }: IButton) {
    const MemorizedButton = () => React.useMemo(() => (
        <div className={classes.btnWrapper} style={{ textAlign: alignment }}>
            <button onClick={() => buttonActions({ title })} className={classes[cssName]}>
                {title.toUpperCase()}
            </button>
        </div>
    ), []);
    return <MemorizedButton />
}

const buttonMaps = ({ buttonActions }: { buttonActions: any }) => buttonsAr.map((buttonProps, index) =>
    <Button {...{ ...buttonProps, index, buttonActions }} key={index} />);

function ButtonsChild({ isLogin, buttonActions }: TbuttonsProp) {
    return React.useMemo(() => (
        <div className={classes.btnContainer}>
            {
                isLogin ? buttonMaps({ buttonActions }) : buttonMaps({ buttonActions }).reverse()
            }
        </div>
    ), [buttonActions, isLogin])
}

export default function Buttons(buttonsProp: TbuttonsProp) {
    return <ButtonsChild data-test="ButtonsChild" {...{ ...buttonsProp }} />
}
