import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

import AssetExample from './components/FabinExample';
import Navbar from './components/NavBar';
import Txt from './components/textComponents';

const handleNavPress = (route) => {
  console.log(`Navigating to ${route}`);
};

export default function App() {
  return (
    <SafeAreaView>
      <Navbar onPress={handleNavPress} />

      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

