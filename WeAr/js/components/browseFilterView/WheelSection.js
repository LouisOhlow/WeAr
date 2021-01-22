import React from 'react';
import {
  View, StyleSheet, FlatList, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import WheelBubble from './WheelBubble';
import { setFilterIndex } from '../../actions/filter';
import { getFiltersByNode } from '../../data/db/dataController';
import {
  setFlowerColor, setFlowerRatio, setFlowerVideo, addFlowerRotation,
} from '../../actions/flower';
import { getFlowercolorByIndex } from '../../data/db/flower/colorDataController';
import { activeBubblePos, bubbleMargin } from '../../utils/style/wheelSectionSizes';
import { getVideoDataByIndex } from '../../data/db/flower/videoDataController';
import SCREENS from '../../navigation/navigationScreens';
import { getHeartcolorByIndex } from '../../data/db/heart/heartColorController';
import { getHeartSizeByIndex } from '../../data/db/heart/heartSizeController';
import { setHeartColor, setHeartSize } from '../../actions/heart';

/**
 * displays and manages the filter list
 * each listitem is represented as a bubble
 * the list is sticky and autoscrolling
 */
class WheelSection extends React.Component {
  constructor() {
    super();
    this.state = ({
      scrollPos: 0,
      filterList: [],
    });

    this.flatListRef = React.createRef();
  }

  /**
   * fetches the available filter for a specific node
   * adds the 'add' button and a 'end' item to get the right wheel scroll behaviour
   * saves the list in the state
   */
  componentDidMount() {
    const { navigation } = this.props;
    const { filter } = this.props;

    navigation.addListener(
      'willFocus',
      () => {
        this.updateSelection(filter.selectedIndex);
        this.scrollToIndex();
      },
    );
    navigation.navigate(SCREENS.camera);
  }

  /**
   * loading the filter list
   * is called when browse filter view gets in focus
   */
  loadList = () => {
    const { filter } = this.props;
    const filterResults = getFiltersByNode(filter.selectedNode);
    const filterList = [];

    filterList.push({ id: 'add' });
    for (let i = 0; i < filterResults.length; i += 1) {
      filterList.push({ id: `${i}`, index: i });
    }
    filterList.push({ id: 'end' });

    return filterList;
  }

  /**
   * is called when scrolling
   * checks if the wheel stopped and then sets the chosen filter in redux state
   * @param {object} event the scrollevent
   */
  handleScroll = (event) => {
    const scrollPos = event.nativeEvent.contentOffset.x;
    this.setState({
      scrollPos,
    });
    if (scrollPos === 0) {
      const index = 0;
      this.updateSelection(index);
    } else if ((scrollPos % activeBubblePos) < 10) {
      const index = Math.round(scrollPos / activeBubblePos);
      this.updateSelection(index);
    }
  }

  /**
   * sets the chosen data state depending on which filter/index is chosen
   *
   * @param {number} index the chosen index
   */
  updateSelection = (index) => {
    const { filter } = this.props;
    this.props.setSelectedIndex(index);

    switch (filter.selectedNode) {
      case SCREENS.flower:
        const videoData = getVideoDataByIndex(index);
        const colors = getFlowercolorByIndex(index);
        this.props.setFlowerVideo(videoData.src);
        this.props.setFlowerRatio(videoData.height, videoData.width);
        this.props.addFlowerRotation(videoData.rotation);
        this.props.setFlowerColors(colors.primaryColor, colors.secondaryColor);
        break;
      case SCREENS.heart:
        const color = getHeartcolorByIndex(index);
        const size = getHeartSizeByIndex(index);
        this.props.setHeartColor(color);
        this.props.setHeartSize(size);
        break;
      default:
        break;
    }
  }

  /**
   * scrolls the bubblewheel to the current selected Index
   * used to scroll one index down after deleting a filter setting
   */
  scrollToIndex() {
    const { filter } = this.props;
    const scrollTo = filter.selectedIndex * activeBubblePos;
    this.flatListRef.scrollToOffset({ animated: true, offset: scrollTo });
  }

  /**
   * renders the filterlist as Wheelbubble components
   */
  render() {
    const { scrollPos } = this.state;
    const tempList = [...this.loadList()];

    return (
      <View styles={styles.container}>
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          horizontal
          data={tempList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onScroll={this.handleScroll}
          snapToAlignment="center"
          snapToInterval={60 + bubbleMargin * 2}
          decelerationRate="normal"
          pagingEnabled
          renderItem={({ item, index }) => (
            <WheelBubble
              navigate={this.props.navigate}
              scrollPos={scrollPos}
              item={item}
              index={index}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '50%',
  },
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIndex: (index) => dispatch(setFilterIndex(index)),
  setFlowerColors:
    (primaryColor, secondaryColor) => dispatch(setFlowerColor(primaryColor, secondaryColor)),
  setFlowerVideo: (src) => dispatch(setFlowerVideo(src)),
  setFlowerRatio: (height, width) => dispatch(setFlowerRatio(height, width)),
  addFlowerRotation: (rotation) => dispatch(addFlowerRotation(rotation)),
  setHeartColor: (color) => dispatch(setHeartColor(color)),
  setHeartSize: (size) => dispatch(setHeartSize(size)),
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(WheelSection);
