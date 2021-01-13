import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

export const GameFooter: FC = ({ children }) => (
  <View style={styles.footer}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'space-around',
  },
});
