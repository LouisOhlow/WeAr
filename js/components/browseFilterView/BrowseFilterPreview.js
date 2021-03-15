import React from 'react';
import {
  View, StyleSheet, Image, FlatList, Text,
} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { setFilterNode, setSelectedObjects } from '../../actions/filter';
import filterObjects from '../../res/filters';
import COLORS from '../../res/colors';
import SCREENS from '../../navigation/navigationScreens';
import { windowSize } from '../../utils/style/wheelSectionSizes';
import setupAnimation from '../../utils/ar/ARSetup';
import alert from '../../utils/alert/Alert';

/**
 * displays the list of all FilterNodes
 */
function BrowseFilterPreview(props) {
  /**
   * is called when scrolling
   * checks if the wheel stopped and then sets the chosen filter in redux state
   * @param {object} event the scrollevent
   */
  function handleScroll(index) {
    props.setSelectedNode(filterObjects[index].node);
    const filter = {
      selectedNode: filterObjects[index].node,
      selectedIndex: props.filter.selectedIndex,
    };
    const { augments, media, materialIds } = setupAnimation(filter);
    props.setObjects(augments, media, materialIds);
  }

  return (
    <View style={styles.container}>
      <Swiper
        showsPagination
        index={0}
        horizontal
        onIndexChanged={(index) => { handleScroll(index); }}
      >
        {filterObjects.map(() => (
          <View style={styles.shirt2} />))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '55%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  position: {
    bottom: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  preview: {
    width: '50%',
    height: '100%',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  shirt: {
    width: windowSize,
    height: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  shirt2: {
    width: windowSize,
    height: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 255, 0, 0)',
  },
  active: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    margin: 5,
    marginBottom: 8,
  },
  notactive: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: COLORS.grey,
    margin: 5,
    marginBottom: 8,
  },
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedNode: (node) => dispatch(setFilterNode(node)),
  setObjects:
    (augments, media, materialIds) => dispatch(setSelectedObjects(augments, media, materialIds)),
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseFilterPreview);
