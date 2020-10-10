import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import { colors } from '../../constants';
import Header from './Header';
import EpisodesList from './EpisodesList';
import { useDispatch } from 'react-redux'
const { width, height} = Dimensions.get('window')

const ChannelDetails = (props) => { 
    const { channelName, image, titleDesc, listOfEpisodes } = props.route.params.value
    const dispatch = useDispatch();
   
    useEffect(() => { 
        dispatch({type:'SELECTED_CHANNEL_OBJECT', payload: props.route.params.value})
    },[])
   
    return (
        <View style={styles.container}>
        <ScrollView bounces={false} style={{flex:1}}>
             {/* header */ }
            <Header name={channelName} />
            {/* album's image */}
            <Image resizeMode="contain" style={styles.image} source={{ uri: image }} />
            {/* Description */}
            <View>
                <Text style={styles.abouts}> Abouts </Text>
                <Text style={styles.titleDesc}>{titleDesc}</Text>
            </View>
             {/* episodes list */}
            <View style={{flex:1}}>
                <Text style={styles.abouts}> All Episodes </Text>
                <View style={styles.episodesListParent}>
                    <EpisodesList data={listOfEpisodes} />
                </View>
                </View>
                  </ScrollView>
            </View>
      
    )
}

export default ChannelDetails;

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