import { View, Button } from "react-native";
import { GeneralNavigationProp } from "../../types/navigation_types/navigation_types";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const IntroScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();

  return (
    <View style={styles.root}>
      <Button
        title="GO NEXT PAGE"
        onPress={() => navigation.navigate("SelectionScreen")}
      />
    </View>
  );
};

export default IntroScreen;
