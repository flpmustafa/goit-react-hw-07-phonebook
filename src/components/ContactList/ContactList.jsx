import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'Redux/Selector';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from 'components/ContactList/ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <div className={css.contact__list}>
      <h2>Contacts</h2>
    <ul className={css.contact__roster}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
      </ul>
      </div>
  );
}