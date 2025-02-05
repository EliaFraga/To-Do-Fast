import { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';

import { supabase } from '../../lib/supabase';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function FormTask() {

    const [newTask, setNewTask] = useState("");

    const handleNewTask = async () => {

        const { data, error } = await supabase
            .from('tasks')
            .insert([
                { task: newTask, completed: false }
            ])
            .select();
            if(error){
                console.log(error)
            };
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Digite sua próxima tarefa...'
                placeholderTextColor="#F2F2F2"
                value={newTask}
                onChangeText={(text) => setNewTask(text)}
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleNewTask}>

                <Text style={styles.buttonText}>Cadastrar</Text>

                <Ionicons name="add" size={24} color="#F2F2F2" />

            </TouchableOpacity>

        </View>
    );
}