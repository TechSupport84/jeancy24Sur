import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import '../styles/BackArrowButton.css';

function BackArrowButton({title, onClick}) {
  return (
    <div  onClick={onClick}className="back-arrow-button">
      <BiArrowBack  size={30}  />
      <span>Back</span>
    </div>
  );
}

export default BackArrowButton;

