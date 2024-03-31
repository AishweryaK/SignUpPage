import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import ForeGround from './src/ForeGround';
import ProfileImage from './src/ProfileImage';
import ElementComponent from './src/ElementComponent';
import { INPUT_TYPE } from './src/utils/constants';



function App() {

  const validName = (input ) => /^[A-Za-z]+$/gi.test(input)
  const validPhoneNumber = (input ) =>  /^\d{10}$/.test(input)
  // const validEmail = (input ) =>  /^[(\w\d\W)+]+@[\w+]+(.[\w+]{2,})+$/i.test(input)
  const validEmail = (input ) =>  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input)
  // const validDob = (input ) => /^[A-Za-z]+$/gi.test(input)
  const validPassword = (input) => /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(input)

  const [firstName, setFirstName] = useState('Not provided');
  const [lastName, setLastName] = useState('Not provided');
  const [email, setEmail] = useState('Not provided');
  const [dob, setDob] = useState('Not provided');
  const [phoneNo, setPhoneNo] = useState('Not provided');
  const [password, setPassword] = useState('Not provided');
  const [passwordConfirm, setPasswordConfirm] = useState('Not provided');

  const [first, setFirst] = useState('Not provided');

  const onSubmit = () => {
    if (password === passwordConfirm)
      {
        if(firstName!='Not provided' && lastName!='Not provided' && email!='Not provided' 
        && dob!='Not provided' && phoneNo!='Not provided' && phoneNo!="")
      {Alert.alert(
        'Data Entered By User ',
        `FIRST NAME = ${firstName}
      LAST NAME = ${lastName}
      EMAIL ADDRESS = ${email}
      DATE OF BIRTH = ${dob}
      PHONE NUMBER = ${phoneNo}`,
      );
      }
      else
      Alert.alert("Incorrect or Partial Information", "Please fill in correct credentials");
    }
    else 
    Alert.alert('Error', 'Passwords NOT entered or do NOT match!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileImage />
        <ForeGround />

        <ElementComponent text="FIRST NAME" changeProp={setFirstName} validation= {validName} type={INPUT_TYPE.FIRST} />

        <ElementComponent text="LAST NAME" changeProp={setLastName} validation= {validName} />

        <ElementComponent text="EMAIL ADDRESS" changeProp={setEmail} validation= {validEmail} />

        <ElementComponent text="DATE OF BIRTH" changeProp={setDob}  validation={validName}/>

        <ElementComponent text="PHONE NUMBER" changeProp={setPhoneNo} validation= {validPhoneNumber} />

        <ElementComponent text="SET PASSWORD" changeProp={setPassword} validation= {validPassword} />

        <ElementComponent text="CONFIRM PASSWORD" changeProp={setPasswordConfirm} validation= {null} isConfirmPassword={password} />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323139',
  },
  button: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 40,
    backgroundColor: '#36A472',
    marginTop: 15,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
export default App;
