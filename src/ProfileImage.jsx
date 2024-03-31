import React from "react";
import { StyleSheet, View, Image } from "react-native";


function ProfileImage () {
return (
    <View style= {styles.container}>
    <Image source={require("./Pics/treePic.jpeg") }
          style= {styles.img}>
    </Image>
    </View>
)
}

const styles= StyleSheet.create(
    {
        container: {
            alignItems : "center", 
            paddingTop: 35,
        },
        img : {
        height :100,
      width : 100,
      borderRadius: 50,
        }
    }
)

export default ProfileImage;