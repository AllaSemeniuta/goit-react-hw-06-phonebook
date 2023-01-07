import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
      <Toaster />
    </>
  );
};
