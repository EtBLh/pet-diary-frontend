import { StyleSheet } from 'react-native'
import {border, normalText} from '../util'

const styles = StyleSheet.create({
  
  petDiaryContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto"
  },

  dateContainer: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',  
    alignItems: 'center',
    justifyContent: 'center',
    ...normalText
  },
  dateText: {
    ...normalText,
    letterSpacing: 0.8,
  },
  uploadImage: {
    alignItems: 'center',
  },
  commentContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginLeft: 10,  
    marginRight: 10, 
  },
  
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
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