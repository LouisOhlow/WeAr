import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';

/**
 * displays the filter buttons which lead to their edit view
 * and the add button through which a user can add a new filter
 * as well as handling their style logic
 */
function WheelBubble(props) {
  const {
    item, navigate, scrollPos, index, filter,
  } = props;

  const showPlus = (item.id === 'add');
  const showText = !(item.id === 'end');
  const active = isActive(scrollPos, index);

  const bubbleStyle = getBubbleStyle(showText, active);
  const titleStyle = active ? styles.activeTitle : styles.nonActiveTitle;

  return (
    <View style={bubbleStyle}>
      <TouchableOpacity onPress={() => navigate('Flower')}>
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

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps)(WheelBubble);

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
