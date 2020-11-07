import React from 'react';
import { View, Text } from 'react-native';
import TextStyles from './TextStyle';

export default function Headline1(props) {
  const { text } = props;
  return (
    <View>
      <Text style={TextStyles.basic}>
        { text }
      </Text>
    </View>
  );
}
