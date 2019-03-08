import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOG_OUT = 'LOG_OUT';
export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR'

export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR'


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return(
        axios
        .post('http://localhost:5000/api/login', creds, {})
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload})
            getData();
        })
    )
}

export const getData = () => dispatch => {
    dispatch({ type: FETCHING_DATA});
    axios
    .get('http://localhost:5000/api/friends', {
        headers: { Authorization: localStorage.getItem('token')}
    })
    .then(res => {
        dispatch({ type: FETCHING_DATA_SUCCESS,
        payload: res.data});
    })
    .catch(err => {
        dispatch({ type: FETCHING_DATA_ERROR,
        payload: err})
    })
}

export const addFriend = (newFriend) => dispatch => { 
    dispatch({ type: ADD_FRIEND_START});      
    axios
    .post('http://localhost:5000/api/friends', newFriend, {
        headers: {Authorization: localStorage.getItem('token')}
    })
    .then(res => {
        dispatch({ type: ADD_FRIEND_SUCCESS,
        payload: res.data})
    })
    .catch(err => {
        dispatch({ type: ADD_FRIEND_ERROR,
        payload: err})
    })
  }

export const logOut = () => dispatch =>{
    dispatch({ type: LOG_OUT });
    return(
        localStorage.clear()
    )
}