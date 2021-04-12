import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';
import { setColor } from '../../actions/filter';
import { getSelectedFilter } from '../../db/dataController';
import { updateFilterColorByNodeAndIndex } from '../../db/PUT/filter';
import COLORS from '../../res/colors';
import alert from '../../utils/alert/Alert';
import NavigationButton from '../navigation/NavigationButton';
import Picker from './Picker';

class SettingsHeader extends React.Component {
  getBoxStyle = () => {
    const { filter } = this.props;
    const selFilter = getSelectedFilter('metal', filter.selectedIndex);
    const box = {
      backgroundColor: `${selFilter.color}88`,
      height: 40,
      width: 40,
      borderRadius: 50,
    };
    return box;
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.navArrow}>
            <NavigationButton direction="up" onPress={() => navigation.scrollBy(-1)} />
          </View>
          <View style={styles.colorContainer}>
            <View style={this.getBoxStyle()} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps)(SettingsHeader);

const styles = StyleSheet.create({
  header: {
    height: '25%',
    width: '100%',
  },
  navArrow: {
    height: '30%',
    width: '30%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  colorContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.invisible,
    borderColor: COLORS.neutral,
    borderWidth: 2,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  box: {
    backgroundColor: 'rgba(250, 100, 200, 0.5)',
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  pickerContainer: {
    position: 'absolute',
    top: 50,
    height: '200%',
    width: '100%',
  },
});
