import { StyleSheet, Text, View } from 'react-native'
import UsernameandPassword from './components/UsernameandPassword'


const App = () => {
  return (
    <View>
    <UsernameandPassword/>
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