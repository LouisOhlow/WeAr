import React from 'react';
import renderer from 'react-test-renderer';
import SettingsBox from '../../../js/components/EditFilterView/SettingsBox';
import { IMAGES } from '../../../js/res/drawables';

    test('snapshot testing the setting box', () => {
        const tree = renderer
          .create( 
          <SettingsBox 
            navigate={() => {}} 
            title="CHANGE TEST COLOR" 
            image={IMAGES.avocadoSetting} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
