import { Text, SafeAreaView } from "react-native";
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
