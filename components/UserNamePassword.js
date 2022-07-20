import { StyleSheet, Text, View ,TextInput, Button } from 'react-native'
import React, { useState } from "react";



const UserNamePassword = () => {
    const [textInputName, setusername] = useState("");
    const [email, setemail] = useState("");
    // const showData = () => {
    // alert();
    // };
    const checkTextInput= () => {if (!textInputName.trim()) {alert('Please Enter Name');return;}
        
    };
  return (

      <View style={styles.container}>
      <TextInput
        value={textInputName}
        onChangeText={(textInputName) => setusername(textInputName)}
        style={styles.textInputStyle}
        placeholder="Enter Name"
      />
      <TextInput
        value={email}
        onChangeText={(email) => setemail(email)}
        style={styles.textInputStyle}
        placeholder="Email"
      />
      <Button color = "gray" title="Submit" onPress={checkTextInput}/>
    </View>

  )
}

export default UserNamePassword

const styles = StyleSheet.create({
    container: {flex: 1,padding: 35,},
    textInputStyle: {width: '100%',height: 40,paddingHorizontal: 5,borderWidth: 0.5,marginTop: 15,},
})