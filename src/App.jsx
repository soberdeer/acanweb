import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import getData from '../utils/getData';
import SearchContainer from './components/Search/SearchContainer';
import useStyles from './App.styles';

export default function App() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      getData().then(res => setData(res));
    }
  });

  return (
    <Router>
      <Switch>
        <Route path="/">
          <SearchContainer data={data} />
        </Route>
      </Switch>
    </Router>
  );
}
