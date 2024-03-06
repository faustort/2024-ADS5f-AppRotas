import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import QuemSomosScreen from "../screens/QuemSomosScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BuscaCepScreen from "../screens/BuscaCepScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator" // como se fosse um id da tela
        component={TabNavigator}
        options={{
          title: "Início",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="QuemSomosScreen"
        component={QuemSomosScreen}
        options={{
          tabBarLabel: "Quem Somos",
          tabBarIcon: "information",
        }}
      />
      <Tab.Screen
        name="SobreScreen"
        component={SobreScreen}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: "information-variant",
        }}
      />
      <Tab.Screen
        name="BuscaCepScreen"
        component={BuscaCepScreen}
        options={{
          tabBarLabel: "CEP",
          tabBarIcon: "information-variant",
        }}
      />
    </Tab.Navigator>
  );
}
