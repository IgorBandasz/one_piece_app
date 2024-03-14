import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Tela_inicial from "../layouts/Tela_inicial";

type RootStackParamList = {
    Tela_inicial:undefined;
};

type Tela_inicialprops = NativeStackScreenProps<RootStackParamList, 'Tela_inicial'>;

const Tela_inicialScreen = ({ navigation, route}: Tela_inicialprops) => {
    return(
        <Tela_inicial navigation={navigation} route={route}/>
    );
};

export type {RootStackParamList, Tela_inicialprops}
export {Tela_inicialScreen}