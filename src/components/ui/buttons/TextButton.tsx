import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../../../constants/colors";

interface TextButtonProps {
  title: string;
  description: string;
  onPress: () => void;
  iconSource?: ImageSourcePropType;
}

const TextButton: React.FC<TextButtonProps> = ({
  title,
  description: desc,
  onPress,
  iconSource = require("../../../assets/icons/parent_icon.png"),
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.contentWrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}:</Text>
          <Text style={styles.description}>{desc}</Text>
        </View>

        <View style={styles.iconContainer}>
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    height: "22%",
    width: "80%",
    backgroundColor: colors.lightGray,
    padding: 15,
    borderRadius: 15,
    elevation: 5,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: colors.mediumGray,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.text,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.darkGray,
  },
  iconContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 90,
    height: 90,
  },
});
