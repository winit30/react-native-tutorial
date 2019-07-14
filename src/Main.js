import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

import Routes from './components/Routes';

class Main extends Component<{}> {

	render() {
    const {createUser} = this.props;
    console.log(this.props.createUser);
		return(
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes isLoggedIn={this.props.createUser.isLoggedIn} />
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

mapStateToProps = state => ({
    createUser: state.authReducer.createUser
})

export default connect(mapStateToProps, null)(Main)
