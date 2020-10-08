import 'react-native';
import SplashScreen from 'react-native-splash-screen';
import render from 'react-test-renderer';
import React from 'react';
import App from '../App';

jest.mock('react-native-splash-screen', () => ({
  SplashScreen: jest.fn(),
  hide: jest.fn(),
  show: jest.fn()
}));

function setup() {
  const result = render.create(
    <App />
  );

  return result;
}

test('show and hide splash screen on start', () => {
  SplashScreen.hide.mockReturnValue(true);
  SplashScreen.show.mockReturnValue('SplashScreen shown');

  setup();

  expect(SplashScreen.hide).toBeCalled();
  expect(SplashScreen.show).not.toBeCalled();
});