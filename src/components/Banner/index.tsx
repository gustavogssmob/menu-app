import React from 'react';
import { ImageBackground, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export function Banner() {
  return (
    <ImageBackground 
    style={styles.container}
    source={require('@/assets/restaurant.jpg')}        
    >
        <LinearGradient 
        colors={["rgba(0,0,0, 0.2)", "#000"]}
        style={styles.gradient}>
        <MaterialCommunityIcons name="food-fork-drink" size={24} color="white" style={styles.category} />
        <Text style={styles.name}>Restaurant Italiano</Text>
        <Text style={styles.type}>Culinária Italiana</Text>
        <Text style={styles.time}>Seg a Sab, das 17h às 23h</Text>
        </LinearGradient>

    </ImageBackground>  
  );
}