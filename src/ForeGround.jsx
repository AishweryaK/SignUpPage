import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import BackGroundColor from "./BackGround";


// function ForeGround () {
//    return ( 
//         <BackGroundColor>
//   <Text style={styles.text}>
//     hello
// </Text>
//     </BackGroundColor>
    

//    )
// }

function ForeGround () {
    return (
        <Text style={styles.text}>
            Create Your Account
        </Text>
    )
}

const styles = StyleSheet.create({
    text : {
        color : "white",
        justifyContent : 'center',
        textAlign:'center',
        fontSize:20,
        paddingBottom : 0,
        padding :20,
    }
})

export default ForeGround;