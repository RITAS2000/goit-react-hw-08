import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps.js';
import Loader from '../Loader/Loader.jsx';
import Error from '../Error/Error.jsx';
import { selectIsLoading, selectError } from '../../redux/contactsSlice.js';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      {loading && <Loader />}
      {error && <Error />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
