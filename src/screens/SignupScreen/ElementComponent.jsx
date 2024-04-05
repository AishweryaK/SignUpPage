import React,{useState, useRef} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import DatePicker from "../../DatePicker";
import PhoneNumCode from "../../PhoneNumCode";
import { INPUT_TYPE } from "../../utils/constants";
import { DataContext } from "../../context";



function ElementComponent ({text, changeProp, validation, isConfirmPassword}) {
    const [err,setError] = useState(false)
    const [focus,setFocus] =useState(false)
    const [pssErr,setPss] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const flag = useRef(false)
    const emptyErr=useRef(false)   
    const dOB = useRef(false)
    const phNum =useRef(false)
    const keyBoard= useRef("default")
    const numLength = useRef(40)


    const onCheck = (input) => {
        // console.log(input,'input');
        if(input=="")
        {
            emptyErr.current=true;
        }
        else emptyErr.current=false;

        if(text==INPUT_TYPE.CONFIRM && input!=isConfirmPassword){
            setPss(true)
        }
        else setPss(false)

        if(text!=INPUT_TYPE.CONFIRM && !validation(input) && input!="" )
        {
            setError(true)
        }
        else if(text==INPUT_TYPE.EMAIL)
       { changeProp(input.toLowerCase());
         setError(false);} 
         else 
       { changeProp(input);
         setError(false);} 
}


    const handleFocus = () => {
        if(text==INPUT_TYPE.PASSWORD) 
        setFocus(true)
    else 
    setFocus(false)
    }

    const handleBlur = () => {
        setFocus(false)
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

        if(text==INPUT_TYPE.PHONE)
        {
            numLength.current=10;
            keyBoard.current="number-pad"
        }
       else if(text==INPUT_TYPE.FIRST)
        {
            numLength.current=15;
        }
        else if(text==INPUT_TYPE.LAST)
        {
            numLength.current=15;
        }


    if(text==INPUT_TYPE.PASSWORD || text==INPUT_TYPE.CONFIRM)
    {
        // console.log(text,'HERE');
        flag.current=true;
    }
    else if(text==INPUT_TYPE.DOB)
    {
        dOB.current =true;
    }
    else if(text==INPUT_TYPE.PHONE)
    {
        phNum.current=true;
    }

    return (
        <View>
            <Text style={styles.text}>
                {text}
            </Text>


{ dOB.current ?
           (<DatePicker  changeProp={changeProp} />)
           : phNum.current ? 
           ( <PhoneNumCode changeProp={changeProp} validation={validation} /> )
           : flag.current ?
           ( <View style={styles.input}>
            <TextInput 
            style={styles.inputPassword}
        onChangeText={onCheck}
        placeholder= {text.toLowerCase()}
        onFocus = {handleFocus}
        placeholderTextColor={"gray"}
        keyboardType={keyBoard.current}
        secureTextEntry={!showPassword} 
        onBlur={handleBlur} />
        <TouchableOpacity style={styles.showOpacity} onPress= {toggleShowPassword} >
                       <Text style={styles.showText}>
                           {showPassword ? "Hide" : "Show"}
                       </Text>
                   </TouchableOpacity> 
            </View>
           )
          : ( 
           <TextInput 
        style={styles.input}
        onChangeText={onCheck}
        placeholder= {text.toLowerCase()}
        onFocus = {handleFocus}
        placeholderTextColor="gray"
        keyboardType={keyBoard.current}
        maxLength={numLength.current}
        onBlur={handleBlur}
        // autoCapitalize="none"
        />
         )
}

            <View>
                {err &&
               <Text style={styles.errText}>
                    {text.toLowerCase()} entered incorrectly.
                </Text>
                }
            </View>
            
            <View>
                {pssErr &&
                <Text style={styles.errText}>
                    Password not equal.
                </Text>
                }
            </View>
            <View>
                {emptyErr.current &&
                <Text style={styles.errText}>
                    Enter {text.toLowerCase()}
                </Text>
                }
            </View>
            <View>
                {focus &&
                <Text style={styles.passwordText}>
                    Password should be atleast 8 characters long 
                    consisting of one or more uppercase, numbers and special characters.
                </Text>
                }
            </View>
        </View>
    )
}

const styles= StyleSheet.create(
    {
        text: {
            color : "white",
            paddingLeft: 45,
            paddingBottom: 10,
            paddingTop: 25,
            fontWeight:"bold"
        },
        input: {
            display: "flex",
            flexDirection: "row",
            height: 40,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 20,
            // padding:10,
            paddingHorizontal:15,
            marginHorizontal : 40,
            color:"white",
            justifyContent: "space-between",
            // selectionColor:"white"
        },
        errText: {
            color: "red",
            fontSize: 15,
            paddingLeft: 45,

        },
        passwordText : {
            color: "gray",
            fontSize: 15,
            paddingLeft: 45,
            paddingRight: 45,
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
        inputPassword : {
            color:"white",
            // width: 260,
            // fontSize:20,
            // borderWidth:2,
            flex:1,
            // paddingLeft:15,


        }
    }
)

export default ElementComponent;