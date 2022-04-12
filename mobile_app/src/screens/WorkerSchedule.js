import { Text } from "react-native";
import React from "react";
import { NetworkContext } from '../context/NetworkContext';
import { StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const WorkerSchedule = ({ route }) => {
    const worker = React.useContext(NetworkContext);


  return (
      <>
        <Text style={styles.title}> {worker.worker.worker.name}'s Work Schedule</Text>
        <Text style={styles.subTitle}>Your work schedule for the next week</Text>
    
          <Grid style={styles.container}>
          <Row ><Text style={styles.time}>Sunday: 
            <Col><Row><Text style={styles.day}> {worker.worker.worker.isWorkingSun}</Text></Row></Col> 
          </Text></Row>
          <Text>-------------------------------------------------------</Text>
          <Row><Text style={styles.time}>Monday:
            <Col><Row><Text style={styles.day}> {worker.worker.worker.isWorkingMon}</Text></Row></Col>
          </Text></Row>
          <Text>-------------------------------------------------------</Text>
          <Row><Text style={styles.time}>Tuesday:
            <Col><Row><Text style={styles.day}> {worker.worker.worker.isWorkingTues}</Text></Row></Col>
          </Text></Row>
          <Text>-------------------------------------------------------</Text>
          <Row><Text style={styles.time}>Wednesday:
            <Col><Row><Text style={styles.day}> {worker.worker.worker.isWorkingWed}</Text></Row></Col>
          </Text></Row>
          <Text>-------------------------------------------------------</Text>
          <Row><Text style={styles.time}>Thursday:
            <Col><Row><Text style={styles.day}> {worker.worker.worker.isWorkingThur}</Text></Row></Col>
          </Text></Row>
          <Text>-------------------------------------------------------</Text>
          <Row><Text style={styles.time}>Friday:
            <Col><Row><Text style={styles.day}> {worker.worker.worker.isWorkingFri}</Text></Row></Col>
          </Text></Row>
          <Text>-------------------------------------------------------</Text>
          <Row><Text style={styles.time}>Saturday:
            <Col><Row><Text style={styles.day}> {worker.worker.worker.isWorkingSat}</Text></Row></Col>
          </Text></Row>
          </Grid>   
              </>
            );
          };
          const styles = StyleSheet.create({
            container: {
              paddingTop: 10,
              paddingHorizontal: 10,
              left: 100
              
            },
          
            title: {
              fontSize: 30,
              textAlign: "center",
              paddingTop: 10,
            },
            subTitle: {
              fontSize: 20,
              textAlign: "center",
              paddingTop: 10,
            },
            day: {
              fontSize: 18,
              top: 6,
            },
            time: {
              fontSize: 18,
              paddingTop: 14,
            },
          });
          export default WorkerSchedule;



