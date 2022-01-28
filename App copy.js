import react, { useState } from 'react'
import Swiper from 'react-native-swiper'
import CameraScreen from './screens/camera'
import Chat from './screens/chat'
import Login from './screens/login'
import Welcome from './screens/welcome'

export default function App (){
	const [isLoggedIn, setLoggedIn ] = useState(false)
	return (
		<NavigationContainer>
      		<Stack.Navigator>
        		<Stack.Screen name="Home" component={HomeScreen} />
      		</Stack.Navigator>
    	</NavigationContainer>
	)
	if ( isLoggedIn ){
		return (
			<>
				<Swiper
					loop={false}
					showsPagination={false}
					index={0}
				>
					<Welcome/>
					<Login/>
				</Swiper>
			</>	
		)
	} else { 
		return (
			<>
				<Swiper
					loop={false}
					showsPagination={false}
					index={1}
				>
					<Chat/>
					<CameraScreen/>
					
				</Swiper>	
			</>
		)
	}
}