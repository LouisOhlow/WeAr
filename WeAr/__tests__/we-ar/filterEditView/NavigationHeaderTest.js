import React from 'react';
import renderer from 'react-test-renderer';
import SettingsHeader from '../../../js/components/EditFilterView/SettingsHeader';

describe('Snapshot tests of the settings header', () => {

    it('only with a back button', () => {
        const tree = renderer
          .create(<SettingsHeader
            title="FILTER SETTINGS"
            goBack={() => {}}
            onPress={() => {}}
            buttonType={'none'}
          />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with the delete button', () => {
      const tree = renderer
        .create(<SettingsHeader
          title="FILTER SETTINGS"
          goBack={() => {}}
          onPress={() => {}}
          buttonType={'delete'}
        />)
        .toJSON();
      expect(tree).toMatchSnapshot();
  });

  it('with the reset button', () => {
    const tree = renderer
      .create(<SettingsHeader
        title="FILTER SETTINGS"
        goBack={() => {}}
        onPress={() => {}}
        buttonType={'reset'}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
  });
