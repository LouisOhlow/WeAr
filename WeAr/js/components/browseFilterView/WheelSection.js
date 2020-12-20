import React from 'react';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import WheelBubble from './WheelBubble';
import { connect } from 'react-redux';
import { setFilterIndex } from '../../actions/filter';


class WheelSection extends React.Component {
  constructor() {
    super();
    this.state = ({
      scrollPos: 0,
    });
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
    const { scrollPos } = this.state;
    const tempList = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'add',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'BASIC',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa9f63',
        title: 'Filter',
      },
      {
        id: '58694a0f-3da1-471f-bd96-15571e9d73',
        title: 'end',
      },
    ];

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

export default connect(null, mapDispatchToProps)(WheelSection);
