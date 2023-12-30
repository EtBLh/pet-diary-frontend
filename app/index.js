import { View,Image, ImageBackground, Text } from "react-native";
import styles from "./style";
import CalendarScreen from "./components/Calendar";

const HomePage = () => {

    return (
        <View style={styles.HomePageContainer}>
            <View style={[{marginTop: 0}]}>
                <ImageBackground
                    source={require('./assets/board.png')}
                    style={styles.board}
                    >
                </ImageBackground>
            </View>

            <View>
                <ImageBackground
                source={require('./assets/data-board.png')}
                style={styles.dataBoard}
                >
                    <Text style={styles.dataName}>Bobby</Text>
                    <Text style={styles.dataInfo}>Chiwawa</Text>
                    <Text style={styles.dataInfo}>19y/0</Text>
                    <View style={styles.gold}>
                        <Image source={require('./assets/coin.png')} style={styles.coinImg}/>
                        <Text style={styles.goldText}>1000</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{}}>
                <ImageBackground
                source={require('./assets/calendar-bg.png')}
                style={styles.calendar}
                >
                    <CalendarScreen></CalendarScreen>
                </ImageBackground>
            </View>
        </View>
    )
}

export default HomePage;