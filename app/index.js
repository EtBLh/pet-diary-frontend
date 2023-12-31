import { View,Image, ImageBackground, Text } from "react-native";
import styles from "./style";
import CalendarScreen from "./components/Calendar";
import { router } from 'expo-router';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

    const [userData, setUserData] = useState({
        name: '',
        breed: '',
        age: '',
        gold: 0,
      });
    
    useEffect(() => {
        fetchDataFromApi()
          .then((data) => {
            setUserData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
    
    const fetchDataFromApi = async () => {
        try {
          const response = await axios.post('http://107.191.60.115:81/Main/GetMainPagePetInfo', {
            userID: "username_password",
            petID: "username_petName"
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          return response.data;
        } catch (error) {
          throw error;
        }
      };

    return (
        <View style={styles.HomePageContainer}>
            <TouchableWithoutFeedback onPress={() => {
                console.log('fuck');
                router.push('/dressuppage')
            }}>
                <ImageBackground
                    source={require('./assets/board.png')}
                    style={styles.board}
                    >
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
                        <Image source={require('./assets/coin.png')} style={styles.coinImg}/>
                        <Text style={styles.goldText}>{userData.money}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{}}>
                <ImageBackground
                source={require('./assets/calendar-bg.png')}
                style={styles.calendar}
                >
                    <CalendarScreen></CalendarScreen>
                </ImageBackground>
            </View>
        </View>
    )
}

export default HomePage;