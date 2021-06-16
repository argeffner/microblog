import axios from 'axios';
import {FETCH_TITLES} from "./types";
const API = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function fetchTitleFromAPI() {
    return async function(dispatch) {
      const res = await axios.get(`${API}`);
      return dispatch(getTitles(res.data));
    }
}

// action creator function 
function getTitles(titles) {
    return { type: FETCH_TITLES, titles};
}