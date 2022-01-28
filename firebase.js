import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {

	apiKey: "",
  
	authDomain: "",
  
	projectId: "",
  
	storageBucket: "",
  
	messagingSenderId: "",
  
	appId: "",
  
	measurementId: "",
	databaseURL: "",
  
};
    
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth, signInWithEmailAndPassword, signOut};
export default firebaseApp;
