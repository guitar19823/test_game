import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface Props {
  id: number,
  name: string,
  image: string,
  attempts: number,
}

export const GamePlayer: FC<Props> = ({ name, image, attempts }) => (
  <View style={styles.player}>
    <Image
      source={image[image.length - 1] !== '/' ? {uri: image} : require('../../assets/camera.png')}
      style={styles.image}
    />

    <View>
      <Text style={styles.playerName}>{name}</Text>
      
      <Text style={styles.playerAttempts}>Попыток: {attempts}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '94%',
    marginTop: 2,
    marginBottom: 8,
    marginHorizontal: '3%',
    backgroundColor: '#f5f5f5',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
  },
  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  playerAttempts: {
    fontSize: 16,
  },
  odd: {
    backgroundColor: '#ddd',
  }
});
