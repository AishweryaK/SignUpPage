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
import { StyleSheet, View, Image, TouchableOpacity, Text, Platform } from "react-native";
import  {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function ProfileImage() {
  const [imageUri, setImageUri] = useState(null);

  const handleImagePicker = () => {
    const options = {
        mediaType:'photo',
      // title: 'Select Profile Image',
      // storageOptions: {
      //   skipBackup: true,
      //   path: 'images',
      //  },
    };

   launchImageLibrary(options,handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType:"photo",
      maxHeight:100,
      maxWidth: 100,
    }

    launchCamera(options, handleResponse);

  };

  const handleResponse= (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorCode);
    } else {
      let imageUri = response.uri || response.assets[0].uri         //IMPORTANTTTTTTTTT
      setImageUri(imageUri);    
    }
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
                Set Image From Gallery
            </Text>
      </TouchableOpacity>
      { Platform.OS!="ios" &&
      <TouchableOpacity onPress={handleCameraLaunch}>
            <Text style={styles.text}>
                Upload From Camera
            </Text>
      </TouchableOpacity>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom:8
  },
  text: {
    paddingTop:5,
    fontSize:14,
    color :"white",
    textDecorationLine: "underline",
    
  }
});

export default ProfileImage;
