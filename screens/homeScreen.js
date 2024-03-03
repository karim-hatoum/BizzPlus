import {View, StyleSheet, Text, Button} from 'react-native';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});