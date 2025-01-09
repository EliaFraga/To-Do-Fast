import { SafeAreaView, StatusBar, Text, } from 'react-native';

import { styles } from './style';

import FormTask from '../../components/Form';

export default function Home() {
    return (
        <>
            <StatusBar/>

            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>To-Do Fast</Text>

                <Text style={styles.subtitle}>Crie e gerencie suas tarefas</Text>

                <FormTask/>

            </SafeAreaView>

        </>
    );
}