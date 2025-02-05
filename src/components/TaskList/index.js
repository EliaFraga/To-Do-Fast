import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { supabase } from '../../lib/supabase';

import { styles } from './style';

export default function TaskList({ data }) {

    async function deleteTask() {

        const numericId = data.id

        const { error } = await supabase
            .from('tasks')
            .delete()
            .eq('id', numericId)

        if(error){
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>

            <Text style={styles.text}>{data.task}</Text>

            <View style={styles.buttons}>

                <TouchableOpacity style={styles.butonDelete} onPress={deleteTask}>

                    <Ionicons name="trash" size={19} color="black" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCompleted}>

                    <Ionicons name="checkmark-outline" size={19} color="black" />

                </TouchableOpacity>

            </View>

        </View>
    );
}