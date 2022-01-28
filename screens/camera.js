import react, { useState, useEffect } from 'react'

import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import { auth,signOut } from '../firebase';

const styles = require('../styles/cameraStyle')

export default function CameraScreen(props) {
	const [hasPermission, setHasPermission] = useState(null);
	const [CameraType, setCameraType] = useState(Camera.Constants.Type.back);
	let camera;
	const [previewVisible, setPreviewVisible] = useState(false)
	const [flashMode, setFlashMode] = useState('off')
	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
		props.navigation.addListener('focus', () => {
			setPreviewVisible(false)
		});
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	const __handleFlashMode = () => {
		if (flashMode === 'on') {
		  setFlashMode('off')
		} else if (flashMode === 'off') {
		  setFlashMode('on')
		}	
	  }
	const __takePicture = async () => {
		if (!camera) return
		camera.pausePreview()
		let photo = await camera.takePictureAsync()
		if (CameraType === Camera.Constants.Type.front) {
			photo = await manipulateAsync(
				photo.localUri || photo.uri,
				[
					{ rotate: 180 },
					{ flip: FlipType.Vertical },
				],
				{ compress: 1, format: SaveFormat.PNG }
			);
		}
		setPreviewVisible(true)
		props.navigation.navigate('Upload', { image: photo })
	}
	return (
    	<>
			<View style={styles.container}>
				{!previewVisible ? (
				<Camera flashMode={flashMode} style={styles.camera} type={CameraType} ref={(r) => { camera = r }}>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								setCameraType(
									CameraType === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
								);
							}}>
							<MaterialIcons style={styles.text} name="flip-camera-android" size={48} color="black" />
						</TouchableOpacity>
						<TouchableOpacity onPress={__handleFlashMode} style={styles.flashButton}>
            				{ flashMode === "on" ? (<Ionicons name="flash" size={32} color="white" />) : (<Ionicons name="flash-off" size={32} color="white" />)}
        				</TouchableOpacity>
						<TouchableOpacity
							style={styles.recordButton}
							onPress={() => {
								__takePicture();
							}}
						>
							<Entypo name="circle" size={80} color="white" />	
						</TouchableOpacity>
					</View>
				</Camera>) : <></> }
			</View>
		</>
  	);
}