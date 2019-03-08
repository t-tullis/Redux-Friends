import {
  FETCHING_DATA, 
  FETCHING_DATA_SUCCESS, 
  FETCHING_DATA_ERROR, 
  LOG_OUT, 
  ADD_FRIEND_START, 
  ADD_FRIEND_SUCCESS, 
  ADD_FRIEND_ERROR,
} from "../actions";

const initialState = {
    loadingFriends: false,
    addingFriend: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type){
        case FETCHING_DATA:
        return{
            ...state,
            error: '',
            loadingFriends: true
        };
        case FETCHING_DATA_SUCCESS:
        console.log(action.payload)
        return{
          ...state,
          loadingFriends: false,
          friends: [...state.friends, ...action.payload]
        };
        case FETCHING_DATA_ERROR:
        return{
          ...state,
          isLoading: false,
          error: action.payload
        };
        case LOG_OUT:
        return{
          ...state,
          isLoading: false,
          friends: []
        }
        case ADD_FRIEND_START:
        return{
          ...state,
          addingFriend: true,
          error: null
        };
        case ADD_FRIEND_SUCCESS:
        return{
          ...state,
          friends: action.payload,
          addingFriend: false
        }
        case ADD_FRIEND_ERROR:
        return{
          ...state,
          addingFriend: false,
          error: action.payload
        }
        default:
        return state;
    }
};