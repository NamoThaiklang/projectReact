import { StyleSheet, Text, View } from 'react-native'
import UserNamePassword from './components/UserNamePassword'


const App = () => {
  return (
    <View>
    <UserNamePassword/>
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