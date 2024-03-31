import React,{useState, useRef} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import DatePicker from "./DatePicker";
import PhoneNumCode from "./PhoneNumCode";



function ElementComponent ({text, changeProp, validation, isConfirmPassword}) {
    const [err,setError] = useState(false)
    const [focus,setFocus] =useState(false)
    const [pssErr,setPss] = useState(false)
    const [emptyErr,setemptyError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const flag = useRef(false)
    const dOB = useRef(false)
    const phNum =useRef(false)
    const keyBoard= useRef("default")
    const numLength = useRef(40)


    const onCheck = (input) => {
        if(text=="CONFIRM PASSWORD" && input!=isConfirmPassword){
            setPss(true)
        }
        else setPss(false)

        if(text!="CONFIRM PASSWORD" && !validation(input) && input!="" )
        {
            setError(true)
        }
        else
       { changeProp(input);
         setError(false);} 
}


    const handleFocus = () => {
        if(text=="SET PASSWORD") 
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

        if(text=="PHONE NUMBER")
        {
            numLength.current=10;
            keyBoard.current="number-pad"
        }
       else if(text=="FIRST NAME")
        {
            numLength.current=15;
        }
        else if(text=="LAST NAME")
        {
            numLength.current=15;
        }


    if(text=="SET PASSWORD" || text=="CONFIRM PASSWORD")
    {
        flag.current=true;
    }
    else if(text=="DATE OF BIRTH")
    {
        dOB.current =true;
    }
    else if(text=="PHONE NUMBER")
    {
        phNum.current=true;
    }

    return (
        <View>
            <Text style={styles.text}>
                {text}
            </Text>
    
               {/* { dOB.current ?
               (<DatePicker  changeProp={changeProp} />)
               : phNum.current ? 
               ( <PhoneNumCode changeProp={changeProp} validation={validation} /> )
               :(<TextInput 
            style={styles.input}
            onChangeText={onCheck}
            placeholder= {text.toLowerCase()}
            onFocus = {passShow}
            placeholderTextColor="gray"
            keyboardType={keyBoard.current}
            secureTextEntry={flag.current} 
            maxLength={numLength.current}
            onBlur={handleFocus}
            >
            {flag.current && 
                (<TouchableOpacity style={styles.showOpacity} onPress= {toggleShowPassword} >
                       <Text style={styles.showText}>
                           {showPassword ? "Show" : "Hide"}
                       </Text>
                   </TouchableOpacity>
                   </TextInput> )}
                   )
            
} */}

{ dOB.current ?
           (<DatePicker  changeProp={changeProp} />)
           : phNum.current ? 
           ( <PhoneNumCode changeProp={changeProp} validation={validation} /> )
           :( 
           <TextInput 
        style={styles.input}
        onChangeText={onCheck}
        placeholder= {text.toLowerCase()}
        onFocus = {handleFocus}
        placeholderTextColor="gray"
        keyboardType={keyBoard.current}
        secureTextEntry={flag.current} 
        maxLength={numLength.current}
        onBlur={handleBlur}
        >
            {/* {flag.current &&  */}
         {/* <Button title=" aaa"  onClick= {toggleShowPassword} /> */}
                 {/* <Text style={styles.showText}>
            //         {showPassword ? "Show" : "Hide"}
            //     </Text> */}
            {/* //  </Button>  */}
            
        </TextInput>
            
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
                {focus &&
                <Text style={styles.passwordText}>
                    Password should be atleast 8 characters long 
                    consisting of one or more uppercase, numbers and special characters.
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
            height: 40,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 20,
            padding:10,
            paddingHorizontal:15,
            marginHorizontal : 40,
            color:"white",
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
        }
    }
)

export default ElementComponent;