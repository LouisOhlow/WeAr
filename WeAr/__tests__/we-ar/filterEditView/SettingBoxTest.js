import React from 'react';
import renderer from 'react-test-renderer';
import SettingsBox from '../../../js/components/EditFilterView/SettingsBox';

    test('snapshot testing the setting box', () => {
        const tree = renderer
          .create( 
          <SettingsBox 
            navigate={() => {}} 
            title="CHANGE TEST COLOR" 
            image={require('../../../js/drawables/colored_avocado.png')} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
