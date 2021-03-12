import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { setFilterIndex } from '../../actions/filter';

/**
 * contains the settings for each filter
 */
class SettingsContainer extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>Settingcontainer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    backgroundColor: 'rgba(255,0,0,0.5)',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIndex: (index) => dispatch(setFilterIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
