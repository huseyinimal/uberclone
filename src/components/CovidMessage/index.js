import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
const CovidMessage = (props) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.text}>Covid Message</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    );
};

export default CovidMessage;
