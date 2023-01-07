import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterValue } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      Find contacts by name{' '}
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterValue(e.currentTarget.value))}
      />
    </label>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
