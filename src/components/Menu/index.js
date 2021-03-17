import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

export default function Menu(){
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.container} onPress={ () => navigation.openDrawer()}>
            <AntDesign name="menuunfold" size={24} color="#373737" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9,
        width: 70,
        height: 70,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        left: 15,
        top: 30,
        borderRadius: 100,
        elevation:2,
        shadowColor: '#000',
        shadowOffset:{
            width:1,
            height:3
        }
    }
});
