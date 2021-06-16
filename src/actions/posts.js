import axios from 'axios';
import {FETCH_POST,
        ADD_POST,
        REMOVE_POST,
        UPDATE_POST,
        ADD_COMMENT,
        REMOVE_COMMENT,
        VOTE } from "./types";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function getPostFromAPI(id) {
  return async function(disptach) {
    const res = await axios.get(`${API}/${id}`);
    return disptach(getPost(res.data));
  }
}
const getPost = (post) => { 
    return {type: FETCH_POST, post} 
}

export function sendPostToAPI(title, description, body) {
    return async function(disptach) {
      const res = await axios.get(`${API}`,
      {title, description, body});
      return disptach(addPost(res.data));
    }
  }
  const addPost = (post) => { 
      return {type: ADD_POST, post} 
  }

  export function removePostFromAPI(id) {
    return async function(disptach) {
      await axios.delete(`${API}/${id}`);
      return disptach(removePost(id));
    }
  }
  const removePost = (postId) => { 
      return {type: REMOVE_POST, postId} 
  }

  export function updatePostToAPI(id, title, description, body) {
    return async function(disptach) {
      const res = await axios.put(`${API}/${id}`,
      {title, description, body});
      return disptach(updatePost(res.data));
    }
  }
  const updatePost = (post) => { 
      return {type: UPDATE_POST, post} 
  }

  export function sendCommentToAPI(postId, text) {
    return async function(disptach) {
      const res = await axios.get(`${API}/${postId}/comments`,
      {text});
      return disptach(addComment(postId, res.data));
    }
  }
  const addComment = (postId, comment) => { 
      return {type: ADD_COMMENT, postId, comment} 
  }

  export function removeCommentToAPI(postId, commentId) {
    return async function(disptach) {
      await axios.get(`${API}/${postId}/comments/${commentId}`);
      return disptach(removeComment(postId, commentId));
    }
  }
  const removeComment = (postId, commentId) => { 
      return {type: REMOVE_COMMENT, postId, commentId} 
  }

  export function sendVoteToAPI(id, direction) {
    return async function(disptach) {
      const res = await axios.get(`${API}/${id}/vote/${direction}`);
      return disptach(vote(id, res.data));
    }
  }
  const vote = (postId, votes) => { 
      return {
          type: VOTE, 
          postId: postId,
          votes: votes
      }; 
  }