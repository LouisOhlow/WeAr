import React from 'react';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import WheelBubble from './WheelBubble';
import { setFilterIndex } from '../../actions/filter';
import { getFiltersByNode } from '../../data/db/dataController';
import { openRealm } from '../../data/db/realmController';

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
  }

  /**
   * fetches the available filter for a specific node
   * adds the 'add' button and a 'end' item to get the right wheel scroll behaviour
   * saves the list in the state
   */
  componentDidMount() {
    const { filter } = this.props;
    const realm = openRealm();
    const filterResults = getFiltersByNode(realm, filter.selectedNode);
    const filterList = [];

    filterList.push({ id: 'add' });
    for (const filter of filterResults) {
      filterList.push(filter);
    }
    filterList.push({ id: 'end' });

    this.setState({
      filterList,
    });
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
      this.props.setSelectedIndex(0);
    } else if ((scrollPos % 120) === 0) {
      this.props.setSelectedIndex(scrollPos / 120);
    }
  }

  /**
   * renders the filterlist as Wheelbubble components
   */
  render() {
    const { scrollPos, filterList } = this.state;

    const tempList = [...filterList];

    return (
      <View styles={styles.container}>
        <FlatList
          horizontal
          data={tempList}
          renderItem={
              ({ item, index }) => <WheelBubble scrollPos={scrollPos} item={item} index={index} />
            }
          keyExtractor={(item) => item.id}
          onScroll={this.handleScroll}
          snapToAlignment="center"
          snapToInterval={120}
          decelerationRate="normal"
          pagingEnabled
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
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(WheelSection);
