import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export const GameLayout: FC = ({ children }) => (
  <View style={styles.container}>
    <StatusBar style="auto" hidden={true} />

    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 10,
  },
});