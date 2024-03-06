import { Button, Text, View } from "react-native";
import styles from "../config/styles";
import { Image } from "expo-image";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.h1}>Bem vindo ao meu App</Text>
    </View>
  );
}
