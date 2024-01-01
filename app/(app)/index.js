import { View, Text } from "react-native";
import { Image } from 'expo-image'
import { dummyProductList, ImageBackground } from '../util'
import styles from "./style";
import Calendar from "./components/Calendar";
import { router } from 'expo-router';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PetDisplay from "./components/PetDisplay";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from "../ctx/auth";

const HomePage = () => {

  const [dressList, setDressList] = useState([])
  const [userData, setUserData] = useState({
    name: '',
    breed: '',
    age: '',
    gold: 0,
  });

  const auth = useAuth()

  useEffect(() => {
    axios.post('http://107.191.60.115:81/Main/GetMainPagePetInfo', {
        userID: auth.userid,
        petID: auth.petid
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        setUserData(res.data);
        setDressList(res.data.DressUpProduct)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <View style={styles.HomePageContainer}>
       <TouchableWithoutFeedback onPress={() => {
        router.replace('/dressuppage')
      }}>
        <ImageBackground
          source={require('./assets/board.png')}
          style={styles.board}
        >
          <PetDisplay
              setDressList={setDressList}
              dressList={dressList.filter(dress => {
                  return dress.equipped;
              })}
          />        
        </ImageBackground>
      </TouchableWithoutFeedback>

      <View>
        <ImageBackground
          source={require('./assets/data-board.png')}
          style={styles.dataBoard}
        >
          <Text style={styles.dataName}>{userData.name}</Text>
          <Text style={styles.dataInfo}>{userData.breed}</Text>
          <Text style={styles.dataInfo}>{userData.age}y/0</Text>
          <View style={styles.gold}>
            <Image source={require('./assets/coin.png')} style={styles.coinImg} />
            <Text style={styles.goldText}>{userData.money}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{}}>
        <ImageBackground
          source={require('./assets/calendar-bg.png')}
          style={styles.calendar}
        >
          <Calendar/>
        </ImageBackground>
      </View>
    </View>
  )
}

export default HomePage;