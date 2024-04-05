import React, { useContext } from "react";
import { Text, SafeAreaView, ScrollView, View  } from "react-native";
import { DataContext } from "../../context";


function WelcomeMain ({route}) {

    const {userData, setUserData}= useContext(DataContext);
    const {index} = route.params;
    console.log(index)
    return (
        <SafeAreaView>
        <ScrollView>
        <View>
        <Text>
           Welcome {userData[index].first} !!
        </Text>
        <Text>
            Name: {userData[index].first} {userData[index].last}
        </Text>
        <Text>
           Date of Birth: {userData[index].dob}
        </Text>
        <Text>
          Email : {userData[index].email}
        </Text>
        <Text>
           Phone Number : {userData[index].phoneNum}
        </Text>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
       
}

export default WelcomeMain;

