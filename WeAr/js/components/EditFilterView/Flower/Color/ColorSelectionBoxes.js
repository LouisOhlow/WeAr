import React from 'react';
import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native';
import COLORS from '../../../../drawables/colors';

export default class ColorSelectionBoxes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colors}>
          <TouchableOpacity style={styles.box} onPress={() => this.props.openPicker() } />
          <TouchableOpacity style={styles.box} onPress={() => this.props.openPicker() } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  colors: {
    height: '30%',
    width: '80%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: COLORS.action,
    borderColor: COLORS.neutral,
    borderWidth: 3,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
