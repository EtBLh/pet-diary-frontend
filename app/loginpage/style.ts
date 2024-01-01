import { StyleSheet } from 'react-native'
import { row } from '../util';

const styles = StyleSheet.create({
    LoginPageContainer: {
        padding: 10,
        width: "100%",
        height: "100%",
        alignItems: 'center'
    },
    label: { ...row, justifyContent: 'flex-start', width: 300, marginTop: "7%" },
    bottom: { ...row, justifyContent: 'space-between', width: 300, marginTop: "7%" }
})

export default styles;