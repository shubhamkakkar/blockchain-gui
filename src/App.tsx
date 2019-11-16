import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import { AuthScreen, Blocks } from "./components/";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthScreen} />
        <Route exact path="/blocks" component={Blocks} />
      </Switch>
    </Router>
  );
};

export default App;
