import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const scaleFont = (size: number) => size * (width / 375);

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    color: "#1a2a40",
  },
  subtitle: {
    fontSize: scaleFont(18),
    color: "#7f8c8d",
    marginTop: 10,
  },
  input: {
    fontSize: scaleFont(16),
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#f4f7fc",
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
    color: "#ffffff",
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
    color: "#3498db",
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
    backgroundColor: "#e0e6f1",
  },
  dividerText: {
    marginHorizontal: 15,
    fontSize: scaleFont(14),
    color: "#7f8c8d",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#e0e6f1",
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
    color: "#7f8c8d",
  },
  footerLink: {
    fontSize: scaleFont(14),
    color: "#3498db",
    fontWeight: "bold",
    marginLeft: 5,
  },

  guestContainer: {
    alignItems: "center",
  },
  guestIcon: {
    marginBottom: 40,
  },
});
