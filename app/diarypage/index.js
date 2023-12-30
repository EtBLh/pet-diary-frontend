import React, { useEffect, useState  } from 'react';
import { View, ImageBackground, Image, Button, Text, TextInput,TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './style';


const DiaryPage = () => {
  const [place, setPlace] = useState('');
  const [mood, setMood] = useState('');
  const [selectedImage, setSelectedImage] = useState(require('../assets/diary/board.png'));


  const handlePreviousDate = () => {
  };

  const handleNextDate = () => {
  };
  const handleComment= () => {
    // 处理点击右按钮的逻辑，例如切换到后一天的日期
    // 可以使用日期库，比如 Moment.js 或 JavaScript 内置的 Date 对象
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }).format(new Date());

  const [weekday, date] = formattedDate.split(', ');


  return (
    <View>
      <View style={styles.dateContainer}>
        {/* 左侧按钮 */}
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={handlePreviousDate}>
            <Image
              source={require('../assets/diary/left_para.png')}  
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
              source={require('../assets/diary/right_para.png')}  // 自定义的右箭头图像
              style={styles.buttonImage}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      
      {/* 上傳圖片 */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/diary/addphoto.png')} // 请替换成你的图片路径
          style={styles.image}
        />
      </View>
    
      
      <View style={styles.commentContainer}>
        <ImageBackground
          source={require('../assets/diary/comment.png')} // 替换为你的背景图片路径
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
          source={require('../assets/diary/heart.png')}
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
          <ImageBackground
            source={require('../assets/diary/savebutton.png')}  // 背景图片路径
            style={styles.saveBackground}
            resizeMode="contain"
          >
            <Text style={styles.commentText}>Save</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiaryPage;
