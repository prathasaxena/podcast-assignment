import React, { useEffect } from "react";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import { useSelector} from 'react-redux'
import {PlayerControls} from '../Player'
import { View, Text, StyleSheet,Image, Dimensions, ScrollView, ImageBackground, ActivityIndicator } from 'react-native';
import Header from './Header';
import { colors } from '../../constants';
const { width, height } = Dimensions.get('window')

 const PlayEpisodes = (props) => {
    const playbackState = usePlaybackState();
   const [descView, setDiscriptionview] = React.useState(true) // view more/view less description
   const [showMore, setShowMore] = React.useState(true);
    const jumpInterval = 30 // jump forwrard/backwards by 30 secs
    const { name, description, audio, episode , duration} = props.route.params.value  // route params
    const image = useSelector(state => state.home.selectedChannel.image) // image from global state
   useEffect(() => {
      setup();
 
  }, []);
   
  //  playing track after setup 
    async function playTrackOnMount() { 
          
          await TrackPlayer.add({
            id: `id-${name}`,
            url: audio,
            title: name,
            artist:"",
            artwork: image,
            duration: duration
          });
          await TrackPlayer.play();
    }
   
  //  setting up track on mount 
   async function setup() {
    await TrackPlayer.reset();
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

   //toggle play and pause play and pause 
   async function togglePlayback() {
     try {
       const currentTrack = await TrackPlayer.getCurrentTrack();
       if (currentTrack == null) {
         await TrackPlayer.reset();
         await TrackPlayer.add({
           id: `id-${name}`,
           url: audio,
           title: name,
           artist: "",
           artwork: image,
           duration: duration
         });
         await TrackPlayer.play();
       } else {
         if (playbackState === TrackPlayer.STATE_PAUSED) {
           await TrackPlayer.play();
         } else {
           await TrackPlayer.pause();
         }
       }
     } catch (e) {
      console.log("e", e)
     }
  }
   
  // jump forward by 30 secs
   async function jumpForward() {
       let newPosition = await TrackPlayer.getPosition();
       let duration = await TrackPlayer.getDuration();
       newPosition += jumpInterval;
     if (newPosition >= duration) {
      newPosition = duration - 1;
    
     
     } 
      TrackPlayer.seekTo(newPosition);
   }

   // jump backwards by 30 secs
 async function jumpBackwards() {
    let newPosition = await TrackPlayer.getPosition();
    newPosition -= jumpInterval;
    if (newPosition < 0) {
      newPosition = 1;
    }
    TrackPlayer.seekTo(newPosition);
  }
   const onTextLayout = React.useCallback(e => {
    setShowMore(e.nativeEvent.lines.length >= 8);
  }, [])
  
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
            <Text onTextLayout={onTextLayout} style={styles.titleDesc} numberOfLines={descView?8:null}>{description}</Text>
            {showMore && <Text onPress={() => setDiscriptionview(!descView)} style={styles.viewMoreText}>{descView?"View More":"View Less"}</Text>}
            </View>
            </ScrollView>
        </View>  

  );
}

export default PlayEpisodes;

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
  viewMoreText: {
    marginHorizontal: "3%",
    marginBottom: "3%",
    color: "#CE93D8",
  }
});
