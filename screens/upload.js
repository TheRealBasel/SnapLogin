import { Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

import { getStorage, ref, uploadBytes } from "firebase/storage";

import { getFirestore,doc, setDoc, addDoc,collection } from "firebase/firestore"; 
import firebaseApp from '../firebase';

const firebaseStorage = getStorage(firebaseApp);


const db = getFirestore();

const styles = require('../styles/uploadStyle')

export default function Upload(props) {
	async function uploadImage (file){
		let filename = file.uri.split('/').pop();
		const blob = await new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = function () {
			  resolve(xhr.response);
			};
			xhr.onerror = function (e) {
			  console.log(e);
			reject(new TypeError("Network request failed"));
			};
			xhr.responseType = "blob";
			xhr.open("GET", file.uri, true);
			xhr.send(null);
		});

		const storageRef = ref(firebaseStorage, `stories/${filename}`);
		
		// 'file' comes from the Blob or File API
		const metadata = {
			contentType: 'image/jpeg',
		  };
		  
		uploadBytes(storageRef, blob).then(async (snapshot) => {
			await addDoc(collection(db, "stories"), {
				path: snapshot.metadata.fullPath,
				state: "CA",
				country: "USA",
				created: snapshot.metadata.timeCreated
			});
			
		});

	}
  return (
    <>
		<SafeAreaView style={styles.container} blurRadius={6}>
			<Image
				style={styles.camera}
				source={{
					uri: props.route.params.image.uri,
				}}
			/>
			<TouchableOpacity onPress={()=>uploadImage(props.route.params.image)} style={styles.sendButton}>
				<Text>Send</Text>
			</TouchableOpacity>
		</SafeAreaView>
	</>
  );
}