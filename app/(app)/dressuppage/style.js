import { StyleSheet } from 'react-native'
import { boardsSize, boardRatio } from '../style';
import { border, displayText } from '../../util';

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
        ...displayText,
        fontSize: 20,
        width: 40,
        textAlign: 'center'
    },
    itemCatergory: {
        ...displayText,
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
    itemBoxContainer: {
        width: boardsSize/3 - 10,
        height: boardsSize/3 - 10,
    },
    itemBox: {
        display: 'flex',
        width: boardsSize/3 - 10,
        height: boardsSize/3 - 10,
        margin: 5,
        paddingBottom: 40/354*100+"%",
        contentFit: 'contain'
    },
    itemImg: {
        width: "100%",
        flex: 1
    },
    pressedItem: {
        marginTop: 9/354*(boardsSize/3 - 10)+5,
        marginBottom: 5-9/354*(boardsSize/3 - 10)
    }
})


export default styles;