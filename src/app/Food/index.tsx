import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Food() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Food</Text>
    </View>
  );
}