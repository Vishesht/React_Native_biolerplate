import HomeScreen from '../screens/TabScreen/Home';
import Profile from '../screens/TabScreen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
import React from 'react'

export default function TabScreen() {
    return (
        <Tab.Navigator sceneContainerStyle={{ backgroundColor: 'transparent' }} initialRouteName="HomeScreen" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon = getIconForTab(route, focused);
                return <Ionicons name={icon} size={wp(5)} color={color} />
              
            }
        })} >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

function getIconForTab(route, focused) {
    let icon;
    if (route.name === 'HomeScreen') {
        icon = focused ? 'grid' : 'grid-outline';
    } else if (route.name === 'Profile') {
        icon = focused ? 'call-sharp' : 'call-outline';
    }
    return icon;
}