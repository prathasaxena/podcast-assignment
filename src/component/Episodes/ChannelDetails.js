import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import { colors } from '../../constants';
import Header from './Header';
import EpisodesList from './EpisodesList';
import { useDispatch, useSelector } from 'react-redux'
const { width, height } = Dimensions.get('window');
import { Icon} from 'native-base'

const ChannelDetails = (props) => { 
    const { channelName, image, titleDesc, listOfEpisodes } = props.route.params.value
    const dispatch = useDispatch();
    const selectedChannel = useSelector(state => state.home.selectedChannel, () => { })
    
    // saving the channel to global state 
    useEffect(() => { 
        dispatch({type:'SELECTED_CHANNEL_OBJECT', payload: props.route.params.value})
    }, [])

    // follow/ unfollow action dispatch
    const followChannel = () => { 
        dispatch({type:'FOLLOW_CHANNELS', payload: selectedChannel})
    }

    return (
        <View style={styles.container}>
        <ScrollView bounces={false} style={{flex:1}}>
             {/* header */ }
            <Header name={channelName} />
                {/* album's image */}
                <TouchableOpacity onPress={() => followChannel()}>
                     {/* follow/ unfollow functionality */}
                    {selectedChannel.following   ?
                        <View style={styles.followViewParent}>
                            <Icon type="Ionicons" name="remove-circle" style={styles.followIcon}/>
                            <Text style={styles.followText}> Unfollow</Text>
                        </View> :
                        <View style={styles.followViewParent} >
                        <Icon type="Ionicons" name="add-circle" style={styles.followIcon}/>
                        <Text style={styles.followText}>Follow</Text>
                        </View>}                 
                </TouchableOpacity>
                 {/* artwork */}
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
        marginTop: 20/765*height,
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
    },
    followViewParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end",
        marginHorizontal: "3%",
        marginTop: "3%",
        marginBottom: 10 / 765 * height,
        zIndex: 5,
        elevation:1
    },
    followText: {
        fontSize: 15,
        color: colors.green,
        fontWeight: "bold",
        zIndex: 5,
        elevation:1
    },
    followIcon: {
        fontSize: 20,
        color: colors.green,
        fontWeight: "bold",
        zIndex: 5,
        elevation:1
    }
})