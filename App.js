import React, { useEffect, useState  } from 'react';
import { View, ImageBackground, Image, Text,FlatList, TextInput, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
// import { FlatList } from 'react-native-gesture-handler';
const PetDiaryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageId) => {
    setSelectedImage(imageId);
  };

  const handleNextPress= () => {

  };

  const renderImage = (imageId, imagePath) => (
    <TouchableOpacity
      style={[
        styles.imageContainer,
        selectedImage === imageId && styles.selectedImageContainer,
      ]}
      onPress={() => handleImagePress(imageId)}
      key={imageId}
    >
      <Image source={imagePath} style={styles.optionimage} />
    </TouchableOpacity>
  );


  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
        'PixelifySans': require('./assets/fonts/PixelifySans-VariableFont_wght.ttf'),
      });
    };
    loadFont();
  }, []); 


  return (
    // 背景
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.petDiaryContainer}
      resizeMode="cover" 
    >
      {/* 標題 */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pet Diary</Text>
      </View>
      
      {/* signup條 */}
      <View style={styles.titleContainer}>
        <Image
          source={require('./assets/sign/title.png')} 
          style={styles.image}
        />
      </View>

      {/* 問題 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>How do you want your pet look like in digital world? </Text>
      </View>

      {/* 選圖片處 */}
      <View style={styles.container}>
        <Text style={[styles.questionText,{marginBottom:10}]}>Select an Image</Text>

        <View style={styles.imageRow}>
          {renderImage(1, require('./assets/sign/dog1.png'))}
          {renderImage(2, require('./assets/sign/dog2.png'))}
        </View>

        <View style={styles.imageRow}>
          {renderImage(3, require('./assets/sign/dog3.png'))}
          {renderImage(4, require('./assets/sign/dog4.png'))}
        </View>
      
      </View>
      
    <View style={styles.saveContainer}>
        <TouchableOpacity onPress={handleNextPress} style={styles.saveButton}>
          <ImageBackground
            source={require('./assets/sign/savebutton.png')} 
            style={styles.saveBackground}
            resizeMode="contain"
          >
            <Text style={[styles.questionText,{bottom:5}]}>Next</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  petDiaryContainer: {
    flex: 1,
    // resizeMode: 'contain',
    justifyContent: 'flex-start',  
    alignItems: 'center',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', 
  },
  headerContainer: {
    position: 'absolute',
    top: 60, 
    left: 20, 
  },
  headerText: {
    fontSize: 22, 
    fontWeight: '400',
    color: '#000000B8',
    fontFamily: 'PressStart2P-Regular', 
    letterSpacing : 0.88,
  },
  titleContainer: {
    alignItems: 'center', 
    marginTop: 100, 
    marginBottom: 0,
    right: 20 
  },
  questionContainer: {
    width:300,
    height:89,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    marginLeft:-7,
  },
  questionText: {
    textAlign: 'left',
    fontSize: 20,
    color: '#000000FF',
    fontFamily: 'PixelifySans',
    letterSpacing: 0.8,
    marginTop:10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageContainer: {
    marginRight: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  selectedImageContainer: {
    borderColor: '#CA9664', 
  },
  optionimage: {
    width: 100,
    height: 100,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: 'white', 
  },
  saveContainer: {
    marginTop: 150,
    left:100,
    top:12,
  },
  saveButton: {
    width: 83,  
    height: 42, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  
});

export default PetDiaryPage;
