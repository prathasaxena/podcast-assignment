import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import { colors } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const SingleChannelCard = React.memo(({item}) => { 
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ChannelDetails", { value: item })}>
            {/* channel image */ }
            <Image resizeMode="cover" style={styles.image} source={{ uri: item.image }} />
             {/* channel name */ }
            <Text style={styles.bottomText}>{item.channelName}</Text>
         </TouchableOpacity>   
    )
})

export default SingleChannelCard;

const styles = StyleSheet.create({
    container: {
        height: 150 / 675 * height,
        width: 150 / 375 * width,
        backgroundColor: colors.cardBgColor,
        marginRight: 20 / 375 * width,
        marginBottom: 20 / 675 * height,
        borderRadius: 10,
        overflow:"hidden"
    },
    image: {
        width: "100%",
        height: "80%"
    },
    bottomText: {
        marginVertical: '3%',
        alignSelf:"center",
        fontSize: 15,
        fontWeight: 'bold',
        color:"#880E4F"
    }
})