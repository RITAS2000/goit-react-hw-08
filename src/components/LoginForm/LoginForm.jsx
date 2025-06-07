import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { GoPasskeyFill } from 'react-icons/go';
import { GoMail } from 'react-icons/go';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password is too short').required('Required'),
});
export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.container} autoComplete="off">
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
          Log In
        </button>
      </Form>
    </Formik>
  );
}
