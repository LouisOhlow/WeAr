import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../drawables/colors';
import Headline1 from '../basics/Headline1';
import SettingsNavigationButton from '../navigation/SettingsNavigationButton';

function SettingsHeader(props) {
  const {
    onPress, buttonType, title, style, goBack,
  } = props;

  return (
    <View style={style}>
      <View style={styles.buttons}>
        <SettingsNavigationButton buttonType="back" onPress={() => goBack()} />
        {(buttonType !== 'none') && <SettingsNavigationButton buttonType={buttonType} onPress={() => onPress()} />}
      </View>
      <Headline1 text={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: COLORS.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SettingsHeader;

SettingsHeader.defaultProps = {
  style: styles.container,
};
