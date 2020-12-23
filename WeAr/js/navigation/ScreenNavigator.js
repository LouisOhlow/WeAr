import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ARContainer from '../components/cameraView/ARContainer';
import BrowseFilterContainer from '../components/browseFilterView/BrowseFilterContainer';
import FlowerSettingContainer from '../components/EditFilterView/Flower/FlowerSettingContainer';

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
    Flower: {
      screen: FlowerSettingContainer,
    },
  },
  {
    initialRouteName: 'Browse',
  },
);

const ScreenContainer = createAppContainer(ScreenNavigator);

export default ScreenContainer;
