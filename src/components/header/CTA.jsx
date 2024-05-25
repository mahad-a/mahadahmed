import React, { useState } from 'react';
import CV from '../../assets/Mahad_Ahmed_Resume_2024.pdf';

const CTA = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDownloadClick = () => {
    setShowConfirmation(true);
  };

  const handleDownloadConfirmed = () => {
    setShowConfirmation(false);
    // Proceed with download
    window.location.href = CV;
  };

  const handleCancelDownload = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="cta">
      <button onClick={handleDownloadClick} className="btn">
        Download Resume
      </button>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>

      {showConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={handleCancelDownload} className="close">&times;</span>
            <p>Are you sure you want to download the resume?</p>
            <div className="modal-actions">
              <button onClick={handleDownloadConfirmed} className="btn btn-primary">
                Yes
              </button>
              <button onClick={handleCancelDownload} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTA;
