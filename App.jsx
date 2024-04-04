import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
// import SignUpMain from './src/screens/SignupScreen/SignUpMain';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation';
import { DataProvider } from './src/context';


function App() {

  return (
    <SafeAreaView style={styles.container}>
      <DataProvider>
      <NavigationContainer>
     
        {/* <SignUpMain/> */}
        <StackNavigation />
     
      </NavigationContainer>
      </DataProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323139',
  },
});
export default App;
