import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';



const HomeMap = (props) => {
  

  const getImage=(type)=>{
    if(type === 'Comfort'){
        return require('../../assets/images/top-Comfort.png')
    }
    if(type === 'UberX'){
        return require('../../assets/images/top-UberX.png')

    }
    return require('../../assets/images/top-UberXL.png')
    

};

    return (
        
      <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 37.386051,
        longitude: -122.083855,
        latitudeDelta: 9.7836,
        longitudeDelta: 1.8780,
      }}
      >
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>      
     
    );
};

export default HomeMap;

