import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  return (
    <div>
      <div className="content">
        <div className="content-item">
          <Link
            to={{
              pathname: `/contact/${contact.id}`,
              state: { contact: contact },
            }}
          >
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
          </Link>
        </div>
        <Link to="/delete">
        <i className="far fa-trash-alt"
        ></i>
        </Link>
      </div>
    </div>
  );
};

//onClick=(contact.id)

export default ContactCard;
