import React from 'react';
import { SafeAreaView} from 'react-native';
import { Banner } from '@/components/Banner';
import { styles } from './styles';
import {NavigationContainer} from '@react-navigation/native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Food } from '@/app/Food';
import { Dessert } from '@/app/Dessert';
import { Drink } from '@/app/Drink';

const {Navigator, Screen} = createMaterialTopTabNavigator();


export function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <Banner />
        <NavigationContainer>
          <Navigator
          screenOptions={{
            tabBarActiveTintColor:'#48a73b',
            tabBarInactiveTintColor: '#AAA',
            tabBarLabelStyle: {
              fontSize: 16,
              paddingVertical: 2              
            },
            tabBarIndicatorContainerStyle:{
              backgroundColor:'#212121'
            }, 
            tabBarIndicatorStyle:{
              backgroundColor:'#48a73b',
            }
          }}
          >
            <Screen name="Food" component={Food} />
            <Screen name="Dessert" component={Dessert} />
            <Screen name="Drink" component={Drink} />
          </Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}