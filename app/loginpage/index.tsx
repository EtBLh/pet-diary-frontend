import React, { useEffect } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import { displayText, normalText, row } from "../util";
import Button from '../(app)/components/Button'
import styles from "./style";
import { useAuth } from "../ctx/auth";
import { router } from "expo-router";

const LongInput = (props: {value:string, setValue:(text:string) => void}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <ImageBackground
                source={require('../(app)/assets/longInput.png')}
                style={{ height: 43, width: 300 }}
                resizeMode="contain"
            >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
            }}>
                <TextInput
                    style={{...normalText, marginLeft:"5%"}}
                    placeholder="enter username"
                    width={300}
                    height="100%"
                    textAlign='left'
                    onChangeText={props.setValue} 
                    value={props.value}
                />
            </View>
            </ImageBackground>
        </View>
    )
}

const LoginPage = () => {

    const auth = useAuth()

    useEffect(() => {
        if (auth.validated){
            router.replace('/')
        }
    }, [auth.validated])

    return (
        <View style={styles.LoginPageContainer}>
            <View style={{...row, marginTop: "10%"}}>
                <Text style={{...displayText, fontSize: 20}}>Login</Text>
            </View>
            <View style={styles.label}>
                <Text style={normalText}>username</Text>
            </View>
            <LongInput value="1234" setValue={(text) => {0;}}/>
            <View style={styles.label}>
                <Text style={normalText}>password</Text>
            </View>
            <LongInput value="1234" setValue={(text) => {0;}}/>

            <View style={styles.bottom}>
                
                <Text style={{...normalText, borderBottomWidth: 4, borderBottomColor: "black"}}>sign up</Text>
                <Button label="login" onPress={() => auth.signIn("username_password", "username_testpet")}/>
            </View>
        </View>
    )
}

export default LoginPage;