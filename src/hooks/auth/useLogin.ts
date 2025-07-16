import { useState, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { loginScreenStrings } from "../../constants/strings";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types/navigation_types";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userState = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<GeneralNavigationProp>();

  const welcomeText = useMemo(() => {
    const userType = userState.userType;
    if (userType && userType in loginScreenStrings.welcomeMessages) {
      return loginScreenStrings.welcomeMessages[
        userType as keyof typeof loginScreenStrings.welcomeMessages
      ];
    }
    return loginScreenStrings.welcomeMessages.default;
  }, [userState.userType]);

  const handleLogin = useCallback(() => {
    navigation.navigate("HomeScreen");
    // Login logic will go here
    console.log("Login attempt with:", email, password);
  }, [email, password]);

  const handleQrLogin = useCallback(() => {
    // QR Login logic will go here
    console.log("QR Login attempt");
  }, []);

  return {
    email,
    password,
    setEmail,
    setPassword,
    welcomeText,
    handleLogin,
    handleQrLogin,
    strings: loginScreenStrings,
  };
};
