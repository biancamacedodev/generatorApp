import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './WifiTextInputStyle';

export function WifiTextInput() {
  return (
    <>
         <TextInput style={styles.textInput} placeholder='name' />
         <TextInput style={styles.textInput} placeholder='pass' />
    </>
    
  );
}