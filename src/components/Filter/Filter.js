import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterValue } from 'redux/filtersSlice';
import { Form, Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Form>
      <Label htmlFor="filter">Find contacts by name </Label>
      <Input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterValue(e.currentTarget.value))}
      />
    </Form>
  );
};
