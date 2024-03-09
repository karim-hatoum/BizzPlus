import {View, StyleSheet, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Button 
                title='SignUp'
                onPress={
                    () => navigation.navigate('SignUp')
                }
            />
        </View>
        
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});