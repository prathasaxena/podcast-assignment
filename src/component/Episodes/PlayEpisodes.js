import React from 'react';
import { View, Text, StyleSheet,Image, Dimensions, ScrollView, ImageBackground } from 'react-native';
import Header from './Header';
import { colors } from '../../constants';
const { width, height} = Dimensions.get('window')

const PlayEpisodes = (props) => { 
    const { name, image, description , audio, episode} = props.route.params.value
    return (
        <View style={styles.container}>
        <ScrollView bounces={false} style={{flex:1}}>
             {/* header */ }
            <Header name={name} />
            {/* album's image */}
                <ImageBackground resizeMode="contain" style={styles.image} source={{ uri: image }} >
                 </ImageBackground>   
            {/* Description */}
            <View>
                    <Text style={styles.abouts}> Episode {episode} </Text>
                <Text style={styles.titleDesc}>{description}</Text>
            </View>
            </ScrollView>
        </View>  
    )
}

export default PlayEpisodes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    image: {
        height: 200/765*height,
        width: width,
        marginTop: 90/765*height,
    },
    abouts: {
        marginTop: "5%",
        marginLeft: "3%",
        fontSize: 20,
        fontWeight: 'bold',
        // color:colors.textColor 
    },
    titleDesc: {
        alignSelf: 'center',
        marginHorizontal: "3%",
        textAlign: 'justify',
        marginTop: "2%",
        fontWeight: '400',
        color: colors.textColor,
        fontSize: 15,
    },
    episodesListParent: {
        marginHorizontal: "3%",
        marginTop: "3%",
    }
})