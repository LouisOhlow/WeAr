import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { getAugmentsByNode, getSettingsByNodeAndIndex } from '../../db/dataController';
import { BUTTONS } from '../../res/drawables';
import AppButton from '../basics/AppButton';
import IconButton from '../basics/IconButton';
import SettingNavigation from './SettingNavigation';
import SettingSwitch from './settings/SettingSwitch';
import { setAugments, setFilterIndex, setObjects, setSelectedObjects } from '../../actions/filter';
import setupAnimation from '../../utils/ar/ARSetup';
import { runAnimation } from '../../actions/animation';
import postFilter from '../../db/POST/filter';
import deleteFilter from '../../db/DELETE/filter';
import delay from '../../utils/delay/delay';

class SettingsFooter extends React.Component {
  constructor() {
    super();
    this.state = {
      settingIndex: 0,
    };
  }

  nextIndex = (index, maxIndex) => {
    if (index === (maxIndex - 1)) {
      this.setState({
        settingIndex: 0,
      });
    } else {
      this.setState({
        settingIndex: (index + 1),
      });
    }
  }

  lastIndex = (index, maxIndex) => {
    if (index === 0) {
      this.setState({
        settingIndex: (maxIndex - 1),
      });
    } else {
      this.setState({
        settingIndex: (index - 1),
      });
    }
  }

  reset = async () => {
    const { filter } = this.props;
    const { augments, media, materialIds } = setupAnimation(filter);
    this.props.setObjects(augments, media, materialIds);
  }

  save = () => {
    const { navigation, newFilter, filter } = this.props;
    if (newFilter) {
      postFilter(filter);
    } else {
      postFilter(filter);
    }
    navigation.scrollBy(-1);
  }

  delete = async () => {
    const { navigation, filter } = this.props;

    const deletedFilter = Object.create(filter);
    this.props.setIndex(filter.selectedIndex - 1);
    if (filter.selectedIndex > 1) {
      navigation.scrollBy(-1);
    }

    await delay(2000);
    deleteFilter(deletedFilter);
    this.props.setIndex(filter.selectedIndex - 1);
  }

  render() {
    const { newFilter, filter, navigation } = this.props;
    const { settingIndex } = this.state;
    const settings = getSettingsByNodeAndIndex(filter.selectedNode, filter.selectedIndex);
    const augments = getAugmentsByNode(filter.selectedNode, filter.selectedIndex);

    return (
      <View style={styles.container}>
        <View style={styles.setting}>
          <SettingSwitch setting={settings[settingIndex]} augments={augments} />
        </View>
        <SettingNavigation
          label={settings[settingIndex].label}
          nextIndex={() => { this.nextIndex(settingIndex, settings.length); }}
          lastIndex={() => { this.lastIndex(settingIndex, settings.length); }}
        />
        <View style={styles.buttonsection}>
          <IconButton source={BUTTONS.delete} onPress={() => this.delete()} />
          <View style={styles.save}>
            <AppButton title={newFilter ? 'CREATE' : 'SAVE'} styling="apply" onPress={() => this.save(newFilter)} />
          </View>
          <IconButton source={BUTTONS.reset} onPress={() => this.reset()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '35%',
    width: '100%',
    alignItems: 'center',
  },
  setting: {
    width: '100%',
    height: '35%',
  },
  buttonsection: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  save: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setAugments: (augments) => dispatch(setAugments(augments)),
  setObjects:
    (augments, media, materialIds) => dispatch(setSelectedObjects(augments, media, materialIds)),
  runAnimation: (run) => dispatch(runAnimation(run)),
  setIndex: (index) => dispatch(setFilterIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsFooter);
