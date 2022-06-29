import { View, TextInput ,Button} from "react-native";
import React from "react";

const TextinputExample = () => {
  return (
    <View style={{ padding: 10 }}>
      <view
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alighItem: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Button title='ADD'/>
        
      </view>
    </View>
  );
};

export default TextinputExample;
