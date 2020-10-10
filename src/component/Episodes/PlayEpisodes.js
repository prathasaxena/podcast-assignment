import React from 'react';
import { View, Text, StyleSheet,Image, Dimensions, ScrollView, ImageBackground } from 'react-native';
import Header from './Header';
import { colors } from '../../constants';
import { useSelector } from 'react-redux'
const { width, height } = Dimensions.get('window')
import TrackPlayer, {
    useTrackPlayerProgress,
    usePlaybackState,
    useTrackPlayerEvents
  } from "react-native-track-player";
function ProgressBar() {
    const progress = useTrackPlayerProgress();
  
    return (
      <View style={styles.progress}>
        <View style={{ flex: progress.position, backgroundColor: "red" }} />
        <View
          style={{
            flex: progress.duration - progress.position,
            backgroundColor: "grey"
          }}
        />
      </View>
    );
  }
const PlayEpisodes = (props) => { 
    const { name, description, audio, episode } = props.route.params.value
    const image = useSelector(state => state.home.selectedChannel.image)
    return (
        <View style={styles.container}>
        <ScrollView bounces={false} style={{flex:1}}>
             {/* header */ }
            <Header name={name} />
            {/* album's image */}
                <ImageBackground resizeMode="cover" style={styles.imageBg} imageStyle={styles.image} source={{ uri: image }} >
                <ProgressBar />
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
        width: 200/375*width,
       backgroundColor:'red',
        marginLeft: "7%",
    },
    imageBg: {
        marginTop: 90 / 765 * height,
        height: 200/765*height,
        width: 200/375*width,  
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