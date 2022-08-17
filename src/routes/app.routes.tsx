import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import {firebase} from '@react-native-firebase/auth';

import theme from '../theme';

import {Receipts} from '../screens/Receipts';
import {Products} from '../screens/Products';
import {Upload} from '../screens/Upload';
import {Register} from '../screens/Register';
import {Platform} from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.PURPLE,
        tabBarInactiveTintColor: theme.COLORS.GRAY800,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarLabelStyle: {
          fontFamily: theme.FONTS.REGULAR,
        },
      }}>
      <Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({size, color}) => <MaterialIcons name="shopping-cart" size={size} color={color} />,
        }}
      />
      <Screen
        name="Comprovantes"
        component={Receipts}
        options={{
          tabBarIcon: ({size, color}) => <MaterialIcons name="receipt" size={size} color={color} />,
        }}
      />
      <Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({size, color}) => <MaterialIcons name="backup" size={size} color={color} />,
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => <MaterialIcons name="backup" size={size} color={color} />,
        }}
      />
    </Navigator>
  );
}
