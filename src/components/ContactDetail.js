import React from "react";
import { Link } from "react-router-dom";
const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <div>
        <Link to="/">
          <button>contact list</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
