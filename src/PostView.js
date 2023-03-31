import React, { useState } from 'react';
import axios from 'axios';

function PostView() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('location', location);
    data.append('description', description);
    data.append('image', image);

    axios.post('/api/posts', data)
      .then(response => {
        console.log(response.data);
        setName('');
        setLocation('');
        setDescription('');
        setImage('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={e => setImage(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostView;
