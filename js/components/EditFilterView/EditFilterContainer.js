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
        <View style={styles.header}/>
        <View style={styles.body} />
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: '25%',
    width: '100%',
    backgroundColor: 'rgba(100, 0, 0, 0.5)',
  },
  body: {
    height: '40%',
    width: '100%',
    backgroundColor: 'rgba(0, 100, 0, 0.5)',
    justifyContent: 'space-around',
  },
  footer: {
    height: '35%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 100, 0.5)',
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
