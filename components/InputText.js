import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React ,{useState} from 'react'

const InputText = () => {

    const[userName, setUsername] = useState('');

  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Inser any Text in below input</Text>
      <TextInput
        value = {userName}
        onChangeText = {(userName)=>(setUsername(userName))}
        style = {styles.textinput}
        placeholder='Please input username'
      />
      <text>{userName}</text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    textinput :{
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    }
})