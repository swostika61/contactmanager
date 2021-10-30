import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("all fields are mandatory!");
    } else {
      addContactHandler({ name, email });
      setName("");
      setEmail("");
      history.push('/')
    }
  };
  return (
    <div className="main">
      <div className="main-content">
        <h3>Add Contact</h3>
        <form className="form" onSubmit={add}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abx@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
