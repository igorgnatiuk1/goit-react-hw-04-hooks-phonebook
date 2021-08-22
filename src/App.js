import {useState, useEffect} from "react";
import { v4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import Section from "./components/Section";

const allContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App () {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? allContacts});
  const [filter, setFilter] = useState('');
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const isInContacts = contacts.some(contact => contact.name === name)
    if (isInContacts) { alert(`${name} is already in contacts.`); return }

    if (name && number) {
      const contact = {
        id: v4(),
        name,
        number,
      };
      setContacts(prevState => [contact, ...prevState]);
    }
  };

  const deleteContact = (contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
  });

  const changeFilter = event => {
    setFilter(event.currentTarget.value)
  }

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const resultedVisibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
    return resultedVisibleContacts;
  }

    return (
        <Section>


          <h1>Phonebook</h1>
          <ContactForm  onSubmit = {formSubmitHandler}/>

          <h2>Contacts</h2>
          <h2>Find contacts by name</h2>

          <Filter value={filter} onChange={changeFilter} />

          <ContactList  onDelete ={deleteContact} contacts={filteredContacts()}/>


        </Section>
    )
  }



export default App;