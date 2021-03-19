import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import COLORS from '../../res/colors';

function IconButton({ source, onPress }) {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity style={styles.iconButton} onPress={onPress}>
        <Image
          style={styles.icon}
          source={source}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
  iconButton: {
    height: 45,
    width: 45,
    borderColor: COLORS.neutral,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
