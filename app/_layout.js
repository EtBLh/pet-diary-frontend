import { Stack, Slot } from 'expo-router';
// import Base from './common/base';

import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { router } from 'expo-router';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { border } from './util'

import { Logs } from 'expo'

Logs.enableExpoCliLogging()

//dimesion of background.png: 379 x 750
const windowWidth = Dimensions.get('window').width,
    windowHeight = Dimensions.get('window').height,
    bookHeight = 2250,
    bookWidth = 1134,
    bookPR = 120,
    bookPB = 135,
    bookPT = 186,
    bookNavigationBP = 36,
    bookInScreenRatio = 0.97,
    bookInScreenPB = 0.07;

const styles = StyleSheet.create({
    Base: {
        width: "100%",
        height: "100%",
        backgroundColor: "#0c152a",
        display: "flex"
    },
    BaseImg: {
        position: "absolute",
        width: "100%",
        bottom: bookInScreenPB * 100 + "%",
        height: bookHeight/bookWidth*windowWidth*bookInScreenRatio,
        left: 0,
    },
    navigations: {
        position: "absolute",
        top: windowHeight * (1 - (bookNavigationBP / bookHeight + bookInScreenPB)),
        left: 0,
        width: windowWidth * bookInScreenRatio,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "10%",
        height: windowHeight * (bookInScreenPB - 0.01),
    },
    navBtn: {
        flex: 1,
        width: windowHeight * (bookInScreenPB - 0.01),
        height: "100%"
    },
    navBtnImg: {
        width: "100%",
        height: "100%",
    },
    container: {
        position: "absolute",
        left: 0,
        width: bookInScreenRatio * 100 + "%",
        height: "100%",
        top: "0%",
    },
    containerPadding: {
        paddingTop: windowHeight * (1 - bookInScreenRatio) + windowHeight * bookInScreenRatio * (bookPT / bookHeight),
        paddingBottom: windowHeight * bookInScreenRatio * (bookInScreenPB + bookPB / bookHeight),
        paddingRight: windowWidth * bookInScreenRatio * (bookPR / bookWidth),
        width: "100%", height: "100%"
    }
})

const NavigateButton = (props) => {
    return (
        <TouchableOpacity style={styles.navBtn} onPress={() => router.replace(props.path)}>
            <ImageBackground
                source={props.img}
                style={styles.navBtnImg}
                resizeMode="contain"
            >
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default function Layout() {


    const [fontsLoaded] = useFonts({
        'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
        'PixelifySans': require('./assets/fonts/PixelifySans-VariableFont_wght.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <View style={styles.Base}>

        <View style={styles.container}>
            <Image
                source={require('./assets/background.png')}
                style={styles.BaseImg}
                resizeMode="cover"
            />
            <View style={styles.containerPadding}>
                <Slot />
            </View>
        </View>

        <View style={styles.navigations}>
            <NavigateButton img={require('./assets/diary/mainbutton.png')} path="/" />
            <NavigateButton img={require('./assets/diary/wbutton3.png')} path="/diarypage" />
            <NavigateButton img={require('./assets/diary/healthbutton.png')} path="/" />
            <NavigateButton img={require('./assets/diary/settingbutton.png')} path="/"
            />
        </View>
    </View>
}