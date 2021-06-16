import React, {useState} from 'react';

function CommentForm({submitComment}) {
  const [comment, setComment] = useState();

  const handleChange = e => {
    setComment(e.target.value)
  }

  const submitData = e => {
    e.preventDefault();
    submitComment(comment);
    setComment('');
  }

  return (
      <div>
        <form onSubmit={submitData}>
          <input id='comment' 
                 type='text' 
                 name='comment'
                 plaveholder="write comment here"
                 value={comment}
                 onChange={handleChange} />
          <button>Add</button>
        </form>
      </div>
  )
}

export default CommentForm;