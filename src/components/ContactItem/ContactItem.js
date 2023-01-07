import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <p>
      {name} : {number}{' '}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </p>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
