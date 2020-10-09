import React from 'react';
import { View, Linking } from 'react-native';
import AppButton from '../basics/AppButton';
import { openSettings } from 'react-native-permissions';

export default function PermissionButton(props) {
  const { permissionStatus, checkPerm } = props;

  return (
    <View>
      {permissionStatus === 'blocked'
        ? <AppButton title="GO TO SETTINGS!" onPress={() => { openSettings() }} />
        : <AppButton title="GOT IT!" onPress={() => { checkPerm(); }} /> }
    </View>
  );
}
