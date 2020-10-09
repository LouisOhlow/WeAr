import renderer from 'react-test-renderer';
import React from 'react';
import PermissionHint from '../js/components/molecules/permission/PermissionHint';

jest.mock('react-native-permissions', () => ({
  PERMISSIONS: jest.fn()
}));

jest.mock('../js/utils/permission/Permission', () => ({
  Permission: { checkPermissionStatus: async () => 'granted' },
  PermissionHandler: jest.fn(),
  PERMISSION_TYPE: jest.requireActual()
}));

it('test PermissionHint Snapshot with denied permission', () => {
  const tree = renderer
    .create(<PermissionHint permissionStatus="denied" checkPerm={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('test PermissionHint Snapshot with blocked permission', () => {
  const tree = renderer
    .create(<PermissionHint permissionStatus="blocked" checkPerm={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
