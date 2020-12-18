import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

export default function WheelBubble(props) {
  const {
    item, onPress, scrollPos, index,
  } = props;
  const showText = !(item.title === 'end');

  return (
    <View style={getBubbleStyle(scrollPos, index, item.title)}>
      <TouchableOpacity onPress={onPress}>
        {showText && <Text style={styles.title}>{item.title}</Text>}
      </TouchableOpacity>
    </View>
  );
}

function getBubbleStyle(scrollPos, index, title) {
  if (title === 'end') {
    return styles.end;
  }
  if (
    (scrollPos === 0 && index === 1)
      || ((scrollPos - (index - 1) * 20)) / (index - 1) === 100) {
    return styles.active;
  }
  return styles.nonActive;
}

const styles = StyleSheet.create({
  nonActive: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
  },
  active: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'green',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  end: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
});
