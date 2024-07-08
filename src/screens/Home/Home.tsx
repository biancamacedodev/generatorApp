import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WifiLogo } from '../../components/WifiLogo/WifiLogo';

import styles from './Style'
import { PassButton } from '../../components/PassButton/PassButtton';

export default function Home() {
  return (
    <View style={styles.HomeContainer}>
        
      <View style={styles.logoContainer}>  
        <WifiLogo  />
      </View>

      <View style={styles.inputContainer}>
        
      
        <PassButton />
      </View>


        
        <StatusBar style='auto' />
    </View>
  );
}