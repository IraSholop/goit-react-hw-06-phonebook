import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contacts/slice';

export function ContactList() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.array);

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const normalizedFilter = filterValue.toLowerCase();
  const visubleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {visubleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p className={css.text}>
            {name} : {number}
          </p>
          <button
            type="button"
            onClick={() => deleteContact(id)}
            className={css.btn}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
