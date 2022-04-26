import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UploadImageForm } from '../UploadImageForm/UploadImageForm';
import { Navigation } from '../Navigation/Navigation';
import { handleUploadProject } from '../../actions/projects';

export const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const [showUploadFileForm, setShowUploadFileForm] = useState(false);
  const [fileToBeSent, setFileToBeSent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseUploadForm();
    const formData = new FormData();
    formData.append('file', fileToBeSent);

    dispatch(handleUploadProject(formData));
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
