import React from 'react';
import { View, Text } from 'react-native';
import TextStyles from './TextStyle';

/**
 * small Text style
 *
 * @param {string} text the text to be shown
 */
export default function Headline3(props) {
  const { text } = props;
  return (
    <View>
      <Text style={TextStyles.small}>
        { text }
      </Text>
    </View>
  );
}
