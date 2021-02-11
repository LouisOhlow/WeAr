import React from 'react';
import { View } from 'react-native';

export default function PermissionContainer(props) {
  const { children } = props;
  return (
    <View>
      {children}
    </View>
  );
}
