import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';

//页面
import LoginForm from '../page/login/indexcomponent';
import Home from '../page/home/indexcomponent';
import First from '../page/first/indexcomponent';

const browserHistory = require("history").createBrowserHistory();

class App extends React.Component {
  render() {
    let LayoutRouter = (
      <Home>
        <Switch>
          <Route  path="/first" component={First} />
          <Redirect exact from="/" to="/first"/> 
        </Switch>
      </Home>
    );
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </Router>
    )
  }
}

export default App;