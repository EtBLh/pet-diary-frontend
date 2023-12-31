import { View, Text } from "react-native";
import { Image } from 'expo-image'
import { dummyProductList, ImageBackground } from './util'
import styles from "./style";
import CalendarScreen from "./components/Calendar";
import { router } from 'expo-router';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PetDisplay from "./components/PetDisplay";
import { useState } from "react";

const HomePage = () => {

    const [productList , setProductList] = useState(dummyProductList)

    return (
        <View style={styles.HomePageContainer}>
            <TouchableWithoutFeedback onPress={() => {
                router.replace('/dressuppage')
            }}>
                <ImageBackground
                    source={require('./assets/board.png')}
                    style={styles.board}
                    >
                    <PetDisplay productList={productList} edit={false} setProductList={setProductList}/>
                </ImageBackground>
            </TouchableWithoutFeedback>

            <View>
                <ImageBackground
                source={require('./assets/data-board.png')}
                style={styles.dataBoard}
                >
                    <Text style={styles.dataName}>Bobby</Text>
                    <Text style={styles.dataInfo}>Chiwawa</Text>
                    <Text style={styles.dataInfo}>19y/0</Text>
                    <View style={styles.gold}>
                        <Image source={require('./assets/coin.png')} style={styles.coinImg}/>
                        <Text style={styles.goldText}>1000</Text>
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