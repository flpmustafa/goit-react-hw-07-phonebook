import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'Redux/Selector';
import { getContactsThunk } from 'Redux/AsyncThunk';
import { useEffect } from 'react';
import  css from './app.module.css'

export function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectContacts);

    useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Section>
      <h2 className={css.h}>Phonebook</h2>
      <ContactForm />
      {!user.length ? (
        <p className={css.h}>Your phonebook is empty. Add your first contact</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Section>
  );
}