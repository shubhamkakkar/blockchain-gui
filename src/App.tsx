import React from "react";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import {AuthScreen, Blocks} from "./components/";
import CreateBlock from "./components/CreateBlock/CreateBlock";


const App: React.FC = (props) => {

        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={AuthScreen}/>
                    <Route exact path="/createblock" component={CreateBlock}/>
                    <Route exact path="/blocks" component={Blocks}/>
                </Switch>
            </Router>
        );
    }
;


export default App;
