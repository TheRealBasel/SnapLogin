import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
      },
      button: {
        flex: 0.5,
        alignSelf: "flex-end",
        paddingRight: "4%",
        justifyContent: "flex-end",
        paddingBottom: "4%"

      },
      recordButton:{
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
      },
      flashButton:{
        flex: 3,
        alignSelf: "flex-end",
        paddingRight: "4%",
      },
      text: {
        fontSize: 32,
        color: 'white',
      },
});

module.exports = styles