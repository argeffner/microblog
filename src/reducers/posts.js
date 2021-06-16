import {
    FETCH_POST,
    ADD_POST,
    REMOVE_POST,
    UPDATE_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    VOTE } from '../actions/types';

// make sure to export initially to pass to combinereducers
export default function rootReducer(state = {}, action) {
       
  switch (action.type) {
    case FETCH_POST:
      return {...state, [action.post.id]: action.post};
    
    case ADD_POST:
      return {...state, [action.post.id]: {...action.post, comments: [] }}  
      
    case REMOVE_POST:
      return state.filter(post => post.id !== action.postId);
    //   different method below
    /*  let posts = { ...state };
        delete posts[action.postId]
        return posts;  */

    case UPDATE_POST:
      return {...state, [action.post.id]: {
        ...action.post, comments: state[action.post.id].comments }}
    
    case ADD_COMMENT:
      return {...state, [action.postId]: {
        ...state[action.postId], comments: [
          ...state[action.postId].comments, action.comment] }}  

    case REMOVE_COMMENT:
      return {...state, [action.postId]: {
        ...state[action.postId], comments: 
          state[action.postId].comments.filter(com => com.id !== action.commentId)
        }}
        
    case VOTE:
      return {...state, [action.postId]: {
        ...state[action.postId], votes: action.votes}
      }
    
    default:
      return state;
  }
}