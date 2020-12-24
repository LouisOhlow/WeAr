import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../basics/AppButton';

function SettingsFooter(props) {
  const { navigate } = props;

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <AppButton onPress={() => navigate()} title="SAVE" styling="apply" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: '#222222',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 150,
  },
});

export default SettingsFooter;
