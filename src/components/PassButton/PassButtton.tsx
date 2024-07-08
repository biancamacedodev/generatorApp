import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './PassButttonStyles';
import { WifiTextInput } from '../WifiTextInput/WifiTextInput';
import generatePass from '../../services/passwordService';
import generateName from '../../services/nameService';

export function PassButton() {
  const [pass, setPass] = useState('')
  const [name, setName ] = useState('')

  function handleGenerateButton() {
    let generateToken = generatePass()
    let generaterName = generateName()
    
    setPass(generateToken)
    setName(generaterName)
  }

  

  return (
    <>
        <WifiTextInput pass={pass} name={name}/>

        <Pressable style={styles.button} onPress={handleGenerateButton}>
            <Text  style={styles.text}>Generate ↻</Text>    
        </Pressable>

        <Pressable style={styles.button} onPress={() => {console.log('Pressable clicado!')}}>
            <Text style={styles.text}>Copy!!</Text>    
        </Pressable>
        
    </>
  );
}