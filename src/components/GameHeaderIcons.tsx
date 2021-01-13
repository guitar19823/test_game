import React, { FC } from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

export const GameHeaderIcons: FC<any> = props => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={26}
    color="grey"
    {...props}
  />
);