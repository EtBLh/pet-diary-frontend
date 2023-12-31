import React, { useEffect, useState  } from 'react';
import { View, ImageBackground, Image, Text, TextInput, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native';

const PetButton = ({ petId, petName, isPetSelected, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(petId)}>
      <ImageBackground 
        source={isPetSelected(petId) ? require('../(app)/assets/sign/target_option.png') : require('../(app)/assets/sign/option_button.png')}
        style={isPetSelected(petId) ? styles.selectedbuttonImage : styles.buttonImage}
        resizeMode="contain"
      >
        <Text style={styles.buttonText}>{petName}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const PetDiaryPage = () => {

  // 查看選了哪一個選項
  const [selectPet, setSelectPet] = useState(null);
  const [selectGender, setSelectGender] = useState(null);

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
  
  const handleEvent= () => {

  };

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'PressStart2P-Regular': require('../(app)/assets/fonts/PressStart2P-Regular.ttf'),
        'PixelifySans': require('../(app)/assets/fonts/PixelifySans-VariableFont_wght.ttf'),
      });
    };
    loadFont();
  }, []); 


  return (
    // 背景
    <ImageBackground
      source={require('../(app)/assets/background.png')}
      style={styles.petDiaryContainer}
      resizeMode="cover" 
    >
      {/* 標題 */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pet Diary</Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          source={require('../(app)/assets/sign/title.png')} 
          style={styles.image}
        />
      </View>

      {/* 問題 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>What is your pet? </Text>
      </View>

      {/* 選項 */}
      <View style={styles.container}> 
        <View style={styles.row}>
          <PetButton petId={1} petName="Dog" isPetSelected={isPetSelected} onPress={petPress} />
          <PetButton petId={2} petName="Cat" isPetSelected={isPetSelected} onPress={petPress} />
        </View>

        <View style={styles.row}>
          <PetButton petId={3} petName="Bird" isPetSelected={isPetSelected} onPress={petPress} />
          <PetButton petId={4} petName="Rabbit" isPetSelected={isPetSelected} onPress={petPress} />
        </View>

        <View style={styles.row}>
          <PetButton petId={5} petName="Mouse" isPetSelected={isPetSelected} onPress={petPress} />
          <PetButton petId={6} petName="Fish" isPetSelected={isPetSelected} onPress={petPress} />
        </View>
      </View>
    
      {/* 輸入選項區 */}
      <View style={styles.inputRow}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Name :</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter"
            />
          </View>
          <Text style={styles.unitText}></Text>
      </View>

      <View style={styles.inputRow}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Age :</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter"
              // 其他 TextInput 相关属性
            />
          </View>
          <Text style={styles.unitText}></Text>
      </View>

      <View style={styles.inputRow}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Breeds :</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter"
            />
          </View>
          <Text style={styles.unitText}></Text>
      </View>

    {/* 選擇性別 */}
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
        <TouchableOpacity onPress={handleEvent} style={styles.saveButton}>
          <ImageBackground
            source={require('../(app)/assets/sign/savebutton.png')}  
            style={styles.saveBackground}
            resizeMode="contain"
          >
            <Text style={[styles.buttonText,{bottom:5}]}>Next</Text>
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
  imageContainer: {
    alignItems: 'center', 
    marginTop: 100, 
    marginBottom: 0,
    right: 20 
  },
  questionContainer: {
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
  },
  questionText: {
    textAlign: 'left',
    fontSize: 20,
    color: '#000000FF',
    fontFamily: 'PixelifySans',
    letterSpacing: 0.8,
    marginTop:10,
    marginLeft:-150,
  },

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginLeft:-40,
  },
  button: {
    alignItems: 'center',
    marginLeft:20,
  },
  buttonImage: {
    width: 111, 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedbuttonImage: {
    width: 119,
    height: 56, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#000000FF',
    fontFamily: 'PixelifySans',
    letterSpacing: 0.8,
  },


  inputRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10, 
    left:10,
  },
  labelContainer: {
    flex: 1.5,
    marginLeft:12,
    marginRight: 10, 
    marginTop:10,
  },
  labelText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'PixelifySans',
  },
  inputContainer: {
    flex: 1.5, 
    borderBottomWidth: 1, 
    borderColor: 'black',  
    alignSelf: 'center',  
  },
  input: {
    flex: 1,
    height: 35, 
    fontSize: 20, 
    width:150,
    fontFamily: 'PixelifySans',
  },
  unitText: {
    flex:0.8,
  },

  genderRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 1, 
    left:10,

  },
  genderContainer: {
    flex: 1.5,
    marginLeft:12,
    marginRight: 50, 
    marginTop:10,
  },
  genderbutton: {
    alignItems: 'center',
    marginLeft:-50,
  },

  saveContainer: {
    marginTop: 80,
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