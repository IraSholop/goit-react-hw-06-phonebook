import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from 'redux/contacts/slice';
import { filter } from 'redux/filter/slice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.array);
  const filterValue = useSelector(state => state.filter);

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const formSubmitHandler = data => {
    const newData = { ...data, id: nanoid() };
    if (contacts.length > 0) {
      const nameFilter = contacts.filter(contact =>
        contact.name.includes(data.name)
      );
      if (nameFilter.length > 0) {
        alert(`${data.name} is already in contacts`);
        return;
      }
    }
    dispatch(add(newData));
  };

  const changeFilter = e => {
    dispatch(filter(e.currentTarget.value));
  };

  const normalizedFilter = filterValue.toLowerCase();
  const visubleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filterValue} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactList
          contacts={visubleContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
}
