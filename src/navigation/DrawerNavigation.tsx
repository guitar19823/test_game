import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from '../screens/MainScreen';
import { HallOffFameScreen } from '../screens/HallOffFameScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{ drawerLabel: 'Main' }}
      />
      <Drawer.Screen
        name="Hall"
        component={HallOffFameScreen}
        options={{ drawerLabel: 'Hall' }}
      />
    </Drawer.Navigator>
  );
};