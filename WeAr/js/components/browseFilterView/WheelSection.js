import React from 'react';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import WheelBubble from './WheelBubble';
import { connect } from 'react-redux';
import { setFilterIndex } from '../../actions/filter';
import { getFiltersByNode } from '../../data/db/dataController';
import { openRealm } from '../../data/db/realmController';


class WheelSection extends React.Component {
  constructor() {
    super();
    this.state = ({
      scrollPos: 0,
      filterList: []
    });
  }

  componentDidMount = () => {
    const { filter } = this.props
    const realm = openRealm();
    const filterResults = getFiltersByNode(realm, filter.selectedNode)
    filterList = []

    filterList.push({id: 'add'})
    for (let filter of filterResults) {
      filterList.push(filter)
    }
    filterList.push({id: 'end'})

    this.setState({
      filterList
    })
  }

  handleScroll = (event) => {
    const scrollPos = event.nativeEvent.contentOffset.x
    this.setState({
      scrollPos,
    });
    if(scrollPos === 0) {
      this.props.setSelectedIndex(0)
    }
    else if((scrollPos%120) === 0) {
      this.props.setSelectedIndex(scrollPos/120)
    }
  }

  render() {
    const { scrollPos, filterList } = this.state;

    const tempList = [...filterList]

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
  filter: state.filterRed.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(WheelSection);
