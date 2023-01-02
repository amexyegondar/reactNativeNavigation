import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TextInput } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Home({navigation }) {
  const[name,setName]=useState()
 const[data,setData]=useState([])
 const fetchdata=()=>{
  axios.get('http://127.0.0.1:8000/api/telist').then((res)=>
  setData(res.data)
  )
 }
 useEffect(()=>{
  fetchdata() 

 },[])
 const teachdel=(id)=>{
  axios.delete(`http://127.0.0.1:8000/api/tedel/${id}`).then(
    fetchdata()
  )


 }
 const postdata=(e)=>{
  setName(e.target.value)
  axios.post('http://127.0.0.1:8000/api/telist',{
   
   name:name,
  
  }).then((response)=>
   setData(response.data)
  )
}
//  const add=(e)=>{
//   setName(e.target.value)
//  axios.post('http://127.0.0.1:8000/api/telist',{name:name}).then(
//   fetchdata()
//  )

//  }
  return (
    <View >
      {data.map((d)=>{
   return  <View key={d.id}>
    <Text>{d.name}</Text>
    
    <Button title='Delete' onPress={()=>teachdel(d.id)}></Button>
   </View>
         
      })}
      
      <StatusBar style="auto" />
      <TextInput placeholder='add teacher' value={name} />
      <Button title='ADD' onPress={postdata}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
