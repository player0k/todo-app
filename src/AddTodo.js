import React,  { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const pressHandler = () => {
        if (value.trim()){
            onSubmit(value)
            setValue('')
        }else{
            Alert.alert("Title is mandatory field")
        }
        
    }
    return (
        <View style={styles.container}>
            <TextInput 
                styles={styles.input} 
                onChangeText={setValue}
                defaultValue={value}
                value={value}
                placeholder="Todo task..."
                />
            <Button style={styles.button} onPress={pressHandler} title="Add" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input:{
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        width:'80%',
        padding:5
    },
    button:{
        backgroundColor: 'blue'
    }
})