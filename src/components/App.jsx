import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Loader from './Loader/Loader';
import Filter from 'components/Filter/Filter';

import css from './App.module.css';

import { getContact, getError, getFilter, getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const stateContacts = useSelector(getContact);
  const stateFilter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const normilizedFilter = stateFilter.toLowerCase();
  const visibleContacts = stateContacts.filter(contact => {
    return contact.name.toLowerCase().includes(normilizedFilter);
  });
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      {isLoading && <Loader />}

      {isError && (
        <div className={css.nocontact}>Ooops, something wrong....</div>
      )}

      {stateContacts.length > 0 && <Filter nameForFind={stateFilter} />}

      <h2>Contact List </h2>
      {visibleContacts.length > 0 ? (
        <ContactList contacts={visibleContacts} />
      ) : (
        <div className={css.nocontact}>No contacts to show</div>
      )}
    </div>
  );
};
