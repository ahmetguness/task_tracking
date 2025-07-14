import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux/store";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const userState = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleChildLogin = () => {
    console.log("Nickname:", nickname);
    console.log("PIN:", pin);
  };

  const handleGuestContinue = () => {
    console.log("Guest continues");
  };

  const renderParentLogin = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient colors={["#4a90e2", "#2a6fdb"]} style={styles.gradient}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="google" size={24} color="#db4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="facebook" size={24} color="#4267b2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="apple" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderChildLogin = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Hi there!</Text>
        <Text style={styles.subtitle}>Please enter your nickname and PIN</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="PIN"
        value={pin}
        onChangeText={setPin}
        keyboardType="number-pad"
        secureTextEntry
        maxLength={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleChildLogin}>
        <LinearGradient colors={["#2ecc71", "#28b485"]} style={styles.gradient}>
          <Text style={styles.buttonText}>LET'S GO!</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );

  const renderGuestLogin = () => (
    <View style={styles.guestContainer}>
      <FontAwesome5
        name="user-friends"
        size={100}
        color="#f1c40f"
        style={styles.guestIcon}
      />
      <Text style={styles.title}>Welcome, Guest!</Text>
      <Text style={styles.subtitle}>Explore the app with limited access.</Text>
      <TouchableOpacity style={styles.button} onPress={handleGuestContinue}>
        <LinearGradient colors={["#f1c40f", "#f39c12"]} style={styles.gradient}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  const renderContent = () => {
    switch (userState.userType) {
      case "parent":
        return renderParentLogin();
      case "child":
        return renderChildLogin();
      case "guest":
        return renderGuestLogin();
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {renderContent()}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
