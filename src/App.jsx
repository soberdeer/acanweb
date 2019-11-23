import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import SearchContainer from './components/Search/SearchContainer';
import useStyles from './App.styles';

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route path="/">
          <SearchContainer />
        </Route>
      </Switch>
    </Router>
  );
}
