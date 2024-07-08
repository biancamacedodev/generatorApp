import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './WifiTextInputStyle';

interface WifiTextInputProps {
  pass:string
  name:string
}

export function WifiTextInput(props : WifiTextInputProps) {
  return (
    <>
         <TextInput style={styles.textInput} placeholder='name' value={props.name} />
         <TextInput style={styles.textInput} placeholder='pass' value={props.pass} />
    </>
    
  );
}