import { StyleSheet, Text, View } from 'react-native'
import Touchable_Example from './components/Touchable_Example'
const App = () => {
  return (
    <View>
    <Touchable_Example/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  }
})