import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { Tela_inicialprops } from "../navigator/navigator_types";

export default ({ navigation }: Tela_inicialprops) => {
    return (
        <View style={styles.container}>
            <View style={styles.center}>

                <Pressable style={styles.botao}
                    //onPress={() => navigation.navigate('Quant_clicks')}
                    >

                    <Text style={{ fontSize: 20 }}>Botão</Text>
                </Pressable>
                <Image source={require("../images/logo.png")}/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#008080',


    },

    footer: {
        width: 410,
        height: 200,
        marginLeft: 3
    },
    box: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        color: "black",
        

    },
    botao: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignItems: 'center',
    
    },
    esqueci: {
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        //marginBottom: 20,
        // alignSelf: 'baseline',
        alignItems: 'center',
    },
    conta: {
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        //marginBottom: 20,
        // alignSelf: 'flex-end',
        alignItems: 'center',

    },
    botoes: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3
    },
}
);