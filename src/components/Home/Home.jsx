import Title from '../Title/Title';
import css from './Home.module.css';
export default function Home() {
  return (
    <div className={css.container}>
      <Title>Welcome to the Phonebook app!</Title>
      <p className={css.text}>
        This is a reliable and secure application for storing your personal and
        professional contacts. With Phonebook, you can easily add, delete, or
        edit any contact in just a few taps. The user-friendly interface helps
        you manage your contacts without confusion or delay. You’ll always have
        quick access to the people you need — right at your fingertips.
        Searching for a contact is fast and simple thanks to our built-in smart
        search feature. You can organize your contacts in any way that suits you
        best. Whether you’re keeping track of friends, family, or business
        partners, Phonebook keeps it all in one place. All your data stays safe
        and private — only you can access your contact list. The app is designed
        to save you time and make your life easier. Stay connected, stay
        organized, and enjoy the convenience of a modern contact manager.
        Download Phonebook now and take control of your contacts!
      </p>
    </div>
  );
}
