import { View, Text } from "react-native";
import React from "react";

const CustomText = ({ firstname, secondname }) => {
  return (
    <view style={{ alignItems: "center" }}>
      <text>
        Your First Name is {firstname} and Last name is {secondname}
      </text>
    </view>
  );
};

const MyCustomTextWith = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <CustomText firstname="Namo" secondname="Thaiklang" />
      <CustomText firstname="fname" secondname="lname" />
    </View>
  );
};

export default MyCustomTextWith;
