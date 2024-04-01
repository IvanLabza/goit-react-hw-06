import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const savedContacts = () =>
    JSON.parse(localStorage.getItem("contacts")) || initialContacts;

  const [contacts, setContacts] = useState(savedContacts);

  const [filter, setFilter] = useState("");

  const addContact = (contact) => {
    const newContact = { ...contact, id: nanoid() };
    setContacts([newContact, ...contacts]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContact = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleDelete = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const getFilteredContacts = () => {
    return contacts.filter((item) => item.name.toLowerCase().includes(filter));
  };

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterContact={filterContact} />
      <ContactList
        handleDelete={handleDelete}
        contacts={getFilteredContacts()}
      />
    </div>
  );
}

export default App;
