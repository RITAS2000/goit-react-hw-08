import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiFillPhone } from 'react-icons/ai';
import { GoPersonFill } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDubl = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number,
    );

    if (isDubl) {
      const haveContact = window.confirm(
        `A contact with this name or number already exists. Do you want to add another one?`,
      );
      if (haveContact) {
        dispatch(
          addContact({
            name: values.name,
            number: values.number,
          }),
        );
      }
      actions.resetForm();
      return;
    }

    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      }),
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.container}>
        <label className={css.label}>
          Name
          <GoPersonFill className={css.icon} />
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.spunstyle}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          Number
          <AiFillPhone className={css.icon} />
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage
            className={css.spunstyle}
            name="number"
            component="span"
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
