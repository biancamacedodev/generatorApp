import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WifiLogo } from '../../components/WifiLogo/WifiLogo';

import styles from './Style'

export default function Home() {
  return (
    <View style={styles.container}>
        
        <WifiLogo  />

        <Text> Home works!</Text>
        <StatusBar style='auto' />
    </View>
  );
}