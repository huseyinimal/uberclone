import React, {useState, useEffect} from 'react'
import { View, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/native';


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 37.386051, lng: -122.083855 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat:  37.886051, lng: -122.883855 } },
};

const DestinationSearch = (props) => {
    const[fromText, setFromText]= useState('');
    const[destinationText, setDestinationText]= useState('');

    const[originPlace, setOriginPlace]= useState(null);
    const[destinationPlace, setDestinationPlace]= useState(null);

    const navigation= useNavigation();

    const checkNavigation =()=>{
 
      if(originPlace&& destinationPlace){
        
        navigation.navigate('SearchResults', {
          originPlace,
          destinationPlace,
        })
      }
    }

    useEffect(()=>{
      checkNavigation();
     
    }, [originPlace, destinationPlace]);
    return (
        <SafeAreaView>
        <View style={styles.container}> 
        <GooglePlacesAutocomplete
      placeholder='Where from?'
      onPress={(data, details = null) => {
        setOriginPlace({data,details});
        
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      currentLocation={true}
      currentLocationLabel='Current Location'
      styles={{
        textInputContainer: styles.textInput,
        container:styles.autocompletecontainer,
        listView:styles.listView,
        separator:styles.separator,

        
      }}
      fetchDetails
      query={{
        key: 'AIzaSyDgGO7c-Vz8seXh4_h2Oid5Y-fJD31EDYE',
        language: 'en',
      }}
      renderRow={(data)=> <PlaceRow data={data}/>}
      renderDescription={(data)=> data.description ||data.vicinity}
      predefinedPlaces={[homePlace, workPlace]}
    />


            <GooglePlacesAutocomplete
      placeholder='Where to?'
      onPress={(data, details = null) => {
        setDestinationPlace({data,details});
        
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        textInputContainer: styles.textInput,
        container:{
          ...styles.autocompletecontainer,
          top:80,
        },
        
        separator:styles.separator,

      }}
      fetchDetails
      query={{
        language: 'en',
      }}
      renderRow={(data)=> <PlaceRow data={data}/>}

    />
    <View style={styles.circle}/>
    <View style={styles.line}/>
    <View style={styles.square}/>

        </View></SafeAreaView>
    );
};

export default DestinationSearch;
