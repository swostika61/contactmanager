import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Delete = ({ contact,clickHandler }) => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(true); 

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="popup-box">
          <div className="box">
            <p>Are you sure?</p>       
              <p onClick={()=>clickHandler(contact.id)}>yes</p>
            <span className="close-icon" onClick={togglePopup}>
              x
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Delete;
