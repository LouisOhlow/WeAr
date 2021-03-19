import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { setFilterIndex } from '../../actions/filter';
import COLORS from '../../res/colors';
import SettingsFooter from './SettingsFooter';
import SettingsHeader from './SettingsHeader';

/**
 * contains the settings for the flower filter
 */
function EditFilterContainer(props) {
  const newFilter = true; 

  return (
    <View>
      <SettingsHeader />
      <View style={styles.body} />
      <SettingsFooter newFilter={newFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '40%',
    width: '100%',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIndex: (index) => dispatch(setFilterIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFilterContainer);
