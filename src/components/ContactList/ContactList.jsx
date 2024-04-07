import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  return (
    <ul className={css.list}>
      {(filter
        ? contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
        : contacts
      ).map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact contactName={name} contactNumber={number} contactId={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
