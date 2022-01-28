import react, { useState } from 'react'
import Swiper from 'react-native-swiper'
import CameraScreen from './screens/camera'
import Chat from './screens/chat'
import Login from './screens/login'
import Story from './screens/stories'
import Welcome from './screens/welcome'

export default function Home ({ navigation, route }){
	return (
		<>
			<Swiper
				loop={false}
				showsPagination={false}
				index={1}
			>
				<Chat/>			
				<CameraScreen navigation={navigation} setLoggedIn={route.params.setLoggedIn}/>
				<Story/>
			</Swiper>	
		</>
	)
}