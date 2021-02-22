import { StyleSheet } from 'react-native';
import COLORS from '../../res/colors';

const textStyles = StyleSheet.create({
  basic: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default textStyles;
