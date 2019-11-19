import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {AuthScreen, Blocks} from "./components/";

const App: React.FC = (props) => {

        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={AuthScreen}/>
                    <Route exact path="/blocks" component={Blocks}/>
                </Switch>
            </Router>
        );
    }
;


export default App;
