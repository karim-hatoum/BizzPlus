import {View, ImageBackground, Text, StyleSheet, Dimensions} from 'react-native';

const { height } = Dimensions.get('window');

const WelcomeHeader = () => {
    return(
        <View style={styles.imageContainer}>
            <ImageBackground
                source={require('../assets/images/login - background.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.welcomeText}>Welcome to</Text>
                    <Text style={styles.appName}>BIZZPLUS</Text>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        height: height * 0.4, 
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75,
        overflow: 'hidden',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    appName: {
        color: '#ff4757',
        fontSize: 36,
        fontWeight: 'bold',
    },
});

export default WelcomeHeader;