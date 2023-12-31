import { StyleSheet } from 'react-native'
import { boardsSize, boardRatio } from '../style';
import { border } from '../util';

const itemBoxRatio = 350/354;

const styles = StyleSheet.create({
    DressupPageContainer: {
        display: 'flex',
        alignItems: 'center',
        height: "100%"
    },
    board: {
        width: boardsSize,
        height: boardsSize / boardRatio,
    },
    arrow: {
        fontFamily: 'PressStart2P-Regular',
        fontSize: 20,
        width: 40,
        textAlign: 'center'
    },
    itemCatergory: {
        fontFamily: 'PressStart2P-Regular',
        fontSize: 15,
        flex: 1,
        textAlign: "center"
    },
    itemList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: boardsSize,
        flex: 1,
        paddingTop: 10
    },
    itemBox: {
        width: boardsSize/3 - 10,
        height: boardsSize/3 - 10,
        margin: 5
    }
})


export default styles;