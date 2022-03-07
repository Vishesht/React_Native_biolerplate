import { Dimensions, StyleSheet } from 'react-native';

export const SplashStyle = StyleSheet.create({
    imgBack:{
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
        alignSelf:'center'
    },
    actInd:{
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
        marginTop:'55%'
    }
  });