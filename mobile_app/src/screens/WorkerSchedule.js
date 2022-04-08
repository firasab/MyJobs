// import React from 'react';
// import { Text, View } from 'react-native';
// import Container from '../components/common/Container';
// import { NetworkContext } from '../context/NetworkContext';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// 
// import {
//     StyleSheet,
//     SafeAreaView,
//     Image,
//     TouchableOpacity,
//     FlatList,
//     listWrapper
//   } from "react-native";


// const WorkerSchedule = ({route}) => {
//     const worker = React.useContext(NetworkContext);
    
    
//     return ( <>
//         <Text style={styles.title}> {worker.worker.worker.name}'s Work Schedule</Text>
        
//         {/* <Table >
//             <Text>Sunday:{worker.worker.worker.isWorkingSun}</Text>
//             <Text>Monday:{worker.worker.worker.isWorkingMon}</Text>
//             <Text>Tuesday:{worker.worker.worker.isWorkingTues}</Text>
//             <Text>Wednesday:{worker.worker.worker.isWorkingWed}</Text>
//             <Text>Thurday:{worker.worker.worker.isWorkingThur}</Text>
//             <Text>Friday:{worker.worker.worker.isWorkingFri}</Text>
//             <Text>Saturday:{worker.worker.worker.isWorkingSat}</Text>
            
//         </Table> */}
//         <View style={style.body}>
//             <FlatList data >
            
//             </FlatList>
//         </View>


//         </>
//         );
        
// };

// const style = StyleSheet.create ({
//     body:{
//         backgroundColor: 'red',

//     },
//     listWrapper: {

//     },
//     row: {

//     }


// })

// export default WorkerSchedule;


import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { NetworkContext } from '../context/NetworkContext';
import { StyleSheet } from "react-native";


const WorkerSchedule = ({ route }) => {
    const worker = React.useContext(NetworkContext);
  return (
      <>
    <Text style={styles.title}> {worker.worker.worker.name}'s Work Schedule</Text>
    <SafeAreaView style={styles.bodyContent}>
      <Text style={styles.description}>
        Sunday: <Text style={styles.details}> {worker.worker.worker.isWorkingSun}</Text>
      </Text>

      <Text style={styles.description}>
        Monday:  <Text style={styles.details}> {worker.worker.worker.isWorkingMon}</Text>
      </Text>
     
      <Text style={styles.description}>
        Tuesday: <Text style={styles.details}> {worker.worker.worker.isWorkingTues}</Text>
      </Text>
     
      <Text style={styles.description}>
        Wednesday: <Text style={styles.details}> {worker.worker.worker.isWorkingWed}</Text>
      </Text>
     
      <Text style={styles.description}>
        Thursday:  <Text style={styles.details}> {worker.worker.worker.isWorkingThur} </Text>
      </Text>
     
      <Text style={styles.description}>
        Friday: <Text style={styles.details}> {worker.worker.worker.isWorkingFri}</Text>
      </Text>
      
      <Text style={styles.description}>
        Saturday: <Text style={styles.details}> {worker.worker.worker.isWorkingSat}</Text>
      </Text>
    </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  bodyContent: {
    alignItems: "center",
    marginVertical: 10,
  },

  details: {
    fontSize: 18,
    color: "blue",
  },

  description: {
    fontSize: 20,
    color: "black",
    marginVertical: 10,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 1,
    fontWeight: '500',
  },

});
export default WorkerSchedule;
