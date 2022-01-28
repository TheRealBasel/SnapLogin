
import { SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';
import react, { useEffect, useState } from 'react'

import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import {firebaseApp, auth, signInWithEmailAndPassword} from '../firebase';

import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = require('../styles/loginStyle')

export default function Login ({navigation, route}){
	const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

	function logMeIn(){
		signInWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			//await AsyncStorage.setItem('authObject1', "true" )
			route.params.setLoggedIn(true)
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage);
		});
	}
	return (
		<SafeAreaView>
			<AntDesign name="left" size={32} color="#0DAEFF" onPress={()=>{navigation.goBack()}} />
			<Text style={styles.loginText}>Log In</Text>

			<Text style={styles.title}>EMAIL</Text>
			<TextInput onChangeText={(value) => setEmail(value) }style={styles.usernameInput}></TextInput>
		
			<Text style={styles.title}>PASSWORD</Text>
			<TextInput secureTextEntry={true} onChangeText={(value) => setPassword(value) }  style={styles.usernameInput}></TextInput>
			
			<Text style={styles.forgotText}>Forgot your password?</Text>

			<TouchableOpacity style={styles.button} onPress={()=>logMeIn()}>
				<Text style={styles.buttonTitle}>Log In</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}