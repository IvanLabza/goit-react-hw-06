import React from "react";
import css from "../ContactList.module.css";

const Contact = ({ contact, handleDelete }) => {
  return (
    <div>
      <div className={css.wraps}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <button
        onClick={() => {
          handleDelete(contact.id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
