import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const RouteMap = ({origin, destination}) => {
  const originLoc= {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  
  const destinationLoc ={
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  }; 
 

  

    return (
        
            <MapView
            style={{height:'100%', width:'100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
    initialRegion={{
      latitude: 37.386051,
      longitude: -122.083855,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
  >
     <MapViewDirections
    origin={originLoc}
    destination={destinationLoc}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={5}
    strokeColor="black"
  />
  <Marker
  coordinate={originLoc}
  title={'Origin'}
  />
  <Marker
  coordinate={destinationLoc}
  title={"Destination"}
  />
  
  </MapView>          
     
    );
};

export default RouteMap;

