import React from 'react';
import renderer from 'react-test-renderer';
import BrowseHeader from '../../../js/components/browseFilterView/BrowseHeader';

test('snapshot testing the browse header', () => {
        const tree = renderer
          .create(<BrowseHeader navigate={() => {}} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
