import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';

/**
 * displays the filter buttons which lead to their edit view
 * and the add button through which a user can add a new filter
 * as well as handling their style logic
 */
export default function WheelBubble(props) {
  const {
    item, onPress, scrollPos, index,
  } = props;

  const showPlus = (item.id === 'add');
  const showText = !(item.id === 'end');
  const active = isActive(scrollPos, index);

  const bubbleStyle = getBubbleStyle(showText, active);
  const titleStyle = active ? styles.activeTitle : styles.nonActiveTitle;

  return (
    <View style={bubbleStyle}>
      <TouchableOpacity onPress={onPress}>
        {showText && (!showPlus) && <Text style={titleStyle}>{item.id}</Text>}
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

/**
 * to check if the bubble is active/selected
 *
 * @param {number} scrollPos the current scrollposition of the bubble list
 * @param {number} index the bubbles index in the list
 */
function isActive(scrollPos, index) {
  return (scrollPos === 0 && index === 1)
  || ((scrollPos - (index - 1) * 20)) / (index - 1) === 100;
}

/**
 * returns the style on following conditions:
 * end style which displays nothing, just to allow the user to keep scrolling for the last item
 * the active green bubble which positions in the middle of the wheel
 * otherwise a smaller non-active bubble with a grey outline
 *
 * @param {boolean} showText should the text be shown in the bubble
 * @param {boolean} active ist this the active bubble
 */
function getBubbleStyle(showText, active) {
  if (!showText) {
    return styles.end;
  }
  if (active) {
    return styles.active;
  }
  return styles.nonActive;
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
