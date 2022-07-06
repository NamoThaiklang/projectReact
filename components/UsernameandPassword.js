import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const UsernameandPassword = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const showData = () => {
    alert("email:" + email + "\npassword:" + password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={(email) => setemail(email)}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(password) => setpassword(password)}
        style={styles.input}
        placeholder="Password"
      />
      <Button color = "#7a42f4" title="Submit" onPress={showData} />
    </View>
  );
};

export default UsernameandPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    color: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
