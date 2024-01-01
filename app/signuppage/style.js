import { StyleSheet } from 'react-native'
import { row } from '../util';

const styles = StyleSheet.create({
    signupPageContainer: {
        padding: 10,
        width: "100%",
        height: "100%",
        alignItems: 'center'
    },
    titleContainer: {
        alignItems: 'center', 
        marginTop: 0, 
        right: 0, 
      },
      container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom:0,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        marginLeft:0,
      },
      button: {
        alignItems: 'center',
        marginLeft:20,
      },
      buttonImage: {
        width: 119, 
        height: 56, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectedbuttonImage: {
        width: 119,
        height: 56, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 20,
        color: '#000000FF',
        fontFamily: 'PixelifySans',
        letterSpacing: 0.8,
      },
    
    
      inputRow: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10, 
        left:10,
      },
      labelContainer: {
        flex: 1.7,
        marginLeft:12,
        marginRight: 10, 
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
      },
    
      genderRow: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 1, 
        left:10,
    
      },
      genderContainer: {
        flex: 1.5,
        marginLeft:12,
        marginRight: 50, 
        marginTop:10,
      },
      genderbutton: {
        alignItems: 'center',
        marginLeft:-50,
      },
      saveContainer: {
        flexDirection: 'row',
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
      container2: {
        justifyContent: 'center',
        alignItems: 'center',
        top:15,
        left:20,
      },
      imageRow: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      imageContainer: {
        marginRight: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
      },
      selectedImageContainer: {
        borderColor: '#CA9664', 
      },
      optionimage: {
        width: 100,
        height: 100,
      },
    label: { ...row, justifyContent: 'flex-start', width: 300, marginTop: "7%" },
    bottom: { ...row, justifyContent: 'space-between', width: 300, marginTop: "7%" }
})


export default styles;