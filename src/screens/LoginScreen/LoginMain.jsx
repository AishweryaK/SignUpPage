import React, {useContext, useState, useRef, useEffect} from "react";
import { View , Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native";
import { NAVIGATION } from "../../utils/constants";
import { DataContext } from "../../context";
import AsyncStorage from "@react-native-async-storage/async-storage";


function LoginMain ({navigation, route}) {
    const data = useContext(DataContext)
    const [email, setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [emailError, setEmailError] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [dataInAsync, setDataInAsync] =useState(null);
    // const [passError, setPassError] = useState(false);
    // const errFlag = useRef(false)

    useEffect(() => 
    {
      getAllUsersData();
    }, [])

    // console.log(data,'data');
    
    const getAllUsersData =  async () => {
      try{
        const userDataString = await AsyncStorage.getItem('userData');
        const userDataAsync = JSON.parse(userDataString);
        setDataInAsync(userDataAsync);
          // console.log(userDataString, "userData in async");
          // console.log(userDataAsync, "userDataAsync in async");
          return dataInAsync;
      }
      catch(error)
      {console.log(error);
      }
    }


    const handleForgotP = () => {
      navigation.navigate(NAVIGATION.FORGOTP)
    }

    const toggleShowPass = () => {
      setShowPass(!showPass)
  }

    const handleBlur = () =>

   
     { if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) && email !== "") {
        setEmailError(true);
    } else {
      setEmailError(false);
    }
    // setEmail(input.toLowerCase());
    }

    const handleFocus = () => {
      
        setEmailError(false);

    // else
    // {
    //   setEmailError(true);
    // }
  }

  //THIS IS FOR USECONTEXT-----------------------------------------------------------
  //   const letEmail = data.userData.findIndex(obj=>obj.email==email)
  //   // console.log(asyncData, "asyncData");
  //   console.log(email,'email');
  //   console.log(pass,'password');
  //   console.log(letEmail, "letemail");

  //   const handleLogin= () => {
  //     if(letEmail>=0 && data.userData[letEmail].password==pass)
  //       {
  //         setEmail("");
  //         setPass("");
  //         navigation.navigate(NAVIGATION.WELCOME, {index: letEmail});

          
  //       }
  //       else {
  //         Alert.alert("Invalid Credentials", "Please Sign up")
  //       }
  // }
  //---------------------------------------------------------------------------------------

  
  const handleLogin= () => {
      console.log(dataInAsync, "bhai")
      let letEmail = -1;
      // dataInAsync.findIndex(obj=>obj.email==email)
      if(dataInAsync==null)
      {
        letEmail=-1;
      }
      else
      {
        // data.userData = dataInAsync;
        letEmail=dataInAsync.findIndex(obj=>obj.email==email);
        // letEmail=data.userData.findIndex(obj=>obj.email==email);
      }
        console.log(email,'email');
        console.log(pass,'password');
        console.log(letEmail, "letemail");
      if(letEmail>=0 && dataInAsync[letEmail].password==pass)
        {
          setEmail("");
          setPass("");
          navigation.navigate(NAVIGATION.WELCOME, {index: letEmail, allData: dataInAsync});

          
        }
        else {
          Alert.alert("Invalid Credentials", "Please Sign up")
        }
  }

    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View styles={styles.view}>
              <Text style={styles.heading}>
                Hello!
              </Text >
              <Text style={styles.signIn}>
                Sign in to your account
              </Text>
            <Text style={styles.text}>
                EMAIL ADDRESS
            </Text>
            </View>
        <TextInput 
        style={styles.input}
        onChangeText={(text)=>setEmail(text.toLowerCase())}
        placeholder= "Enter Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={email}
        onBlur={handleBlur}
        onFocus={handleFocus}
       />
          <View>
                {emailError &&
               <Text style={styles.errText}>
                    Email entered incorrectly.
                </Text>
                }
            </View>

            
            <Text style={styles.text}>
                PASSWORD
            </Text>
            
        <View style={styles.input}>
            <TextInput 
            style={styles.inputPassword}
        onChangeText={(text)=>setPass(text)}
        placeholder= "Enter Password"
        placeholderTextColor="gray"
        keyboardType={"default"}
        secureTextEntry={!showPass} 
        value={pass}
         />
        <TouchableOpacity style={styles.showOpacity} onPress= {toggleShowPass} >
                       <Text style={styles.showText}>
                           {showPass ? "Hide" : "Show"}
                       </Text>
                   </TouchableOpacity> 
            </View>
            <TouchableOpacity>
              <Text style={[styles.signup, {textAlign:"right", marginRight:55, marginTop:10}]}
              onPress={handleForgotP}> 
              forgot password?</Text>
            </TouchableOpacity>


        <TouchableOpacity style={styles.button}
        onPress={handleLogin}>
          <Text  style={{textAlign:"center", color:"white"}}> Welcome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}
        onPress={()=> navigation.navigate(NAVIGATION.SIGNUP)}>
          <Text  style={styles.signup}> Dont have an account? Sign up! </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate(NAVIGATION.WELCOME, {index:null})}>
          <Text  style={{textAlign:"center", color:"white"}}> navigate to welcome</Text>
        </TouchableOpacity>
         */}
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
      heading : {
        // alignContent:"center",
        color:"white",
        fontSize: 50,
        // justifyContent:"center",
        textAlign: "center",
        paddingTop:60,
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
    view:{
      // marginTop:10
    }
}
)

export default LoginMain;


// useEffect (()=> {
    //   if(route.params?.logout==true)
    //   {
    //     setEmail("");
    //     setPass("");
    //   }
    // },[route.params?.logout]);
   
    // const handleEmail = (input) =>
    //  { if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input) && input !== "") {
    //     setEmailError(true);
    // } else {
    //   setEmailError(false);
    // }
    // setEmail(input.toLowerCase());
    // }