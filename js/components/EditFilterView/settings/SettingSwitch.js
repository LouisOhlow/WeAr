import React from 'react';
import { SETTING_TYPES } from '../../../db/animation';
import ColorSetting from './ColorSetting';
import ReplaceSetting from './ReplaceSetting';
import RotateSetting from './RotateSetting';
import SliderSetting from './SliderSetting';

/**
 * displays the color picker and two buttons
 * button 1 'apply' calls closePicker with true
 * button 2 'cancel' calls closePicker with false
 *
 * @param {string} startColor prop to set the default color to be shown
 */
function SettingSwitch({ setting }) {
  switch (setting.type) {
    case SETTING_TYPES.color:
      return <ColorSetting setting={setting} />;
    case SETTING_TYPES.rotate:
      return <RotateSetting setting={setting} />;
    case SETTING_TYPES.replaceVideo:
      return <ReplaceSetting setting={setting} />;
    case SETTING_TYPES.slider:
      return <SliderSetting setting={setting} />;
    default:
      return <ColorSetting setting={setting} />;
  }
}

export default SettingSwitch;
