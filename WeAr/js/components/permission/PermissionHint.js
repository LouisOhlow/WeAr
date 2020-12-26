import React from 'react';
import { StyleSheet, View } from 'react-native';
import PermissionButton from './PermissionButton';
import PermissionText from './PermissionText';

export default function PermissionHint(props) {
  const { permissionStatus, checkPerm } = props;

  return (
    <View style={styles.permissionView}>
      <View style={styles.permissionHint}>
        <PermissionText />
        <PermissionButton
          permissionStatus={permissionStatus}
          checkPerm={checkPerm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  permissionView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  permissionHint: {
    height: 159,
    width: 259,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
