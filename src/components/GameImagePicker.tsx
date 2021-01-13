import React, { FC, useState } from 'react';
import { View, Image, Button, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const askForPermissions = async (): Promise<boolean> => {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
  );

  if (status !== 'granted') {
    Alert.alert('Предупреждение!', 'Нет прав доступа к камере');

    return false;
  }

  return true;
};

interface Props {
  image?: string,
  setImage?: (uri: string) => void,
}

export const GameImagePicker: FC<Props> = ({ image = '', setImage = () => void(0) }) => {
  const createPhoto = async (): Promise<void> => {
    const hasPermissons = await askForPermissions();

    if (!hasPermissons) return;

    const photo: any = await ImagePicker.launchCameraAsync({
      quality: 0.5,
      allowsEditing: false,
      aspect: [1, 1],
    });

    setImage(photo.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <Image
        source={image ? {uri: image} : require('../../assets/camera.png')}
        style={styles.image}
      />

      <Button
        title={image ? 'Поменять фото' : 'Сделать фото'}
        onPress={createPhoto}
        color="#25AF00"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
    width: 180,
    height: 180,
    borderRadius: 10,
  },
});