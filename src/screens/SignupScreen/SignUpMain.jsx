import React, {useContext, useState} from 'react';

import {
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import ForeGround from '../../ForeGround';
import ProfileImage from '../../ProfileImage';
import ElementComponent from './ElementComponent';
import { INPUT_TYPE , NAVIGATION} from '../../utils/constants';
import { signUpStyles } from './styles';
import { DataContext } from '../../context';



function SignUpMain({navigation}) {
  const data=useContext(DataContext)
  // const {userData, setUserData}=useContext(DataContext)
// console.log(data)
  const validName = (input ) => /^[A-Za-z]+$/gi.test(input)
  const validPhoneNumber = (input ) =>  /^\d{10}$/.test(input)
  const validEmail = (input ) =>  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input)
  const validPassword = (input) => /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(input)

  const [firstName, setFirstName] = useState('Not provided');
  const [lastName, setLastName] = useState('Not provided');
  const [email, setEmail] = useState('Not provided');
  const [dob, setDob] = useState('Not provided');
  const [phoneNo, setPhoneNo] = useState('Not provided');
  const [password, setPassword] = useState('Not provided');
  const [passwordConfirm, setPasswordConfirm] = useState('Not provided');

  const onSubmit =  () => {
    if (password === passwordConfirm)
      {
        if(firstName!='Not provided' && lastName!='Not provided' && email!='Not provided' 
        && dob!='Not provided' && phoneNo!='Not provided' && phoneNo!="")
      {
      data.setUserData([
        ...data.userData,
        {
           first: firstName,
           last: lastName,
           email: email,
           dob: dob,
           phoneNum: phoneNo,
           password: password,
        },
     ]);
      // console.log(data)

        navigation.navigate(NAVIGATION.LOGIN_HOME)  

      }
      else
      Alert.alert("Incorrect or Partial Information", "Please fill in correct credentials");
    }
    else 
    Alert.alert('Error', 'Passwords NOT entered or do NOT match!');
  } 

  // const onSubmit = async () => {
  //   try{
  //     data.setUserData([
  //       ...data.userData,
  //       {
  //          first: firstName,
  //          last: lastName,
  //          email: email,
  //          dob: dob,
  //          phoneNum: phoneNo,
  //          password: password,
  //       },
  //    ]);
  //     navigation.navigate(NAVIGATION.LOGIN_HOME); }
  //     catch(err)
  //     {console.log("There occured an error")}
    
  // }

  return (
    <SafeAreaView style={signUpStyles.container}>
      <ScrollView>
        <ProfileImage />
        <ForeGround />

        <ElementComponent text={INPUT_TYPE.FIRST} changeProp={setFirstName} validation= {validName} type={INPUT_TYPE.FIRST} >
          
        </ElementComponent>

        <ElementComponent text={INPUT_TYPE.LAST} changeProp={setLastName} validation= {validName} />

        <ElementComponent text={INPUT_TYPE.EMAIL} changeProp={setEmail} validation= {validEmail} />

        <ElementComponent text={INPUT_TYPE.DOB} changeProp={setDob}  validation={validName}/>

        <ElementComponent text={INPUT_TYPE.PHONE} changeProp={setPhoneNo} validation= {validPhoneNumber} />

        <ElementComponent text={INPUT_TYPE.PASSWORD} changeProp={setPassword} validation= {validPassword} />

        <ElementComponent text={INPUT_TYPE.CONFIRM} changeProp={setPasswordConfirm} validation= {null} isConfirmPassword={password} />

        <TouchableOpacity style={signUpStyles.button} onPress={onSubmit}>
          <Text style={signUpStyles.text}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}


export default SignUpMain;




//   Alert.alert(
      //   'Data Entered By User ',
      //   `FIRST NAME = ${firstName}
      // LAST NAME = ${lastName}
      // EMAIL ADDRESS = ${email}
      // DATE OF BIRTH = ${dob}
      // PHONE NUMBER = ${phoneNo}`,
      // );
      // await data.setUserData({
      //   first: firstName,
      //   last: lastName,
      //   email: email,
      //   dob: dob,
      //   phoneNum: phoneNo,
      //   password:password,
      // });