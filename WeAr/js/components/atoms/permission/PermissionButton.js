import React from 'react';
import { View } from 'react-native';
import AppButton from '../basics/AppButton';

export default function PermissionButton(props) {
  const { permissionStatus, checkPerm } = props;

  return (
    <View>
      {permissionStatus === 'blocked'
        ? <AppButton title="GO TO SETTINGS!" onPress={() => {}} />
        : <AppButton title="GOT IT!" onPress={() => { checkPerm(); }} /> }
    </View>
  );
}
