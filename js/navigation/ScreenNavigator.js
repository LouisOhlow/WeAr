import { createAppContainer } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';
import ARContainer from '../components/cameraView/ARContainer';
import BrowseFilterContainer from '../components/browseFilterView/BrowseFilterContainer';
import SCREENS from './navigationScreens';
import FlowerSettingContainer from '../components/EditFilterView/Flower/FlowerSettingContainer';
import FlowerColorContainer from '../components/EditFilterView/Flower/Color/FlowerColorContainer';
import FlowerVideoContainer from '../components/EditFilterView/Flower/Video/FlowerVideoContainer';
import HeartSettingContainer from '../components/EditFilterView/Heart/HeartSettingContainer';
import HeartColorContainer from '../components/EditFilterView/Heart/Color/HeartColorContainer';
import NAVIGATION_OPTIONS from './navigationOptions';

/**
 * setting up the Screens
 */
const ScreenNavigator = createStackNavigator(
  {
    [SCREENS.camera]: {
      screen: ARContainer,
      navigationOptions: {
        gestureEnabled: true,
        gestureDirection: 'vertical-inverted',
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      },
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
    mode: 'card',
    initialRouteName: SCREENS.camera,
    defaultNavigationOptions: NAVIGATION_OPTIONS,
    headerMode: 'none',
  },
);

const ScreenContainer = createAppContainer(ScreenNavigator);

export default ScreenContainer;
