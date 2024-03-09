import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import WelcomeHeader from "../components/welcomeHeader";

const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <WelcomeHeader />
            <View style={styles.loginContainer}>

                <Text style={styles.title}>SignUp</Text>

                <TextInput 
                style={styles.input}
                placeholder='Enter your First Name'
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Enter your Last Name'
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Enter your Email'
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Enter a Password'
                />

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={()=>navigation.goBack()}
                >
                    <Text style={styles.loginButtonText}>SignUp</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>

                    <Text style={styles.footerText}>Already a user? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    loginButton: {
        height: 40,
        width: '80%',
        backgroundColor: '#ff4757',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    footerText: {
        fontSize: 16,
        color: '#333',
    },
    loginText: {
        fontSize: 16,
        color: '#ff4757',
    },
});

export default SignUpScreen;