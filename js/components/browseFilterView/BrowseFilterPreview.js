import React from 'react';
import {
  View, StyleSheet, Image, FlatList, Text, Alert,
} from 'react-native';
import { connect } from 'react-redux';
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
  function handleScroll(event) {
    const scrollPos = event.nativeEvent.contentOffset.x;
    if (scrollPos === 0) {
      props.setSelectedNode(SCREENS.flower);
      const filter = {
        selectedNode: SCREENS.flower,
        selectedIndex: props.filter.selectedIndex,
      };
      const { augments, media, materialIds } = setupAnimation(filter);
      props.setObjects(augments, media, materialIds);
    } else if ((scrollPos % windowSize) === 0) {
      const index = scrollPos / windowSize;
      props.setSelectedNode(filterObjects[index].node);
      const filter = {
        selectedNode: filterObjects[index].node,
        selectedIndex: props.filter.selectedIndex,
      };
      const { augments, media, materialIds } = setupAnimation(filter);
      props.setObjects(augments, media, materialIds);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.position}>
        <FlatList
          horizontal
          keyExtractor={(item) => item.node}
          data={[...filterObjects]}
          renderItem={({ item }) => (
            (props.filter.selectedNode === item.node)
              ? <View style={styles.active} />
              : <View style={styles.notactive} />
          )}
        />
      </View>
      <View style={styles.preview}>
        <FlatList
          horizontal
          data={filterObjects}
          keyExtractor={(item) => item.node}
          onScroll={handleScroll}
          snapToAlignment="center"
          snapToInterval={windowSize}
          decelerationRate="fast"
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Text style={styles.shirt}> hallo </Text>
          )}
        />
      </View>
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
    width: '100%',
    height: '90%',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  shirt: {
    width: windowSize,
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
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
