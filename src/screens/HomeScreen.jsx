import { Text, View } from "react-native";
import BuscaCep from "../components/BuscaCep";
import styles from "../config/styles";

export default function HomeScreen(){
    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.h1}
            >Bem vindo ao meu App</Text>
            <BuscaCep />
        </View>
    )
}