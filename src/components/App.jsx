import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contacts.array);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
