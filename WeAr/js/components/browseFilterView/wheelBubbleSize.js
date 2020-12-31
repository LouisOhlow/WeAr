import { Dimensions } from 'react-native';

export const bubbleMargin = (Dimensions.get('window').width - 3 * 60) / 6;
export const activeBubbleMargin = bubbleMargin / 2;
