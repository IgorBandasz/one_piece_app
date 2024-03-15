import { Text, StyleSheet, View, Pressable, Image, ImageBackground } from "react-native";
import { Tela_inicialprops } from "../navigator/navigator_types";
import React, { Children, ReactNode } from "react";

type MolduraProps = {
    children: ReactNode
}

const Moldura: React.FC<MolduraProps> = ({ children }) => {
    return (
        <ImageBackground
            source={require("../images/moldurahdpi.png")} style={styles.moldura}>
            <View style={styles.preenchimento_moldura}>
                {children}
            </View>
        </ImageBackground>                   
    )

}

export default ({ navigation }: Tela_inicialprops) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../images/fundo_agua.jpg")} style={styles.background}>
                <View style={styles.header}>
                    <Image source={require("../images/logo.png")} style={styles.logo}/>
                </View>    
                <View style={styles.body}>
                    <Pressable style={styles.botao}
                        //onPress={() => navigation.navigate('Quant_clicks')}
                        >
                        <Moldura>
                            <Text style={{ fontSize: 20 }}>Personagens</Text>
                        </Moldura>
                    </Pressable>
                    <Pressable style={styles.botao}
                        //onPress={() => navigation.navigate('Quant_clicks')}
                        >
                        <Text style={{ fontSize: 20 }}>Monte sua Tripulação</Text>
                    </Pressable>
                </View>    
            </ImageBackground>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008080',
    },
    background: {
        flex: 1,
    },
    header: { 
        height: 120,
        alignItems: 'center'
    },
    body: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'center'
    },
    logo: {
        flex: 1,       
        width: '80%',
        resizeMode: "center"
    },
    
    botao: {
        width: 400,
        height: 300,
        marginBottom: 20,
        alignItems: 'center',
    },
    moldura: {
        width: 400,
        height: 300,
    },
    preenchimento_moldura: {
        width: 350,
        height: 250,
        borderRadius: 100,
        backgroundColor: '#ffffff',
    }
}
);