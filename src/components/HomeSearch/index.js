import React from 'react'
import { View, Text, Pressable } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const HomeSearch = (props) => {
    const navigation= useNavigation();
    const goToSearch =()=>{
        navigation.navigate('DestinationSearch')
    }
    return (
        <View>
        <Pressable onPress={goToSearch} style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>

            <View style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
            <Text>Now</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
            </View>
            </Pressable>

            <View style={styles.row}>
        <View style={styles.iconContainer}>
        <AntDesign name={'clockcircle'} size={20} color={'#ffffff'}/>
        </View>
        <Text style={styles.destinationText}>Spin NightClub</Text>
    </View>

    
    <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor:'#218cff'}]}>
        <Entypo name={'home'} size={20} color={'#ffffff'}/>
        </View>
        <Text style={styles.destinationText}>Spin NightClub</Text>
    </View>
            </View>
            
        
   
    
    );
};

export default HomeSearch;
