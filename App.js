import react, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper'
import Home from './Home'
import CameraScreen from './screens/camera'
import Chat from './screens/chat'
import Login from './screens/login'
import Welcome from './screens/welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Upload from './screens/upload'
import { LogBox } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, signOut } from './firebase'

const Stack = createNativeStackNavigator();
export default function App (){
	const [isLoggedIn, setLoggedIn ] = useState(false)

	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
		async function checkLocalStorage (){
			const value = await AsyncStorage.getItem('authObject1')
			if ( auth.currentUser ){
				setLoggedIn(value)
				console.log("gg"+value);
			}
		}
		//checkLocalStorage();
		if ( auth.currentUser ){
			setLoggedIn(true)
		}
	  }, [])
	if ( isLoggedIn ){
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={Home} initialParams={{setLoggedIn:setLoggedIn}}/>
					<Stack.Screen name="Upload" component={Upload} />
				</Stack.Navigator>
			</NavigationContainer>
		)
	}else{
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Login" component={Login} initialParams={{setLoggedIn:setLoggedIn}}/>
				</Stack.Navigator>
			</NavigationContainer>	
		)
	}
}