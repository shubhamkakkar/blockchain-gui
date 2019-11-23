import React, { FunctionComponent, } from "react";
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import { AuthScreen, Blocks } from "./components/";
import CreateBlock from "./components/CreateBlock/CreateBlock";
import NavigationBar from "./components/NavigationBar/NavigationBar";


type TRoutes = {
    path: string,
    title: string,
    component: FunctionComponent<RouteComponentProps<any, any, any>>
}

export const routes: TRoutes[] = [
    {
        path: "/",
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
        <Router>
            <NavigationBar history={() => { }} />
            <Switch>
                {
                    routes.map(({ path, component }, key) => <Route exact {...{ path, component, key }} />)
                }
            </Switch>
        </Router>
    );
}
    ;


export default App;
