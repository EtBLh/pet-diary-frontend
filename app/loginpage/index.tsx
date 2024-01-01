import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, Alert } from "react-native";
import { displayText, normalText, row } from "../util";
import Button from '../(app)/components/Button'
import styles from "./style";
import { useAuth } from "../ctx/auth";
import axios from 'axios';

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

    const auth = useAuth();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            console.log('Sending request with username:', username, 'and password:', password);
            const response = await axios.post('http://107.191.60.115:81/User/Login', {
                username: username,
                password: password,
            });
            // Alert.alert('Response from server:', response.data);
            const { userID, petID } = response.data;
            if (userID && petID) {
                Alert.alert('Login Successful');
                // Alert.alert('Login Successful', `UserID: ${userID}\nPetID: ${petID}`);
                auth.signIn(userID,petID)
            } 
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };



    return (
        <View style={styles.LoginPageContainer}>
            <View style={{...row, marginTop: "10%"}}>
                <Text style={{...displayText, fontSize: 20}}>Login</Text>
            </View>
            <View style={styles.label}>
                <Text style={normalText}>username</Text>
            </View>
            <LongInput value={username} setValue={setUsername}/>
            <View style={styles.label}>
                <Text style={normalText}>password</Text>
            </View>
            <LongInput value={password} setValue={setPassword}/>

            <View style={styles.bottom}>
                <Text style={{...normalText, borderBottomWidth: 4, borderBottomColor: "black"}}>sign up</Text>
                <Button label="login" onPress={handleLogin}/>
            </View>
        </View>
    )
}

export default LoginPage;
