import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import COLORS from '../../res/colors';
import { BUTTONS } from '../../res/drawables';
import { activeBubbleMargin, activeBubblePos, bubbleMargin } from '../../utils/style/wheelSectionSizes';

/**
 * displays the filter buttons which lead to their edit view
 * and the add button through which a user can add a new filter
 * as well as handling the bubble style logic
 */
function WheelBubble(props) {
  const {
    item, scrollPos, index,
  } = props;

  const showText = !(item.id === 'end');

  const active = isActive(scrollPos, index);

  const bubbleStyle = getBubbleStyle(showText, active);
  const titleStyle = active ? styles.activeTitle : styles.nonActiveTitle;

  if (index === 1) {
    return (
      <View style={bubbleStyle}>
        <Text style={titleStyle}>BASIC</Text>
      </View>
    );
  }

  switch (item.id) {
    case 'add':
      return (
        <View style={bubbleStyle}>
          <TouchableOpacity style={bubbleStyle} onPress={() => props.navigate(true)}>
            <Image
              style={styles.add}
              source={BUTTONS.add}
            />
          </TouchableOpacity>
        </View>
      );
    case 'end':
      return (
        <View style={bubbleStyle} />
      );
    default:
      return (
        <TouchableOpacity
          style={bubbleStyle}
          disabled={!active}
          onPress={() => props.navigate(false)}
        >
          <Text style={titleStyle}>{index}</Text>
        </TouchableOpacity>
      );
  }
}

/**
 * to check if the bubble is active/selected
 *
 * @param {number} scrollPos the current scrollposition of the bubble list
 * @param {number} index the bubbles index in the list
 */
function isActive(scrollPos, index) {
  if (scrollPos >= 0) {
    return (scrollPos === 0 && index === 1)
  || (((scrollPos - (index - 1) * (activeBubblePos - 100))) / (index - 1) >= 80
  && ((scrollPos - (index - 1) * (activeBubblePos - 100))) / (index - 1) <= 120);
  } return false;
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

export default WheelBubble;

const styles = StyleSheet.create({
  nonActive: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: bubbleMargin,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  active: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: activeBubbleMargin,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.confirm,
  },
  activeTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nonActiveTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  end: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: bubbleMargin,
  },
  add: {
    height: 32,
    width: 32,
    resizeMode: 'stretch',
  },
});
