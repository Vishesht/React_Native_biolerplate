import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Colors } from '../assets/assets'

export default function Register() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 20 }}>Register</Text>
            <TouchableOpacity style={{ marginTop: hp(14), backgroundColor: Colors.light_grey1, padding: hp(1) }}
                onPress={() => navigation.navigate('Tabscreen')}>
                <Text style={{ fontSize: hp(2), color: 'black' }}>Go To The Tab Page</Text>
            </TouchableOpacity>
        </View>
    )
}