import React, { useState, useRef} from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const PhoneNumCode = ({changeProp}) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  // const [valid, setValid] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  // useEffect(() => {
  //   changeProp(value);
  // }, [value, changeProp]);
  // console.log(typeof(value) + "hjdh")

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View 
      style={styles.container}
      >
        <SafeAreaView 
        style={styles.wrapper}
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
              
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
              if(!phoneInput.current?.isValidNumber(value))
              changeProp(text);
            else changeProp("");
              
            }}
            containerStyle={styles.smallContainer}
            textContainerStyle={styles.bigContainer}
            withDarkTheme
            withShadow
            autoFocus
            textColor={{ color: "white" }} 
            placeholderTextColor={{ color: "white" }}
            codeTextStyle={{ color: "white" }}
          />

           {/* {!phoneInput.current?.isValidNumber(value) && (
            <View >
              <Text style={styles.message}>Invalid Phone Number</Text>
            </View>
          )} */}

          {value === "" ? (
            <View>
              <Text style={styles.message}>Enter phone number</Text>
            </View>
          ) : !phoneInput.current?.isValidNumber(value) ? (
            <View>
              <Text style={styles.message}>Invalid Phone Number</Text>
            </View>
          ) : null} 

        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "#323139",
     padding :0
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // buttonText:{
  //   color: 'white',
  //   fontSize: 10,
  //   borderRadius: 20,
  // },
  redColor: {
    backgroundColor: '#323139'
  },
  message: {
    color: "red",
    fontSize: 15,
    // paddingLeft: 45,
    textAlign:"left"
  },
  smallContainer: {
    backgroundColor:"#323139",
    borderColor: 'gray',
    borderWidth: 1,
    padding:0,
    // height:40,
    borderRadius: 20,
    // borderBottomLeftRadius:20,
  },
  bigContainer : {
    backgroundColor:"#323139",
    borderColor: 'gray',
    borderWidth: 1,
    padding:0,
    paddingVertical: 9,
    // height:40,
    borderTopRightRadius: 20,
    borderBottomRightRadius:20,
  }
});

export default PhoneNumCode;