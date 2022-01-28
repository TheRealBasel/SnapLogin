import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    yellow: {
        flex: 9,
        backgroundColor: 'yellow'
    },
    red: {
        flex: 1,
        backgroundColor: '#F23B58',
        color: 'white'
    },
    blue: {
        flex: 1,
        backgroundColor: '#0DAEFF',
        color: 'white'
    },
    textWhite: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: '5%',
        fontWeight: 'bold'
    },
    image:{
        marginTop: 100,
        width: '100%',
        height: '30%',
    }
});

module.exports = styles