import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './WifiLogoStyle';
import wifiLogo from '../../../assets/wifi-logo.png'

export function WifiLogo() {
  return (
    <View>
        <Text style={styles.title}>Wifi Generator Pass</Text>
        <Image source={wifiLogo} style={styles.image} />
    </View>
  );
}