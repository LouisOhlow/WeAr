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
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View style={styles.navArrow} />
            <View style={styles.filterColorId} />
          </View>
        </View>
        <View style={styles.body} />
        <View style={styles.footer}>
          <View style={styles.setting} />
          <View style={styles.menu} />
          <View style={styles.buttonsection} />
        </View>
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
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 100, 0.5)',
  },
  navArrow: {
    height: '30%',
    width: '30%',
    flex: 1,
    backgroundColor: 'rgba(0, 100, 100, 0.5)',
  },
  filterColorId: {
    height: '30%',
    width: '30%',
    flex: 1,
    backgroundColor: 'rgba(0, 255, 100, 0.5)',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 100, 100, 0.5)',
  },
  setting: {
    width: '100%',
    height: '35%',
    backgroundColor: 'rgba(255, 50, 50, 0.5)',
  },
  menu: {
    width: '100%',
    height: '20%',
    backgroundColor: 'rgba(150, 150, 150, 0.5)',
  },
  buttonsection: {
    width: '100%',
    height: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIndex: (index) => dispatch(setFilterIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFilterContainer);
