import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import Login from './containers/login/login';
import Register from './containers/register/register';
// import Main from './containers/main/main';
import './assets/css/index.less';

import DashenInfo from './containers/dashen-info/dashen-info';
import LaobanInfo from "./containers/laoban-info/laoban-info";
import Dashenmain from "./containers/dashenmain/dashenmain";
import Laobanmain from "./containers/laobanmain/laobanmain";
import Tochat from './containers/tochat/tochat';
import Tochat2 from './containers/tochat/tochat2';

const rootDOM = document.getElementById('root');


ReactDOM.render(
   (<Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/laobanmaininfo' component={LaobanInfo}/>
        <Route path='/dashenmaininfo' component={DashenInfo}/>
        <Route path='/laobanmain' component={Laobanmain}/>
        <Route path='/dashenmain' component={Dashenmain}/>
        <Route path='/1' component={Tochat}/>
        <Route path='/2' component={Tochat2}/>
      </Switch>
   </HashRouter>
   </Provider>), rootDOM);
