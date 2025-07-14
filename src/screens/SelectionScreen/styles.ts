import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const scaleFont = (size: number) => size * (width / 375);

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f4f7fc",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: scaleFont(34),
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 50,
  },
  buttonContainer: {
    width: "90%",
    maxWidth: 400,
  },
  gradient: {
    height: height * 0.22,
    borderRadius: 25,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: scaleFont(24),
    color: "#ffffff",
    fontWeight: "bold",
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonDescription: {
    fontSize: scaleFont(16),
    color: "rgba(255, 255, 255, 0.9)",
    marginTop: 8,
    flexWrap: "wrap",
  },
  icon: {
    marginRight: 25,
  },
});
