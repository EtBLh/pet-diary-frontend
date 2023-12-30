import { StyleSheet } from 'react-native'
import {border, normalText} from '../util'

const styles = StyleSheet.create({
  
  petDiaryContainer: {
    flex: 1,
    justifyContent: 'flex-start',  
    alignItems: 'center'
  },

  dateContainer: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',  
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    ...normalText
  },
  imageContainer: {
    alignItems: 'center', 
    marginTop: 0, 
    marginBottom: 0,
    right: 20 
  },
  dateText: {
    ...normalText,
    letterSpacing: 0.8,
  },
  buttonContainer: {
    marginLeft: 10,  
    marginRight: 10, 
  },
  
  image: {
    width: 300,
    height: 190,
    resizeMode: 'contain',
  },

  commentContainer: {
    alignItems: 'center',
    width:310,
    height:60,
    marginTop: -3,
    right:18,
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
  commentText: {
    color: 'black',
    fontFamily: 'PixelifySans',
    fontSize: 20,
  },

  inputRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 1, 
    left:10,
  },
  labelContainer: {
    flex: 1.5,
    marginRight: 20,
    marginTop:10,
  },
  labelText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'PixelifySans',
  },
  inputContainer: {
    flex: 1.5, 
    borderBottomWidth: 1, 
    borderColor: 'black', 
    width: '80%',  
    alignSelf: 'center',  
  },
  input: {
    flex: 1,
    height: 35, 
    fontSize: 20, 
    width:150,
    fontFamily: 'PixelifySans',
  },
  unitText: {
    flex:0.8,
    marginLeft: 0,  
    color: 'black',
    fontFamily: 'PixelifySans',
    fontSize: 20,
    
  },
  subtitlecontainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    right:10,
    marginTop:10,
  },
  subtitle: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'PixelifySans',
  },

  saveContainer: {
    marginTop: -10,
    left:100,
    top:12,
  },
  saveButton: {
    width: 83,  
    height: 42,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  mainbutton: {
    width: 98,  
    height: 58, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  littlebuttonBackground: {
    width: 64,  
    height: 59,  
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;