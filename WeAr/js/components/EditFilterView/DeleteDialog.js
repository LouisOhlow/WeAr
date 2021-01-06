import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import COLORS from '../../drawables/colors';
import AppButton from '../basics/AppButton';
import Headline1 from '../basics/Headline1';

function DeleteDialog(props) {
  const { newFilter } = props;
  return (
    <View style={styles.container}>
      <View style={styles.dialogBox}>
        <Image style={styles.emoji} source={require('../../drawables/confused_emoji.png')} />
        {newFilter
          ? <Headline1 style={styles.warntext} text="ARE YOU SURE YOU WANT TO ABORT ?" />
          : <Headline1 style={styles.warntext} text="ARE YOU SURE YOU WANT TO DELETE THIS FILTER ?" />}
        <View style={styles.buttons}>
          {newFilter
            ? <AppButton onPress={() => props.onDelete()} title="ABORT" styling="discard" />
            : <AppButton onPress={() => props.onDelete()} title="DELETE" styling="discard" />}
          <AppButton onPress={() => props.onCancel()} title="CANCEL" styling="cancel" />
        </View>
      </View>
    </View>
  );
}

export default DeleteDialog;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  warntext: {
    width: '70%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dialogBox: {
    height: '35%',
    width: '90%',
    justifyContent: 'space-between',
  },
  emoji: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
});
