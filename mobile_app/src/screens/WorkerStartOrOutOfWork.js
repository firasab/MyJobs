import { SafeAreaView, Text, View, } from "react-native";
  import axios from "axios";
  import React from "react";
  import { useState } from "react";
  import { NetworkContext } from '../context/NetworkContext';
  import SubmitButton from '../components/common/SubmitButton';
 
  //worker sign in and sign out page
  const WorkerStartOrOutOfWork = ({ route  }) => {
    const worker = React.useContext(NetworkContext);
    const inituser = {hourS:"",date:"",hourE:""};
    const [user,setUser]=useState(inituser)
    const [disablestart,setDiss]=useState(false);
    const [disableend,setDise]=useState(false);
    const d = new Date();
    let h = d.getHours() +3;
    let m = d.getMinutes();
    let s = d.getSeconds();
    let time = h + ":" + m + ":" + s;

    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
      
    
    const startTime =  () => { 
     setUser({hourS:time});
      user.date = date;
      
      setDiss(true);
      setDise(true);
      alert("You have started your shift! ");
     
     }

     //post method of sign in sign out worker hours
     const finishTime =  () => { 
      user.hourE = time;
      user.date = date;

      setDise(false);
      setDiss(false);
     
        axios.post(`https://myjobss.herokuapp.com/workers/shift/${worker.worker.worker._id}`,user)
           .then(() => {  
            
             alert("You have finished your shift! ");
             
           })
           .catch((err) => alert("check your server"));
     }
    
    //design of worker sign in and sign out page
    return (<>
      <SafeAreaView >
        <View >
          <Text style={{ textAlign: "center", fontSize: 20,  fontWeight: "bold", padding: 20,}}>Welcome {worker.worker.worker.name} </Text>
        </View>

        <View >
            <Text style={{ textAlign: "center", fontSize: 20,  fontWeight: "bold", top: 40} }>Click on start when you start work </Text>
            <SubmitButton  disabled={disablestart} style={{width: 300 , left:50, top:20 }} primary title="Start your shift "  type="FORTH"  onPress={startTime} /> 
        </View>

        <View >
           <Text style={{ textAlign: "center", fontSize: 20,  fontWeight: "bold", top: 40}}>Click on finish when you finish work  </Text>
           <SubmitButton  disabled={!disableend} style={{width: 300 , left:50, top:20}} danger  title="Finish your shift " type="FORTH" onPress={finishTime} />  
        </View>
        </SafeAreaView>  

           </>
    );
  };
  

  

  
  export default WorkerStartOrOutOfWork;
  