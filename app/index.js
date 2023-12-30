import { View } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import {border} from './util'

const Root = () => {

    return (
        <View style={[border, {height: "100%"}]}>
            <Link href="/diarypage">dp</Link>
        </View>
    )
}

export default Root;