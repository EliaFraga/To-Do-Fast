import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function User() {
 return (
    <SafeAreaView style={styles.container}> 
        <Text>Pagina Usuario</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});