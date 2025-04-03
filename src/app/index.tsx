import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

import Feather from '@expo/vector-icons/Feather';

import { Link } from 'expo-router';

export default function Login() {

    const [visiblePassword, setVisiblePassword] = useState(true);

    return (

        <SafeAreaView style={styles.container}>

            <Image source={require('../assets/image/logo.png')} style={{ height: 250, width: 350 }} />

            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center" }}>

                <View style={styles.areaLabelInput}>

                    <Text style={styles.label}>Email:</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email:'
                        placeholderTextColor={'#D7E2EA'}
                    />
                </View>

                <View style={styles.areaLabelInput}>

                    <Text style={styles.label}>Senha:</Text>

                    <View style={styles.areaInputIcon}>

                        <TextInput
                            style={styles.inputSenha}
                            placeholder='Digite sua senha:'
                            placeholderTextColor={'#D7E2EA'}
                            secureTextEntry={visiblePassword}
                        />

                        <TouchableOpacity style={styles.buttonEye} activeOpacity={1.0} onPress={() => { setVisiblePassword(!visiblePassword) }}>

                            {visiblePassword ?
                                <Feather name="eye" size={26} color="#D7E2EA" />
                                :
                                <Feather name="eye-off" size={26} color="#D7E2EA" />
                            }

                        </TouchableOpacity>

                    </View>
                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.5}>

                    <Text style={styles.textButton}>Acessar</Text>

                </TouchableOpacity>

                <Link href={'(auth)/signup/page'}>
                    <Text style={styles.link}>Ainda não possui uma conta? Cadastra - se</Text>
                </Link>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7E2EA',
        alignItems: "center",
    },
    areaLabelInput: {
        width: "90%",
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#5D656C",
        marginVertical: 10
    },
    areaInputIcon: {
        width: "100%",
        height: 43,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: 43,
        backgroundColor: "#5D656C",
        padding: 10,
        color: "#D7E2EA",
    },
    inputSenha:{
        width: "85%",
        height: 43,
        backgroundColor: "#5D656C",
        padding: 10,
        color: "#D7E2EA",
    },
    buttonEye: {
        width: "15%",
        height: 43,
        backgroundColor: "#5D656C",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: "90%",
        height: 43,
        backgroundColor: "#5D656C",
        marginVertical: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    textButton: {
        fontSize: 18,
        color: "#D7E2EA",
        fontWeight: "bold"
    },
    link: {
        fontSize: 17,
        color: "#5D656C",
        fontWeight: "bold",
    }
});