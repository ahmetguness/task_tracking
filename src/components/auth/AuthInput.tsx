import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { authStyles as styles } from "../../styles/authStyles";
import { colors } from "../../constants/colors";

const AuthInput: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={colors.darkGray}
      autoCapitalize="none"
      {...props}
    />
  );
};

export default React.memo(AuthInput);