import React from 'react';
import renderer from 'react-test-renderer';
import ScreenshotButton from '../../js/components/atoms/camera/ScreenshotButton';

describe('Screenshotbutton', () => {

    it('snapshot testing the screenshotbutton', () => {
        const tree = renderer
          .create(<ScreenshotButton />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
  });
  