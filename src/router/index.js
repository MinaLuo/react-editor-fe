import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';

//登录页面
import LoginForm from '../page/login/indexcomponent';
//总页面
import Home from '../page/home/indexcomponent';
//我的作品页面
import PageList from '../page/page-list/indexcomponent';
//我的模板
import MyTemplate from '../page/my-template/indexcomponent';
//我的数据
import PageData from '../page/page-data/indexcomponent';
//创意模板
import TemplateList from '../page/template-list/indexcomponent';

const browserHistory = require("history").createBrowserHistory();

class App extends React.Component {
  render() {
    let LayoutRouter = (
      <Home>
        <Switch>
          <Route  path="/loginForm" component={LoginForm} />
          <Redirect exact from="/" to="/LoginForm"/> 
          <Route  path="/pageList" component={PageList} />
          <Route  path="/myTemplate" component={MyTemplate} />
          <Route  path="/pageData" component={PageData} />
          <Route  path="/templateList" component={TemplateList} />
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