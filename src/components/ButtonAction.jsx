import React from 'react';
import '../styles/ButtonAction.css';

function ButtonAction({title, onClick}) {
  return (
    <div>
      <button type="submit" onClick={onClick}className="action-button">{title} </button>
    </div>
  );
}

export default ButtonAction;
