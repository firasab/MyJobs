import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
const DATA = [
	{
	  id: '0',
	  title: 'Started work at',
	},
	{
	  id: '1',
	  title: 'Finished work at',
	}
  ];
const Item = ({ title }) => (
	<View style={styles.item}>
	  <Text style={styles.title}>{title}</Text>
	</View>
  );
const Reports = (props) => {
	const renderItem = ({ item }) => (
		<Item title={item.title} />
	  );
	return (
		<SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
export default Reports;



const styles = StyleSheet.create({
  container: {
    
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'black',
    padding: 15,
    marginVertical: 4,
	marginHorizontal: 10,
	borderRadius:15,
  },
  title: {
	fontSize: 32,
	color:"white",
	fontWeight:'bold',
  },
});

