import {View} from 'react-native'
import { useAuth } from '../../ctx/auth';
import Button from '../components/Button'

const SettingPage = () => {
    const auth = useAuth();
    return (
        <View>
            <Button label="logout" onPress={() => {auth.signOut()}}/>
        </View>
    )
}

export default SettingPage;