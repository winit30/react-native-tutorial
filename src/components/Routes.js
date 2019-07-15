import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';

export default class Routes extends Component<{}> {
  render() {
    let { isLoggedIn } = this.props;
    return (
      <Router>
        <Scene>
          <Scene key="root" hideNavBar={true} initial={!isLoggedIn}>
            <Scene key="login" component={Login} />
            <Scene
              key="signup"
              component={Signup}
              title="Register"
              initial={true}
            />
          </Scene>
          <Scene key="app" hideNavBar={true} initial={isLoggedIn}>
            <Scene key="profile" component={Profile} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
