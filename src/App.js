import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './views/NotFound';
import HomePage from './views/HomePage';
import ShowPage from './views/ShowPage';
import EpisodeDetailPage from './views/EpisodeDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shows/:showId" component={ShowPage} />
        <Route exact path="/episode/:episodeId" component={EpisodeDetailPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
