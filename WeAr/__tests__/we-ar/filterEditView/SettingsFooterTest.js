import React from 'react';
import renderer from 'react-test-renderer';
import SettingsFooter from '../../../js/components/EditFilterView/SettingsFooter';

describe('Snapshot tests of the settings footer', () => {

    it('adding text for new filter creation', () => {
        const tree = renderer
          .create( 
          <SettingsFooter 
            title="CREATE"
            navigate={() => {}} 
            styling="apply" />
            )
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('adding text for editing existing filter', () => {
        const tree = renderer
          .create( 
          <SettingsFooter 
            title="SAVE" 
            navigate={() => {}} 
            styling="apply" />
            )
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
