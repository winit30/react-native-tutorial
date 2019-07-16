import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";

import Logo from '../components/Logo';
import Form from '../components/Form';
import InputText from "../components/InputText";
import {createNewUser} from "../actions/auth.actions";
import Loader from "../components/Loader";
import {ErrorUtils} from "../utils/auth.utils";

import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont: {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  errorText: {
      color: "#ffffff",
      fontSize:14,
      paddingHorizontal:16,
      paddingBottom: 8
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  }
});

class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

  createNewUser = async (values) => {
      try {
          const response =  await this.props.dispatch(createNewUser(values));
          if (!response.success) {
              throw response;
          }
      } catch (error) {
          const newError = new ErrorUtils(error, "Signup Error");
          newError.showAlert();
      }
  }

  onSubmit = (values) => {
      this.createNewUser(values);
  }

  renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
            {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
  }

	render() {
    const { handleSubmit, createUser} = this.props;
		return(
			<View style={styles.container}>
        {createUser.isLoading && <Loader />}
				<Logo/>
        <Field
            name="name"
            placeholder="Name"
            component={this.renderTextInput} />
        <Field
            name="email"
            placeholder="Email"
            component={this.renderTextInput} />
        <Field
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            component={this.renderTextInput} />
        <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}

const validate = (values) => {
    const errors = {};
    if(!values.name) {
        errors.name = "Name is required"
    }
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.password) {
        errors.password = "Name is required"
    }
    return errors;
};

mapStateToProps = (state) => ({
    createUser: state.authReducer.createUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "register",
    validate
  })
)(Signup);
