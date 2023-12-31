import { View, Text, Pressable } from "react-native";
import { Image } from 'expo-image';
import { dummyProductList, ImageBackground } from '../util'
import { displayText, normalText, row } from "../util";
import styles from './style'
import Button from '../components/Button'
import { boardsSize } from "../style";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import PetDisplay from "../components/PetDisplay";
import { useState } from 'react';


const ItemBox = (props) => {
    const normalImg = require("../assets/itemBox.png"),
        pressedImg= require("../assets/itemBox-pressed.png");
    return (
        <Pressable>
            {
                ({pressed}) => 
                    <ImageBackground source={pressed?pressedImg:normalImg} style={[styles.itemBox,pressed?styles.pressedItem:undefined]}>
                    <Image 
                        style={styles.itemImg}
                        source={{uri: props.img}}
                        resizeMode="contain"
                    />
                    <View style={row}>
                        {
                            props.bought?
                                <Text style={{...displayText, fontSize:10}}>bought</Text>
                                : <>
                                    <Image style={{height: 16, width: 16}} source={require('../assets/coin.png')}/>
                                    <Text style={normalText}>{props.money}</Text>
                                </>
                        }
                    </View>
                </ImageBackground>
                
            }
        </Pressable>
    )
}

/**
 * type product {
 *   Image: string
 *   posX: number
 *   posY: number
 *   width: number
 *   height: number
 *   productid: string
 *   type: string
 * } 
 */

const DressUPPage = () => {

    const [productList, setProductList] = useState(dummyProductList);

    return (
    <View style={styles.DressupPageContainer}>
        <View>
            <ImageBackground
                source={require('../assets/board.png')}
                style={styles.board}
                >
                <PetDisplay edit productList={productList} setProductList={setProductList}/>
            </ImageBackground>
        </View>
        <View style={{...row, width: boardsSize, marginTop: 5}}>
            <Image source={require('../assets/coin.png')} style={{height: 20, width: 20}}/>
            <Text style={{...displayText, flex: 1}}>1000</Text>
            <Button label="save" onPress={()=>{}}/>
        </View>
        <View style={{...row, width: boardsSize, marginTop: 20}}>
            <TouchableWithoutFeedback onPress={() => {}}>
                <Text style={styles.arrow}>{"<"}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.itemCatergory}>hat</Text>
            <TouchableWithoutFeedback onPress={() => {}}>
                <Text style={styles.arrow}>{">"}</Text>
            </TouchableWithoutFeedback>
        </View>
        <ScrollView>
            <View style={styles.itemList}>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10} bought={true}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
                <ItemBox img="http://107.191.60.115:81/image/shop/blue_hat.png" money={10}/>
            </View>
        </ScrollView>
    </View>
    )
}

export default DressUPPage;