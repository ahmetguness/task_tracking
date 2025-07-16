import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../constants/colors";

const { width } = Dimensions.get("window");
const scaleFont = (size: number) => size * (width / 375);

export const authStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: scaleFont(40),
    fontWeight: "bold",
    color: colors.text,
  },
  subtitle: {
    fontSize: scaleFont(18),
    color: colors.darkGray,
    marginTop: 10,
  },
  input: {
    fontSize: scaleFont(16),
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
  gradient: {
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: scaleFont(18),
    fontWeight: "bold",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: scaleFont(14),
    color: colors.primary,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.mediumGray,
  },
  dividerText: {
    marginHorizontal: 15,
    fontSize: scaleFont(14),
    color: colors.darkGray,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  socialButton: {
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  footerText: {
    fontSize: scaleFont(14),
    color: colors.darkGray,
  },
  footerLink: {
    fontSize: scaleFont(14),
    color: colors.primary,
    fontWeight: "bold",
    marginLeft: 5,
  },
  qrButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.text,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  qrButtonText: {
    color: colors.white,
    fontSize: scaleFont(16),
    fontWeight: "bold",
    marginLeft: 10,
  },
});