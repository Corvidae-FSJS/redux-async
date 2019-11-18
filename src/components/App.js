import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import DisplayCharacters from './containers/DisplayCharacters';
import DisplayCharacterDetail from '../components/containers/DisplayCharacterDetail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayCharacters} />
        <Route path="/characters/:name" component={DisplayCharacterDetail} />
      </Switch>
    </Router>
  );
}
