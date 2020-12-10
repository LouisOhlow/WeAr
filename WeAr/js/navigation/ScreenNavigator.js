import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ARContainer from '../components/molecules/ar/ARContainer';
import BrowseFilterContainer from '../components/molecules/browser/BrowseFilterContainer';

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
  },
  {
    initialRouteName: 'Camera',
  },
);

const ScreenContainer = createAppContainer(ScreenNavigator);

export default ScreenContainer;
