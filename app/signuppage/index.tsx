import React, { useEffect, useState  } from 'react';
import { View, ImageBackground, Image, Text, TextInput, Alert, Button} from 'react-native';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native';
import styles from "./style";
import { displayText, normalText, row } from "../util";
import axios from 'axios';
import { useAuth } from "../ctx/auth";
import { ScrollView } from 'react-native-gesture-handler';
import {router} from 'expo-router';

const LongInput = (props: {type:string, value:string, setValue:(text:string) => void}) => {
  return (
    <View style={styles.inputRow}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{props.type} :</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={normalText}
          placeholder="Enter"
          textAlign='left'
          onChangeText={props.setValue}
        />
      </View>
      <Text style={styles.unitText}></Text>
    </View>
  );
};


const PetDiaryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // 查看選了哪一個選項
  const [selectPet, setSelectPet] = useState(null);
  const [selectGender, setSelectGender] = useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [petName, setpetName] = useState('');
  const [petAge, setpetAge] = useState('');
  const [petBreeds, setpetBreeds] = useState('');
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [image1Url, setImage1Url] = useState(null);
  const [image2Url, setImage2Url] = useState(null);

  const auth = useAuth();

  const handleImagePress = (imageId) => {
    setSelectedImage(imageId);
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
      <Image source={{ uri: imagePath }} style={styles.optionimage}/>
    </TouchableOpacity>
  );

  const petPress = (buttonId) => {
    setSelectPet(buttonId);
  };
  const isPetSelected = (buttonId) => {
    return selectPet === buttonId;
  };

  const genderPress = (buttonId) => {
    setSelectGender(buttonId);
  };
  const isGenderSelected = (buttonId) => {
    return selectGender === buttonId;
  };
  // ----------------------------------------- //
  
  const signup= async () => {
    try {
        let petTypeName = '';
        switch (selectPet) {
          case 1:
            petTypeName = 'Dog';
            break;
          case 2:
            petTypeName = 'Cat';
            break;
          case 3:
            petTypeName = 'Bird';
            break;
          case 4:
            petTypeName = 'Rabbit';
            break;
          case 5:
            petTypeName = 'Mouse';
            break;
          case 6:
            petTypeName = 'Fish';
            break;

          default:
            break;
        }
        let igurl = '';
        switch (selectedImage) {
          case(1):
            igurl = image1Url;
            break;
          case(2):
            igurl = image2Url;
            break;
        }

        const response = await axios.post('http://107.191.60.115:81/User/Register', {
            username: username,
            password: password,
            breed : petBreeds,
            petName : petName,
            age : petAge,
            gender : selectGender,
            image : igurl,
        });

        const { userID, petID } = response.data;
        if (userID && petID) {
            // Alert.alert('Login Successful', `UserID: ${userID}\nPetID: ${petID}`);
            auth.signIn(userID,petID)
            router.replace('/');
        } 
    } catch (error) {
        console.error('Error logging in:', error);
    }
};

  const sendSelectPetToBackend = async () => {
  try {
      let petTypeName = '';

      switch (selectPet) {
        case 1:
          petTypeName = 'Dog';
          break;
        case 2:
          petTypeName = 'Cat';
          break;
        case 3:
          petTypeName = 'Bird';
          break;
        case 4:
          petTypeName = 'Rabbit';
          break;
        case 5:
          petTypeName = 'Mouse';
          break;
        case 6:
          petTypeName = 'Fish';
          break;

        default:
          break;
      }
      const response = await axios.post('http://107.191.60.115:81/User/GetPetImage', {
          PetType: petTypeName,
      });
      // 從回傳數據中獲取圖片 URI 陣列
      const images = response.data.image;
      // Alert.alert('Response from server:', images[1]);
      // 設置 state
      setImage1Url(images[0]);
      setImage2Url(images[1]);
      
  } catch (error) {
      console.error('Error logging in:', error);
  }
};

const Nextpage = () => {
  setCurrentPage(2);  // 假設 signup 是你的註冊函數
  sendSelectPetToBackend();  // 假設 sendSelectPetToBackend 是發送 selectPet 到後端的函數
};

  const renderContent = () => {
    if (currentPage === 1) {
      return (
          <View>
            <View style={styles.signupPageContainer}>
              <View style={styles.titleContainer}>
              <Image
              source={require('../(app)/assets/sign/title.png')} 
              style={styles.image}
            />
        </View>


        <LongInput type="Username" value={username} setValue={setUsername}/>
        <LongInput type="Password" value={password} setValue={setPassword}/>

        <View style={styles.label}>
            <Text style={normalText}>What is your pet?</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => petPress(1)}>
              <ImageBackground 
                source={isPetSelected(1) ? require('../(app)/assets/sign/target_option.png') : require('../(app)/assets/sign/option_button.png')}
                style={isPetSelected(1) ? styles.selectedbuttonImage : styles.buttonImage}
                resizeMode="contain"
              >
              <Text style={styles.buttonText}>Dog</Text>
              </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => petPress(2)}>
            <ImageBackground 
                source={isPetSelected(2) ? require('../(app)/assets/sign/target_option.png') : require('../(app)/assets/sign/option_button.png')}
                style={isPetSelected(2) ? styles.selectedbuttonImage : styles.buttonImage}
                resizeMode="contain"
              >
              <Text style={styles.buttonText}>Cat</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => petPress(3)}>
              <ImageBackground 
                source={isPetSelected(3) ? require('../(app)/assets/sign/target_option.png') : require('../(app)/assets/sign/option_button.png')}
                style={isPetSelected(3) ? styles.selectedbuttonImage : styles.buttonImage}
                resizeMode="contain"
              >
              <Text style={styles.buttonText}>Bird</Text>
              </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => petPress(4)}>
            <ImageBackground 
                source={isPetSelected(4) ? require('../(app)/assets/sign/target_option.png') : require('../(app)/assets/sign/option_button.png')}
                style={isPetSelected(4) ? styles.selectedbuttonImage : styles.buttonImage}
                resizeMode="contain"
              >
              <Text style={styles.buttonText}>Rabbit</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => petPress(5)}>
              <ImageBackground 
                source={isPetSelected(5) ? require('../(app)/assets/sign/target_option.png') : require('../(app)/assets/sign/option_button.png')}
                style={isPetSelected(5) ? styles.selectedbuttonImage : styles.buttonImage}
                resizeMode="contain"
              >
              <Text style={styles.buttonText}>Mouse</Text>
              </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => petPress(6)}>
            <ImageBackground 
                source={isPetSelected(6) ? require('../(app)/assets/sign/target_option.png') : require('../(app)/assets/sign/option_button.png')}
                style={isPetSelected(6) ? styles.selectedbuttonImage : styles.buttonImage}
                resizeMode="contain"
              >
              <Text style={styles.buttonText}>Fish</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        <LongInput type="Pet Name" value={petName} setValue={setpetName}/>
        <LongInput type="Pet Age" value={petAge} setValue={setpetAge}/>
        <LongInput type="Breeds" value={petBreeds} setValue={setpetBreeds}/>
        

    
      <View style={styles.genderRow}>
          <View style={styles.genderContainer}> 
            <Text style={styles.labelText}>Gender :</Text>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.genderbutton} onPress={() => genderPress(1)}>
            <ImageBackground 
              source={isGenderSelected(1) ? require('../(app)/assets/sign/select_female.png') : require('../(app)/assets/sign/female.png')}
              style={isGenderSelected(1) ? styles.selectedbuttonImage : styles.buttonImage}
              resizeMode="contain"
            >
            </ImageBackground>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.genderbutton} onPress={() => genderPress(2)}>
          <ImageBackground 
              source={isGenderSelected(2) ? require('../(app)/assets/sign/select_male.png') : require('../(app)/assets/sign/male.png')}
              style={isGenderSelected(2) ? styles.selectedbuttonImage : styles.buttonImage}
              resizeMode="contain"
            >
            </ImageBackground>
          </TouchableOpacity>
        </View>
          <Text style={styles.unitText}></Text>
      </View>

      <View style={styles.saveContainer}>
      <TouchableOpacity onPress={() => router.replace("/loginpage")} style={styles.saveButton}>
            <ImageBackground
              source={require('../(app)/assets/sign/savebutton.png')}  
              style={styles.saveBackground}
              resizeMode="contain"
            >
              <Text style={[styles.buttonText,{bottom:5}]}>Back</Text>
            </ImageBackground>
          </TouchableOpacity>
      {/* <Button onPress={() => router.replace("/loginpage")} title="Back" /> */}
          <TouchableOpacity onPress={Nextpage} style={styles.saveButton}>
            <ImageBackground
              source={require('../(app)/assets/sign/savebutton.png')}  
              style={styles.saveBackground}
              resizeMode="contain"
            >
              <Text style={[styles.buttonText,{bottom:5}]}>Next</Text>
            </ImageBackground>
          </TouchableOpacity>
      </View>
      </View>

      </View>
        );
      } else if (currentPage === 2) {
        return (
          <View>
            <View style={styles.signupPageContainer}>
              <View style={styles.titleContainer}>
                <Image
                source={require('../(app)/assets/sign/title.png')} 
                style={styles.image}
                />
              </View>

            <View style={styles.label}>
              <Text style={normalText}>How do you want your pet look like in digital world? </Text>
            </View>

            <View style={styles.container2}>

              <View style={styles.imageRow}>
                {renderImage(1, image1Url)}
                {renderImage(2, image2Url)}
              </View>
            
            </View>

            <View style={styles.saveContainer}>
              <TouchableOpacity onPress={() => setCurrentPage(1)}>
                  <Text style={[styles.buttonText,{right:150, top:10, borderBottomWidth: 4, borderBottomColor: "black"}]}>back</Text>
              </TouchableOpacity>
            
                <TouchableOpacity onPress={signup} style={styles.saveButton}>
                  <ImageBackground
                    source={require('../(app)/assets/sign/savebutton.png')}  
                    style={styles.saveBackground}
                    resizeMode="contain"
                  >
                    <Text style={styles.buttonText}>create</Text>
                  </ImageBackground>
                </TouchableOpacity>

            </View>
          </View>
    </View>
      );
    }
  };


  return (
    <ScrollView>
      <View>
        {renderContent()}
      </View>
    </ScrollView>
  );
};


export default PetDiaryPage;