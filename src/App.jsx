import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import getData from '../utils/getData';
import Container from './components/common/Container/Container';
import SearchContainer from './components/Search/SearchContainer/SearchContainer';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      getData().then(res => setData(res));
    }
  });

  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/">
            <SearchContainer data={data} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
