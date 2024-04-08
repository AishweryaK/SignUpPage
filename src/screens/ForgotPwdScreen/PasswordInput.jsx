import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FORGOT_TYPE } from "../../utils/constants";

function PasswordComponent({ text, stateProp, isConfirmPassword}) {
    const [showPass, setShowPass] = useState(false);
    const [error, setError]=useState(false);
    const [confirmErr, setConfirmErr]=useState(false);

    const validEmail = (input ) =>  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input)
    const validPassword = (input) => /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(input)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleInput=(input) => {
        if(text==FORGOT_TYPE.CONFIRM && input!="" && input!=isConfirmPassword)
        {
            setConfirmErr(true);
        }
        else
        {
            setConfirmErr(false);
            stateProp(input);
        }
    }


   return ( 
   <View>
    <Text style={styles.text}>
               {text}
            </Text>
    <View style={styles.input}>
            <TextInput 
            style={styles.inputPassword}
        onChangeText={handleInput}
        placeholder= {text==FORGOT_TYPE.SET? "Set Password" : 
        text==FORGOT_TYPE.CONFIRM? "Confirm Password" : "Enter Email"}
        placeholderTextColor="gray"
        keyboardType={"default"}
        secureTextEntry={text==FORGOT_TYPE.EMAIL? false : !showPass} 
        // value={pass}
         />
       {text!=FORGOT_TYPE.EMAIL && <TouchableOpacity style={styles.showOpacity} 
       onPress= {toggleShowPass}  >
                       <Text style={styles.showText}>
                           {showPass ? "Hide" : "Show"}
                       </Text>
                   </TouchableOpacity> 
}
                   </View>
                   {error &&
                    <Text style={styles.errText}>
                         {text.toLowerCase()} entered incorrectly.
                     </Text>
                     }
                     {confirmErr &&
                    <Text style={styles.errText}>
                        Passwords do not match.
                     </Text>
                     }
        </View>
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
        errText: {
            color: "red",
            fontSize: 15,
            paddingLeft: 45,
    
        },
    }
)

export default PasswordComponent;