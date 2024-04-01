// import React from "react";
// import { StyleSheet, View, Image } from "react-native";
// import ImagePickerComponent from "./ImagePicker";


// function ProfileImage () {
// return (
//     <View style= {styles.container}>
//     <Image source={require("./Pics/treePic.jpeg") }
//           style= {styles.img}>
//     </Image>
//     <ImagePickerComponent/>
//     </View>
// )
// }

// const styles= StyleSheet.create(
//     {
//         container: {
//             alignItems : "center", 
//             paddingTop: 35,
//         },
//         img : {
//         height :100,
//       width : 100,
//       borderRadius: 50,
//         }
//     }
// )

// export default ProfileImage;

import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import  {launchImageLibrary} from 'react-native-image-picker';

function ProfileImage() {
  const [imageUri, setImageUri] = useState(null);

  const handleImagePicker = () => {
    const options = {
        mediaType:'image',
      title: 'Select Profile Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

   launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        // Set the selected image URI
        setImageUri(response.assets[0].uri);    //IMPORTANTTTTTTTTT
      }
    });
  };
  
  

  return (
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={handleImagePicker}>
    //     {imageUri ? (
    //       <Image source={{ uri: imageUri }} style={styles.img} />
    //     ) : (
    //       <Image source={require("./Pics/treePic.jpeg")} style={styles.img} />
    //     )}
    //   </TouchableOpacity>
    // </View>
    
    <View style={styles.container}>
     
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.img} />
        ) : (
          <Image source={require("./Pics/treePic.jpeg")} style={styles.img} />
        )}
         <TouchableOpacity onPress={handleImagePicker}>
            <Text style={styles.text}>
                Set Image
            </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 35,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  text: {
    paddingTop:5,
    color :"white",
    textDecorationLine: "underline",
    
  }
});

export default ProfileImage;
