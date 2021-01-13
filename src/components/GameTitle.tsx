import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../theme';

interface Props {
  title: string,
}

export const GameTitle: FC<Props> = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.BLUE,
    marginTop: 15,
    marginBottom: 30,
  },
});
