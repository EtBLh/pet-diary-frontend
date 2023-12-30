import { StyleSheet } from 'react-native'
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import { normalText } from '../util';

const styles = StyleSheet.create({
      button: {
        width: 83,  
        height: 42,  
        justifyContent: 'center',
        alignItems: 'center',
      },
      background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
      }
})

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.style]}>
          <ImageBackground
            source={require('../assets/button.png')}  // 背景图片路径
            style={styles.background}
            resizeMode="contain"
          >
            <Text style={normalText}>{props.label}</Text>
          </ImageBackground>
        </TouchableOpacity>
    )
}

export default Button;