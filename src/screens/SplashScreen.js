import React, { useEffect } from 'react'
import { View, ImageBackground, ActivityIndicator,} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Images } from '../assets/assets';
import { SplashStyle } from '../Style/MainStyle';

export default function SplashScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.addListener('focus', () => {
            setTimeout(async () => {
                const value = await AsyncStorage.getItem('User_Id');
                if (value !== null) {
                    navigation.navigate('HomeScreen')
                } else {
                    navigation.navigate('Register')
                }
            }, 1200);
        });
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={SplashStyle.imgBack} source={Images.splashScreen}>
                <ActivityIndicator style={SplashStyle.actInd} size={'large'} color='grey' />
            </ImageBackground>
        </View>
    )
}
