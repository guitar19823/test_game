import React, { FC, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { GameHeaderIcons } from '../components';
import { MainScreen } from '../screens/MainScreen';
import { HallOffFameScreen } from '../screens/HallOffFameScreen';

const Stack = createStackNavigator();

export const AppNavigation: FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'grey',
        headerTitleStyle: {
          fontSize: 20,
        },
        headerRightContainerStyle: {
        }
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={({ navigation }: any): any => ({
          title: 'Быки и коровы',
          headerRight: (): ReactNode => (
            <HeaderButtons HeaderButtonComponent={GameHeaderIcons}>
              <Item
                title="showHall"
                iconName="ios-list"
                onPress={() => navigation.navigate('Hall')}
              />
            </HeaderButtons>
          )
        })}
      />
      <Stack.Screen
        name="Hall"
        component={HallOffFameScreen}
        options={{
          title: 'Зал славы',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);