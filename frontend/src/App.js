import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Search from './pages/Search';
import * as Styled from './style';

function App() {
  return (
    <Router>
      <Styled.NavMenu>
        <Link to="/">Home</Link>
      </Styled.NavMenu>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
