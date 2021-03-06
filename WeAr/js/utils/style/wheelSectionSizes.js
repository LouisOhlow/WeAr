import { Dimensions } from 'react-native';

/**
 * returns the wheel style properties depending on the window width
 */
export const windowSize = Dimensions.get('window').width;
export const bubbleMargin = (windowSize - 3 * 60) / 6;
export const activeBubbleMargin = bubbleMargin / 2;
export const activeBubblePos = (60 + bubbleMargin * 2);
