import React, { useCallback } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { authStyles as styles } from "../../styles/authStyles";
import { useLogin } from "../../hooks/auth/useLogin";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import ActionButton from "../../components/auth/ActionButton";
import SocialButtons from "../../components/auth/SocialButtons";
import AuthFooter from "../../components/auth/AuthFooter";

const LoginScreen = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    welcomeText,
    handleLogin,
    handleQrLogin,
    strings,
  } = useLogin();

  const handleSignUp = useCallback(() => {
    // Sign up logic will go here
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <AuthHeader title={welcomeText} subtitle={strings.subtitle} />

      <AuthInput
        placeholder={strings.emailPlaceholder}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <AuthInput
        placeholder={strings.passwordPlaceholder}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>{strings.forgotPassword}</Text>
      </TouchableOpacity>

      <ActionButton onPress={handleLogin} text={strings.loginButton} gradient />

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>{strings.orDivider}</Text>
        <View style={styles.divider} />
      </View>

      <SocialButtons />

      <ActionButton
        onPress={handleQrLogin}
        text={strings.qrLoginButton}
        style={{ marginTop: 10 }}
      />

      <AuthFooter
        promptText={strings.signupPrompt}
        linkText={strings.signupLink}
        onLinkPress={handleSignUp}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
