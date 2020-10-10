import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import { colors } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import color from '../../constants/color';

const { width, height} = Dimensions.get('window')

const Header = (props) => { 
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <View/>
            </TouchableOpacity>
            <Text style={styles.heading} numberOfLines={1}>{props.name}</Text> 
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70/765*height,
        backgroundColor: colors.cardBgColor,
        alignItems: 'flex-end',
        justifyContent:"center",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flexDirection: "row",
        position:'absolute'
    },
    backButton: {
        width: "10%",
        height: "55%",
        backgroundColor: colors.bgColor,
        bottom: 7,
        left:10,
        borderRadius: 5,
        position:'absolute'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        width:"70%",
        // width: width,
        textAlign:'center',
        alignSelf: "center",
        // position: 'absolute',
        top: 7,
    }
})
