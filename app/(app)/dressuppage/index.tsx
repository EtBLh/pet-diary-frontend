import { View, Text } from "react-native";
import { Image } from 'expo-image';
import { ImageBackground } from '../../util'
import { displayText, row } from "../../util";
import styles from './style'
import Button from '../components/Button'
import { boardsSize } from "../style";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import PetDisplay from "../components/PetDisplay";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemBox, {TItem} from './ItemBox'
import { useAuth } from "../../ctx/auth";

const DressUPPage = () => {

    const [money, setMoney] = useState('');
    const [dressList, setDressList] = useState([]);
    const [shopList, setShopList] = useState([]);
    const [shopProductPage, setProductPage] = useState(0);

    const [_refetch, setRefetch] = useState(false); const refetch = () => setRefetch(!_refetch);

    const handlePageShift = (shift: number) => {
        const keys = Object.keys(shopList);
        setProductPage((pageNum) => (pageNum + shift + keys.length) % keys.length);
    };

    const auth = useAuth();

    useEffect(() => {
        axios.post(
            'http://107.191.60.115:81/Dressup/GetDressPageInfo',
            {
                userID: auth.userid,
                petID: auth.petid,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            const data = response.data;
            setMoney(data.money);
            setDressList(data.DressUpProduct);
            setShopList(data.ShopProduct);

        }).catch((err) => {
            console.error('Error fetching data:', err);
        })
    }, [_refetch]);

    return (
        <View style={styles.DressupPageContainer}>
            <View>
                <ImageBackground
                    source={require('../assets/board.png')}
                    style={styles.board}
                >
                    <PetDisplay
                        edit 
                        setDressList={setDressList}
                        dressList={dressList.filter(dress => {
                            return dress.equipped;
                        })}
                    />
                </ImageBackground>
            </View>
            <View style={{ ...row, width: boardsSize, marginTop: 5 }}>
                <Image source={require('../assets/coin.png')} style={{ height: 20, width: 20 }} />
                <Text style={{ ...displayText, flex: 1 }}>{money}</Text>
                <Button label="save" onPress={() => { }} />
            </View>
            <View style={{ ...row, width: boardsSize, marginTop: 20 }}>
                <TouchableWithoutFeedback onPress={() => handlePageShift(-1)}>
                    <Text style={styles.arrow}>{"<"}</Text>
                </TouchableWithoutFeedback>
                <Text style={styles.itemCatergory}>
                    {Object.keys(shopList).length > 0 ? Object.keys(shopList)[shopProductPage] : 'No Product'}
                </Text>
                <TouchableWithoutFeedback onPress={() => handlePageShift(+1)}>
                    <Text style={styles.arrow}>{">"}</Text>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <View style={styles.itemList}>
                    <Text>{JSON.stringify(dressList)}</Text>
                    {
                        shopList === undefined? null:
                        Object.keys(shopList).length <= 0 ? null: 
                            shopList[Object.keys(shopList)[shopProductPage]].map((item:TItem) => (
                                <ItemBox {...item} refetch={refetch}/>
                            ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default DressUPPage;