import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar
} from "react-native";



const DATA = [
    {
      title: "20.1.2022",
      data: ["sunday from 6:30 to 15:00", "monday from 6:30 to 13:00", "friday from 6:30 to 15:00"]
    },
    {
      title: "21.1.2022",
      data: ["friday from 6:30 to 18:00", "saturday from 6:30 to 17:00", "sunday from 6:30 to 15:00"]
    }
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const Tasks = (props) => {
  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  )
}

export default Tasks






const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 8,
    backgroundColor:'white'
  },
  item: {
    backgroundColor: "black",
    padding: 20,
    marginVertical: 8,
    borderRadius:5
  },
  header: {
    fontSize: 32,
    backgroundColor: "white"
  },
  title: {
    fontSize: 24,
    color: "white"
  }
});

