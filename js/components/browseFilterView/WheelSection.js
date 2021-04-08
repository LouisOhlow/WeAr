import React from 'react';
import {
  View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import WheelBubble from './WheelBubble';
import { setFilterIndex, setSelectedObjects } from '../../actions/filter';
import { getFiltersByNode } from '../../db/dataController';
import { activeBubblePos, bubbleMargin } from '../../utils/style/wheelSectionSizes';
import setupAnimation from '../../utils/ar/ARSetup';
import postFilter from '../../db/POST/filter';
import delay from '../../utils/delay/delay';
import alert from '../../utils/alert/Alert';

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
    });

    this.flatListRef = React.createRef();
  }

  componentDidUpdate() {
    const { filter, view } = this.props;
    if (view.index === 2) {
      const scrollTo = filter.selectedIndex * activeBubblePos;
      this.flatListRef.scrollToOffset({ animated: true, offset: scrollTo });
    }
  }

  /**
   * loading the filter list
   * is called when browse filter view gets in focus
   */
  loadList = () => {
    const { filter } = this.props;
    const filterResults = getFiltersByNode(filter.selectedNode);
    const filterList = [];

    filterList.push({ id: '-1', type: 'end' });
    for (let i = 0; i < filterResults.length; i += 1) {
      filterList.push({ id: `${i}`, index: i, color: filterResults[i].color });
    }
    if (filterList.length > 11) {
      filterList.push({ type: 'end', id: '-2' });
    } else {
      filterList.push({ type: 'add', id: '-3' });
    }

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
    } else if (((scrollPos / activeBubblePos) % 1) < 30 && scrollPos > 0) {
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

    const { augments, media, materialIds } = setupAnimation(filter);
    this.props.setObjects(augments, media, materialIds);
    this.props.setSelectedIndex(index);
  }

  addFilter = async () => {
    const { filter } = this.props;
    const newIndex = postFilter(filter);
    this.props.setSelectedIndex(newIndex);

    const scrollTo = newIndex * activeBubblePos;
    await delay(500);
    this.flatListRef.scrollToOffset({ animated: true, offset: scrollTo });
  }

  /**
   * scrolls the bubblewheel to the current selected Index
   * used to scroll one index down after deleting a filter setting
   */
  scrollToIndex() {
    const { filter } = this.props;
    const scrollTo = filter.selectedIndex * activeBubblePos;
    this.updateSelection(filter.selectedIndex);
    this.flatListRef.scrollToOffset({ animated: true, offset: scrollTo });
  }

  /**
   * renders the filterlist as Wheelbubble components
   */
  render() {
    const { scrollPos } = this.state;
    const tempList = [...this.loadList()];
    const { filter } = this.props;

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
              addFilter={this.addFilter}
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
  setObjects:
    (augments, media, materialIds) => dispatch(setSelectedObjects(augments, media, materialIds)),
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
  view: state.viewRed.view,
});

export default connect(mapStateToProps, mapDispatchToProps)(WheelSection);
