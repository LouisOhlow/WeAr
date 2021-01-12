import React from 'react';
import {
  View, StyleSheet, Image, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { setFilterNode } from '../../actions/filter';
import filterObjects from '../../data/objects/filters';
import COLORS from '../../drawables/colors';
import SCREENS from '../../navigation/navigationScreens';
import { windowSize } from '../../utils/style/wheelSectionSizes';

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
    } else if ((scrollPos % windowSize) === 0) {
      const index = scrollPos / windowSize;
      props.setSelectedNode(filterObjects[index].node);
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
            <Image style={styles.shirt} source={item.image} key={item.node} />
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
    backgroundColor: COLORS.background,
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
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseFilterPreview);
