import { View, Text } from "react-native";
import { Image } from 'expo-image';
import { ImageBackground, boardsSize, displayText, row } from '../../util'
import styles from './style'
import Button from '../components/Button'
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import PetDisplay from "../components/PetDisplay";
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import ItemBox, {TItem} from './ItemBox'
import { useAuth } from "../../ctx/auth";

const DressUPPage = () => {

    const [money, setMoney] = useState('');
    const [dressList, setDressList] = useState([]);
    const [shopList, setShopList] = useState([]);
    const [shopProductPage, setProductPage] = useState(0);

    const [fetched, setfetched] = useState(false);
    const initialDressList = useMemo(() => dressList,[fetched])

    const [_refetch, setRefetch] = useState(false); const refetch = () => setRefetch(!_refetch);
    const auth = useAuth();

    const handlePageShift = (shift: number) => {
        const keys = Object.keys(shopList);
        setProductPage((pageNum) => (pageNum + shift + keys.length) % keys.length);
    };

    const reset = () => {
        if (initialDressList.length === 0) return;
        axios.post('http://107.191.60.115:81/Dressup/Multi_UpdateUserProductPosition',{
            userID: auth.userid,
            petID: auth.petid,
            products: initialDressList
        },{
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            refetch();
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (dressList.length !== 0) setfetched(true);
    })

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
                        refetch={refetch}
                    />
                </ImageBackground>
            </View>
            <View style={{ ...row, width: boardsSize, marginTop: 5 }}>
                <Image source={require('../assets/coin.png')} style={{ height: 20, width: 20 }} />
                <Text style={{ ...displayText, flex: 1 }}>{money}</Text>
                {/* <Button label="reset" onPress={reset} /> */}
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