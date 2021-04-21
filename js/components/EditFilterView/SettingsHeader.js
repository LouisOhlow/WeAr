import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';
import { getSelectedFilter } from '../../db/dataController';
import COLORS from '../../res/colors';
import Headline2 from '../basics/Headline2';
import NavigationButton from '../navigation/NavigationButton';

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
        <View style={styles.navArrow}>
          <NavigationButton direction="up" onPress={() => navigation.scrollBy(-1)} />
        </View>
        <View style={styles.headline}>
          <Headline2 text="EDIT YOUR FILTER" />
        </View>
        <View style={styles.colorContainer}>
          <View style={this.getBoxStyle()} />
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
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.invisible,
    top: 80,
  },
  navArrow: {
    height: '15%',
    width: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  colorContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.neutral,
    borderWidth: 2,
    marginTop: 20,
  },
});
