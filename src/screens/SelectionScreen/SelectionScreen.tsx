import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types/navigation_types";
import { useDispatch } from "react-redux";
import { setUserType } from "../../hooks/redux/slices/UserSlice";
import TextButton from "../../components/ui/buttons/TextButton";

const SelectionScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <View>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          Please select your user type
        </Text>
      </View>
      <TextButton
        title="Parent"
        desc="Requires 2 different devices and internet connection. Tasks, rewards and points awarded to the child are checked here."
        onPress={() => {
          dispatch(setUserType("parent")), navigation.navigate("LoginScreen");
        }}
      />
      <TextButton
        title="Child"
        desc="Requires 2 different devices and internet connection. Tasks and rewards given by the parent are completed here."
        onPress={() => {
          dispatch(setUserType("child")), navigation.navigate("LoginScreen");
        }}
      />
      <TextButton
        title="Guest"
        desc="Only one device is enough. No internet connection required. All controls are done from a single device."
        onPress={() => {
          dispatch(setUserType("guest")), navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
};

export default SelectionScreen;
