import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import COLORS from '../../res/colors';
import Headline1 from '../basics/Headline1';
import SettingsFooter from './SettingsFooter';
import SettingsHeader from './SettingsHeader';

/**
 * contains the settings for the flower filter
 */
function EditFilterContainer({ navigation, controlScroll, basicSelected }) {
  const newFilter = true;

  return (
    <View>
      {basicSelected
        ? <View style={styles.text}>
            <Headline1 text="THE BASIC FILTER CANNOT BE EDITED"/>
          </View>
        : (
          <>
            <SettingsHeader navigation={navigation} controlScroll={controlScroll} />
            <View style={styles.body} />
            <SettingsFooter
              newFilter={newFilter}
              navigation={navigation}
              controlScroll={controlScroll}
            />
          </>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '40%',
    width: '100%',
    justifyContent: 'space-around',
  },
  text: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.semiblack,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default EditFilterContainer;
