import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from '../containers/Home';

const App = () => (
  <div className="App">
    <Nav />
    <Route path={['/meal/:id', '/']}>
      <Home />
    </Route>
  </div>
);

export default App;
