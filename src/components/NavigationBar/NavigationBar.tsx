import React from 'react'
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.scss"
import { routes } from "../../App"
import withKeysAndToken from '../../HOC/withKeysAndToken';
import logo from "../../assets/images/logo.png"
function NavigationBar({ token, history }: { token: string, history: any }) {
    return (
        <div className={classes.navigationContainer}>
            <div className={classes.logo}>
                <Link to={"/"}>
                    <img src={logo} alt="Logo" className={classes.logoImg} />
                </Link>
            </div>
            <div className={classes.linkContainer}>
                {
                    token
                        ? token.trim().length
                        && routes.map(({ path, title }, index) => {
                            if (path != "/" && path != "/blocks") {
                                return <Link className={classes.link} style={{ justifyContent: "flex-end" }} to={path}>{title}</Link>
                            }
                        })
                        : <Link className={classes.link} style={{ justifyContent: "flex-end" }} to={"/auth"}>{"Login/Signup"}</Link>
                }
            </div>
        </div>
    )
}

export default withKeysAndToken(NavigationBar)
