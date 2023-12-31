import { StyleSheet } from 'react-native'
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import { normalText, whiteText } from './util';

export const databoardRatio = 648/224;
export const boardRatio = 652/414;

export const boardsSize = 320;

const styles = StyleSheet.create({
    HomePageContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: boardsSize,
        resizeMode: 'contain',
    },
    board: {
        width: boardsSize,
        height: boardsSize / boardRatio,
        contentFit: 'contain',
    },
    dataBoard: {
        width: boardsSize,
        height: boardsSize / databoardRatio,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    dataName: {
        ...whiteText,
        fontSize: 25
    },
    dataInfo: {
        ...whiteText,
        fontSize: 15,
        opacity: 0.7
    },
    gold: {
        position: "absolute",
        right: 15,
        top: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    coinImg: {
        width: 20,
        height: 20
    },
    goldText: {
        ...whiteText
    },
    calendar: {
        marginTop: 10,
        width: boardsSize,
        height: boardsSize,
        padding: 50/960*100+"%",
        paddingTop: 87/960*100+"%"
    },
})

export default styles;