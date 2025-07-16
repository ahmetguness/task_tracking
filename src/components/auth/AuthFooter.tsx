import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { authStyles as styles } from "../../styles/authStyles";

interface AuthFooterProps {
  promptText: string;
  linkText: string;
  onLinkPress: () => void;
}

const AuthFooter: React.FC<AuthFooterProps> = ({
  promptText,
  linkText,
  onLinkPress,
}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{promptText}</Text>
      <TouchableOpacity onPress={onLinkPress}>
        <Text style={styles.footerLink}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(AuthFooter);