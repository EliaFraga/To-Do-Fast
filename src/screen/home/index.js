import { SafeAreaView, StatusBar, Text, } from 'react-native';

import { styles } from './style';

export default function Home() {
    return (
        <>
            <StatusBar/>

            <SafeAreaView style={styles.container}>
                <Text>Bora</Text>
            </SafeAreaView>

        </>
    );
}