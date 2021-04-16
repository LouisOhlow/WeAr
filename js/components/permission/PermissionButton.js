import React from 'react';
import { Linking, View } from 'react-native';
import AppButton from '../basics/AppButton';

export default function PermissionButton(props) {
  const { permissionStatus, checkPerm } = props;

  return (
    <View>
      {permissionStatus === 'blocked'
        ? <AppButton title="SETTINGS" onPress={() => { Linking.openURL('app-settings:'); }} />
        : <AppButton title="GOT IT!" onPress={() => { checkPerm(); }} /> }
    </View>
  );
}
