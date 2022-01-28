import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	loginText: {
		marginTop: '19%',
		fontSize: 24,
		textAlign: 'center'
	},
	usernameInput: {
		marginTop: '3%',
		borderBottomWidth: 1,
		borderBottomColor:'#B7B7B7',
		marginHorizontal: '15%'
	},
	title: {
		marginTop: '10%',
		color: '#B7B7B7',
		fontSize: 12,
		fontWeight: 'bold',
		marginHorizontal: '15%'
	},
	forgotText:{
		marginTop: '10%',
		textAlign: 'center',
		fontSize: 12,
		color: '#0DAEFF'
	},
	button: {
		marginTop: '100%',

		borderRadius: 50,
		backgroundColor: "#0DAEFF",
		marginHorizontal: '25%'
	},
	buttonTitle:{
		fontWeight: "600",
		color: 'white',
		padding: '5%',
		textAlign: 'center'
	}
});

module.exports = styles