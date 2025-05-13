import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

import Feather from '@expo/vector-icons/Feather';

import { Link } from 'expo-router';

import { z } from 'zod';

import { useForm, Controller } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useRouter } from 'expo-router';

const authSchema = z.object({
    email: z
        .string()
        .nonempty("O campo de email é obrigatório.")
        .email("O email deve ser válido."),
    password: z
        .string()
        .nonempty("O campo de senha é obrigatório.")
        .min(6, "A senha deve ter pelo menos 6 caracteres.")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial.")
        .regex(/[0-9]/, "A senha deve conter pelo menos um número."),
})

type AuthSchema = z.infer<typeof authSchema>;


export default function Login() {

    const [visiblePassword, setVisiblePassword] = useState(true);

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthSchema>({
        resolver: zodResolver(authSchema)
    });

    function proxPagina() {
        router.push('/(loggedin)/user/page');
    }

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar barStyle='dark-content' backgroundColor='#D7E2EA' />

            <Image source={require('../assets/image/logo.png')} style={{ height: 250, width: 350 }} />

            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center" }}>

                <View style={styles.areaLabelInput}>

                    <Text style={styles.label}>Email:</Text>

                    <Controller
                        control={control}
                        name="email"
                        render={({
                            field: { value, onChange, onBlur },
                        }) => (
                            <TextInput
                                style={styles.input}
                                placeholder='Digite seu email:'
                                placeholderTextColor={'#D7E2EA'}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />

                    {errors.email && <Text style={{ color: "red", marginTop: 5 }}>{errors.email.message}</Text>}

                </View>

                <View style={styles.areaLabelInput}>

                    <Text style={styles.label}>Senha:</Text>

                    <View style={styles.areaInputIcon}>

                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { value, onChange, onBlur } }) => (
                                <TextInput
                                    style={styles.inputSenha}
                                    placeholder='Digite sua senha:'
                                    placeholderTextColor={'#D7E2EA'}
                                    secureTextEntry={visiblePassword}
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                />
                            )}
                        />

                        <TouchableOpacity style={styles.buttonEye} activeOpacity={1.0} onPress={() => { setVisiblePassword(!visiblePassword) }}>

                            {visiblePassword ?
                                <Feather name="eye" size={26} color="#D7E2EA" />
                                :
                                <Feather name="eye-off" size={26} color="#D7E2EA" />
                            }

                        </TouchableOpacity>

                    </View>

                    {errors.password && <Text style={{ color: "red", marginTop: 5 }}>{errors.password.message}</Text>}

                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit(proxPagina)}>

                    <Text style={styles.textButton}>Acessar</Text>

                </TouchableOpacity>

                <Link href={'(auth)/signup/page'}>
                    <Text style={styles.link}>Ainda não possui uma conta? Cadastra - se</Text>
                </Link>

                <Text style={{ marginVertical: 15, fontSize: 18, color: "#5D656C" }}>or</Text>

                <TouchableOpacity style={styles.buttonAuth} activeOpacity={0.5}>

                    <Image
                        source={require('../assets/image/logogoogle.png')}
                        style={{ height: 45, width: 35 }}
                    />

                    <Text style={styles.textButton}>Entrar com Google</Text>

                </TouchableOpacity>

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
    inputSenha: {
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
    },
    buttonAuth: {
        width: "60%",
        height: 43,
        backgroundColor: "#5D656C",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        borderRadius: 8,
    }
});