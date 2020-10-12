import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents
} from "react-native-track-player";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Dimensions
} from "react-native";
import { Icon } from 'native-base'
import { colors } from "../../constants";
const { width, height} = Dimensions.get('window')
function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View>
    <View style={styles.progress}>
      <View style={{ flex: progress.position,backgroundColor: "black"}} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: "grey"
        }}
      />
    </View>
   
    </View>
  );
}

function ControlButton({ title, onPress, disable }) {
  return (
    <TouchableOpacity disabled={disable} style={styles.controlButtonContainer} onPress={onPress}>
    {title}
    </TouchableOpacity>
  );
}



export default function PlayerControls(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState();
    const [trackArtist, setTrackArtist] = useState("");
  const [duration, setDuration] = useState("");
  const [disableJumpFw, setDisableJumpFw] = useState(false)
  useTrackPlayerEvents(["playback-track-changed"], async event => {
    // console.log("event",event)
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack?event.nextTrack:event.track);
    
      const { title, artist, artwork, duration } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
        setTrackArtwork(artwork);
        setDuration(duration)
    }
     await TrackPlayer.seekTo(0);
  });

 

  const { style, onNext, onPrevious, onTogglePlayback } = props;


  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      <ProgressBar/>
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
              <ControlButton title={<Icon style={[styles.iconStyle, { transform: [{ rotateY: '180deg' }]}]} name="spinner-rotate-forward" type="Fontisto"/>} onPress={onPrevious} />
              <ControlButton title={playbackState != TrackPlayer.STATE_PLAYING ?
              <Icon style={styles.iconStyle} name="play" type="Ionicons" /> :
              <Icon style={styles.iconStyle} name="pause" type="Ionicons"/>} onPress={onTogglePlayback} />
              <ControlButton title={<Icon style={styles.iconStyle} name="spinner-rotate-forward" type="Fontisto"/>} onPress={onNext} />
          </View>
    </View>
  );
}

PlayerControls.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired
};

PlayerControls.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: "center",
    shadowColor: "black",
    backgroundColor: colors.cardBgColor,
        shadowOffset: { width: 0, height: 1 },
        marginTop: 10,
    alignSelf:"center"
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  progress: {
    height: 2,
    width: "90%",
    marginTop: 10,
    flexDirection: "row"
  },
  title: {
    marginTop: 10,
    width: 270 / 375 * width,
    alignSelf:"center"
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
    marginBottom: 15/765*height,
    flexDirection: "row"
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center"
    },
    iconStyle: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      fontSize: 25,
        color:colors.bgColor
    }
});
