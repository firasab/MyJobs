import React from 'react'
import { Text,View,StyleSheet,Image} from 'react-native';
import Background from '../components/Background'
const Profile = (props) => {
	return (
		<Background>
		<View style={{  alignItems: 'center' }}>
			<Image source={require('../assets/pic.jpeg')} style={styles.pic} />
			<Text style={styles.text} >Firas </Text>
			<Text style={styles.text} >Abu Sneneh</Text>
			<Text style={styles.text1} >0528076374</Text>
			
		</View>
		</Background>
	);
}
const styles = StyleSheet.create({
	pic: {
	  marginTop: 4,
	  justifyContent: 'center',
	  width: 200,
	  height: 200,
	},
	text: {
		marginTop: 30,
		
		
    	//paddingVertical: 8,
		//justifyContent: 'center',
		fontSize: 24,
		fontWeight:'bold',
		borderColor: "black",
		textAlign: "center",
		overflow: 'hidden'
		},
		text1: {
			paddingTop:40,
			justifyContent: 'center',
			fontSize: 20,
			borderRadius: 6,
			borderColor: "black",
			}
  })
export default Profile;