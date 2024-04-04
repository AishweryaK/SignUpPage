import React, {useContext, useState} from "react";
import { View , Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { NAVIGATION } from "../../utils/constants";
import { DataContext } from "../../context";


function LoginMain ({navigation}) {
    const data = useContext(DataContext)
    const [email, setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [emailErr,setEmailErr]=useState(false);
    // const [emptyErr, setEmptyErr]=useState(false);
    

//    console.log(email, pass, data)

// const validEmail = () =>  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

// if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) && email!="")
// {
//   setEmailErr(true);
// }
// else setEmailErr(false);

const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);

    const validateEmail = () => {
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) && email !== "") {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const validatePassword = () => {
        if (pass === "") {
            setPassError(true);
        } else {
            setPassError(false);
        }
    };

    const handleLogin = () => {
        validateEmail();
        validatePassword();
       
    };

    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
        <TextInput 
        style={styles.input}
        onChangeText={(text)=>setEmail(text)}
        placeholder= "Enter Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        >
          <View>
                {err &&
               <Text style={styles.errText}>
                    Email entered incorrectly.
                </Text>
                }
            </View>
        </TextInput>
        <TextInput 
        style={styles.input}
        onChangeText={(text)=>setPass(text)}
        placeholder= "Enter Password"
        placeholderTextColor="gray"
        keyboardType={"default"}
        >
        </TextInput>

        <TouchableOpacity 
        onPress={()=> navigation.navigate(NAVIGATION.SIGNUP)}>
          <Text  style={styles.button}> Navigate to SignUp </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> navigation.navigate(NAVIGATION.LOGIN_HOME)}>
          <Text  style={styles.button}> Navigate to login</Text>
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
        marginBottom: 35,
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
        marginTop:20,
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
      },
      text: {
        color: 'white',
        textAlign: 'center',
      },
      signup:{
        textDecorationLine:"underline",
        color:"white",
        justifyContent:"center",
        alignContent:"center"
      },
      touchable:{
        alignContent:"center",
        marginTop:"20"
      },
      errText: {
        color: "red",
        fontSize: 15,
        paddingLeft: 45,

    },
}
)

export default LoginMain;