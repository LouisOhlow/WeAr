import React from 'react';
import renderer from 'react-test-renderer';
import VideoTimer from '../../js/components/atoms/camera/VideoTimer';

describe('Screenshotbutton', () => {

    it('Snapshot testing the timer', () => {
        const tree = renderer
          .create(<VideoTimer time={'12345'}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
  });
  