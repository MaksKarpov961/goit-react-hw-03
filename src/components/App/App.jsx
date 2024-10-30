import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import contacts from '../../data/contacts.json';

function App() {
  return (
    <section>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </section>
  );
}
export default App;
