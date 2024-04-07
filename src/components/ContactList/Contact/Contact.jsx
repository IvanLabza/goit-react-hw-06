import React from "react";
import css from "../ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";

const Contact = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={css.wraps}>
        <span>{contactName}</span>
        <span>{contactNumber}</span>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(contactId));
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
