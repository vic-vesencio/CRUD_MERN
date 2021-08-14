import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Todos from './MainPage/Todos';

const App = (props) => {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Todos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
