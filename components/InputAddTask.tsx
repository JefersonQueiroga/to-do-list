import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';


interface propsTaskProps {
    addTask: () => void,
    value: string,
    setValue: (value: string) => void,  
}


export default function InputAddTask( { addTask, value, setValue }: propsTaskProps) {
  return (
    <View style={styles.container}>
        <TextInput 
            placeholder="Digite aqui uma nova tarefa"     
            placeholderTextColor="white"
            keyboardType="default"
            style={styles.input} value={ value } onChangeText={setValue}/>
        <TouchableOpacity style={styles.buttonAdd} onPress={addTask}>
            <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#252627',
   },
   input: {
    flex: 1,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
   },
   buttonAdd:{
    padding: 16,
    backgroundColor:'#1E1E1E',
   }
   
});