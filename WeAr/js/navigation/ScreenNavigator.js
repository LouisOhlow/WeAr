import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ARContainer from '../components/cameraView/ARContainer';
import BrowseFilterContainer from '../components/browseFilterView/BrowseFilterContainer';
import FlowerSettingContainer from '../components/editFilterView/Flower/FlowerSettingContainer';
import FILTER_SCREENS from './navigationScreens';

/**
 * setting up the Screens
 */
const ScreenNavigator = createStackNavigator(
  {
    Camera: {
      screen: ARContainer,
    },
    Browse: {
      screen: BrowseFilterContainer,
    },
    [FILTER_SCREENS.flower]: {
      screen: FlowerSettingContainer,
    },
  },
  {
    initialRouteName: FILTER_SCREENS.flower,
  },
);

const ScreenContainer = createAppContainer(ScreenNavigator);

export default ScreenContainer;
