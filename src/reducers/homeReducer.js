import data from '../data/data';

const initialState = {
    podcastList: data,
    selectedChannel: {},
    following: []
}


export default homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_CHANNEL_OBJECT':
            return {...state, selectedChannel: action.payload}
      case 'FOLLOW_CHANNELS':
        let prevList = state.following
        let prevPodcastList = state.podcastList
        let newList = []
        const podListIndex = prevPodcastList.findIndex(ele=>ele.channelName == action.payload.channelName)
        const index = state.following.findIndex(ele => ele.channelName == action.payload.channelName)
        if (index == -1) {
          prevPodcastList[podListIndex]["following"] = true
          newList = [...prevList, action.payload]
        } else {
          prevPodcastList[podListIndex]["following"] = false
          newList = prevList.filter(ele => ele.channelName != action.payload.channelName)
        }
        Object.assign(state.podcastList,prevPodcastList);
        return {...state, following: newList, podcastList:prevPodcastList}
      default:
        return state
    }
  }
  
  
  