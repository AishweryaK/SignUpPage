import React, {useContext, useState, useRef} from "react";
import { View , Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native";
import { NAVIGATION } from "../../utils/constants";
import { DataContext } from "../../context";


function LoginMain ({navigation}) {
    const data = useContext(DataContext)
    const [email, setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const errFlag = useRef(false)

    console.log(data,'data');
   

    const handleEmail = (input) =>
     { if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input) && input !== "") {
        setEmailError(true);
    } else {
      setEmail(input.toLowerCase());
        setEmailError(false);
    }
    }

    const letEmail = data.userData.findIndex(obj=>obj.email==email)
    console.log(email,'email');
    console.log(pass,'password');
    console.log(letEmail, "letemail")
    const handleLogin= () => {
      if(letEmail>=0 && data.userData[letEmail].password==pass)
        {
          navigation.navigate(NAVIGATION.WELCOME, {index: letEmail});
          
        }
        else {
          Alert.alert("Invalid Credentials", "Please Sign up")
        }
  }

    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View styles={styles.view}>
            <Text style={styles.text}>
                EMAIL ADDRESS
            </Text>
            </View>
        <TextInput 
        style={styles.input}
        onChangeText={handleEmail}
        placeholder= "Enter Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
       />
          <View>
                {emailError &&
               <Text style={styles.errText}>
                    Email entered incorrectly.
                </Text>
                }
            </View>

            <View styles={styles.view}>
            <Text style={styles.text}>
                PASSWORD
            </Text>
            </View>
        <TextInput 
        style={styles.input}
        onChangeText={(text)=>setPass(text)}
        placeholder= "Enter Password"
        placeholderTextColor="gray"
        keyboardType={"default"}
        >
        </TextInput>
        {/* <TouchableOpacity 
        onPress={()=> navigation.navigate(NAVIGATION.SIGNUP)}>
          <Text  style={styles.button}> Navigate to SignUp </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button}
        onPress={handleLogin}>
          <Text  style={{textAlign:"center", color:"white"}}> Welcome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}
        onPress={()=> navigation.navigate(NAVIGATION.SIGNUP)}>
          <Text  style={styles.signup}> Dont have an account? Sign up! </Text>
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#323139',
        // marginBottom: 35,
        justifyContent:"center",
        // alignItems:"center"
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
      signup:{
        textDecorationLine:"underline",
        color:"white",
        justifyContent:"center",
        alignContent:"center"
      },
      touchable:{
        alignContent:"center",
        paddingHorizontal:110
      },
      errText: {
        color: "red",
        fontSize: 15,
        paddingLeft: 45,

    },
    view:{
      padingTop:10
    }
}
)

export default LoginMain;