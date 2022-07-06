import { View, Text } from "react-native";
import React from "react";

const Greeting = ({ name, date }) => {
  return (
    <view style={{ alignItems: "center" }}>
      <text>
        Hello {name} {date}
      </text>
    </view>
  );
};

const LotsOfGreeting = () => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <Greeting name="Marry Chrismas" date="25/12" />
      <Greeting name="Happy New Year" date="1/1" />
      <Greeting name="Sonkarn Festival" date="14/4" />
    </View>
  );
};

export default LotsOfGreeting;
