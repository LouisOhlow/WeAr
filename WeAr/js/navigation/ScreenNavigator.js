import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ARContainer from '../components/cameraView/ARContainer';
import BrowseFilterContainer from '../components/browseFilterView/BrowseFilterContainer';
import SCREENS from './navigationScreens';
import FlowerSettingContainer from '../components/EditFilterView/Flower/FlowerSettingContainer';
import ColorSettingContainer from '../components/EditFilterView/Flower/Color/ColorSettingContainer';
import VideoSettingContainer from '../components/EditFilterView/Flower/Video/VideoSettingContainer';

/**
 * setting up the Screens
 */
const ScreenNavigator = createStackNavigator(
  {
    [SCREENS.camera]: {
      screen: ARContainer,
    },
    [SCREENS.browse]: {
      screen: BrowseFilterContainer,
    },
    [SCREENS.flower]: {
      screen: FlowerSettingContainer,
    },
    [SCREENS.flowerColor]: {
      screen: ColorSettingContainer,
    },
    [SCREENS.flowerVideo]: {
      screen: VideoSettingContainer,
    },
  },
  {
    initialRouteName: SCREENS.camera,
  },
);

const ScreenContainer = createAppContainer(ScreenNavigator);

export default ScreenContainer;
