import React from "react";

const Friend = props => {
  return(
    <div>
        <li>
            <strong>NAME: </strong>{props.friend.name} <span><strong>AGE: </strong> {props.friend.age} </span> 
            <span><strong>EMAIL: </strong>{props.friend.email} </span>
        </li>
  </div>
  );
};

export default Friend;