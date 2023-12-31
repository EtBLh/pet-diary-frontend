import { StyleSheet } from 'react-native'
import {border, normalText} from '../util'
import { boardsSize, boardRatio } from '../style';

const styles = StyleSheet.create({
  
  petDiaryContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto"
  },

  dateContainer: {
    width: boardsSize,
    display: "flex",
    flexDirection: 'row',  
    alignItems: 'center',
    justifyContent: 'center',
    ...normalText
  },
  dateText: {
    ...normalText,
    letterSpacing: 0.8,
    flex: 1,
    textAlign: 'center'
  },
  uploadImage: {
    alignItems: 'center',
  },
  commentContainer: {
    alignItems: 'center',
  },
  dateArrowContainer: {
    width: 40,
    textAlign: 'center'
  },
  
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  board: {
      width: boardsSize,
      height: boardsSize / boardRatio,
      contentFit: 'contain',
  },


  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  normalTextInput: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 10
  },
  labelText: {
    flexGrow: 1,
    ...normalText
  },
  normalTextInputRight: {
    width: '50%',
    borderBottomWidth: 2,
    borderColor: 'black', 
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
  },
  normalTextInputField: {
    flex: 1,
    height: 35, 
    width: '80%',
    ...normalText
  },
  subtitlecontainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: 6
  }
});

export default styles;