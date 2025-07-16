import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types/navigation_types";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../hooks/redux/slices/UserSlice";
import TextButton from "../../components/ui/buttons/TextButton";
import { RootState } from "../../hooks/redux/store";
import { useTranslation } from "react-i18next";
import i18next from "../../services/language/i18next";

const SelectionScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  const dispatch = useDispatch();
  const lan = useSelector((state: RootState) => state.app.appLanguage);
  const {t} = useTranslation();

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Please select your user type</Text>
      </View>
      <TextButton
        title={t("parent")}
        description="Requires 2 different devices and internet connection. Requires user login. Tasks, rewards and points awarded to the child are checked here."
        onPress={() => {
          dispatch(setUserType("parent")), navigation.navigate("LoginScreen");
        }}
      />
      <TextButton
        title="Child"
        description="Requires 2 different devices and internet connection. Requires user login. Tasks and rewards given by the parent are completed here."
        onPress={() => {
          dispatch(setUserType("child")), navigation.navigate("LoginScreen");
        }}
      />
      <TextButton
        title="Guest"
        description="Only one device is enough. No internet connection required. No user login required. No user login required. All controls are done from a single device. If you delete the app, all your data will be irreversibly deleted."
        onPress={() => {
          dispatch(setUserType("guest")), navigation.navigate("HomeScreen");
        }}
      />
    </View>
  );
};

export default SelectionScreen;
