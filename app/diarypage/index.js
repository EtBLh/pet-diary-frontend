import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { normalText } from '../util';
import Button from '../components/Button';
import axios from 'axios'; 
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';

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
  const [comment, setComment] = useState('')
  const [place, setPlace] = useState('');
  const [mood, setMood] = useState('');
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [foodIntake, setFoodIntake] = useState('');
  const [defecation, setDefecation] = useState('');
  const [abnormality, setAbnormality] = useState('');
  const [medicalRecord, setMedicalRecord] = useState('');

  const [formattedDate, setFormattedDate] = useState('');
  const [weekday, setWeekday] = useState('');
  const [date, setDate] = useState('');


  const handleSave = () => {
    const data = {
      petid: "petid",
      date: date,
      content: comment,
      place: place,
      mood: mood,
      weight: weight,
      water_intake: waterIntake,
      food_intake: foodIntake,
      defecation: defecation,
      abnormality: abnormality,
      medical_record: medicalRecord,
    };

    axios.post('http://107.191.60.115:81/Diary/UploadDiary', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  // const [selectedImage, setSelectedImage] = useState(require('../assets/diary/board.png'));


  const handlePreviousDate = () => {
    const [month, day, year] = date.split('/');
    const formattedDate = `${year}-${month}-${day}`;

    const currentDate = new Date(formattedDate);
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);

    const formattedPreviousDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
    }).format(previousDate);

    setFormattedDate(formattedPreviousDate);
    const [newWeekday, newDate] = formattedPreviousDate.split(', ');
    setWeekday(newWeekday);
    setDate(newDate);
  };

  const handleNextDate = () => {
    const [month, day, year] = date.split('/');
    const formattedDate = `${year}-${month}-${day}`;

    const currentDate = new Date(formattedDate);
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);

    const formattedNextDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
    }).format(nextDate);

    setFormattedDate(formattedNextDate);
    const [newWeekday, newDate] = formattedNextDate.split(', ');
    setWeekday(newWeekday);
    setDate(newDate);
  };

  const handleComment = () => {
    // 处理点击右按钮的逻辑，例如切换到后一天的日期
    // 可以使用日期库，比如 Moment.js 或 JavaScript 内置的 Date 对象
  };

  const handleChooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    // launchImageLibrary(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const imageSource = response.uri;
    //     console.log('Image source:', imageSource);
    
    //     const formData = new FormData();
    //     formData.append('image', {
    //       uri: imageSource,
    //       type: response.type,
    //       name: 'photo.jpg',
    //     });
    
    //     formData.append('petid', 'your_pet_id');
    //     formData.append('userid', 'your_user_id');
    //     formData.append('date', date);
    
    //     const uploadUrl = 'http://107.191.60.115:81/Diary/UploadImage';
    
    //     axios.post(uploadUrl, formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     })
    //     .then((uploadResponse) => {
    //       console.log('Image uploaded successfully:', uploadResponse.data);
    //     })
    //     .catch((uploadError) => {
    //       console.error('Error uploading image:', uploadError);
    //     });
    //   }
    // });
  };

  // const formattedDate = new Intl.DateTimeFormat('en-US', {
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric',
  //   weekday: 'long',
  // }).format(new Date());

  // const [weekday, date] = formattedDate.split(', ');

  useEffect(() => {
    const newFormattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
    }).format(new Date());

    setFormattedDate(newFormattedDate);
    const [newWeekday, newDate] = newFormattedDate.split(', ');
    setWeekday(newWeekday);
    setDate(newDate);
  }, []);


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
      <View style={styles.uploadImage}>
        <TouchableWithoutFeedback onPress={handleChooseImage}>
          <Image
            source={require('../assets/diary/addphoto.png')}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
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
              onChangeText={setComment} 
              value={comment}
            />
          </View>
        </ImageBackground>
      </View>

      <NormalTextInput label="Place" placeholder="Enter place.." onChangeText={setPlace} value={place}/>
      <NormalTextInput label="Mood" placeholder="Enter mood.." onChangeText={setMood} value={mood}/>

      <View style={styles.subtitlecontainer}>
        <Image
          source={require('../assets/diary/heart.png')}
          style={{
            marginRight: 5
          }}
        />
        <Text style={normalText}>Health & Care</Text>
      </View>

      <NormalTextInput label="Weight" placeholder="Enter" suffix="kg" onChangeText={setWeight} value={weight}/>
      <NormalTextInput label="Water Intake" placeholder="Enter" suffix="ml" onChangeText={setWaterIntake} value={waterIntake}/>
      <NormalTextInput label="Food Intake" placeholder="Enter" suffix="g" onChangeText={setFoodIntake} value={foodIntake}/>
      <NormalTextInput label="Defecation" placeholder="Enter" suffix="" onChangeText={setDefecation} value={defecation}/>
      <NormalTextInput label="Abnormality" placeholder="Enter" suffix="" onChangeText={setAbnormality} value={abnormality}/>
      <NormalTextInput label="Medical Record" placeholder="Enter" suffix="" onChangeText={setMedicalRecord} value={medicalRecord}/>

      <View style={{flexDirection: 'row', justifyContent:'flex-end', width: "100%"}}>
        <Button label="save" onPress={handleSave} style={{marginTop:5, marginRight: 10}}/>
      </View>


    </View>
  );
};

export default DiaryPage;
