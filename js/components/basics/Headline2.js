import React from 'react';
import { View, Text } from 'react-native';
import TextStyles from './TextStyle';

/**
 * basic Headline style
 *
 * @param {string} text the text to be shown
 */
export default function Headline2(props) {
  const { text } = props;
  return (
    <View>
      <Text style={TextStyles.header}>
        { text }
      </Text>
    </View>
  );
}
