import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {file ? (
              <div>
                <p>{file.name}</p>
                <button onClick={handleFileUpload}>Upload</button>
              </div>
            ) : (
              <p>Drag and drop an image here or click to select a file</p>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default FileUploader;
