import { ActivityIndicator } from 'react-native';
import React from 'react'

export const Colors = {
    white: '#fff',
    black: '#000',
    light_grey: '#ececec',
    med_grey : '#D3D3D3',
    grey1: '#a8a8a8',
    grey: 'grey',
    sky_blue: '#6DC1E3',
    red: 'red',
    tabColor: '#035068',
    headerColor: '#F7F4ED',
    light_green: '#00FA9A',
    greybutton:'rgba(121, 134, 146, 1)',
    greyborderColor: 'rgba(235, 242, 248, 1)',
    themeColor: '#E9EFF5',
    textColor:'#A2B6C7',
    Aidotextcolor:'hsla(208, 25%, 71%, 1)',
    AidoHeading:'hsla(208, 14%, 59%, 1)'
};
export const Images = {
    splashScreen : require('../assets/Images/splash.jpg'),
}
export const ActIndicator = () => {
    return (
      <ActivityIndicator style={{ marginTop: 5 }} size={'large'} color='grey' />
    )
  }