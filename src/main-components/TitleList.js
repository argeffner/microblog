import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';
import { Link } from 'react-router-dom';
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa';
import { sendVoteToAPI } from "../actions/posts";

function TitleList() {
  const titles = useSelector(st => st.titles);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(function() {
    async function fetchTitle() {
      await dispatch(fetchTitlesFromAPI());
      setLoading(false);
    }

    if (loading) {
      fetchTitle();
    }

  }, [dispatch, loading]);

  const vote = (direction, id) => {
    dispatch(sendVoteToAPI(id, direction));
  }

  if (loading) {
      return <h2><b>Loading Data</b></h2>
    }
  if (titles.length === 0 && !loading) {
      return <b>Feel free to add a post</b>
  }

  // use bootstrap to save time with css 
  return (
    <div className="row">
      {titles.map(title => (
        <div className="col" key={title.id}>
          <div className="card">
            <div className="card-body">
              <div className="card-title">
              {/* create a link for each post */}
               <Link to={"/" + title.id}><b>{title.title}</b></Link>
              </div>
              <div className="card-text">
                <i><b>{title.description}</b></i>
              </div>
              <div className="card-footer">
              <h5>{title.votes} votes</h5>
              <FaThumbsUp className="text-success ml-2" 
                onClick={evt => vote("up", title.id)} size={30} />
              <FaThumbsDown className="text-danger ml-2" 
                onClick={evt => vote("down", title.id)} size={30} />
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}

export default TitleList;