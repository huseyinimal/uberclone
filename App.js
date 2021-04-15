/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import 'react-native-gesture-handler';
import Router from './src/direction/Root'

import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import HomeMap from './src/components/HomeMap';

import DestinationSearch from './src/screens/DestinationSearch';

import HomeScreen from './src/screens/HomeScreen'
import Root from './src/direction/Root';

navigator.geolocation = require('@react-native-community/geolocation');

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(config);



const App: () => React$Node = () => {


    const androidPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Uber App Camera Permission",
            message:
              "Uber App needs access to your location " +
              "so you can take awesome rides.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
        } else {
          console.log("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  
    useEffect(() => {
      if (Platform.OS === 'android') {
        androidPermission();
      } else {
        // IOS
        Geolocation.requestAuthorization();
      }
    }, [])

  return (
    <>
    
    <Root/>
    </>

 
  );
};



export default withAuthenticator (App);
