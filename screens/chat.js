import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, FlatList } from 'react-native';

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

const Item = ({ title, status }) => (
    <View style={styles.chat}>
		<Image style={styles.avatar} source={require('../logo.jpeg')}/>
      	<View>
		  	<Text style={styles.name}>{title}</Text>
			<View style={styles.status}>
			  	<Text style={styles.statusText}>{status}</Text>
			</View>
		</View>
    </View>
  );
  
export default function Chat() {

    const renderItem = ({ item }) => <Item title={item.title} status={item.status}/>;
    return (
    <>
        <SafeAreaView>
            <FlatList 
				data={DATA} 
				renderItem={renderItem} 
				keyExtractor={item => item.id} 
			/>
        </SafeAreaView>
	</>
  );
}
//"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"
const styles = StyleSheet.create({
	chat: {
		borderBottomWidth: 1,
		borderBottomColor: "#B7B7B7",
		padding: "5%",
		flexDirection: "row",
		alignItems: "center"
	},
	name: {
		paddingLeft: 10,
		fontWeight: "600"
	},
	status: {
		paddingLeft: 10,
	},
	statusText: {
		color: "#B7B7B7"
	},
	avatar: {
		borderRadius: 50,
		width: 64,
		height: 64
	}
});