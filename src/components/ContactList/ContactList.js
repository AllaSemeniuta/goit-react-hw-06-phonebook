import { Box } from 'components/Box/Box';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterArr = getFilteredContacts();

  return (
    <Box as="ul">
      {filterArr.map(({ name, number, id }) => (
        <Item key={id} display="flex">
          <ContactItem name={name} number={number} id={id} />
        </Item>
      ))}
    </Box>
  );
};
