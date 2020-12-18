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

  const style = getStyle(showText, scrollPos, index);

  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        {showText && (!showPlus) && <Text style={styles.title}>{item.title}</Text>}
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

function getStyle(showText, scrollPos, index) {
  if (!showText) {
    return styles.end;
  }
  if ((scrollPos === 0 && index === 1)
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
  add: {
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
});
