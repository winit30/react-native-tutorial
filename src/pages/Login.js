import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { HelperText } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';
import InputText from '../components/InputText';

import { loginUser } from '../actions/auth.actions';

class Login extends Component<{}> {
  signup() {
    Actions.signup();
  }

  loginUser = values => {
    let { loginUser } = this.props;
    loginUser(values);
  };

  onSubmit = values => {
    this.loginUser(values);
  };

  renderTextInput = field => {
    const {
      meta: { touched, error },
      label,
      secureTextEntry,
      iconPassword,
      maxLength,
      keyboardType,
      placeholder,
      input: { onChange, ...restInput },
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          iconPassword={iconPassword}
          label={label}
          {...restInput}
        />
        {touched && error && (
          <HelperText type="error" visible={true}>
            {error}
          </HelperText>
        )}
      </View>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.inputContainerStyle}>
          <Field
            name="email"
            label="Email"
            placeholder="Email@host.com"
            component={this.renderTextInput}
          />
          <Field
            name="password"
            label="Password"
            placeholder="***********"
            secureTextEntry={true}
            iconPassword={true}
            component={this.renderTextInput}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(this.onSubmit)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Do not have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  inputContainerStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 5,
    paddingBottom: 10,
    borderRadius: 5,
  },
});

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

const mapStateToProps = state => ({
  //createUser: state.authReducer.createUser,
});

const mapDispatchToProps = dispatch => ({
  loginUser: values => dispatch(loginUser(values)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'login',
    validate,
  })
)(Login);
