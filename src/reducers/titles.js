import {
    ADD_POST,
    REMOVE_POST,
    UPDATE_POST,
    FETCH_TITLES,
    VOTE } from "../actions/types";

// write function that returns id, title, description (also votes)
function forTitle({id, title, description, votes}){
  return {id, title, description, votes}
};
// sorting function for titles based on # of votes
function voteSort(posts) {
    return posts.sort((a,b) => b.votes - a.votes)
}
//apply voteSort to all cases except delete and update since they remove and edit data
export default function rootReducer(state=[], action) {
  switch (action.type) {

    case ADD_POST:
      return voteSort([...state, forTitle(action.post)])

    case REMOVE_POST:
      return state.filter(title => title.id !== action.postId)

    case UPDATE_POST: 
      return state.map(title => title.id === action.post.id 
        ? forTitle(action.post) : title)

    case FETCH_TITLES:
      return voteSort([...action.titles])

    case VOTE:
      return voteSort(state.map(title => title.id === action.post.id
        ? {...title, votes: action.votes} : title))

    default:
      return state; 
  }
}