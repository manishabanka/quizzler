import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Result = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containers}>
                <Text style={styles.title}>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
            <Image 
                source={{
                    url: 'https://iconscout.com/illustration/online-quiz-5718736.png'
                }}
                style = {styles.banner}
                resizeMode = "contain"
                />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
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
    title:{
        fontSize: 36,
        fontWeight: '600',
    },
    containers:{
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});