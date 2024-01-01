import { DragResizeBlock, DragResizeContainer } from '@skynetcmg47/react-native-drag-resize';
import { StyleSheet, View, Text } from 'react-native';
import { boardContent, boardRatio, boardsSize } from '../../util';
import { useState } from 'react';
import { Image } from 'expo-image';
import axios from 'axios';
import { useAuth } from '../../ctx/auth';

const styles = StyleSheet.create({
    PetDisplay: {
        ...boardContent
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
        const body = {  
            userID: auth.userid,
            petID: auth.petid,
            productID: productid,
            posX: update_data.x,
            posY: update_data.y,
            width: update_data.w,
            height: update_data.h,
            type: type,
            zIndex: update_data.zIndex
        }

        axios.post('http://107.191.60.115:81/Dressup/UpdateUserProductPosition',body,
        {headers: {'Content-Type': 'application/json'}})
        .then((res) => {
            refetch();
        })
        .catch(err => console.log(err))
    }

    const select = () => {
        if (setSelected && type !== 'Background') {
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

    if (type === 'Background') return (
        <View style={{
            position: 'absolute',
            top: limitation.y,
            left: limitation.x,
            width: limitation.w,
            height: limitation.h,
            zIndex: 0
        }}>
            <Image source={{uri: uri}} style={styles.itemImg}></Image>
        </View>
    )

    return (
        <DragResizeBlock
            {...data}
            limitation={limitation?limitation:undefined}
            onDragEnd={(pos) => {
                update({
                    x: pos[0],
                    y: pos[1],
                    w: data.w,
                    h: data.h,
                    zIndex: zIndex
                })
            }}
            onResizeEnd={(size) => {
                update({
                    x: data[0],
                    y: data[1],
                    w: size[2],
                    h: size[3],
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