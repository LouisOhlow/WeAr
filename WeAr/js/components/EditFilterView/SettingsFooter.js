import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../drawables/colors';
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
    backgroundColor: COLORS.background,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 150,
  },
});

export default SettingsFooter;
