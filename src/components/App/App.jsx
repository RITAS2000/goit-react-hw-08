import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import RestrictedRoute from '../RestrictedRoute.jsx';
import PrivateRoute from '../PrivateRoute .jsx';
import Loader from '../Loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage.jsx'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage.jsx'),
);

export default function App() {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !IsRefreshing && (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    )
  );
}
