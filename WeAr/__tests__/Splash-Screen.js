import SplashScreen from 'react-native-splash-screen';
import React from 'react';
import render from 'react-test-renderer';
import App from '../App';

jest.mock('react-native-splash-screen', () => ({
  SplashScreen: jest.fn(),
  hide: jest.fn(),
  show: jest.fn()
}));

jest.mock('react-viro', () => ({
  ViroARSceneNavigator: jest.fn()
}));

jest.mock('../js/components/molecules/ar/ARContainer');
jest.mock('../js/components/molecules/permission/PermissionContainer');

function setup() {
  const result = render.create(
    <App />
  );
  return result;
}

test('show and hide splash screen on start', () => {
  setup();

  expect(SplashScreen.hide).toBeCalled();
  expect(SplashScreen.show).not.toBeCalled();
});