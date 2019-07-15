import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const propTypes = {
  mapElement: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  label: PropTypes.string,
};

const defaultProps = {
  mapElement: n => {},
  onSubmitEditing: () => {},
  onChangeText: () => {},
  value: '',
  placeholder: '',
  maxLength: 200,
  keyboardType: 'default',
  secureTextEntry: false,
  label: '',
};

const styles = StyleSheet.create({
  inputBox: {
    width: 300,
    //backgroundColor: 'rgba(255, 255,255,0.2)',
    //borderRadius: 25,
    //paddingHorizontal: 16,
    //fontSize: 16,
    //color: '#ffffff',
    //marginVertical: 10,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
});

class InputText extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
      vPwd: props.secureTextEntry,
    };
  }

  onChangeText = value => {
    this.setState(
      {
        value,
      },
      () => {
        this.props.onChangeText(value);
      }
    );
  };

  changePwdType = () => {
    this.setState(prevState => ({
      vPwd: !prevState.vPwd,
    }));
  };

  render() {
    let { value } = this.state;
    const {
      label,
      placeholder,
      secureTextEntry,
      iconPassword,
      keyboardType,
      maxLength,
      onSubmitEditing,
    } = this.props;
    const { vPwd } = this.state;
    let icEye = vPwd ? 'visibility-off' : 'visibility';

    return (
      <View>
        <TextInput
          style={styles.inputBox}
          placeholder={placeholder}
          secureTextEntry={vPwd}
          keyboardType={keyboardType}
          maxLength={maxLength}
          returnKeyType="next"
          value={value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={this.onChangeText}
          label={label}
          underlineColor="#fff"
          theme={{
            colors: {
              primary: '#f5a442',
              background: 'transparent',
              placeholder: '#fff',
            },
          }}
        />
        {secureTextEntry && iconPassword && (
          <Icon
            style={styles.icon}
            name={icEye}
            size={25}
            onPress={this.changePwdType}
          />
        )}
      </View>
    );
  }
}

InputText.defaultProps = defaultProps;
InputText.propTypes = propTypes;
export default InputText;
