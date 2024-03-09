import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions  } from 'react-native';
import WelcomeHeader from '../components/welcomeHeader';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <WelcomeHeader />

        <View style={styles.loginContainer}>

            <Text style={styles.title}>Login</Text>
            <TextInput 
                style={styles.input}
                placeholder='Email'
            />

            <TextInput 
                style={styles.input}
                placeholder='Password'
            />

            <TouchableOpacity
                style={styles.loginButton}
                onPress={()=>navigation.goBack()}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>

                <Text style={styles.footerText}>Not a user? </Text>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.loginText}>SignUp</Text>
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

export default LoginScreen;