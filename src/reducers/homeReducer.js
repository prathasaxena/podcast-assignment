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
        let prevSelectedChannel = state.selectedChannel
        let newList = []
        const index = state.following.findIndex(ele => ele.channelName == action.payload.channelName)
        if (index == -1) {
          prevSelectedChannel["following"] = true
          newList = [...prevList, action.payload]
        } else {
          prevSelectedChannel["following"] = false
          newList = prevList.filter(ele => ele.channelName != action.payload.channelName)
        }
        Object.assign(state.selectedChannel,prevSelectedChannel);
        return {...state, following: newList, selectedChannel:prevSelectedChannel}
      default:
        return state
    }
  }
  
  
  