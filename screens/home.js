import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
                <Image 
                source={{
                    url: "https://iconscout.com/illustration/online-quiz-5718736.png"
                }}
                style = {styles.banner}
                resizeMode = "contain"
                />
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button:{
        width: '100%',
        backgroundColor: '#023E8A',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
});