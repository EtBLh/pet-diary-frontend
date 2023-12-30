import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { normalText } from '../util';
import Button from '../common/Button';

const NormalTextInput = (props) => {
  return (
    <View style={styles.normalTextInput}>
      <Text style={styles.labelText}>{props.label} :</Text>
      <View style={styles.normalTextInputRight}>
        <TextInput
          style={styles.normalTextInputField}
          placeholder={props.placeholder}
        />
        <Text style={normalText}>{props.suffix}</Text>
      </View>
    </View>
  )
}


const DiaryPage = () => {
  const [place, setPlace] = useState('');
  const [mood, setMood] = useState('');
  // const [selectedImage, setSelectedImage] = useState(require('../assets/diary/board.png'));


  const handlePreviousDate = () => {
  };

  const handleNextDate = () => {
  };
  const handleComment = () => {
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
    <View style={styles.petDiaryContainer}>
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
      <View style={styles.uploadImage} onPress={() => { }}>
        <Image
          source={require('../assets/diary/addphoto.png')}
          style={styles.image}
        />
      </View>


      <View style={styles.commentContainer}>
        <ImageBackground
          source={require('../assets/diary/comment.png')}
          style={[styles.image, { height: 43 }]}
          resizeMode="contain"
        >
          <View style={styles.container}>
            <TextInput
              style={normalText}
              placeholder="enter comment..."
              width={300}
              textAlign='center'
            />
          </View>
        </ImageBackground>
      </View>

      <NormalTextInput label="Place" placeholder="Enter place.."/>
      <NormalTextInput label="Mood" placeholder="Enter mood.."/>

      <View style={styles.subtitlecontainer}>
        <Image
          source={require('../assets/diary/heart.png')}
          style={{
            marginRight: 5
          }}
        />
        <Text style={normalText}>Health & Care</Text>
      </View>

      <NormalTextInput label="Weight" placeholder="Enter" suffix="kg"/>
      <NormalTextInput label="Water Intake" placeholder="Enter" suffix="ml"/>
      <NormalTextInput label="Food Intake" placeholder="Enter" suffix="g"/>
      <NormalTextInput label="Defecation" placeholder="Enter" suffix=""/>
      <NormalTextInput label="Abnormality" placeholder="Enter" suffix=""/>
      <NormalTextInput label="Medical Record" placeholder="Enter" suffix=""/>

      <View style={{flexDirection: 'row', justifyContent:'flex-end', width: "100%"}}>
        <Button label="save" onPress={() => {}} style={{marginTop:5, marginRight: 10}}/>
      </View>


    </View>
  );
};

export default DiaryPage;
