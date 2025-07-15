import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux/store";

const LoginScreen = () => {
  const userState = useSelector((state: RootState) => state.user);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{userState.userType}</Text>
    </View>
  );
};

export default LoginScreen;
