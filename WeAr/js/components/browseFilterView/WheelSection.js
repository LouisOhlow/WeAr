import React from 'react';
import {
  View, Text, Button, StyleSheet, FlatList,
} from 'react-native';
import WheelBubble from './WheelBubble';

class WheelSection extends React.Component {
  constructor() {
    super();
    this.state = ({
      scrollPos: 0,
    });
  }

  handleScroll = (event) => {
    this.setState({
        scrollPos: event.nativeEvent.contentOffset.x
    })
   }

  render() {
    const { scrollPos } = this.state
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
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'FILTER1',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d73',
          title: 'FILTER2',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b345',
            title: 'PLUS',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6',
            title: 'BASIC',
          },
          {
            id: '58694a0f-3da1-471f-bd96-1571e29d72',
            title: 'FILTER1',
          },
          {
            id: '58694a0f-3da1-471f-bd96-15571e29d73',
            title: 'FILTER2',
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
          renderItem={({ item, index }) => <WheelBubble scrollPos={scrollPos} item={item} index={index} />}
          keyExtractor={(item) => item.id}
          onScroll={this.handleScroll}
          snapToAlignment={"center"}
          snapToInterval={120}
          decelerationRate={"normal"}
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

export default WheelSection;
