import { Alert } from 'react-native';

/**
 * simple alert to be printed on screen
 *
 * @param {string} text the text to be printed
 */
const alert = (text) => {
  Alert.alert(
    `${text}`,
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () => Alert.alert(
        'This alert was dismissed by tapping outside of the alert dialog.',
      ),
    },
  );
};

export default alert;
