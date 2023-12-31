import { Image } from 'expo-image';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

export const border = {
    borderWidth: 4,
    borderColor: "red"
}

export const normalText = {
    fontSize: 20,
    color: "#1e2226",
    fontFamily: 'PixelifySans',
}

export const whiteText = {
    fontSize: 20,
    color: "white",
    fontFamily: 'PixelifySans',
}

export const displayText = {
    fontSize: 15,
    color: "#1e2226",
    fontFamily: 'PressStart2P-Regular',
}

export const row = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
}

/**
 * Wraper around `expo-image` to be able to use it with children on android.
 * @see https://github.com/expo/expo/issues/22338
 */
export function ImageBackground({ children, ...props }) {
    const isAndroid = Platform.OS === 'android';

    if (isAndroid) {
        return (
            <View style={styles.container}>
                <Image {...props} />
                <View
                    style={[
                        styles.chlidren,
                        StyleSheet.absoluteFill,
                        props.style
                    ]}
                >
                    {children}
                </View>
            </View>
        );
    }

    return <Image {...props} children={children} />;
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    chlidren: {
        zIndex: 1
    }
});
