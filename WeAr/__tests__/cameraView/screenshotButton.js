import React from 'react';
import renderer from 'react-test-renderer';
import ScreenshotButton from '../../js/components/atoms/camera/ScreenshotButton';

describe('Screenshotbutton', () => {

    it('test PermissionHint Snapshot with blocked permission', () => {
        const tree = renderer
          .create(<ScreenshotButton />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
  });
  