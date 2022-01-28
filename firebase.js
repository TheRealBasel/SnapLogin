import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {

	apiKey: "AIzaSyAFnzwqVvOTnNqLc46SsgGz_uOImeRC3F4",
  
	authDomain: "snapchat-82b46.firebaseapp.com",
  
	projectId: "snapchat-82b46",
  
	storageBucket: "snapchat-82b46.appspot.com",
  
	messagingSenderId: "330293453361",
  
	appId: "1:330293453361:web:9d5b834a822121fb32eb10",
  
	measurementId: "G-PK6F09SPGF",
	databaseURL: "https://snapchat-82b46-default-rtdb.europe-west1.firebasedatabase.app",
  
};
    
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth, signInWithEmailAndPassword, signOut};
export default firebaseApp;
