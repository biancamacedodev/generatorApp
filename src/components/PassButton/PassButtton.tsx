import React, { useState } from 'react';
import {Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
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

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
  }

  function handleCopyButtonName() {
    Clipboard.setStringAsync(name)

  }

  

  return (
    <>
        <WifiTextInput pass={pass} name={name}/>

        <Pressable style={styles.button} onPress={handleGenerateButton}>
            <Text  style={styles.text}>Generate ↻</Text>    
        </Pressable>

        <Pressable style={styles.button} onPress={handleCopyButton}>
            <Text style={styles.text}>Copy pass!!</Text>    
        </Pressable>

        
        <Pressable style={styles.button} onPress={handleCopyButtonName}>
            <Text style={styles.text}>Copy name!!</Text>    
        </Pressable>
        
        
    </>
  );
}