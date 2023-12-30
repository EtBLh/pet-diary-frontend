import React, { useEffect, useState  } from 'react';
import { View, ImageBackground, Image, Button, Text, TextInput, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useFonts } from 'expo-font';


const PetDiaryPage = () => {
  const [place, setPlace] = useState('');
  const [mood, setMood] = useState('');
  // const [selectedImage, setSelectedImage] = useState(require('./assets/diary/board.png'));
  const [fontLoaded, setFontLoaded] = useState(false);


  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
        'PixelifySans': require('./assets/fonts/PixelifySans-VariableFont_wght.ttf'),
      });
      setFontLoaded(true); 
    };

    loadFont();
  }, []); 

  if (!fontLoaded) {
    return <View />;
  }

  const handlePreviousDate = () => {
  };

  const handleNextDate = () => {
  };
  const handleComment= () => {
    // 处理点击右按钮的逻辑，例如切换到后一天的日期
    // 可以使用日期库，比如 Moment.js 或 JavaScript 内置的 Date 对象
  };

  const returnmain= () => {

  };

  const returndiary= () => {

  };

  const returnhealth= () => {

  };

  const returnsetting= () => {

  };


  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }).format(new Date());

  const [weekday, date] = formattedDate.split(', ');


  return (
    // 背景
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.petDiaryContainer}
      resizeMode="cover" // 添加这一行
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pet Diary</Text>
      </View>
      
      <View style={styles.dateContainer}>
        {/* 左侧按钮 */}
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={handlePreviousDate}>
            <Image
              source={require('./assets/diary/left_para.png')}  
              style={styles.buttonImage}
            />
          </TouchableWithoutFeedback>
        </View>

        <Text style={styles.dateText}>
          {`${date} ${weekday}`}
        </Text>

        {/* 右侧按钮 */}
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={handleNextDate} style={styles.buttonContainer}>
            <Image
              source={require('./assets/diary/right_para.png')}  // 自定义的右箭头图像
              style={styles.buttonImage}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      
      {/* 上傳圖片 */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/diary/addphoto.png')} // 请替换成你的图片路径
          style={styles.image}
        />
      </View>
    
      
      <View style={styles.commentContainer}>
        <ImageBackground
          source={require('./assets/diary/comment.png')} // 替换为你的背景图片路径
          style={styles.backgroundImage}
          resizeMode="contain"
        >
          <View style={styles.container}>
            <TextInput
              style={styles.commentText}
              placeholder="Enter text..."
              width={300}
              textAlign='center'
            />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Place :</Text>
        </View>
        <View style={[styles.inputContainer, { flex: 2.3 }]}>
          <TextInput
            style={styles.input}
            placeholder="Enter place..."
            // 其他 TextInput 相关属性
          />
        </View>
        <Text style={styles.unitText}></Text>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Mood :</Text>
        </View>
        <View style={[styles.inputContainer, { flex: 2.3 }]}>
          <TextInput
            style={styles.input}
            placeholder="Enter Mood..."
            // 其他 TextInput 相关属性
          />
        </View>
        <Text style={styles.unitText}></Text>
      </View>

      <View style={styles.subtitlecontainer}>
        {/* 小图标 */}
        <Image
          source={require('./assets/diary/heart.png')}
          style={styles.icon}
        />
        {/* 副标题 */}
        <Text style={styles.subtitle}>  Health & Care</Text>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Weight :</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter"
            // 其他 TextInput 相关属性
          />
        </View>
        <Text style={styles.unitText}>kg</Text>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Water Intake :</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter"
            // 其他 TextInput 相关属性
          />
        </View>
        <Text style={styles.unitText}>ml</Text>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Food Intake :</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter"
            // 其他 TextInput 相关属性
          />
        </View>
        <Text style={styles.unitText}>g</Text>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Defecation :</Text>
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
          <Text style={styles.labelText}>Abnormality :</Text>
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
          <Text style={styles.labelText}>Medical Record :</Text>
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
      {/* save buttom */}
      
      <View style={styles.saveContainer}>
        <TouchableOpacity onPress={handleComment} style={styles.saveButton}>
          {/* <ImageBackground
            source={require('./assets/diary/savebutton.png')}  // 背景图片路径
            style={styles.saveBackground}
            resizeMode="contain"
          >
            <Text style={styles.commentText}>Save</Text>
          </ImageBackground> */}
        </TouchableOpacity>
      </View>


      <View style={styles.bottomButtonsContainer}>
        {/* 按钮1 */}
        <TouchableOpacity onPress={returnmain} style={[styles.mainbutton, { flex: 2 }]}>
          <ImageBackground
            source={require('./assets/diary/mainbutton.png')}  // 按钮1的背景图片路径
            style={styles.bigbuttonBackground}
            resizeMode="contain"
          >
          </ImageBackground>
        </TouchableOpacity>

        {/* 按钮2 */}
        <TouchableOpacity onPress={returndiary} style={[styles.littlebutton, { flex: 1 }]}>
          <ImageBackground
            source={require('./assets/diary/wbutton3.png')}  // 按钮2的背景图片路径
            style={styles.littlebuttonBackground}
            resizeMode="contain"
          >
          </ImageBackground>
        </TouchableOpacity>

        {/* 按钮3 */}
        <TouchableOpacity onPress={returnhealth} style={[styles.littlebutton, { flex: 1,right:7 }]}>
          <ImageBackground
            source={require('./assets/diary/healthbutton.png')}  // 按钮3的背景图片路径
            style={styles.littlebuttonBackground}
            resizeMode="contain"
          >
          </ImageBackground>
        </TouchableOpacity>

        {/* 按钮4 */}
        <TouchableOpacity onPress={returnsetting} style={[styles.littlebutton, { flex: 1,right:15 }]}>
          <ImageBackground
            source={require('./assets/diary/settingbutton.png')}  // 按钮4的背景图片路径
            style={styles.littlebuttonBackground}
            resizeMode="contain"
          >
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  petDiaryContainer: {
    flex: 1,
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
    top: 40, 
    left: 20, 
  },
  headerText: {
    fontSize: 22, 
    fontWeight: '400',
    color: '#000000B8',
    fontFamily: 'PressStart2P-Regular', 
    letterSpacing : 0.88,
  },
  dateContainer: {
    marginTop: 80, 
    marginLeft: -30,
    flexDirection: 'row',  
    alignItems: 'center',  

  },
  imageContainer: {
    alignItems: 'center', 
    marginTop: 0, 
    marginBottom: 0,
    right: 20 
  },
  dateText: {
    fontSize: 20,
    color: '#000000FF',
    fontFamily: 'PixelifySans',
    letterSpacing: 0.8,
  },
  buttonContainer: {
    marginLeft: 10,  
    marginRight: 10, 
  },
  
  image: {
    width: 300,
    height: 190,
    resizeMode: 'contain',
  },

  commentContainer: {
    alignItems: 'center',
    width:310,
    height:60,
    marginTop: -3,
    right:18,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  commentText: {
    color: 'black',
    fontFamily: 'PixelifySans',
    fontSize: 20,
  },

  inputRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 1, 
    left:10,
  },
  labelContainer: {
    flex: 1.5,
    marginRight: 20,
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
    width: '80%',  
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
    marginLeft: 0,  
    color: 'black',
    fontFamily: 'PixelifySans',
    fontSize: 20,
    
  },
  subtitlecontainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    right:10,
    marginTop:10,
  },
  subtitle: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'PixelifySans',
  },

  saveContainer: {
    marginTop: -10,
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

  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom:-23,
    right:15,
  },
  mainbutton: {
    width: 98,  
    height: 58, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigbuttonBackground: {
    width: 98,  
    height: 58,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  littlebutton: {
    width: 64,  
    height: 59, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  littlebuttonBackground: {
    width: 64,  
    height: 59,  
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PetDiaryPage;
