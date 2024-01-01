import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { boardContent, displayText, ImageBackground } from '../../util'
import { Image } from 'expo-image';
import styles from './style';
import { normalText, boardsSize } from '../../util';
import Button from '../components/Button';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { DispatchType, useStore } from '../../ctx/store';
import { CalendarUtils } from 'react-native-calendars';
import { useAuth } from '../../ctx/auth';
import { ScrollView } from 'react-native-gesture-handler';

const NormalTextInput = (props) => {
  return (
    <View style={styles.normalTextInput}>
      <Text style={styles.labelText}>{props.label} :</Text>
      <View style={styles.normalTextInputRight}>
        <TextInput
          style={styles.normalTextInputField}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
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

  const [weekday, setWeekday] = useState('');

  const [selectedImage, setSelectedImage] = useState(require('../assets/diary/addphoto.png'));
  const store = useStore();
  const date = store.state.diaryDate;

  const auth = useAuth();

  useEffect(() => {
    axios.post('http://107.191.60.115:81/Diary/GetDiaryInfo', {
      petid: auth.petid,
      userid: auth.userid,
      date: date
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {

        const data = response.data;
        setComment(data.content);
        setPlace(data.place);
        setMood(data.mood);
        setWeight(data.weight);
        setWaterIntake(data.water_intake);
        setFoodIntake(data.food_intake);
        setDefecation(data.defecation);
        setAbnormality(data.abnormality);
        setMedicalRecord(data.medical_record);


        if (data.image !== null) {
          setSelectedImage({ uri: data.image });
        } else {
          setSelectedImage(require('../assets/diary/addphoto.png'));
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [date]);

  const uploadImageToServer = async (userID, petID, date, imageUri) => {
    try {
      const formData = new FormData();
      formData.append('userID', userID);
      formData.append('petID', petID);
      formData.append('date', date);
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });

      const response = await axios.post('http://107.191.60.115:81/Diary/UploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data.image; // Assuming the server responds with an image URL
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    const image_url = await uploadImageToServer(auth.userid, 
                                                auth.petid, 
                                                store.state.diaryDate,
                                                result.uri);
    console.log('Image URL:', image_url);
    if (!result.canceled) {
      setSelectedImage({ uri: image_url });
    }
  };


  const handleSave = () => {
    const data = {
      petid: auth.petid,
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

  const handleShiftDay = (shift: number) => {
    const currentDate = new Date(date);
    const target = new Date(date);
    target.setDate(currentDate.getDate() + shift);

    const formattedPreviousDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
    }).format(target);

    const [newWeekday, newDate] = formattedPreviousDate.split(', ');
    setWeekday(newWeekday);
    store.dispatch({ type: DispatchType.CHANGE_DIARY_DATE, payload: CalendarUtils.getCalendarDateString(target) });

  };

  useEffect(() => {
    const newFormattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
    }).format(new Date(date));

    const [newWeekday, newDate] = newFormattedDate.split(', ');
    setWeekday(newWeekday);
  }, []);


  return (
    <ScrollView>
      <View style={styles.petDiaryContainer}>
        <View style={styles.dateContainer}>
          {/* 左侧按钮 */}
          <TouchableWithoutFeedback onPress={() => handleShiftDay(-1)}>
            <Text style={{ ...displayText, ...styles.dateArrowContainer }}>{"<"}</Text>
          </TouchableWithoutFeedback>

          <Text style={styles.dateText}>
            {`${date} ${weekday}`}
          </Text>

          {/* 右侧按钮 */}
          <TouchableWithoutFeedback onPress={() => handleShiftDay(+1)}>
            <Text style={{ ...displayText, ...styles.dateArrowContainer }}>{">"}</Text>
          </TouchableWithoutFeedback>
        </View>

        {/* 上傳圖片 */}
        <TouchableWithoutFeedback onPress={pickImage}>
          <ImageBackground
            source={require('../assets/board.png')}
            style={styles.board}
          >
              <Image
                source={selectedImage}
                style={{...boardContent}}
              />        
            </ImageBackground>
        </TouchableWithoutFeedback>

        <View style={styles.commentContainer}>
          <ImageBackground
            source={require('../assets/longInput.png')}
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

        <NormalTextInput label="Place" placeholder="Enter place.." onChangeText={setPlace} value={place} />
        <NormalTextInput label="Mood" placeholder="Enter mood.." onChangeText={setMood} value={mood} />

        <View style={styles.subtitlecontainer}>
          <Image
            source={require('../assets/diary/heart.png')}
            style={{
              marginRight: 5,
              width: 30,
              height: 30
            }}
          />
          <Text style={normalText}>Health & Care</Text>
        </View>

        <NormalTextInput label="Weight" placeholder="Enter" suffix="kg" onChangeText={setWeight} value={weight} />
        <NormalTextInput label="Water Intake" placeholder="Enter" suffix="ml" onChangeText={setWaterIntake} value={waterIntake} />
        <NormalTextInput label="Food Intake" placeholder="Enter" suffix="g" onChangeText={setFoodIntake} value={foodIntake} />
        <NormalTextInput label="Defecation" placeholder="Enter" suffix="" onChangeText={setDefecation} value={defecation} />
        <NormalTextInput label="Abnormality" placeholder="Enter" suffix="" onChangeText={setAbnormality} value={abnormality} />
        <NormalTextInput label="Medical Record" placeholder="Enter" suffix="" onChangeText={setMedicalRecord} value={medicalRecord} />

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: "100%" }}>
          <Button label="save" onPress={handleSave} style={{ marginTop: 5, marginRight: 10 }} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DiaryPage;
