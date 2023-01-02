
import Home from './teacher';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Settings from'./Settings';
import about from './student';
import contact from './employee';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerType='back' drawerStyle={{backgroundColor:'red'}} initialRouteName="Home">
      <Drawer.Screen  name="teacher" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="employee" component={contact} />
      <Drawer.Screen name="student" component={about} />
    </Drawer.Navigator>
  </NavigationContainer> 
  );
}


