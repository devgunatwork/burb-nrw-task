import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './views/NotFound';
import HomePage from './views/HomePage';
import ShowPage from './views/ShowPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shows/:id/the-powerpuff-girls" component={ShowPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
