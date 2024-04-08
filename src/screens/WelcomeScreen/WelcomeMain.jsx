import React, { useContext } from "react";
import { Text, SafeAreaView, ScrollView, View, TouchableOpacity, StyleSheet  } from "react-native";
import { DataContext } from "../../context";
import { NAVIGATION } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";


function WelcomeMain ({route, navigation}) {

    const {userData, setUserData}= useContext(DataContext);
    const {index, allData} = route.params;
    // console.log(index)

    const handleLogout = () => {
        navigation.navigate(NAVIGATION.LOGIN_HOME);
    }

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <View>
        <Text style={styles.heading}>
           Welcome!!
        </Text>
        <Text style={styles.signIn}>
           Your details are mentioned below
        </Text>

        <Text style={styles.text}>
        <Text style={styles.field}>NAME</Text>
            {/* : {userData[index].first} {userData[index].last} */}
            : {allData[index].first} {allData[index].last}
        </Text>

        <Text style={styles.text}>
        <Text style={styles.field}>DATE OF BIRTH</Text>
            {/* : {userData[index].dob} */}
            : {allData[index].dob}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.field}>EMAIL ADDRESS</Text>
           {/* : {userData[index].email} */}
           : {allData[index].email}
        </Text>


        <Text style={styles.text}>
        <Text style={styles.field}>PHONE NUMBER</Text>
            {/* : {userData[index].phoneNum} */}
            : {allData[index].phoneNum}
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={handleLogout}>
          <Text  style={{textAlign:"center", color:"white"}}> Logout </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
       
}

const styles= StyleSheet.create(
    {
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
        button: {
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 20,
            padding: 10,
            paddingHorizontal: 15,
            marginHorizontal: 40,
            backgroundColor: '#36A472',
            marginTop: 40,
            marginBottom:25,
          },
          text: {
            color: 'white',
            // textAlign: 'center',
            marginTop:20,        
            paddingLeft:50
            
          },
          field:{
            textDecorationLine: "underline",
            fontWeight:"bold"
          }
    }
)

export default WelcomeMain;

