import { DragResizeBlock, DragResizeContainer } from 'react-native-drag-resize';
import { StyleSheet, View, Text } from 'react-native';
import { boardRatio, boardsSize } from '../style';
import { border } from '../util';
import { useState } from 'react';
import { Image } from 'expo-image';

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

const PetDisplayItem = (props) => {

    const {
        limitation,
        data,
        setData,
        disabled,
        idx,
        select, // (idx:number) => void
        selected
    } = props

    return (
        <DragResizeBlock
            {...data}
            limitation={limitation?limitation:undefined}
            onDragEnd={(pos) => {
                setData({
                    x: pos.x,
                    y: pos.y,
                    w: data.w,
                    h: data.h
                })
            }}
            onResizeEnd={(size) => {
                setData({
                    x: data.x,
                    y: data.y,
                    w: size.x,
                    h: size.y
                })
            }}
            isDisabled={disabled || !selected}
            zIndex={1000-idx}
            onPress={() => {if (select)select(idx)}}
        >
            <Image source={{uri: props.uri}} style={styles.itemImg}></Image>
        </DragResizeBlock>
    )}
    

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

/**
 * 
 * @param { 
 *          edit: boolean,
 *          productList: product[],
 *          setProductList: (product[]) => void 
 *        } props 
 * @returns component
 */
const PetDisplay = (props) => {

    const [limitation, setLimitation] = useState(null);
    const [selected, setSelected] = useState(0);

    //pops the pressed item and put it in the head of the array
    const select = (idx) => {
        setSelected(idx);

        let newList = JSON.parse(JSON.stringify(props.productList)); //Deep clone array
        let maxZIndex = 0;

        newList.forEach((item) => {
            item.zIndex--;
            if (item.zIndex > maxZIndex) {
                maxZIndex = item.zIndex;
            }
        })

        newList[idx].zIndex = maxZIndex + 1;

        props.setProductList(newList);
    }

    const setData = (data) => {
        let newList = JSON.parse(JSON.stringify(props.productList)); //Deep clone array
        newList[0].posX = data.x;
        newList[0].posY = data.y;
        newList[0].width = data.w;
        newList[0].height = data.h;
        props.setProductList(newList);
    }

    return (
        <DragResizeContainer style={styles.PetDisplay} onInit={limitation=>setLimitation(limitation)}>
            {
                props.productList.map((product, idx) => (
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
                        select={props.edit?select:undefined}
                        selected={selected===idx}
                    />
                ))
            }
        </DragResizeContainer>
    )
}

export default PetDisplay;