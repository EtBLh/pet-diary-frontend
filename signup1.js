import React, { useEffect, useState  } from 'react';
import { View, ImageBackground, Image, Text, TextInput, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native';

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
      
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/sign/title.png')} 
          style={styles.image}
        />
      </View>

      {/* 問題 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>What is your pet? </Text>
      </View>


      <View style={styles.container}>
      {/* 第一行 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => petPress(1)}>
          <ImageBackground 
            source={isPetSelected(1) ? require('./assets/sign/target_option.png') : require('./assets/sign/option_button.png')}
            style={isPetSelected(1) ? styles.selectedbuttonImage : styles.buttonImage}
            resizeMode="contain"
          >
          <Text style={styles.buttonText}>Dog</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => petPress(2)}>
        <ImageBackground 
            source={isPetSelected(2) ? require('./assets/sign/target_option.png') : require('./assets/sign/option_button.png')}
            style={isPetSelected(2) ? styles.selectedbuttonImage : styles.buttonImage}
            resizeMode="contain"
          >
          <Text style={styles.buttonText}>Cat</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* 選項 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => petPress(3)}>
          <ImageBackground 
            source={isPetSelected(3) ? require('./assets/sign/target_option.png') : require('./assets/sign/option_button.png')}
            style={isPetSelected(3) ? styles.selectedbuttonImage : styles.buttonImage}
            resizeMode="contain"
          >
          <Text style={styles.buttonText}>Bird</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => petPress(4)}>
        <ImageBackground 
            source={isPetSelected(4) ? require('./assets/sign/target_option.png') : require('./assets/sign/option_button.png')}
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
            source={isPetSelected(5) ? require('./assets/sign/target_option.png') : require('./assets/sign/option_button.png')}
            style={isPetSelected(5) ? styles.selectedbuttonImage : styles.buttonImage}
            resizeMode="contain"
          >
          <Text style={styles.buttonText}>Mouse</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => petPress(6)}>
        <ImageBackground 
            source={isPetSelected(6) ? require('./assets/sign/target_option.png') : require('./assets/sign/option_button.png')}
            style={isPetSelected(6) ? styles.selectedbuttonImage : styles.buttonImage}
            resizeMode="contain"
          >
          <Text style={styles.buttonText}>Fish</Text>
          </ImageBackground>
        </TouchableOpacity>
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
            source={isGenderSelected(1) ? require('./assets/sign/select_female.png') : require('./assets/sign/female.png')}
            style={isGenderSelected(1) ? styles.selectedbuttonImage : styles.buttonImage}
            resizeMode="contain"
          >
          </ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.genderbutton} onPress={() => genderPress(2)}>
        <ImageBackground 
            source={isGenderSelected(2) ? require('./assets/sign/select_male.png') : require('./assets/sign/male.png')}
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
            source={require('./assets/sign/savebutton.png')}  
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
