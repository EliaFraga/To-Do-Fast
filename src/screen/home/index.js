import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native';

import { useEffect, useState } from 'react'

import { styles } from './style';

import FormTask from '../../components/Form';

import { supabase } from '../../lib/supabase';

export default function Home() {

    const [dados, setDados] = useState([])

    return (
        <>
            <StatusBar/>

            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>To-Do Fast</Text>

                <Text style={styles.subtitle}>Crie e gerencie suas tarefas</Text>

                <FormTask/>

                <FlatList/>

            </SafeAreaView>

        </>
    );
}