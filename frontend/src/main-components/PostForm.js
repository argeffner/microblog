import React, {useState} from 'react';
import {v4 as uuid} from "uuid";

const DEFAULT = {post: {title: '', description: '', body: ''}}

function NewPostForm({ save, cancel}) {
  const [formData, setFormData] = useState(DEFAULT);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}))
  }

  const submitData = e => {
    e.preventDefault();
    save({...formData, id: uuid()});
    setFormData(DEFAULT);
  }

  return (
    <div className='bd'>
      <form onSubmit={submitData}>
       <div>
        <label htmlFor='title'> Title: </label>
        <input 
          id='title' 
          type='text' 
          name='title'
          value={formData.title}
          onChange={handleChange} />
       </div>
       <div>
        <label htmlFor='description'> Description: </label>
        <input 
          id='description' 
          type='text' 
          name='description'
          value={formData.description}
          onChange={handleChange} />
       </div>
       <div>
        <label htmlFor='body'> Body: </label>
        <input 
          id='body' 
          type='text'
          rows={13}
          name='body'
          value={formData.body}
          onChange={handleChange} />
       </div>
        <button type='submit'>Save</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  )
}

export default NewPostForm;