import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PostForm from "./PostForm";
import PostDisplay from "./DisplayPost";
import CommentList from '../comment-components/CommentList'
import CommentForm from '../comment-components/CommentForm'
import {
  getPostFromAPI,
  updatePostInAPI,
  removePostFromAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  sendVoteToAPI
} from "../actions/posts";
import './styles/Post.css';

function Post(props) {
    const [editing, setEditing] = useState(false);
    const history = useHistory();
    const postId = Number(useParams().postId);
    const post = useSelector(st => st.post[postId])
    const dispatch = useDispatch();

    // Toggle between on/off for editing
    const editToggle = () => {
        setEditing(edit => !edit);
      }
    
    // gets post from API if loading 
    useEffect(function load4PostOrIdChange() {
      async function getPost() {
        dispatch(getPostFromAPI(postId));
      }
      if (!post) {
        getPost();
      }
    }, [dispatch, postId, post]);

    // delete post and delete from backend
    const deletePost = () => {
      dispatch(removePostFromAPI(postId));
      history.push("/");
    }

    // edit post and update to backend
    const edit = ({title, description, body}) => {
      dispatch(updatePostInAPI(
        postId, title, description, body
      ));
      // change to edit
      editToggle();
    }

    //  add comment and add comment to backend
    const addComment = (text) => {
      dispatch(sendCommentToAPI(postId, text));
    }

    // delete comment and remove from backend
    const deleteComment = (commentId) => {
      dispatch(removeCommentFromAPI(postId, commentId));
    }

    // update vote to backend
    const vote = (direction) => {
      dispatch(sendVoteToAPI(postId, direction));
    }
  if (!post) return <p>Loading</p>;
    
  return (
      <div Classname='post'>
        {editing ? 
         <PostForm post={post} save={edit} cancel={editToggle}/>
        : <PostDisplay post={post} toggleEdit={editToggle} deletePost={deletePost} doVote={vote} />}

        <div className="comments">
          <h3>Comments</h3>
          <CommentList comments={post.comments} deleteComment={deleteComment} />
          <CommentForm submitComment={addComment} />

        </div>
        
      </div>
  )
}

export default Post;