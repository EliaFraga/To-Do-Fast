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

import { Link } from 'expo-router';

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>

            <Image source={require('../assets/image/logo.png')} style={{ height: 250, width: 350 }} />

            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center" }}>

                <View style={styles.areaInput}>

                    <Text style={styles.label}>Email:</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email:'
                        placeholderTextColor={'#D7E2EA'}
                    />
                </View>

                <View style={styles.areaInput}>

                    <Text style={styles.label}>Senha:</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite sua senha:'
                        placeholderTextColor={'#D7E2EA'}
                    />
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
    areaInput: {
        width: "90%",
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#5D656C",
        marginVertical: 10
    },
    input: {
        width: "100%",
        height: 43,
        backgroundColor: "#5D656C",
        padding: 10,
        color: "#D7E2EA",
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