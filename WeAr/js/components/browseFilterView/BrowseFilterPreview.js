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
import NavigationButton from '../navigation/NavigationButton';

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
      <View style={styles.button}>
        <NavigationButton direction="right" />
      </View>
      <View style={styles.preview}>
        <FlatList
          horizontal
          data={filterObjects}
          keyExtractor={(item) => item.id}
          onScroll={(event) => handleScroll(event)}
          snapToAlignment="center"
          snapToInterval={windowSize}
          decelerationRate="fast"
          pagingEnabled
          renderItem={({ item }) => (
            <Image style={styles.shirt} source={item.image} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    backgroundColor: COLORS.background,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  preview: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  shirt: {
    width: windowSize,
    height: '100%',
    alignSelf: 'center',
  },
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedNode: (run) => dispatch(setFilterNode(run)),
});

export default connect(null, mapDispatchToProps)(BrowseFilterPreview);
