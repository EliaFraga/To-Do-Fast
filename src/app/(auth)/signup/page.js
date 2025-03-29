import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function SignUp() {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Cadastro</Text>

            <View style={styles.areaInput}>

                <Text style={styles.label}>Nome:</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Digite seu nome:'
                    placeholderTextColor={'#D7E2EA'}
                />

            </View>

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

                <Text style={styles.textButton}>Cadastrar</Text>

            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7E2EA',
        alignItems: 'center',
    },
    title: {
        fontSize: 29,
        fontWeight: 'bold',
        color: "#5D656C",
        marginTop: 33,
        alignSelf: "flex-start",
        marginLeft: 18,
    },
    areaInput: {
        width: "90%",
        marginVertical: 5
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
        marginVertical: 18,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    textButton: {
        fontSize: 18,
        color: "#D7E2EA",
        fontWeight: "bold"
    },
});