import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { useState } from 'react';

import Feather from '@expo/vector-icons/Feather';

import { z } from 'zod';

import { useForm, Controller } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

const authSchema = z.object({
    name: z
        .string()
        .nonempty("O campo de nome é obrigatório.")
        .min(3, "O nome deve ter pelo menos 3 caracteres.")
        .max(100, "O nome deve ter no máximo 100 caracteres."),
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

export default function SignUp() {

    const [visiblePassword, setVisiblePassword] = useState(true);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthSchema>({
        resolver: zodResolver(authSchema)
    });

    function proxPagina() {
        console.log("Cadastro realizado com sucesso!");
    }


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Cadastro</Text>

            <View style={styles.areaInput}>

                <Text style={styles.label}>Nome:</Text>

                <Controller
                    control={control}
                    name="name"
                    render={({
                        field: { value, onChange, onBlur },
                    }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Digite seu nome:'
                            placeholderTextColor={'#D7E2EA'}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                    )}
                />

                {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}

            </View>

            <View style={styles.areaInput}>

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

                {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

            </View>

            <View style={styles.areaInput}>

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

                {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit(proxPagina)}>

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