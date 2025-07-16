import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { authStyles as styles } from "../../styles/authStyles";
import { colors } from "../../constants/colors";

interface ActionButtonProps {
  onPress: () => void;
  text: string;
  style?: ViewStyle;
  gradient?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  text,
  style,
  gradient = false,
}) => {
  const buttonContent = (
    <Text style={gradient ? styles.buttonText : styles.qrButtonText}>
      {text}
    </Text>
  );

  if (gradient) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <LinearGradient
          colors={[colors.primary, colors.primaryDark]}
          style={styles.gradient}
        >
          {buttonContent}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.qrButton, style]}>
      {buttonContent}
    </TouchableOpacity>
  );
};

export default React.memo(ActionButton);