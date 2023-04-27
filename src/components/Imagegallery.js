import React, { useState } from 'react';


function Imagegallery() {
  const [image, setImage] = useState('');

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="App">
      <h1>Upload and Display Images with React</h1>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={image} alt="uploaded image" />}
    </div>
  );
}

export default Imagegallery;