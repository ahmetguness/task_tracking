import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TextButtonProps {
  title: string;
  desc: string;
  onPress: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ title, desc, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress} activeOpacity={0.7}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ width: "70%" }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}:</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.descText}>{desc}</Text>
          </View>
        </View>
        <View
          style={{
            width: "30%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/icons/parent_icon.png")}
            style={{ width: 90, height: 90 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  root: {
    height: "22%",
    width: "80%",
    backgroundColor: "#03fce8",
    padding: 15,
    borderRadius: 15,
    elevation: 5,
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  descContainer: {},
  descText: {
    fontSize: 14,
  },
});
