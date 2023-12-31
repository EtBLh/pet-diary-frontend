import { View, Image, ImageBackground, Text } from "react-native";
import { displayText, normalText, row } from "../util";
import styles from './style'
import Button from '../components/Button'
import { boardsSize } from "../style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ItemBox = (props) => {
    return (
        <TouchableWithoutFeedback>
            <ImageBackground source={require("../assets/itemBox.png")} style={styles.itemBox}>
                <Image 
                    style={styles.itemImg}
                    source={{uri: props.img}}
                    resizeMode="contain"
                />
                <View style={row}>
                    <Image style={{height: 16, width: 16}} source={require('../assets/coin.png')}/>
                    <Text style={normalText}>{props.money}</Text>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

const DressUPPage = () => {
    return (
    <View style={styles.DressupPageContainer}>
        <View>
            <ImageBackground
                source={require('../assets/board.png')}
                style={styles.board}
                >
            </ImageBackground>
        </View>
        <View style={{...row, width: boardsSize, marginTop: 5}}>
            <Image source={require('../assets/coin.png')} style={{height: 20, width: 20}}/>
            <Text style={{...displayText, flex: 1}}>1000</Text>
            <Button label="reset"/>
        </View>
        <View style={{...row, width: boardsSize, marginTop: 20}}>
            <TouchableWithoutFeedback>
                <Text style={styles.arrow}>{"<"}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.itemCatergory}>hat</Text>
            <TouchableWithoutFeedback>
                <Text style={styles.arrow}>{">"}</Text>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.itemList}>
            <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
            <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
            <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
            <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
        </View>
    </View>
    )
}

export default DressUPPage;