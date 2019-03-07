import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR} from "../actions";

const initialState = {
    loadingFriends: false,
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
        default:
        return state;
    }
};