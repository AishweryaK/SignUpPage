import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PasswordComponent from "./PasswordInput";
import { FORGOT_TYPE, NAVIGATION } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ForgotPwdMain ({route, navigation}) {
    const [password, setPassword] =useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [email, setEmail]= useState("");
    const [change, setChange] =  useState(false);
    const [myCurrentUser, setMyCurrentUser]=useState({});

    const validEmail = (input ) =>  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input)
    const validPassword = (input) => /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(input)

    // const handleConfirm = () => {
    //     navigation.navigate(NAVIGATION.LOGIN_HOME)
    // }

    // const clearData = async () => {
    //   try {
    //     await AsyncStorage.clear();
    //     console.log('AsyncStorage data cleared successfully.');
    //   } catch (error) {
    //     console.error('Error clearing AsyncStorage data:', error);
    //   }
    // };
    

    console.log(email, "email")
    console.log(password,"password")

    const handleConfirm = async () => {
    const userInfoString = await AsyncStorage.getItem("userInfo");
    const userInfoParsed = JSON.parse(userInfoString);
    console.log(userInfoParsed, "parsed")
    // const currentUser = userInfoParsed.find(user=> user.email===email);
    const currentUserIndex = userInfoParsed.findIndex(user=> user.email===email);
    console.log(currentUserIndex,"index")
    console.log(userInfoParsed[currentUserIndex])
    if(currentUserIndex==-1)
    {
      Alert.alert("User Not Found", "Enter correct email or Sign Up");
    }
    else 
    {
      userInfoParsed[currentUserIndex].password=password;
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfoParsed));
      navigation.navigate(NAVIGATION.LOGIN_HOME);

    }

    }

   return (

   
    <SafeAreaView style={styles.container}>
         <Text style={styles.signIn}>
        Set New Password
        </Text>
        <PasswordComponent text={FORGOT_TYPE.EMAIL} stateProp={setEmail} validation={validEmail} />
         <PasswordComponent text={FORGOT_TYPE.SET} stateProp={setPassword}  validation={validPassword} />
         <PasswordComponent text={FORGOT_TYPE.CONFIRM} stateProp={setConfirmPassword} isConfirmPassword={password}   />
            <TouchableOpacity style={styles.button}
        onPress={handleConfirm}>
          <Text  style={{textAlign:"center", color:"white"}}> Confirm</Text>
        </TouchableOpacity>

         <TouchableOpacity style={[styles.button,{backgroundColor:"gray", marginTop:40}]}
        onPress={()=> navigation.navigate(NAVIGATION.LOGIN_HOME)}>
          <Text  style={{textAlign:"center", color:"white"}}> Go Back </Text>
        </TouchableOpacity> 


        </SafeAreaView>
   )
}

const styles=StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#323139',
            // marginBottom: 35,
            justifyContent:"center",
            // alignItems:"center"
          },
          signIn : {
            color:"white",
            textAlign:"center",
            fontSize:20,
            marginBottom:20,
          },
        input : {
            display: "flex",
            flexDirection: "row",
            height: 40,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 20,
            // padding:10,
            paddingHorizontal:15,
            marginHorizontal : 40,
            marginTop:10,
            color:"white",
            justifyContent: "space-between",
        },
        inputPassword : {
          color:"white",
          flex:1,
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
            marginBottom:25,
          },
          text: {
            color: 'white',
            // textAlign: 'center',
            marginTop:20,
            paddingLeft:50
          },
          showOpacity: {
            padding: 5,
            paddingVertical:7,
            // marginRight:5
        },
        showText : {
            color:"white",
            fontSize:16,
            textDecorationLine:"underline"
        },
    }
)

export default ForgotPwdMain;