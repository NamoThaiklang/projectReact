import { StyleSheet, Text, View ,Button, Alert} from 'react-native'
import React from 'react'

const AlertComponent = () => {

    const simpleAlertHanler = () => {
        alert('hello I am Simple Alet from JavaScript')
    }
    const TwoOptionAlertHanler = () => {
        Alert.alert(
            'Hello',
            'I am two option alert from react native',
            [
                {
                    text:'Yes',
                    onpress: ()=> alert('Yes Pressed')
                },
                {
                    text:'No',
                    onpress: ()=> alert('No Pressed'),
                    style:'cancel'
                }
            ],{cancelable:false}
        )
    }

  return (
    <View style = {styles.container}>
    <Button
      title = 'simple alert'
      onPress={simpleAlertHanler}
    />

    <Button
      title = 'Alert with Two Option'
      onPress={TwoOptionAlertHanler}
    />
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({container: {flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor: '#ecf0f1',},});