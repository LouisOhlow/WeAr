import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import COLORS from '../../drawables/colors';
import { activeBubbleMargin, bubbleMargin } from './wheelBubbleSize';

/**
 * displays the filter buttons which lead to their edit view
 * and the add button through which a user can add a new filter
 * as well as handling their style logic
 */
function WheelBubble(props) {
  const {
    item, navigate, scrollPos, index,
  } = props;

  const showPlus = (item.id === 'add');
  const showText = !(item.id === 'end');
  const active = isActive(scrollPos, index);

  const bubbleStyle = getBubbleStyle(showText, active);
  const titleStyle = active ? styles.activeTitle : styles.nonActiveTitle;

  return (
    <View style={bubbleStyle}>
      {showPlus
        ? (
          <TouchableOpacity onPress={() => navigate(true)}>
            <Image
              style={styles.add}
              source={require('../../drawables/add_button.png')}
            />
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity onPress={() => navigate(false)}>
            {showText && <Text style={titleStyle}>{item.id}</Text>}
          </TouchableOpacity>
        )}

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
  || ((scrollPos - (index - 1) * (60 + (bubbleMargin * 2) - 100))) / (index - 1) === 100;
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
