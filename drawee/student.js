import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import axios from 'axios';
export default function about({navigation}) {
  const[data,setData]=useState([])
 const fetchdata=()=>{
  axios.get('http://127.0.0.1:8000/api/stulist').then((res)=>
  setData(res.data)
  )
 }
 useEffect(()=>{
  fetchdata() 

 },[])
 const studel=(id)=>{
  axios.delete(`http://127.0.0.1:8000/api/studel/${id}`).then(
    fetchdata()
  )


 }
  return (
    <View  >
        {data.map((d)=>{
   return  <View>
    <Text>{d.name}</Text>
    
    <Button title='Delete'  onPress={()=>studel(d.id)}>Delete</Button>
   </View>
         
      })}
      <Button onPress={()=> navigation.navigate('Home')} title='Go to Home' color='#00df9a'/>
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