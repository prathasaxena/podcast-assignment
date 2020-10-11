import React, { useEffect } from "react";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import { useSelector} from 'react-redux'
import {PlayerControls} from '../Player'
import { View, Text, StyleSheet,Image, Dimensions, ScrollView, ImageBackground, ActivityIndicator } from 'react-native';
import Header from './Header';
import { colors } from '../../constants';
const { width, height } = Dimensions.get('window')

export default function PlayEpisodes(props) {
    const playbackState = usePlaybackState();
    const jumpInterval = 30 // jump forwrard/backwards by 30 secs
    const { name, description, audio, episode } = props.route.params.value  // route params
    const image = useSelector(state => state.home.selectedChannel.image) // image from global state
  useEffect(() => {
      setup();
 
  }, []);
    async function playTrackOnMount() { 
          await TrackPlayer.reset();
          await TrackPlayer.add({
            id: "local-track",
            url: audio,
            title: name,
            artist:"",
            artwork: image,
            duration: await TrackPlayer.getDuration()
          });
          await TrackPlayer.play();
    }
    async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
        stopWithApp: true,
        jumpInterval:jumpInterval,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE
      ]
    });
        await playTrackOnMount();
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: "local-track",
        url: audio,
          title: name,
        artist:"",
        artwork: image,
        duration: await TrackPlayer.getDuration()
      });
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }
    
  async function jumpForward() {
    let newPosition = await TrackPlayer.getPosition();
    let duration = await TrackPlayer.getDuration();
    newPosition += jumpInterval;
    if (newPosition > duration) {
      newPosition = duration;
    }
    TrackPlayer.seekTo(newPosition);
}

 async function jumpBackwards() {
    let newPosition = await TrackPlayer.getPosition();
    newPosition -= jumpInterval;
    if (newPosition < 0) {
      newPosition = 0;
    }
    TrackPlayer.seekTo(newPosition);
  }

    return (
      <View style={styles.container}>
        <ScrollView bounces={false} style={{flex:1}}>
            {/* header */ }
            <Header name={name} />
            {/* album's image */}
             <View>
            <PlayerControls
              onNext={jumpForward}
              style={styles.player}
              onPrevious={jumpBackwards}
              onTogglePlayback={togglePlayback}
            />
            </View>  
            {/* Description */}
            <View>
                <Text style={styles.abouts}> Episode {episode} </Text>
                <Text style={styles.titleDesc}>{description}</Text>
            </View>
            </ScrollView>
        </View>  

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  description: {
    width: "80%",
    marginTop: 20,
    textAlign: "center"
  },
  player: {
    marginTop: 40
  },
  state: {
    marginTop: 20
    },
  container: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    image: {
        height: 200/765*height,
        width: 160/375*width,
       backgroundColor:'red',
        marginLeft: "3%",
    },
    imageBg: {
        marginTop: 90 / 765 * height,
        height: 200/765*height,
        width: width,  
        justifyContent:"flex-end"
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
});
