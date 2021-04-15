import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen"
import SearchResults from "../screens/SearchResults"
import DestinationSearch from "../screens/DestinationSearch"
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"DestinationSearch"} component={DestinationSearch}/>
                <Stack.Screen name={"SearchResults"} component={SearchResults}/>
            </Stack.Navigator>
    )
}

export default HomeNavigator
