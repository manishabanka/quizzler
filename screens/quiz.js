import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const getQuiz = async () => {
        const url='https://opentdb.com/api.php?amount=10';
        const res= await fetch(url);
        const data= await res.json();
        setQuestions(data.results);
    };
    useEffect(() => {
        getQuiz();
    },[]);

    return (
        <View style={styles.container}>
        {questions && (
        <View style={styles.parent}>
            <View style={styles.top}> 
            <Text style={styles.question}>
                Q. Imagine this is a really cool question
            </Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool Option 4</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Result")}>
                <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity>
        </View>
        </View>
        )}
        </View>
    )
};

export default Quiz;

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },   
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom:{
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button:{
        backgroundColor: '#023E8A',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question:{
        fontSize: 28,
    },
    option:{
        fontSize: 18,
        fontWeight: '500',
        color:'white',
    },
    optionButton:{
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#90E0EF",
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent:{
        height: '100%',
    },
});