import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

function HomeScreen({route, navigation}) {
  return (
    <View>
      <Text>Homeeee</Text>
    </View>
  );
}

export default function Homestack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
          },
        }}
      />
    </Drawer.Navigator>
  );
}
