import { Button, Text, View } from "react-native";
import styles from "../config/styles";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bem vindo ao meu App</Text>
      <Button
        title="Conheça mais sobre o App"
        onPress={() => navigation.navigate("SobreScreen")}
      />
    </View>
  );
}
