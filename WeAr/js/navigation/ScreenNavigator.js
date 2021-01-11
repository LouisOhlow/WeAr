import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ARContainer from '../components/cameraView/ARContainer';
import BrowseFilterContainer from '../components/browseFilterView/BrowseFilterContainer';
import SCREENS from './navigationScreens';
import FlowerSettingContainer from '../components/EditFilterView/Flower/FlowerSettingContainer';
import FlowerColorContainer from '../components/EditFilterView/Flower/Color/FlowerColorContainer';
import FlowerVideoContainer from '../components/EditFilterView/Flower/Video/FlowerVideoContainer';
import HeartSettingContainer from '../components/EditFilterView/Heart/HeartSettingContainer';
import HeartColorContainer from '../components/EditFilterView/Heart/Color/HeartColorContainer';

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
      screen: FlowerColorContainer,
    },
    [SCREENS.flowerVideo]: {
      screen: FlowerVideoContainer,
    },
    [SCREENS.heart]: {
      screen: HeartSettingContainer,
    },
    [SCREENS.heartColor]: {
      screen: HeartColorContainer,
    },
  },
  {
    initialRouteName: SCREENS.browse,
  },
);

const ScreenContainer = createAppContainer(ScreenNavigator);

export default ScreenContainer;
