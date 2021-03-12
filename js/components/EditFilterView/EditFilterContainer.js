import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { setFilterIndex } from '../../actions/filter';
import COLORS from '../../res/colors';
import SettingsFooter from './SettingsFooter';
import SettingsHeader from './SettingsHeader';
import SettingsContainer from './SettingsContainer';

/**
 * contains the settings for the flower filter
 */
class EditFilterContainer extends React.Component {
  render() {
    const newFilter = true;

    return (
      <View>
        <SettingsHeader />
        <SettingsContainer />
        <SettingsFooter title={newFilter ? 'CREATE' : 'SAVE'} styling="apply" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: '60%',
    width: '100%',
    backgroundColor: COLORS.background,
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
