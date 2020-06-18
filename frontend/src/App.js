import React, { Fragment } from 'react';

import './App.css';
import Aside from './components/Layout/Aside';
import Header from './components/Layout/Header'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import {Layout} from 'antd'
import Main from './pages/Main';
import Attack from './pages/Attack'
import Report from './pages/Report'
import Setting from './pages/Setting'
import Target from './pages/Target';

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Layout className='cl-layout'>
            <Aside />
            <Layout>
              <Header />
              <Route exact path='/' component={Main}/>
              <Route exact path='/attack' component={Attack}/>
              <Route exact path='/report' component={Report}/>
              <Route exact path='/setting' component={Setting}/>
              <Route exact path='/target' component={Target}/>
            </Layout>
          </Layout >
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
