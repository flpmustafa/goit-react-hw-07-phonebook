import { useDispatch, useSelector  } from 'react-redux';
import { addContactThunk } from 'Redux/AsyncThunk';
import { selectContacts } from 'Redux/Selector';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
const onChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const inputSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value, 
    }

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts!`);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts!`);
      return; 
    } else if (checkQuery(name, number)) {
      alert(" Enter the contact's name and number phone!");
    }

    dispatch(addContactThunk(newContact));
     
    evt.target.reset();
  };

     const checkQuery = (name, number) => {
       return name.trim() === '' || number.trim() === '';
     } 
    
    return (
      <div className={css.container}>
    <form className={css.form} onSubmit={inputSubmit}>
      <label className={css.label__form}>
        Name
        <input
          className={css.input__contact}
          type="text"
          name="name"
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter you name"
        />
      </label>
      <label className={css.label__form}>
        Number
        <input
          className={css.input__contact}              
          type="tel"
          name="number"
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
      </label>
          <button
            className={css.btn}
            type="submit"
          >Add contact</button>
    </form>
  </div>
  );
}