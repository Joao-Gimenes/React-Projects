import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AccountForm from './Pages/Home/home';
import AccountDetails from './Pages/Datas/data';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AccountForm" component={AccountForm} />
        <Stack.Screen name="AccountDetails" component={AccountDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;