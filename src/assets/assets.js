import { ActivityIndicator } from 'react-native';
import React from 'react'

export const Colors = {
    white: '#fff',
    black: '#000',
    light_grey: '#ececec',
    light_grey1: '#a8a8a8',
    med_grey : '#D3D3D3',
    grey: 'grey',
    sky_blue: '#6DC1E3',
    red: 'red',
    light_green: '#00FA9A',
};
export const Images = {
    splashScreen : require('../assets/Images/splash.jpg'),
}
export const ActIndicator = () => {
    return (
      <ActivityIndicator style={{ marginTop: 5 }} size={'large'} color='grey' />
    )
  }