import React from 'react';
import { View } from 'react-native';
import { openSettings } from 'react-native-permissions';
import AppButton from '../basics/AppButton';

export default function PermissionButton(props) {
  const { permissionStatus, checkPerm } = props;

  return (
    <View>
      {permissionStatus === 'blocked'
        ? <AppButton title="GO TO SETTINGS!" onPress={() => { openSettings(); }} />
        : <AppButton title="GOT IT!" onPress={() => { checkPerm(); }} /> }
    </View>
  );
}
