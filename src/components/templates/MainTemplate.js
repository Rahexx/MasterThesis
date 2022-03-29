import React, { useState } from 'react';
import { UploadImageForm } from '../UploadImageForm/UploadImageForm';
import { Navigation } from '../Navigation/Navigation';
import axios from 'axios';

export const MainTemplate = ({ children }) => {
  const [showUploadFileForm, setShowUploadFileForm] = useState(false);
  const [fileToBeSent, setFileToBeSent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseUploadForm();
    const formData = new FormData();
    formData.append('file', fileToBeSent);

    axios
      .post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseUploadForm = () => setShowUploadFileForm(false);
  const handleOpenUploadForm = () => setShowUploadFileForm(true);

  const handleFile = (e) => setFileToBeSent(e.target.files[0]);

  return (
    <>
      <Navigation handleOpenForm={handleOpenUploadForm} />
      <UploadImageForm
        isOpen={showUploadFileForm}
        handleCloseForm={() => handleCloseUploadForm()}
        submitForm={(e) => {
          handleSubmit(e);
        }}
        onChangeFile={handleFile}
      />
      <div>{children}</div>
    </>
  );
};
