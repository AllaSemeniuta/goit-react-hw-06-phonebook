import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from 'components/GlobalStyle';
import Title from './Title/Title';
import { Box } from './Box/Box';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box px={4} height="100vh">
        {/* <Title as="h1">Phonebook</Title> */}
        <Box position="relative" top="80px">
          <ContactForm />
          <Title mb="30px">Contacts</Title>
          <Filter />
          <ContactList />
          <Toaster />
        </Box>
      </Box>
    </>
  );
};
