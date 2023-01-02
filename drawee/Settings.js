
import { StyleSheet, Text, View ,Button} from 'react-native';
import { color } from 'react-native-reanimated';



export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#00df9a'}}>settings</Text>
      <Button onPress={()=> navigation.navigate('Home')} title='Go to Home' color='#00df9a'/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'center',
   backgroundColor:'#000300',
   alignItems:'center',
 
  }
  
  
  
  
  })
