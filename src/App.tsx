import React, {FunctionComponent,} from "react";
import {BrowserRouter as Router, Route, Switch, RouteComponentProps} from "react-router-dom";
import {Home, AuthScreen, Blocks, CreateBlock, NavigationBar} from "./components/";


type TRoutes = {
    path: string,
    title: string,
    component: FunctionComponent<RouteComponentProps<any, any, any>>
}

export const routes: TRoutes[] = [
    {
        path: "/",
        title: "Home",
        component: Home
    },
    {
        path: "/auth",
        title: "Auth",
        component: AuthScreen
    },
    {
        path: "/createblock",
        title: "Create Block",
        component: CreateBlock
    },
    {
        path: "/blocks",
        title: "All Blocks",
        component: Blocks
    },
]

const App: React.FC = (props) => {

        return (
            <Router data-test={"RouterContainer"}>
                <NavigationBar data-test={"NavigationBar"} history={() => {
                }}/>
                <Switch data-test={"SwitchContainer"}>
                    {
                        routes.map(({path, component}, key) => <Route data-test={"Route"} exact {...{
                            path,
                            component,
                            key
                        }} />)
                    }
                </Switch>
            </Router>
        );
    }
;


export default App;
