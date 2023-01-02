import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

import axios from 'axios';
import { useEffect, useState } from 'react';
export default function contact({navigation}) {
  const[data,setData]=useState([])
 const fetchdata=()=>{
  axios.get('http://127.0.0.1:8000/api/emplist').then((res)=>
  setData(res.data)
  )
 }
 useEffect(()=>{
  fetchdata() 

 },[])
 const empdel=(id)=>{
  axios.delete(`http://127.0.0.1:8000/api/empdel/${id}`).then(
    fetchdata()
  )


 }
  return (
    <View >
        {data.map((d)=>{
   return  <View key={d.id}>
    <Text>{d.name}</Text>
    
    <Button title='Delete' onPress={()=>empdel(d.id)}>Delete</Button>
   </View>
         
      })}
      <Button   onPress={()=> navigation.navigate('Home')} title='Go to Home' color='#00df9a'/>
      
    </View>
  );
}
const styles=StyleSheet.create({
container:{
 flex:1,
 justifyContent:'center',
 backgroundColor:'#000300',
 alignItems:'center'

}




})