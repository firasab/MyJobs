  import { SafeAreaView, Text, FlatList} from "react-native";
  import axios from "axios";
  import React from "react";
  import { useEffect } from "react";
  import { useState } from "react";
  import { NetworkContext } from '../context/NetworkContext';
  import {  StyleSheet } from 'react-native';
  import { Col, Row, Grid } from "react-native-easy-grid";
  import { useFocusEffect } from "@react-navigation/core";

 
  //worker hours report 
  const WorkerHoursReport = ({ route  }) => {
    const worker = React.useContext(NetworkContext);
    //to sort the date
    const d = new Date();
    let h = d.getHours() +3;
    let m = d.getMinutes();
    let s = d.getSeconds();
    let time = h + ":" + m + ":" + s;

    const [arr,setArr] = useState("");

    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();

    let y =  d.getMonth()+1;
    let user = {mo:""}
    user.mo = "-"+y

    //to patch the report for each month
    useFocusEffect(
      React.useCallback( () => {

         axios.patch(`https://myjobss.herokuapp.com/workers/gethours/${worker.worker.worker._id}`,user)
        .then((resp) => {  
         setArr (resp.data);
         
        })
        .catch((err) => alert("check your server"));

      },[]));
      
  
    
    //the design of worker hours report 
    return (<>
      <SafeAreaView >
      <Text style={{ textAlign: "center", fontSize: 20,  fontWeight: "bold", padding: 20,}}>Current month hours report</Text>

      <FlatList
        data={arr}
        renderItem={({ item }) => (

        <Grid style={styles.container}>
          <Row>
            <Col ><Text style={styles.time}>Date </Text></Col>
            <Col ><Text style={styles.time}>Start At  </Text></Col>
            <Col ><Text style={styles.time}>Finish At  </Text></Col>
          </Row>

          <Text>-----------------------------------------------------------------------------</Text>

          <Row>
            <Col><Row><Text style={styles.day}> {item.date}</Text></Row></Col>
            <Col><Text style={styles.day}> {item.hourS}</Text></Col>
            <Col><Text style={styles.day}> {item.hourE}</Text></Col>
          </Row>

        </Grid> 
        )}
                keyExtractor={(item, index) => index.toString()}
              />
                </SafeAreaView>  

                  </>
            );
          };
          

          const styles = StyleSheet.create({
            container: {
              paddingTop: 70,
              paddingHorizontal: 30,
              left: 30,
              top: -50
            },
          });
  

  
  export default WorkerHoursReport;
  



 
 


  



