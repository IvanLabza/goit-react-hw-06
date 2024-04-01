import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact handleDelete={handleDelete} contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
