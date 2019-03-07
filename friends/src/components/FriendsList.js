import React from 'react'
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner'

import Friends from './Friends'

import { logOut } from '../actions';
import {getData} from '../actions';


class FriendsList extends React.Component {

    componentDidMount(){
        this.props.getData()
    }

    logOut = e => {
        e.preventDefault();
        this.props.logOut()
        this.props.history.push('/')
  }

    render(){
        return(
            <div>
                <h1>Friends list</h1>
                {/* {this.props.loadingFriends && (
                    <Loader type="Puff" color="white" height={50} width={50} />
                )} */}
                <Friends friends={this.props.friends} />
                <button onClick={this.logOut}>Log Out</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return {
      loadingFriends: state.friendsReducer.loadingFriends,
      friends: state.friendsReducer.friends,
      error: state.friendsReducer.error
    }
  }

export default connect(
    mapStateToProps,
    { logOut, getData}
  )(FriendsList);