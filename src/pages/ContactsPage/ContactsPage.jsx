import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';
import {
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors.js';
import Title from '../../components/Title/Title.jsx';

export default function Phonebook() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      <Title>Phonebook</Title>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
