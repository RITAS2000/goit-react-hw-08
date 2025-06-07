import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { GoPasskeyFill } from 'react-icons/go';
import { GoPersonFill } from 'react-icons/go';
import { GoMail } from 'react-icons/go';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .max(50, 'Password is too long.')
    .required('Required'),
});
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={css.container} autoComplete="off">
        <label className={css.label}>
          Username
          <GoPersonFill className={css.icon} />
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.spunstyle}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          Email
          <GoMail className={css.icon} />
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage
            className={css.spunstyle}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          Password
          <GoPasskeyFill className={css.icon} />
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage
            className={css.spunstyle}
            name="password"
            component="span"
          />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
