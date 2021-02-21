import React from 'react';
import renderer from 'react-test-renderer';
import SettingsBox from '../../../js/components/EditFilterView/SettingsBox';

describe('Snapshot tests of the settings header', () => {

    it('only with a back button', () => {
        const tree = renderer
          .create( 
          <SettingsBox 
            navigate={() => {}} 
            title="CHANGE TEST COLOR" 
            image={require('../../../js/drawables/colored_avocado.png')} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
  });
