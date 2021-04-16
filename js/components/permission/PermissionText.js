import React from 'react';
import { View } from 'react-native';
import Headline1 from '../basics/Headline1';

export default function PermissionText() {
  return (
    <View>
      <Headline1 text="You need to accept all necessary permissions before you can use the app." />
    </View>
  );
}
