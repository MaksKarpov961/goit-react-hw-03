import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import contactsData from '../../data/contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [filter, setFilter] = useState('');

  const handleSubmit = (values, actions) => {
    setContacts(prevContacts => [...prevContacts, values]);

    actions.resetForm();
  };

  const filterContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <section>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox onFilter={setFilter} filter={filter} />
        <ContactList contacts={filterContacts} />
      </div>
    </section>
  );
}
export default App;
