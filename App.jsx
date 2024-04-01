import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import SignUpMain from './src/SignUpMain';


function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SignUpMain/>
      </ScrollView>
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
