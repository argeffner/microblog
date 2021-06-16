import React from 'react';
import {FaTimesCircle, FaEdit, FaThumbsUp, FaThumbsDown} from 'react-icons/fa';
import './styles/DisplayPost.css';

function DisplayPost({toggleEdit, deletePost, post, doVote}) {
  const {title, description, body, votes} = post;

  return (
    <div className="display-post">
      <main>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{body}</div>
      </main>
      <div className="display-right">
        <div className="buttons">
          <FaEdit onClick={toggleEdit} size={40} style={{color: 'teal', marginLeft: '15px'}}/>
          <FaTimesCircle onClick={deletePost} size={40} style={{color: 'red', marginLeft: '15px'}}/>
        </div>
        <div className="display-votes">
          <b>{votes} votes:</b>
          <FaThumbsUp onClick={evt => doVote("up")} size={40} style={{color: 'green', marginLeft: '15px'}}/>
          <FaThumbsDown onClick={evt => doVote("down")} size={40} style={{color: 'red', marginLeft: '15px'}}/>
        </div>
      </div>
    </div>
  )
}

export default DisplayPost;