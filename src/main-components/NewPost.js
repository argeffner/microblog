import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PostForm from './PostForm';
import { sendPostToAPI } from "../actions/posts";
import './NewPost.css';

function NewPost() {
 
  const dispatch = useDispatch();
  const history = useHistory(); 
  
  /** Add post and save to backend. */
  const add = ({title, description, body}) => {
    dispatch(sendPostToAPI(title, description, body))
    history.push("/");
  }

  const cancel = () => {
    history.push("/");
  }

  return (
    <div>
      <h1>New Post</h1>
      <PostForm save={add} cancel={cancel} />
    </div>
  )
}

export default NewPost;