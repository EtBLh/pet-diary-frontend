import { DragResizeBlock, DragResizeContainer } from 'react-native-drag-resize';
import { StyleSheet, View, Text } from 'react-native';
import { boardRatio, boardsSize } from '../style';
import { border } from '../../util';
import { useState } from 'react';
import { Image } from 'expo-image';
import axios from 'axios';
import { useAuth } from '../../ctx/auth';

const   PDRatio = 600/370,
        PDH = 600/646,
        PDV = 370/414,
        PDT = 25/414,
        PDL = 19/646

const styles = StyleSheet.create({
    PetDisplay: {
        width: PDH * boardsSize,
        height: PDV * boardsSize / boardRatio,
        position: 'absolute',
        top: PDT*100+"%",
        left: PDL*100+"%"
    },
    itemImg: {
        width: "100%",
        height: "100%",
        contentFit: 'contain'
    }
})

const PetDisplayItem = (props: {
    limitation: any,
    data: any,
    setData: any,
    disabled: boolean,
    idx: number,
    setSelected: (id:string) => void,
    selected: boolean,
    uri: string,
    zIndex: number,
    productid: string,
    refetch: () => void,
    type: string
}) => {

    const {
        limitation,
        data,
        setData,
        disabled,
        idx,
        setSelected,
        selected,
        uri,
        zIndex,
        productid,
        type,
        refetch
    } = props
    
    const auth = useAuth();

    const update = (update_data: {
        x: number,
        y: number,
        w: number,
        h: number,
        zIndex: number
    }) => {
        axios.post('http://107.191.60.115:81/Dressup/UpdateUserProductPosition',{  
            userID: auth.userid,
            petID: auth.petid,
            productID: productid,
            posX: update_data.x,
            posY: update_data.y,
            width: update_data.w,
            height: update_data.h,
            type: type,
            zIndex: update_data.zIndex
        },
        {headers: {'Content-Type': 'application/json'}})
        .then((res) => {
            refetch();
        })
        .catch(err => console.log(err))
    }

    const select = () => {
        if (setSelected) {
            setSelected(productid)
            update({
                x: data.x,
                y: data.y,
                w: data.w,
                h: data.h,
                zIndex: -1
            });
        }
    }

    return (
        <DragResizeBlock
            {...data}
            limitation={limitation?limitation:undefined}
            onDragEnd={(pos) => {
                update({
                    x: pos.x,
                    y: pos.y,
                    w: data.w,
                    h: data.h,
                    zIndex: zIndex
                })
            }}
            onResizeEnd={(size) => {
                update({
                    x: data.x,
                    y: data.y,
                    w: size.x,
                    h: size.y,
                    zIndex: zIndex
                })
            }}
            isDisabled={disabled || !selected}
            zIndex={zIndex}
            onPress={select}
        >
            <Image source={{uri: uri}} style={styles.itemImg}></Image>
        </DragResizeBlock>
    )}

const PetDisplay = (props: {
    dressList: any[],
    setDressList: (dressList: any[]) => void,
    edit: boolean,
    refetch?: () => void
}) => {

    const [limitation, setLimitation] = useState(null);
    const [selected, setSelected] = useState('');

    const setData = (data) => {
        let newList = JSON.parse(JSON.stringify(props.dressList)); //Deep clone array
        newList[0].posX = data.x;
        newList[0].posY = data.y;
        newList[0].width = data.w;
        newList[0].height = data.h;
        props.setDressList(newList);
    }

    return (
        <DragResizeContainer style={styles.PetDisplay} onInit={limitation=>setLimitation(limitation)}>
            {
                props.dressList.map((product, idx) => (
                    <PetDisplayItem
                        key={`${product.productid}-${product.type}-${idx}`}
                        limitation={limitation}
                        data={{
                            x: product.posX,
                            y: product.posY,
                            w: product.width,
                            h: product.height
                        }}
                        uri={product.Image}
                        setData={setData}
                        disabled={!props.edit}
                        idx={idx}
                        setSelected={props.edit?setSelected:undefined}
                        selected={selected===product.productid}
                        zIndex={product.zIndex}
                        refetch={props.refetch}
                        productid={product.productid}
                        type={product.type}
                    />
                ))
            }
        </DragResizeContainer>
    )
}

export default PetDisplay;