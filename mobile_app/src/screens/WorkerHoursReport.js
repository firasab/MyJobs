  import { SafeAreaView, Text, FlatList , Table } from "react-native";
  import axios from "axios";
  import React from "react";
  import { useEffect } from "react";
  import { useState } from "react";
  import { NetworkContext } from '../context/NetworkContext';
  import { View, StyleSheet } from 'react-native';
  import { DataTable } from 'react-native-paper';
 
  
  const WorkerHoursReport = ({ route  }) => {
    const worker = React.useContext(NetworkContext);
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


    useEffect(async ()  => {

        await axios.patch(`https://myjobss.herokuapp.com/workers/gethours/${worker.worker.worker._id}`,user)
        .then((resp) => {  
         setArr (resp.data);
         
        })
        .catch((err) => alert("check your server"));

      },[arr]);
      
  
    
  
    return (<>
      <SafeAreaView >
      <Text style={{ textAlign: "center", fontSize: 20,  fontWeight: "bold", padding: 20,}}> Monthly hours report</Text>

      <FlatList
        data={arr}
        renderItem={({ item }) => (

          <SafeAreaView >
                <View style={styles.container}>
                  <DataTable>
                  <DataTable.Header>
                    <DataTable.Title >Date</DataTable.Title>
                    <DataTable.Title>Started At</DataTable.Title>
                    <DataTable.Title numeric>Finished At</DataTable.Title>
                  </DataTable.Header>

                  <DataTable.Row>
                    <DataTable.Cell> {item.date}</DataTable.Cell>
                    <DataTable.Cell>{item.hourS}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.hourE} </DataTable.Cell>
                  </DataTable.Row>



                  </DataTable>
                </View>
            
          </SafeAreaView>
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
            },
          });
  

  
  export default WorkerHoursReport;
  



 


  


  


