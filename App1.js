import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Styles from "./components/Styles";
import Stysheet from "./components/Stysheet";
import TextinputExample from "./components/TextinputExample";
import Cat from "./components/cat";
import Cafe from "./components/Cafe";

const App = () => {
  const showData = () => {
    alert("Hello Button")
  }
  return (
    <View /* style={Styles.container} */>
      {/* <Text style={[Styles.title,Styles.warning]}>Hello ReactNative</Text>*/}
      <Logo />
      <Button 
      onPress={showData}
      title="Click Me" />
      {/* <Stysheet/> */}
      {/* <TextinputExample /> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  );
};

export default App;
