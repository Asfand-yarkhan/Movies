import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
       <View style={{flex: .2, backgroundColor: 'grey'}}>
       <Text style={styles.heading}>Welcome</Text>
       </View>
       <View style={{flex: .8, backgroundColor: 'lightgrey', alignItems:'center'}}>
        <Text style={{fontSize: 25, margin: 10 , marginTop: 70}}>
            Enter your username 
        </Text>
        <TextInput 
        placeholder='Enter your username'
        style={{borderWidth: 1, borderColor: 'black', margin: 10,fontSize: 25}}>
        </TextInput>
        <Text style={{fontSize: 25, margin: 10,}}>
            Enter your password
        </Text>
        <TextInput 
        placeholder='Enter your Password'
        style={{borderWidth: 1, borderColor: 'black', margin: 10,fontSize: 25}}>
        </TextInput>
        <Button title='Login' onPress={()=>alert('Login button pressed')}></Button>
       </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    heading:{
        
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60
    },
    
})