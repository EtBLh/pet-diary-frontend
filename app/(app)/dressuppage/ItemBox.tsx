import { View, Text, Pressable } from "react-native";
import { Image } from 'expo-image';
import { ImageBackground } from '../../util'
import { displayText, normalText, row } from "../../util";
import styles from './style'
import axios from 'axios';
import { useAuth } from "../../ctx/auth";

export interface TItem {
    image: string
    price: number
    productid: string
    type: string
    bought: boolean
    equipped: boolean
}

export interface TPosSize{
    posX: number
    posY: number
    width: number
    height: number
}

export interface TDressUpItem extends TPosSize, TItem{

}

export interface ItemBoxProps extends TItem{
    refetch: () => void
}

const ItemBox = (props: ItemBoxProps) => {
    const normalImg = require("../assets/itemBox.png"),
        pressedImg = require("../assets/itemBox-pressed.png");

    const auth = useAuth(); 

    const buy = () => {
        axios.post("http://107.191.60.115:81/Dressup/Buy",
        {
            userID: auth.userid,
            petID: auth.petid,
            productID: props.productid
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            props.refetch();
        }).catch(err => console.log(err))
    }

    const equip = () => {
        axios.post("http://107.191.60.115:81/Dressup/UpdateUserProductPosition",
        {
            userID: auth.userid,
            petID: auth.petid,
            productID: props.productid,
            posX: 0,
            posY: 0,
            width: 100,
            height: 100,
            type: props.type,
            zIndex: -1
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            props.refetch();
        }).catch(err => console.log(err))
    }

    const unequip = () => {
        axios.post("http://107.191.60.115:81/Dressup/UpdateProductStatus",
        {
            userID: auth.userid,
            petID: auth.petid,
            productID: props.productid,
            Equipped: false
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            props.refetch();
        }).catch(err => console.log(err))
    }

    const onPress = () => {
        if (props.equipped) {unequip(); return;}
        if (!props.bought) {buy();return}
        equip();
    }

    return (
        <Pressable onPress={onPress}>
            {
                ({ pressed }) =>
                    <ImageBackground source={pressed ? pressedImg : normalImg} style={[styles.itemBox, pressed ? styles.pressedItem : undefined]}>
                        <Image
                            style={props.type === 'Background'?styles.itemImgForBg:styles.itemImg}
                            source={{ uri: props.image }}
                            contentFit="contain"
                        />
                        <View style={row}>
                            {
                                props.equipped ? 
                                <Text style={{ ...displayText, fontSize: 10, height: 16 }}>unequip</Text>
                                : props.bought ?
                                <Text style={{ ...displayText, fontSize: 10, height: 16 }}>bought</Text>
                                : <>
                                    <Image style={{ height: 16, width: 16 }} source={require('../assets/coin.png')} />
                                    <Text style={normalText}>{props.price}</Text>
                                </>
                            }
                        </View>
                    </ImageBackground>

            }
        </Pressable>
    )
}

export default ItemBox;