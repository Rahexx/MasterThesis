import React, { useState } from 'react';
import { UploadImageForm } from '../UploadImageForm/UploadImageForm';
import { Navigation } from '../Navigation/Navigation';

export const MainTemplate = ({ children }) => {
  const [showUploadFileForm, setShowUploadFileForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formFields = e.target;
    const titleInput = formFields[0].value;
    const fileInput = formFields[1];
  };

  const handleCloseUploadForm = () => setShowUploadFileForm(false);
  const handleOpenUploadForm = () => setShowUploadFileForm(true);

  return (
    <>
      <Navigation handleOpenForm={handleOpenUploadForm} />
      <UploadImageForm
        isOpen={showUploadFileForm}
        handleCloseForm={() => handleCloseUploadForm()}
        submitForm={(e) => {
          handleSubmit(e);
        }}
      />
      <div>{children}</div>
    </>
  );
};
