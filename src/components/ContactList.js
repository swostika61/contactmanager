import React from "react";
import Delete from "./Delete";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };
  const renderContactList = contacts.map((contact) => {
    return (
      <>
        <Delete contact={contact} clickHandler={deleteContactHandler} />
        <ContactCard contact={contact} />
      </>
    );
  });
  return (
    <div className="contact-list">
      <div class="contact-list-header">
        <div>
          <h4>Contact List</h4>
        </div>
        <div>
          <Link to="/add">
            <button>Add contact</button>
          </Link>
        </div>
      </div>
      {renderContactList}
    </div>
  );
};

export default ContactList;
