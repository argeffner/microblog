import React from 'react';
import {FaTimesCircle} from 'react-icons/fa';


function Comment({deleteComment, text, id}) {
  
  const handleDelete = e => deleteComment(id);
  
return (
    <div>
      <p>
        {deleteComment && (
        <FaTimesCircle onClick={handleDelete} size={50}/>
        )}
        {text}
      </p>
    </div>
  )
}

export default Comment;