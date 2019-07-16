import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from "../pages/Profile";

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Scene>
							<Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
								<Scene key="login" component={Login} initial={true} />
								<Scene key="signup" component={Signup} title="Register" />
							</Scene>
							<Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
								<Scene key="profile" component={Profile} />
							</Scene>
					</Scene>
			 </Router>
			)
	}
}
