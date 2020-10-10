import data from '../data/data';

const initialState = {
    podcastList: data,
    selectedChannel: {}
}


export default homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_CHANNEL_OBJECT':
            return {...state, selectedChannel: action.payload}
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  
  