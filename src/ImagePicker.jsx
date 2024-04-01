import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImagePickerComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const launchImageLibrary = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Set the selected image URI
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100, borderRadius:50, }} />}
      <Button title="Pick Image" onPress={launchImageLibrary} />
    </View>
  );
};

export default ImagePickerComponent;
