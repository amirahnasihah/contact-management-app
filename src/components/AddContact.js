import React, { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { Link, useNavigate } from "react-router-dom/dist";

const AddContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are required!");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui header">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button className="ui primary button">Add</button>
        <Link to="/">
          <button className="ui grey button">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default AddContact;
