import { Button, StyleSheet } from 'react-native';
import { View } from 'tamagui';

export function UserProfile() {
    return (
        <View style={styles.container}>
            <Button title="shake"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 50,
    },
});