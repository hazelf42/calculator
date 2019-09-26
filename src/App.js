import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch, } from "react-router-dom";
import Home from './Home'
import About from './About'
function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </HashRouter>
  );
}

export default App; 