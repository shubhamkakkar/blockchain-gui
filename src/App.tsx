import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import AuthScreen from "./components/AuthScreen/AuthScreen"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthScreen} />
      </Switch>
    </Router>
  );
}

export default App;
