import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from './containers/login-form/index';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App()
{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </Router>

  );
}

export default App;
