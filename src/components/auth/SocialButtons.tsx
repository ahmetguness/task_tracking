import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { authStyles as styles } from "../../styles/authStyles";
import { colors } from "../../constants/colors";

const SocialButtons = () => {
  return (
    <View style={styles.socialButtonsContainer}>
      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="google" size={24} color={colors.google} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SocialButtons);