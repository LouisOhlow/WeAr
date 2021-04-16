/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Platform } from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import alert from '../alert/Alert';

const PLATFORM_MICROPHONE_PERMISSIONS = {
  ios: PERMISSIONS.IOS.MICROPHONE,
  android: PERMISSIONS.ANDROID.RECORD_AUDIO,
};

const PLATFORM_CAMERA_PERMISSIONS = {
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
};

const PLATFORM_MEDIA_PERMISSIONS = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

const REQUEST_PERMISSION_TYPE = {
  microphone: PLATFORM_MICROPHONE_PERMISSIONS,
  camera: PLATFORM_CAMERA_PERMISSIONS,
  media: PLATFORM_MEDIA_PERMISSIONS,
};

const PERMISSION_TYPE = {
  microphone: 'microphone',
  camera: 'camera',
  media: 'media',
};

class PermissionHandler {
  checkPermissionStatus = async (types) => {
    let denied = false;
    let blocked = false;

    for (const type of types) {
      const permission = PERMISSIONS.IOS.MICROPHONE;
      if (permission) {
        const result = [];
        await check(permission).then((r) => {
          result.push(r);
          alert(r);
        });
        //alert(result[0]);

        if (result === RESULTS.BLOCKED) blocked = true;
        if (result === RESULTS.DENIED) denied = true;
      }
    }
    if (blocked) return 'blocked';
    if (denied) return 'denied';
    return 'granted';
  }

  requestMultiple = async (types) => {
    for (const type of types) {
      const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS];
      if (permission) {
        await request(permission);
      }
    }
  }
}

const Permission = new PermissionHandler();
export { Permission, PERMISSION_TYPE };
