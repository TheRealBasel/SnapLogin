import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, FlatList } from 'react-native';
import firebaseApp from '../firebase';

//const styles = require('../styles/chatStyle')

const DATA = [
    {
		id: '1',
		status: 'Opend - 14h',
		title: 'First Item',
    },
    {
		id: '2',
		status: 'Opend - 14h',
		title: 'Second Item',
    },
    {
		id: '3',
		status: 'Opend - 14h',
		title: 'Third Item',
    },
  ];

const FriendStory = ({ title, status }) => (
    <TouchableOpacity style={styles.story}>
		<Text>GG</Text>
    </TouchableOpacity>
  );
  
export default function Story() {

    const renderItem = ({ item }) => <FriendStory title={item.title} status={item.status}/>;
    return (
    <>
        <SafeAreaView>
            <FlatList 
				data={DATA} 
				renderItem={renderItem} 
				keyExtractor={item => item.id} 
				style={styles.friends}
				horizontal={true}
			/>
        </SafeAreaView>
	</>
  );
}
//"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"
const styles = StyleSheet.create({
	friends: {

	},
	story: {
		backgroundColor: 'red',
		borderRadius: 50,
		height: "100%",
		margin: 20
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
});