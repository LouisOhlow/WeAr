import React from 'react';
import renderer from 'react-test-renderer';
import NavigationButton from '../../../js/components/navigation/NavigationButton';

describe('NavigationButton', () => {

    it('snapshot testing the down Navigationbutton', () => {
        const tree = renderer
          .create(<NavigationButton onPress={() => {}} direction={'down'}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('snapshot testing the up Navigationbutton', () => {
        const tree = renderer
          .create(<NavigationButton onPress={() => {}} direction={'up'}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
  });
  