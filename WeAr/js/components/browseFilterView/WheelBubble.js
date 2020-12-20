import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';

export default function WheelBubble(props) {
  const {
    item, onPress, scrollPos, index,
  } = props;

  const showPlus = (item.title === 'add');
  const showText = !(item.title === 'end');

  const bubbleStyle = getBubbleStyle(showText, scrollPos, index);
  const titleStyle = getTextStyle(showText, scrollPos, index);

  return (
    <View style={bubbleStyle}>
      <TouchableOpacity onPress={onPress}>
        {showText && (!showPlus) && <Text style={titleStyle}>{item.title}</Text>}
        {showPlus && (
        <Image
          style={styles.add}
          source={require('../../drawables/add_button.png')}
        />
        )}
      </TouchableOpacity>
    </View>
  );
}

function getBubbleStyle(showText, scrollPos, index) {
  if (!showText) {
    return styles.end;
  }
  if ((scrollPos === 0 && index === 1)
    || ((scrollPos - (index - 1) * 20)) / (index - 1) === 100) {
    return styles.active;
  }
  return styles.nonActive;
}

function getTextStyle(showText, scrollPos, index) {
  if (!showText) {
    return styles.end;
  }
  if ((scrollPos === 0 && index === 1)
    || ((scrollPos - (index - 1) * 20)) / (index - 1) === 100) {
    return styles.activeTitle;
  }
  return styles.nonActiveTitle;
}

const styles = StyleSheet.create({
  nonActive: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
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
  activeTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nonActiveTitle: {
    color: 'white',
    fontSize: 14,
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
  add: {
    height: 32,
    width: 32,
    resizeMode: 'stretch',
  },
});
