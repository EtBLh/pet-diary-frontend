import { Pressable, StyleSheet, Text } from 'react-native'
import { ImageBackground } from '../../util';
import { displayText } from '../../util';

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

  const PressableProps = {
    style: ({ pressed }) => [styles.button, props.style],
    onPress: props.onPress
  };

  const normalBgImg = require('../assets/button.png'),
        pressedBgImg = require('../assets/button-pressed.png');

  return (
      <Pressable {...PressableProps}>
      {
        ({ pressed }) => (
          <ImageBackground
          source={pressed?pressedBgImg:normalBgImg}  // 背景图片路径
          style={styles.background}
          resizeMode="contain"
        >
          <Text style={{...displayText, fontSize: 12, marginTop: pressed?3/39*100+"%":undefined}}>{props.label}</Text>
        </ImageBackground>
        )
      }
      </Pressable>
  )
}

export default Button;