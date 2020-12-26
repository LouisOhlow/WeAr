import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ARContainer from '../components/cameraView/ARContainer';
import BrowseFilterContainer from '../components/browseFilterView/BrowseFilterContainer';
import FlowerSettingContainer from '../components/editFilterView/Flower/FlowerSettingContainer';
import SCREENS from './navigationScreens';

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

  },
  {
    initialRouteName: SCREENS.flower,
  },
);

const ScreenContainer = createAppContainer(ScreenNavigator);

export default ScreenContainer;
