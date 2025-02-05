import { SafeAreaView, StatusBar, Text, FlatList, View } from 'react-native';

import { useEffect, useState } from 'react'

import { styles } from './style';

import FormTask from '../../components/FormTask';

import TaskList from '../../components/TaskList';

import { supabase } from '../../lib/supabase';

export default function Home() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {

        async function LoadTasks() {

            let { data, error } = await supabase.from('tasks').select('*')

            if (error) {
                console.log(error)
            } else {
                setTasks(data)
            }

        }

        LoadTasks()

    }, [tasks])

    return (
        <>
            <StatusBar />

            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>To-Do Fast</Text>

                <Text style={styles.subtitle}>Crie e gerencie suas tarefas</Text>

                <FormTask />

                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TaskList data={item}/>}
                />

            </SafeAreaView>

        </>
    );
}