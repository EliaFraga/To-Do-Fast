import { View, Text, TouchableOpacity } from 'react-native';

import { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import { supabase } from '../../lib/supabase';

import { styles } from './style';

export default function TaskList({ data }) {

    const numericId = data.id

    const [completed, setCompleted] = useState(data.completed)

    async function deleteTask() {

        const { error } = await supabase
            .from('tasks')
            .delete()
            .eq('id', numericId)

        if (error) {
            console.log(error)
        }
    }

    async function checkTask() {
        const { error } = await supabase
            .from('tasks')
            .update({completed: true})
            .eq('id', numericId)
            

        if (error) {
            console.log(error)
        } else{
            setCompleted(true)
        }
    }

    return (
        <View style={styles.container}>

            <Text style={[styles.text, completed && styles.completed]}>{data.task}</Text>

            <View style={styles.buttons}>

                <TouchableOpacity style={styles.butonDelete} onPress={deleteTask}>

                    <Ionicons name="trash" size={19} color="black" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCompleted} onPress={checkTask}>

                    <Ionicons name="checkmark-outline" size={19} color="black" />

                </TouchableOpacity>

            </View>

        </View>
    );
}