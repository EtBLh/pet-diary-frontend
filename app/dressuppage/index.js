import { View,Image, ImageBackground, Text } from "react-native";
import { normalText, row } from "../util";
import styles from './style'
import Button from '../components/Button'
import { boardsSize } from "../style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ItemBox = () => {
    return (
        <View>
            <ImageBackground source={require("../assets/itemBox.png")} style={styles.itemBox}>

            </ImageBackground>
        </View>
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
            <Text style={{...normalText, flex: 1}}>1000</Text>
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
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>
        </View>
    </View>
    )
}

export default DressUPPage;