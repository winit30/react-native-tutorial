import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';

import Routes from './components/Routes';

class Main extends Component<{}> {
  render() {
    let { isLoggedIn } = this.props.createUser;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Routes isLoggedIn={isLoggedIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  createUser: state.authReducer.createUser,
});

export default connect(
  mapStateToProps,
  null
)(Main);
