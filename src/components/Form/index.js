import { useState } from 'react';

import { View, Text, Pressable, TextInput } from 'react-native';

import { styles } from './style';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function FormTask() {
    const [task, setTask] = useState("");

    function handleNewTask(){
        console.log(task)
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Digite sua próxima tarefa...'
                placeholderTextColor="#F2F2F2"
                value={task}
                onChangeText={(text) => setTask(text)}
                style={styles.input}
            />

            <Pressable style={styles.button} onPress={handleNewTask}>

                <Text style={styles.buttonText}>Cadastrar</Text>

                <Ionicons name="add" size={24} color="#F2F2F2" />

            </Pressable>

        </View>
    );
}