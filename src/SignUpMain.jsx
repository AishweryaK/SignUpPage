import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import ForeGround from './ForeGround';
import ProfileImage from './ProfileImage';
import ElementComponent from './ElementComponent';
import { INPUT_TYPE } from './utils/constants';



function SignUpMain() {

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

        <ElementComponent text={INPUT_TYPE.FIRST} changeProp={setFirstName} validation= {validName} type={INPUT_TYPE.FIRST} />

        <ElementComponent text={INPUT_TYPE.LAST} changeProp={setLastName} validation= {validName} />

        <ElementComponent text={INPUT_TYPE.EMAIL} changeProp={setEmail} validation= {validEmail} />

        <ElementComponent text={INPUT_TYPE.DOB} changeProp={setDob}  validation={validName}/>

        <ElementComponent text={INPUT_TYPE.PHONE} changeProp={setPhoneNo} validation= {validPhoneNumber} />

        <ElementComponent text={INPUT_TYPE.PASSWORD} changeProp={setPassword} validation= {validPassword} />

        <ElementComponent text={INPUT_TYPE.CONFIRM} changeProp={setPasswordConfirm} validation= {null} isConfirmPassword={password} />

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
    marginBottom: 35,
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
    marginTop: 25,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  signup: {
    padding : 10,
  },
});
export default SignUpMain;