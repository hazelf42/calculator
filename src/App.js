import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
function App() {
  return (
    <div style={{ overflow:'auto'}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;