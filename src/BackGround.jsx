import React from "react";
import { View, StyleSheet } from "react-native";

export default function BackGroundColor ({children}) {
    return ( 
    <View style={styles.container}>
        {children}
        </View>
    )
    
}

const styles = StyleSheet.create({
    container : 
        { height : "100%",
        width : "100%",
         backgroundColor:"#323139", 
         }
    
})