import {Alert} from 'react-native';

export class ErrorUtils {
    constructor(error, title = "") {
        this.errorTitle = title;
        this.errorText = "Something went wrong";
        if (error.message) {
            this.errorText = error.message
        } else if (error.responseBody && error.responseBody.message) {
            this.errorText = error.responseBody.message;
        } else if (error.responseBody) {
            this.errorText = error.responseBody;
        }
    }

    showAlert() {
        Alert.alert(
          this.errorTitle,
          this.errorText,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]
        );
    }
}
