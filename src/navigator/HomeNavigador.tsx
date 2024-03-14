import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, Tela_inicialScreen } from "./navigator_types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Tela_inicial">
            <Stack.Screen name="Tela_inicial" component={Tela_inicialScreen} />
        </Stack.Navigator>
    )
  }

export default HomeNavigator;
