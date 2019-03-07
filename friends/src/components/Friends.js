import React from "react";

import '../App.css'

import Friend from "./Friend";

const Friends = props => {
  return (
    <ul className='friends-list'>
      {props.friends.map(friend => {
        return <Friend key={friend.name} friend={friend} />;
      })}
    </ul>
  );
};

export default Friends;