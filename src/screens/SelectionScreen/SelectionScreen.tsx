import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { GeneralNavigationProp } from "../../types/navigation_types/navigation_types";
import { useNavigation } from "@react-navigation/native";
import { setUserType } from "../../hooks/redux/slices/UserSlice";

const { width } = Dimensions.get("window");
const scaleFont = (size: number) => size * (width / 375);

const SelectionScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  const dispatcher = useDispatch();
  const [pressedButton, setPressedButton] = useState<string | null>(null);

  const handleSelection = (userType: "parent" | "child" | "guest") => {
    dispatcher(setUserType(userType));
    navigation.navigate("LoginScreen");
  };

  const getGradientStyle = (buttonType: string) => {
    return [
      styles.gradient,
      pressedButton === buttonType && { transform: [{ scale: 0.98 }] },
    ];
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Choose User Type</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPressIn={() => setPressedButton("parent")}
          onPressOut={() => setPressedButton(null)}
          onPress={() => handleSelection("parent")}
          activeOpacity={1}
        >
          <LinearGradient
            colors={["#4a90e2", "#2a6fdb"]}
            style={getGradientStyle("parent")}
          >
            <FontAwesome5
              name="user-shield"
              size={scaleFont(35)}
              color="#ffffff"
              style={styles.icon}
            />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>PARENT</Text>
              <Text style={styles.buttonDescription}>
                For parents to manage and monitor their children's activities.
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => setPressedButton("child")}
          onPressOut={() => setPressedButton(null)}
          onPress={() => handleSelection("child")}
          activeOpacity={1}
        >
          <LinearGradient
            colors={["#50e3c2", "#28b485"]}
            style={getGradientStyle("child")}
          >
            <FontAwesome5
              name="child"
              size={scaleFont(35)}
              color="#ffffff"
              style={styles.icon}
            />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>CHILD</Text>
              <Text style={styles.buttonDescription}>
                For children to access their tasks and learning materials.
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => setPressedButton("guest")}
          onPressOut={() => setPressedButton(null)}
          onPress={() => handleSelection("guest")}
          activeOpacity={1}
        >
          <LinearGradient
            colors={["#f8e71c", "#f5a623"]}
            style={getGradientStyle("guest")}
          >
            <FontAwesome5
              name="user-friends"
              size={scaleFont(35)}
              color="#ffffff"
              style={styles.icon}
            />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>GUEST</Text>
              <Text style={styles.buttonDescription}>
                For guests to explore the app with limited access.
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectionScreen;
