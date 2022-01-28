import { Text, TouchableOpacity, View, Image } from 'react-native';

const styles = require('../styles/welcomeStyle')

export default function Welcome({navigation}) {
  return (
    <>
    	<View style={styles.yellow}>
			<Image style={styles.image} source={require('../logo.jpeg')}></Image>
		</View>
		<TouchableOpacity style={styles.red} onPress={()=>{navigation.navigate("Login")}}><Text style={styles.textWhite}>LOG IN</Text></TouchableOpacity>
		<TouchableOpacity style={styles.blue}><Text style={styles.textWhite}>SIGN UP</Text></TouchableOpacity>
	</>
  );
}