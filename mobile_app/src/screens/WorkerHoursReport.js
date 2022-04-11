  import { SafeAreaView, Text, View,FlatList } from "react-native";
  import axios from "axios";
  import React from "react";
  import { useEffect } from "react";
  import { useState } from "react";
  import { NetworkContext } from '../context/NetworkContext';
  import SubmitButton from '../components/common/SubmitButton';
 
  
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
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <SafeAreaView >
            <Text >
              {item.date} :{" "}
              {item.hourS} :{" "}
              {item.hourE}
            </Text>
          </SafeAreaView>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
        </SafeAreaView>  

           </>
    );
  };
  

  

  
  export default WorkerHoursReport;
  