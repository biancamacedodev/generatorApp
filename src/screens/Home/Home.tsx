import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WifiLogo } from '../../components/WifiLogo/WifiLogo';

import styles from './Style'
import { WifiTextInput } from '../../components/WifiTextInput/WifiTextInput';

export default function Home() {
  return (
    <View style={styles.HomeContainer}>
        
      <View style={styles.logoContainer}>  
        <WifiLogo  />
      </View>

      <View>
        <WifiTextInput  />
      </View>

        <Text> Home works!</Text>
        <StatusBar style='auto' />
    </View>
  );
}